//ES5中没有类的概念，面向对象是基于原型
//原型对象特点：可以将自身的方法共享

function User(name,age){
	this.name=name;
	this.age=age;
}
User.prototype.fn=function(){
	return this.name+":"+this.age
}
var user=new User("llr",18);  //通过构造函数创建对象
console.log(user.fn())  //llr:18

//构造函数生成实例user的一个执行过程

//1.当使用了构造函数，并且new 构造函数(),后台会隐式执行new Object()创建对象
//2.将构造函数的作用域给新的对象，而函数体内的this就代表new Object()出来的这个对象
//3.执行构造函数
//4.返回新的对象

//在ES6中新引入了class类这个概念，通过class关键字可以定义类

class Person{  //定义一个类名称为Person
	constructor(name,age){  //constructor是一个构造方法，用来接收参数
		this.name=name; //this代表实例对象
		this.age=age;
	}
	fn(){ //给类添加一个方法，不要使用function
		return "我的名字是："+this.name+"我今年"+this.age+"岁了"
	}
}

var person=new Person("张三",28);  //类的本质还是函数
console.log(person.fn()) //我的名字是：张三我今年28岁了

//注意事项：
//1.在类中声明方法的时候，不要用function关键字
//2.方法之间不用用逗号隔开，否则就会报错

console.log(typeof Person) //function  
console.log(Person==Person.prototype.constructor) //true



//继承

//子类继承父类

class Colors{
	constructor(name,color){
		console.log("我是父类")
		this.name=name;
		this.color=color;
	}
	fn(){
		console.log("我的名字是："+this.name+"我喜欢："+this.color+"颜色")
	}
}


//子类继承父类通过extends去继承
class Yellow extends Colors{
	constructor(name,color){
		super(name,color) //调用父类中的constructor(name,color)，用来新建父类中的this
		//在子类中constructor必须调用super(),调用这个方法之后才能使用this
	}
	fn(){
		console.log("我是子类")
		super.fn()
	}
}

var obj=new Yellow("张三","红色") 
obj.fn() //我的名字是：张三我喜欢：红色颜色
