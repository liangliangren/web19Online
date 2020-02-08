//Proxy 与 Reflect 是 ES6 为了操作对象引入的 API 。
//Proxy 可以对目标对象的读取、函数调用等操作进行拦截，然后进行操作处理。它不直接操作对象，而是像代理模式，通过对象的代理对象进行操作，在进行这些操作时，可以添加一些需要的额外操作。



//Proxy由两部分组成
	//target 目标对象
	//handler  是一个对象，声明了代理target的指定行为   
		//handler 中有两个方法    get获取   set设置
		

let target={  //定义一个目标对象
	name:"llr",
	age:18
}

let handler={ //拦截对象之后的操作者
	get:function(target,key){
		console.log("get---"+key)
		return target[key]
	},
	set:function(target,key,value){
		console.log("set---"+key)
		target[key]=value
	}
}

let proxy=new Proxy(target,handler);  //new一个对象
proxy.age=28
console.log(proxy) //{ name: 'llr', age: 28 }
console.log(proxy.name)
