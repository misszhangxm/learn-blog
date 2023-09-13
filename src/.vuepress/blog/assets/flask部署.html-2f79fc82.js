import{_ as c,F as l,V as r,W as i,Z as s,X as n,Y as e,$ as t,a0 as d}from"./framework-fd1dac66.js";const a={},p=n("p",null,[e("本想在"),n("code",null,"winserver"),e("部署"),n("code",null,"flask"),e("项目奈何坑太多，以至于短时间填不平。所以就转到"),n("code",null,"linux"),e("系统了。")],-1),_=n("code",null,"python",-1),u={href:"https://www.jianshu.com/p/da28ec28ef4b",target:"_blank",rel:"noopener noreferrer"},h=n("code",null,"linux",-1),R=n("code",null,"python",-1),g=d(`<p>默认已经安装好 <code>nginx</code> 和 <code>虚拟环境</code> 还有 <code>gunicorn</code>。 如果没有安装好请 <strong>参考上面链接安装</strong>。</p><p>我的 <code>flask</code> 项目放在了 <code>/mysource/ceel/pyproject/wallpaper/*</code> 目录。</p><h2 id="重点" tabindex="-1"><a class="header-anchor" href="#重点" aria-hidden="true">#</a> 重点</h2><ol><li><p>激活并进入虚拟环境</p></li><li><p>安装项目需要的模块</p></li><li><p>启动 <code>gunicorn</code><code>gunicorn -w 2 -b 127.0.0.1:8070 app:app</code> # 指定运行端口 运行 app.py中的 app = flask(<strong>name</strong>)</p></li><li><p>配置启动 <code>nginx</code> 我的做法是在 nginx.conf 文件添加了</p><pre><code> // nginx.conf 文件
 http{
 	....
 	server {
 		listen 8060;
 		server_name 服务器IP地址/域名（***.***.***.***）;
 	 
 		location / {
 			proxy_pass http://127.0.0.1:8070;
 			proxy_set_header Host $host;
 			proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
 			proxy_set_header Host $http_host;
 		}
 	}
 	...
 }
 
 nginx -t 命令检查配置是否正确
 nginx -s reload 重启 nginx
</code></pre></li></ol><p>可能遇到的问题（<code>nginx</code> 和 <code>gunicorn</code> 都有可能遇到 反正我是遇到了...倒霉）：</p><ul><li>Connection in use: (&#39;127.0.0.1&#39;, 8070) [2019-12-16 10:34:27 +0800] [9997] [ERROR] Retrying in 1 second. [2019-12-16 10:34:28 +0800] [9997] [ERROR] Connection in use: (&#39;127.0.0.1&#39;, 8070) [2019-12-16 10:34:28 +0800] [9997] [ERROR] Retrying in 1 second. [2019-12-16 10:34:29 +0800] [9997] [ERROR] Connection in use: (&#39;127.0.0.1&#39;, 8070) [2019-12-16 10:34:29 +0800] [9997] [ERROR] Retrying in 1 second. [2019-12-16 10:34:30 +0800] [9997] [ERROR] Connection in use: (&#39;127.0.0.1&#39;, 8070) [2019-12-16 10:34:30 +0800] [9997] [ERROR] Retrying in 1 second. [2019-12-16 10:34:31 +0800] [9997] [ERROR] Connection in use: (&#39;127.0.0.1&#39;, 8070) [2019-12-16 10:34:31 +0800] [9997] [ERROR] Retrying in 1 second. [2019-12-16 10:34:32 +0800] [9997] [ERROR] Can&#39;t connect to (&#39;127.0.0.1&#39;, 8070) 端口被占用...</li></ul><p>解决办法：先检查一下是谁占用了，用kill -9 *** 杀一下进程，如果还是不行用下面的办法 强制关闭端口的占用， <code>sudo fuser -k 8070/tcp</code></p><ul><li>还要增加阿里云或者腾讯云的安全组策略。添加出站入站规则。</li></ul>`,8),f={href:"http://ceel.vip:8086",target:"_blank",rel:"noopener noreferrer"},x=n("ol",null,[n("li",null,[e("通过执行如下命令，可以获取Gunicorn进程树： "),n("code",null,"pstree -ap|grep gunicorn")]),n("li",null,"重启Gunicorn任务")],-1),y=n("p",null,"Python kill -HUP 14226 3. 退出Gunicorn任务",-1),k=n("p",null,"Python kill -9 28097",-1);function m(E,O){const o=l("ExternalLinkIcon");return r(),i("div",null,[p,s(" more "),n("p",null,[e("在服务器上找个目录创建一个"),_,e("虚拟环境 "),n("a",u,[e("参考这里"),t(o)]),e(" 如果按照上面的教程不能成功的话，就接着往下看吧。因为我按照上面的教程完成了大部分。但仍然没有成功部署。 因为第一次使用"),h,e("系统，第一次部署"),R,e("项目。走了很多弯路...")]),g,n("p",null,[e("最后就能访问了"),n("a",f,[e("一个壁纸网站"),t(o)])]),x,y,k])}const C=c(a,[["render",m],["__file","flask部署.html.vue"]]);export{C as default};
