import { SLANG_AND_TYPO_MAP } from "../data/normalization-data.js";

function normalizeStretchedToken(token) {
  const lower = token.toLowerCase();

  // Common greetings are normalized explicitly so "haiii", "heyyy", etc. work.
  if (/^h+a+i+$/.test(lower)) return "hai";
  if (/^hi+$/.test(lower)) return "hi";
  if (/^he+y+$/.test(lower)) return "hey";
  if (/^yo+$/.test(lower)) return "yo";
  if (/^h+a+l+o+$/.test(lower)) return "halo";
  if (/^h+e+l+o+$/.test(lower) || /^h+e+l+l+o+$/.test(lower)) return "hello";
  if (/^(?:wk){2,}w?k*$/.test(lower)) return "wkwk";

  // Collapse only 3+ repeated letters. Doubled letters in words such as "book"
  // are left intact, while "bagussss" becomes "bagus".
  return lower.replace(/([a-z])\1{2,}/g, "$1");
}

export function normalize(str) {
  const cleaned = String(str ?? "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^\p{L}\p{N}_\s/.-]/gu, " ")
    .replace(/[.\-]{2,}/g, " ")
    .replace(/\s+/g, " ")
    .trim();

  if (!cleaned) return "";

  return cleaned
    .split(" ")
    .flatMap(token => {
      const stretched = normalizeStretchedToken(token);
      const noSlash = stretched.replace(/\//g, "");
      const mapped = SLANG_AND_TYPO_MAP[stretched]
        ?? SLANG_AND_TYPO_MAP[noSlash]
        ?? stretched;
      return mapped.split(/\s+/).filter(Boolean);
    })
    .join(" ");
}

export function editDistance(a, b) {
  if (a === b) return 0;
  const alen = a.length;
  const blen = b.length;
  if (Math.abs(alen - blen) > 2) return 3;

  const dp = Array.from({ length: alen + 1 }, () => new Array(blen + 1).fill(0));
  for (let i = 0; i <= alen; i++) dp[i][0] = i;
  for (let j = 0; j <= blen; j++) dp[0][j] = j;

  for (let i = 1; i <= alen; i++) {
    for (let j = 1; j <= blen; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      dp[i][j] = Math.min(
        dp[i - 1][j] + 1,
        dp[i][j - 1] + 1,
        dp[i - 1][j - 1] + cost
      );
      if (i > 1 && j > 1 && a[i - 1] === b[j - 2] && a[i - 2] === b[j - 1]) {
        dp[i][j] = Math.min(dp[i][j], dp[i - 2][j - 2] + 1);
      }
    }
  }
  return dp[alen][blen];
}

export function escapeRegex(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

export function containsWholePhrase(text, phrase) {
  if (!phrase) return false;
  const pattern = new RegExp("(?:^|\\s)" + escapeRegex(phrase) + "(?:$|\\s)");
  return pattern.test(text);
}
