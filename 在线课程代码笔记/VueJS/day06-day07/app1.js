//同源策略

//http://www.a.com/a.js
//http://www.a.com/b.js

const http = require("http");
const urlLib = require("url");
const server = http.createServer(function (req, res) {
    console.log(urlLib.parse(req.url, true))
    // Url {
    //     protocol: null,
    //     slashes: null,
    //     auth: null,
    //     host: null,
    //     port: null,
    //     hostname: null,
    //     hash: null,
    //     search: '?username=123',
    //     query: [Object: null prototype] { callback: fn },
    //     pathname: '/',
    //     path: '/?username=123',
    //     href: '/?username=123'
    //   }
    //解构赋值
    const { pathname: url, query } = urlLib.parse(req.url, true)
    //前台访问地址 localhost:8080/login?callback=fn
    console.log(url)   //  /login
    //query   --->{callback:fn}  --->query.callback=fn
    if (url === "/login") {
        var data = {
            username: "llr",
            age: "18",
            sex: "男"
        }
        //query.callback()---->fn(data)  //执行方法
        var datastr = `${query.callback}(${JSON.stringify(data)})`
        res.end(datastr) //响应结束，给前台发送数据
    } else {
        res.end('404')
    }
    // const { pathname: pathname, query: query } = { pathname: "www.baidu.com", "query":  { username: '123' } }
});  //初始化一个服务器对象





server.listen(8080, () => {
    console.log("8080running")
})
