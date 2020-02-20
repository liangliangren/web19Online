//需要的模块
//express
//ejs
//body-parser
//express-session
//cookie-parser
let express = require("express");
let ejs = require("ejs");
//在ejs中，设置全局数据的，在所有的页面中都可以使用
// app.locals["userinfo"]="张三"
//引入 md5-node  加密模块
let md5=require("md5-node");


let bodyParser = require("body-parser"); //接收form表单通过post提交的文本数据
//引入mongodb数据库模块
const MongoClient = require('mongodb').MongoClient;
//配置数据库路径
const DBurl = 'mongodb://localhost:27017';
//连接数据库的名称
const dbName = 'shop';
let app = new express(); //new关键字可以省掉

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

//使用bodyParser
app.use(bodyParser.urlencoded({
	extended: false
}))
app.use(bodyParser.json()); //将接收的数据转成json对象

//1.配置模板引擎
app.set("view engine", "ejs");

//2.配置模板目录，如果不配置会默认去views里面寻找模板

//3.配置一个静态资源，使用内置中间件
app.use(express.static("public")) //和views同级的public

//使用中间件判断登录是否登录
app.use(function(req, res, next) {
	if(req.url == '/login' || req.url == "/doLogin") {
		next(); //继续往下执行
	} else {
		if(req.session.userinfo) {
			app.locals["username"] = req.session.userinfo
			next()
		} else {
			res.redirect("/login") //如果没有登录，重定向到登录login页面
		}
	}
})

//4.配置路由
//登录
app.get("/login", (req, res) => {

	res.render("login"); //login 指的是login.ejs
})
//配置登录数据提交的接口doLogin
app.post("/doLogin", (req, res) => {
	console.log(req.body) //{ username: '李四', password: '123456' }
	let user=req.body.username
	let pass=md5(req.body.password) //加密后的密码
	//连接数据库-查询数据
	MongoClient.connect(DBurl, function(err, client) {
		if(err) {
			console.log(err)
			return;
		}
		const db = client.db(dbName); //固定结构，dbName是在上面引入的shop数据库

		var result = db.collection("user").find({
			username:user,
			password:pass
		})

		result.toArray(function(err, data) {
			if(err) {
				console.log(err)
				return;
			}
			console.log(data) //data得到一个查询结果为数组
			// 			data=[
			//			  {
			//			    _id: 5e4cec1a0fed00c067388cf1,
			//			    username: 'admin',
			//			    password: '123456'
			//			  }
			//			]
			if(data.length > 0) {
				console.log("登录成功")
				req.session.userinfo = data[0]
				res.redirect("/product"); //redirect  重定向
			} else {
				res.send("<script>alert('登录失败');location.href='/login'</script>")
			}

		})

	})

})
//产品首页
app.get("/product", (req, res) => {
	console.log(req.session.userinfo)
	
	//在数据库中先添加几条数据
	//db.product.insert({"title":"手机","price":"1999","postage":"20","imgUrl":""})
	//读取product集合中的数据
	MongoClient.connect(DBurl,function(err,client){
		if(err) {
			console.log(err)
			return;
		}
		const db = client.db(dbName); //固定结构，dbName是在上面引入的shop数据库
		let result=db.collection("product").find()
		result.toArray(function(err,data){
			if(err) {
				console.log(err)
				return;
			}
			console.log(data) //这个就是product集合中的数据，得到一个数组
			res.render("product",{//product 指的是product.ejs
				productList:data
			}); 
			
			
		})
		
	})
	
	
})
//增加产品页面
app.get("/productadd", (req, res) => {
	res.render("productadd"); //product 指的是product.ejs
})
//修改产品页面
app.get("/productedit", (req, res) => {
	res.render("productedit"); //product 指的是product.ejs
})
//退出登录
app.get("/loginout", (req, res) => {
	//销毁session就可以退出了
	req.session.destroy(function(err) {
		if(err) {
			console.log(err)
		} else {
			res.redirect("/login");
		}
	})
})
//删除产品
app.get("/delete", (req, res) => {

})
app.listen(3000, () => {
	console.log("3000running")
})