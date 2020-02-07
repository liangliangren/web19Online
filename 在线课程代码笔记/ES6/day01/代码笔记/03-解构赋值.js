//解构赋值
//解构赋值是对赋值运算符的扩展
//对数组或者对象进行的模式匹配，然后对曲中的变量进行赋值
//好处：使代码更简洁易懂，语意更加清晰

//解构赋值分为两个部分
	//1.解构源
	//2.解构目标
	
	
	//数组模型解构
	/*
	let [a,b,c]=[1,2,3]
	console.log(a)  //1
	console.log(b)  //2
	console.log(c)  //3
	*/
	//可以嵌套解构
	/*
	let [a,[[b],c]]=[10,[[20],30]]
	console.log(a)  //10
	console.log(b)  //20
	console.log(c)  //30
	*/
	
	/*
	let [a,,c]=[1,,2];
	console.log(a) //1
	console.log(c) //2
	*/
	
	//带有默认值
	/*
	let [a=1,b]=[,100];
	console.log(a) //1
	console.log(b) //100
	*/
	//不完全解构
	/*
	let [a=1,b]=[];
	console.log(a) // 1  读取默认值
	console.log(b) // undefined
	*/
	
	// ... 扩展运算符
	/*
	let [a,...b]=[1,2,3,4,5,6]
	console.log(a) //1
	console.log(b) //[2,3,4,5,6]
	*/
	
	//字符串遍历赋值
	/*
	let [a,b,c,d,e]="hello"
	console.log(a)
	console.log(b)
	console.log(c)
	console.log(d)
	console.log(e)
	*/
	
	/*
	let [a=100]=[undefined]
	console.log(a) //100  //当解构模式有匹配结果，且结果为undefined时会触发默认值，并且默认值作为返回结果
	*/
	/*
	let [a=10,b=a]=[]  
	console.log(a) //10
	console.log(b) //10
	
	//a和b匹配的结果是undefined，会触发默认值，默认值为10，  b=a=10
	*/
	
	/*
	let [a=10,b=a]=[100]
	console.log(a) //100
	console.log(b) //100
	
	//a正常解构赋值，匹配的解构为100，b匹配的结果是undefined，也触发默认值，b=a=100
	*/
	
	let [a=100,b=a]=[10,20]
	console.log(a) //10
	console.log(b) //20
	
	//解释：a和b正常解构赋值，a=10  b=20
