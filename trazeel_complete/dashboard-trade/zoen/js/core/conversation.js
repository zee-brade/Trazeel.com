// Session-only memory. It is intentionally not persisted or sent anywhere.
const state = {
  activeTopic: null,
  previousQuestion: "",
  previousIntent: "",
  recentTurns: []
};

export function rememberQuestion(question, intent = "question") {
  state.previousQuestion = String(question ?? "");
  state.previousIntent = intent;
  state.recentTurns.push({ role: "user", text: state.previousQuestion });
  if (state.recentTurns.length > 12) state.recentTurns.shift();
}

export function rememberResponse(response) {
  const text = typeof response === "string" ? response : response?.text;
  if (text) {
    state.recentTurns.push({ role: "assistant", text });
    if (state.recentTurns.length > 12) state.recentTurns.shift();
  }
}

export function setActiveTopic(topic) {
  state.activeTopic = topic ?? null;
}

export function getActiveTopic() {
  return state.activeTopic;
}

export function getConversationSnapshot() {
  return {
    activeTopic: state.activeTopic,
    previousQuestion: state.previousQuestion,
    previousIntent: state.previousIntent,
    recentTurns: [...state.recentTurns]
  };
}

export function resetConversation() {
  state.activeTopic = null;
  state.previousQuestion = "";
  state.previousIntent = "";
  state.recentTurns = [];
}
