//Symbol.for() 类似单例模式，首先会在全局搜索被登记的 Symbol 中是否有该字符串参数作为名称的 Symbol 值，如果有即返回该 Symbol 值，若没有则新建并返回一个以该字符串参数为名称的 Symbol 值，并登记在全局环境中供搜索。
let red=Symbol('Red');
let red1=Symbol.for("Red")
console.log(red==red1)  //false

let red2=Symbol.for("Red")
console.log(red1==red2) //true

