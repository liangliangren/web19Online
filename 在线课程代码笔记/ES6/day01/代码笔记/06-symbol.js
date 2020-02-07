//symbol [ˈsɪmbl] ES6中新增加的数据类型
//Number  String Boolean  Null Undefined  Symbol  Object
//Symbol 原始数据类型,不是对象，可以接受一个字符串作为参数，这个字符串就是Symbol的描述信息
//Symbol 的值是独一无二的，可以作为对象的一个属性来使用，保证属性是不相同的
let sy1=Symbol("abc")  
let sy2=Symbol("abc") 
console.log(sy1==sy2)  //false


//张三
let obj={
	num:1
}

let obj1={
	Symbol("abc"):"a"
}
//李四

let obj={
	num:10
}
let obj1={
	Symbol("abc"):"b"
}
//张三和李四代码在合并的时候会出现变量覆盖问题





