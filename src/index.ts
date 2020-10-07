// const a:string = "sdfasdf";

import { type } from "os"

// let b: typeof a = "dfasdf";

// class User {
//     loginId: string
//     login: string
// }

// const u = new User();
// const u2 = u;

// const A = User;

// function createUser(cls: typeof User): User {
//     return new cls()
// }

// const u = createUser(User)

// interface User {
//     loginId: string
//     loginpwd: string
//     age: number
// }

// function printUserProperty(obj: User, prop: keyof User) {
//     console.log(obj[prop])
// }

// const u:User = {
//     loginId: "sdf",
//     loginpwd: "asdf",
//     age: 18
// }

// printUserProperty(u, "age")


interface User {
    loginId: string
    loginpwd: string
    age: number
}

// type Obj = {
//     [p in keyof User]: string
// }

// type Obj = {
//     [p in keyof User]: User[p]
// }

type Obj = {
    readonly [p in keyof User]: User[p]
}

const u:Obj = {
    loginId: "adsf",
    loginpwd: "sdf",
    age: 18
}

const u1:Readonly<User> = {
    loginId: "adsf",
    loginpwd: "sdf",
    age: 18
}