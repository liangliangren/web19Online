//中间件
//express是一个自身功能极简的web开发框架，本质上express调用各种中间件和路由来完成自身功能

//中间件：就是一个函数，可以访问请求对象，响应对象


//路由中间件

let express=require("express");
let app=new express()


app.get("/",(req,res)=>{
	res.send("首页")
})
app.get("/news",(req,res,next)=>{
	console.log("我是路由中间件")
	next()
})
app.get("/news",(req,res)=>{
	res.send("新闻页面")
})

app.listen(3000,function(){
	console.log("3000running")
})
