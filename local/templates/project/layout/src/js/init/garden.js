export default class Garden {
  constructor() {
    this.age = $.getRandomInt(1000, 4101);
    this.daysFromStart = 0;
    this.trees = this.createTrees();
  }

  getAge() {
    return this.age;
  }

  getTreesList() {
    return this.trees;
  }

  getTreesCount() {
    return this.trees.length;
  }

  getApplesList() {
    return this.trees.flatMap((tree) => tree.apples);
  }

  getApplesCount() {
    return this.trees.flatMap((tree) => tree.apples).filter((apple) => apple.age < 30).length;
  }

  getFallenApplesCount() {
    return this.trees.flatMap((tree) => tree.apples).filter((apple) => apple.age > 29 && apple.age < 31).length;
  }

  getSpoiledApplesCount() {
    return this.trees.flatMap((tree) => tree.apples).filter((apple) => apple.age > 30).length;
  }

  passDay() {
    this.age++;
    this.daysFromStart++;
    this.trees.map((tree) => {
      tree.getOlder();
      tree.apples.map((apple) => apple.getOlder());
      if(this.daysFromStart % 30 === 0)
        tree.createApple(0);
    })
  }

  createTrees() {
    let trees = [], i = 0;

    while (i < $.getRandomInt(1, 101)) {
      trees.push(new Tree({age: $.getRandomInt(1, 31)}))
      i++;
    }
    return trees;
  }
}

class Tree {
  constructor(data) {
    this.age = data.age;
    this.apples = this.createApples();
  }

  createApples() {
    let apples = [], i = 0;

    while (i < $.getRandomInt(1, 101)) {
      apples.push(new Apple({age: $.getRandomInt(1, 31)}))
      i++;
    }
    return apples;
  }

  createApple(age) {
    this.apples.push(new Apple({age: age}))
  }

  getOlder() {
    this.age++;
  }
}

class Apple {
  constructor(data) {
    this.age = data.age;
    this.location = data.age > 29 ? 'На земле' : 'На дереве';
    this.spoiled = data.age > 30 ? true : false;
  }

  getOlder() {
    this.age++;
    this.setLocation();
    this.setSpoiled();
  }

  setLocation() {
    this.location = this.age > 29 ? 'На земле' : 'На дереве';
  }

  setSpoiled() {
    this.spoiled = this.age > 30 ? true : false;
  }
}
