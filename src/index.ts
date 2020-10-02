interface hasNameProperty {
    name: string
}


/**
 * 将某个对象的 name 属性的每个单词的首字母大写，然后将对象返回
 */
function nameToUpperCase<T extends hasNameProperty>(obj: T): T {
    obj.name = obj.name
        .split(" ")
        .map(s => s[0].toUpperCase() + s.substr(1))
        .join(" ")
    return obj;
}

const o = {
    name: "forrest wang",
    age: 18,
    hobby: "reading"
}

const newo = nameToUpperCase(o);
console.log(newo.name)
