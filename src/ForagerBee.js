class ForagerBee extends Bee {
  constructor (food, color) {
    super(food, color)
    this.age = 10;
    this.job = 'find pollen';
    this.treasureChest = [];
    this.canFly = true;
  }
  eat () {
    return super.eat()
  }
  forage (treasure) {
    this.treasureChest.push(treasure)
  }
  // TODO..
};
