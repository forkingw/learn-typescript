import { IBalanceShow, IFireShow, IWisdomShow } from "./interfaces";

export abstract class Animal {
    abstract type: string;

    constructor(
        public name: string,
        public age: number
    ) { }

    sayHello() {
        console.log(`各位观众，大家好， 我是${this.type}${this.name}`)
    }
}

export class Lion extends Animal {
    type: string = "狮子";
}

export class Tiger extends Animal implements IFireShow {
    type: string = "老虎";

    singleFire() {
        console.log(this.name + " single Fire perform");
    }

    doubleFire() {
        console.log(this.name + " double Fire perform");
    }
}

export class Monkey extends Animal implements IBalanceShow {
    type: string = "猴子";
    singlePlankBridge() {
        console.log(this.name + " single-plank bridge");
    }

    wireWalking() {
        console.log(this.name + " wire walking perform");
    }
}

export class Dog extends Animal implements IWisdomShow {
    type: string = "狗子";

    calculate() {
        console.log(this.name + " calulate perform");
    }
    dancing() {
        console.log(this.name + " dancing perform");
    }
}