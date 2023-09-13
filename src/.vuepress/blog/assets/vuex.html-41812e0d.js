import{_ as n,V as s,W as a,Z as t,X as e,a0 as i}from"./framework-fd1dac66.js";const o={},c=e("p",null,"因为要做一个个人作品。也重新捡捡vuex Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式。 它采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化。",-1),l=i(`<h2 id="安装vuex" tabindex="-1"><a class="header-anchor" href="#安装vuex" aria-hidden="true">#</a> 安装vuex</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>yarn add vuex
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h2><ol><li>在项目 <code>src</code> 目录下新建 <code>store</code> 文件夹，并在其中新建 <code>index.js</code>文件。</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 官方结构目录
├── index.html
├── main.js
├── api
│   └── ... # 抽取出API请求
├── components
│   ├── App.vue
│   └── ...
└── store
    ├── index.js          # 我们组装模块并导出 store 的地方
    ├── actions.js        # 根级别的 action
    ├── mutations.js      # 根级别的 mutation
    └── modules
        ├── cart.js       # 购物车模块
        └── products.js   # 产品模块
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li><code>store</code> 文件夹中新建 <code>modules/bing.js</code> 文件，<code>modules</code> 是存放 <code>vuex</code> 模块的。</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>	// bing.js
	
	const state = {
	    imgList: [1,2,3,4,5,6,7,8,9,10],
		img: &#39;123&#39;
	}
	
	const getters = {
	    imgList: state =&gt; state.imgList
	}
	
	const actions = {
	    imgList(context){
	        window.console.log(arguments)  // 打印一下看看它都有哪些参数 见下图
	        // 通过输出可以发现他有两个参数
			// 第一个是包含 commit dispatch getters state ...等 (此处的 state getters均为当前模块的state getters)
			// 第二个则是 imgList
			//  官网说明如下
			// Action 函数接受一个与 store 实例具有相同方法和属性的 context 对象，
			// 因此你可以调用 context.commit 提交一个 mutation，或者通过 context.state 和 context.getters 来获取 state 和 getters。
			context.commit(&#39;imgList&#39;, value)
	    },
		img(context){
			//...
		}
	}
	
	const mutations = {
	    imgList(state, value) { // state 是当前模块的state value 是在调用时接收的参数
	        state.imgList = value;
	    }
	}
	
	export default {
	    namespaced: true,  // 启用模块命名空间， 防止命名冲突。
	    state,
	    getters,
	    actions,
	    mutations
	}
	
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>actions</strong></p><ul><li><code>Action</code> 函数接受一个与 <code>store</code> 实例具有相同方法和属性的 <code>context</code> 对象，因此你可以调用 <code>context.commit</code> 提交一个 <code>mutation</code>， 或者通过 <code>context.state</code> 和 <code>context.getters</code> 来获取 <code>state</code> 和 <code>getters</code>。</li><li><code>Action</code> 不受约束！我们可以在 <code>action</code> 内部执行异步操作。</li><li><code>Action</code> 通过 <code>store.dispatch</code> 方法触发：<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>this.$store.dispatch(&#39;imgList&#39;)  // 如此便可以调用 bing 模块 actions 中的 imgList 函数。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ul><p><strong>mutations</strong></p><ul><li><code>Mutation</code> 必须是同步函数</li><li>我自己的理解就是： mutation 就是一个事件注册的地方。在mutation改变数据。通过store.commit()调用提交。 达到修改store（vuex）内部的数据。</li></ul><ol start="2"><li>写入：</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>	import Vue from &#39;vue&#39;
	import Vuex from &#39;vuex&#39;
	import Bing from &#39;./modules/bing&#39;

	Vue.use(Vuex);
	const state = {}
	const actions = {}
	const mutations = {}
	
	export default new Vuex.Store({
	    modules: {
			// 模块都放到这里
	        Bing
	    },
	    actions,
	    state,
	    mutations,
	})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>在项目 <code>main.js</code> 中导入 <code>store/index</code></li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import Vue from &#39;vue&#39;
import App from &#39;./App.vue&#39;
import ElementUI from &#39;element-ui&#39;
import &#39;element-ui/lib/theme-chalk/index.css&#39;
import router from &#39;./router/index&#39;
import Axios from &#39;axios&#39;
import store from &#39;./store/index&#39;


Vue.config.productionTip = false
Vue.prototype.$axios = Axios

Vue.use(ElementUI)

new Vue({
  router,
  // 把 store 对象提供给 “store” 选项，这可以把 store 的实例注入所有的子组件
  store,
  render: h =&gt; h(App),
}).$mount(&#39;#app&#39;)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>现在就可以在别的地方使用了，例如在 <code>App.vue</code> 中使用</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>
<span class="token keyword">import</span> Heade <span class="token keyword">from</span> <span class="token string">&#39;./components/header.vue&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
	<span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;app&#39;</span><span class="token punctuation">,</span>
	<span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		Heade<span class="token punctuation">,</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token function">created</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>$axios<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;wwww.baidu.com&#39;</span><span class="token punctuation">,</span><span class="token punctuation">{</span>
			<span class="token literal-property property">params</span><span class="token operator">:</span><span class="token punctuation">{</span>
				<span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>

			<span class="token keyword">this</span><span class="token punctuation">.</span>$store<span class="token punctuation">.</span><span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token string">&#39;Bing/imgList&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&#39;这&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;是&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;传&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;给&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;imgList&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;的&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;值&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
			<span class="token comment">// 这里会掉用vuex bing模块actions中imgList函数。</span>
		<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span> <span class="token punctuation">(</span><span class="token parameter">error</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
			window<span class="token punctuation">.</span>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
			<span class="token comment">// 这样就能拿到imgList的数据了</span>
			<span class="token keyword">return</span> <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$store<span class="token punctuation">.</span>state<span class="token punctuation">.</span>Bing<span class="token punctuation">.</span>imgList
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>vue单页面应用刷新网页后vuex的state数据丢失的解决方案</p><ol><li><p>产生原因 其实很简单，因为store里的数据是保存在运行内存中的,当页面刷新时，页面会重新加载vue实例，store里面的数据就会被重新赋值。</p></li><li><p>解决思路 一种是state里的数据全部是通过请求来触发action或mutation来改变</p></li></ol><p>一种是将state里的数据保存一份到本地存储(localStorage、sessionStorage、cookie）中</p><p>很显然，第一种方案基本不可行，除非项目很小或者vuex存储的数据很少。而第二种可以保证刷新页面数据不丢失且易于读取。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// App.vue</span>
<span class="token function">created</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token comment">//在页面加载时读取sessionStorage里的状态信息</span>
	<span class="token keyword">let</span> sessionStorage <span class="token operator">=</span> window<span class="token punctuation">.</span>sessionStorage<span class="token punctuation">;</span>  
	<span class="token keyword">if</span> <span class="token punctuation">(</span>sessionStorage<span class="token punctuation">.</span><span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">&quot;store&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>$store<span class="token punctuation">.</span><span class="token function">replaceState</span><span class="token punctuation">(</span>Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$store<span class="token punctuation">.</span>state<span class="token punctuation">,</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>sessionStorage<span class="token punctuation">.</span><span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">&quot;store&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

	<span class="token comment">//在页面刷新时将vuex里的信息保存到sessionStorage里</span>
	window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&quot;beforeunload&quot;</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
		sessionStorage<span class="token punctuation">.</span><span class="token function">setItem</span><span class="token punctuation">(</span><span class="token string">&quot;store&quot;</span><span class="token punctuation">,</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>$store<span class="token punctuation">.</span>state<span class="token punctuation">)</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,22);function p(u,d){return s(),a("div",null,[c,t(" more "),l])}const v=n(o,[["render",p],["__file","vuex.html.vue"]]);export{v as default};
