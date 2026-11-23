import { STOPWORDS } from "../data/normalization-data.js";
import { normalize, editDistance, containsWholePhrase } from "./normalization.js";

function tokensMatch(queryToken, keyToken) {
  if (queryToken === keyToken) return true;
  if (queryToken.length >= 4 && keyToken.length >= 4) {
    return editDistance(queryToken, keyToken) <= (keyToken.length >= 7 ? 2 : 1);
  }
  return false;
}

export function matchKeyword(queryTokens, queryFull, queryNoSlash, rawKey) {
  const nk = normalize(rawKey);
  const nkNoSlash = nk.replace(/\//g, "");

  if (containsWholePhrase(queryFull, nk) || (nkNoSlash !== nk && containsWholePhrase(queryNoSlash, nkNoSlash))) {
    return nk.includes(" ") ? 10 : 8;
  }

  const keyWords = nkNoSlash.split(" ").filter(word => word && !STOPWORDS.has(word));
  if (!keyWords.length) return 0;

  const matched = keyWords.filter(keyWord => queryTokens.some(queryToken => tokensMatch(queryToken, keyWord)));
  const ratio = matched.length / keyWords.length;

  if (keyWords.length > 1 && matched.length === keyWords.length) return 9;
  if (keyWords.length > 1 && ratio >= 0.67) return 5.5 + ratio * 3.5;

  if (keyWords.length === 1 && matched.length === 1) {
    const exact = queryTokens.includes(keyWords[0]);
    return exact ? 8 : 6.5;
  }

  return 0;
}

export function scoreEntry(query, entry) {
  const nq = normalize(query);
  const nqNoSlash = nq.replace(/\//g, "");
  const queryTokens = nqNoSlash.split(" ").filter(Boolean);

  let bestScore = 0;

  if (entry.id === "manajemen-posisi") {
    const hasTpTradingContext = /\b(take profit|pasang tp|set tp|kena tp|hit tp|sl dan tp|sl tp|target tp)\b/.test(nq);
    if (hasTpTradingContext) bestScore = Math.max(bestScore, 9);
  }

  for (const key of entry.keys) {
    const s = matchKeyword(queryTokens, nq, nqNoSlash, key);
    if (s > bestScore) bestScore = s;
  }

  if (bestScore >= 6.5) {
    const labelTokens = normalize(entry.label)
      .replace(/\//g, "")
      .split(" ")
      .filter(t => t.length > 3 && !STOPWORDS.has(t));

    for (const lt of labelTokens) {
      if (queryTokens.some(qt => qt === lt || (lt.length >= 5 && editDistance(qt, lt) <= 1))) {
        bestScore += 1;
      }
    }
  }

  return bestScore;
}
