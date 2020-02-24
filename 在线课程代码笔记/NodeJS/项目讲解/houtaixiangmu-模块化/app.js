//localhost:3000/admin/login  登录页面
//http://localhost:3000/admin/product  产品列表首页
//http://localhost:3000/admin/product/productadd  产品添加页面
//http://localhost:3000/admin/product/productedit 产品修改页面

//express   body-parser  ejs  express-session   multiparty  mongodb
let express = require("express");
let app = new express()

//引入express-session  中间件
let session = require("express-session");
app.use(session({
	secret: '这是签名', //任意一个字符串，作为服务器生成session的签名
	resave: false, //强制保存session，默认为true，通常设置为false
	saveUninitialized: true, //强制将未初始化的session存储，默认为投入俄，建议设置为true
	cookie: {
		//	  	secure: true   //https起效果
		maxAge: 30 * 60 * 1000 //过期时间  是毫秒数
	},
	rolling: true //每次发送请求，重新设置cookie的过期时间
}))

//引入路由模块
let admin = require("./routes/admin.js")

//配置模板引擎
app.set("view engine", "ejs");
//配置静态资源目录
app.use(express.static("public"));
app.use("/upload", express.static("upload"));

//配置路由
app.use("/admin", admin)

app.listen(3000, function() {
	console.log("3000running")
})