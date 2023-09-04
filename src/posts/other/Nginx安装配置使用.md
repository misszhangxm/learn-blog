# 安装

Linux

- 官网下载安装包： https://nginx.org/en/
- 放到任意目录，解压 `tar -zxvf nginx-1.22.1.tar.gz`
- 进入解压后的目录中，执行` ./configure --prefix=/home/nginx `   prefix 指定安装目录
- 执行 `make`
- 进入`nginx`目录中的`sbin`目录，执行`./nginx` 启动`nginx`
- 浏览器输入`ip`查看是否启动成功。

至此安装完成。

# 常用命令



- 查看版本   `./nginx -v`
- 启动 `./nginx`
- 停止 `./nginx -s stop`
- 重新加载配置 `./nginx -s reload`
- 重启 `./nginx -s reopen`





# 配置

## server模块



```conf
server {
    listen       80;
    server_name  cc.ceel.vip;

    #charset koi8-r;

    #access_log  logs/host.access.log  main;

    location / {
        root   /home/ceel/blog;
        index  index.html index.htm;
    }
}
```

- root  指定一个目录，默认访问其中的`index`值,  如上例`index	 index.html index.htm`则会默认访问`index.html` 或者`index.htm`

- **listen**   指定监听端口
- **server_name**  虚拟服务器的识别路径。因此不同的域名会通过请求头中的HOST字段，匹配到特定的server块，转发到对应的应用服务器中去。
