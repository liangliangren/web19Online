//这个是vue项目的配置文件 名字必须为vue.config.js
module.exports = {
    devServer: {
        host: "localhost",   //配置启动的域名，如果设置为0.0.0.0，所有的地址都可以访问
        port: "8081",        //配置端口号，默认是8080
        open: true,           //配置浏览器自动启动页面
        //proxy: "https://x.dscmall.cn/api/",  //配置单一的
        proxy: { //配置多个代理
            "/api": {
                target: "https://x.dscmall.cn/api/", //要访问的域名
                changeOrigin: true, //开启代理，允许跨域访问
                pathRewrite: {
                    "^/api": "" //这里可以理解为用"/api"代替target里面的地址
                }
            }
        }
    }
}