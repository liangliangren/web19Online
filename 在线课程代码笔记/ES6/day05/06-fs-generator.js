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
//generator

function * readTxtFn(){
	yield read("1.txt");
	yield read("2.txt");
	yield read("3.txt");
}

let readTxt= readTxtFn()

readTxt.next().value.then(res=>{
	console.log(res.toString())
	return readTxt.next().value
}).then(res=>{
	console.log(res.toString())
	return readTxt.next().value
}).then(res=>{
	console.log(res.toString())
})








