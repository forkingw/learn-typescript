// type callback<T> = (n: T, i: number) => boolean;
// function filter<T>(arr: T[], callback: callback<T>): T[] {
//     const newArr: T[] = [];
//     arr.forEach((n, i) => {
//         if (callback(n, i)) {
//             newArr.push(n);
//         }
//     })


//     return newArr;
// }

// const arr = [3, 4, 5, 6];
// console.log(filter(arr, n => n % 2 !== 0))


// interface callback<T> {
//     (n: T, i: number): boolean
// }
// function filter<T>(arr: T[], callback: callback<T>): T[] {
//     const newArr: T[] = [];
//     arr.forEach((n, i) => {
//         if (callback(n, i)) {
//             newArr.push(n);
//         }
//     })

//     return newArr;
// }


// import { ArrayHelper } from "./ArrayHelper";

// const arr = [3, 4, 5, 6];
// console.log(filter(arr, n => n % 2 !== 0))

// const helper = new ArrayHelper([1,2,3])
// helper.take(2)
// helper.shuffle()

// console.log(helper)
