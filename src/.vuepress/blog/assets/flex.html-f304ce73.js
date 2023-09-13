import{_ as e,V as i,W as n,a0 as l}from"./framework-fd1dac66.js";const t={},s=l(`<h4 id="css样式" tabindex="-1"><a class="header-anchor" href="#css样式" aria-hidden="true">#</a> css样式</h4><ul><li>flex：定义布局为盒模型</li><li>flex-v：盒模型垂直布局</li><li>flex-1：子元素占据剩余的空间</li><li>flex-align-center：子元素垂直居中</li><li>flex-pack-center：子元素水平居中</li><li>flex-pack-justify：子元素两端对齐</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>.flex {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
}

.flex-v {
    -webkit-box-orient: vertical;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
}

.flex-1 {
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
}

.flex-align-center {
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
}

.flex-pack-center {
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
}

.flex-pack-justify {
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>** 兼容性：ios 4+、android 2.3+、winphone8+ **</p><h4 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
&lt;meta charset=&quot;utf-8&quot;&gt;
&lt;meta content=&quot;width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=no&quot; name=&quot;viewport&quot;&gt;
&lt;meta content=&quot;yes&quot; name=&quot;apple-mobile-web-app-capable&quot;&gt;
&lt;meta content=&quot;black&quot; name=&quot;apple-mobile-web-app-status-bar-style&quot;&gt;
&lt;meta content=&quot;telephone=no&quot; name=&quot;format-detection&quot;&gt;
&lt;meta content=&quot;email=no&quot; name=&quot;format-detection&quot;&gt;
&lt;style type=&quot;text/css&quot;&gt;
.flex{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}
.flex-v{-webkit-box-orient:vertical;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}
.flex-1{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;}
.flex-align-center{-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;}
.flex-pack-center{-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}
.flex-pack-justify{-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}
&lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;div class=&quot;flex flex-pack-justify&quot;&gt;
    &lt;div&gt;模块一&lt;/div&gt;
    &lt;div&gt;模块二&lt;/div&gt;
    &lt;div&gt;模块三&lt;/div&gt;
    &lt;div&gt;模块四&lt;/div&gt;
&lt;/div&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),d=[s];function a(c,v){return i(),n("div",null,d)}const u=e(t,[["render",a],["__file","flex.html.vue"]]);export{u as default};
