"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const animals_1 = require("./animals");
const animals = [
    new animals_1.Lion("王权富贵", 1),
    new animals_1.Tiger("东方月初", 12),
    new animals_1.Monkey("算算", 4),
    new animals_1.Dog("跳跳", 3)
];
// animals.forEach(a => a.sayHello());
function hasFireShow(ani) {
    if (ani.singleFire && ani.doubleFire) {
        return true;
    }
    return false;
}
animals.forEach(a => {
    if (hasFireShow(a)) {
        a.singleFire();
        a.doubleFire();
    }
});
