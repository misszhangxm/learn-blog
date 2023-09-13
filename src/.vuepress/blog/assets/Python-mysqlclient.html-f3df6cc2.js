import{_ as e,F as t,V as i,W as c,Z as o,X as s,Y as n,$ as l,a0 as p}from"./framework-fd1dac66.js";const u={},r=s("p",null,"安装MySQLClient pip3安装是会报错",-1),d={href:"https://www.lfd.uci.edu/~gohlke/pythonlibs/#mysqlclient",target:"_blank",rel:"noopener noreferrer"},v=s("code",null,"pip3 install <文件名>",-1),m=p(`<p><strong>MySQLClient 的使用</strong></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment">#!/usr/bin/env python3</span>
<span class="token comment"># -*- coding: utf-8 -*-</span>
<span class="token keyword">import</span> MySQLdb

<span class="token comment"># 链接数据库</span>

con <span class="token operator">=</span> MySQLdb<span class="token punctuation">.</span>connect<span class="token punctuation">(</span>
        host<span class="token operator">=</span><span class="token string">&quot;localhost&quot;</span><span class="token punctuation">,</span>
        port<span class="token operator">=</span><span class="token string">&quot;3306&quot;</span><span class="token punctuation">,</span>
        user<span class="token operator">=</span><span class="token string">&quot;root&quot;</span><span class="token punctuation">,</span>
        passwd<span class="token operator">=</span><span class="token string">&quot;******&quot;</span><span class="token punctuation">,</span>
        db<span class="token operator">=</span><span class="token string">&quot;python_test&quot;</span>
        <span class="token punctuation">)</span>
<span class="token comment"># 获取游标</span>
cur <span class="token operator">=</span> con<span class="token punctuation">.</span>cursor<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment"># 添加一条数据</span>
cur<span class="token punctuation">.</span>execute<span class="token punctuation">(</span><span class="token string">&#39;insert into test values(34, &quot;timo&quot;, &quot;12year&quot;, 22)&#39;</span><span class="token punctuation">)</span>

<span class="token comment"># 删除一条数据</span>
cur<span class="token punctuation">.</span>execute<span class="token punctuation">(</span><span class="token string">&#39;delete from test where id=&quot;34&quot;&#39;</span><span class="token punctuation">)</span>

<span class="token comment"># 修改数据</span>
cur<span class="token punctuation">.</span>execute<span class="token punctuation">(</span><span class="token string">&#39;update test set id=&quot;33&quot; where id=&quot;32&#39;</span><span class="token punctuation">)</span>

<span class="token comment"># 查询 返回 1 or 0</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>cur<span class="token punctuation">.</span>execute<span class="token punctuation">(</span><span class="token string">&#39;select * from test where id= &quot;31&quot; &#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">#一次插入多条记录</span>
sqli<span class="token operator">=</span><span class="token string">&quot;insert into test values(%s,%s,%s,%s)&quot;</span>
cur<span class="token punctuation">.</span>executemany<span class="token punctuation">(</span>sqli<span class="token punctuation">,</span><span class="token punctuation">[</span>
    <span class="token punctuation">(</span><span class="token string">&#39;3&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;Tom&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;1 year 1 class&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;6&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">(</span><span class="token string">&#39;3&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;Jack&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;2 year 1 class&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;7&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">(</span><span class="token string">&#39;3&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;Yaheng&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;2 year 2 class&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;7&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">)</span>

<span class="token comment">#cur.close() 关闭游标</span>
cur<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">#conn.commit()方法在提交事物，在向数据库插入一条数据时必须要有这个方法，否则数据不会被真正的插入</span>
conn<span class="token punctuation">.</span>commit<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">#conn.close()关闭数据库连接</span>
conn<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment"># executemany()方法可以一次插入多条值，执行单挑sql语句,但是重复执行参数列表里的参数,返回值为受影响的行数。</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>fetchone()</strong></p><div class="language-python3 line-numbers-mode" data-ext="python3"><pre class="language-python3"><code>&gt;&gt;&gt; import MySQLdb
&gt;&gt;&gt; conn = MySQLdb.connect(host=&#39;localhost&#39;,port = 3306,user=&#39;root&#39;, passwd=&#39;123456&#39;, db =&#39;test&#39;,)
&gt;&gt;&gt; cur = conn.cursor()
&gt;&gt;&gt; cur.execute(&quot;select * from student&quot;)
5L
&gt;&gt;&gt; cur.fetchone()
(1L, &#39;Alen&#39;, &#39;1 year 2 class&#39;, &#39;6&#39;)
&gt;&gt;&gt; cur.fetchone()
(3L, &#39;Huhu&#39;, &#39;2 year 1 class&#39;, &#39;7&#39;)
&gt;&gt;&gt; cur.fetchone()
(3L, &#39;Tom&#39;, &#39;1 year 1 class&#39;, &#39;6&#39;)
...
&gt;&gt;&gt;cur.scroll(0,&#39;absolute&#39;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>fetchone()方法可以帮助我们获得表中的数据，可是每次执行cur.fetchone() 获得的数据都不一样，换句话说每执行一次，游标会从表中的第一条数据移动到下一条数据的位置，所以，再次执行的时候得到的是第二条数据。</p><p><strong>fetchmany()</strong></p><div class="language-python3 line-numbers-mode" data-ext="python3"><pre class="language-python3"><code>#获得表中有多少条数据
aa=cur.execute(&quot;select * from student&quot;)
print aa

#打印表中的多少数据
info = cur.fetchmany(aa)
for ii in info:
    print ii
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>fetchmany()方法可以获得多条数据，但需要指定数据的条数，通过一个for循环就可以把多条数据打印出来。</p>`,8);function k(b,g){const a=t("ExternalLinkIcon");return i(),c("div",null,[r,o(" more "),s("p",null,[n("所以到下面链接安装相应的版本。例如 python3.6 就下载cp36 "),s("a",d,[n("https://www.lfd.uci.edu/~gohlke/pythonlibs/#mysqlclient"),l(a)]),n(" 下载完成以后直接进入文件目录"),v,n("进行安装即可~")]),m])}const y=e(u,[["render",k],["__file","Python-mysqlclient.html.vue"]]);export{y as default};
