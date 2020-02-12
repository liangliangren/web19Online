//封装ajax函数
let res=0
function ajax(method,url,params,value){
	console.log(params);
	setTimeout(function(){
		let response=res++
		value.next(response)
	},2000)
}
//ajax("get","www.baidu.com",10,[1,2,3,4])

let k;
let fn=function * (){
	//第一次请求
	let a=yield ajax("get","www.baidu.com",10,k)
	console.log(a)
	//第二次请求
	let b=yield ajax("get","www.baidu.com",a,k)
	console.log(b)
	//第三次请求
	let c=yield ajax("get","www.baidu.com",b,k)
	console.log(c)
}
k=fn()
k.next()

//类似网络请求
