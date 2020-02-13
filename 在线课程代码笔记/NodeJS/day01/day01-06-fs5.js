let fs=require("fs");

//创建一个读取流
let readStream=fs.createReadStream("./input.txt");
//创建一个写入流
let writeStream=fs.createWriteStream("./output.txt");

//pipe() 创建一个管道流
readStream.pipe(writeStream)
console.log("程序执行完毕")
