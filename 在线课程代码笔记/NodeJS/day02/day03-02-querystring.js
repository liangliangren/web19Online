//querystring模块
//query 查询   string字符串     查询字符串
//导入模块
let qs=require('querystring');

//parse() 可以将一个字符串反序列化为一个对象
console.log(qs.parse("name=llr&age=18&sex=nan")) //{ name: 'llr', age: '18', sex: 'nan' }

//stringify() 将一个对象系列化为一个字符串与parse相反

console.log(qs.stringify({ name: 'llr', age: '18', sex: 'nan' })) //name=llr&age=18&sex=nan

console.log(qs.stringify({ name: 'llr', age: '18', sex: 'nan' },"*"))  //name=llr*age=18*sex=nan

console.log(qs.stringify({ name: 'llr', age: '18', sex: 'nan' },"*","$")) //name$llr*age$18*sex$nan

//escape(str)  可以传入一个字符串进行编码

console.log(qs.escape("name=llr"))  //name%3Dllr
console.log(qs.escape("name=张三"))  //name%3D%E5%BC%A0%E4%B8%89

//querystring.unescape(str)  对传入的字符串进行解码
console.log(qs.unescape('name%3D%E5%BC%A0%E4%B8%89'))  //name=张三