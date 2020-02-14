//path nodejs中处理路径的模块
//E:\web19\NodeJS\day01\css\index.css

let path=require("path");
//path.basename(path[, ext])
console.log(path.basename('E:\\web19\\NodeJS\\day01\\css\\index.css'))  //index.css   文件名+后缀名

console.log(path.basename('E:\\web19\\NodeJS\\day01\\css\\index.css',".css")) //index 只有后缀名为css的文件名

//path.dirname(path) 获取文件夹路径
console.log(path.dirname('E:\\web19\\NodeJS\\day01\\css\\index.css')) //E:\web19\NodeJS\day01\css

//path.extname(path) 获取扩展名

console.log(path.extname('E:\\web19\\NodeJS\\day01\\css\\index.css')) //.css

//path.parse(path)  返回一个对象

console.log(path.parse('E:\\web19\\NodeJS\\day01\\css\\index.css'))

//{
//root: 'E:\\',   根目录
//dir: 'E:\\web19\\NodeJS\\day01\\css',  文件夹路径
//base: 'index.css',  文件路径
//ext: '.css',    扩展名
//name: 'index'   文件名
//}