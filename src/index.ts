// interface hasNameProperty {
//     name: string
// }


// /**
//  * 将某个对象的 name 属性的每个单词的首字母大写，然后将对象返回
//  */
// function nameToUpperCase<T extends hasNameProperty>(obj: T): T {
//     obj.name = obj.name
//         .split(" ")
//         .map(s => s[0].toUpperCase() + s.substr(1))
//         .join(" ")
//     return obj;
// }

// const o = {
//     name: "forrest wang",
//     age: 18,
//     hobby: "reading"
// }

// const newo = nameToUpperCase(o);
// console.log(newo.name)


/**
 * 将两个数组进行混合
 * [1，2，4] + ['a', 'b', 'c'] = [1, 'a', 2, 'b', 3, 'c']
 */
function mixinArray<T, K>(arr1: T[], arr2: K[]): (T | K)[] {
    if (arr1.length !== arr2.length) {
        throw new Error("两个数组长度不相等");
    }
    let result: (T | K)[] = [];
    for (let i = 0; i < arr1.length; i++) {
        result.push(arr1[i]);        
        result.push(arr2[i]);        
    }

    return result;
}

console.log(mixinArray([1, 2, 4], ['a', 'b', 'c']));