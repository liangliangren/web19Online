//express
//ejs
//cnpm install express ejs --save  同时下载express和ejs两个模块

let express=require("express");
let ejs=require("ejs");  //注意使用express的时候可以不引人ejs
let bodyParser=require("body-parser"); //下载cnpm install body-parser --save
//下载mongodb数据库模块 cnpm install mongodb --save
//引入mongodb模块
let MongoClient = require('mongodb').MongoClient;
//连接数据库路径
let DBurl='mongodb://localhost:27017';
let dbName = 'shop';  //数据库名称
let session = require('express-session')  //引入express-session

let app=new express();

//使用session
app.use(session({ //固定写法
	secret: 'keyboard cat', //可以随便写。是一个字符串，作为服务器生成session的签名
	resave: false, //强制保存session，即使没有变化也会强制存储，默认为true，通常设置为false
	saveUninitialized: true, //强制讲未初始化的session保存
	cookie: { //配置一个cookie
		maxAge: 30*60*1000 //定义过期时间
		//secure: true  //允许通过https访问cookie
	},
	rolling:true  //每次请求的时候重新设置cookie的过期时间
}))

//使用
app.use(bodyParser.urlencoded({ //固定写法
	extended:false
}))

app.use(bodyParser.json());   //转成json数据



//配置模板引擎
app.set("view engine","ejs");
//配置模板的所在目录，如果不配置会默认去views中寻找
//app.set("views",__dirname+"/views");

//配置静态资源目录
app.use(express.static("public"))

//使用中间件判断登录状态
app.use(function(req,res,next){
	//req.url  //  /login或者 /doLogin
	if(req.url=="/login" || req.url=="/doLogin"){
		next()
	}else{
		//判断有没有登录
		if(req.session.userinfo){
			//app.locals  配置一个本地存储，在任何模版中都可以使用
	  		app.locals["userinfo"]=req.session.userinfo
	  		next()
		}else{
			//如果没有登录，跳转到登录页面
			res.redirect("/login")
		}
	}
})

//登录页面
app.get("/login",(req,res)=>{
	res.render("login")
})

//点击登录按钮提交数据的接口
app.post("/doLogin",(req,res)=>{ //获取前台form表单通过post提交的文本数据
	console.log(req.body)  //{ username: 'admin', password: '123456' }
	//db.user.insert({"username":"admin","password":"123456"})
	MongoClient.connect(DBurl, function(err, client) {
	  if(err){
	  	console.log(err);
	  	return;
	  }
		  
	  const db = client.db(dbName);
	  
	  var result=db.collection("user").find(req.body)
	  //console.log(result)
	  //toArray() //转成数组形式
	  
	  result.toArray(function(err,data){
	  	console.log(data)
	  	
//	  	[
//		  {
//		    _id: 5e4cec1a0fed00c067388cf1,
//		    username: 'admin',
//		    password: '123456'
//		  }
//		]

		if(data.length>0){
	  		console.log("登录成功")
	  		
	  		//用session保存用户信息
	  		req.session.userinfo=data[0]
	  		console.log(req.session.userinfo)
	  		
	  		res.redirect("/product")
	  	}else{
	  		res.send('<script type="text/javascript">alert("登录失败");location.href="/login"</script>')
	  	}
	  })
	  
	  
	  client.close();
	});
	
})

//产品页面
app.get("/product",(req,res)=>{
	res.render("product")
})

//增加商品
app.get("/productadd",(req,res)=>{
	res.render("productadd")
})

//编辑商品页面
app.get("/productedit",(req,res)=>{
	res.render("productedit")
})
//退出登录路由
app.get("/loginout",(req,res)=>{
	req.session.destroy(function(err){ //销毁session，即为退出
		console.log(err)
	})
	res.redirect("/login");  //重定向到login页面
})

app.listen(3000,()=>{
	console.log("3000running")
})
