//createReadStream(path)   读取流

const fs=require("fs");
let fileRead=fs.createReadStream("./read.txt"); //创建一个对象
let count=0; //记录读取次数
let str="" //来存储每次读取的内容
fileRead.on("data",(chunk)=>{
	console.log(`${++count} 接收到:${chunk.length}`)
	str+=chunk
})

fileRead.on("end",()=>{
	console.log("读取结束")
})

fileRead.on("error",(error)=>{
	console.log(error)
})