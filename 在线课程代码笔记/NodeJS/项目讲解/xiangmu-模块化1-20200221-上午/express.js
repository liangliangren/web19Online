

let express=require("express");
let app=new express()
//内置中间件-配置静态资源目录
//http:localhost:3000/css/style.css
app.use("/static",express.static("public"));  

app.get("/",(req,res)=>{
	res.send("首页")
})


app.listen(3001,function(){
	console.log("3000running")
})
