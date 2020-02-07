//对象模型的解构

//let {a:a,b:b} //定义对象，对象中的属性和属性值一致，我们可以将属性和属性值简写为一个   前面的等价于   let {a,b}

/*
基本用法
let {a,b}={a:10,b:100}
console.log(a) //10
console.log(b) //100
*/

//嵌套

/*
let obj={
	a:["hello",{b:"everyone"}]
}

let {
	a:[x,{b}]
}=obj

console.log(x+" "+b) //hello everyone
*/

//不完全解构

/*
let obj={a:[{b:"everyone"}]}
let {a:[{b},x]}=obj

console.log(x) //undefined  解构失败
console.log(b) //everyone
*/

/*
//...扩展运算符
//rest   [rest] 剩余的

let {a,b,...rest}={a:1,b:2,c:3,d:4}
console.log(a) //1
console.log(b) //2
console.log(rest)  //{ c: 3, d: 4 }
*/

let {a=10,b=100}={a:1}
console.log(a) //1    //1会覆盖a的默认值
console.log(b) //100  //如果解构不到，会读取默认值













