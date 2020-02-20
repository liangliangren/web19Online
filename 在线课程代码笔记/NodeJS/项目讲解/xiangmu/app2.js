//需要的模块
//express
//ejs
//body-parser
//express-session
//cookie-parser
 let express=require("express");
 let ejs=require("ejs");
 let bodyParser=require("body-parser"); //接收form表单通过post提交的文本数据
 //引入mongodb数据库模块
 const MongoClient = require('mongodb').MongoClient;
 //配置数据库路径
 const DBurl = 'mongodb://localhost:27017';
 //连接数据库的名称
 const dbName = 'shop';
 
 let app=new express();  //new关键字可以省掉
 
 //使用bodyParser
 app.use(bodyParser.urlencoded({
 	extended:false
 }))
 app.use(bodyParser.json()); //将接收的数据转成json对象
 
 //1.配置模板引擎
 app.set("view engine","ejs");
 
 //2.配置模板目录，如果不配置会默认去views里面寻找模板
 
 //3.配置一个静态资源，使用内置中间件
 app.use(express.static("public")) //和views同级的public
 
 //4.配置路由
 //登录
 app.get("/login",(req,res)=>{
 	res.render("login");   //login 指的是login.ejs
 })
 //配置登录数据提交的接口doLogin
 app.post("/doLogin",(req,res)=>{
 	console.log(req.body) //{ username: '李四', password: '123456' }
 	//连接数据库-查询数据
 	MongoClient.connect(DBurl,function(err,client){
 		if(err){
 			console.log(err)
 			return;
 		}
 		const db = client.db(dbName); //固定结构，dbName是在上面引入的shop数据库
 		
 		var result=db.collection("user").find(req.body)
 		
 		result.toArray(function(err,data){
 			if(err){
	 			console.log(err)
	 			return;
	 		}
 			console.log(data)  //data得到一个查询结果为数组
 			if(data.length>0){
 				console.log("登录成功")
 				res.redirect("/product");  //redirect  重定向
 			}else{
 				res.send("<script>alert('登录失败');location.href='/login'</script>")
 			}
 			
 		})
 		
 		
 	})
 	
 	
 })
 //产品首页
 app.get("/product",(req,res)=>{
 	res.render("product");   //product 指的是product.ejs
 })
 //增加产品页面
 app.get("/productadd",(req,res)=>{
 	res.render("productadd");   //product 指的是product.ejs
 })
 //修改产品页面
 app.get("/productedit",(req,res)=>{
 	res.render("productedit");   //product 指的是product.ejs
 })
 //退出登录
 app.get("/loginout",(req,res)=>{
 	
 })
 //删除产品
 app.get("/delete",(req,res)=>{
 	
 })
 app.listen(3000,()=>{
 	console.log("3000running")
 })

