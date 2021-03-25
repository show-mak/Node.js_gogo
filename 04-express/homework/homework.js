const express = require('express')
// console.log(express);
const multer = require('multer')

const server = express();

//保存post请求 普通键值对格式参数 并且将参数保存在 req.body
server.use(express.urlencoded())

//保存post请求 JSON字符串格式参数 并且将参数保存在 req.body
server.use(express.json())

const public = multer({ dest: 'public/' })

//1.静态资源托管
server.use('/public', express.static('public'));

//2.post请求 -- 键值对格式参数
server.post('/post', (req, res) => {
    // console.log(req.body);
    res.send(req.body)
})

// 3.post请求--json字符串格式参数
server.post('/postJSON', (req, res) => {
    console.log(req.body);
    res.send(req.body)
})


server.post('/admin/article_publish', public.single('cover'), (req, res) => {
    console.log(req.file);
    console.log(req.body);
    res.send(req.body);


})

server.listen(3000, () => {
    console.log('3000端口监听中');
})

