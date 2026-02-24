const Night = {

  resolve() {
    console.log("夜処理解決開始");

    // ここに遅延攻撃解決 → 無効化 → 防御 → 攻撃…を後で書く

    State.phase = "night_resolve";
    Game.nextPhase();
  }

};
