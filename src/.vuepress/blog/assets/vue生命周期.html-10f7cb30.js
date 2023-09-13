import{_ as e,V as a,W as n,a0 as s}from"./framework-fd1dac66.js";const r={},o=s(`<h3 id="new-vue之后的生命周期过程" tabindex="-1"><a class="header-anchor" href="#new-vue之后的生命周期过程" aria-hidden="true">#</a> new Vue之后的生命周期过程</h3><ol><li><p>创建</p></li><li><p>初始化数据</p></li><li><p>编译template</p></li><li><p>挂载DOM</p></li><li><p>渲染</p></li><li><p>更新渲染</p></li><li><p>卸载</p></li></ol><h3 id="options-api-对应的-vue3-composition-api-生命周期-hooks" tabindex="-1"><a class="header-anchor" href="#options-api-对应的-vue3-composition-api-生命周期-hooks" aria-hidden="true">#</a> Options API 对应的 Vue3 Composition API 生命周期 Hooks</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>beforeCreate 实例创建之初      <span class="token operator">--</span><span class="token operator">--</span><span class="token operator">-</span><span class="token operator">&gt;</span>        setup   初始化插件

created 组件已经创建完成   <span class="token operator">--</span><span class="token operator">--</span><span class="token operator">&gt;</span>    setup  异步请求获取 dom并没有生成

beforeMount 组件挂载之前  <span class="token operator">--</span><span class="token operator">--</span><span class="token operator">&gt;</span> 	onBeforeMount   模板已经编译好 但是页面未更新

mounted 组件挂载之后   <span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">&gt;</span> 	onMounted  在<span class="token constant">DOM</span>上进行渲染完成

beforeUpdate 数据发生变化 更新之前  <span class="token operator">--</span><span class="token operator">--</span><span class="token operator">&gt;</span>	 onBeforeUpdate

updated 数据发生变化更新后  <span class="token operator">--</span><span class="token operator">-</span><span class="token operator">&gt;</span> 	onUpdated

beforeDestroy 实例销毁前  <span class="token operator">--</span><span class="token operator">--</span><span class="token operator">&gt;</span> 	onBeforeUnmount

destoryed 销毁后  <span class="token operator">--</span><span class="token operator">--</span><span class="token operator">&gt;</span> 	onUnmounted

activated keep<span class="token operator">-</span>alive 组件激活  <span class="token operator">--</span><span class="token operator">--</span><span class="token operator">&gt;</span> 	onActivated

deactivated keep<span class="token operator">-</span>alive 组件停用 <span class="token operator">--</span><span class="token operator">--</span><span class="token operator">&gt;</span> onDeactivated

errorCaptured 捕获实例的错误  <span class="token operator">--</span><span class="token operator">-</span><span class="token operator">&gt;</span> 	onErrorCaptured

errorHandler 捕获全局的错误  <span class="token operator">--</span><span class="token operator">-</span><span class="token operator">&gt;</span> onErrorHandler
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="errorcaptured-钩子可以捕获组件内部错误-errorcaptured-是组件内部钩子-当捕获一个来自子孙组件的错误时被调用-接收-error、-vm、info-三个参数-return-false-后可以阻止错误继续向上抛出" tabindex="-1"><a class="header-anchor" href="#errorcaptured-钩子可以捕获组件内部错误-errorcaptured-是组件内部钩子-当捕获一个来自子孙组件的错误时被调用-接收-error、-vm、info-三个参数-return-false-后可以阻止错误继续向上抛出" aria-hidden="true">#</a> errorCaptured 钩子可以捕获组件内部错误 errorCaptured 是组件内部钩子，当捕获一个来自子孙组件的错误时被调用，接收 error、 vm、info 三个参数，return false 后可以阻止错误继续向上抛出</h4><h3 id="vue3-新增的两个生命周期-不常用可以忽略" tabindex="-1"><a class="header-anchor" href="#vue3-新增的两个生命周期-不常用可以忽略" aria-hidden="true">#</a> vue3 新增的两个生命周期(不常用可以忽略)</h3><p><strong>onRenderTracked</strong>（只能在开发环境调试使用） 状态跟踪，它会跟踪页面上所有响应式变量和方法的状态（setup函数return返回的值）页面只要有update，它就会跟踪，然后生成一个event对象，通过event对象 我们可以查找程序的问题所在</p><p><strong>onRenderTriggered</strong>（只能在开发环境调试使用） 状态触发，它不会跟踪每一个值，而是给出变化值的信息，并且新值和旧值都会明确的展示出来，它只跟着发生变化的值，这样我么吧可以对程序进行精准的调试</p>`,8),t=[o];function p(i,l){return a(),n("div",null,t)}const c=e(r,[["render",p],["__file","vue生命周期.html.vue"]]);export{c as default};
