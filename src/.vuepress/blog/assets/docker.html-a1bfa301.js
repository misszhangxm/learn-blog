import{_ as l,F as n,V as r,W as c,X as a,Y as t,$ as s,a0 as e}from"./framework-fd1dac66.js";const o={},u=e(`<h2 id="基本用法" tabindex="-1"><a class="header-anchor" href="#基本用法" aria-hidden="true">#</a> 基本用法</h2><p>拉取镜像：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> pull imageName:latest    latest 表示最新版
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>运行镜像：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker run -p 本机映射端口:镜像映射端口 -d  --name 启动镜像名称 -e 镜像启动参数  镜像名称:镜像版本号
 
      参数释义：
     -p   本机端口和容器启动端口映射
     -d   后台运行
     --name   容器名称
     -e    镜像启动参数
     
     
docker run [OPTIONS] IMAGE [COMMAND] [ARG...]
     
--name=&quot;容器新名字&quot;       为容器指定一个名称；

-d: 后台运行容器并返回容器ID，也即启动守护式容器(后台运行)；

-i：以交互模式运行容器，通常与 -t 同时使用；

-t：为容器重新分配一个伪输入终端，通常与 -i 同时使用；

也即启动交互式容器(前台有伪终端，等待交互)；

-P: 随机端口映射，大写P

-p: 指定端口映射，小写p

-v: 用于把容器的数据卷映射到宿主机上，用法如：docker run -it -v /data:/data centos bash 表示把容器的/data目录映射到宿主机的/data目录，左边是宿主机的目录，右边是容器里的目录，
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="容器" tabindex="-1"><a class="header-anchor" href="#容器" aria-hidden="true">#</a> 容器</h2><h3 id="常用命令" tabindex="-1"><a class="header-anchor" href="#常用命令" aria-hidden="true">#</a> 常用命令</h3><p><strong>查看运行中的容器</strong> docker ps</p><p><strong>查看所有容器</strong> docker ps -a</p><p><strong>停止容器</strong> docker stop containerName / containerID</p><p><strong>启动容器</strong> docker start containerName / containerID</p><p><strong>删除容器</strong> docker rm containerName / containerID</p><p><strong>删除镜像</strong></p><p><strong>强制删除所有的容器</strong> docker rm -f $(docker ps -a -q)</p><p><strong>进入容器</strong> docker exec -it containerID /bin/bash</p><h3 id="容器重命名" tabindex="-1"><a class="header-anchor" href="#容器重命名" aria-hidden="true">#</a> 容器重命名</h3><p>要重命名 Docker 容器，可以使用 <code>docker rename</code> 命令。 命令的语法如下：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token function">rename</span> old_container_name new_container_name
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>其中，<code>old_container_name</code> 表示待重命名的容器名称，<code>new_container_name</code> 表示新的容器名称。</p><p>举个例子，如果您要将一个名为 <code>my_container</code> 的容器重命名为 <code>new_container</code>，则可以运行以下命令：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token function">rename</span> my_container new_container
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在运行该命令之后，Docker 将会停止 <code>my_container</code> 容器，并将它的名称修改为 <code>new_container</code>。 如果需要启动容器，只需使用新的容器名称即可：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> start new_container
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这样就完成了 Docker 容器的重命名操作。</p><h3 id="进入容器" tabindex="-1"><a class="header-anchor" href="#进入容器" aria-hidden="true">#</a> 进入容器</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker exec -it 容器id /bin/bash
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="docker-网络" tabindex="-1"><a class="header-anchor" href="#docker-网络" aria-hidden="true">#</a> Docker 网络</h2><ul><li>查看docker 网络</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> network <span class="token function">ls</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这将列出Docker中创建的所有网络，包括网络ID、名称、驱动程序类型、作用域等信息。例如：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>NETWORK ID     NAME             DRIVER    SCOPE
7dab3c3a8693   bridge           bridge    <span class="token builtin class-name">local</span>
e88b0a80fa8d   <span class="token function">host</span>             <span class="token function">host</span>      <span class="token builtin class-name">local</span>
c8f6a9e18924   none             null      <span class="token builtin class-name">local</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其中，<code>bridge</code>、<code>host</code>和<code>none</code>为Docker默认提供的三种网络，分别用于连接主机网络、独立容器网络、无网络的容器。</p><ul><li>要查看指定网络的详细信息，可以使用以下命令：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker network inspect [network name or id]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>例如，要查看名为 <code>&quot;my_network&quot; </code>的网络的详细信息，可以运行以下命令：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>复制代码docker network inspect my_network
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>该命令将返回一个JSON格式的文本，其中包含了该网络的各种属性和配置信息，包括网络ID、名称、驱动程序、IP地址范围、连接的容器列表等详细信息。</p><h3 id="查看-docker-容器的-ip-地址" tabindex="-1"><a class="header-anchor" href="#查看-docker-容器的-ip-地址" aria-hidden="true">#</a> 查看 Docker 容器的 IP 地址</h3><p>要查看运行中的 Docker 容器的 IP 地址，可以使用以下命令：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> inspect <span class="token parameter variable">-f</span> <span class="token string">&#39;{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}&#39;</span> container_name_or_id
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>其中，container_name_or_id 指代 Docker 容器的名称或者 ID。在这里，假设 mysql2 是 MySQL 容器的名称，那么可以使用以下命令获取 MySQL 容器的 IP 地址：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> inspect <span class="token parameter variable">-f</span> <span class="token string">&#39;{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}&#39;</span> mysql2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>该命令会输出容器的 IP 地址，例如：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>172.17.0.2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这个 IP 地址可以被用作配置文件中 <code>server</code> 块中的 <code>upstream</code> 服务的地址，从而实现代理到 Docker 容器中运行的 MySQL 数据库。</p><h2 id="镜像" tabindex="-1"><a class="header-anchor" href="#镜像" aria-hidden="true">#</a> 镜像</h2><h3 id="删除镜像" tabindex="-1"><a class="header-anchor" href="#删除镜像" aria-hidden="true">#</a> 删除镜像</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker rmi imageId
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="提交镜像到阿里云镜像服务" tabindex="-1"><a class="header-anchor" href="#提交镜像到阿里云镜像服务" aria-hidden="true">#</a> 提交镜像到阿里云镜像服务</h3>`,49),v={href:"https://cr.console.aliyun.com/repository/cn-beijing/ceel/cc/details",target:"_blank",rel:"noopener noreferrer"},p=e(`<ol><li><p>登录阿里云Docker Registry</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> login <span class="token parameter variable">--username</span><span class="token operator">=</span><span class="token number">13299919645</span> registry.cn-beijing.aliyuncs.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>将镜像推送到Registry</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker tag [ImageId] registry.cn-beijing.aliyuncs.com/ceel/cc:[镜像版本号]
docker push registry.cn-beijing.aliyuncs.com/ceel/cc:[镜像版本号]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>docker run -d --name=ceel-nginx -p 443:443 e47984979050</p></li></ol><h2 id="dockerfile" tabindex="-1"><a class="header-anchor" href="#dockerfile" aria-hidden="true">#</a> Dockerfile</h2>`,2),m=e(`<h4 id="dockerfile的一些规则" tabindex="-1"><a class="header-anchor" href="#dockerfile的一些规则" aria-hidden="true">#</a> DockerFile的一些规则</h4><ul><li>每条保留字指令都必须为大写字母且后面要跟随至少一个参数</li><li>指令顺序执行，遵循从上到下原则</li><li>#表示注释</li><li>每条指令都会创建一个新的镜像层，并对镜像进行提交</li></ul><h4 id="docker执行dockerfile的大致流程" tabindex="-1"><a class="header-anchor" href="#docker执行dockerfile的大致流程" aria-hidden="true">#</a> docker执行DockerFile的大致流程</h4><ul><li>docker从基础镜像运行一个容器</li><li>顺序执行一条指令对容器做出修改</li><li>执行类似docker commit的操作提交一个新的镜像层</li><li>docker基于刚才提交的镜像运行一个新的容器</li><li>执行DockerFile中下一条指令直到文件中的所有指令都执行完成</li></ul><h4 id="dockerfile的保留字指令" tabindex="-1"><a class="header-anchor" href="#dockerfile的保留字指令" aria-hidden="true">#</a> DockerFile的保留字指令</h4><ul><li>FROM：指定基础镜像</li><li>MAINTAINER：镜像维护者姓名及邮箱地址</li><li>RUN：容器构建时需要运行的命令</li><li>EXPOSE：当前容器对外暴露的端口号</li><li>WORKDIR：指定在创建容器后，终端默认登录进来的工作目录</li><li>ENV：用来在构建镜像过程中设置环境变量</li><li>ADD：将宿主机目录下的文件拷贝进镜像，ADD命令会自动处理URL和解压tar压缩包</li><li>COPY：拷贝文件、目录到镜像中。具体是将从构建上下文目录中&lt;src原路径&gt;的文件或目录复制到新一层镜像的&lt;目标路径&gt;位置 ，有两种写法：<code>COPY src dest</code> 或者 <code>COPY [&quot;src&quot;, &quot;dest&quot;]</code></li><li>VOLUME：容器数据卷，用于数据保存和持久化工作</li><li>CMD：指定一个容器启动时要运行的命令 <ul><li>注意DockerFile中可以有多个CMD指令，但只有最后一个在启动时生效，CMD会被 docker run 之后的命令或参数覆盖</li><li>CMD指令的格式和RUN相似，也是两种格式： <ul><li>shell格式：CMD &lt;命令&gt;</li><li>exec格式：CMD [&quot;可执行文件&quot;, &quot;参数1&quot;, &quot;参数2&quot; ...]</li><li>参数列表格式：CMD [&quot;参数1&quot;, &quot;参数2&quot;, ...]，在指定了ENTRYPOINT 指令后，用CMD指定具体的参数。</li></ul></li></ul></li><li>ENTRYPOINT：指定一个容器启动时要运行的命令，与CMD一样都是在指定容器启动程序及参数（下面通过实例2将他们的区别）。</li><li>ONBUILD：当构建一个被继承的DockerFile时运行命令， 父镜像在被子镜像继承后，父镜像的ONBUILD被触发。</li></ul><p>生成nginx容器脚本</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token assign-left variable">cpath</span><span class="token operator">=</span><span class="token string">&quot;/Users/ceel/desk/dockerdata/nginx&quot;</span>

<span class="token assign-left variable">clog</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable">$cpath</span>/log&quot;</span>
<span class="token assign-left variable">conf</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable">$cpath</span>/nginx.conf&quot;</span>
<span class="token assign-left variable">confd</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable">$cpath</span>/conf.d&quot;</span>
<span class="token assign-left variable">chtml</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable">$cpath</span>/html&quot;</span>

<span class="token function">docker</span> run <span class="token parameter variable">--name</span> cnginx <span class="token parameter variable">-d</span> <span class="token parameter variable">-p</span> <span class="token number">6060</span>:80 <span class="token parameter variable">-v</span> <span class="token variable">$conf</span>:/etc/nginx/nginx.conf <span class="token parameter variable">-v</span> <span class="token variable">$confd</span>:/etc/nginx/conf.d <span class="token parameter variable">-v</span> <span class="token variable">$chtml</span>:/usr/share/nginx/html nginx


/Users/ceel/desk/projects/dockerfile/nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>dockerfile</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>FROM nginx
COPY conf.d /etc/nginx/conf.d
COPY static-html-directory /usr/share/nginx/html
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="docker-file-构建镜像" tabindex="-1"><a class="header-anchor" href="#docker-file-构建镜像" aria-hidden="true">#</a> Docker file 构建镜像</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker build -t second:v1.0 .
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>配置文件地址： /etc/nginx/nginx.conf
						 /etc/nginx/conf.d
默认首页：     /usr/share/nginx/html					 



docker cp cnginx:/etc/nginx/conf.d ./conf.d 
docker cp cnginx:/etc/nginx/conf.d ./conf.d 


//测试nginx配置
docker exec 容器id nginx -t 
//重新加载nginx配置
docker exec 容器id  nginx -s reload 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13);function b(h,g){const i=n("ExternalLinkIcon"),d=n("Mermaid");return r(),c("div",null,[u,a("p",null,[a("a",v,[t("https://cr.console.aliyun.com/repository/cn-beijing/ceel/cc/details"),s(i)])]),p,s(d,{id:"mermaid-150",code:"eJxLL0osyFDwCeJyyU/OTi1yy8xJVdDVTSrNyUzR1bVTgIi+nDrnaXM/ULyoNA8h+nTdzqczV3ABABijGbk="}),m])}const x=l(o,[["render",b],["__file","docker.html.vue"]]);export{x as default};
