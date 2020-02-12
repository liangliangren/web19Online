
//假如说是第三方定义的一个模块
let username="llr";
let age=18;
let fn=function(){
	return username+":"+age
}
let obj={
	fn2:function(){
		return "我是对象中的方法"
	}
}
//暴露变量
export {
	username,
	age,
	fn,
	obj
}
