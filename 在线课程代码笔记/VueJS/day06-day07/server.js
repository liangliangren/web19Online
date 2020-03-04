//查询语句 SELECT user_name,user_age FROM `user` WHERE user_age >= 18 AND user_age < 30
//模糊查询 SELECT * FROM product WHERE product_name LIKE "%关键字%"


//插入语句 INSERT INTO `user` (user_name) VALUES ("liang")
//插入语句 INSERT INTO `user` (user_name,login_password,user_phone,user_age) VALUES ("靓靓人","123456","13673618137","28")
//插入语句 INSERT INTO 表名 (字段1,字段2,...) VALUES (值1,值2,...)

//更新数据 UPDATE `user` SET user_name="liangliang" WHERE user_name="liang"
//更新数据 UPDATE `user` SET user_name="abc",login_password="654321",user_phone="12345678900",user_age="10" WHERE user_id="7"
//更新数据 UPDATE 表名 SET 字段1=值1,字段2=值2,... WHERE 条件表达式

//删除数据  DELETE FROM `user` WHERE user_id="7"  删除满足条件的数据

//删除数据  DELETE FROM `user`   删除user表中所有的数据

//新建一个数据库名称为 shop

//在shop数据库中新建user 表     user_id, user_name,login_password,user_phone,user_sex,user_age


// 需要的模块
//express  搭建服务器
//body-parser  //处理表单通过post提交的文本数据   req.body
//cookie-parser //设置cookie
//cookie-session //设置登录用户不造作界面多长时间自动退出
//mysql //连接mysql数据库

//cnpm install 模块名 --save

const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cookieSession = require("cookie-session");
const mysql = require("mysql");

const server = new express(); //new关键字也可以省掉

//后台允许前端跨域请求数据开始
server.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');

    if (req.method == 'OPTIONS') {
        res.send(200);
        /make the require of options turn back quickly/
    } else {
        next();
    }
});
//后台允许前端跨域请求数据结束

// 使用bodyParser
server.use(bodyParser.urlencoded({
    extended: false
}))

server.listen(3000, () => {
    console.log("3000running")
});
//注意事项：匿名函数自执行，注意上面必须加上分号
//匿名函数自执行
(() => {
    //使用cookie-parser
    server.use(cookieParser())
    let sessionArr = [];
    for (let i = 0; i < 10000; i++) {
        sessionArr[i] = "hello-everyone" + Math.random() * 100 + i
    }
    server.use(cookieSession({
        name: "jiami",
        keys: sessionArr,  //加密数组，数组越复杂，越不容易破解
        maxAge: 30 * 60 * 1000 //设置过期时间
    }))
})();

let fn = require("./route/index.js")
server.use("/api", fn())  //http://localhost:3000/api/product
