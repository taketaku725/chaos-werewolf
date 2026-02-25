const UI = {

  renderSetup() {
    const screen = document.getElementById("screen");
    screen.innerHTML = `
      <h2>設定</h2>
      <label>人数:
        <input type="number" id="playerCount" value="9" min="3" max="20">
      </label>
      <br><br>
      <button onclick="Game.startGame()">ゲーム開始</button>
    `;
  },

  renderRoleReveal() {
    const screen = document.getElementById("screen");
    const player = State.players[State.roleRevealIndex];

    screen.innerHTML = `
      <h2>${player.name}</h2>
      <p>あなたの役職を確認してください</p>
      <button onclick="UI.showRole()">見る</button>
    `;
  },

  showRole() {
    const player = State.players[State.roleRevealIndex];
    const screen = document.getElementById("screen");

    screen.innerHTML = `
      <h2>${player.name}</h2>
      <h3>${player.role.name}</h3>
      <p>陣営: ${player.alignment}</p>
      <button onclick="UI.hideRole()">隠す</button>
    `;
  },

  hideRole() {
    State.roleRevealIndex++;

    if (State.roleRevealIndex >= State.players.length) {
      State.phase = "night_input";
      State.nightNumber = 0;
      UI.renderNightInput();
      return;
    }

    UI.renderRoleReveal();
  },

  renderNightInput() {
    const screen = document.getElementById("screen");
    screen.innerHTML = `
      <h2>初夜</h2>
      <p>役職確認が完了しました。</p>
      <button onclick="Game.nextPhase()">夜を進める</button>
    `;
  },

  renderNightTurn() {
    const screen = document.getElementById("screen");
    const player = State.players[State.nightInputIndex];

    screen.innerHTML = `
      <h2>初夜</h2>
      <h3>${player.name}</h3>
      <button onclick="UI.handleNightAction()">確認</button>
    `;
  },

  renderSeerAction(player) {
    const screen = document.getElementById("screen");

    const targets = State.players
      .filter(p => p.id !== player.id)
      .map(p => `<button onclick="UI.resolveSeer(${p.id})">${p.name}</button>`)
      .join("<br>");

    screen.innerHTML = `
      <h3>占う相手を選んでください</h3>
      ${targets}
    `;
  },

  resolveSeer(targetId) {
    const player = State.players[State.nightInputIndex];
    const target = State.players.find(p => p.id === targetId);
    const screen = document.getElementById("screen");

    screen.innerHTML = `
      <p>${target.name} の判定は...</p>
      <h3>${target.role.result}</h3>
      <button onclick="UI.nextNightPlayer()">次へ</button>
    `;
  },

  renderDay() {
    const screen = document.getElementById("screen");
    screen.innerHTML = "<h2>朝</h2><p>死亡者発表など</p>";
  },

  renderVote() {
    const screen = document.getElementById("screen");
    screen.innerHTML = "<h2>投票フェーズ</h2>";
  },

  renderResult() {
    const screen = document.getElementById("screen");
    screen.innerHTML = "<h2>ゲーム終了</h2>";
  }
};
