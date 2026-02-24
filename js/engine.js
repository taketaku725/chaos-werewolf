const Game = {

  async init() {
    await Role.load();
    UI.renderSetup();
  },

  startGame() {
    this.createPlayers();
    State.phase = "night_input";
    State.nightNumber = 0;
    Role.assign(); // 初夜開始時に配布
    UI.renderNightInput();
  },

  createPlayers() {
    State.players = [];
    for (let i = 1; i <= State.settings.totalPlayers; i++) {
      State.players.push({
        id: i,
        name: "Player" + i,
        role: null,
        alignment: null,
        alive: true
      });
    }
  }
};
