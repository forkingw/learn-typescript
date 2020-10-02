import { throws } from "assert";

class User {
    readonly id: number
    gender: "男" | "女" = "男"
    // pid: string | undefined
    // pid: string | null = null
    pid?: string

    private publishNumber: number = 3;
    private curNumber: number = 0;
    constructor(public name:string, private _age: number) {
        this.id = Math.random();
    }

    publish (title:string) {
        if (this.curNumber < this.publishNumber) {
            console.log("发布一片文章：" + title);
            this.curNumber ++;
        } 
        else {
            console.log("you can publish blog has been number,today!");
        }
    }

    // setAge (value) {
        // if (value > 200) {
        //     this._age = 200
        // } else if (value < 0) {
        //     this._age = 0
        // } else {
        //     this._age = value
        // }
    // }
    // getAge () {
    //     return this._age;
    // }

    set age (value) {
        if (value > 200) {
            this._age = 200
        } else if (value < 0) {
            this._age = 0
        } else {
            this._age = value
        }
    }

    get age () {
        return this._age
    }
}
const u = new User("aa", 12);
// u.publish("文章1")
// u.publish("文章2")
// u.publish("文章3")
// u.publish("文章4")
// u.publish("文章5")
// u.publish("文章6")

// u.setAge(-2)
// console.log(u.getAge())

// u.setAge(201)
// console.log(u.getAge())

 