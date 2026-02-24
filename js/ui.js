const UI = {

  renderSetup() {
    const screen = document.getElementById("screen");
    screen.innerHTML = "<h2>設定画面</h2><p>準備中...</p>";
  },

  renderNightInput() {
    const screen = document.getElementById("screen");
    screen.innerHTML = `<h2>夜 ${State.nightNumber}</h2>
                        <p>プレイヤー入力フェーズ</p>`;
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
