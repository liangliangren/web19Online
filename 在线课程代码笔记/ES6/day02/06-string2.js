//字符串的扩展方法

//includes("字串"，开始的索引) 返回布尔值，判断是否找到参数字符串  
let str="abc def g abc"
console.log(str.includes("abc",5)) //true

//startsWith() 返回布尔值，判断参数字符串是否在原字符串开头
console.log(str.startsWith("abc")) //true

//endsWith() 返回布尔值，判断参数字符串是否在原字符串结尾
console.log(str.endsWith("abc")) //true

//说明：以上三个方法都可以接受两个参数，需要搜索的字符串，和可选的搜索起始位置索引。

//repeat()：返回新的字符串，表示将字符串重复指定次数返回。
console.log("hello".repeat(2)) //hellohello

//如果重复次数为小数，去着这个整数的向下取整次数
console.log("hello".repeat(2.5))

//如果repeat的参数为0到-1之间的小数，等同于重复0次
console.log("hello".repeat(-0.5)) //""会得到空的字符串

console.log("hello".repeat(NaN)) //""

//console.log("hello".repeat(Infinity)) //报错
//console.log("hello".repeat(-2))  //报错
console.log("hello".repeat(0.5)) //""


//padStart：返回新的字符串，表示用参数字符串从头部（左侧）补全原字符串。
//padEnd：返回新的字符串，表示用参数字符串从尾部（右侧）补全原字符串。
//以上两个方法
	//第一个参数：新字符串的长度
	//第二个参数：用来补全的字符串

console.log("9".padStart(3,"0")) // 009
console.log("9".padStart(5)) //"    9"


console.log("hello".padEnd(10,"-world")) //hello-worl