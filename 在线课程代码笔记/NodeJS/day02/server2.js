//fs模块
//http模块
let fs=require("fs");
let http=require("http");
let path=require("path");
//导入自定义模块
let mime=require("./getmime/getmime.js")
console.log(mime.getMime(".css"))



http.createServer(function(req,res){
	var pathname=req.url
	if(pathname=="/"){
		pathname="/index.html";  //默认加载首页
	}
	
	let extname=path.extname(pathname)
	//console.log(extname)
	if(pathname!="/favicon.ico"){ //过滤favicon.ico
		fs.readFile("html"+pathname,function(err,data){ //读取html文件夹下面的文件
			if(err){
				res.write("404")
				res.end()
			}else{
				let oMime=mime.getMime(extname)
				console.log(oMime)
				res.writeHead(200,{
					"content-type":oMime+";charset=utf-8"
				})
				res.write(data)
				res.end()
			}
		})
	}
	
}).listen(3000,function(){
	console.log("3000running")
})
