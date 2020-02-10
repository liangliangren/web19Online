//函数的扩展
//有参数并且参数有默认值
function fn(name,age=18){
	console.log(name+":"+age)
}
//fn("llr") //llr:18  //age读取的是默认值
//fn("张三",28) //"张三":28  28会替换age的默认值
//fn("李四","")   //李四:
fn("王五",) //王五:18

//使用函数参数有默认值时，不允许有同名的参数
/*
function fn2(name,name,age=18){
	console.log(name+":"+age)
}
*/
//fn2("llr",28) //报错，参数有同名的


//不定参数
// ...扩展运算符
function fn3(...val){
	console.log(val)  
}
//fn3(1,2,3,4) //[ 1, 2, 3, 4 ]
fn3(1,2)  //[ 1, 2 ]
