import { answerQuestion } from "../core/answer-engine.js";
import { resetConversation } from "../core/conversation.js";

const SECOND_BUBBLE_DELAY = 700;

export function initChat() {
  const chat = document.getElementById("chat");
  const input = document.getElementById("input");
  const form = document.getElementById("form");
  const send = document.getElementById("send");
  const intro = document.getElementById("intro");
  const topics = document.getElementById("topics");
  const resetBtn = document.getElementById("resetBtn");

  if (!chat || !input || !form || !send || !intro || !topics || !resetBtn) {
    console.error("Zoén chat initialization failed: one or more required HTML elements were not found.");
    return;
  }

  let activeTurn = 0;

  function renderFormattedText(container, text, typingSegments = null) {
    const lines = String(text || "").split("\n");
    let listEl = null;
    let listType = null;

    const flushList = () => {
      if (listEl) {
        container.appendChild(listEl);
        listEl = null;
        listType = null;
      }
    };

    const appendInlineFormatted = (target, str) => {
      const parts = str.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/g);
      parts.forEach(part => {
        if (part.startsWith("**") && part.endsWith("**")) {
          const strong = document.createElement("strong");
          const value = part.slice(2, -2);
          if (typingSegments) {
            const textNode = document.createTextNode("");
            strong.appendChild(textNode);
            typingSegments.push({ node: textNode, text: value });
          } else {
            strong.textContent = value;
          }
          target.appendChild(strong);
        } else if (part.startsWith("*") && part.endsWith("*") && part.length > 2) {
          const em = document.createElement("em");
          const value = part.slice(1, -1);
          if (typingSegments) {
            const textNode = document.createTextNode("");
            em.appendChild(textNode);
            typingSegments.push({ node: textNode, text: value });
          } else {
            em.textContent = value;
          }
          target.appendChild(em);
        } else {
          const textNode = document.createTextNode(typingSegments ? "" : part);
          target.appendChild(textNode);
          if (typingSegments && part) typingSegments.push({ node: textNode, text: part });
        }
      });
    };

    lines.forEach(rawLine => {
      const line = rawLine.trim();
      if (!line) {
        flushList();
        return;
      }

      if (line.startsWith("• ")) {
        if (listType !== "ul") {
          flushList();
          listEl = document.createElement("ul");
          listType = "ul";
        }
        const li = document.createElement("li");
        appendInlineFormatted(li, line.slice(2));
        listEl.appendChild(li);
      } else if (/^\d+\.\s/.test(line)) {
        if (listType !== "ol") {
          flushList();
          listEl = document.createElement("ol");
          listType = "ol";
        }
        const li = document.createElement("li");
        appendInlineFormatted(li, line.replace(/^\d+\.\s/, ""));
        listEl.appendChild(li);
      } else {
        flushList();
        const p = document.createElement("p");
        appendInlineFormatted(p, line);
        container.appendChild(p);
      }
    });

    flushList();
  }

  function addMessage(payload, who, options = {}) {
    const message = typeof payload === "string" ? { text: payload } : (payload || {});
    const row = document.createElement("div");
    row.className = "message " + who;

    if (who === "bot") {
      const avatar = document.createElement("div");
      avatar.className = "avatar";
      avatar.textContent = "Z";
      row.appendChild(avatar);
    }

    const contentWrap = document.createElement("div");
    contentWrap.className = "msg-content";

    const bubble = document.createElement("div");
    bubble.className = "bubble";
    const typingSegments = options.animate ? [] : null;
    renderFormattedText(bubble, message.text || "", typingSegments);

    if (message.closing) {
      const closingEl = document.createElement("p");
      closingEl.className = "closing-note";
      if (typingSegments) {
        closingEl.textContent = "";
        typingSegments.push({ node: closingEl, text: message.closing });
      } else {
        closingEl.textContent = message.closing;
      }
      bubble.appendChild(closingEl);
    }

    contentWrap.appendChild(bubble);

    if (who === "bot" && Array.isArray(message.related) && message.related.length > 0) {
      const chipsWrap = document.createElement("div");
      chipsWrap.className = "related-chips";
      message.related.forEach(relQ => {
        const chip = document.createElement("button");
        chip.type = "button";
        chip.className = "chip";
        chip.textContent = relQ;
        chip.addEventListener("click", () => sendQuestion(relQ));
        chipsWrap.appendChild(chip);
      });
      contentWrap.appendChild(chipsWrap);
    }

    const meta = document.createElement("div");
    meta.className = "meta";
    meta.textContent = who === "bot" ? "Zoén · Edukasi Finansial" : "Anda";
    contentWrap.appendChild(meta);

    row.appendChild(contentWrap);
    chat.appendChild(row);
    row.scrollIntoView({ behavior: "smooth", block: "end" });
    return { row, typingSegments: typingSegments || [] };
  }

  async function revealTyping(segments, turnId) {
    const totalLength = segments.reduce((sum, segment) => sum + segment.text.length, 0);
    const chunkSize = totalLength > 1200 ? 5 : totalLength > 500 ? 3 : 2;
    const interval = totalLength > 1200 ? 12 : totalLength > 500 ? 16 : 21;

    for (const segment of segments) {
      for (let index = 0; index < segment.text.length; index += chunkSize) {
        if (turnId !== activeTurn) return false;
        segment.node.textContent += segment.text.slice(index, index + chunkSize);
        const current = segment.text.slice(index, index + chunkSize);
        const hasPause = /[.!?…,:;]$/.test(current.trim());
        await new Promise(resolve => setTimeout(resolve, hasPause ? interval + 42 : interval));
      }
    }
    return turnId === activeTurn;
  }

  async function addBotMessageWithTyping(payload, turnId) {
    const result = addMessage(payload, "bot", { animate: true });
    await revealTyping(result.typingSegments, turnId);
  }

  function createThinkingIndicator(label = "Sedang menyusun penjelasan...") {
    const row = document.createElement("div");
    row.className = "thinking-row";

    const avatar = document.createElement("div");
    avatar.className = "avatar";
    avatar.textContent = "Z";

    const indicator = document.createElement("div");
    indicator.className = "thinking-indicator";

    const dots = document.createElement("div");
    dots.className = "thinking-dots";
    for (let index = 0; index < 3; index += 1) {
      dots.appendChild(document.createElement("span"));
    }

    const labelEl = document.createElement("span");
    labelEl.className = "thinking-label";
    labelEl.textContent = label;

    indicator.append(dots, labelEl);
    row.append(avatar, indicator);
    return row;
  }

  function splitBotPayload(payload) {
    const message = typeof payload === "string" ? { text: payload } : { ...(payload || {}) };
    const paragraphs = String(message.text || "")
      .split(/\n\s*\n/)
      .map(part => part.trim())
      .filter(Boolean);

    if (message.closing) {
      if (!paragraphs.length) return null;
      if (paragraphs.length === 1) {
        return {
          first: { text: paragraphs[0] },
          second: {
            closing: String(message.closing).trim(),
            related: Array.isArray(message.related) ? message.related : []
          }
        };
      }

      return {
        first: { text: paragraphs.slice(0, -1).join("\n\n") },
        second: {
          text: paragraphs[paragraphs.length - 1],
          closing: String(message.closing).trim(),
          related: Array.isArray(message.related) ? message.related : []
        }
      };
    }

    if (paragraphs.length <= 1) return null;

    return {
      first: { text: paragraphs.slice(0, -1).join("\n\n") },
      second: {
        text: paragraphs[paragraphs.length - 1],
        related: Array.isArray(message.related) ? message.related : []
      }
    };
  }

  async function deliverBotResponse(payload, turnId) {
    if (turnId !== activeTurn) return;

    const split = splitBotPayload(payload);
    if (!split) {
      await addBotMessageWithTyping(payload, turnId);
      if (turnId === activeTurn) send.disabled = false;
      return;
    }

    await addBotMessageWithTyping(split.first, turnId);
    if (turnId !== activeTurn) return;

    const typingEl = createThinkingIndicator("Menyiapkan lanjutan...");
    chat.appendChild(typingEl);
    typingEl.scrollIntoView({ behavior: "smooth", block: "end" });

    setTimeout(async () => {
      if (turnId !== activeTurn) return;
      typingEl.remove();
      await addBotMessageWithTyping(split.second, turnId);
      if (turnId === activeTurn) send.disabled = false;
    }, SECOND_BUBBLE_DELAY);
  }

  function sendQuestion(q) {
    const value = String(q ?? "").trim();
    if (!value || send.disabled) return;

    const turnId = ++activeTurn;
    intro.style.display = "none";
    topics.style.display = "none";
    resetBtn.style.display = "inline-block";

    addMessage(value, "user");
    input.value = "";
    input.style.height = "auto";
    send.disabled = true;

    const thinkingEl = createThinkingIndicator();
    chat.appendChild(thinkingEl);
    thinkingEl.scrollIntoView({ behavior: "smooth", block: "end" });

    const delay = 1500 + Math.floor(Math.random() * 701);
    setTimeout(() => {
      if (turnId !== activeTurn) return;
      thinkingEl.remove();

      let response;
      try {
        response = answerQuestion(value);
      } catch (error) {
        console.error("Zoén failed to generate a response:", error);
        response = {
          text: "Maaf, ada kendala saat menyusun jawaban. Coba kirim ulang pertanyaannya.",
          related: []
        };
      }

      deliverBotResponse(response, turnId).catch(error => {
        console.error("Zoén response animation failed:", error);
        if (turnId === activeTurn) {
          addMessage({ text: response?.text || "Maaf, terjadi kendala saat menampilkan jawaban." }, "bot");
          send.disabled = false;
        }
      });
    }, delay);
  }

  resetBtn.addEventListener("click", () => {
    activeTurn += 1;
    resetConversation();
    chat.innerHTML = "";
    addMessage(
      "Halo, selamat datang kembali. Aku Zoén, teman diskusi untuk memahami fondasi literasi finansial, pengelolaan keuangan, prinsip investasi, struktur pasar, dan manajemen risiko. Pilih topik di atas atau langsung tanyakan hal yang ingin kamu bahas.",
      "bot"
    );
    intro.style.display = "block";
    topics.style.display = "grid";
    resetBtn.style.display = "none";
    send.disabled = false;
    input.value = "";
    input.style.height = "auto";
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  form.addEventListener("submit", event => {
    event.preventDefault();
    sendQuestion(input.value);
  });

  input.addEventListener("keydown", event => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      form.requestSubmit();
    }
  });

  input.addEventListener("input", () => {
    input.style.height = "auto";
    input.style.height = Math.min(input.scrollHeight, 130) + "px";
  });

  document.querySelectorAll(".topic").forEach(button => {
    button.addEventListener("click", () => sendQuestion(button.dataset.q));
  });
}
