//url模块
let urlLib=require("url");  //引入模块

let str="https://www.baidu.com/?name=llr&age=18&sex=nan"

let obj=urlLib.parse(str,true)

console.log(obj)

//parse只有第一个参数
//Url {
//protocol: 'https:',
//slashes: true,
//auth: null,
//host: 'www.baidu.com',
//port: null,
//hostname: 'www.baidu.com',
//hash: null,
//search: '?name=llr&age=18&sex=nan',
//query: 'name=llr&age=18&sex=nan',
//pathname: '/',
//path: '/?name=llr&age=18&sex=nan',
//href: 'https://www.baidu.com/?name=llr&age=18&sex=nan'
//}


//parse中第二个参数为true

//Url {
//protocol: 'https:',
//slashes: true,
//auth: null,
//host: 'www.baidu.com',
//port: null,
//hostname: 'www.baidu.com',
//hash: null,
//search: '?name=llr&age=18&sex=nan',
//query: [Object: null prototype] { name: 'llr', age: '18', sex: 'nan' },
//pathname: '/',
//path: '/?name=llr&age=18&sex=nan',
//href: 'https://www.baidu.com/?name=llr&age=18&sex=nan'
//}


//format(urlObj)  parse() 的逆向操作

let str2=urlLib.format({
protocol: 'https:',
slashes: true,
auth: null,
host: 'www.baidu.com',
port: null,
hostname: 'www.baidu.com',
hash: null,
search: '?name=llr&age=18&sex=nan',
query: 'name=llr&age=18&sex=nan',
pathname: '/',
path: '/?name=llr&age=18&sex=nan',
href: 'https://www.baidu.com/?name=llr&age=18&sex=nan'
})
console.log(str2) //https://www.baidu.com/?name=llr&age=18&sex=nan


//resolve(a,b)  这个方法返回一个格式为"from/to"的字符串，是对传入的两个参数用"/"符号进行拼接，并返回    a/b
console.log(urlLib.resolve("https://www.baidu.com","login")) //https://www.baidu.com/login