const http = require('http')
const fs = require('fs')
const path = require('path')

const server = http.createServer((req, res) => {
    // 需求:1.根据本次请求中携带过来的URL不同,给浏览器返回不同的内容
    //如何获取当前请求的URL地址 req.url()方法
    // console.log("本次请求的url是", req.url);
    // 1.获取url 高级写法解构
    const { url } = req;
    console.log(url);
    if (url === '/' || url === '/index/index.html') {
        // 2.读出文件内容并返回
        const filePath = path.join(__dirname, 'index', "index.html")
        const content = fs.readFileSync(filePath, 'utf-8')
        //设置服务器返回值的类型
        res.setHeader('content-type', 'text/html;charset=utf-8')
        console.log(content);
        res.end(content)
    } else if (url === '/index/index.png') {
        // 2.读出文件内容并返回
        const filePath = path.join(__dirname, 'index', "index.png")
        const content = fs.readFileSync(filePath)
        console.log(content);
        //告知浏览器服务器返回值的类型
        res.setHeader('content-type', 'image/png')
        //res.end支持buffer格式
        res.end(content)
    } else if (url === '/index/index.css') {
        // 2.读出文件内容并返回
        const filePath = path.join(__dirname, 'index', "index.css")
        const content = fs.readFileSync(filePath, 'utf-8')
        console.log(content)
        //设置服务器返回值的类型
        res.setHeader('content-type', 'text/css;charset=utf-8')
        res.end(content)
    } else if (url === '/index/index.js') {
        // 2.读出文件内容并返回
        const filePath = path.join(__dirname, 'index', "index.js")
        const content = fs.readFileSync(filePath, 'utf-8')
        console.log(content)
        //设置服务器返回值的类型
        res.setHeader('content-type', 'application/javascript')
        res.end(content)
    } else {
        //设置状态码
        res.statusCode = 404
        res.end('404')
    }
})
server.listen('5000', () => {
    console.log('端口5000监听成功');
})