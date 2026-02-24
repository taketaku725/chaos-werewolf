const Role = {

  async load() {
    const res = await fetch("data/roles.json");
    State.rolesData = await res.json();
  },

  assign() {
    const s = State.settings;
    const r = State.rolesData;

    let pool = [];

    // 占い
    pool.push(...this.randomPick(r.seer, s.seerCount));

    // 市民（占い除く）
    pool.push(...this.randomPick(r.citizen, s.citizen - s.seerCount));

    // 狼（狂人除く）
    pool.push(...this.randomPick(r.wolf, s.wolf - s.madCount));

    // 狂人
    pool.push(...this.randomPick(r.mad, s.madCount));

    // 第三
    pool.push(...this.randomPick(r.third, s.third));

    // シャッフル
    pool = this.shuffle(pool);

    // プレイヤーに付与
    State.players.forEach((p, i) => {
      p.role = pool[i];
      p.alignment = pool[i].alignment;
      p.alive = true;
    });
  },

  randomPick(array, count) {
    const shuffled = this.shuffle([...array]);
    return shuffled.slice(0, count);
  },

  shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }
};
