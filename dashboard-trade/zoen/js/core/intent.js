import { normalize } from "./normalization.js";

const GREETING_ONLY = /^(?:hai|halo|hello|hi|hey|yo|assalamualaikum|salam|p|tes|test|selamat pagi|selamat siang|selamat sore|selamat malam)(?:\s+(?:bre|bro|bang|min|kak|gan|zoen))*$/i;
const GREETING_PREFIX = /^(?:hai|halo|hello|hi|hey|yo|assalamualaikum|salam|selamat pagi|selamat siang|selamat sore|selamat malam)(?:\s+(?:bre|bro|bang|min|kak|gan|zoen))?\s+/i;
const FOLLOW_UP_ONLY = /^(?:terus|selanjutnya|lanjut|lanjutin|lanjutkan|contoh|contohnya|simulasi|ilustrasi|kenapa|mengapa|kok|gimana|bagaimana|maksud|maksudnya|jelasin lagi|jelaskan lagi|lebih detail|perdalam|apa hubungannya|yang tadi|itu gimana|begitu gimana|terus kenapa|kenapa begitu|kenapa bisa begitu|kok bisa begitu|bagaimana maksudnya|gimana maksudnya|maksud dari itu|jelasin dong|jelaskan dong|kasih contoh|contoh dong|contohin|lebih jelas|kalau begitu|selanjutnya kenapa|selanjutnya bagaimana|selanjutnya gimana|lanjut bagaimana|lanjut gimana|terus gimana|lanjut dong)(?:\s+(?:dong|bre|bro|ya|sih|nih|tuh))*$/i;

export function stripGreetingPrefix(input) {
  return normalize(input).replace(GREETING_PREFIX, "").trim();
}

export function isGreeting(input) {
  return GREETING_ONLY.test(normalize(input));
}

export function isContextualFollowUp(input) {
  const normalized = normalize(input).replace(/[?!.]+$/g, "").trim();
  if (FOLLOW_UP_ONLY.test(normalized)) return true;
  const words = normalized.split(/\s+/).filter(Boolean);
  const refersBack = /\b(itu|ini|tadi|begitu|gitu|yang dimaksud)\b/.test(normalized);
  const asksAboutIt = /\b(kenapa|mengapa|kok|gimana|bagaimana|maksud|jelas|hubungan)\b/.test(normalized);
  return words.length <= 6 && refersBack && asksAboutIt;
}

export function detectIntent(input) {
  const normalized = normalize(input).replace(/[?!.]+$/g, "").trim();

  if (!normalized) return { type: "empty", normalized };
  if (isGreeting(normalized)) return { type: "greeting", normalized };
  if (/^(?:terima kasih|makasih|thanks|thank you)(?:\s+(?:banyak|ya|bre|bro))*$/.test(normalized)) {
    return { type: "thanks", normalized };
  }
  if (isContextualFollowUp(normalized)) return { type: "followup", normalized };
  if (/^(?:(?:wk){2,}w?k*|haha+|hehe+|hihi+|lol+|lmao+)(?:\s+(?:aja|doang|nih|bre|bro))*$/.test(normalized)) {
    return { type: "laughter", normalized };
  }
  if (/^(?:(?:apa|gimana|bagaimana) kabar|(?:lu|lo|kamu) apa kabar|apa kabar (?:lu|lo|kamu|bre|bro))$/.test(normalized)) {
    return { type: "wellbeing", normalized };
  }
  if (/^(?:lagi apa|lagi ngapain|sedang apa|(?:lu|lo|kamu) lagi apa|lagi apa (?:lu|lo|kamu|bre|bro))$/.test(normalized)) {
    return { type: "activity", normalized };
  }
  if (/\bgabut\b/.test(normalized) && normalized.split(" ").length <= 5) {
    return { type: "bored", normalized };
  }
  if (/^(?:oke|ok|okay|sip|siap|iya|ya|yoi|mantap|paham|ngerti)(?:\s+(?:bre|bro|deh|dong|nih))*$/.test(normalized)) {
    return { type: "acknowledgement", normalized };
  }
  if (/^(?:dadah|bye|goodbye|sampai jumpa|see you)$/.test(normalized)) {
    return { type: "farewell", normalized };
  }

  return { type: "question", normalized };
}
