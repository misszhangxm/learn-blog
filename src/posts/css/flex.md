---
title: flex兼容处理
date: 2017-06-06 09:39:32
tag: [布局]
category: Css
---

#### css样式
* flex：定义布局为盒模型
* flex-v：盒模型垂直布局
* flex-1：子元素占据剩余的空间
* flex-align-center：子元素垂直居中
* flex-pack-center：子元素水平居中
* flex-pack-justify：子元素两端对齐

```
.flex {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
}

.flex-v {
    -webkit-box-orient: vertical;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
}

.flex-1 {
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
}

.flex-align-center {
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
}

.flex-pack-center {
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
}

.flex-pack-justify {
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
}
```

** 兼容性：ios 4+、android 2.3+、winphone8+ **

#### 示例
```
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta content="width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=no" name="viewport">
<meta content="yes" name="apple-mobile-web-app-capable">
<meta content="black" name="apple-mobile-web-app-status-bar-style">
<meta content="telephone=no" name="format-detection">
<meta content="email=no" name="format-detection">
<style type="text/css">
.flex{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}
.flex-v{-webkit-box-orient:vertical;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}
.flex-1{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;}
.flex-align-center{-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;}
.flex-pack-center{-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}
.flex-pack-justify{-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}
</style>
</head>
<body>
<div class="flex flex-pack-justify">
    <div>模块一</div>
    <div>模块二</div>
    <div>模块三</div>
    <div>模块四</div>
</div>
</body>
</html>
```