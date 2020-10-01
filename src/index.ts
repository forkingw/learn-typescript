interface User {
    readonly id:string,
    name: string,
    age: number,
    readonly arr: readonly string[]
}

let u:User = {
    id: "23",
    name: 'for',
    age: 18,
    arr: ['1', '4']
}

// u.id = "123"

// let arr: readonly number[] = [3,3,4,4]

// let arr: ReadonlyArray<number> = [3, 4, 6]