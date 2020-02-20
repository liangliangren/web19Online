//引入mongodb数据库模块
const MongoClient = require('mongodb').MongoClient;
//配置数据库路径
const DBurl = 'mongodb://localhost:27017';
//连接数据库的名称
const dbName = 'shop';

function connectDBFn(callback){
	//连接数据库
	MongoClient.connect(DBurl,function(err,client){
		if(err) {
			console.log(err)
			return;
		}
		const db = client.db(dbName); //固定结构，dbName是在上面引入的shop数据库
		callback(db)
	})
}

//暴露查询方法
exports.find=function(collectionName,json,callback){
	connectDBFn(function(db){
		var result=db.collection(collectionName).find(json);
		result.toArray(function(err,data){
			//db.close();  //关闭数据库
			callback(err,data); //拿到数据之后执行回调函数
		})
	})
}

//增加
exports.insert=function(collectionName,json,callback){
	connectDBFn(function(db){
		db.collection(collectionName).insertOne(json,function(err,data){
			callback(err,data) //拿到数据之后执行回调函数
		})
	})
}


//修改
//删除