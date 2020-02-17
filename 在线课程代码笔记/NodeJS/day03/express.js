//express基于 Node.js 平台，快速、开放、极简的 Web 开发框架
//使用express
//  cnpm install express --save
let express=require("express")  //引入express框架
let app=new express();  //实例化一个express对象
//console.log(app)
//express实例中有
//get()
//post()
app.get("/",function(req,res){
	res.send("hello express")
})
app.get("/login",function(req,res){
	res.send("hello login")
})
app.get("/register",function(req,res){
	res.send("hello 注册")
})

//get传值
//http://localhost:3000/news?username=llr&age=18
app.get("/news",function(req,res){
	console.log(req.query) //{ username: 'llr', age: '18' }
	let userinfo=req.query.username+req.query.age
	res.send(userinfo)
})

//动态路由
//http://localhost:3000/product/123
app.get("/product/:id",function(req,res){
	console.log(req.params) //{ id: '123' }
	res.send("hello 产品页面")
})

app.listen(3000,function(){
	console.log("3000running")
})

