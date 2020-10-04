"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dog = exports.Monkey = exports.Tiger = exports.Lion = exports.Animal = void 0;
class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    sayHello() {
        console.log(`各位观众，大家好， 我是${this.type}${this.name}`);
    }
}
exports.Animal = Animal;
class Lion extends Animal {
    constructor() {
        super(...arguments);
        this.type = "狮子";
    }
    singleFire() {
        console.log(this.name + " single Fire perform");
    }
    doubleFire() {
        console.log(this.name + " double Fire perform");
    }
}
exports.Lion = Lion;
class Tiger extends Animal {
    constructor() {
        super(...arguments);
        this.type = "老虎";
    }
    singleFire() {
        console.log(this.name + " single Fire perform");
    }
    doubleFire() {
        console.log(this.name + " double Fire perform");
    }
}
exports.Tiger = Tiger;
class Monkey extends Animal {
    constructor() {
        super(...arguments);
        this.type = "猴子";
    }
    singlePlankBridge() {
        console.log(this.name + " single-plank bridge");
    }
    wireWalking() {
        console.log(this.name + " wire walking perform");
    }
}
exports.Monkey = Monkey;
class Dog extends Animal {
    constructor() {
        super(...arguments);
        this.type = "狗子";
    }
    calculate() {
        console.log(this.name + " calulate perform");
    }
    dancing() {
        console.log(this.name + " dancing perform");
    }
}
exports.Dog = Dog;
