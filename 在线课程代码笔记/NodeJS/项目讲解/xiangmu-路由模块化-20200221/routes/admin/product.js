var express = require('express')
var router = express.Router();  //使用express.Router创建一个路由实例，挂在路由
router.get("/",(req,res)=>{
	res.send("商品列表页面")
})

router.get("/add",(req,res)=>{
	res.send("添加商品页面")
})

router.get("/edit",(req,res)=>{
	res.send("修改商品页面")
})

router.get("/delete",(req,res)=>{
	res.send("删除商品页面")
})
module.exports=router