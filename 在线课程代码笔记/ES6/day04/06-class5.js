//static 
class Box{
	static a(){ //定义一个静态方法
		return "hello everyone 我是一个静态方法"
	}
}

console.log(Box.a()) //hello everyone 我是一个静态方法
//注意事项:静态方法可以直接调用