// ...
/*
//数组解构
var [a,b,c,...rest]=[1,2,3,4,5,6,7]
console.log(a)		//1
console.log(b)		//2
console.log(c)		//3
console.log(rest)  //[ 4, 5, 6, 7 ]

//字符串
var str="hello"
var str2=[...str]
console.log(str2) //[ 'h', 'e', 'l', 'l', 'o' ]


var fn=function(...arg){
	console.log(arg) //[ 1, 2, 3, 4, 5 ]
	//arguments是一个类数组
	for(let val of arg){
		console.log(val)
	}
}
fn(1,2,3,4,5)

var fn2=function(a,...arg){
	console.log(a) //10
	console.log(arg)  //[20,30]
}
fn2(10,20,30)

var obj={
	a:100,
	b:200,
	c:300
}


var {a,b,c}=obj
console.log(a) //100
console.log(b) //200
console.log(c) //300

var {a,...rest}=obj
console.log(a)     //100
console.log(rest)  //{ b: 200, c: 300 }

let arr1=[1,2,3]
let arr2=[4,5,6]

//[1,2,3,4,5,6]
let arr3=[...arr1,...arr2]
console.log(arr3)


var arr=[1,2,3,4,2,3,4,4,2,3,6];
//使用Set方法给数组去重
var oSetArr=new Set(arr)
console.log(...oSetArr) //1, 2, 3, 4, 6 
console.log([...oSetArr]) //[ 1, 2, 3, 4, 6 ]



function fn3(...[a,b,c]){
	console.log(a)
	console.log([a,b,c]) //[1000,2,3]
}
fn3(1000,2,3)

function fn4(...arg){
	console.log(arg) //[1,2,3]
}
fn4(10,20,30)

function fn5(a,b,c){
	
	console.log([a,b,c]) //1,2,3
}
fn5(100,200,300)


*/


//数组和对象的拷贝

var arr1=[1,2,3,4]
var arr2=[...arr1]
console.log(arr2)  //[ 1, 2, 3, 4 ]


var obj={
	name:"llr",
	age:18
}
var obj2={...obj}
console.log(obj2)  //{ name: 'llr', age: 18 }