import{_ as i,V as n,W as e,Z as l,X as t,a0 as d}from"./framework-fd1dac66.js";const s={},v=t("p",null,"左侧固定宽度,右侧自适应.",-1),a=d(`<p>方案一:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;style&gt;
	*{
		margin: 0;padding: 0;
	}
	.left , .main {
		height: 165px;
	}
	.left {
		float: left;width: 200px;background: red;
	}
	.main {
		padding-left: 200px;background: blue;
	}
&lt;/style&gt;

&lt;body&gt;
	&lt;div class=&quot;con&quot;&gt;
    	&lt;div class=&quot;left&quot;&gt;left&lt;/div&gt;
    	&lt;div class=&quot;main&quot;&gt;main&lt;/div&gt;
	&lt;/div&gt;
&lt;/body&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>方案二:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;style&gt;
	*{
		margin: 0;padding: 0;
	}
	.con {
		position: relative;
	}
	.left , .main {
		top: 0;
		height: 165px;
	}
	.left {
		position: absolute;
		left: 0;
		width: 200px;
		background: red;
	}
	.main {
		padding-left: 200px;
		background: blue;
	}
&lt;/style&gt;

&lt;div class=&quot;con&quot;&gt;
	&lt;div class=&quot;left&quot;&gt;left&lt;/div&gt;
	&lt;div class=&quot;main&quot;&gt;main&lt;/div&gt;
&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>两侧固定宽度,中间自适应.</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;style&gt;
	*{
		margin: 0;padding: 0;
	}
	.con{
		overflow: hidden
	}
	.left , .main ,.right{
		height: 165px;
	}
	.left {
		width: 200px;
		background: red; 
		float: left; 
	}
	.right {
		width: 200px;
		background: red; 
		float: right; 
	}
	.main {
		background: blue; 
		width: 100%;
		padding: 0 200px;
	}
&lt;/style&gt;

&lt;div class=&quot;con&quot;&gt;
	&lt;div class=&quot;left&quot;&gt;left&lt;/div&gt;
	&lt;div class=&quot;right&quot;&gt;right&lt;/div&gt;
	&lt;div class=&quot;main&quot;&gt;main&lt;/div&gt;
&lt;/div&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6);function c(r,u){return n(),e("div",null,[v,l(" more "),a])}const b=i(s,[["render",c],["__file","布局.html.vue"]]);export{b as default};
