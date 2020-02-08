//模版字符串`` 
//1.可以作为普通字符串使用
let str=`abcd`  //普通字符串

//可以定义一个多行字符串
let str2=`今天是正月十五，
你吃元宵了吗？`

console.log(typeof str)
console.log(str2)


//2.作为模版字符串使用，可以在字符串中加入变量和表达式
	//字符串中使用变量 ${ 变量名 }
let name="张三"
let age=18
let userInfo=`my name is ${name} I am ${age} years old` //my name is 张三 I am 18 years old
console.log(userInfo)

function fn(){
	return "元宵节"
}

let oDay=`今天是${fn()} ${1+1}`
console.log(oDay) //今天是元宵节


//标签模版

var oHtml=`
	<ul>
		<li>列表1</li>
	</ul>
`
console.log(oHtml)


function fn2(stringArr,...values){
	let sum=""
	for(let i=0;i<stringArr.length;i++){
		sum+=stringArr[i]
		if(values[i]){
			sum+=values[i]
		}
	}
	return sum
}
console.log(fn2(["a","b","c"],"1","2","3"))  //a1b2c3






