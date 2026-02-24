const Game = {

  init() {
    UI.renderSetup();
  },

  nextPhase() {
    switch (State.phase) {
      case "setup":
        State.phase = "night_input";
        State.nightNumber = 0;
        UI.renderNightInput();
        break;

      case "night_input":
        State.phase = "night_resolve";
        Night.resolve();
        break;

      case "night_resolve":
        State.phase = "day";
        UI.renderDay();
        break;

      case "day":
        State.phase = "vote";
        UI.renderVote();
        break;

      case "vote":
        Vote.resolve();
        break;

      case "result":
        UI.renderResult();
        break;
    }
  }
};
