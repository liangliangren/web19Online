//Es6中新增加的数组操作方法

//Array.of() //将参数中所有值作为元素形成数组。
console.log(Array.of(1,2,3,4,5,6)) //[ 1, 2, 3, 4, 5, 6 ]
console.log(Array.of()) //[] 返回一个空的数组
console.log(Array.of(1,"abc",true)) //[ 1, 'abc', true ]

//Array.from() //将类数组对象或可迭代对象转化为数组。
console.log(Array.from([1,2,3,4,5])) //[ 1, 2, 3, 4, 5 ]
console.log(Array.from([1,,3])) //[ 1, undefined, 3 ]

let arr=Array.from({
	0:"1",
	1:"a",
	2:"b",
	length:3
})
//对象中如果没有length属性会返回一个空数组
console.log(arr) //[ '1', 'a', 'b' ]

let arr2=Array.from({
	a:1,
	b:2,
	length:2
})
console.log(arr2)  //[ undefined, undefined ]


//转换map对象
let oMap=new Map();  //创建一个map对象
oMap.set("key0","value0");
oMap.set("key1","value1");

console.log(oMap)  //Map { 'key0' => 'value0', 'key1' => 'value1' }
console.log(Array.from(oMap))  //[ [ 'key0', 'value0' ], [ 'key1', 'value1' ] ]  //二维数组

//转换set对象
let arr3=[1,2,3,4,5]
let oSet=new Set(arr3)
console.log(oSet) //{ 1, 2, 3, 4, 5 }  
console.log(Array.from(oSet)) //[ 1, 2, 3, 4, 5 ]

//转换字符串
let str="hello"
console.log(Array.from(str))  //[ 'h', 'e', 'l', 'l', 'o' ]
console.log(str.split(""))    //[ 'h', 'e', 'l', 'l', 'o' ]


function fn(){
	console.log(Array.from(arguments))  //[ 1, 2, 3, 4, 5, 6 ]  arguments是类数组
}
fn(1,2,3,4,5,6)












