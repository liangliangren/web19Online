var express = require("express");
var app = new express()

//配置保存用户信息的
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

//1.配置模板引擎
app.set("view engine", "ejs");

//2.配置模板目录，如果不配置会默认去views里面寻找模板

//3.配置一个静态资源，使用内置中间件
app.use(express.static("public")) //和views同级的public
app.use("/upload", express.static("upload")) //上传图片存放位置

//引入模块
var admin = require("./routes/admin.js")
var index = require("./routes/index.js")

//localhost:3002/product  前台产品页面
app.use("/", index) //配置前台路由

//localhost:3002/admin/login  后台登录界面
app.use("/admin", admin) //配置后台界面路由
app.listen(3002, () => {
	console.log("3002running")
})