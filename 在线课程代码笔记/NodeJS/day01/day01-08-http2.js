//想在浏览器地址栏中输入
//localhost:3000/index.html
//localhost:3000/about.html
//localhost:3000/product.html

//导入http模块和fs模块
let http=require("http");
let fs=require("fs");
http.createServer(function(req,res){
	//req 请求
	//res 相应
	console.log(req.url) //  URL端口号之后的路径/about.html
	
	let pathname=req.url
	if(pathname=="/"){
		pathname="/index.html"  //默认加载首页
	}
	
	if(pathname!="/favicon.ico"){ //过滤请求favicon.ico
		fs.readFile("html"+pathname,(err,data)=>{
			if(err){
				res.write("404")
				res.end()
			}else{
				res.writeHead(200,{
					"content-type":"text/html;charset=utf-8"
				})
				res.write(data)
				res.end()  //响应结束
			}
		})
	}
	//res.end(); //响应结束
}).listen(3000,function(){
	console.log("3000runing")
})

