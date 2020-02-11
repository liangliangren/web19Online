//export let userName="靓靓人"
//export 输出一个变量

let user="llr";
let age=18;
let userFn=function(){
	return "我的名字是："+user+","+"我的年龄是:"+age
}

export{  //属性和属性值一致，写成一个
	user,
	age,
	userFn
}
