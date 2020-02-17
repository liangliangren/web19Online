/*
function getData(){
	var result="";
	setTimeout(function(){
		result="我是一个数据"
	},1000)
	return result;
}
console.log(getData()) //"" //没有获取到异步数据
*/

//回调函数机制得到异步数据
//改造上边的例子

function getDataFn(callback){
	var result="";
	setTimeout(function(){
		result="我是一个数据"
		callback(result)
	},1000)
}
getDataFn(function(data){
	console.log(data) //我是一个数据
})

