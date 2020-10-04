export class Tank {
    x:number = 0
    y:number = 0

    protected name: string="tank"

    shoot() {
        console.log("Take shoot")
    }
}

export class PlayerTank extends Tank {
    x:number = 20
    y:number = 20

    sayHello() {
        console.log(this.name)
    }

    shoot() {
        console.log("PlayerTank shoot")
    }
}

export class EnemyTank extends Tank {
    shoot() {
        console.log("EmenyTank shoot")
    }
}

const p = new PlayerTank()
console.log(p.x, p.y)