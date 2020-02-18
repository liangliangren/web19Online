//
let express=require("express");
//console.log(express)
let ejs=require("ejs");
let app=new express();
//先配置模版引擎
app.set("view engine","ejs");

//再配置模版位置
app.set("views",__dirname+"/views");

//配置路由
app.get("/",(req,res)=>{
	res.render("index")
})

//配置静态资源目录
//http://localhost:3000/static/images/01.jpg
// /static是一个虚拟目录
//app.use("/static",express.static("public"))

app.use(express.static("public"))  //http://localhost:3000/images/01.jpg

app.listen(3000,()=>{
	console.log("3000running")
})
