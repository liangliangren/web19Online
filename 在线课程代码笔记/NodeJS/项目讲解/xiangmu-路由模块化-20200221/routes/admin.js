//后台路由的入口
var express = require('express')
var router = express.Router();  //使用express.Router创建一个路由实例，挂在路由
var login=require("./admin/login.js");
var product=require("./admin/product.js")
var user=require("./admin/user.js")

//配置路由
router.use("/login",login)
router.use("/product",product)
router.use("/user",user)

module.exports=router
