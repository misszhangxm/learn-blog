---
title: v-if和v-show的区别
date: 2023-03-13 15:44:35
tag: [v-if和v-show的区别]
category: vue
---

都可以控制元素的显示和隐藏

​ 1.v-show 时控制元素的 display 值来让元素显示和隐藏；v-if 显示隐藏时把 DOM 元素整个添加和删除

​ 2.v-if 有一个局部编译/卸载的过程，切换这个过程中会适当的销毁和重建内部的事件监听和子组件；v-show 只是简单的 css 切换

​ 3.v-if 才是真正的条件渲染；v-show 从 false 变成 true 的时候不会触发组件的声明周期，v-if 会触发声明周期

​ 4.v-if 的切换效率比较低 v-show 的效率比较高
