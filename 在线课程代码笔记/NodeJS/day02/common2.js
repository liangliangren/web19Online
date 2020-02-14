let tools=require("./tools.js");
console.log(tools) //{ sum: [Function: sum], fn: [Function: fn] }
console.log(tools.sum(2,3)) //5
console.log(tools.fn())  //我是一个工具文件，可以在这里定义方法


//1.可以把公共的功能，抽离成一个单独的js文件，作为一个模块，默认这个模块中的属性和方法是没有办法在外边访问的，可以通过exports或者module.exports暴露属性或者方法
//2.在需要这些模块的文件中通过require() 来引入模块
