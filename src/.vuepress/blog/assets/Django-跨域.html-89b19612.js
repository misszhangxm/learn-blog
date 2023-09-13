import{_ as n,V as s,W as a,Z as e,X as t,a0 as i}from"./framework-fd1dac66.js";const p={},c=t("p",null,"跨域的问题是在前后段分离开发时....",-1),l=i(`<p>安装django-cors-headers</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>pip3 install django-cors-headers
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在项目目录里面的settings.py添加下面的代码</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>INSTALLED_APPS <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
    <span class="token string">&#39;corsheaders&#39;</span>，
 <span class="token punctuation">]</span> 

MIDDLEWARE_CLASSES <span class="token operator">=</span> <span class="token punctuation">(</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
    <span class="token string">&#39;corsheaders.middleware.CorsMiddleware&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;django.middleware.common.CommonMiddleware&#39;</span><span class="token punctuation">,</span> <span class="token comment"># 注意顺序</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token punctuation">)</span>
<span class="token comment">#跨域增加忽略</span>
CORS_ALLOW_CREDENTIALS <span class="token operator">=</span> <span class="token boolean">True</span>
CORS_ORIGIN_ALLOW_ALL <span class="token operator">=</span> <span class="token boolean">True</span>
CORS_ORIGIN_WHITELIST <span class="token operator">=</span> <span class="token punctuation">(</span>
    <span class="token string">&#39;*&#39;</span>
<span class="token punctuation">)</span>
<span class="token comment"># 设置允许请求方式</span>
CORS_ALLOW_METHODS <span class="token operator">=</span> <span class="token punctuation">(</span>
    <span class="token string">&#39;DELETE&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;GET&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;OPTIONS&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;PATCH&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;POST&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;PUT&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;VIEW&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span>

CORS_ALLOW_HEADERS <span class="token operator">=</span> <span class="token punctuation">(</span>
    <span class="token string">&#39;XMLHttpRequest&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;X_FILENAME&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;accept-encoding&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;authorization&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;content-type&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;dnt&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;origin&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;user-agent&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;x-csrftoken&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;x-requested-with&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;Pragma&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>一定要注意 <strong>tab</strong> 不要和 <strong>空格</strong> 混用!!! 使用JSONP也是可以进行跨域请求的。。。</p>`,5);function o(u,d){return s(),a("div",null,[c,e(" more "),l])}const v=n(p,[["render",o],["__file","Django-跨域.html.vue"]]);export{v as default};
