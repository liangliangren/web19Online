//find() 查找数组中符合条件的元素,若有多个符合条件的元素，则返回第一个元素。


let arr=Array.of(1,2,3,4,5,6)
let arr2=arr.find(function(val){
	//console.log(val)  //数组的每一项元素
	return val>3
})
console.log(arr2) //4

//findIndex() 查找数组中符合条件的元素索引，若有多个符合条件的元素，则返回第一个元素索引。

let arr3=Array.of(1,2,1,2,3)
console.log(arr3.findIndex(function(val){
	return val=1
}))  //0  得到1所在的索引位置


//fill() 将一定范围索引的数组元素内容填充为单个指定的值。

let arr4=Array.of(1,2,3,4);
//console.log(arr4.fill(0,1,2)); //[ 1, 0, 3, 4 ]
console.log(arr4.fill(0,1))  //[ 1, 0, 0, 0 ]
//第一个参数：用来填充的值
//第二个参数：被填充的起始索引
//第三个参数：被填充的结束索引，如果不写默认为数组末尾，不替换结束索引

//opyWithin() //将一定范围索引的数组元素修改为此数组另一指定范围索引的元素。

console.log([1,2,3,4].copyWithin(0,2)) //[ 3, 4, 3, 4 ]
//第一个参数：被修改的起始索引
//第二个参数：被用来覆盖的数据的起始索引
//第三个参数：被用来覆盖的数据的结束索引，默认为数组的末尾

console.log([1,2,3,4].copyWithin(0,3)) // [ 4, 2, 3, 4 ]

console.log([1,2,3,4,5,6].copyWithin(0,3)) //[ 4, 5, 6, 4, 5, 6 ]
