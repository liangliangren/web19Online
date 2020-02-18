//中间件
//express是一个自身功能极简的web开发框架，本质上express调用各种中间件和路由来完成自身功能

//第三方中间件  body-parser  主体解析器
//作用：解析form表单通过post提交过来的文本数据  
//表单中  enctype="application/x-www-form-urlencoded" 的数据body-parser可以解析

let express=require("express");
//下载cnpm install body-parser --save
let bodyParser = require('body-parser') //引入
let app=new express()

//使用
app.use(bodyParser.urlencoded({ extended: false }))
//内置中间件-配置静态资源目录
app.use(bodyParser.json())  //转成json格式

app.post("/doLogin",function(req,res){
	console.log(req.body) //获取表单post提交的数据
})
app.listen(3000,function(){
	console.log("3000running")
})
