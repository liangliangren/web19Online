/*
let name="张三"
let age=18
let user={name,age}  //等价于   {name:name,age:age}
console.log(user)  //{ name: '张三', age: 18 }


let obj={
	fn:function(){
		console.log("123")
	},
	fn2(){
		console.log("456")
	}
}
obj.fn() //123
obj.fn2() //456


//拓展运算符（...）用于取出参数对象所有可遍历属性然后拷贝到当前对象。

let obj2={name:"llr",age:18}
let obj3={...obj2}  //复制对象
console.log(obj3) //{ name: 'llr', age: 18 }
*/
let age={age:18}
let name={name:"张三"}
let userInfo={...age,...name}  //将两个对象合并到一个对象中
console.log(userInfo)

let obj4={...null,...undefined,a:1,b:2}
console.log(obj4) //{ a: 1, b: 2 }


//Object.assign() //用于将源对象的所有可枚举属性复制到目标对象中
				//第一个参数：目标对象
				//后面的参数是源对象
				//注意事项：如果目标对象和源对象有相同的属性，则后面的属性会覆盖前面的属性

let target={a:1}
let obj5={a:100,b:2}
let obj6={a:1000,c:3}

Object.assign(target,obj5,obj6)
console.log(target) //{ a: 1000, b: 2, c: 3 }


//Object.is(value1, value2) 用来比较两个值是否严格相等，与（===）基本类似。

console.log(Object.is(1,1))  //true
console.log(Object.is([1],[1])) //false  //注意事项:数组是引用类型，不相等
console.log(Object.is({a:1},{a:1})) //false
console.log(Object.is("a","a")) //true

console.log(Object.is(+0,-0)) //false
console.log(+0===-0)  //true

console.log(NaN===NaN) //false
console.log(Object.is(NaN,NaN))  //true
 








