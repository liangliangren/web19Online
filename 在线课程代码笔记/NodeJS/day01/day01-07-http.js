//http模块是内置的服务器模块

//1.引入模块
let http=require("http");
//2.创建一个服务器对象

let server=http.createServer(function(request,response){
	//request  请求
	//response 响应
	response.writeHead(200,{ //设置一个响应头信息，解决中文乱码的问题
		"content-type":"text/html;charset=utf-8"
	});
	response.write("hello,你好"); //给前台相应内容
	response.write("好好学习，天天向上");
	response.end(); //相应结束
})

//3.监听端口号
server.listen(3000,function(){ //通常端口号为3000
	console.log("3000端口的服务器已经启动")
})


//运行文件
//在浏览器地址栏中输入   localhost:3000  就可以启动页面