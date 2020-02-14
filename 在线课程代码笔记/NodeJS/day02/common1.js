let http=require("http");
let config=require("./config.js");   //导入自定义模块
http.createServer((req,res)=>{
	console.log(config) //{ abc: '我是一个配置文件' }
	res.writeHead(200,{
		"content-type":"text/html;charset=utf-8"
	})
	res.write(config)
	res.end()
	
}).listen(3000,function(){
	console.log("3000running")
})
