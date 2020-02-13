//代理模式：是程序中的一种设计模式

//在ES6中Proxy对象用于定义基本操作的自定义行为
//target   目标对象
//handler  行为的执行者    //get()获取    set() 设置
//let oProxy=new Proxy(target,handler)
let obj = { //目标对象
	a: 1,
	b: 2
}

let oProxy = new Proxy(obj, {
	get(target, key, value) { //获取
		return target[key]
	},
	set(target, key, value) { //设置
		target[key] = value
	}
})

console.log(obj.a) //1
console.log(oProxy.a) //1
oProxy.name = "llr" //改变代理对象
obj.age = 18 //给obj对象添加属性
console.log(oProxy) //{ a: 1, b: 2, name: 'llr', age: 18 }
console.log(obj) //{ a: 1, b: 2, name: 'llr', age: 18 }

//Proxy作用
//1.拦截和监视外部对象的访问
//2.降低函数或者类的复杂度
//3.在复杂操作前对操作进行校验或者对所需资源进行管理













