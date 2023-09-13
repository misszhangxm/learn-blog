import{_ as e,V as n,W as i,Z as s,X as d,a0 as l}from"./framework-fd1dac66.js";const r={},o=d("p",null,"使用js判断是Pc端或者移动端",-1),a=l(`<p>源代码：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function goPAGE() {
    if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
        /*window.location.href=&quot;你的手机版地址&quot;;*/
        alert(&quot;mobile&quot;)
    }
    else {
        /*window.location.href=&quot;你的电脑版地址&quot;;    */
        alert(&quot;pc&quot;)
    }
}
goPAGE();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>稍微改下： 解决了：判断完成后页面不停刷新,停不下来。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;script&gt;  
    function goPAGE() {
        if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
            return &quot;你的手机版地址&quot;;
        }
        else {
            return &quot;你的电脑版地址&quot;;
        }
    }
    window.location.href = goPAGE();
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>还有一种方法是：在移动端的里面只写上跳pc的代码, 在pc端里面只写上跳移动端的代码就可以了。</p><p>出现这个问题的原因是： 例如:你有pc版的index和移动的index，俩页面。 在两个index里面写入了判断代码，当它进入pc版的index/移动的index页面时候会在判断了一次，此番下去变成了一个无限的循环...</p>`,6);function t(c,u){return n(),i("div",null,[o,s(" more "),a])}const m=e(r,[["render",t],["__file","js判断是否是PC端.html.vue"]]);export{m as default};
