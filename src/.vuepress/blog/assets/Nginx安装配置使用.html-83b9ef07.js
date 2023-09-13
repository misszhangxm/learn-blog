import{_ as o,F as l,V as c,W as r,X as e,Y as n,$ as s,a0 as i}from"./framework-fd1dac66.js";const a={},t=e("h1",{id:"安装",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#安装","aria-hidden":"true"},"#"),n(" 安装")],-1),h=e("p",null,"Linux",-1),v={href:"https://nginx.org/en/",target:"_blank",rel:"noopener noreferrer"},x=i("<li>放到任意目录，解压 <code>tar -zxvf nginx-1.22.1.tar.gz</code></li><li>进入解压后的目录中，执行<code>./configure --prefix=/home/nginx</code> prefix 指定安装目录</li><li>执行 <code>make</code></li><li>进入<code>nginx</code>目录中的<code>sbin</code>目录，执行<code>./nginx</code> 启动<code>nginx</code></li><li>浏览器输入<code>ip</code>查看是否启动成功。</li>",5),u=i(`<p>至此安装完成。</p><h1 id="常用命令" tabindex="-1"><a class="header-anchor" href="#常用命令" aria-hidden="true">#</a> 常用命令</h1><ul><li>查看版本 <code>./nginx -v</code></li><li>启动 <code>./nginx</code></li><li>停止 <code>./nginx -s stop</code></li><li>重新加载配置 <code>./nginx -s reload</code></li><li>重启 <code>./nginx -s reopen</code></li></ul><h1 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h1><h2 id="server模块" tabindex="-1"><a class="header-anchor" href="#server模块" aria-hidden="true">#</a> server模块</h2><div class="language-conf line-numbers-mode" data-ext="conf"><pre class="language-conf"><code>server {
    listen       80;
    server_name  cc.ceel.vip;

    #charset koi8-r;

    #access_log  logs/host.access.log  main;

    location / {
        root   /home/ceel/blog;
        index  index.html index.htm;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>root 指定一个目录，默认访问其中的<code>index</code>值, 如上例<code>index index.html index.htm</code>则会默认访问<code>index.html</code> 或者<code>index.htm</code></p></li><li><p><strong>listen</strong> 指定监听端口</p></li><li><p><strong>server_name</strong> 虚拟服务器的识别路径。因此不同的域名会通过请求头中的HOST字段，匹配到特定的server块，转发到对应的应用服务器中去。</p></li></ul>`,7);function m(_,g){const d=l("ExternalLinkIcon");return c(),r("div",null,[t,h,e("ul",null,[e("li",null,[n("官网下载安装包： "),e("a",v,[n("https://nginx.org/en/"),s(d)])]),x]),u])}const b=o(a,[["render",m],["__file","Nginx安装配置使用.html.vue"]]);export{b as default};
