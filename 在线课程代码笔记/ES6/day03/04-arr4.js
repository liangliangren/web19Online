//entries() 遍历键值对
let ent=["a","b"]

//for of

for(let [key,value] of ent.entries()){
	console.log(key,value)
	//0 a
	//1 b
}

//不适用for of
let ent1=["a","b"].entries()
console.log(ent1)
console.log(ent1.next().value)  //[ 0, 'a' ]
console.log(ent1.next().value)  //[ 1, 'b' ]

console.log([...['a','b','c'].entries()]) //[ [ 0, 'a' ], [ 1, 'b' ], [ 2, 'c' ] ]
console.log([...[,'b','c'].entries()]) //[ [ 0, undefined ], [ 1, 'b' ], [ 2, 'c' ] ]


//keys() 遍历键名
for(let key of ["a","b"].keys()){
	console.log(key) //0 1
}

console.log(...["a","b"].keys()) //0 1
console.log(...[,"b"].keys()) //0 1


//values() 遍历键值
for(let value of ["a","b"].values()){
	console.log(value) //a b
}

console.log(...[,"b"].values()) //undefined b

//{a,b}  等价于 {a:a,b:b}


//includes() 数组是否包含指定的值
//第一个参数：数组中包含的值
//第二个参数：可选，匹配起始索引

console.log([1,2,3,4].includes(2)) //true
console.log([1,2,3,4].includes(2,2)) //false

console.log([1,undefined,2,3].includes(undefined)) //true
console.log([1,NaN,2,3].includes(NaN))  //true


//flat() 嵌套数组转一维数组
//参数为嵌套的层数

console.log([1,[2,3]].flat()) //[ 1, 2, 3 ]

console.log([1,[2,[3,[4,5]]]].flat()) //[ 1, 2, [ 3, [ 4, 5 ] ] ]

console.log([1,[2,[3,[4,5]]]].flat(2)) //[ 1, 2, 3, [ 4, 5 ] ]

console.log([1,[2,[3,[4,5]]]].flat(3)) //[ 1, 2, 3, 4, 5 ]


//flatMap() 先对数组中每个元素进行了的处理，再对数组执行 flat() 方法。

console.log([1,2,3].flatMap(function(val){
	return [val*5]  //[ 5, 10, 15 ]
}))


//...扩展运算符

let arr=[1,2,3]
let arr1=[...arr]
console.log(arr1) //[ 1, 2, 3 ]

console.log([...[1,2],...[3,4,5]]) //[ 1, 2, 3, 4, 5 ]









