//Generator 有两个区分于普通函数的部分
//一是在 function 后面，函数名之前有个 * ；
//函数内部有 yield 表达式。


//Generator  ES6提供的异步编程解决方案，也是遍历器生成函数，语法和传统函数完全不一样

let fn=function * (){
	yield 1;
	yield 2;
	yield 3;
}

let oFn=fn()
console.log(oFn.next())  //{ value: 1, done: false }  //done 为false说明还没有遍历结束
console.log(oFn.next())  //{ value: 2, done: false }
console.log(oFn.next())  //{ value: 3, done: false }
console.log(oFn.next()) //{ value: undefined, done: true } //done: true 遍历结束

//普通对象没有序列，不能使用for of遍历
let obj={
	name:"llr",
	age:18,
	sex:"男"
}
obj[Symbol.iterator]=function *(){
	for(var key in obj){
		yield obj[key];
	}
}

for(let val of obj){
	console.log(val) //llr 18 男
}










