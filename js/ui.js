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
  `  ;
  },

  renderNightInput() {
    const screen = document.getElementById("screen");
    const players = State.players
      .map(p => `<li>${p.name} - ${p.role.name}</li>`)
      .join("");

    screen.innerHTML = `
      <h2>初夜</h2>
      <ul>${players}</ul>
  `  ;
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
