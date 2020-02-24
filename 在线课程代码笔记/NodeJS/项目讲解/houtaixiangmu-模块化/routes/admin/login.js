//登录的入口
let express=require("express");
let router = express.Router()
//引入 md5-node  加密模块
let md5 = require("md5-node");
let bodyParser = require("body-parser"); //接收form表单通过post提交的文本数据
//使用bodyParser
router.use(bodyParser.urlencoded({
	extended: false
}))
router.use(bodyParser.json()); //将接收的数据转成json对象

//引入自定义的模块
var DB = require("../../modules/db.js");
//console.log(DB)
router.get("/",(req,res)=>{
	//res.send("登录页面")
	res.render("admin/login")
})
router.post("/doLogin",(req,res)=>{
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
			res.redirect("/admin/product"); //redirect  重定向
		} else {
			res.send("<script>alert('登录失败');location.href='/admin/login'</script>")
		}
	})
})

//退出登录
router.get("/loginout", (req, res) => {
	//销毁session就可以退出了
	req.session.destroy(function(err) {
		if(err) {
			console.log(err)
		} else {
			res.redirect("/admin/login");
		}
	})
})

module.exports=router  //暴露router这个路由模块