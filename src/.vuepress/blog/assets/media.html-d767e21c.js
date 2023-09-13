import{_ as e,F as p,V as c,W as l,Z as i,X as n,Y as a,$ as o,a0 as s}from"./framework-fd1dac66.js";const u={},d=n("p",null,"利用css判断不同分辨率显示不同宽度布局实现自适应宽度即 css3 @media样式的使用",-1),r=s(`<p>CSS 语法</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token atrule"><span class="token rule">@media</span> mediatype <span class="token keyword">and</span>|<span class="token keyword">not</span>|<span class="token keyword">only</span> <span class="token punctuation">(</span>media feature<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
    CSS-Code<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

mediatype 取值：
    all -&gt; 用于所有设备
    print -&gt; 用于打印机和打印预览
    screen -&gt; 用于电脑屏幕，平板电脑，智能手机等。
    speech -&gt; 应用于屏幕阅读器等发声设备
    菜鸟教程显示其他的都已经弃用，便不再罗列。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="media-type的几种使用方法" tabindex="-1"><a class="header-anchor" href="#media-type的几种使用方法" aria-hidden="true">#</a> media type的几种使用方法</h2><p><strong>方法一</strong><code>&lt;link href=&quot;style.css&quot; media=&quot;screen print&quot; ...</code><strong>方法二</strong><code>&lt;?xml-stylesheet media=&quot;screen&quot; href=&quot;style.css&quot;...</code><strong>方法三</strong><code>@import url(&quot;style.css&quot;) screen;</code><strong>方法四</strong></p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">media</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>screen<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
<span class="token atrule"><span class="token rule">@import</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">&quot;style.css&quot;</span><span class="token punctuation">)</span></span><span class="token punctuation">;</span></span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>方法五</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>@media screen{
selector{rules}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当然，这几种方法各有利弊，而我们常用的是第一种和最后一种方法。</p><h2 id="media-query" tabindex="-1"><a class="header-anchor" href="#media-query" aria-hidden="true">#</a> media query</h2><p>css属性判断可以只是某个CSS属性的名称，也可以是属性+值：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;link rel=&quot;stylesheet&quot; media=&quot;screen and (animation)” herf=“…”
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果设备支持CSS动画，那么就能执行这个外部样式表文件。</p><h2 id="媒体查询语句结构" tabindex="-1"><a class="header-anchor" href="#媒体查询语句结构" aria-hidden="true">#</a> 媒体查询语句结构</h2><p>我们可以将上述语句称为媒体查询语句，这样也更能理解一些。从上面的例子也可以看出，媒体查询语句一般由media type+一到多个CSS属性判断组成，而多个CSS属性判断可以用关键字and连接：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>@media screen and (min-width:1024px) and (max-width:1280px){
	body{font-size:20px;}
}
@media screen and (min-width:800px),print and (min-width:7in){
body{font-size:small;}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,15),k=n("h2",{"font-size:20px;":"",id:"可理解为-在宽度为1024-1280之间-使用-body",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#可理解为-在宽度为1024-1280之间-使用-body","aria-hidden":"true"},"#"),a(" 可理解为 在宽度为1024 - 1280之间 使用 body")],-1),m=s(`<div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span> 
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">&gt;</span></span> 
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span> 
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>utf-8<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span> 
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>无标题文档<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span> 
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css"> 
            <span class="token selector">.abc</span><span class="token punctuation">{</span> <span class="token property">height</span><span class="token punctuation">:</span>300px<span class="token punctuation">;</span> <span class="token property">border</span><span class="token punctuation">:</span>1px solid #000<span class="token punctuation">;</span> <span class="token property">margin</span><span class="token punctuation">:</span>0 auto<span class="token punctuation">}</span> 
            <span class="token atrule"><span class="token rule">@media</span> screen <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">min-width</span><span class="token punctuation">:</span> 1201px<span class="token punctuation">)</span></span> <span class="token punctuation">{</span> 
                <span class="token selector">.abc</span> <span class="token punctuation">{</span><span class="token property">width</span><span class="token punctuation">:</span> 1200px<span class="token punctuation">}</span>  
            <span class="token punctuation">}</span> 
            <span class="token comment">/* css 注释说明：设置了浏览器宽度不小于1201px时 abc 显示1200px宽度 */</span> 
            
            <span class="token atrule"><span class="token rule">@media</span> screen <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">max-width</span><span class="token punctuation">:</span> 1200px<span class="token punctuation">)</span></span> <span class="token punctuation">{</span> 
                <span class="token selector">.abc</span> <span class="token punctuation">{</span><span class="token property">width</span><span class="token punctuation">:</span> 900px<span class="token punctuation">}</span>  
            <span class="token punctuation">}</span> 
            <span class="token comment">/* 设置了浏览器宽度不大于1200px时 abc 显示900px宽度 */</span> 
            
            <span class="token atrule"><span class="token rule">@media</span> screen <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">max-width</span><span class="token punctuation">:</span> 900px<span class="token punctuation">)</span></span> <span class="token punctuation">{</span> 
                <span class="token selector">.abc</span> <span class="token punctuation">{</span><span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span><span class="token punctuation">}</span>  
            <span class="token punctuation">}</span> 
            <span class="token comment">/* 设置了浏览器宽度不大于900px时 abc 显示200px宽度 */</span> 
            
            <span class="token atrule"><span class="token rule">@media</span> screen <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">max-width</span><span class="token punctuation">:</span> 500px<span class="token punctuation">)</span></span> <span class="token punctuation">{</span> 
                <span class="token selector">.abc</span> <span class="token punctuation">{</span><span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span><span class="token punctuation">}</span>  
            <span class="token punctuation">}</span> 
            <span class="token comment">/* 设置了浏览器宽度不大于500px时 abc 显示100px宽度 */</span> 
            
        </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span> 
        <span class="token comment">&lt;!--[if lt IE 9]&gt; 
        &lt;script src=&quot;http://css3-mediaqueries-js.googlecode.com/svn/trunk/css3-mediaqueries.js&quot;&gt;&lt;/script&gt; 
        &lt;![endif]--&gt;</span> 
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span> 
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span> 
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>abc<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>DIVCSS5实例：我这个DIV宽度会随浏览器宽度变化哦，试试改变浏览器宽度<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span> 
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span> 
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),v={href:"http://www.divcss5.com/yanshi/2014/2014031601/",target:"_blank",rel:"noopener noreferrer"},g=s(`<p>IE9以下版本不支持CSS3技术，可以使用加入一个google的JS</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;!--[if lt IE 9]&gt; 
&lt;script src=&quot;http://css3-mediaqueries-js.googlecode.com/svn/trunk/css3-mediaqueries.js&quot;&gt;&lt;/script&gt; 
&lt;![endif]--&gt; 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以上内容转载自：<code>http://www.divcss5.com/jiqiao/j662.shtml</code><code>http://www.cnblogs.com/august-8/p/4537685.html</code></p>`,3);function b(h,x){const t=p("ExternalLinkIcon");return c(),l("div",null,[d,i(" more "),r,k,m,n("p",null,[n("a",v,[a("实例地址"),o(t)])]),g])}const q=e(u,[["render",b],["__file","media.html.vue"]]);export{q as default};
