let express=require("express")
let app=new express()

//使用mongodb数据库模块先下载    cnpm install mongodb --save
//引入
const MongoClient = require('mongodb').MongoClient;
var DBURl="mongodb://localhost:27017"; //数据库路径
console.log(DBURl)

const dbName = 'shop';

app.get("/add",function(req,res){
	//连接数据库
	MongoClient.connect(DBURl,function(err,client){
		if(err){
			console.log(err)
			res.send("数据库连接失败")
			return;
		}
		const db=client.db(dbName)
		//console.log(db)
		db.collection("user").insertOne({"name":"成功1"},function(err,result){
			if(err){
				res.send("数据库写入失败")
				return;
			}
			res.end()
			client.close()
		})
		
	})
})

app.get("/edit",function(req,res){
	MongoClient.connect(DBURl,function(err,client){
		if(err){
			console.log(err)
			res.send("数据库连接失败")
			return;
		}
		const db=client.db(dbName)
		//console.log(db)
		db.collection("user").update({"name":"成功1"},{"name":"修改之后的数据"},function(err,result){
			if(err){
				res.send("数据库写入失败")
				return;
			}
			res.end()
			client.close()
		})
		
	})
})

app.get("/delete",function(req,res){
	MongoClient.connect(DBURl,function(err,client){
		if(err){
			console.log(err)
			res.send("数据库连接失败")
			return;
		}
		const db=client.db(dbName)
		//console.log(db)
		db.collection("user").remove({"name":"修改之后的数据"},function(err,result){
			if(err){
				res.send("数据库写入失败")
				return;
			}
			res.end()
			client.close()
		})
		
	})
})

app.listen(8090,function(){
	console.log("8090running")
})
