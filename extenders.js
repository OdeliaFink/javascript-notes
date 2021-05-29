class Pet {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  eat() {
    return `${this.name} is eatin!`;
  }
}

class Cat extends Pet {
  meow() {
    return 'MEOw';
  }
}

class Dog extends Pet {
  bark() {
    return 'BARK';
  }
  eat() {
    return `${this.name} chews loud`;
  }
}

const monty = new Cat('monty', 9);
const montyEating = monty.eat();
console.log(monty);
console.log(montyEating);

const floyd = new Dog('Floyd', 8);
const floydEating = floyd.eat();
console.log(floyd);
console.log(floydEating);
