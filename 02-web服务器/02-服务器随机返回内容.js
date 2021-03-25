// 1.引入HTTP模块
const http = require('http');
//2. 创建服务
//回调函数内部的req表示本次请求 res表示本次的响应 
//每一次收到浏览器的请求 回调函数就会执行一次
// res.end 表示结束本次请求 你括号内部设置响应体返回给用户内容 2.设置响应体
const server = http.createServer((req, res) => {
    //设置响应头
    res.setHeader('content-type', 'text/html;charset=utf-8')
    let arr = ['加油!你还没有老婆', '加油,你还没有好好打游戏', '加油,你还没有起飞呢']
    let t = Math.floor(Math.random() * arr.length);
    //res.end(括号里面必须是字符串类型)
    res.end(arr[t])
})

// 3.启动服务
server.listen(3002, () => {
    console.log("3002端口开始监听");
})