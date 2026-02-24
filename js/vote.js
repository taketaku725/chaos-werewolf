const Vote = {

  resolve() {
    console.log("投票解決");

    // 集計処理を後で実装

    State.phase = "night_input";
    State.nightNumber++;
    Game.nextPhase();
  }

};
