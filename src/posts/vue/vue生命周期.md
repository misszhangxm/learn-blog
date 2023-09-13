---
title: 生命周期
date: 2023-03-13 15:44:35
tag: [生命周期]
category: vue
---
### new Vue之后的生命周期过程

1. 创建
2. 初始化数据
3. 编译template
4. 挂载DOM
5. 渲染
6. 更新渲染

7. 卸载

### Options API 对应的 Vue3 Composition API 生命周期 Hooks
```javascript
beforeCreate 实例创建之初      ----->        setup   初始化插件

created 组件已经创建完成   ---->    setup  异步请求获取 dom并没有生成

beforeMount 组件挂载之前  ----> 	onBeforeMount   模板已经编译好 但是页面未更新

mounted 组件挂载之后   ------> 	onMounted  在DOM上进行渲染完成

beforeUpdate 数据发生变化 更新之前  ---->	 onBeforeUpdate

updated 数据发生变化更新后  ---> 	onUpdated

beforeDestroy 实例销毁前  ----> 	onBeforeUnmount

destoryed 销毁后  ----> 	onUnmounted

activated keep-alive 组件激活  ----> 	onActivated

deactivated keep-alive 组件停用 ----> onDeactivated

errorCaptured 捕获实例的错误  ---> 	onErrorCaptured

errorHandler 捕获全局的错误  ---> onErrorHandler
```
#### errorCaptured 钩子可以捕获组件内部错误 errorCaptured 是组件内部钩子，当捕获一个来自子孙组件的错误时被调用，接收 error、 vm、info 三个参数，return false 后可以阻止错误继续向上抛出

### vue3 新增的两个生命周期(不常用可以忽略)

**onRenderTracked**（只能在开发环境调试使用）
 状态跟踪，它会跟踪页面上所有响应式变量和方法的状态（setup函数return返回的值）页面只要有update，它就会跟踪，然后生成一个event对象，通过event对象 我们可以查找程序的问题所在

**onRenderTriggered**（只能在开发环境调试使用）
 状态触发，它不会跟踪每一个值，而是给出变化值的信息，并且新值和旧值都会明确的展示出来，它只跟着发生变化的值，这样我么吧可以对程序进行精准的调试

