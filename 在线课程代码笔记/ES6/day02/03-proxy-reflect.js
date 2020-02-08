
//Reflect对象的方法与Proxy方法是意义对应的
let obj={
	name:"llr",
	age:18
}

let handler={
	get:function(obj,key){
		console.log("get")
		return Reflect.get(obj,key)
	},
	set:function(obj,key,value){
		console.log("set")
		Reflect.set(obj,key,value)
	}
}

let proxy=new Proxy(obj,handler)
console.log(proxy)  //{ name: 'llr', age: 18 }
console.log(proxy.name) //llr
proxy.name="张三"
console.log(proxy) //{ name: '张三', age: 18 }
proxy.age=28
console.log(proxy)  //{ name: '张三', age: 28 }
console.log(obj)  //{ name: '张三', age: 28 }