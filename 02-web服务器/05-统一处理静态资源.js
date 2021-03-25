const fs = require('fs')
const path = require('path')
const http = require('http')
const mapExtContentType = {
    ".html": "text/html;charset=utf-8",
    ".css": "text/css;charset=utf-8",
    ".png": "image/png",
    ".js": "application/javascript",
}
const server = http.createServer((req, res) => {
    const { url } = req
    const filePath = path.join(__dirname, url)
    console.log(filePath);
    const ext = path.extname(url);
    // 设置请求头
    mapExtContentType[ext] && res.setHeader('content-type', mapExtContentType[ext])
    try {
        const content = fs.readFileSync(filePath)
        console.log(content);
        res.end(content)
    } catch (err) {
        res.statusCode = 404;
        res.end("404")
    }
})
server.listen(8004, (req, res) => {
    console.log("8004端口监听中")
})





