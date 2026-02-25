const Game = {

  async init() {
    await Role.load();
    UI.renderSetup();
  },

  startGame() {
    this.createPlayers();
    Role.assign();

    State.phase = "role_reveal";
    State.roleRevealIndex = 0;

    UI.renderRoleReveal();

    State.phase = "night_input";
    State.nightInputIndex = 0;
    UI.renderNightTurn();
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
