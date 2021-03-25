// exports和module.exports的区别
//两个均为空对象 初始的时候两个指向同样的一块内存
// console.log(exports);
// console.log(module.exports);
exports = 1;
// module.exports = { b: 200 }  //这个时候打印出来的只会有{b:200}
//注意 当两个同时存在时 以module.exports为准

// exports.x = 100;
// module.exports.y = 200;
//打印出来的结果为{x:100,y:200} ,因为内存指向还是同一块地方


//exports = { a: 100 }  //复杂的数据类型会另外开辟一块新的内存
//module.exports.y = 100;
//打印出来的结果只有{y:100}

exports = { a: 1 }
module.exports = 2
