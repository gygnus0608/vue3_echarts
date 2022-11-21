let express = require("express");
let app=express();
// 设置跨域
app.use(function(req,res,next){
    res.header('Access-Control-Allow-Origin', '*');

    res.header('Access-Control-Allow-Headers', 'Content-Type,Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');

    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE,OPTIONS');
    // 千万不要网%%￥￥￥###
    // 千万不要网
    // 千万不要网
    next();
})

// 引用路由组件
let chartOne = require('./router/one');
let chartTwo = require('./router/two');
let chartThree = require('./router/three');
let chartFour = require('./router/four');
let chinaMap = require('./router/map');

// 使用中间件来配置路由
app.use('/one',chartOne)
app.use('/two',chartTwo)
app.use('/three',chartThree)
app.use('/four',chartFour)
app.use('/china',chinaMap)

// 设置端口号
app.listen(8888)