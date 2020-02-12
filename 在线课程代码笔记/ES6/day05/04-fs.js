//在nodejs中有很多内置模块
//fs  文件处理模块   file system
	//readFile("文件路径","编码格式可忽略",callback) 读取文件的方法
	
let fs=require("fs");  //引入nodejs的内置fs模块
//console.log(fs)
fs.readFile("./1.txt",'utf8',function(err,data){
	if(err){
		console.log(err)
	}else{
		console.log(data) //hello everyone
	}
})

//writeFile("写入的文件路径",写入的数据,callback) 写入方法
	//注意事项：如果写入路径文件不存在，会自动创建一个文件

fs.writeFile("./1.txt","abcd",function(err){
	if(err){
		console.log("写入失败")
	}else{
		console.log("写入成功")
	}
})

//appendFile("文件路径",追加的数据,callback)  //向文件中追加数据

fs.appendFile("./1.txt","hello everyone",(err)=>{
	if(err){
		console.log(err)
	}else{
		console.log("追加成功")
	}
})




