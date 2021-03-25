function add(a, b) {
    return a + b
}


// 导出模块 固定语法
module.exports = {
    add: add
}

//导出模块的第二种方式
// exports.add = add