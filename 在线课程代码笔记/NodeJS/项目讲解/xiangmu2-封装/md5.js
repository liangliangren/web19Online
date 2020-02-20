//加密模块
//md5-node   
//下载  cnpm install md5-node --save
let md5=require("md5-node");
console.log(md5("123456")) //e10adc3949ba59abbe56e057f20f883e

console.log(md5("654321")) //c33367701511b4f6020ec61ded352059


db.user.update({"username":"admin","password":"123456"},{"username":"admin","password":"e10adc3949ba59abbe56e057f20f883e"})
