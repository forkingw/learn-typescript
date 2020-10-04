# advanced-interface

接口用于约束类、对象、函数 是一个类型契约

> 马戏团，has many animals, inclund lions,tigers, monkeys, dogs.  These animals have common feature: name, age, kind name.
All Aniamal can sayHello. They have theieselves skill.
skill can be changed throgh practice.

skills:
    fire cirle：single double 
    blance: a briage walk line
    samrt: calclate, dance

## 类型保护函数
```
function hasFireShow(ani: object): ani is IFireShow {
    if ((ani as IFireShow).singleFire && (ani as IFireShow).doubleFire) {
        return true;
    }
    return false;
}
```

## 接口可以继承类 !important