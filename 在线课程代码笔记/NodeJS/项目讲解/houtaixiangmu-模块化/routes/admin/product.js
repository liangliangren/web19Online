//产品入口
let express = require("express");
let router = express.Router();
//下载模块 cnpm install multiparty --save 用于接收表单中的文件数据
let multiparty = require('multiparty');
//引入自定义的模块
var DB = require("../../modules/db.js");
router.get("/", (req, res) => {
	//	res.send("产品列表首页")
	DB.find("product", {}, function(err, data) {
		if(err) {
			console.log(err)
			return;
		}
		//console.log(data) //这个就是product集合中的数据，得到一个数组
		res.render("admin/product/product", { //product 指的是product.ejs
			productList: data
		});
	})

})
router.get("/productadd", (req, res) => {
	res.render("admin/product/productadd")
})
router.post("/doProductadd", (req, res) => {
	//获取表单通过post提交的文件（图片）数据
	var form = new multiparty.Form();
	//console.log(form)
	form.uploadDir = "upload"; //定义上传图片的保存地址，upload这个文件夹必须存在

	form.parse(req, function(err, fields, files) {
		//console.log(fields) //获取表单的文本数据
		//		fields={
		//		  title: [ 'qqq' ],
		//		  price: [ '111' ],
		//		  postage: [ '11' ],
		//		  description: [ '22313123' ]
		//		}
		var title = fields.title[0]
		var price = fields.price[0]
		var postage = fields.postage[0]
		var description = fields.description[0]
		var imgUrl = files.imgUrl[0].path

		//使用DB模块中的insert方法
		DB.insert("product", {
			title: title,
			price: price,
			postage, //属性和属性值一致可以简写
			description,
			imgUrl
		}, function(err, data) { //data在这没有使用
			if(!err) {
				res.redirect("/admin/product"); //如果插入数据成功，跳转页面到产品列表页面
			}
		})

		//console.log(files)  //获取表单的上传的文件信息
		//		files={
		//		  imgUrl: [
		//		    {
		//		      fieldName: 'imgUrl',
		//		      originalFilename: '1478243670210855.jpg',
		//		      path: 'upload\\ny8rEmOf9a_tnNnv0QnNN7pA.jpg',
		//		      headers: [Object],
		//		      size: 25072
		//		    }
		//		  ]
		//		}
	})

})
router.get("/productedit", (req, res) => {
	//console.log(req.query) //{ id: '5e4e21ffb3095a23d15320f4' }
	//获取修改数据的id
	var id = req.query.id

	DB.find('product', {
		"_id": new DB.ObjectID(id)
	}, function(err, data) {
		//console.log(data)
		res.render("admin/product/productedit", { //product 指的是product.ejs
			productEditData: data[0]
		});
	})
})
router.post("/doProductEdit", (req, res) => {
	//获取表单通过post提交的文件（图片）数据
	console.log(req.query)
	var form = new multiparty.Form();
	//console.log(form)
	form.uploadDir = "upload"; //定义上传图片的保存地址，upload这个文件夹必须存在

	form.parse(req, function(err, fields, files) {
		var title = fields.title[0]
		var price = fields.price[0]
		var postage = fields.postage[0]
		var description = fields.description[0]
		var imgUrl = files.imgUrl[0].path
		var id = fields.myid[0]; //myid 在编辑页面 input type="hidden"
		console.log(fields)
		console.log(files)
		//修改图片  originalFilename属性有值
		//		{
		//		  imgUrl: [
		//		    {
		//		      fieldName: 'imgUrl',
		//		      originalFilename: 'ab.gif',
		//		      path: 'upload\\2_AKA7BeqkjUSSn8qRMq7Dp7.gif',
		//		      headers: [Object],
		//		      size: 36876
		//		    }
		//		  ]
		//		}

		//修改文字没有修改图片，originalFilename属性为空
		//		{
		//		  imgUrl: [
		//		    {
		//		      fieldName: 'imgUrl',
		//		      originalFilename: '',
		//		      path: 'upload\\dBc5XHovlF6x_mVQE8bczrri',
		//		      headers: [Object],
		//		      size: 0
		//		    }
		//		  ]
		//		}

		if(files.imgUrl[0].originalFilename) { //图片修改了
			var editData = {
				title: title,
				price: price,
				postage, //属性和属性值一致可以简写
				description,
				imgUrl
			}
		} else { //图片没有修改
			var editData = {
				title: title,
				price: price,
				postage, //属性和属性值一致可以简写
				description
			}
		}

		//更新数据
		DB.update("product", {
			"_id": new DB.ObjectID(id)
		}, editData, function(err) {
			if(err) {
				console.log(err)
			}
			res.redirect("/admin/product")
		})

	})

})
router.get("/productdelete", (req, res) => {
	console.log(req.query) //{ id: '5e4e21ffb3095a23d15320f4' }
	var id = req.query.id
	DB.deleteOneFn("product", {
		"_id": new DB.ObjectID(id)
	}, function(err) {
		if(err) {
			console.log(err)
		}
		res.redirect("/admin/product");
	})
})

module.exports = router