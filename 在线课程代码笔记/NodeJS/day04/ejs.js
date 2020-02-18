//ejs模版引擎
//下载   cnpm install ejs --save

let express=require("express");
let ejs=require("ejs");   
//注意事项：在使用express的时候ejs可以不用引入，直接使用
let app=new express();

//配置模版引擎
app.set("view engine","ejs")

//设置ejs模版所在的位置
//views默认会在这个文件夹中找模版
app.set("views",__dirname+"/views")

//配置路由
app.get("/",function(req,res){
//	res.send("首页")
	res.render("index")
})
app.get("/news",function(req,res){
//	res.send("首页")
	let arr=["111","222","333","444"]
	res.render("new",{
		list:arr  //list就是我们的数组arr
	})
})

app.get("/product",function(req,res){
//	res.send("首页")
	let obj=[{
		id:1,
		"title":"标题1"
	},{
		id:2,
		"title":"标题2"
	},{
		id:3,
		"title":"标题3"
	},{
		id:4,
		"title":"标题4"
	}]
	res.render("product",{
		listabc:obj  //list就是我们的数组obj
	})
})

//配置静态资源目录
app.use(express.static("public"))

app.listen(3000,function(){
	console.log("3000running")
})
