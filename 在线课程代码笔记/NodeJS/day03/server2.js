//NodeJS中的内置的events模块解决异步回调
//引入模块
let oEvents=require("events");

//实例化对象
let eventEmitter=new oEvents.EventEmitter();

//绑定事件
eventEmitter.on("shijianming",function(){
	console.log("接收数据")
})

setTimeout(function(){
	console.log("广播数据")
	eventEmitter.emit("shijianming")
})
