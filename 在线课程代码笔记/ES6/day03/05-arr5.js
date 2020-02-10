//遍历数组的方法

//forEach(callback)  //对数组的每一元素执行一次callback方法
let arr=["a","b","c"]
arr.forEach(function(value,index){
	console.log(value+":"+index)
	//a:0
	//b:1
	//c:2
})

//map(callback)		 //创建一个新数组，其结果是该数组都执行一层函数，原数组保持不变
let arr2=["a","b","c"]
let arr3=arr2.map(function(value,index){
	return value+="&"
})
console.log(arr2) //[ 'a', 'b', 'c' ]
console.log(arr3) //[ 'a&', 'b&', 'c&' ]

//filter(callback) 使用指定函数测试数组的每一个元素，并返回一个新的数组
let arr4=[1,2,3,4,5,12,22,10]
let arr5=arr4.filter(function(value){
	return value>5
})
console.log(arr5)  //[ 12, 22, 10 ]
console.log(arr4)  //[1,2,3,4,5,12,22,10]

//some(callback)  //判断指定数组中的元素是否满足条件，如果有就返回true，否则返回false
let arr6=arr4.some(function(value){
	return value>5 
})
console.log(arr6)  //true

//every(callback) //判断指定数组中所有的元素是否都满足条件，如果满足返回true，否则返回false
let arr7=arr4.every(function(value){
	return value>5 
})
console.log(arr7)  //false

//面试题：forEach()/map()/filter()/some/every()这几个方法的区别？


