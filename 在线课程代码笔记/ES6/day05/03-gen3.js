//实现轮询
//request  请求
//response 相应
let requestFn=function * (){
	yield new Promise(function(resolve,reject){
		setTimeout(function(){
			resolve({
				code:200,
				data:{
					username:"llr"
				}
			},300)
		})
	})
}

//轮询函数
let reqFn=function(){
	let req=requestFn();
	//开始轮询
	let start=req.next()
	start.value.then(function(response){
		if(response.code!=200){
			setTimeout(function(){
				console.log("重新发送请求")
				reqFn()
			},1000)
		}else{
			console.log(response.data)  //{ username: 'llr' }
		}
	})
}
reqFn()



//