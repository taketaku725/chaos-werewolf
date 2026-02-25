const Role = {

  async load() {
    const res = await fetch("data/roles.json");
    State.rolesData = await res.json();
  },

  assign() {
    const s = State.settings;
    const r = State.rolesData;

    let pool = [];

    pool.push(...this.randomPick(r.seer, s.seerCount));
    pool.push(...this.randomPick(r.citizen, s.citizen - s.seerCount));
    pool.push(...this.randomPick(r.wolf, s.wolf - s.madCount));
    pool.push(...this.randomPick(r.mad, s.madCount));
    pool.push(...this.randomPick(r.third, s.third));

    if (pool.length !== State.players.length) {
      console.error("役職数とプレイヤー数が一致しません");
      console.log("pool:", pool.length);
      console.log("players:", State.players.length);
      return;
    }

    pool = this.shuffle(pool);

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
