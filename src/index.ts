import { clearScreenDown } from "readline"
import { createBrotliCompress } from "zlib"

type constructor = new (...args: any[]) => object

// function test(target: new (...args:any[]) => object) {
// }

// function test(b: boolean) {
//     console.log("one")
//     return function (target: constructor){
//     }
// }
// @test(true)
// class A {
//     constructor(public a: string, public b: number) {
//     }
// }

// const a = new A("a", 1);

// function d1 () {
//     console.log("d1")
//     return function (target: constructor) {
//         console.log("decorator d1")
//     }
// }

// function d2 () {
//     console.log("d2")
//     return function (target: constructor) {
//         console.log("decorator d2")
//     }
// }

// @d2()
// @d1()
// class B {
// }

// function c1() {
//     console.log("one");
//     return function () {
//         console.log("two");
//         return function () {
//             console.log("two");
//             return function (target: constructor) {
//                 console.log(target)
//             }
//         }
//     }
// }

// @c1()()()
// class C {

// }

function d(target: any, key: string) {
}

function enmumerable(target: any, key: string, descriptor: PropertyDescriptor) {
    console.log(descriptor);
}

class D {
    @d
    prop1: string

    @d
    prop2: string

    @enmumerable
    method1() {

    }
}