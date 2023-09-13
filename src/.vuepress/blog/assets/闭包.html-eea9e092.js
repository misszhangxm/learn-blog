import{_ as n,V as s,W as a,Z as t,X as e,a0 as p}from"./framework-fd1dac66.js";const c={},o=e("p",null,"闭包可以用在许多地方。它的最大用处有两个，一个是可以读取函数内部的变量，另一个就是让这些变量的值始终保持在内存中。",-1),i=p(`<p>请看下面的代码。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>　　<span class="token keyword">function</span> <span class="token function">f1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
　　　　<span class="token keyword">var</span> num <span class="token operator">=</span> <span class="token number">99</span><span class="token punctuation">;</span>

　　　　<span class="token function-variable function">add</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> num<span class="token operator">++</span> <span class="token punctuation">}</span> <span class="token comment">// 这里没有使用 var add被注册为全局变量</span>

　　　　<span class="token keyword">function</span> <span class="token function">f2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

　　　　　　<span class="token function">alert</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 调用父函数变量 num </span>

　　　　<span class="token punctuation">}</span>

　　　　<span class="token keyword">return</span> f2<span class="token punctuation">;</span> 
　　<span class="token punctuation">}</span>

　　<span class="token keyword">var</span> result <span class="token operator">=</span> <span class="token function">f1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// f1返回f2函数, f2被赋给了一个全局变量，这导致f2始终在内存中</span>

　　<span class="token function">result</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 99</span>

　　<span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// num++</span>

　　<span class="token function">result</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 100</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这段代码中，result实际上就是闭包f2函数。它一共运行了两次，第一次的值是99，第二次的值是100。这证明了，函数f1中的局部变量num一直保存在内存中，并没有在f1调用后被自动清除。</p><p>为什么会这样呢？原因就在于f1是f2的父函数，而f2被赋给了一个全局变量，这导致f2始终在内存中，而f2的存在依赖于f1，因此f1也始终在内存中，不会在调用结束后，被垃圾回收机制（garbage collection）回收。</p><p>这段代码中另一个值得注意的地方，就是<code>add=function(){num+=1}</code>这一行，首先在add前面没有使用var关键字，因此add是一个全局变量，而不是局部变量。其次，add的值是一个匿名函数（anonymous function），而这个匿名函数本身也是一个闭包，所以add相当于是一个setter，可以在函数外部对函数内部的局部变量进行操作。</p>`,5);function l(u,d){return s(),a("div",null,[o,t(" more "),i])}const k=n(c,[["render",l],["__file","闭包.html.vue"]]);export{k as default};
