//中间件
//express是一个自身功能极简的web开发框架，本质上express调用各种中间件和路由来完成自身功能

//中间件：就是一个函数，可以访问请求对象，响应对象


//路由中间件

let express=require("express");
let app=new express()
//内置中间件-配置静态资源目录
app.use(express.static("public"));  

app.get("/",(req,res)=>{
	res.send("首页")
})


app.listen(3000,function(){
	console.log("3000running")
})
