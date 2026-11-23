import test from "node:test";
import assert from "node:assert/strict";
import { answerQuestion } from "../js/core/answer-engine.js";
import { resetConversation, getActiveTopic } from "../js/core/conversation.js";
import { normalize } from "../js/core/normalization.js";
import { detectIntent } from "../js/core/intent.js";

test("normalization handles stretched greetings and common shorthand", () => {
  assert.equal(normalize("haiiiii"), "hai");
  assert.equal(normalize("hii"), "hi");
  assert.equal(normalize("heyyyy"), "hey");
  assert.equal(normalize("gmn"), "bagaimana");
  assert.equal(normalize("gak tau"), "tidak tahu");
  assert.equal(normalize("lu"), "lu");
});

test("greeting variants receive casual greetings", () => {
  for (const greeting of ["hai", "haii", "haiiiii", "halo bre", "heyyy"]) {
    resetConversation();
    const response = answerQuestion(greeting);
    assert.match(response.text, /Hai|Hey|halo/i, greeting);
  }
});

test("small talk is not routed to the finance knowledge fallback", () => {
  resetConversation();
  assert.match(answerQuestion("lagi ngapain?").text, /nemenin|standby/i);
  assert.match(answerQuestion("wkwkwkwk").text, /Wkwk|Hahaha/i);
  assert.match(answerQuestion("apa kabar?").text, /baik|Aman/i);
  assert.match(answerQuestion("hai bro, lagi apa?").text, /nemenin|standby/i);
});

test("knowledge retrieval still answers trading concepts and common typos", () => {
  resetConversation();
  const liquidity = answerQuestion("bre, apa itu liquidity?");
  assert.match(liquidity.text, /Liquidity/i);
  assert.equal(getActiveTopic()?.label, "Liquidity dan Liquidity Sweep");

  resetConversation();
  const structure = answerQuestion("bro, apa itu market structre?");
  assert.match(structure.text, /Market Structure/i);
  assert.equal(getActiveTopic()?.label, "Market Structure (Struktur Pasar)");
});

test("a greeting can prefix a real question without blocking retrieval", () => {
  resetConversation();
  const response = answerQuestion("hai bre, apa itu XAUUSD?");
  assert.match(response.text, /XAU\/USD|XAUUSD/i);
});

test("short follow-ups retain the previous topic", () => {
  resetConversation();
  answerQuestion("apa itu liquidity?");
  const example = answerQuestion("contohnya?");
  assert.match(example.text, /contoh/i);
  assert.match(example.text, /Liquidity/i);

  const why = answerQuestion("kenapa bisa begitu?");
  assert.match(why.text, /alasannya|inti pembahasannya/i);
  assert.match(why.text, /likuiditas|Liquidity/i);

  const next = answerQuestion("terus gimana?");
  assert.match(next.text, /lanjut|topik/i);
  assert.match(next.text, /Liquidity/i);
});

test("informal identity question gets a short persona answer", () => {
  resetConversation();
  const response = answerQuestion("lu siapa, bre?");
  assert.match(response.text, /Gue Zoén/);

  const capability = answerQuestion("lu bisa apa bre?");
  assert.match(capability.text, /Gue bisa bantu/);
});

test("progressive disclosure separates the opening from single-newline detail lists", () => {
  resetConversation();
  const summary = answerQuestion("apa itu cara pandang dasar dalam dunia finansial?");
  assert.match(summary.text, /fondasi paling menentukan/i);
  assert.doesNotMatch(summary.text, /Mengelola Probabilitas/);
  assert.match(summary.closing, /poin-poin teknis|contoh/i);

  const details = answerQuestion("lanjut detail");
  assert.match(details.text, /Mengelola Probabilitas/);
  assert.match(details.text, /Bertahan Lama/);
  assert.doesNotMatch(details.text, /Seseorang yang datang/);

  const example = answerQuestion("contohnya?");
  assert.match(example.text, /Seseorang yang datang/);
  assert.equal(example.related.length > 0, true);
});
