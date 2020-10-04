//  const user = {
//      name: "for",
//      age: 18,
//      sayHello() {
//          console.log(this.name, this.age)
//      }
//  }

// const say = user.sayHello
// say();



class User {
    constructor(
        public name:string,
        public age: number
    ) {}
    sayHello(this:User) {
        console.log(this.name, this.age)
    }
}

const user = new User("for", 18)
// user.sayHello()
const say = user.sayHello
// say()




// interface IUser {
//     name: string,
//     age: number,
//     sayHello(this:IUser): void
// }

// const user:IUser = {
//     name: 'for',
//     age: 18,
//     sayHello() {
//         console.log(this.age, this.name)
//     }
// }

// const say = user.sayHello;
// say();
