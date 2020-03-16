const express = require("express");
const mysql = require("mysql");
const md5 = require("md5-node");
const db = mysql.createPool({
    host: "localhost",  //数据库连接地址  域名或者ip地址
    user: "root",  //mysql的用户名  默认root
    port: "3306", //配置数据库的端口号，默认是3306,如果是3306可以不写
    password: "123456", //mysql密码，如果为空不用填写
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
    let productSql = `SELECT * FROM product`;  //产品的sql查询语句
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
        let imageSql = `SELECT image_id,image_url FROM product_image WHERE product_id=${pid}`
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

    //模糊搜索接口
    //SELECT * FROM product WHERE product_name LIKE "%电%"
    route.get("/search", (req, res) => {
        //产品价格
        //产品名称
        //localhost:3000/api/search?keywords=电&price=5999
        //http://localhost:3000/api/search?keywords=&price=3999
        console.log(req.query) //{ keywords: '电', price: '5999' }
        let keywords = req.query.keywords
        let price = req.query.price
        let kwSql = `SELECT * FROM product WHERE product_name LIKE "%${keywords}%"`
        let priceSql = `SELECT * FROM product WHERE product_price LIKE "%${price}%"`
        if (keywords != "") {
            getSearchFn(kwSql, res)
        } else if (price != "") {
            getSearchFn(priceSql, res)
        }
    })
    function getSearchFn(sqlStr, res) {
        db.query(sqlStr, (err, data) => {
            if (err) {
                console.log(err);
                res.status(500).send("database err").end()
            } else {
                if (data.length == 0) {
                    res.send("没有查询到相关数据").end()
                } else {
                    res.send(data).end()
                }
            }
        })
    }

    //用户注册
    route.post("/register", (req, res) => {
        console.log(req.body)  // '{"user_name":"admin","login_password":"123456"}': ''
        var obj = {}
        for (let objattr in req.body) {
            console.log(objattr)
            obj = JSON.parse(objattr)
        }
        console.log(obj.user_name)
        let user_name = obj.user_name;
        let login_password = md5(obj.login_password)
        // let user_phone = req.body.user_phone
        //INSERT INTO user (user_name,login_password) VALUES ("hello","123456")
        let userSql = `INSERT INTO user (user_name,login_password) VALUES ('${user_name}','${login_password}')`

        db.query(userSql, (err) => {
            if (err) {
                console.log("服务器异常")
            } else {
                res.send({ "status": "success", "msg": "注册成功" }).end()
            }
        })
    })
    //登录接口
    route.post("/login", (req, res) => {
        console.log(req.body)

        /*{
            '{"user_name":"llr","login_password":"123456"}': ''
        }*/
        var obj = {}
        for (let objattr in req.body) {
            console.log(objattr)
            obj = JSON.parse(objattr)
        }
        console.log(obj.user_name)

        let username = obj.user_name;
        let password = md5(obj.login_password)
        //SELECT * FROM user WHERE user_name="llr"
        let loginSql = `SELECT * FROM user WHERE user_name='${username}'`
        db.query(loginSql, (err, data) => {
            if (err) {
                console.log(err)
                res.send({ "status": 0, "msg": "服务器出错了" }).end()
            } else {
                if (data.length == 0) {
                    res.send({ "status": "-1", "msg": "该用户不存在" }).end()
                } else {
                    console.log(data[0].login_password)
                    if (password === data[0].login_password) {
                        req.session["user_id"] = data[0].user_id
                        res.send({ "status": "1", "msg": "登录成功" }).end()
                    } else {
                        res.send({ "status": "-2", "msg": "密码不正确" }).end()
                    }
                }
            }
        })
    })

    //用户信息接口
    route.get("/userinfo", (req, res) => {
        //localhost:3000/api/userinfo?uid=1
        //req.query.uid
        //SELECT user_name,user_phone,user_photo FROM user WHERE user_id=1
        let uid = req.query.uid
        console.log("session-id:" + req.session["user_id"])
        let userinfoSql = `SELECT user_name,user_phone,user_photo FROM user WHERE user_id=${uid}`
        db.query(userinfoSql, (err, data) => {
            if (err) {
                console.log(err)
                res.send({ "status": 0, "msg": "服务器出错了" }).end()
            } else {
                if (data.length == 0) {
                    res.status(500).send("没有数据").end()
                } else {
                    res.send({ "status": "success", "msg": data[0] }).end()
                }
            }
        })
    })



    return route
}