//下载
//cnpm install express --save

//引入
let expre=require("express");
let server=new expre();

//配置路由
server.get("/",(req,res)=>{
	res.send("hello everyone 武汉加油")
	res.end()
})

//get传值
//http://localhost:3000/login?username=llr&age=18
server.get("/login",(req,res)=>{
	console.log(req.query) //{ username: 'llr', age: '18' }
	res.send("hello 登录")
	res.end()
})

//动态路由
//http://localhost:3000/productdetail/123

server.get("/productdetail/:myId",(req,res)=>{
	console.log(req.params) //{ myId: '123' }
	let arr=[{
		"id":1,
		"title":"产品1"
	},{
		"id":2,
		"title":"产品2"
	},{
		"id":3,
		"title":"产品3"
	}]
	arr.forEach(function(value){
		let myId=req.params.myId
		console.log(myId)
		console.log(req.url)
		if(value.id==myId){
			res.send(value.title)
		}
	})
	
})

server.get("/about",(req,res)=>{
	res.send("hello 关于我们")
	res.end()
})

server.listen(3000,function(){
	console.log("3000running")
})
