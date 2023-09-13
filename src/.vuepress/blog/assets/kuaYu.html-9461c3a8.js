import{_ as s,F as i,V as t,W as d,Z as l,X as e,Y as n,$ as r,a0 as c}from"./framework-fd1dac66.js";const o={},u=e("h2",{id:"首先要知道什么是跨域",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#首先要知道什么是跨域","aria-hidden":"true"},"#"),n(" 首先要知道什么是跨域！")],-1),v=c(`<p>跨域，指的是浏览器不能执行其他网站的脚本。它是由浏览器的同源策略造成的，是浏览器施加的安全限制。</p><p>所谓同源是指，域名，协议，端口均相同，不明白没关系，举个栗子：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>http://www.123.com/index.html 调用 http://www.123.com/server.php （非跨域）

http://www.123.com/index.html 调用 http://www.456.com/server.php （主域名不同:123/456，跨域）

http://abc.123.com/index.html 调用 http://def.123.com/server.php （子域名不同:abc/def，跨域）

http://www.123.com:8080/index.html 调用 http://www.123.com:8081/server.php （端口不同:8080/8081，跨域）

http://www.123.com/index.html 调用 https://www.123.com/server.php （协议不同:http/https，跨域）

请注意：localhost和127.0.0.1虽然都指向本机，但也属于跨域。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>浏览器执行javascript脚本时，会检查这个脚本属于哪个页面，如果不是同源页面，就不会被执行。</p><hr><h2 id="使用jsonp进行跨域请求" tabindex="-1"><a class="header-anchor" href="#使用jsonp进行跨域请求" aria-hidden="true">#</a> 使用JSONP进行跨域请求！</h2><div class="language-JavaScript line-numbers-mode" data-ext="JavaScript"><pre class="language-JavaScript"><code>var script = document.createElement(&quot;script&quot;);
script.src = &quot;https://api.douban.com/v2/book/search?q=javascript&amp;count=1&amp;callback=handleResponse&quot;;
document.body.insertBefore(script, document.body.firstChild);
function handleResponse(response){
    // 对response数据进行操作代码
    console.log(response)
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>jsonp原理：</strong> 其本质是利用了标签的src属性具有可跨域的特性，由服务端返回预先定义好的javascript函数的调用，并且将服务端数据以该函数参数的形式传递过来。</p><h2 id="使用jquery-ajax-进行请求" tabindex="-1"><a class="header-anchor" href="#使用jquery-ajax-进行请求" aria-hidden="true">#</a> 使用JQuery $.ajax()进行请求</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$.ajax({
    async : true,
    url : &quot;https://api.douban.com/v2/book/search&quot;,
    type : &quot;GET&quot;,
    dataType : &quot;jsonp&quot;, // 返回的数据类型，设置为JSONP方式
    jsonp : &#39;callback&#39;, //指定一个查询参数名称来覆盖默认的 jsonp 回调参数名 callback
    jsonpCallback: &#39;handleResponse&#39;, //设置回调函数名
    data : {
        q : &quot;javascript&quot;,
        count : 1
    },
    success: function(response, status, xhr){
        console.log(&#39;状态为：&#39; + status + &#39;,状态是：&#39; + xhr.statusText);
        console.log(response);
    }
});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="使用-getjson-进行请求" tabindex="-1"><a class="header-anchor" href="#使用-getjson-进行请求" aria-hidden="true">#</a> 使用 $.getJSON()进行请求</h2><p>在路径后加 &#39;？callback=？&#39; 即可</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$.getJSON(&quot;https://api.douban.com/v2/book/search?q=javascript&amp;count=1&amp;callback=?&quot;, function(data){
    console.log(data);
});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>ajax的核心是通过XmlHttpRequest获取非本页内容，而jsonp的核心则是动态添加&#39;&lt; script &gt;&#39;标签来调用服务器提供的js脚本。</p><p>ajax与jsonp的区别不在于是否跨域，ajax通过服务端代理一样可以实现跨域，jsonp本身也不排斥同域的数据的获取。</p>`,15),p={href:"https://blog.csdn.net/u014607184/article/details/52027879",target:"_blank",rel:"noopener noreferrer"};function m(h,b){const a=i("ExternalLinkIcon");return t(),d("div",null,[u,l(" more "),v,e("p",null,[e("em",null,[n("本文参考"),e("a",p,[n("https://blog.csdn.net/u014607184/article/details/52027879"),r(a)])])])])}const g=s(o,[["render",m],["__file","kuaYu.html.vue"]]);export{g as default};
