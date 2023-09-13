import{_ as o,F as l,V as p,W as i,Z as c,X as s,Y as n,$ as e,a0 as t}from"./framework-fd1dac66.js";const d={},u=s("p",null,[s("strong",null,"name"),n(" 是内置变量，用于表示当前模块的名字,如果一个模块被直接运行,其 "),s("strong",null,"name"),n(" 值为 "),s("strong",null,"main"),n("。")],-1),r=s("p",null,"来个小栗子：",-1),m={href:"http://module.py",target:"_blank",rel:"noopener noreferrer"},_=t(`<div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment">#!/usr/bin/env python3</span>
<span class="token comment"># -*- coding: utf-8 -*-</span>

<span class="token string">&#39; a test module &#39;</span>

__author__ <span class="token operator">=</span> <span class="token string">&#39;mrceel&#39;</span>

<span class="token keyword">def</span> <span class="token function">say</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">:</span>
	<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;hello %s&#39;</span> <span class="token operator">%</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;当前文件的__name__是：&#39;</span><span class="token punctuation">,</span> __name__<span class="token punctuation">)</span>

<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
	say<span class="token punctuation">(</span><span class="token string">&#39;world&#39;</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>直接运行-&gt;输出位为</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>当前文件的__name__是： __main__
hello world
<span class="token punctuation">[</span>Finished <span class="token keyword">in</span> <span class="token number">0</span><span class="token punctuation">.</span>1s<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),v={href:"http://test-module.py",target:"_blank",rel:"noopener noreferrer"},k=t(`<div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> module

module<span class="token punctuation">.</span>say<span class="token punctuation">(</span><span class="token string">&#39;二丽&#39;</span><span class="token punctuation">)</span> <span class="token comment"># 调用module 模块的say 函数</span>

<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;当前文件的__name__是：&#39;</span><span class="token punctuation">,</span> __name__<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>直接运行-&gt;输出位为</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>当前文件的__name__是： module <span class="token comment"># 这里是module.py 文件的输出</span>
hello 二丽 <span class="token comment"># 调用 module 模块的say 函数的输出</span>
当前文件的__name__是： __main__ <span class="token comment"># 当前文件输出</span>
<span class="token punctuation">[</span>Finished <span class="token keyword">in</span> <span class="token number">0</span><span class="token punctuation">.</span>3s<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Python解释器把一个特殊变量<code>__name__</code>置为<code>__main__</code>，而如果在其他地方导入该module模块时，if判断将失败，因此，这种if测试可以让一个模块通过命令行运行时执行一些额外的代码，最常见的就是运行测试</p>`,4);function b(h,y){const a=l("ExternalLinkIcon");return p(),i("div",null,[u,c(" more "),r,s("p",null,[n("** "),s("a",m,[n("module.py"),e(a)]),n(" 文件 **")]),_,s("p",null,[n("再来看下作为模块使用的时候 ** "),s("a",v,[n("test-module.py"),e(a)]),n(" 文件 **")]),k])}const f=o(d,[["render",b],["__file","Python-__name__.html.vue"]]);export{f as default};
