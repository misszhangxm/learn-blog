

## 基本用法

拉取镜像：

```bash
docker pull imageName:latest    latest 表示最新版
```

运行镜像：

```
docker run -p 本机映射端口:镜像映射端口 -d  --name 启动镜像名称 -e 镜像启动参数  镜像名称:镜像版本号
 
      参数释义：
     -p   本机端口和容器启动端口映射
     -d   后台运行
     --name   容器名称
     -e    镜像启动参数
     
     
docker run [OPTIONS] IMAGE [COMMAND] [ARG...]
     
--name="容器新名字"       为容器指定一个名称；

-d: 后台运行容器并返回容器ID，也即启动守护式容器(后台运行)；

-i：以交互模式运行容器，通常与 -t 同时使用；

-t：为容器重新分配一个伪输入终端，通常与 -i 同时使用；

也即启动交互式容器(前台有伪终端，等待交互)；

-P: 随机端口映射，大写P

-p: 指定端口映射，小写p

-v: 用于把容器的数据卷映射到宿主机上，用法如：docker run -it -v /data:/data centos bash 表示把容器的/data目录映射到宿主机的/data目录，左边是宿主机的目录，右边是容器里的目录，
```

## 容器

### 常用命令

**查看运行中的容器**    docker ps

**查看所有容器**      docker ps -a

**停止容器**    docker stop   containerName / containerID

**启动容器**    docker start   containerName / containerID

**删除容器** docker rm containerName / containerID

**删除镜像** 

**强制删除所有的容器**  docker rm -f $(docker ps -a -q)

**进入容器**   docker exec -it  containerID  /bin/bash

### 容器重命名

要重命名 Docker 容器，可以使用 `docker rename` 命令。 命令的语法如下：

```bash
docker rename old_container_name new_container_name
```

其中，`old_container_name` 表示待重命名的容器名称，`new_container_name` 表示新的容器名称。

举个例子，如果您要将一个名为 `my_container` 的容器重命名为 `new_container`，则可以运行以下命令：

```bash
docker rename my_container new_container
```

在运行该命令之后，Docker 将会停止 `my_container` 容器，并将它的名称修改为 `new_container`。 如果需要启动容器，只需使用新的容器名称即可：

```bash
docker start new_container
```

这样就完成了 Docker 容器的重命名操作。



### 进入容器

```
docker exec -it 容器id /bin/bash
```



## Docker 网络

- 查看docker 网络

```bash
docker network ls
```

这将列出Docker中创建的所有网络，包括网络ID、名称、驱动程序类型、作用域等信息。例如：

```bash
NETWORK ID     NAME             DRIVER    SCOPE
7dab3c3a8693   bridge           bridge    local
e88b0a80fa8d   host             host      local
c8f6a9e18924   none             null      local
```

其中，`bridge`、`host`和`none`为Docker默认提供的三种网络，分别用于连接主机网络、独立容器网络、无网络的容器。

- 要查看指定网络的详细信息，可以使用以下命令：

```
docker network inspect [network name or id]
```

例如，要查看名为 `"my_network" `的网络的详细信息，可以运行以下命令：

```
复制代码docker network inspect my_network
```

该命令将返回一个JSON格式的文本，其中包含了该网络的各种属性和配置信息，包括网络ID、名称、驱动程序、IP地址范围、连接的容器列表等详细信息。



### 查看 Docker 容器的 IP 地址

要查看运行中的 Docker 容器的 IP 地址，可以使用以下命令：

```bash
docker inspect -f '{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' container_name_or_id
```

其中，container_name_or_id 指代 Docker 容器的名称或者 ID。在这里，假设 mysql2 是 MySQL 容器的名称，那么可以使用以下命令获取 MySQL 容器的 IP 地址：

```bash
docker inspect -f '{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' mysql2
```

该命令会输出容器的 IP 地址，例如：

```
172.17.0.2
```

这个 IP 地址可以被用作配置文件中 `server` 块中的 `upstream` 服务的地址，从而实现代理到 Docker 容器中运行的 MySQL 数据库。





## 镜像

### 删除镜像

```
docker rmi imageId
```



### 提交镜像到阿里云镜像服务

https://cr.console.aliyun.com/repository/cn-beijing/ceel/cc/details

1. 登录阿里云Docker Registry

   ```bash
   docker login --username=13299919645 registry.cn-beijing.aliyuncs.com
   ```

2. 将镜像推送到Registry

   ```
   docker tag [ImageId] registry.cn-beijing.aliyuncs.com/ceel/cc:[镜像版本号]
   docker push registry.cn-beijing.aliyuncs.com/ceel/cc:[镜像版本号]
   ```

    docker run -d --name=ceel-nginx -p 443:443  e47984979050
   
   

## Dockerfile



~~~mermaid
graph LR
DockerFile --bulid--> Docker镜像 --run--> Docker容器
~~~

#### DockerFile的一些规则

- 每条保留字指令都必须为大写字母且后面要跟随至少一个参数
- 指令顺序执行，遵循从上到下原则
- \#表示注释
- 每条指令都会创建一个新的镜像层，并对镜像进行提交

#### docker执行DockerFile的大致流程

- docker从基础镜像运行一个容器
- 顺序执行一条指令对容器做出修改
- 执行类似docker commit的操作提交一个新的镜像层
- docker基于刚才提交的镜像运行一个新的容器
- 执行DockerFile中下一条指令直到文件中的所有指令都执行完成

#### DockerFile的保留字指令

- FROM：指定基础镜像
- MAINTAINER：镜像维护者姓名及邮箱地址
- RUN：容器构建时需要运行的命令
- EXPOSE：当前容器对外暴露的端口号
- WORKDIR：指定在创建容器后，终端默认登录进来的工作目录
- ENV：用来在构建镜像过程中设置环境变量
- ADD：将宿主机目录下的文件拷贝进镜像，ADD命令会自动处理URL和解压tar压缩包
- COPY：拷贝文件、目录到镜像中。具体是将从构建上下文目录中<src原路径>的文件或目录复制到新一层镜像的<目标路径>位置 ，有两种写法：`COPY src dest` 或者 `COPY ["src", "dest"]`
- VOLUME：容器数据卷，用于数据保存和持久化工作
- CMD：指定一个容器启动时要运行的命令
  - 注意DockerFile中可以有多个CMD指令，但只有最后一个在启动时生效，CMD会被 docker run 之后的命令或参数覆盖
  - CMD指令的格式和RUN相似，也是两种格式：
    - shell格式：CMD <命令>
    - exec格式：CMD ["可执行文件", "参数1", "参数2" ...]
    - 参数列表格式：CMD ["参数1", "参数2", ...]，在指定了ENTRYPOINT 指令后，用CMD指定具体的参数。
- ENTRYPOINT：指定一个容器启动时要运行的命令，与CMD一样都是在指定容器启动程序及参数（下面通过实例2将他们的区别）。
- ONBUILD：当构建一个被继承的DockerFile时运行命令， 父镜像在被子镜像继承后，父镜像的ONBUILD被触发。







生成nginx容器脚本

```shell
#!/bin/bash

cpath="/Users/ceel/desk/dockerdata/nginx"

clog="$cpath/log"
conf="$cpath/nginx.conf"
confd="$cpath/conf.d"
chtml="$cpath/html"

docker run --name cnginx -d -p 6060:80 -v $conf:/etc/nginx/nginx.conf -v $confd:/etc/nginx/conf.d -v $chtml:/usr/share/nginx/html nginx


/Users/ceel/desk/projects/dockerfile/nginx
```

dockerfile



```
FROM nginx
COPY conf.d /etc/nginx/conf.d
COPY static-html-directory /usr/share/nginx/html
```



### Docker file  构建镜像

```
docker build -t second:v1.0 .
```



```
配置文件地址： /etc/nginx/nginx.conf
						 /etc/nginx/conf.d
默认首页：     /usr/share/nginx/html					 



docker cp cnginx:/etc/nginx/conf.d ./conf.d 
docker cp cnginx:/etc/nginx/conf.d ./conf.d 


//测试nginx配置
docker exec 容器id nginx -t 
//重新加载nginx配置
docker exec 容器id  nginx -s reload 
```



