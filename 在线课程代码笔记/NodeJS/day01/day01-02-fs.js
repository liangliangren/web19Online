//fs 文件系统模块  file system
//引入
let fs=require("fs")
//console.log(fs)
//读取文件
//readFile("文件路径",编码格式可选,callback)
fs.readFile("./1.txt","utf8",(err,data)=>{
	if(err){
		console.log(err)
	}else{
		console.log(data)
	}
})

//writeFile("文件路径","写入数据",callback)
/*
fs.writeFile("./2.txt","hello everyone",(err)=>{
	if(err){
		console.log(err)
	}else{
		console.log("写入成功")
	}
})
*/
//appendFile(文件路径,追加的数据,callback) 追加数据
fs.appendFile("./3.txt","我是新的数据-看看对不对",(err)=>{
	if(err){
		console.log(err)
	}else{
		console.log("数据追加成功")
	}
})


//注意事项:writeFile和appendFile这个两个方法，如果文件路径不存在，会自动创建一个文件

//unlink("要删除的文件路径",callback) 删除文件
fs.unlink("./a.txt",(err)=>{
	if(err){
		console.log(err)
	}else{
		console.log("删除成功")
	}
})

//rename(原来的文件路径，新的文件路径，callback) 重命名
fs.rename("./abc.txt","./style.css",(err)=>{
	if(err){
		console.log(err)
	}else{
		console.log("命名成功")
	}
})
