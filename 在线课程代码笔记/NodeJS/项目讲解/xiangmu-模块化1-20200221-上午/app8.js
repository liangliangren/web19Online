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
let md5 = require("md5-node");

let bodyParser = require("body-parser"); //接收form表单通过post提交的文本数据

//下载模块 cnpm install multiparty --save 用于接收表单中的文件数据
let multiparty = require('multiparty');

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
//引入自定义的模块
var DB = require("./modules/db.js");

//1.配置模板引擎
app.set("view engine", "ejs");

//2.配置模板目录，如果不配置会默认去views里面寻找模板

//3.配置一个静态资源，使用内置中间件
app.use(express.static("public")) //和views同级的public
app.use("/upload",express.static("upload")) //上传图片存放位置
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
	//console.log(req.body) //{ username: '李四', password: '123456' }
	let user = req.body.username
	let pass = md5(req.body.password) //加密后的密码
	//连接数据库-查询数据
	//使用DB模块中的find方法
	DB.find("user", {
		username: user,
		password: pass
	}, function(err, data) {
		//console.log(data)
		if(err) {
			console.log(err)
			return;
		}
		if(data.length > 0) {
			console.log("登录成功")
			req.session.userinfo = data[0]
			res.redirect("/product"); //redirect  重定向
		} else {
			res.send("<script>alert('登录失败');location.href='/login'</script>")
		}
	})
})
//产品首页
app.get("/product", (req, res) => {
	console.log(req.session.userinfo)
	//在数据库中先添加几条数据
	//db.product.insert({"title":"手机","price":"1999","postage":"20","imgUrl":""})
	//读取product集合中的数据
	DB.find("product", {}, function(err, data) {
		if(err) {
			console.log(err)
			return;
		}
		//console.log(data) //这个就是product集合中的数据，得到一个数组
		res.render("product", { //product 指的是product.ejs
			productList: data
		});
	})
})
//增加产品页面
app.get("/productadd", (req, res) => {
	res.render("productadd"); //product 指的是product.ejs
})

app.post("/doProductAdd",(req,res)=>{
	//获取表单通过post提交的文件（图片）数据
	var form = new multiparty.Form();
	//console.log(form)
	form.uploadDir="upload";  //定义上传图片的保存地址，upload这个文件夹必须存在
	
	form.parse(req,function(err, fields, files){
		//console.log(fields) //获取表单的文本数据
//		fields={
//		  title: [ 'qqq' ],
//		  price: [ '111' ],
//		  postage: [ '11' ],
//		  description: [ '22313123' ]
//		}
		var title=fields.title[0]
		var price=fields.price[0]
		var postage=fields.postage[0]
		var description=fields.description[0]
		var imgUrl=files.imgUrl[0].path
		
		//使用DB模块中的insert方法
		DB.insert("product",{
			title:title,
			price:price,
			postage,  //属性和属性值一致可以简写
			description,
			imgUrl
		},function(err,data){  //data在这没有使用
			if(!err){
				res.redirect("/product");  //如果插入数据成功，跳转页面到产品列表页面
			}
		})
		
		//console.log(files)  //获取表单的上传的文件信息
//		files={
//		  imgUrl: [
//		    {
//		      fieldName: 'imgUrl',
//		      originalFilename: '1478243670210855.jpg',
//		      path: 'upload\\ny8rEmOf9a_tnNnv0QnNN7pA.jpg',
//		      headers: [Object],
//		      size: 25072
//		    }
//		  ]
//		}
	})
	
})

//修改产品页面
app.get("/productedit", (req, res) => {
	//console.log(req.query) //{ id: '5e4e21ffb3095a23d15320f4' }
	//获取修改数据的id
	var id=req.query.id
	
	DB.find('product',{"_id":new DB.ObjectID(id)},function(err,data){
		//console.log(data)
		res.render("productedit",{ //product 指的是product.ejs
			productEditData:data[0]
		}); 
	})	
})
//修改商品提交数据路由
app.post("/doProductEdit",(req,res)=>{
	//获取表单通过post提交的文件（图片）数据
	console.log(req.query)
	var form = new multiparty.Form();
	//console.log(form)
	form.uploadDir="upload";  //定义上传图片的保存地址，upload这个文件夹必须存在
	
	form.parse(req,function(err, fields, files){
		var title=fields.title[0]
		var price=fields.price[0]
		var postage=fields.postage[0]
		var description=fields.description[0]
		var imgUrl=files.imgUrl[0].path
		var id=fields.myid[0];  //myid 在编辑页面 input type="hidden"
		console.log(fields)
		console.log(files)
		//修改图片  originalFilename属性有值
//		{
//		  imgUrl: [
//		    {
//		      fieldName: 'imgUrl',
//		      originalFilename: 'ab.gif',
//		      path: 'upload\\2_AKA7BeqkjUSSn8qRMq7Dp7.gif',
//		      headers: [Object],
//		      size: 36876
//		    }
//		  ]
//		}
		
		//修改文字没有修改图片，originalFilename属性为空
//		{
//		  imgUrl: [
//		    {
//		      fieldName: 'imgUrl',
//		      originalFilename: '',
//		      path: 'upload\\dBc5XHovlF6x_mVQE8bczrri',
//		      headers: [Object],
//		      size: 0
//		    }
//		  ]
//		}
		
		
		if(files.imgUrl[0].originalFilename){ //图片修改了
			var editData={
				title:title,
				price:price,
				postage,  //属性和属性值一致可以简写
				description,
				imgUrl
			}
		}else{ //图片没有修改
			var editData={
				title:title,
				price:price,
				postage,  //属性和属性值一致可以简写
				description
			}
		}

		//更新数据
		DB.update("product",{"_id":new DB.ObjectID(id)},editData,function(err){
			if(err){
				console.log(err)
			}
			res.redirect("/product")
		})
		
	})
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
app.get("/productdelete", (req, res) => {

})
app.listen(3000, () => {
	console.log("3000running")
})