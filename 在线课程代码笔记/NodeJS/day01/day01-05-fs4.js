//createWriteStream(path)  写入流
let fs=require("fs");
var data="我是即将要写入的数据\n"
//创建一个写入流，将数据写入write.txt
var writeFile=fs.createWriteStream("./write.txt")
 //写入数据并且定义编码格式
 for(var i=0;i<1000;i++){
 	writeFile.write(data,"utf8")
 }
writeFile.end() //写入完成
writeFile.on("finish",()=>{
	console.log("写入完成")
})
writeFile.on("error",(err)=>{
	console.log(err)
})
console.log("执行完毕") //

//异步操作