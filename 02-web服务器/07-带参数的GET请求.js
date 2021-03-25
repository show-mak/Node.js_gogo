//需求提供一个名为getList的接口
//（http://localhost:8083/getList?name=xxxx）
//，它以json字符串格式返回`db/data.json`中name为xxxx的数据


// 1.创建web服务器
// 1.1 
const http = require('http')
const path = require('path')
const fs = require('fs')
const qs = require('querystring')
//1.2 创建服务
const server = http.createServer((req, res) => {
    // res.end('ok')
    //获取地址
    // const { url, method } = req;
    // console.log(url, method);//   /getList?name=%E9%87%91%E7%A7%80%E8%B4%A4  ; GET  
    //2.1 解析拆分查询字符串
    const [url, queryStr] = req.url.split('?')
    // console.log(url, queryStr):  /getList  ; name=%E9%87%91%E7%A7%80%E8%B4%A4

    //2.需求提供一个名为getList的接口请求方式为GET
    if (url == '/getList' && req.method == "GET") {
        // 2.1 当你的请求是get类型，并且地址是 / getList时，解析查询字符串
        // 2.2将查询字符串转成对象
        const qsObj = qs.parse(queryStr);
        // console.log(qsObj):{name:'金秀贤}

        // 3.设置请求头
        res.setHeader('content-type', 'application/json;charset=utf-8')
        // 获取路径 读出内容
        const filePath = path.join(__dirname, 'index', 'index.json');
        // console.log(filePath);
        const content = fs.readFileSync(filePath, 'utf-8');
        // console.log(content); 即index.json内的数据
        // 2.3将JSON字符串内容转成复合数据类型
        const arr = JSON.parse(content)
        // 2.4查找对应的数据 使用数组的find()方法
        const rs = arr.find(item => {   //此方法只有一个参数item item代表的是数组中所有的数据
            if (item.name === qsObj.name) {
                return true
            } else {
                return false
            }
        })
        const result = JSON.stringify(rs)
        res.end(result)
    } else {
        res.statusCode = 404;
        res.end('404')
    }
})
//1.3 启动服务器
server.listen(8055, () => {
    console.log("8055端口监听中");
})