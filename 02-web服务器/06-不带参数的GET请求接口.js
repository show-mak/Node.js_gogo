//1.创建web服务器
const http = require('http')
const fs = require('fs')
const path = require('path')
const server = http.createServer((req, res) => {
    // console.log(req);
    const { url, method } = req
    // console.log(url);
    if (url == "/index" && method == "GET") {
        // 获取文件地址
        const filePath = path.join(__dirname, 'index', 'index.json')
        console.log(filePath);
        // 设置请求头
        res.setHeader('content-type', 'application/json;charset=utf8')
        // 1.读文件
        const content = fs.readFileSync(filePath)
        // console.log(content);
        res.end(content)
    } else {
        res.statusCode = 404;
        res.end('404');
    }

})
server.listen(8017, () => {
    console.log("8017端口监听中");
})
