import{_ as n,V as s,W as e,a0 as a}from"./framework-fd1dac66.js";const i={},l=a(`<h2 id="nginx-配置https" tabindex="-1"><a class="header-anchor" href="#nginx-配置https" aria-hidden="true">#</a> Nginx 配置https</h2><h3 id="查看nginx是否安装ssl模块" tabindex="-1"><a class="header-anchor" href="#查看nginx是否安装ssl模块" aria-hidden="true">#</a> 查看Nginx是否安装ssl模块</h3><p>进入<code>nginx</code>安装目录下的<code>sbin目录</code>执行</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>./nginx <span class="token parameter variable">-V</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>例如： 如果结果中包含 <code>--with-http_ssl_module</code> 说明已经安装了ssl模块，反之亦然</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[root@VM-8-10-centos sbin]# ./nginx -V
nginx version: nginx/1.22.1
built by gcc 4.8.5 20150623 (Red Hat 4.8.5-44) (GCC)
built with OpenSSL 1.0.2k-fips  26 Jan 2017
TLS SNI support enabled
configure arguments: --prefix=/home/nginx --with-http_stub_status_module --with-http_ssl_module

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="未安装模块" tabindex="-1"><a class="header-anchor" href="#未安装模块" aria-hidden="true">#</a> 未安装模块</h4><ol><li>停止Nginx服务<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>./nginx <span class="token parameter variable">-s</span> stop
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li>进入nginx解压目录，重新编译nginx<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># --prefix 值为nginx安装路径</span>
./configure <span class="token parameter variable">--prefix</span><span class="token operator">=</span>/home/nginx  --with-http_stub_status_module --with-http_ssl_module
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li>编译完成之后, 在nginx解压目录继续执行make命令<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">make</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li>执行make命令结束后, 在nginx解压目录下找到objs目录中的nginx文件。 将其复制到Nginx安装目录中sbin中（替换掉原来的）<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code> <span class="token function">cp</span> ./nginx /home/nginx/sbin/nginx 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li>至此完成。 通过 <code>./nginx -V</code> 查看是否安装ok</li></ol><h4 id="已安装模块" tabindex="-1"><a class="header-anchor" href="#已安装模块" aria-hidden="true">#</a> 已安装模块</h4><p>直接配置nginx</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>    server <span class="token punctuation">{</span>
        <span class="token comment"># 80 端口重定向为https</span>
        listen       <span class="token number">80</span><span class="token punctuation">;</span>
	    server_name  ceel.vip<span class="token punctuation">;</span>
        rewrite ^/<span class="token punctuation">(</span>.*<span class="token punctuation">)</span>$ https://ceel.vip:443/<span class="token variable">$1</span> permanent<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    server <span class="token punctuation">{</span>
        listen       <span class="token number">443</span> ssl<span class="token punctuation">;</span>
        server_name  ceel.vip<span class="token punctuation">;</span> 

        ssl_certificate      your.ssl证书路径.pem<span class="token punctuation">;</span>
        ssl_certificate_key  your.ssl证书路径.key<span class="token punctuation">;</span>

        ssl_session_cache    shared:SSL:1m<span class="token punctuation">;</span>
        ssl_session_timeout  5m<span class="token punctuation">;</span>

        ssl_ciphers  HIGH:<span class="token operator">!</span>aNULL:<span class="token operator">!</span>MD5<span class="token punctuation">;</span>
        ssl_prefer_server_ciphers  on<span class="token punctuation">;</span>

        location / <span class="token punctuation">{</span>
            root   /home/ceel/blog<span class="token punctuation">;</span>
            index  index.html index.htm<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="rewrite-指令" tabindex="-1"><a class="header-anchor" href="#rewrite-指令" aria-hidden="true">#</a> rewrite 指令</h2><ul><li>作用域 server, location</li><li>默认值 on</li><li>指令值选项 on 或 off</li><li>指令说明 对用户的 URI 用正则表达式的方式进行重写，并跳转到新的 URI</li></ul><p>配置样例如下：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>http <span class="token punctuation">{</span>
    rewrite ^/users/<span class="token punctuation">(</span>.*<span class="token punctuation">)</span>$ /show?user<span class="token operator">=</span><span class="token variable">$1</span> last<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>rewrite 访问重写是通过 rewrite 指令实现的，rewrite 指令的语法格式如下：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>rewrite regex replacement <span class="token punctuation">[</span>flag<span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol><li><p>regex 是 PCRE 语法格式的正则表达式。</p></li><li><p>replacement 是重写 URI 的改写规则。当改写规则以&quot;http://&quot;&quot;https://&quot;或&quot;$scheme&quot;开头时，Nginx 重写该语句后将停止执行后续任务，并将改写后的 URI 跳转返回客户端。</p></li><li><p>flag 是执行该条重写指令后的操作控制符。操作控制符有如下 4 种：</p><ul><li>last：执行完当前重写规则跳转到新的 URI 后继续执行后续操作；</li><li>break：执行完当前重写规则跳转到新的 URI 后不再执行后续操作。不影响用户浏览器 URI 显示；</li><li>redirect：返回响应状态码 302 的临时重定向，返回内容是重定向 URI 的内容，但浏览器网址仍为请求时的 URI；</li><li>permanent：返回响应状态码 301 的永久重定向，返回内容是重定向 URI 的内容，浏览器网址变为重定向的 URI。</li></ul></li></ol>`,18),t=[l];function d(c,r){return s(),e("div",null,t)}const u=n(i,[["render",d],["__file","nginx.html.vue"]]);export{u as default};
