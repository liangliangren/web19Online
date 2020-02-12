let fs=require("fs");  //引入内置模块
//封装一个promise函数读取文件

const read=function(fileName){
	//promise
	//resolve 代表成功
	//reject  代表失败
	return new Promise((resolve,reject)=>{
		fs.readFile(fileName,(err,data)=>{
			if(err){
				reject(err)
			}else{
				resolve(data)
			}
		})
	})
}

read("./1.txt").then((res)=>{
	console.log(res.toString())  
	//toString() 在这里转换进制   
	//toString(8)转成8进制
	//toString(2)转成2进制
	//toString(16)转成16进制
	return read("./2.txt")
}).then((res)=>{
	console.log(res.toString())  
	return read("./3.txt")
}).then((res)=>{
	console.log(res.toString())  
})








