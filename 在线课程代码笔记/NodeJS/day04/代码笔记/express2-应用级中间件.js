//中间件
//express是一个自身功能极简的web开发框架，本质上express调用各种中间件和路由来完成自身功能

//中间件：就是一个函数，可以访问请求对象，响应对象

//应用级中间件


//路由中间件
//错误处理中间件
//内置中间件
//第三方中间件


let express=require("express");
let app=new express()
//使用应用级中间件
	//应用：权限判断，判断有没有登录
	//匹配路由之前和匹配路由之后做的一系列的操作
app.use(function(req,res,next){
	console.log(new Date())
	next()
})

app.get("/",(req,res)=>{
	res.send("首页")
})
app.get("/news",(req,res)=>{
	res.send("新闻页面")
})

app.listen(3000,function(){
	console.log("3000running")
})
