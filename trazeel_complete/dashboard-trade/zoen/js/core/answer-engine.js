import { knowledge } from "../data/knowledge.js";
import { STOPWORDS } from "../data/normalization-data.js";
import { normalize, containsWholePhrase } from "./normalization.js";
import { scoreEntry } from "./matcher.js";
import { detectIntent, stripGreetingPrefix } from "./intent.js";
import {
  getActiveTopic,
  rememberQuestion,
  rememberResponse,
  setActiveTopic
} from "./conversation.js";
import { createCasualResponse, createFallbackResponse } from "./response-style.js";

const MAX_SHORT_INTENT_WORDS = 6;
const AMBIGUOUS_GENERAL_TERMS = new Set([
  "margin",
  "risiko",
  "risk",
  "modal",
  "bunga",
  "rate",
  "return",
  "profit",
  "loss",
  "pasar",
  "market",
  "trading",
  "investasi",
  "saham",
  "utang",
  "debt",
  "leverage",
  "yield",
  "inflasi"
]);

let lastModule = null;
let lastStage = null;
let currentTone = "semi-formal";
const variationIndex = Object.create(null);

function getTone(input) {
  const normalized = normalize(input);
  const casualPattern = /\b(bre|bro|bang|lu|lo|gua|gue|gw|gimana|kenapa|boncos|nyangkut|jirr?|wkwk|sih)\b/i;
  return casualPattern.test(normalized) ? "casual" : "semi-formal";
}

function humanizeText(value, tone = currentTone) {
  if (typeof value !== "string" || !value) return value;

  let text = value;

  if (tone === "casual") {
    text = text
      .replace(/\bApakah\s+(?:Anda|kamu)\s+ingin\s+(?:memahami|mempelajari|membahas|mengetahui|meninjau)\s+/gi, "Mau sekalian bahas ")
      .replace(/\bApakah\s+(?:Anda|kamu)\s+ingin\b/gi, "Mau sekalian")
      .replace(/\boleh karena itu\b/gi, "makanya")
      .replace(/\bAnda\b/gi, "lu")
      .replace(/\bSaya\b/g, "Gue")
      .replace(/\bsaya\b/g, "gue")
      .replace(/\bmerupakan\b/gi, "itu")
      .replace(/\bapabila\b/gi, "kalau")
      .replace(/\bsehingga\b/gi, "jadinya")
      .replace(/\bnamun\b/gi, "tapi")
      .replace(/\bsilakan\b/gi, "coba")
      .replace(/\btersebut\b/gi, "itu");
    return text;
  }

  text = text
    .replace(/\bApakah\s+Anda\s+ingin\s+(?:memahami|mempelajari|membahas|mengetahui|meninjau)\s+/gi, "Mau sekalian bahas ")
    .replace(/\bApakah\s+Anda\s+ingin\b/gi, "Mau sekalian")
    .replace(/\bAnda\b/gi, "kamu")
    .replace(/\bmerupakan\b/gi, "adalah")
    .replace(/\bapabila\b/gi, "kalau")
    .replace(/\bsehingga\b/gi, "jadi")
    .replace(/\bnamun\b/gi, "tetapi")
    .replace(/\boleh karena itu\b/gi, "karena itu")
    .replace(/\btersebut\b/gi, "itu");

  return text;
}

function humanizePayload(payload, tone = currentTone) {
  const response = typeof payload === "string" ? { text: payload } : { ...(payload || {}) };
  if (typeof response.text === "string") response.text = humanizeText(response.text, tone);
  if (typeof response.closing === "string") response.closing = humanizeText(response.closing, tone);
  if (Array.isArray(response.related)) {
    response.related = response.related.map(item => humanizeText(String(item), tone));
  }
  return response;
}

function makeResponse(payload, options = {}) {
  const source = typeof payload === "string"
    ? { text: payload, ...options }
    : { ...(payload || {}), ...options };
  const response = humanizePayload(source, currentTone);
  rememberResponse(response);
  return response;
}

function nextVariation(type, options) {
  if (!options.length) return "";
  const index = variationIndex[type] || 0;
  variationIndex[type] = (index + 1) % options.length;
  return options[index];
}

function countWords(value) {
  return normalize(value).split(/\s+/).filter(Boolean).length;
}

function detectShortIntent(input) {
  const nq = normalize(input).replace(/[?!.]+$/g, "").trim();
  if (!nq || countWords(nq) > MAX_SHORT_INTENT_WORDS) return null;

  if (/^(?:halo|hai|hi|hello|hey|yo|p|pagi|selamat pagi|selamat siang|selamat sore|selamat malam|salam|assalamualaikum|bre|bro)(?:\s+(?:zoen|bre|bro|bang|min|kak|gan))*$/.test(nq)) {
    return "greeting";
  }

  if (/^(?:nama kamu siapa|nama lu siapa|nama lo siapa|siapa nama kamu|siapa nama lu|siapa nama lo|siapa zoen|zoen siapa|kamu siapa|lu siapa|lo siapa|siapa kamu|siapa lu|siapa lo|nama zoen siapa)(?:\s+(?:bre|bro|bang|ya|dong))*$/.test(nq)) {
    return "identity";
  }

  if (/^(?:bisa apa|kamu bisa apa|lu bisa apa|lo bisa apa|apa yang bisa kamu lakukan|bisa bantu apa|bisa bahas apa|kamu bisa bantu apa|lu bisa bantu apa)(?:\s+(?:bre|bro|bang|ya|dong))*$/.test(nq)) {
    return "capability";
  }

  if (/^(?:terima kasih|makasih|thanks|thank you)(?:\s+(?:banyak|ya|bre|bro))*$/.test(nq)) {
    return "thanks";
  }

  if (/^(?:oke|ok|okay|sip|siap|iya|ya|yoi|mantap|paham|mengerti|ngerti)(?:\s+(?:bre|bro|deh|dong|nih|ya))*$/.test(nq)) {
    return "acknowledgement";
  }

  const intent = detectIntent(nq);
  if (["laughter", "wellbeing", "activity", "bored", "farewell"].includes(intent.type)) {
    return intent.type;
  }

  return null;
}

function buildShortIntentResponse(type, activeTopic) {
  const casual = currentTone === "casual";

  if (type === "greeting") {
    const options = casual
      ? ["Haiii! Mau ngobrol atau bahas sesuatu, bre?", "Hey! Lagi ada yang pengin lu bahas?", "Halo, bre. Gue siap nemenin diskusi."]
      : ["Halo! Ada yang ingin kamu bahas hari ini?", "Hai! Mau ngobrol santai atau membahas sesuatu?", "Halo lagi! Ada topik yang ingin kamu diskusikan?"];
    return makeResponse(nextVariation("greeting-" + currentTone, options));
  }

  if (type === "identity") {
    return makeResponse(casual
      ? "Gue Zoén. Gue nemenin lu belajar dan diskusi soal finansial, investasi, dan berbagai konsep pasar."
      : "Aku Zoén, teman belajar untuk memahami finansial, investasi, dan berbagai konsep pasar.");
  }

  if (type === "capability") {
    return makeResponse(casual
      ? "Gue bisa bantu bahas keuangan, investasi, forex, market structure, SMC/ICT, sampai manajemen risiko. Gue juga bisa kasih contoh dari materi lokal yang tersedia."
      : "Aku bisa membantu membahas keuangan, investasi, forex, market structure, SMC/ICT, dan manajemen risiko, termasuk contoh dari materi lokal yang tersedia.");
  }

  if (type === "thanks") {
    return makeResponse(activeTopic
      ? (casual ? "Sama-sama, bre. Mau lanjut bahasan tadi atau ada yang lain?" : "Sama-sama! Mau melanjutkan topik tadi atau membahas hal lain?")
      : (casual ? "Sama-sama! Ada hal lain yang mau lu bahas?" : "Sama-sama! Ada hal lain yang ingin kamu bahas?"));
  }

  if (type === "acknowledgement") {
    return makeResponse(activeTopic
      ? (casual ? "Sip. Mau lanjut ke poin berikutnya atau langsung lihat contohnya?" : "Sip. Mau lanjut ke bagian berikutnya atau langsung melihat contohnya?")
      : (casual ? "Oke, siap. Ada topik lain yang mau lu bahas?" : "Oke, siap. Ada topik lain yang ingin kamu bahas?"));
  }

  return makeResponse(createCasualResponse(type, Boolean(activeTopic)));
}

function handleIdentityAndPersona(nq) {
  const isAskingIdentity = /\b(siapa anda|anda siapa|siapa kamu|kamu siapa|siapa lu|lu siapa|siapa lo|lo siapa|perkenalkan|nama anda|nama lu|nama lo|siapa zoen|apa itu zoen|tentang zoen|tentang anda|anda ai|anda bot|asisten apa|diri anda)\b/.test(nq);
  const isAskingRole = /\b(tugas anda|tugas lu|tujuan anda|fungsi anda|peran anda|kerja anda|cara kerja|bagaimana anda bekerja|pakai internet|offline)\b/.test(nq);
  const isAskingCapability = /\b(bisa apa|lu bisa apa|lo bisa apa|bisa melakukan|bisa lakukan|bisa membantu|bisa bahas|kemampuan anda|fitur anda|kelebihan anda|materi apa)\b/.test(nq);
  const isAskingSignal = /\b(kasih sinyal|berikan sinyal|sinyal trading|prediksi harga|rekomendasi entry|rekomendasi saham|saran beli|saran jual|beli atau jual|buy atau sell)\b/.test(nq);
  const isAskingLiveData = /\b(berita hari ini|berita terbaru|update berita|update news|harga sekarang|harga live|real time|realtime|live market|kalender ekonomi hari ini)\b/.test(nq);

  if (isAskingSignal) {
    return {
      text: `Sebagai asisten edukasi finansial, tugas saya bukan memberikan sinyal transaksi, prediksi harga, maupun rekomendasi produk beli/jual tertentu.\n\nFokus utama saya adalah membantu kamu membangun cara pandang dan kemampuan menganalisis keuangan serta pasar secara mandiri, mulai dari memahami risiko, menghitung ukuran posisi, hingga menyusun rencana yang objektif.`,
      closing: "Kita bisa membahas cara menilai risiko instrumen atau menyusun rencana pengelolaan modal.",
      related: ["Bagaimana cara pandang dasar dalam dunia finansial?", "Bagaimana cara menyusun trading plan?", "Apa itu risk management dan position sizing?"]
    };
  }

  if (isAskingLiveData) {
    return {
      text: `Saya berjalan menggunakan basis pengetahuan edukasi lokal, jadi tidak terhubung ke feed berita real-time atau kuotasi harga pasar saat ini.\n\nFokus saya adalah membantu kamu memahami konsep dan kerangka berpikir agar bisa menilai informasi pasar secara mandiri.`,
      closing: "Mau sekalian bahas cara membaca data makroekonomi atau prinsip alokasi aset?",
      related: ["Bagaimana cara membaca analisis fundamental?", "Inflasi dan dampaknya terhadap daya beli uang", "Diversifikasi dan Alokasi Aset (Asset Allocation)"]
    };
  }

  if (!isAskingIdentity && !isAskingRole && !isAskingCapability) return null;

  let opening = `Aku Zoén, asisten edukasi interaktif untuk berdiskusi tentang literasi finansial, pengelolaan uang, investasi, struktur pasar, dan risiko.`;
  if (isAskingRole && !isAskingIdentity && !isAskingCapability) {
    opening = `Peran Zoén adalah menemani kamu membangun pemahaman finansial dan pasar secara bertahap, dari dasar sampai konsep yang lebih teknis.`;
  } else if (isAskingCapability && !isAskingIdentity && !isAskingRole) {
    opening = `Zoén bisa membantu membahas konsep finansial dan pasar melalui ${knowledge.length} modul materi lokal.`;
  }

  return {
    text: `${opening}\n\n**Yang bisa kita bahas:**\n• Fondasi finansial pribadi, arus kas, budgeting, dana darurat, dan pengelolaan utang.\n• Investasi, profil risiko, diversifikasi, saham, obligasi, reksa dana, emas, dan properti.\n• Makroekonomi, forex, instrumen pasar, price action, market structure, SMC/ICT, serta manajemen risiko.\n\nZoén berjalan secara lokal dan tidak mengambil data harga atau berita real-time. Zoén juga bukan penyedia sinyal transaksi maupun rekomendasi beli/jual.`,
    closing: "Topik mana yang ingin kamu mulai?",
    related: ["Dari mana sebaiknya mulai belajar finansial?", "Bagaimana cara mengatur arus kas dan dana darurat?", "Apa itu risk management dan position sizing?"]
  };
}

function isExampleRequest(nq) {
  return /\b(contoh|contohnya|simulasi|ilustrasi|ilustrasinya|gambaran|contohin)\b/.test(nq);
}

function isDetailsRequest(nq) {
  return /\b(lanjut|lanjutin|lanjutkan|detail|detailnya|poin|poinnya|poin teknis|poin teknisnya|teknisnya|terus|uraikan|perdalam|lebih rinci|lebih detail|selanjutnya)\b/.test(nq);
}

function isStandaloneProgressiveRequest(nq) {
  const normalized = normalize(nq).trim();
  if (countWords(normalized) > MAX_SHORT_INTENT_WORDS) return false;

  const standaloneExample = /^(?:contoh|contohnya|contohnya gimana|contoh dong|kasih contoh|beri contoh|berikan contoh|contohin|ilustrasi|ilustrasinya|ilustrasinya gimana|simulasi|gambaran)(?:\s+(?:dong|ya|bre|bro|nih|tuh))*$/;
  const standaloneDetails = /^(?:lanjut|lanjutin|lanjutkan|lanjut dong|lanjut ya|detail|detailnya|poin|poinnya|poin teknis|poin-poinnya|teknisnya|terus|terus dong|lebih detail|lebih rinci|perdalam|selanjutnya)(?:\s+(?:dong|ya|bre|bro|nih|tuh))*$/;
  return standaloneExample.test(normalized) || standaloneDetails.test(normalized);
}

function hasKnowledgeMatch(query) {
  return knowledge.some(entry => scoreEntry(query, entry) >= 6.5);
}

function getBodySections(body) {
  const source = String(body || "").replace(/\r\n?/g, "\n").trim();
  if (!source) return { summary: "", details: "" };

  const lines = source.split("\n");
  const nonEmptyIndexes = [];
  lines.forEach((line, index) => {
    if (line.trim()) nonEmptyIndexes.push(index);
  });

  if (!nonEmptyIndexes.length) return { summary: "", details: "" };

  const firstIndex = nonEmptyIndexes[0];
  let summaryEnd = firstIndex;
  const firstLine = lines[firstIndex].trim();
  const isStructuralLine = /^(?:[•*-]\s+|\d+[.)]\s+|(?:rumus|poin|prinsip|tiga|empat|lima|enam|berikut|contoh|catatan)\b)/i.test(firstLine);

  // Knowledge entries commonly put their opening sentence and bullet list
  // on separate single-newline lines, not blank-line-separated paragraphs.
  // Treat the first prose line as the summary and preserve everything after it.
  if (!isStructuralLine) {
    summaryEnd = firstIndex;
  }

  let summary = lines[summaryEnd].trim();
  let detailStart = summaryEnd + 1;

  // If a module begins with a short heading/lead-in, keep the next prose line
  // with it, unless that next line starts a list or a numbered point.
  const nextNonEmpty = nonEmptyIndexes.find(index => index > summaryEnd);
  if (summary.length < 85 && nextNonEmpty !== undefined) {
    const nextLine = lines[nextNonEmpty].trim();
    const nextIsList = /^(?:[•*-]\s+|\d+[.)]\s+)/.test(nextLine);
    const nextIsBlankSeparated = lines.slice(summaryEnd + 1, nextNonEmpty).some(line => !line.trim());
    if (!nextIsList && !nextIsBlankSeparated && nextLine.length < 240) {
      summary += "\n" + nextLine;
      detailStart = nextNonEmpty + 1;
    }
  }

  let details = lines.slice(detailStart).join("\n").trim();

  // Single-line entries still need progressive disclosure. Split after the
  // first complete sentence when no structural detail lines were available.
  if (!details && summary) {
    const sentenceMatch = summary.match(/^([\s\S]*?[.!?])\s+([\s\S]+)$/);
    if (sentenceMatch && sentenceMatch[1].length >= 45) {
      summary = sentenceMatch[1].trim();
      details = sentenceMatch[2].trim();
    }
  }

  return { summary, details };
}

function getFirstParagraph(body) {
  return getBodySections(body).summary;
}

function getDetailBody(body) {
  return getBodySections(body).details;
}

function getRelatedQuestions(module) {
  return Array.isArray(module?.related) ? module.related.slice(0, 3) : [];
}

function buildContextualFollowUp(query, module) {
  const nq = normalize(query);

  if (isExampleRequest(nq)) {
    lastStage = "example";
    if (module.example) {
      const related = getRelatedQuestions(module);
      return makeResponse({
        text: `Contoh untuk **${module.label}**:\n\n${module.example}`,
        closing: related.length
          ? "Mau sekalian bahas salah satu topik yang masih berkaitan?"
          : "Kalau ada bagian contoh yang ingin diperjelas, kita bisa bedah bersama.",
        related
      });
    }
    return makeResponse({
      text: `Modul **${module.label}** belum memiliki contoh khusus.`,
      closing: "Kita bisa menguraikan lagi konsep atau mekanismenya."
    });
  }

  if (isDetailsRequest(nq)) {
    const details = getDetailBody(module.body);
    if (lastStage === "details") {
      return makeResponse({
        text: `Poin-poin teknis untuk **${module.label}** sudah kita bahas. Kita bisa lanjut ke contoh penerapannya.`,
        closing: "Mau langsung lihat contohnya?",
        related: module.example ? [`Berikan contoh ${module.label}`] : getRelatedQuestions(module)
      });
    }

    lastStage = "details";
    return makeResponse({
      text: details || `Di modul **${module.label}**, belum ada poin teknis tambahan di luar penjelasan intinya.`,
      closing: module.example
        ? "Mau lanjut ke contoh penerapannya?"
        : "Ada bagian tertentu yang ingin kamu perdalam?",
      related: module.example ? [`Berikan contoh ${module.label}`] : getRelatedQuestions(module)
    });
  }

  if (/\b(kenapa|mengapa|kok|alasan)\b/.test(nq)) {
    lastStage = "details";
    const detail = getDetailBody(module.body);
    const firstDetail = detail.split(/\n\s*\n/).slice(0, 2).join("\n\n");
    return makeResponse({
      text: `Inti alasannya bisa dilihat dari poin berikut:\n\n${firstDetail || getFirstParagraph(module.body)}`,
      closing: "Kalau perlu, kita bisa lanjut ke contoh supaya mekanismenya lebih kebayang.",
      related: module.example ? [`Berikan contoh ${module.label}`] : getRelatedQuestions(module)
    });
  }

  if (/\b(maksud|maksudnya|artinya|jelasin|jelaskan)\b/.test(nq)) {
    return makeResponse({
      text: getFirstParagraph(module.body),
      closing: "Mau gue uraikan poin teknisnya atau langsung kasih contoh?",
      related: module.example ? [`Berikan contoh ${module.label}`] : getRelatedQuestions(module)
    });
  }

  return makeResponse({
    text: `Kita masih membahas **${module.label}**.`,
    closing: "Mau lanjut ke poin-poin teknisnya atau langsung lihat contoh nyata?",
    related: module.example ? [`Lanjut detail ${module.label}`, `Berikan contoh ${module.label}`] : getRelatedQuestions(module)
  });
}

function isGenericAmbiguousQuery(nq) {
  return AMBIGUOUS_GENERAL_TERMS.has(nq);
}

function getBroadCandidateScore(query, entry) {
  const queryTokens = normalize(query).split(/\s+/).filter(Boolean);
  if (!queryTokens.length) return 0;

  let best = scoreEntry(query, entry);
  const keyScores = (entry.keys || []).map(key => {
    const keyText = normalize(key);
    const keyTokens = keyText.split(/\s+/).filter(Boolean);
    const overlap = queryTokens.filter(token => keyTokens.includes(token)).length;
    if (!overlap) return 0;
    const coverage = overlap / queryTokens.length;
    if (coverage < 1) return 0;
    return 6.5 + (keyText === normalize(query) ? 1.5 : 0) + (keyTokens.length === queryTokens.length ? 0.8 : 0);
  });

  const labelTokens = normalize(entry.label).split(/\s+/).filter(Boolean);
  const labelOverlap = queryTokens.filter(token => labelTokens.includes(token)).length;
  if (labelOverlap === queryTokens.length) {
    const labelScore = 7.2 + (normalize(entry.label) === normalize(query) ? 1.5 : 0);
    best = Math.max(best, labelScore);
  }

  return Math.max(best, ...keyScores, 0);
}

function findAmbiguousCandidates(query) {
  const ranked = knowledge
    .map(entry => ({ entry, score: getBroadCandidateScore(query, entry) }))
    .filter(item => item.score >= 7)
    .sort((a, b) => b.score - a.score);

  if (ranked.length < 2) return null;
  const first = ranked[0];
  const second = ranked[1];
  if (first.entry.id === second.entry.id || (first.score - second.score) > 2) return null;

  const preferredPairs = {
    margin: ["leverage-margin", "hpp-margin-bep-usaha"],
    risiko: ["risk-management", "profil-risiko-investor"]
  };
  const preferredIds = preferredPairs[normalize(query)];
  if (preferredIds) {
    const preferredEntries = preferredIds
      .map(id => knowledge.find(entry => entry.id === id))
      .filter(Boolean);
    if (preferredEntries.length === 2) return preferredEntries;
  }

  return [first.entry, second.entry];
}

function buildAmbiguityResponse(query, candidates) {
  const first = candidates[0];
  const second = candidates[1];
  const casual = currentTone === "casual";
  return makeResponse({
    text: casual
      ? `Istilah **${query}** bisa mengarah ke beberapa pembahasan. Maksud lu yang mana?\n\n1. **${first.label}**\n2. **${second.label}**`
      : `Istilah **${query}** bisa merujuk ke beberapa topik. Yang kamu maksud yang mana?\n\n1. **${first.label}**\n2. **${second.label}**`,
    closing: casual ? "Pilih salah satu, nanti gue jelaskan dari dasar." : "Pilih salah satu, nanti aku jelaskan dari dasarnya.",
    related: [`Jelaskan ${first.label}`, `Jelaskan ${second.label}`]
  });
}

function resetModuleMemoryIfNeeded(activeTopic) {
  if (!activeTopic) {
    lastModule = null;
    lastStage = null;
    return;
  }

  if (!lastModule || lastModule.id !== activeTopic.id) {
    lastModule = activeTopic;
    lastStage = "summary";
  }
}

export function answerQuestion(query) {
  const original = String(query ?? "").trim();
  if (!original) return makeResponse("Tulis dulu pertanyaan atau topik yang mau dibahas.");

  currentTone = getTone(original);
  const initialIntent = detectIntent(original);
  rememberQuestion(original, initialIntent.type);

  let activeTopic = getActiveTopic();
  resetModuleMemoryIfNeeded(activeTopic);
  activeTopic = lastModule || activeTopic;

  // Short intents are intercepted before searching the local knowledge modules.
  const shortIntent = detectShortIntent(original);
  if (shortIntent) return buildShortIntentResponse(shortIntent, activeTopic);

  // A greeting can prefix a genuine question; only the greeting prefix is removed.
  const cleanedQuery = stripGreetingPrefix(original);
  const queryForMatching = cleanedQuery || original;
  const nq = normalize(queryForMatching);
  const intent = detectIntent(queryForMatching);
  const cleanedShortIntent = detectShortIntent(queryForMatching);
  if (cleanedShortIntent) return buildShortIntentResponse(cleanedShortIntent, activeTopic);

  const queryHasKnownTopic = hasKnowledgeMatch(queryForMatching);
  if (intent.type === "followup" && activeTopic && !queryHasKnownTopic) {
    return buildContextualFollowUp(queryForMatching, activeTopic);
  }

  if (activeTopic && !queryHasKnownTopic && isStandaloneProgressiveRequest(nq)) {
    return buildContextualFollowUp(queryForMatching, activeTopic);
  }

  const identityResponse = handleIdentityAndPersona(nq);
  if (identityResponse) return makeResponse(identityResponse);

  if (containsWholePhrase(nq, "belajar dari mana") ||
      containsWholePhrase(nq, "mulai belajar") ||
      containsWholePhrase(nq, "tahapan belajar") ||
      nq === "cara trading" ||
      nq === "bagaimana cara trading" ||
      nq === "belajar trading" ||
      nq === "belajar finansial" ||
      nq === "belajar keuangan") {
    setActiveTopic(null);
    lastModule = null;
    lastStage = null;
    return makeResponse({
      text: `Kalau ingin membangun pemahaman finansial dan pasar, urutannya bisa dimulai dari fondasi pribadi, lalu bergerak ke instrumen dan teknik:\n\n1. **Cara pandang dan batasan modal:** pahami probabilitas, risiko, serta perbedaan uang kebutuhan dan uang yang siap menanggung risiko.\n2. **Arus kas dan dana darurat:** kenali pemasukan, pengeluaran, utang, dan bantalan keuangan.\n3. **Prinsip investasi dan kelas aset:** pelajari profil risiko, diversifikasi, serta karakter tiap instrumen.\n4. **Struktur pasar dan konteks makro:** pelajari price action, market structure, dan pengaruh data ekonomi.\n5. **Manajemen risiko dan evaluasi:** biasakan menghitung ukuran posisi dan mencatat keputusan dalam jurnal.`,
      closing: "Bagian mana yang ingin kamu pelajari dulu?",
      related: ["Bagaimana cara pandang dasar dalam dunia finansial?", "Bagaimana cara mengatur arus kas, budgeting, dan dana darurat?", "Apa itu risk management dan position sizing?"]
    });
  }

  const meaningfulTokens = nq
    .replace(/\//g, "")
    .split(" ")
    .filter(token => token.length > 2 && !STOPWORDS.has(token) &&
      !["contoh", "contohnya", "simulasi", "ilustrasi", "gambaran"].includes(token));

  if (meaningfulTokens.length === 0 && activeTopic) {
    return buildContextualFollowUp(queryForMatching, activeTopic);
  }

  if (isGenericAmbiguousQuery(nq)) {
    const candidates = findAmbiguousCandidates(nq);
    if (candidates) return buildAmbiguityResponse(nq, candidates);
  }

  const ranked = knowledge
    .map(entry => ({ entry, score: scoreEntry(queryForMatching, entry) }))
    .sort((a, b) => b.score - a.score);

  if (ranked[0] && ranked[0].score >= 6.5) {
    const top = ranked[0];
    const second = ranked[1];
    const isComparison = /\b(perbedaan|vs|dibanding|sama)\b/.test(nq);

    if (isComparison && second && second.score >= 6.5 && top.entry.id !== second.entry.id) {
      setActiveTopic(top.entry);
      lastModule = top.entry;
      lastStage = "summary";
      const summary1 = getFirstParagraph(top.entry.body);
      const summary2 = getFirstParagraph(second.entry.body);
      return makeResponse({
        text: `Kita bandingkan dua konsep ini:\n\n• **${top.entry.label}:** ${summary1}\n\n• **${second.entry.label}:** ${summary2}`,
        closing: "Mau kita bedah salah satunya lebih dalam?",
        related: [`Jelaskan ${top.entry.label}`, `Jelaskan ${second.entry.label}`]
      });
    }

    setActiveTopic(top.entry);
    lastModule = top.entry;
    lastStage = "summary";

    const summary = getFirstParagraph(top.entry.body);
    return makeResponse({
      text: `**${top.entry.label}**\n\n${summary}`,
      closing: "Mau lanjut ke poin-poin teknisnya atau langsung lihat contoh nyata?",
      related: [
        `Lanjut detail ${top.entry.label}`,
        ...(top.entry.example ? [`Berikan contoh ${top.entry.label}`] : [])
      ]
    });
  }

  setActiveTopic(null);
  lastModule = null;
  lastStage = null;
  return makeResponse(createFallbackResponse());
}
