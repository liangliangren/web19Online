//Number.EPSILON 属性表示 1 与大于 1 的最小浮点数之间的差。
console.log(Number.EPSILON)

//Number.isFinite() 用于检查一个数值是否为有限的（ finite ），即不是 Infinity
console.log(Number.isFinite(1))  //true
console.log(Number.isFinite(NaN)) //false  //NaN不是有限的
console.log(Number.isFinite(Infinity)) //false

console.log(Number.isFinite("hello")) //false

//isNaN()
console.log(isNaN("好好学习")) //true
console.log(isNaN(100)) //false

//parseInt()	整型
//parseFlost()  浮点型

//Number.isInteger()用于判断给定的参数是否为整数

console.log(Number.isInteger(1)) //true
console.log(Number.isInteger(1.0)) //true
console.log(Number.isInteger(1.01)) //false