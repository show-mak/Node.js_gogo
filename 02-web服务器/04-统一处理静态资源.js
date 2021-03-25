const http = require('http')
const fs = require('fs')
const path = require('path')


const mapExtCntentType = {
    ".html": "text/html;charset=utf-8",
    ".css": "text/css;charset=utf-8",
    ".png": "image/png",
    ".js": "application/javascript",
}
const server = http.createServer((req, res) => {
    const { url } = req
    //1. 拼接地址
    const filePath = path.join(__dirname, url)
    console.log(filePath);

    const ext = path.extname(url);

    //设置请求头
    // if (mapExtCntentType[ext]) {
    //     res.setHeader('content-type', mapExtCntentType[ext])
    // }
    mapExtCntentType[ext] && res.setHeader('content-type', mapExtCntentType[ext]);

    //2.读资源文件
    try {
        const content = fs.readFileSync(filePath)
        console.log(content);
        res.end(content)
    } catch (err) {
        res.statusCode = 404;
        res.end('404')
    }
})

server.listen(8003, () => {
    console.log('端口8003监听中');
})