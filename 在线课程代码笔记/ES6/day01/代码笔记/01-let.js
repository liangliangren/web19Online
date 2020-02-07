//变量的声明
//在ES6中中新增了let和const定义变量的方式
//增加了一个块级作用域的概念，ES5中有变量作用域，函数作用域
//块级作用域用一个{}来表示

//var和let的区别？
//1.let定义的变量，只能在let命令所在的代码块中有效
//2.使用let定义变量不存在变量提升
//3.let存在暂时性死区
//4.let不允许在相同的作用域内，重复声明相同的一个变量
/*
{
	var a=10
	let b=100
	console.log(b) //100
}
console.log(a)
//console.log(b)  //b is not defined  说明let定义的变量，只能在let命令所在的代码块中有效

//{
//	for(var i=0;i<5;i++){
//		console.log("循环体内部的i"+i)
//	}
//	console.log("循环体外部的i"+i)
//}

//for循环用let定义变量只能在for循环内部使用该变量，循环体外部无法访问
{
	for(let i=0;i<5;i++){
		console.log("循环体内部的i-let"+i)
	}
	//console.log("循环体外部的i-let"+i) // i is not defined
}


{
	var arr=[]
	for(var j=0;j<10;j++){
		arr[j]=function(){
			console.log(j)
		}
	}
	arr[5](); //?  10
}

{
	var arr=[]
	for(let k=0;k<10;k++){
		arr[k]=function(){
			console.log(k)
		}
	}
	arr[5](); //?  5
}



{
	console.log(box) //undefined  //变量提升
	var box="abcd"
}

//使用let定义变量不存在变量提升
{
	//console.log(box1)  // Cannot access 'box1' before initialization 报错
	let box1="abcd"
}

//let存在暂时性死区
//解释：在块级作用域中，想使用let定义变量，必须在使用变量之前定义并且赋值
{
	var temp="abcd"
	if(true){
		temp="123456"
		//let temp;  // Cannot access 'temp' before initialization
	}
}


{
	var temp="abcd"
	if(true){
		let temp;
		temp="123456"
		console.log(temp)
	}
}

//let定义变量不能重复声明
	//let不允许在相同的作用域内，重复声明相同的一个变量
{
	let a=10;
	//let a=2;
	console.log(a)
}
*/




//为什么要用块级作用域？
	//内层变量可能会覆盖外层变量
	
{
	var box="123456";
	function fn(){
		console.log(box)
		if(false){
			var box="hello"  //内层变量会覆盖外层变量
		}
	}
	fn() //undefined
	
	//说明：if代码块外部使用的box变量，其实是使用的内部box变量，函数执行后会得到undefined，原因就在于变量提升
}
	
//块级作用域let定义变量
{
	function fn1(){
		let num=10;  //在函数体中使用
		if(true){
			let num=100  //这个变量只能在if块级作用域中使用
		}
		console.log(num)  //?  10
	}
	fn1()
}



	


