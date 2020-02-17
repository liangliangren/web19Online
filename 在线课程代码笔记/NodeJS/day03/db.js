//DB   database

//数据库和文件的区别？
	//数据库中数据库表，表中有行和列，存储数据更方便
	//文件时指单个的
	
数据库分为

//NoSql   代表  mongoDB   指非关系型数据库  not only sql不仅仅是sql
	//存储数据的格式：key value   
	//没有行和列的概念，json形式存储
	
//什么时候建议使用
//1.对数据库高并发读写的需求
//2.对海量数据的高效存储和访问的需求
//3.对数据库高可扩展性

let obj=[{
	"id":1,
	"title":"标题1"
},{
	"id":2,
	"title":"标题2",
	"age":18
}]
	
//Sql	    代表mySql		指关系型数据库
//存储的是数据表，表中有行和列


//id    title    age   sex
//1      标题1    18    男
//2      ""       28    ""




//数据库的操作
//cls 回车就是清屏

//show dbs  查看所有的数据库列表
//use student 创建或者使用student数据库
//db.user.insert({"name":"llr"})  给数据库中新建一个集合user，并且给集合中插入一条数据
//show collections 显示当前数据库中都有哪些集合
//db.user.find()  查询当前集合中的所有数据
//db.user.find({"age":20})  查询user集合中的数据年龄等于20的数据
//db.user.find({"age":{$gt:20}})  //查询user集合中的数据年龄大于20的数据
//db.user.find({"age":{$gte:20,$lte:30}}) //查询user集合中的数据年龄大于等于20并且小于等于30的数据
//db.user.find({"name":/llr/})  //利用正则来查询数据  ---》查询user集合中的数据name值包含有llr的数据
//db.user.find({"name":/^llr/}) //利用正则来查询数据  ---》查询user集合中的数据name值以llr开头的数据
//db.user.find({"name":/llr$/}) //利用正则来查询数据  ---》查询user集合中的数据name值以llr结尾的数据
//db.user.find().count()  //查询user集合中总共有多少条数据
//db.user.findOne()     //查询user集合中的第一条数据
//db.user.find().limit(3)  查询user集合中前3条数据
//db.user.find().skip(3)   查询user集合中第三条之后的数据
//db.user.find().skip(3).limit(2)  查询user集合中跳过3条数据，在限制查询两条，起始查询的是 4/5条数据


//db.user.update({"name":"llr"},{$set:{"age":18}})   修改数据

//db.user.remove({"age":3})  删除user集合中name等于3的数据

// db.product.drop() 删除product集合

//删除数据库   
	//第一步：user 数据库
	//第二步：db.dropDatabase()

//大于  gt
//小于  lt
//大于等于  gte
//小于等于  lte




//db.user.insert({"id":"1","name":"李四","age":28})

//db.info.insert({"name":"张三","age":18})

//db.user.insert({"name":"张三","age":"20"})