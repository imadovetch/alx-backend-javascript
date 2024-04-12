class User {
  constructor(name) {
    this.name = name;
  }

  sayHi() {
    console.log(`Hello ${this.name}`);
  }
}

const john = new User("John");
john.sayHi();
