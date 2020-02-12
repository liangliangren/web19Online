let username="张三";
let age=28;
export default username
//export default age

//export 和 export default的区别?

//1.在一个文件或者模块中export 和 import可以有多个，export default仅有一个
//2.export default中的default是对应的导出接口变量
//3.通过export方式导出，在导入时需要加{} export default不需要
//4.export default和export 向外暴露的成员，可以时任意变量
