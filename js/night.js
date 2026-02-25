const Night = {

  resolve() {
    console.log("夜処理解決開始");

    // ここに遅延攻撃解決 → 無効化 → 防御 → 攻撃…を後で書く

    State.phase = "night_resolve";
    Game.nextPhase();
  },

  handleNightAction() {
    const player = State.players[State.nightInputIndex];
    const screen = document.getElementById("screen");

    if (player.role.type === "Detect") {
      UI.renderSeerAction(player);
    } else {
      screen.innerHTML = `
        <p>この役職は初夜に行動できません。</p>
        <button onclick="UI.nextNightPlayer()">次へ</button>
      `;
    }
  },

  nextNightPlayer() {
    State.nightInputIndex++;

    if (State.nightInputIndex >= State.players.length) {
      State.phase = "night_resolve";
      Game.nextPhase();
      return;
    }

    UI.renderNightTurn();
  }

};
