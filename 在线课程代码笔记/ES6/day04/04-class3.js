class User{ //定义一个User类
	constructor(name){ //构造器，构造函数，  name就相当于是构造函数中的参数
		this.name=name;
	}
	fn(){  //给类中添加一个方法
		return "hello everyone"
	}
}

let user=new User({name:"llr"})
console.log(user) //{ name: 'llr' } 
console.log(user.fn()) //hello everyone

class Liangren extends User{  //Liangren继承User
	constructor(options){
		super(options)
		console.log(options) //{ name: '靓人', age: 18 }
		console.log(123)
		this.age=options.age
	}
}

let liangren=new Liangren({name:"靓人",age:18})
console.log(liangren) //{ name: { name: '靓人', age: 18 }, age: 18 }
console.log(liangren.fn()) //hello everyone