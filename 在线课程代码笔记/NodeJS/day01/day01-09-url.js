//url模块
//http模块
let http=require('http');
let urlLib=require("url");
http.createServer((req,res)=>{
	//console.log(req.url) //  /login?username=llr&sex=nan
	if(req.url!='/favicon.ico'){
		let strUrl=req.url
		let obj=urlLib.parse(strUrl,true)  
		//第二个参数为true  得到obj对象中的query属性值为对象，不传默认为false，query属性值是字符串
		console.log(obj.query.username)
		res.writeHead(200,{
			"content-type":"text/html;charset=utf-8"
		})
		res.write(obj.query.username)
		res.end()
	}
	
	
}).listen(3000,function(){
	console.log("3000runing")
})


//Url {
//protocol: null,
//slashes: null,
//auth: null,
//host: null,
//port: null,
//hostname: null,
//hash: null,
//search: '?username=llr&sex=nan',
//query: 'username=llr&sex=nan',
//pathname: '/login',
//path: '/login?username=llr&sex=nan',
//href: '/login?username=llr&sex=nan'
//}

//parse(req.url,true)
//Url {
//protocol: null,
//slashes: null,
//auth: null,
//host: null,
//port: null,
//hostname: null,
//hash: null,
//search: '?username=llr&sex=nan',
//query: [Object: null prototype] { username: 'llr', sex: 'nan' },
//pathname: '/login',
//path: '/login?username=llr&sex=nan',
//href: '/login?username=llr&sex=nan'
//}