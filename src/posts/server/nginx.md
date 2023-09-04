---
title: Nginx
date: 2023-03-13 15:44:35
tag: [server]
category: server
---

## Nginx 配置https

### 查看Nginx是否安装ssl模块
进入`nginx`安装目录下的`sbin目录`执行 
```bash
./nginx -V
```
例如：
如果结果中包含 `--with-http_ssl_module` 说明已经安装了ssl模块，反之亦然
```
[root@VM-8-10-centos sbin]# ./nginx -V
nginx version: nginx/1.22.1
built by gcc 4.8.5 20150623 (Red Hat 4.8.5-44) (GCC)
built with OpenSSL 1.0.2k-fips  26 Jan 2017
TLS SNI support enabled
configure arguments: --prefix=/home/nginx --with-http_stub_status_module --with-http_ssl_module

```

#### 未安装模块
1. 停止Nginx服务
    ```bash
    ./nginx -s stop
    ```
1. 进入nginx解压目录，重新编译nginx
    ```bash
    # --prefix 值为nginx安装路径
    ./configure --prefix=/home/nginx  --with-http_stub_status_module --with-http_ssl_module
    ```
1. 编译完成之后, 在nginx解压目录继续执行make命令
    ```bash
    make
    ```
1. 执行make命令结束后, 在nginx解压目录下找到objs目录中的nginx文件。 将其复制到Nginx安装目录中sbin中（替换掉原来的）
    ```bash
     cp ./nginx /home/nginx/sbin/nginx 
    ```
1. 至此完成。 通过 `./nginx -V` 查看是否安装ok


#### 已安装模块

直接配置nginx

```bash
    server {
        # 80 端口重定向为https
        listen       80;
	    server_name  ceel.vip;
        rewrite ^/(.*)$ https://ceel.vip:443/$1 permanent;
    }
    server {
        listen       443 ssl;
        server_name  ceel.vip; 

        ssl_certificate      your.ssl证书路径.pem;
        ssl_certificate_key  your.ssl证书路径.key;

        ssl_session_cache    shared:SSL:1m;
        ssl_session_timeout  5m;

        ssl_ciphers  HIGH:!aNULL:!MD5;
        ssl_prefer_server_ciphers  on;

        location / {
            root   /home/ceel/blog;
            index  index.html index.htm;
        }
    }
```


## rewrite 指令

- 作用域	server, location
- 默认值	on
- 指令值选项	on 或 off
- 指令说明	对用户的 URI 用正则表达式的方式进行重写，并跳转到新的 URI

配置样例如下：
```bash
http {
    rewrite ^/users/(.*)$ /show?user=$1 last;
}
```

rewrite 访问重写是通过 rewrite 指令实现的，rewrite 指令的语法格式如下：
```bash
rewrite regex replacement [flag];
```

1) regex 是 PCRE 语法格式的正则表达式。

2) replacement 是重写 URI 的改写规则。当改写规则以"http://""https://"或"$scheme"开头时，Nginx 重写该语句后将停止执行后续任务，并将改写后的 URI 跳转返回客户端。

3) flag 是执行该条重写指令后的操作控制符。操作控制符有如下 4 种：
    - last：执行完当前重写规则跳转到新的 URI 后继续执行后续操作；
    - break：执行完当前重写规则跳转到新的 URI 后不再执行后续操作。不影响用户浏览器 URI 显示；
    - redirect：返回响应状态码 302 的临时重定向，返回内容是重定向 URI 的内容，但浏览器网址仍为请求时的 URI；
    - permanent：返回响应状态码 301 的永久重定向，返回内容是重定向 URI 的内容，浏览器网址变为重定向的 URI。

