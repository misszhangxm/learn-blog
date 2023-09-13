import{_ as n,V as s,W as a,Z as t,X as p,a0 as e}from"./framework-fd1dac66.js";const l={},c=p("p",null,"居中效果在CSS中很是普通的效果，平时大家所看到的居中效果主要分为三大类：水平居中、垂直居中和水平垂直居中。而其中水平居中相对于后两者来说要简单得.",-1),o=e(`<h3 id="水平居中" tabindex="-1"><a class="header-anchor" href="#水平居中" aria-hidden="true">#</a> 水平居中</h3><p>** 1. 浮动 **</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">media</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>screen<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text/css<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
    <span class="token selector">.wrap</span><span class="token punctuation">{</span><span class="token property">position</span><span class="token punctuation">:</span>relative<span class="token punctuation">;</span><span class="token property">left</span><span class="token punctuation">:</span>50%<span class="token punctuation">;</span> <span class="token property">float</span><span class="token punctuation">:</span>left<span class="token punctuation">;</span><span class="token punctuation">}</span>
    <span class="token selector">.cont</span><span class="token punctuation">{</span><span class="token property">position</span><span class="token punctuation">:</span>relative<span class="token punctuation">;</span><span class="token property">left</span><span class="token punctuation">:</span>-50%<span class="token punctuation">;</span><span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>wrap<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>cont<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        没有宽度的div实现水平居中显示
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>原理:先让元素左浮动 父元素的左边距页面的左边为0,设置父元素的<code>position:relative;left:50%;</code>后 父元素的左边距页面的左边为50%. 此时子元素的左边距页面的左边也是50%, 这时如果设置子元素的<code>position:relative;left:-50%;</code> 或者 <code>position:relative;right:50%;</code> 子元素都会像左边移动50%的距离.(此时的50%是页面的25%)</p></blockquote><p>** 2. 定位 **</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">media</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>screen<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text/css<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
    <span class="token selector">.con</span> <span class="token punctuation">{</span><span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span><span class="token punctuation">}</span>
    <span class="token selector">.wrap</span><span class="token punctuation">{</span><span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span><span class="token property">left</span><span class="token punctuation">:</span>50%<span class="token punctuation">;</span><span class="token punctuation">}</span>
    <span class="token selector">.cont</span><span class="token punctuation">{</span><span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span><span class="token property">left</span><span class="token punctuation">:</span>-50%<span class="token punctuation">;</span><span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>con<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>wrap<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>cont<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
            没有宽度的div实现水平居中显示
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>原理: 与方法1 一样</p><p>** 3. display: box **</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">media</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>screen<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text/css<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
    <span class="token selector">.cont</span> <span class="token punctuation">{</span> 
        <span class="token property">display</span><span class="token punctuation">:</span> -webkit-box<span class="token punctuation">;</span> 
        <span class="token property">-webkit-box-orient</span><span class="token punctuation">:</span> horizontal<span class="token punctuation">;</span> 
        <span class="token property">-webkit-box-pack</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span> 
        <span class="token property">display</span><span class="token punctuation">:</span> -moz-box<span class="token punctuation">;</span> 
        <span class="token property">-moz-box-orient</span><span class="token punctuation">:</span> horizontal<span class="token punctuation">;</span> 
        <span class="token property">-moz-box-pack</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span> 
        <span class="token property">display</span><span class="token punctuation">:</span> -o-box<span class="token punctuation">;</span> 
        <span class="token property">-o-box-orient</span><span class="token punctuation">:</span> horizontal<span class="token punctuation">;</span> 
        <span class="token property">-o-box-pack</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span> <span class="token property">display</span><span class="token punctuation">:</span> 
        -ms-box<span class="token punctuation">;</span> <span class="token property">-ms-box-orient</span><span class="token punctuation">:</span> horizontal<span class="token punctuation">;</span> 
        <span class="token property">-ms-box-pack</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span> 
        <span class="token property">display</span><span class="token punctuation">:</span> box<span class="token punctuation">;</span> 
        <span class="token property">box-orient</span><span class="token punctuation">:</span> horizontal<span class="token punctuation">;</span> 
        <span class="token property">box-pack</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span> 
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>cont<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    没有宽度的div实现水平居中显示
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>** 4. fit-content **</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">media</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>screen<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text/css<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
    <span class="token selector">.cont</span><span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> -moz-fit-content<span class="token punctuation">;</span> 
        <span class="token property">width</span><span class="token punctuation">:</span>-webkit-fit-content<span class="token punctuation">;</span> 
        <span class="token property">width</span><span class="token punctuation">:</span> fit-content<span class="token punctuation">;</span> 
        <span class="token property">margin-left</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span> 
        <span class="token property">margin-right</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>cont<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    没有宽度的div实现水平居中显示
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>** 5. display: table **</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">media</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>screen<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text/css<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
    <span class="token selector">.cont</span><span class="token punctuation">{</span>
        <span class="token property">display</span><span class="token punctuation">:</span> table<span class="token punctuation">;</span>
        <span class="token property">margin</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>cont<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    没有宽度的div实现水平居中显示
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="垂直居中" tabindex="-1"><a class="header-anchor" href="#垂直居中" aria-hidden="true">#</a> 垂直居中</h3><p>** 1. 方法一 **</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>
.cont {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    height: 220px;
    width: 70%;
    background: red;
}

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>cont<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    垂直居中显示  需要设置宽度,高度
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>** 2. 方法二 **</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>
.cont {
    width: 70%;
    height: 200px;
    position: absolute;
    top: 50%;
    margin-top: -100px;
    background: red;
}

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>cont<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    垂直居中显示  需要设置宽度,高度
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>** 3. 方法三 **</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>
.cont {
 position: absolute;
    top:50%;
    transform:translateY(-50%);
}

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>cont<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    垂直居中显示 无需宽高 
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>** 4. 方法四 **</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>
.wrap{
    display: flex;
    align-items:center;
}
.cont{margin: auto;}

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>wrap<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>cont<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        没有宽度
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="水平垂直居中" tabindex="-1"><a class="header-anchor" href="#水平垂直居中" aria-hidden="true">#</a> 水平垂直居中</h3><p>** 1. 方法一 **</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>
.cont {
  width: 50%; 
  height: 50%; 
  background: #000;
  /* overflow: auto;  */
  margin: auto; 
  position: absolute; 
  top: 0; left: 0; bottom: 0; right: 0; 
}

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>cont<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    垂直居中显示 需宽高
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>** 2. 方法二 **</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>
.cont {
 position: absolute;
    top:50%;
    left:50%;
    transform:translate(-50%,-50%);
}

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>cont<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    垂直居中显示 无需宽高 
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,27);function i(u,d){return s(),a("div",null,[c,t(" more "),o])}const k=n(l,[["render",i],["__file","css-center.html.vue"]]);export{k as default};
