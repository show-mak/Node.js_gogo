//  1.创建express
const express = require('express')
const bodyParser = require('body-parser')
const multer = require('multer')

// console.log(express);
//创建一个服务
const app = express();


//下面这句的功能就是:将在请求体中携带的普通的键值的参数进行解析并存放在req.body中 应用于post请求中
app.use(express.urlencoded())
//下面这句的功能就是:将在请求体中携带JSON字符串参数解析出来并存放在req.body中 应用于post请求中
app.use(express.json())
//下面这句的功能就是:配置multer 用来保存file参数
const index = multer({ dest: 'index/' }) //uploads表示一个目录名，你也可以设置成其它的


// 1. 初试express框架
app.get('/', (req, res) => {
    res.send('hellow,express')
})

// 2.托管静态资源  
// 目标:实现一个web服务器让用户通过url访问index文件夹

app.use('/xiaomi_project', express.static('xiaomi_project'))


//路由(后端)和接口(前端):用户访问某一个地址时:http://localhost:3000/abc,给用户一些反馈
//请求方式:get,post,delete,put,patch
//3.无参类型的GET请求 当用户以get类型请求/abc时,执行后面的回调函数
app.get('/get', (req, res) => {
    const data = {
        msg: "请求成功",
        status: 200,
        data: {
            "name": "金秀贤"
        }
    }
    res.json({
        code: 200,
        msg: "获取数据成功"
    })
})


// 4.有参类型的GET请求
app.get('/admin/category/search', (req, res) => {
    //express框架会将查询字符串自动存入req.qurey中
    const { id } = req.query
    // 安全判定
    if (!id) {
        res.status(400).json({
            code: 400,
            msg: "获取数据失败"
        })
    }
    const data = {
        code: 200,
        msg: "数据获取成功",
        data: [{
            code: 200,
            msg: "获取数据成功",
            data: [{
                id: 2,
                name: "金秀贤",
                slug: "东野圭吾"
            }]
        }]
    }
    res.json(data)

})


// 5.post请求--参数--普通键值对 参数放在请求体中 
//post请求的参数有三种情况:1.普通的键值对 2.json对象 3.文件上传
app.post('/admin/category/add', (req, res) => {
    //1.接收参数
    console.log("接收参数", req.body, req.header);

    if (req.body == null) {
        res.status(400).json({
            code: 400,
            msg: "未上传数据"
        })
        return
    }
    // 2. 参数的处理
    // 3.返回数据

    res.json({
        code: 200,
        msg: "获取数据成功"
    })

})

// 6.post请求--参数--json格式 参数放在请求体中 
app.post('/admin/json', (req, res) => {
    console.log("接收参数", req.body, req.headers);
    if (req.body === null) {
        res.status(400).json({
            code: 400,
            msg: "本次请求失败"
        })
        return
    }
    res.json({
        code: 200,
        msg: "请求数据成功"
    })

})


// 7.post请求--参数--文件上传--接收FormDate格式的参数 参数放在请求体中 
app.post("postfile", index.single(''), (req, res) => {

})




//启动服务器
app.listen(3000, () => {
    console.log('3000端口监听中');
})

