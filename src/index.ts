import { Dictionary } from "./Dictionary";

const dic = new Dictionary<string, number>()
dic.set("a", 1)
dic.set("b", 2)
dic.set("c", 33)
dic.set("a", 111)

dic.forEach((k, v) => {
    console.log(`${k}: ${v}`)
})

console.log(dic.has("d"))

console.log("before delete a")
console.log(dic)

console.log("after delete a")
dic.delete("a")
console.log(dic)

console.log("dic's size:", dic.size)