---
title: fs模块
date: 2020-05-4 20:22:38
tag: [fs模块]
category: Node
---
fs模块

fs filesystem

node操作文档文件夹

```
const fs = require('fs')
// 读取文件
fs.readFile(filename,[,options], callback(err, data));

err: 错误信息
data: buffer数据流对象，可用data.toString()转换成字符串；

// 异步读取
fs.readFile('./input.txt', function (err, data) {
    if (err) {
        return console.error(err);
    }
    console.log("异步读取：" + data.toString());
});
// 写入文件
fs.writeFile(file, data[, options], callback(err))

file: 文件名
data: 要写入文件的数据, 可以是字符串（String)或者Buffer(流)对象
options: 该参数是一个对象，内容如下：
encoding - 编码，默认值为utf8；
mode - 模式（权限），默认值为0666（可读、可写）；
常用打开文件的模式mode: 
r: 以读取模式打开文件.如果文件不存在抛出异常
r+: 以读写模式打开文件.如果文件不存在抛出异常
w: 以写入模式打开文件.如果文件不存在则创建
w+: 以读写模式打开文件.如果文件不存在则创建
flag - 文件打开行为，默认值为'w'

// 获取文件信息
fs.stat(path, callback(err, stats))

atime - 访问时间（access time）；
birthtime - 创建时间；
ctime - 状态修改时间（change time），显示的是文件的权限、拥有者、所属的组、链接数发生改变时的时间；
mtime - 修改时间（modify time），显示的是文件内容被修改的最后时间。

stats.birthtime.getDate()  .getMonth()  .getFullYear()

// 删除文件
fs.unlink(path, callback(err))
// 打开文件
fs.open(path, flags[, mode], callback(err, fd))
// 读取文件
fs.read(fd, buffer, offset, length, position, callback)
// 关闭文件
fs.close(fd, callback)
// 截取文件
fs.ftruncate(fd, len, callback)
// 创建目录
fs.mkdir(path[, mode], callback)
// 删除目录
fs.rmdir(path, callback)
// 读取目录
fs.readdir(path, callback(err, files))
path: 文件目录名（若目录不存在或者不是目录，则会将错误信息写入err）
files - 目录下的文件数组列表，其包含如下字段：
length - 数组大小，记录了该目录下文件和子文件夹的总数；
[0, 1, 2, 3, ...] - files[i]依次记录了文件名（以及子文件夹名）；
fs.readdir('./', function (err, files) { // 获取目录下所有文件名
    if (err) {
        return console.error(err);
    }
    for (var i=0; i< files.length; i++) {
        console.log(files[i].toString());
    }
})

fs.unlink 缓存管理(清空文件夹)
在接收文件时，服务器将受到大量的编码文件，当完成文件接收后，这些编码的文件仍然存放在服务器主机磁盘上。这些文件的存在有利于数据的恢复，但当其数量达到一定规模时，会对磁盘空间造成较大的压力，因此，应该采取合适的手段进行编码文件的数量控制，来保证磁盘空间的可用性。
	
// 删除传输文件时的临时文件
const fs = require('fs');
var desDir = "D:/nodejs/my-sql/uploadFiles/tmp/";

// 先获取该文件夹下所有文件名
fs.readdir(desDir, function (err, files) {
    if (err) {
        return console.error(err);
    }
    for (var i=0; i<files.length; i++) {
        // 使用 unlink 删除
        fs.unlink(desDir + files[i], function (err){
            if (err) {
                return console.error(err);
            }
            console.log("Successfully delete file " + files[i].toString()); // 注意应转换成字符串
        })
    }
})

追加写入
fs.appendFileSync('3.txt', 'world')

fs.appendFile('3.txt', 'world',(err) => {
 if(!err){
   fs.readFile('3.txt', 'utf8', (err, data) => {
      return console.error(err);
   })
 }
})

文件拷贝
fs.copyFileSync('3.txt', '4.txt')
fs.readFileSync('4.txt')
fs.copyFileSync('3.txt', '4.txt',(err) => {})
```

