//Map保存键值对，任何值都可以做为键和值
//对象 Object

//普通的对象，属性或者说是键不能是数字，属性和属性值是没有序列


/*
let obj={
	name:"llr",
	age:18,
	sex:"男"
}
*/
//Map对象
//Map和Object的区别？
	//1.一个Object的键只能是字符串或者Symbol值，但是Map的键可以是任意值
	//2.Map中的键值是有序列的，而添加到Object中的键没有序列
	//3.Map的键值对个数可以用size属性获取，而Object的键值对只能手动计算
	//4.Object都有自己的原型，原型链上的键名有可能和你自己在对象上定义的键名冲突，而Map不会

//定义一个Map对象
var oMap=new Map()

//想给map对象中添加内容
//1.键是一个字符串
/*
//set()方法
oMap.set("a","我是a的键值")

console.log(oMap)

//get() 获取键值

let val=oMap.get("a")
console.log(val)
*/

//2.键是一个对象

/*
let obj={}
oMap.set(obj,"我是对象的一个键值")
console.log(oMap.get(obj)) //我是对象的一个键值
*/

//3.键是一个函数
/*
let fn=function(){}
oMap.set(fn,"我是一个函数的键值")
console.log(oMap.get(fn)) //我是一个函数的键值
*/

//4.键是一个NaN
/*
oMap.set(NaN,"我不是一个有效数字")
console.log(oMap.get(NaN))  //我不是一个有效数字
*/

oMap.set(0,"我是0")
oMap.set(1,"我是1")
oMap.set(2,"我是2")
oMap.set(3,"我是3")
console.log(oMap)  //有序列的对象，集合  //{ 0 => '我是0', 1 => '我是1', 2 => '我是2', 3 => '我是3' }

//for  in  遍历没有序列的对象
//for  of  遍历有序列的对象

for(var [key,value] of oMap){
	console.log(key+"="+value)
}

//使用forEach遍历Map对象
oMap.forEach(function(value,key){
	console.log(value+"="+key)
})










