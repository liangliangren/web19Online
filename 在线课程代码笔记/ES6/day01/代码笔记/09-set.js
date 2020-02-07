//set对象
//Set 对象允许你存储任何类型的唯一值，无论是原始值或者是对象引用。
//Set对象中的特殊值
	//undefined与undefined
	//NaN与NaN
//console.log(undefined==undefined) //true
//console.log(NaN==NaN) //false

let oSet=new Set();

//给set对象添加内容
oSet.add(1)
oSet.add(2)
oSet.add(3)
let obj={
	name:"张三",
	age:18
}
oSet.add(3)  //重复添加只会保留一个
oSet.add(obj)  //添加对象
let obj1={
	name:"张三",
	age:18
}


oSet.add(obj1) //再添加一个对象
console.log(obj1==obj) //false  不相等所有可以重复添加
console.log(oSet)


//数组去重

var arr=[1,2,3,4,2,3,4,4,2,3,6];

for(var i=0;i<arr.length;i++){
	for(var j=i+1;j<arr.length;j++){
		if(arr[i]==arr[j]){
			arr.splice(j,1)
			j--
		}
	}
}
console.log(arr) //[ 1, 2, 3, 4, 6 ]

//使用Set方法给数组去重
var oSetArr=new Set(arr)
console.log([...oSetArr]) //[ 1, 2, 3, 4, 6 ]

//合并两个数组

let arr2=[1,2,3];
let arr3=[4,5,6];
console.log(arr2.concat(arr3)) //[ 1, 2, 3, 4, 5, 6 ]

//利用set合并数组

console.log(new Set([...arr2,...arr3]))  //{ 1, 2, 3, 4, 5, 6 }






