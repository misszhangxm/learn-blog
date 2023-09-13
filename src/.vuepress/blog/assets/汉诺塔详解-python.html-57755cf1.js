import{_ as n,V as t,W as s,Z as a,X as e,a0 as i}from"./framework-fd1dac66.js";const l={},c=e("p",null,"最主要的还是要搞明白 递归的意思",-1),v=i(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>move(3,&#39;A&#39;, &#39;B&#39;, &#39;C&#39;)

def move(3,a,b,c):  这里传入参数为 move(3, &#39;A&#39;, &#39;B&#39;, &#39;C&#39;)
    if n==1:
        print(a,&#39;-&gt;&#39;,c)
    else:
        move(n-1,a,c,b) 改变参数顺序 -&gt; 这里传入参数为 move(2, &#39;A&#39;, &#39;C&#39;, &#39;B&#39;)
		|
		|			
		▼   
		move(n, a, b, c)  参数发生变化: n = 2 a = &#39;A&#39; b = &#39;C&#39; c = &#39;B&#39; 牢记此处参数的值

		if n == 1 : n = 2 条件不成立 不执行

			print(a,&#39;--&gt;&#39;,c)
		else :
			move(n-1,a,c,b) 改变参数顺序 -&gt; 这里传入参数为 move(1, &#39;A&#39;, &#39;B&#39;, &#39;C&#39;)
						|
						|
						▼
						move(n, a, b, c) 参数发生变化: n = 1 a = &#39;A&#39; b = &#39;B&#39; c = &#39;C&#39;

						if n == 1 : n = 1 条件成立 执行

							print(a,&#39;--&gt;&#39;,c) ① 输出 A --&gt; C .执行完毕,回退
			&lt;--回退完毕-----&lt;-----&lt;------&lt;------&lt;----
			|			else :
			|				move(n-1,a,c,b)
			|				move(1,a,b,c)
			|				move(n-1,b,a,c)
			▼向下执行
			move(1,a,b,c)  n = 2 a = &#39;A&#39; b = &#39;C&#39; c = &#39;B&#39; 
						|
						|
						▼
						move(n, a, b, c) 这里传入参数为 move(1, &#39;A&#39;, &#39;C&#39;, &#39;B&#39;)
						a = &#39;A&#39; b = &#39;C&#39; c = &#39;B&#39;
						if n == 1 : n = 1 条件成立 执行完毕
							print(a,&#39;--&gt;&#39;,c) **② 输出 A --&gt; B** .执行完毕,回退
			&lt;--回退完毕-----&lt;-----&lt;------&lt;------&lt;----
			|			else :
			|				move(n-1,a,c,b)
			|				move(1,a,b,c)
			|				move(n-1,b,a,c)
			▼向下执行  n = 2 a = &#39;A&#39; b = &#39;C&#39; c = &#39;B&#39;
			move(n-1,b,a,c) 改变参数顺序 -&gt; 这里传入参数为 move(1, &#39;C&#39;, &#39;A&#39;, &#39;B&#39;)
						|
						|
						▼
						move(n, a, b, c) 这里传入参数为 move(1, &#39;C&#39;, &#39;A&#39;, &#39;B&#39;)
						a = &#39;C&#39; b = &#39;A&#39; c = &#39;B&#39;
						if n == 1 : n = 1 条件成立 执行完毕
							print(a,&#39;--&gt;&#39;,c) ③ 输出 C --&gt; B .执行完毕,回退
			&lt;--回退完毕-----&lt;-----&lt;------&lt;------&lt;----
			|			else :
			|				move(n-1,a,c,b)
			|				move(1,a,b,c)
			|				move(n-1,b,a,c)
			▼
		&lt;--------
		|
		▼
        move(1,a,b,c) 参数为: n = 1 a = &#39;A&#39; b = &#39;B&#39; c = &#39;C&#39;  ④ 输出 A --&gt; C 
        move(n-1,b,a,c) 同理 -&gt; 参数变化 执行顺序同上
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>奉上代码:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">move</span><span class="token punctuation">(</span>n<span class="token punctuation">,</span>a<span class="token punctuation">,</span>b<span class="token punctuation">,</span>c<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">if</span> n<span class="token operator">==</span><span class="token number">1</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span><span class="token string">&#39;-&gt;&#39;</span><span class="token punctuation">,</span>c<span class="token punctuation">)</span>
    <span class="token keyword">else</span><span class="token punctuation">:</span>
        move<span class="token punctuation">(</span>n<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span>a<span class="token punctuation">,</span>c<span class="token punctuation">,</span>b<span class="token punctuation">)</span>
        move<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span>a<span class="token punctuation">,</span>b<span class="token punctuation">,</span>c<span class="token punctuation">)</span>
        move<span class="token punctuation">(</span>n<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span>b<span class="token punctuation">,</span>a<span class="token punctuation">,</span>c<span class="token punctuation">)</span>
		
move<span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token string">&#39;A&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;B&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;C&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3);function d(u,p){return t(),s("div",null,[c,a(" more "),v])}const m=n(l,[["render",d],["__file","汉诺塔详解-python.html.vue"]]);export{m as default};
