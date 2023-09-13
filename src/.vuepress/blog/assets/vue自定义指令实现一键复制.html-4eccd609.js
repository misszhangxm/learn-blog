import{_ as n,V as s,W as a,a0 as t}from"./framework-fd1dac66.js";const e={},p=t(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> Vcopy <span class="token operator">=</span> <span class="token punctuation">{</span>
   <span class="token function">bind</span><span class="token punctuation">(</span><span class="token parameter">el<span class="token punctuation">,</span> <span class="token punctuation">{</span> value <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
     el<span class="token punctuation">.</span>$value <span class="token operator">=</span> value<span class="token punctuation">;</span> <span class="token comment">// 用一个全局属性来存传进来的值， 因为这个值在别的钩子函数里还会用到</span>
     el<span class="token punctuation">.</span><span class="token function-variable function">handler</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
       <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>el<span class="token punctuation">.</span>$value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token comment">// 值为空的时候，给出提示，我这里的提示用的是ant-design-vue的提示</span>
          message<span class="token punctuation">.</span><span class="token function">warning</span><span class="token punctuation">(</span><span class="token string">&#39;无复制内容&#39;</span><span class="token punctuation">)</span>
          <span class="token keyword">return</span>
       <span class="token punctuation">}</span>
       <span class="token comment">// 动态创建textarea标签</span>
       <span class="token keyword">const</span> textarea <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;textarea&#39;</span><span class="token punctuation">)</span>
       <span class="token comment">// 将该textarea 设为 readonly 防止ios 下自动唤起键盘， 同时将textarea 移出可视区域</span>
       textarea<span class="token punctuation">.</span>readOnly <span class="token operator">=</span> <span class="token string">&#39;readOnly&#39;</span>
       textarea<span class="token punctuation">.</span>style<span class="token punctuation">.</span>position <span class="token operator">=</span> <span class="token string">&#39;absolute&#39;</span>
       textarea<span class="token punctuation">.</span>style<span class="token punctuation">.</span>left <span class="token operator">=</span> <span class="token string">&#39;-9999px&#39;</span>
       <span class="token comment">// 将要copy的值赋给textarea 标签的value属性</span>
       textarea<span class="token punctuation">.</span>value <span class="token operator">=</span> el<span class="token punctuation">.</span>$value
       <span class="token comment">// 将textarea 插入到body中</span>
       document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>textarea<span class="token punctuation">)</span>
       <span class="token comment">// 选中值并复制</span>
       textarea<span class="token punctuation">.</span><span class="token function">select</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
       <span class="token comment">// textarea.setSelectionRange(0, textarea.value.length)</span>
       <span class="token keyword">const</span> result <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">execCommand</span><span class="token punctuation">(</span><span class="token string">&#39;Copy&#39;</span><span class="token punctuation">)</span>
       <span class="token keyword">if</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          Message<span class="token punctuation">.</span><span class="token function">success</span><span class="token punctuation">(</span><span class="token string">&#39;复制成功&#39;</span><span class="token punctuation">)</span>
       <span class="token punctuation">}</span>
       document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">removeChild</span><span class="token punctuation">(</span>textarea<span class="token punctuation">)</span>
     <span class="token punctuation">}</span>
     <span class="token comment">// 绑定点击事件, 就是所谓的一键copy啦</span>
     el<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;click&#39;</span><span class="token punctuation">,</span> el<span class="token punctuation">.</span>handler<span class="token punctuation">)</span>
   <span class="token punctuation">}</span>
   <span class="token comment">// 当传进去的值更新的时候触发</span>
   <span class="token function">componentUpdated</span><span class="token punctuation">(</span><span class="token parameter">el<span class="token punctuation">,</span> <span class="token punctuation">{</span> value <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
     el<span class="token punctuation">.</span>$value <span class="token operator">=</span> value
   <span class="token punctuation">}</span>
   <span class="token comment">// 指令与元素解绑的时候，移除事件绑定</span>
   <span class="token function">unbind</span><span class="token punctuation">(</span><span class="token parameter">el</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
     el<span class="token punctuation">.</span><span class="token function">removeEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;click&#39;</span><span class="token punctuation">,</span> el<span class="token punctuation">.</span>handler<span class="token punctuation">)</span>
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> vCopy
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),c=[p];function o(l,i){return s(),a("div",null,c)}const k=n(e,[["render",o],["__file","vue自定义指令实现一键复制.html.vue"]]);export{k as default};
