var express = require('express')
var router = express.Router(); //使用express.Router创建一个路由实例，挂在路由

//引入 md5-node  加密模块
let md5 = require("md5-node");
//获取表单中post提交的文本数据
let bodyParser = require("body-parser");
//引入自定义的DB模块
let DB = require("../../modules/db.js")

//使用bodyParser
router.use(bodyParser.urlencoded({
	extended: false
}))
router.use(bodyParser.json()); //将接收的数据转成json对象

router.get("/", (req, res) => {
	res.render("admin/login")
})
router.post("/doLogin", (req, res) => {
	res.send("登录提交")
})
module.exports = router