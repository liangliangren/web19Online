//后台总入口
let express=require("express");
let router = express.Router();  //定义一个路由实例

let login=require("./admin/login.js");
let product=require("./admin/product.js");

//使用中间件判断登录是否登录
router.use(function(req, res, next) {
	if(req.url == '/login' || req.url == "/login/doLogin") {
		next(); //继续往下执行
	} else {
		if(req.session.userinfo) {
			//req.app.locals 请求全局
			req.app.locals["username"] = req.session.userinfo
			next()
		} else {
			res.redirect("/admin/login") //如果没有登录，重定向到登录login页面
		}
	}
})

//配置路由

router.use("/login",login);
router.use("/product",product);   //第一个参数是url，第二个参数就是引入的模块




module.exports=router

