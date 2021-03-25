const http = require('http')
const qs = require('querystring')

const server = http.createServer((req, res) => {
    if (req.url === '/add' && req.method === "POST") {
        // 请求中的data事件
        let result = "";
        req.on('data', re => {
            console.log('服务器接收到了post的一部分数据');
            console.log(re);
            result += rs  //这里会自动把buffer转成字符串
        })
    }
})


server.listen(8000, () => {
    console.log("8000端口监听中");
})