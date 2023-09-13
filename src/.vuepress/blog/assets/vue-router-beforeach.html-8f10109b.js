import{_ as r,F as a,V as l,W as d,$ as t,a1 as s,Z as o,Y as i,a0 as u,X as e}from"./framework-fd1dac66.js";const v={},c=e("h1",{id:"vue-router-导航守卫",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#vue-router-导航守卫","aria-hidden":"true"},"#"),i(" vue-router (导航守卫)")],-1),m=u(`<p>记住 ** 参数或查询的改变并不会触发进入/离开的导航守卫。 **你可以通过观察 $route 对象来应对这些变化，或使用 beforeRouteUpdate 的组件内守卫。</p><h2 id="全局守卫" tabindex="-1"><a class="header-anchor" href="#全局守卫" aria-hidden="true">#</a> 全局守卫</h2><p>使用 router.beforeEach 注册一个全局前置守卫：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const router = new VueRouter({...})
router.beforeEach((to, from, next)=&gt;{
	//...
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当一个导航触发时，全局前置守卫按照创建顺序调用。守卫是异步解析执行，此时导航在所有守卫 resolve 完之前一直处于 等待中。 每个守卫方法接收三个参数：</p><blockquote><ol><li>to: Route: 即将要进入的目标 路由对象</li></ol></blockquote><ol start="2"><li>from: Route: 当前导航正要离开的路由</li><li>next: Function: 一定要调用该方法来 resolve 这个钩子。执行效果依赖 next 方法的调用参数。 <ul><li>next(): 进行管道中的下一个钩子。如果全部钩子执行完了，则导航的状态就是 confirmed （确认的）。</li><li>next(false): 中断当前的导航。如果浏览器的 URL 改变了（可能是用户手动或者浏览器后退按钮），那么 URL 地址会重置到 from 路由对应的地址。</li><li>next(&#39;/&#39;) 或者 next({ path: &#39;/&#39; }): 跳转到一个不同的地址。当前的导航被中断，然后进行一个新的导航。你可以向 next 传递任意位置对象，且允许设置诸如 replace: true、name: &#39;home&#39; 之类的选项以及任何用在 router-link 的 to prop 或 router.push 中的选项。</li><li>next(error): (2.4.0+) 如果传入 next 的参数是一个 Error 实例，则导航会被终止且该错误会被传递给 router.onError() 注册过的回调。</li></ul></li></ol><p>** 确保要调用 next 方法，否则钩子就不会被 resolved。 **</p><h2 id="全局解析守卫" tabindex="-1"><a class="header-anchor" href="#全局解析守卫" aria-hidden="true">#</a> 全局解析守卫</h2><p>在 2.5.0+ 你可以用 router.beforeResolve 注册一个全局守卫。这和 router.beforeEach 类似，区别是在导航被确认之前，同时在所有组件内守卫和异步路由组件被解析之后，解析守卫就被调用。</p><h2 id="全局后置钩子" tabindex="-1"><a class="header-anchor" href="#全局后置钩子" aria-hidden="true">#</a> 全局后置钩子</h2><p>你也可以注册全局后置钩子，然而和守卫不同的是，这些钩子不会接受 next 函数也不会改变导航本身：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>router.afterEach((to, from) =&gt; {
  // ...
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="路由独享的守卫" tabindex="-1"><a class="header-anchor" href="#路由独享的守卫" aria-hidden="true">#</a> 路由独享的守卫</h2><p>你可以在路由配置上直接定义 beforeEnter 守卫：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const router = new VueRouter({
  routes: [
    {
      path: &#39;/foo&#39;,
      component: Foo,
      beforeEnter: (to, from, next) =&gt; {
        // ...
      }
    }
  ]
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这些守卫与全局前置守卫的方法参数是一样的。</p><h2 id="组件内的守卫" tabindex="-1"><a class="header-anchor" href="#组件内的守卫" aria-hidden="true">#</a> 组件内的守卫</h2><p>最后，你可以在路由组件内直接定义以下路由导航守卫：</p><ul><li>beforeRouteEnter</li><li>beforeRouteUpdate (2.2 新增)</li><li>beforeRouteLeave</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const Foo = {
  template: \`...\`,
  beforeRouteEnter (to, from, next) {
    // 在渲染该组件的对应路由被 confirm 前调用
    // 不！能！获取组件实例 \`this\`
    // 因为当守卫执行前，组件实例还没被创建
  },
  beforeRouteUpdate (to, from, next) {
    // 在当前路由改变，但是该组件被复用时调用
    // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
    // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
    // 可以访问组件实例 \`this\`
  },
  beforeRouteLeave (to, from, next) {
    // 导航离开该组件的对应路由时调用
    // 可以访问组件实例 \`this\`
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>beforeRouteEnter 守卫 不能 访问 this，因为守卫在导航确认前被调用,因此即将登场的新组件还没被创建。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>beforeRouteEnter (to, from, next) {
  next(vm =&gt; {
    // 通过 \`vm\` 访问组件实例
  })
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意 beforeRouteEnter 是支持给 next 传递回调的唯一守卫。对于 beforeRouteUpdate 和 beforeRouteLeave 来说，this 已经可用了，所以不支持传递回调，因为没有必要了。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>beforeRouteUpdate (to, from, next) {
  // just use \`this\`
  this.name = to.params.name
  next()
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个离开守卫通常用来禁止用户在还未保存修改前突然离开。该导航可以通过 next(false) 来取消。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>beforeRouteLeave (to, from , next) {
  const answer = window.confirm(&#39;Do you really want to leave? you have unsaved changes!&#39;)
  if (answer) {
    next()
  } else {
    next(false)
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="完整的导航解析流程" tabindex="-1"><a class="header-anchor" href="#完整的导航解析流程" aria-hidden="true">#</a> 完整的导航解析流程</h2><ol><li>导航被触发。</li><li>在失活的组件里调用离开守卫。</li><li>调用全局的 beforeEach 守卫。</li><li>在重用的组件里调用 beforeRouteUpdate 守卫 (2.2+)。</li><li>在路由配置里调用 beforeEnter。</li><li>解析异步路由组件。</li><li>在被激活的组件里调用 beforeRouteEnter。</li><li>调用全局的 beforeResolve 守卫 (2.5+)。</li><li>导航被确认。</li><li>调用全局的 afterEach 钩子。</li><li>触发 DOM 更新。</li><li>用创建好的实例调用 beforeRouteEnter 守卫中传给 next 的回调函数。</li></ol>`,29);function b(h,f){const n=a("center");return l(),d("div",null,[t(n,null,{default:s(()=>[c]),_:1}),o(" more "),i(" vue-router 提供的导航守卫主要用来通过跳转或取消的方式守卫导航。有多种机会植入路由导航过程中：全局的, 单个路由独享的, 或者组件级的。 "),m])}const p=r(v,[["render",b],["__file","vue-router-beforeach.html.vue"]]);export{p as default};
