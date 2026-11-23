import { normalize } from "./normalization.js";

const replyIndex = Object.create(null);
const casualReplies = {
  greeting: [
    "Haiii! Ada yang mau dibahas hari ini?",
    "Hey, halo! Lagi pengin ngobrol santai atau bahas sesuatu?",
    "Hai! Gue siap nemenin diskusi. Mau mulai dari mana?"
  ],
  laughter: [
    "Wkwk. Ada yang lucu, atau kita lanjut bahasan tadi?",
    "Hahaha. Oke, gue tangkap energi ketawanya. Mau lanjut ngobrol?",
    "Wkwkwk, lanjut. Ada yang mau lu ceritain?"
  ],
  wellbeing: [
    "Gue baik, siap nemenin diskusi. Lu sendiri gimana?",
    "Aman, siap diajak mikir. Kabar lu gimana?"
  ],
  activity: [
    "Lagi nemenin lu ngobrol nih. Ada yang mau dibahas?",
    "Lagi standby di sini. Mau ngobrol santai atau bahas trading?"
  ],
  bored: [
    "Wkwk, lagi gabut rupanya. Mau ngobrol random atau bedah satu topik trading?",
    "Gabut bisa jadi pintu diskusi. Ada hal yang lagi kepikiran?"
  ],
  acknowledgement: [
    "Sip. Mau lanjut dari pembahasan tadi atau pindah topik?",
    "Oke, aman. Kita lanjut kapan saja."
  ],
  farewell: [
    "Sampai nanti! Jaga diri, ya.",
    "Oke, sampai ketemu lagi."
  ]
};

function nextReply(type) {
  const options = casualReplies[type] ?? [];
  if (!options.length) return "";
  const index = replyIndex[type] ?? 0;
  replyIndex[type] = (index + 1) % options.length;
  return options[index];
}

export function createCasualResponse(type, hasActiveTopic = false) {
  let text = nextReply(type);
  if (type === "laughter" && hasActiveTopic) {
    text = "Wkwk. Mau lanjut bahasan tadi atau ada hal lain yang kepikiran?";
  }
  return { text, related: [] };
}

export function buildEducationalIntro(query, entry) {
  const nq = normalize(query);

  if (/\b(kenapa|mengapa|kok)\b/.test(nq)) {
    return `Oke, kita telusuri kenapa **${entry.label}** bisa terjadi.`;
  }
  if (/\b(bagaimana|cara|langkah)\b/.test(nq)) {
    return `Kita urutkan cara kerja **${entry.label}**.`;
  }
  if (/\b(contoh|simulasi|ilustrasi|praktik)\b/.test(nq)) {
    return `Kita lihat gambaran praktis **${entry.label}**.`;
  }
  if (/\b(rugi|loss|mc|bingung|takut|susah|sulit|utang|boncos)\b/.test(nq)) {
    return `Kita bahas **${entry.label}** dari bagian yang paling relevan dengan situasi itu.`;
  }
  return `Oke, kita bahas **${entry.label}**.`;
}

export function createFallbackResponse() {
  return {
    text: "Kayaknya gue belum nangkep maksud pertanyaan lu. Coba ceritain dengan kalimat lain, atau sebut istilah yang lagi lu maksud. Kalau topiknya di luar materi Zoén, gue bakal bilang terus terang, bukan ngarang.",
    related: [
      "Apa itu market structure?",
      "Apa itu liquidity dalam trading?",
      "Bagaimana cara kerja risk management?"
    ]
  };
}
