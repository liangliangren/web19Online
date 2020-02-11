//decorator 是一个函数，用来修改类的行为，在代码编译时产生作用。
function fn(target){
	target.flag=true;
}
@fn
class Box{}
console.log(Box.flag)

//无法运行