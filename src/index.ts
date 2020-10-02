function take<T>(arr: T[], n:number) {
    if (n >= arr.length) {
        return arr;
    }
    const newArr: T[] = [];
    for (let i = 0; i < n; i++) {
        newArr.push(arr[i]);
    }
    return newArr;
}

// const newArr = take<number>([1, 2, 4], 2)
const newArr = take<object>([{},{},{}], 3)
console.log(newArr);