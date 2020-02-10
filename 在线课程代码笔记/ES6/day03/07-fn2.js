//箭头函数---》提供一个更加简单的函数书写形式
//参数=>函数体

var fn=function(a){
	return a
}
console.log(fn(1))  //1


//使用箭头函数改造上面的函数
var fn2=val=>val  //ES6中的写法
console.log(fn2(2)) //2

//等价于

var fn3=function(val){
	return val
}


//函数有多个参数,用小括号包裹着参数
let fn4=function(a,b){
	return a+b
}
console.log(fn4(2,3)) //5

let fn5=(a,b)=>a+b
console.log(fn5(20,30)) //50


//当箭头函数函数体有多行语句，用{}包裹起来，表示代码快，如果是一行语句可以省略{},结果会自动返回
let fn6=(a,b)=>{
	let result=a+b;
	return result
}
console.log(fn6(10,20)) //30


//箭头函数和普通函数的区别?

//1.箭头函数是匿名函数，不能作为构造函数，不能使用new关键字
//2.箭头函数不能绑定arguments,取而代之的用...rest参数来解决
//3.箭头函数没有原型属性
//4.箭头函数的this永远指向其上下文的this，没有办法改变指向

function sum(){
	console.log(arguments) // { '0': 1, '1': 2, '2': 3, '3': 4 }
}
sum(1,2,3,4)

let sum2=(...rest)=>{
	//console.log(arguments)
	console.log(rest) //[ 1, 2, 3, 4 ]
}
sum2(1,2,3,4)


function a(){
	return 10
}
console.log(a.prototype) //{constructor:a}

let b=()=>{
	return 20
}
console.log(b.prototype) //undefined


//箭头函数中的this


let obj={
	a:10,
	b:()=>{
		console.log(this.a)
		console.log(this)
	}
}
obj.b()
