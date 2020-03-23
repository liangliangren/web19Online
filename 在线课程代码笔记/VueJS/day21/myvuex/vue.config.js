module.exports = {
    devServer: {
        host: "localhost", //配置打开项目的域名，或者ip地址
        port: 9527,  //配置一个端口号
        open: true,  //自动在浏览器中打开
        proxy: {
            "/api": {
                target: "https://x.dscmall.cn/api",
                changeOrigin: true,  //允许跨域
                pathRewrite: {
                    "^/api": ""  //用/api代替  "https://x.dscmall.cn/api"
                }
            }
        }
    }
}