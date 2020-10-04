import { Animal, Dog, Lion, Monkey, Tiger } from "./animals";
import { hasFireShow, hasWisdomShow } from "./interfaces";

const animals: Animal[] = [
    new Lion("王权富贵", 1),
    new Tiger("东方月初", 12),
    new Monkey("算算", 4),
    new Dog("跳跳", 3)
]

// animals.forEach(a => a.sayHello());

animals.forEach(a => {
    if (hasFireShow(a)) {
        a.singleFire();
        a.doubleFire();
    }

    if (hasWisdomShow(a)) {
        a.calculate();
        a.dancing();
    }
})

/**
 * 接口可以继承类
 */
class A {
    a1: string = "";
    a2: string = "";
}
class B {
    b1: number = 0;
    b2: number = 1;
}

interface C extends A, B {}

const c:C = {
    a1: "1",
    a2: "2",
    b1: 1,
    b2: 3
}