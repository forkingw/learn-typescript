// class User {
//     static uesr: User[] = [];
//     constructor(
//         public loginId:string,
//         public loginPwd: string,
//         public name: string,
//         public age: number
//     ){ 
//         User.uesr.push(this);
//     }

//     static login(loginId: string, loginPwd: string): User | undefined {
//         return undefined
//     }

//     sayHello() {
//         console.log(`大家好啊，我叫${this.name},今年${this.age}岁了，我的帐号是${this.loginId}`)
//     }
// }

// new User("u1", "123", "wang", 12);
// new User("u2", "123", "for", 14);
// new User("u3", "123", "spring", 15);
// new User("u4", "123", "nextjs", 16);

// console.log(User.uesr)

class Board {
    width: number = 500;
    heighht: number = 700;

    init () {
        console.log("初始化棋盘")
    }

    private constructor() {}


    // static readonly singBoard = new Board();
    private static _board?: Board;

    static createBoard(): Board {
        if (this._board) {
            return this._board
        }
        this._board = new Board();
        return this._board;
    }
}

const b = Board.createBoard();
const b2 = Board.createBoard();

console.log(b === b2);