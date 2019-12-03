class PokerCollection {
  constructor(config) {
    this.config = {};
    this.pokers = [];
    this._init();
  }

  // private
  _init() {
    this.pokers = this._getNewPokerPack();
    this.wash();
  }
  _getNewPokerPack() {
    let nums = "3,4,5,6,7,8,9,10,J,Q,K,A,2,F,E".split(",");
    let pokers = [];
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 13; j++) {
        pokers.push(
          new PokerItem({
            type: i,
            num: nums[j],
            value: j > 1 ? j - 1 : j + 11
          })
        );
      }
    }
    // 小王
    pokers.push(
      new PokerItem({
        type: 4,
        num: 14,
        value: 13
      })
    );
    // 大王
    pokers.push(
      new PokerItem({
        type: 4,
        num: 14,
        value: 14
      })
    );
    return pokers;
  }

  // public
  wash() {
    for (let i = this.pokers.length - 1; i > 0; i--) {
      let index = Math.floor(Math.random() * i);
      let temp = this.pokers[index];
      this.pokers[index] = this.pokers[i];
      this.pokers[i] = temp;
    }
  }
  deal() {
    return [
      this.pokers.slice(0, 17),
      this.pokers.slice(17, 34),
      this.pokers.slice(34, 51),
      this.pokers.slice(51)
    ];
  }
}

class PokerItem {
  constructor(config) {
    this.config = {
      type: 0,
      num: 1,
      value: 1
    };
    Object.assign(this.config, config);
  }
}

module.exports = {
  PokerCollection,
  PokerItem
};
