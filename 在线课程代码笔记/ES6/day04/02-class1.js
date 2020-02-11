//class类作为对象的模板被引入，可以通过class关键字定义类
//class类的本质是function

//ES5中定义类的方法
/*
function Person(name,age){
	this.name=name;
	this.age=age;
}
Person.prototype.fn=function(){
	return this.name+":"+this.age
}
var user=new Person("llr",18);
console.log(user.fn()) //llr:18
*/

//ES6中改写上面的例子
class Person{
	constructor(name,age){
		this.name=name;
		this.age=age;
	}
	fn(){
		return this.name+":"+this.age
	}
}
var user=new Person("llr",18);  //user就是new出来的实例对象
console.log(user.fn()) //llr:18

//class定义类
//1.在class类上添加的属性都是在原型prototype上添加的
//2.new实例的时候其实就是在调用构造函数这个方法
//3.class类的本质其实就是构造函数
//4.类中的this指向实例对象



//类分为匿名类和命名类

//如何定义匿名类
let cls=class{
	constructor(a){
		this.a=a
	}
}
console.log(cls)

//命名类
let cls2=class Test{    //Test雷鸣
	constructor(a){
		this.a=a
	}
}


//类的声明不能重复
class Test1{}
//class Test1{}
//报错  Identifier 'Test1' has already been declared












