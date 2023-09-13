---
title: SPA首屏加载优化方案
date: 2017-04-13 15:44:35
tag: [SPA首屏加载优化方案]
category: Vue
---
```js
SPA首屏加载慢的原因:
整个页面不是全部渲染完成, 展示出当前视图的内容
如何实现计算首屏加载时间
document.addEventListener('DOMContentLoad', e=> {
   console.log('FCP')
})
Perfromance.getEntriesByName('first-contentful-paint')[0].startTime
{
    name: 'first-contentful-paint',
    entryType: 'paint',
    startTime: ''
    duration: 
}

1. 网络原因
2. 资源文件过大
3. 资源是否重复发送请求
4. 执行JS导致页面堵塞

优化方案
1. 减少入口文件体积
2. 路由懒加载，不同组件拆分成不同的代码模块
3. 静态资源本地缓存
4. UI按需加载
5. 组件重复打包
6. 图片资源压缩
7. SSR(1.资源加载优化 2.页面渲染优化)
```

