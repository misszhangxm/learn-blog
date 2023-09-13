import{_ as n,V as s,W as a,Z as t,X as p,a0 as e}from"./framework-fd1dac66.js";const o={},c=p("p",null,"python中BeautifulSoup库的基础应用，网页数据挖掘的常用库之一。也就是说最主要的功能是从网页抓取数据。",-1),i=e(`<h2 id="对象划分" tabindex="-1"><a class="header-anchor" href="#对象划分" aria-hidden="true">#</a> 对象划分</h2><p>解析以后全部html代码转变为4种类型： 基本对象类型 1、 <code>Tag</code>——标签，最基本的信息组织单元，分别用&lt;&gt;和&lt;/&gt;表明开头和结尾</p><ul><li>1.1、标签<code>Name</code>属性——标签的名字，<code>&lt;p&gt;...&lt;/p&gt;</code>的名字是&#39;p&#39;,格式：<code>&lt;tag&gt;.name</code></li><li>1.2、标签<code>Attributes</code>属性——标签的属性，字典形式组织，格式：<code>&lt;tag&gt;.attrs</code></li></ul><p>2、<code>NavigableString</code>——标签内非属性字符串，<code>&lt;&gt;...&lt;/&gt;</code>中的字符串，格式：<code>&lt;tag&gt;.string</code> 3、<code>Comment</code>——标签内字符串的注释部分，一种特殊的Comment类型（尖括号叹号表示注释开始：<code>&lt;!--This is a commet--&gt;</code>） 4、<code>BeautifulSoup</code>对象(整个<code>html</code>对象<code>soup</code>)</p><h2 id="爬取网页源代码以及解析代码" tabindex="-1"><a class="header-anchor" href="#爬取网页源代码以及解析代码" aria-hidden="true">#</a> 爬取网页源代码以及解析代码</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment">#coding:utf-8</span>
<span class="token comment"># BeautifulSoup抓取</span>
<span class="token keyword">import</span> urllib  <span class="token comment">#python3中urllib整合了五大模块urllib.error、urllib.parse、urllib.request、urllib.response、urllib.robotparser</span>
<span class="token keyword">import</span> re
<span class="token keyword">from</span> bs4 <span class="token keyword">import</span> BeautifulSoup

<span class="token comment"># 获取网页源代码</span>
host <span class="token operator">=</span> <span class="token string">&#39;http://www.525heart.com/index/index/index.html&#39;</span>
text <span class="token operator">=</span> urllib<span class="token punctuation">.</span>request<span class="token punctuation">.</span>urlopen<span class="token punctuation">(</span>host<span class="token punctuation">)</span><span class="token punctuation">.</span>read<span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment">#获取网页源代码，是字节数组</span>
<span class="token comment">#response=urllib.request.urlopen(host)</span>
<span class="token comment">#text = str(response.read(),encoding=&#39;utf-8&#39;)  #read获取的是字节数组，可以翻译成字符串</span>

<span class="token comment"># 解析网页源代码</span>
soup <span class="token operator">=</span> BeautifulSoup<span class="token punctuation">(</span>text<span class="token punctuation">,</span> <span class="token string">&#39;html.parser&#39;</span><span class="token punctuation">)</span>  <span class="token comment">#前一个参数为要解析的文本，后一个参数为解析模型</span>
<span class="token comment"># bs4的HTML解析器：BeautifulSoup(mk,&#39;html.parser&#39;)——条件：安装bs4库</span>
<span class="token comment"># lxml的HTML解析器：BeautifulSoup(mk,&#39;lxml&#39;)——pip install lxml</span>
<span class="token comment"># lxml的XML解析器：BeautifulSoup(mk,&#39;xml&#39;)——pip install lxml</span>
<span class="token comment"># html5lib的解析器：BeautifulSoup(mk,&#39;html5lib&#39;)——pip install html5lib</span>
<span class="token comment"># print(soup.prettify())  #打印解析的内容</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="获取标签内容以及属性" tabindex="-1"><a class="header-anchor" href="#获取标签内容以及属性" aria-hidden="true">#</a> 获取标签内容以及属性</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">print</span><span class="token punctuation">(</span>soup<span class="token punctuation">.</span>a<span class="token punctuation">)</span>   <span class="token comment">#第一个a标签</span>

<span class="token keyword">print</span><span class="token punctuation">(</span>soup<span class="token punctuation">.</span>a<span class="token punctuation">.</span>string<span class="token punctuation">)</span> <span class="token comment">#第一个a标签的文本显示  无内容则返None</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>soup<span class="token punctuation">.</span>a<span class="token punctuation">.</span>get_text<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">#获取标签内文本内容 无内容则返回空</span>

<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">type</span><span class="token punctuation">(</span>soup<span class="token punctuation">.</span>a<span class="token punctuation">.</span>string<span class="token punctuation">)</span><span class="token punctuation">)</span>   <span class="token comment">#查看第一个a标签的对象类型，类型可以能是bs4.element.xxx</span>

<span class="token comment">#标签获取</span>
<span class="token keyword">for</span> tag <span class="token keyword">in</span> soup<span class="token punctuation">(</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">)</span><span class="token punctuation">:</span>   <span class="token comment">#根据标签名获取标签</span>
<span class="token comment">#     print tag.name          #标签的名字</span>
<span class="token comment">#     print tag.parent.name     #标签的父标签的名字</span>
<span class="token comment">#     print tag.parent.parent.name       #标签的父标签的父标签名字</span>
<span class="token comment">#     print tag.string      #获得标签内非属性字符串（NavigableString ）innerText</span>
    link <span class="token operator">=</span> tag<span class="token punctuation">.</span>attrs<span class="token punctuation">[</span><span class="token string">&#39;href&#39;</span><span class="token punctuation">]</span>         <span class="token comment">#标签的属性</span>
    link <span class="token operator">=</span> tag<span class="token punctuation">[</span><span class="token string">&#39;href&#39;</span><span class="token punctuation">]</span>         <span class="token comment">#标签的属性</span>
    link <span class="token operator">=</span> tag<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string">&#39;href&#39;</span><span class="token punctuation">)</span>         <span class="token comment">#标签的属性</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>urllib<span class="token punctuation">.</span>parse<span class="token punctuation">.</span>urljoin<span class="token punctuation">(</span>host<span class="token punctuation">,</span>link<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>        <span class="token comment">#拼接网址中的连接变为绝对连接</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>tag<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">,</span>   <span class="token comment">#标签的名称</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>tag<span class="token punctuation">.</span>attrs<span class="token punctuation">)</span><span class="token punctuation">,</span>  <span class="token comment">#属性</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>tag<span class="token punctuation">.</span>string<span class="token punctuation">)</span>  <span class="token comment">#标签内的文本显示</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>tag<span class="token punctuation">.</span>get_text<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>   <span class="token comment">#获取标签内文本内容</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="搜索" tabindex="-1"><a class="header-anchor" href="#搜索" aria-hidden="true">#</a> 搜索</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;============搜索============&quot;</span><span class="token punctuation">)</span>
<span class="token comment"># find_all( name , attrs , recursive , text , **kwargs )  #返回结果只包含一个元素的列表</span>
<span class="token comment"># find( name , attrs , recursive , text , **kwargs )  #直接返回结果</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;============搜索-按标签搜索============&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>soup<span class="token punctuation">.</span>find_all<span class="token punctuation">(</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span>  <span class="token comment">#按字符串查询</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>soup<span class="token punctuation">.</span>find_all<span class="token punctuation">(</span>re<span class="token punctuation">.</span><span class="token builtin">compile</span><span class="token punctuation">(</span><span class="token string">&quot;^a&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span>  <span class="token comment">#按正则表达式查询</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>soup<span class="token punctuation">.</span>find_all<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;b&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span>  <span class="token comment">#按列表查询</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>soup<span class="token punctuation">.</span>find_all<span class="token punctuation">(</span><span class="token boolean">True</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span>  <span class="token comment">#查询所有元素，第一个元素就是html元素，就是整个全文</span>

<span class="token keyword">def</span> <span class="token function">has_class_but_no_id</span><span class="token punctuation">(</span>tag<span class="token punctuation">)</span><span class="token punctuation">:</span>
  <span class="token keyword">return</span> tag<span class="token punctuation">.</span>has_attr<span class="token punctuation">(</span><span class="token string">&#39;href&#39;</span><span class="token punctuation">)</span> <span class="token keyword">and</span> <span class="token keyword">not</span> tag<span class="token punctuation">.</span>has_attr<span class="token punctuation">(</span><span class="token string">&#39;target&#39;</span><span class="token punctuation">)</span>  <span class="token comment">#返回 True才查询</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>soup<span class="token punctuation">.</span>find_all<span class="token punctuation">(</span>has_class_but_no_id<span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment">#按方法查询</span>


<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;============搜索-按属性搜索============&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>soup<span class="token punctuation">.</span>find_all<span class="token punctuation">(</span><span class="token builtin">id</span><span class="token operator">=</span><span class="token string">&#39;headerImg&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment">#按属性值查询,data-*不能查询</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>soup<span class="token punctuation">.</span>find_all<span class="token punctuation">(</span>href<span class="token operator">=</span>re<span class="token punctuation">.</span><span class="token builtin">compile</span><span class="token punctuation">(</span><span class="token string">&quot;#&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment">#按属性值的正则表达式查询</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>soup<span class="token punctuation">.</span>find_all<span class="token punctuation">(</span>href<span class="token operator">=</span>re<span class="token punctuation">.</span><span class="token builtin">compile</span><span class="token punctuation">(</span><span class="token string">&quot;.*index\\.html&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> target<span class="token operator">=</span><span class="token string">&#39;_blank&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment">#按属性值列表查询</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>soup<span class="token punctuation">.</span>find_all<span class="token punctuation">(</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">,</span> class_<span class="token operator">=</span><span class="token string">&quot;current&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment">#标签属性联合搜索，class 是 python 的关键词，所以加了_</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>soup<span class="token punctuation">.</span>find_all<span class="token punctuation">(</span>attrs<span class="token operator">=</span><span class="token punctuation">{</span><span class="token string">&quot;class&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;current&quot;</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment">#搜索包含指定属性值的元素</span>



<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;============搜索-按文本搜索============&quot;</span><span class="token punctuation">)</span>

<span class="token keyword">print</span><span class="token punctuation">(</span>soup<span class="token punctuation">.</span>find_all<span class="token punctuation">(</span>text<span class="token operator">=</span><span class="token string">&quot;首页&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment">#按文本搜素，接受的参数与按标签搜索一样</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>soup<span class="token punctuation">.</span>find_all<span class="token punctuation">(</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">,</span> limit<span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">,</span>recursive<span class="token operator">=</span><span class="token boolean">False</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment">#以上所有搜索都可以用limit限定最大搜索到的数目，用recursive限定只搜索直接子节点</span>



<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;============搜索-按css选择器名称搜索============&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>soup<span class="token punctuation">.</span>select<span class="token punctuation">(</span><span class="token string">&#39;title&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>   <span class="token comment">#按名称</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>soup<span class="token punctuation">.</span>select<span class="token punctuation">(</span><span class="token string">&#39;.current&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment">#按类名</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>soup<span class="token punctuation">.</span>select<span class="token punctuation">(</span><span class="token string">&#39;#headerImg&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">#按id</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>soup<span class="token punctuation">.</span>select<span class="token punctuation">(</span><span class="token string">&#39;li .current&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment">#后代查询</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>soup<span class="token punctuation">.</span>select<span class="token punctuation">(</span><span class="token string">&quot;head &gt; title&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">#子标签查询</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>soup<span class="token punctuation">.</span>select<span class="token punctuation">(</span><span class="token string">&#39;a[class=&quot;current&quot;]&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment">#属性查询</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="遍历" tabindex="-1"><a class="header-anchor" href="#遍历" aria-hidden="true">#</a> 遍历</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;============节点遍历-向下遍历============&quot;</span><span class="token punctuation">)</span>

<span class="token comment">#find_parents() find_parent() #搜索当前节点的父辈节点</span>
<span class="token comment">#find_next_siblings() find_next_sibling() #搜索符合条件的后面的兄弟节点</span>
<span class="token comment">#find_previous_siblings() find_previous_sibling() #搜索符合条件的前面的兄弟节点</span>
<span class="token comment">#find_all_next() find_next() #对当前 tag 的之后的 tag 和字符串进行迭代</span>
<span class="token comment">#find_all_previous() 和 find_previous()  #对当前节点前面的 tag 和字符串进行迭代</span>

<span class="token comment">#遍历（向下）</span>
<span class="token comment"># contents属性：直接子节点的列表，将&lt;tag&gt;所有儿子节点存入列表</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>soup<span class="token punctuation">.</span>head<span class="token punctuation">.</span>contents<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token comment"># children属性：子节点的迭代类型，与.contents类似，用于循环遍历儿子节点</span>
<span class="token comment"># descendants属性：后代节点的迭代类型，包含所有子孙节点，用于循环遍历</span>
<span class="token keyword">for</span> child <span class="token keyword">in</span> soup<span class="token punctuation">.</span>body<span class="token punctuation">.</span>children<span class="token punctuation">:</span>        <span class="token comment">#直接子节点列表,迭代类型，需要用循环方式，空格、换行也是子节点</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;body&#39;s child：&quot;</span><span class="token operator">+</span><span class="token builtin">str</span><span class="token punctuation">(</span>child<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">#for string in soup.strings:  #遍历获取所有显示文本内容，soup.stripped_strings可以去除空格或换行</span>
<span class="token comment">#  print(repr(string))</span>


<span class="token comment">#遍历（向上）</span>
<span class="token comment"># parent属性：节点的父标签</span>
<span class="token comment"># parents属性：节点先辈标签的迭代类型，用于循环遍历先辈节点</span>

<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;============节点遍历-同胞遍历============&quot;</span><span class="token punctuation">)</span>

<span class="token comment">#遍历（平级）</span>
firstli<span class="token operator">=</span>soup<span class="token punctuation">(</span><span class="token string">&#39;li&#39;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>  <span class="token comment">#等价于soup.li</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>firstli<span class="token punctuation">.</span>next_sibling<span class="token punctuation">)</span>   <span class="token comment">#注意空格换行也是节点</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>firstli<span class="token punctuation">.</span>previous_sibling<span class="token punctuation">)</span>  <span class="token comment">#注意空格换行也是节点</span>
<span class="token keyword">for</span> sibling <span class="token keyword">in</span> firstli<span class="token punctuation">.</span>next_siblings<span class="token punctuation">:</span>  <span class="token comment">#注意空格换行也是节点</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;next_siblings:&#39;</span><span class="token punctuation">,</span>sibling<span class="token punctuation">)</span>
<span class="token keyword">for</span> sibling <span class="token keyword">in</span> firstli<span class="token punctuation">.</span>previous_siblings<span class="token punctuation">:</span>  <span class="token comment">#注意空格换行也是节点</span>
     <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;previous_siblings:&#39;</span><span class="token operator">+</span><span class="token builtin">str</span><span class="token punctuation">(</span>sibling<span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">#遍历（代码前后）</span>
<span class="token comment">#next_elements当前节点之后的所有节点</span>
<span class="token comment">#previous_elements当前节点之前的所有节点</span>
<span class="token comment">#next_element当前节点的下一个节点</span>
<span class="token comment">#previous_element当前节点的前一个节点</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以上内容总结自：<code>https://blog.csdn.net/luanpeng825485697/article/details/78378653</code></p>`,13);function l(u,k){return s(),a("div",null,[c,t(" more "),i])}const d=n(o,[["render",l],["__file","BeautifulSoup.html.vue"]]);export{d as default};
