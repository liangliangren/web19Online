var express = require('express')
var router = express.Router();  //使用express.Router创建一个路由实例，挂在路由
router.get("/",(req,res)=>{
	res.send("显示用户列表的")
})
router.get("/add",(req,res)=>{
	res.send("增加用户的")
})
router.get("/edit",(req,res)=>{
	res.send("修改用户的")
})
router.get("/delete",(req,res)=>{
	res.send("删除用户的")
})
module.exports=router