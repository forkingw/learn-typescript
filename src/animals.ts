export abstract class Animal {
    abstract type: string;

    constructor (
        public name:string,
        public age:string
    ) {

    }

    sayHello () {
        console.log(`各位观众，大家好， 我是${this.type}${this.name}`)
    }
}

export class Lion extends Animal {
    type: string = "狮子";    
}

export class Tiger extends Animal {
    type: string = "老虎";    
}

export class Monkey extends Animal {
    type: string = "猴子";    
}

export class Dog extends Animal {
    type: string = "狗子";    
}