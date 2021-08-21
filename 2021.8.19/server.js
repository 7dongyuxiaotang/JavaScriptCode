//1.引入express
const { response } = require('express');
const express = require('express');

//2.创建应用对象
const app = express();

//3.创建路由规则
// request 是对请求报文的封装
// response 是对响应报文的封装
app.get('/server',(request,response)=>{
    //设置响应头
    response.setHeader('Access-Control-Allow-Origin','*');
    //设置响应体
    response.send("HELLO IE-9");
});
app.post('/server',(request,response)=>{
    //设置响应头
    response.setHeader('Access-Control-Allow-Origin','*');
    //设置响应体
    response.send('HELLO PSOT');
});
app.get('/time',(request,response)=>{
    //设置响应头
    response.setHeader('Access-Control-Allow-Origin','*');
    setTimeout(()=>{
        response.send('延迟发送')
    },5000);
    //设置响应体
    // response.send('HELLO PSOT');
});


//4.监听端口启动
app.listen(8000,()=>{
    console.log("服务已经启动,8000 端口监听中....")
})