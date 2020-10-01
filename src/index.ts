import { createDeck, printDeck } from "./funcs"

const deck = createDeck()
// interface User {
//     name:string,
//     age: number,
//     sayHello(): void
// }

// type User = {
//     name: string,
//     age:  number,
//     sayHello: () => void
// }

// let u: User = {
//     name: "asdf",
//     age: 33,
//     sayHello() {}
// }

// type Condition = (n: number) => boolean
// type Condition = {
//     (n: number): boolean
// }

// interface Condition {
//     (n:number): boolean
// }
// function sum(numbers: number[], callBack: Condition) {
//     let s = 0;
//     numbers.forEach(n => {
//         if (callBack(n)) {
//             s +=n;
//         }
//     })
//     return s;
// }
// const result = sum([3,4,6,8], n => n % 2 !== 0);
// console.log(result) 

// interface A {
//     T1: string
// }

// interface B extends A {
//     T2: number
// }

// interface C extends A, B {
//     T3: boolean
// }

type A = {
    T1: string
}

type B = {
    T2: number
}

type C = {
    T3: boolean
} & A & B

let u: C = {
    T2: 33,
    T3: true,
    T1: "33"
}