//前端页面的入口
var express = require('express')
var router = express.Router();  //使用express.Router创建一个路由实例，挂在路由
router.get("/",(req,res)=>{
	res.send("我是首页")
})
router.get("/product",(req,res)=>{
	res.send("我是产品页面")
})

module.exports=router   //暴露router模块