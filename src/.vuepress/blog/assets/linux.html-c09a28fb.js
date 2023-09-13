import{_ as e,V as o,W as d,a0 as c}from"./framework-fd1dac66.js";const r={},t=c(`<p><strong>查看端口占用</strong> <code> netstat -ntlp|grep 80</code></p><h2 id="vim" tabindex="-1"><a class="header-anchor" href="#vim" aria-hidden="true">#</a> Vim</h2><p>Vim是一款功能强大、高度可定制的文本编辑器，被广泛应用于程序开发、文本处理等领域。</p><p>下面是一些常用的 Vim 命令，供参考：</p><ol><li>移动光标：<code>h</code>(左)、<code>j</code>(下)、<code>k</code>（上）、<code>l</code>（右）、<code>0</code>(行首)、<code>^</code>（行首第一个非空字符）、<code>$</code>(行尾)、<code>G</code>(文件末尾)、<code>gg</code>(文件开头)。</li><li>插入文本：<code>i</code>(在光标前插入)、<code>a</code>(在光标后插入)、<code>I</code>(在行首插入)、<code>A</code>(在行尾插入)、<code>o</code>(在下一行插入新行)、<code>O</code>(在上一行插入新行)。</li><li>删除文本：<code>x</code>(删除光标所在位置的字符)、<code>dd</code>(删除当前行)、<code>dw</code>(删除当前单词)、<code>D</code>(删除到行尾)、<code>u</code>(撤销上一次操作)、<code>Ctrl+r</code>(重做上一次撤销)。</li><li>复制粘贴：<code>yy</code>(复制当前行)、<code>yw</code>(复制当前单词)、<code>p</code>(粘贴文本)、<code>P</code>(将内容粘贴到光标前面)。</li><li>搜索替换：<code>/</code>+关键词(向前搜索)、<code>?</code>+关键词(向后搜索)、<code>n</code>(下一个匹配项)、<code>N</code>(上一个匹配项)、<code>:s/old/new/g</code>(全局替换)。</li><li>保存退出：<code>:w</code>(保存)、<code>:q</code>(退出)、<code>:q!</code>(强制退出，不保存)、<code>:wq</code>(保存并退出)。</li></ol><p>以上是一些 Vim 的常用命令，还有许多功能强大的操作需要进一步学习和熟练掌握。</p><pre><code>    location / {
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
</code></pre>`,7),n=[t];function a(_,i){return o(),d("div",null,n)}const s=e(r,[["render",a],["__file","linux.html.vue"]]);export{s as default};
