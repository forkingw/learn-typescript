# 装饰器

## 类装饰器

类装饰器本质上是一个函数，该函数接受一个参数，表示类本身(构造函数本身)

使用装饰器  ``` @ + 函数名 ```

在 ts 中如何约束一个便来能够为类

- function
- ``` new(参数)=>object ```

在 ts 使用装饰器 [tsconfig.json]   "experimentalDecorators": true

类装饰器的运行时间: 在类定义后直接运行

- void
- 返回一个新的类, 会将新的类替换掉装饰目标

多个装饰器的运行情况:

- 会按照后加入先调用的顺序进行调用

## 成员装饰器

- 属性

属性装饰器也是一个函数，该函数需要两个参数
1. 静态属性(类本身, 属性名: string)
2. 实例属性(类的原型, 属性名: string)

方法装饰器也是一个函数，该函数需要三个参数
1. 静态属性(类本身, 方法名: string, 属性描述对象: PropertyDescriptor)
2. 实例属性(类的原型, 方法名: string, 属性描述对象: PropertyDescriptor)