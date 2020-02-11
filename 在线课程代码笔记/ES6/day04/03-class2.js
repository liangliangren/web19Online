//类的继承

/*
class Father{
	constructor(){}
	get a(){
		return this.abc
	}
}

class Child extends Father{
	constructor(){
		super()
	}
	set a(a){
		this.abc=a
	}
}

let test=new Child()

test.a=10
console.log(test.a)  //undefined
*/


class Father{
	constructor(){}
	get a(){
		return this.abc
	}
	set a(a){
		this.abc=a
	}
}

class Child extends Father{  //通过extends继承父类，子类中必须有super()
	constructor(){
		super()
	}
	
}

let test=new Child()

test.a=10
console.log(test.a)  //10