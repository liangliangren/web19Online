//stat 检测时文件还是文件夹
let fs=require("fs");  //导入模块
fs.stat("./1.txt",(err,stats)=>{
	if(err){
		console.log(err)
	}else{
		console.log("文件："+stats.isFile())  //文件true
		console.log(`文件夹:${stats.isDirectory()}`) //文件夹:false
	}
})
fs.stat("./html",(err,stats)=>{
	if(err){
		console.log(err)
	}else{
		console.log("文件："+stats.isFile())  //文件：false
		console.log(`文件夹:${stats.isDirectory()}`) //文件夹:true
	}
})

//创建文件夹mkdir
/*
fs.mkdir("./css",(err)=>{
	if(err){
		console.log(err)
	}else{
		console.log("创建成功")
	}
})
*/

//rmdir删除文件夹
/*
fs.rmdir("./csss",(err)=>{
	if(err){
		console.log(err)
	}else{
		console.log("删除成功")
	}
})
*/
//readdir读取目录

fs.readdir("./css",(err,files)=>{
	if(err){
		console.log(err)
	}else{
		console.log(files) //[ 'about.css', 'index.css', 'style.css' ] 得到一个数组
	}
})




