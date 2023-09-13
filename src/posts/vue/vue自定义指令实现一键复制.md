---
title: 自定义指令实现一键复制
date: 2023-03-13 15:44:35
tag: [自定义指令实现一键复制]
category: vue
---

```js
const Vcopy = {
   bind(el, { value }) {
     el.$value = value; // 用一个全局属性来存传进来的值， 因为这个值在别的钩子函数里还会用到
     el.handler = () => {
       if(!el.$value) {
          // 值为空的时候，给出提示，我这里的提示用的是ant-design-vue的提示
          message.warning('无复制内容')
          return
       }
       // 动态创建textarea标签
       const textarea = document.createElement('textarea')
       // 将该textarea 设为 readonly 防止ios 下自动唤起键盘， 同时将textarea 移出可视区域
       textarea.readOnly = 'readOnly'
       textarea.style.position = 'absolute'
       textarea.style.left = '-9999px'
       // 将要copy的值赋给textarea 标签的value属性
       textarea.value = el.$value
       // 将textarea 插入到body中
       document.body.appendChild(textarea)
       // 选中值并复制
       textarea.select()
       // textarea.setSelectionRange(0, textarea.value.length)
       const result = document.execCommand('Copy')
       if(result) {
          Message.success('复制成功')
       }
       document.body.removeChild(textarea)
     }
     // 绑定点击事件, 就是所谓的一键copy啦
     el.addEventListener('click', el.handler)
   }
   // 当传进去的值更新的时候触发
   componentUpdated(el, { value }) {
     el.$value = value
   }
   // 指令与元素解绑的时候，移除事件绑定
   unbind(el) {
     el.removeEventListener('click', el.handler)
   }
}
export default vCopy
```

