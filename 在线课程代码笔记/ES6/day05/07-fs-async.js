let fs=require("fs");  //引入内置模块
//封装一个promise函数读取文件

const read=function(fileName){
	//promise
	//resolve 代表成功
	//reject  代表失败
	return new Promise((resolve,reject)=>{
		fs.readFile(fileName,(err,data)=>{
			if(err){
				reject(err)
			}else{
				resolve(data)
			}
		})
	})
}

//async 是 ES7 才有的与异步操作有关的关键字，和 Promise ， Generator 有很大关联的。
//async function name([param[, param[, ... param]]]) { statements }
//async [ə'zɪŋk]  异步的
//async 特点
//1.语义化强
//2.里面的await后面额语句可以是promise对象，数字，字符串
//3.async函数返回一个Promise对象
//4.await语句后的Promise对象变成reject(失败)状态时，整个async函数会中断，后面的程序不会继续执行

async function readTxtFn(){
	let txt1=await read("1.txt");  //await 操作符用于等待一个 Promise 对象, 它只能在异步函数 async function 内部使用。
	let txt2=await read("2.txt");
	let txt3=await read("3.txt");
	console.log(txt1.toString())
	console.log(txt2.toString())
	console.log(txt3.toString())
}
readTxtFn()


//ES5和ES6有什么不同之处？
//1.ES6中新增let关键字，用于声明只在块级作用域中起作用的变量
//2.const关键字，用于定义常量
//3.解构赋值，是一种新的变量赋值方式，常用于变量的交换，提取函数返回值，设置默认值
//4.新增Symbol原始数据类型，定义一个独一无二的值
//5.Proxy代理，用于编写处理函数，来拦截目标对象的操作
//6.for of遍历，可遍历具有iterator(迭代器)接口数据解构，或者说是类数组
//7.forEach(), map(), filter(), some(), every()遍历数组
//8.Set结构，存储不重复的数据，可以进行数组去重  ，使用add() 添加成员
//9.Map结构，键名可以时任何类型的值，要注意Map和Object的区别，set方法添加成员，get方法获取
//10.class关键字定义类，类的继承
//11.Promise对象，异步操作的解决方案
//12.generator函数
//13.async 异步函数，await








