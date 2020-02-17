//NodeJS中的内置的events模块解决异步回调
//引入模块
let fs=require("fs")
let oEvents=require("events");

//实例化对象
let eventEmitter=new oEvents.EventEmitter();

function getListData(){
	fs.readFile("./list.json",function(err,data){
		if(err){
			console.log(err)
		}else{
			//广播数据
			eventEmitter.emit("shijianming",data)
			//console.log(data.toString())
		}
	})
}
getListData()
//绑定事件
eventEmitter.on("shijianming",function(data){
	//接收数据
	console.log(data.toString())
})

