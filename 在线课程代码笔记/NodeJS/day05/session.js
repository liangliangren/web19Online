//express-session  
//下载  cnpm install express-session --save

let express=require("express");
let session = require('express-session')  //引入express-session
let app=new express();

//使用session
app.use(session({
  secret: 'keyboard cat',  //可以随便写。是一个字符串，作为服务器生成session的签名
  resave: false,  //强制保存session，即使没有变化也会强制存储，默认为true，通常设置为false
  saveUninitialized: true, //强制讲未初始化的session保存
  cookie: { //配置一个cookie
  	maxAge:30*60*1000  //定义过期时间
  	//secure: true  //允许通过https访问cookie
  }
}))

//配置路由

app.get("/login",(req,res)=>{
	req.session.userinfo="张三李四"
	res.send("登录成功")
})

app.get("/",(req,res)=>{
	//获取session
	if(req.session.userinfo){
		res.send("欢迎"+req.session.userinfo+"进入网站")
	}else{
		res.send("未登录")
	}
})

app.get("/product",(req,res)=>{
	//获取session
	if(req.session.userinfo){
		res.send("欢迎"+req.session.userinfo+"进入网站")
	}else{
		res.send("未登录")
	}
})

//退出登录
app.get("/loginout",(req,res)=>{
	//第一种退出登录的方式：cookie的过期时间设置为0
	//req.session.cookie.maxAge=0
	
	//第二种退出登录的方式：销毁session
	req.session.destroy(function(err){
		console.log(err)
	})
	res.send("退出登录")
})

app.listen(3000,()=>{
	console.log("3000running")
})
