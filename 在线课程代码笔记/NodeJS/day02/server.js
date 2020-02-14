//fs模块
//http模块
let fs=require("fs");
let http=require("http");
http.createServer(function(req,res){
	var pathname=req.url
	if(pathname=="/"){
		pathname="/index.html";  //默认加载首页
	}
	if(pathname!="/favicon.ico"){ //过滤favicon.ico
		fs.readFile("html"+pathname,function(err,data){ //读取html文件夹下面的文件
			if(err){
				res.write("404")
				res.end()
			}else{
				res.writeHead(200,{
					"content-type":"text/html;charset=utf-8"
				})
				res.write(data)
				res.end()
			}
		})
	}
	
}).listen(3000,function(){
	console.log("3000running")
})
