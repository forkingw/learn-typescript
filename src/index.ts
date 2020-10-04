abstract class Chess {
    x: number = 0
    y: number = 0

    abstract readonly name: string;

    move(targetX:number, targetY:number):boolean {
        console.log("边界检查")
        console.log("是否有己方棋子")
        if (this.rule(targetX, targetY)) {
            this.rule(targetX, targetY)
            return true;
        }
        return false;

    }
    protected abstract rule (targetX:number, targetY:number):boolean;
}

class Horse extends Chess {
    protected rule(targetX: number, targetY: number): boolean {
        throw new Error("Method not implemented.");
    }
    move(targetX: number, targetY: number): boolean {
        throw new Error("Method not implemented.");
    }
    readonly name: string = "马";
    
}

class Solider extends Chess {
    protected rule(targetX: number, targetY: number): boolean {
        throw new Error("Method not implemented.");
    }
    move(targetX: number, targetY: number): boolean {
        throw new Error("Method not implemented.");
    }
    readonly name: string;

    constructor() {
        super();
        this.name = "炮";
    }

}

class Cannon extends Chess {
    protected rule(targetX: number, targetY: number): boolean {
        throw new Error("Method not implemented.");
    }
    move(targetX: number, targetY: number): boolean {
        throw new Error("Method not implemented.");
    }
    get name() {
        return "兵";
    }
}

const horse = new Horse()
const solider = new Solider()
const cannon = new Cannon()

console.log(horse.name, solider.name, cannon.name);