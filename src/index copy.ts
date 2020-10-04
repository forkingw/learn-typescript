class User1 {
    constructor(
        public loginId:string,
        public loginPwd: string,
        public name: string,
        public age: number
    ){  }

    static login(loginId: string, loginPwd: string): User | undefined {
        return undefined
    }
    test () {
        console.log("aaa")
    }
}

const user = new User1("0001", "1111", "forrest", 24) 

// 登陆
const result = User1.login("", "")