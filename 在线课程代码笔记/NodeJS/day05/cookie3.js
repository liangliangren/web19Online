//cookie-parser
//注意事项：cookie在不同的域名下面不能相互访问

//在本地配置一个域名 
//abc.com       顶级域名
//news.abc.com  二级域名
//2020.hnchennuo.com  二级域名
//mp.weixin.qq.com
//C:\Windows\System32\drivers\etc找到hosts 用记事本打开  在最底部添加  127.0.0.1 news.abc.com


//先下载   cnpm install cookie-parser --save
//		 cnpm install express --save
let express=require("express");

//引入
let cookieParser=require("cookie-parser");

let app=new express();  //new关键字可以省掉

//使用
app.use(cookieParser("这里的内容是对cookie的一个签名，也就是加密的"))

//设置cookie的路由
app.get("/setcookie",(req,res)=>{
	//第一个参数:名称
	//第二个参数：cookie的值
	//第三个参数：cookie的配置信息
	res.cookie("username","llr123-靓靓人",{
		maxAge:24*60*60*1000,    //maxAge配置cookie的过期时间
//		path:"/product",  //设置cookie到那个路径下面，也就是只有这个路径能够访问cookie
		signed:true
	})
	
	res.send("cookie设置成功")
})

//获取cookie
app.get("/getcookie",(req,res)=>{
	console.log(req.signedCookies)  //获取未签名的cookie
	res.send("cookie获取成功：欢迎"+req.signedCookies.username+"进入网站！！")
})


//
app.get("/product",(req,res)=>{
	console.log(req.signedCookies) 
	res.send("cookie获取成功：欢迎"+req.signedCookies.username+"进入网站！！")
})


app.listen(3000,function(){
	console.log("3000running")
})
