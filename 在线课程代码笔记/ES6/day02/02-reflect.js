//Reflect 可以用于获取目标对象的行为，它与 Object 类似，但是更易读，为操作对象提供了一种更优雅的方式。它的方法与 Proxy 是对应的。

let obj={
	name:"llr",
	age:18,
	get fn(){
		return this.name+this.age
	}
}
console.log(Reflect.get(obj,"name"))  //llr

let obj1={
	name:"张三",
	age:28,
	set fn(value){
		return this.age=value
	}
}
console.log(obj1.age) //28

Reflect.set(obj1,"age",38)
console.log(Reflect.set(obj1,"age",38)) //true
console.log(obj1.age) //

Reflect.set(obj1,"age",)
console.log(obj1.age) //undefined
console.log(obj1) //{ name: '张三', age: undefined, fn: [Setter] }


//？









