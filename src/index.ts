interface Duck {
    sound: "嘎嘎",
    swin(): void
}
const person = {
    name: "装成鸭子的人",
    age: 34,
    sound: "嘎嘎" as "嘎嘎",
    swin() {
        console.log(this.name + " is swiming, and sound" + this.sound)
    }
}

let duck: Duck = person
