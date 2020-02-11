//Iterator  [ɪtə'reɪtə] 迭代器
//迭代器是一个统一的接口，它的作用是使各种数据结构可被便捷的访问，它是通过一个键为Symbol.iterator 的方法来实现。
//迭代过程:
//1.通过 Symbol.iterator 创建一个迭代器，指向当前数据结构的起始位置
//2.随后通过 next 方法进行向下迭代指向下一个位置， next 方法会返回当前位置的对象，对象包含了 value 和 done 两个属性， 
	//value 是当前属性的值， done 用于判断是否遍历结束
//3.done 为true 说明迭代结束
	
let arr=["red","yellow","green"];
let it=arr[Symbol.iterator]()   //创建一个迭代器
console.log(it.next())  //{ value: 'red', done: false }  //false说明没有迭代结束
console.log(it.next())  //{ value: 'yellow', done: false }
console.log(it.next())  //{ value: 'green', done: false }
console.log(it.next())  //{ value: undefined, done: true }


//可迭代的数据解构都有哪一些？
//Array/String/Map/Set/DOM元素


//String迭代

let str="abcdefg";

for(const val of str){
	console.log(val)  //abcdefg
}


//Map对象
const oMap=new Map();
oMap.set(0,"A");  //给map对象添加键值对
oMap.set(1,"B");
oMap.set(2,"C");

for(let item of oMap){
	console.log(item)
	//[ 0, 'A' ]
	//[ 1, 'B' ]
	//[ 2, 'C' ]
}

//Set对象

let oSet=new Set();
oSet.add("red")
oSet.add("pink")
oSet.add("yellow")
for(let val of oSet){
	console.log(val)
	//red pink yellow
}

//遍历arguments
function fn(){
	for(let arg of arguments){
		console.log(arg) //a b c
	}
}
fn("a","b","c")


//普通对象不可迭代
let obj={
	name:"llr",
	age:18
}
for(let val in obj){
	console.log(val)  //name age
}


















