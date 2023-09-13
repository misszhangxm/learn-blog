---
title: 组件通信
date: 2023-03-13 15:44:35
tag: [组件通信]
category: vue
---
父组件给子组件传值(props)

```vue
<Children name="chenghuai" age=18/>
props: {
  name: string,
  age: {
    require: true
    default: 18
    type: Number
  }
}

```

子组件给父组件传值($emit)

```vue
this.$emit('add', 123)

<Children @add="cartAdd($event)"/>
```

ref

```vue
<Children ref="foo"/>

this.$refs.foo
```

兄弟组件传值（EventBus）

```js
class Bus {
  constructor(){
    this.callbacks = {}  // 存放事件名称
  }
    
  $on(name, fn){
    this.callbacks[name] = this.callbacks[name] || []
    this.callbacks[name].push(fn)
  }
  $emit(name, args){
     if(this.callbacks[name]){
         this.callbacks[name].forEach(cb => cb(args))
     }
  }
}
Vue.prptotype.$bus = new Bus()
this.$bus.$emit('foo')
this.$bus.$on('foo', this.handle)
```

parent root (适用于有共同祖先，比如两个兄弟组件)

```js
this.$parent.on('add', this.add)
this.$parent.emit('add')
```



attrs listeners(组先传递给子孙)

```js
// child 没有在props中声明foo
<p>{{attrs.foo}}</p>
<Children ref="foo"/>
    
// 隔代传递
<Children2 msg="hello" @some-event="onSomeEvent"/>
<GrandSon v-bind="attrs" v-on="$listeners"/>
<div @click="$emit('some-event', 'msg from grandson')"></div>
```



provide inject

```js
provide() {
 return {
  foo: 'foo'
 }
}
inject: ['foo']
```

vuex（比较复杂的组件传递数据）这里就不说了。。。。
