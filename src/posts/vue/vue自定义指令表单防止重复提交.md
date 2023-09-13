---
title: 表单防止重复提交
date: 2023-03-13 15:44:35
tag: [自定义指令表单防止重复提交]
category: vue
---

#### 表单防止重复提交

```js
Vue.directive('throttle', {
  bind:(el, binding) => {
    let throttleTime = binding.value
    if(throttleTime) {
      throttleTime = 200
    }
  }
  
  let cbFun
  el.addEventListener('click', event => {
    if(!cbFunc) {
      cbFunc = setTimeout(() => {
       cbFun = null
	  }, throttleTime)
	} else {
        event && event.stopImmediatePropagation()
    }
  }, true)
})
<button @click="submit" v-throttle></button>
```

