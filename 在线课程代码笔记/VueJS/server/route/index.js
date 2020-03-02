const express = require("express");
const mysql = require("mysql");
const db = mysql.createPool({
    host: "localhost",  //数据库连接地址  域名或者ip地址
    user: "root",  //mysql的用户名  默认root
    port: "3306", //配置数据库的端口号，默认是3306,如果是3306可以不写
    password: "", //mysql密码，如果为空不用填写
    database: "shop" //连接数据库名称
})
/*
console.log(db)
let str = `SELECT * FROM user`
db.query(str, (err, data) => {
    if (err) {
        console.log("查询失败")
    }
    console.log(data)
})
*/

module.exports = () => {
    const route = express.Router(); //express模块中的路由
    //route.get()
    //route.post()
    /* 没有封装代码冗余
    route.get("/product", (req, res) => {
        let str = `SELECT * FROM product`
        db.query(str, (err, data) => {
            if (err) {
                console.log("查询失败")
            }
            res.send(data)
        })
    })

    route.get("/category", (req, res) => {
        let str = `SELECT * FROM category`
        db.query(str, (err, data) => {
            if (err) {
                console.log("查询失败")
            }
            res.send(data)
        })
    })
*/
    let productSql = `SELECT product_name,product_price,product_img_url FROM product`;  //产品的sql查询语句
    let categorySql = `SELECT * FROM category`; //分类的sql查询语句

    //封装获取数据方法
    function getDataFn(sqlStr, res) {
        db.query(sqlStr, (err, data) => {
            if (err) {
                console.log(err)
                res.status(500).send("database err").end();
            }
            res.send(data)
        })
    }

    //产品列表接口
    route.get('/product', (req, res) => {
        getDataFn(productSql, res)
    })

    // 分类接口
    route.get('/category', (req, res) => {
        getDataFn(categorySql, res)
    })

    //某个类下面产品接口
    route.get("/categorygoods", (req, res) => {
        //localhost:3000/api/categorygoods?cid=1
        //get传值
        //SELECT * FROM product WHERE category_id=3
        console.log(req.query) //{cid:'1'}
        let cid = req.query.cid
        let goodsSql = `SELECT * FROM product WHERE category_id=${cid}`
        getDataFn(goodsSql, res)
    })

    //产品详情
    route.get("/goodsdetail", (req, res) => {
        //http://localhost:3000/api/goodsdetail?pid=1
        console.log(req.query)  //{ pid: '1' }
        let pid = req.query.pid
        let imageSql = `SELECT image_url FROM product_image WHERE product_id=${pid}`
        let productSql = `SELECT * FROM product WHERE product_id=${pid}`
        let productDetailDatas = []
        db.query(imageSql, (err, imagesData) => {
            if (err) {
                console.log(err);
                res.status(500).send("database err").end();
            } else {
                productDetailDatas.push(imagesData);
                db.query(productSql, (err, proData) => {
                    if (err) {
                        console.log(err);
                        res.status(500).send("database err").end();
                    } else {
                        productDetailDatas.push(proData[0]);
                        res.send({ "status": "success", "detailDatas": productDetailDatas })
                    }
                })
            }
        })
    })





    return route
}