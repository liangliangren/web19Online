//需要的模块
//express
//ejs
//body-parser
//express-session
//cookie-parser
 let express=require("express");
 let ejs=require("ejs");
 let app=new express();  //new关键字可以省掉
 
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

