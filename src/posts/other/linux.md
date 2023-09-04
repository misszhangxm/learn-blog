**查看端口占用**  ` netstat -ntlp|grep 80`

## Vim 

Vim是一款功能强大、高度可定制的文本编辑器，被广泛应用于程序开发、文本处理等领域。

下面是一些常用的 Vim 命令，供参考：

1. 移动光标：`h`(左)、`j`(下)、`k`（上）、`l`（右）、`0`(行首)、`^`（行首第一个非空字符）、`$`(行尾)、`G`(文件末尾)、`gg`(文件开头)。
2. 插入文本：`i`(在光标前插入)、`a`(在光标后插入)、`I`(在行首插入)、`A`(在行尾插入)、`o`(在下一行插入新行)、`O`(在上一行插入新行)。
3. 删除文本：`x`(删除光标所在位置的字符)、`dd`(删除当前行)、`dw`(删除当前单词)、`D`(删除到行尾)、`u`(撤销上一次操作)、`Ctrl+r`(重做上一次撤销)。
4. 复制粘贴：`yy`(复制当前行)、`yw`(复制当前单词)、`p`(粘贴文本)、`P`(将内容粘贴到光标前面)。
5. 搜索替换：`/`+关键词(向前搜索)、`?`+关键词(向后搜索)、`n`(下一个匹配项)、`N`(上一个匹配项)、`:s/old/new/g`(全局替换)。
6. 保存退出：`:w`(保存)、`:q`(退出)、`:q!`(强制退出，不保存)、`:wq`(保存并退出)。

以上是一些 Vim 的常用命令，还有许多功能强大的操作需要进一步学习和熟练掌握。



        location / {
            proxy_set_header Host $host:$server_port; 
            proxy_set_header X-Real-IP        $remote_addr;  
            proxy_set_header X-Forwarded-For  $proxy_add_x_forwarded_for;
            proxy_pass http://192.168.70.13:8080;
            index  index.html index.htm;
        }
       location ^~ /cygl/ {
            proxy_set_header Host $host:$server_port; 
            proxy_set_header X-Real-IP        $remote_addr;  
            proxy_set_header X-Forwarded-For  $proxy_add_x_forwarded_for;
            proxy_pass http://192.168.70.13:8080;
            index  index.html index.htm;
        }
