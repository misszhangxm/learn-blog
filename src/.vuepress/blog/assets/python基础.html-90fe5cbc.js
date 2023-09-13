import{_ as e,V as n,W as t,Z as i,X as d,a0 as a}from"./framework-fd1dac66.js";const s={},l=d("p",null,"input() 用于输入 print() 用于输出",-1),r=a(`<h2 id="数据类型" tabindex="-1"><a class="header-anchor" href="#数据类型" aria-hidden="true">#</a> 数据类型:</h2><blockquote><p>1、整数 、浮点数 &#39; / &#39; 表示除 得出的结果一定是个浮点型. &#39; // &#39; 表示除 得出的结果一定是整数.(如果是小数会自动取整) &#39; % &#39; 表示除 取余数(自动取得小数点后面的数)</p></blockquote><blockquote><p>2、字符串(&#39;&#39; / &quot;&quot;) 可以使用 &#39; \\ &#39; 转义, <code>r&#39;&#39;</code>表示<code>&#39;&#39;</code>内部的字符串默认不转义 <code>&#39;&#39;&#39; line1 &#39;&#39;&#39;</code> 表示多行内容 <code>Python提供了ord()函数获取字符的整数表示，chr()函数把编码转换为对应的字符</code></p></blockquote><pre><code>\`len()\` 获取字符串的长度
replace() 替换
Python对bytes类型的数据用带b前缀的单引号或双引号表示.
\`x = b&#39;ABC&#39;\`
要注意区分&#39;ABC&#39;和b&#39;ABC&#39;，前者是str，后者虽然内容显示得和前者一样，但bytes的每个字符都只占用一个字节。
以Unicode表示的str通过encode()方法可以编码为指定的bytes，例如：
\`\`\`python
&gt;&gt;&gt; &#39;ABC&#39;.encode(&#39;ascii&#39;)
b&#39;ABC&#39;
&gt;&gt;&gt; &#39;中文&#39;.encode(&#39;utf-8&#39;)
b&#39;\\xe4\\xb8\\xad\\xe6\\x96\\x87&#39;
&gt;&gt;&gt; &#39;中文&#39;.encode(&#39;ascii&#39;)
Traceback (most recent call last):
  File &quot;&lt;stdin&gt;&quot;, line 1, in &lt;module&gt;
UnicodeEncodeError: &#39;ascii&#39; codec can&#39;t encode characters in position 0-1: ordinal not in range(128)
\`\`\`
如果bytes中包含无法解码的字节，decode()方法会报错
如果bytes中只有一小部分无效的字节，可以传入errors=&#39;ignore&#39;忽略错误的字节
\`&gt;&gt;&gt; b&#39;\\xe4\\xb8\\xad\\xff&#39;.decode(&#39;utf-8&#39;, errors=&#39;ignore&#39;)
&#39;中&#39;\`

&gt;在字符串内部，%s表示用字符串替换，%d表示用整数替换，有几个%?占位符，后面就跟几个变量或者值，顺序要对应好。如果只有一个%?，括号可以省略。

占位符 | 替换内容
------|------
%d	|	整数
%f	|	浮点数
%s	|	字符串
%x	|	十六进制整数

另一种格式化字符串的方法是使用字符串的format()方法，它会用传入的参数依次替换字符串内的占位符{0}、{1}……
\`hi, {0}, {1}\`.format(&#39;cyq&#39;,123)
// hi, cyq, 123
</code></pre><blockquote><p>3、布尔值(True / False) <code>and、or、not</code> 运算 and 运算是与运算，只有所有都为True，and运算结果才是True or运算是或运算，只要其中有一个为True，or运算结果就是True not运算是非运算，它是一个单目运算符，把True变成False，False变成True</p></blockquote><blockquote><p>4、空值(None) None不能理解为0，因为0是有意义的，而None是一个特殊的空值</p></blockquote><h2 id="list-and-tuple" tabindex="-1"><a class="header-anchor" href="#list-and-tuple" aria-hidden="true">#</a> list and tuple</h2><p>** list **</p><p>索引从0开始,直到len(arr) - 1 , arr[-1] 将获取最后一项, -2 -3 -4 依次倒数获取</p><p>向list末尾添加元素 --&gt; append(item) 把元素添加到指定的位置 --&gt; insert(i,&#39;item&#39;) 删除末尾项 --&gt; pop() ==&gt; 返回删除项 删除指定位置的元素 --&gt; pop(i) ==&gt; 返回删除项</p><p>** 另一种有序列表叫元组：tuple。tuple和list非常类似，但是tuple一旦初始化就不能修改 **</p><p>t = (1,2,3,) 没有append() insert() pop() 等方法,其它都一样. t = (1,2,3,[2,2,3,3]) tuple 是不可以变的 但是他里面的 list 可变</p><h2 id="条件判断" tabindex="-1"><a class="header-anchor" href="#条件判断" aria-hidden="true">#</a> 条件判断</h2><p>** if ... else elif是else if的缩写.</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>if &lt;条件判断1&gt;:
    &lt;执行1&gt;
elif &lt;条件判断2&gt;:
    &lt;执行2&gt;
elif &lt;条件判断3&gt;:
    &lt;执行3&gt;
else:
    &lt;执行4&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>input()返回的数据类型是str，str不能直接和整数比较，必须先把str转换成整数。Python提供了int()函数来完成这件事情.</p><h2 id="循环" tabindex="-1"><a class="header-anchor" href="#循环" aria-hidden="true">#</a> 循环</h2><p>range()函数，可以生成一个整数序列. 例如: range(5) 生成0到小于5的整数. // 0,1,2,3,4 list()函数可以转换为list. list(range(5)) // [0,1,2,3,4]</p><ol><li>for ... in ...</li><li>while</li></ol><blockquote><p>continue break</p></blockquote><h2 id="dict" tabindex="-1"><a class="header-anchor" href="#dict" aria-hidden="true">#</a> dict</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&gt;&gt;&gt; d = {&#39;Michael&#39;: 95, &#39;Bob&#39;: 75, &#39;Tracy&#39;: 85}
&gt;&gt;&gt; d[&#39;Michael&#39;]
95

&gt;&gt;&gt; Jun in d  
False

&gt;&gt;&gt; d.get(&#39;Jun&#39;)
// dict提供的get()方法，如果key不存在，可以返回None
// 返回None的时候Python的交互环境不显示结果。


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>要删除一个key，用pop(key)方法，对应的value也会从dict中删除：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>d = {&#39;Michael&#39;: 95, &#39;Bob&#39;: 75, &#39;Tracy&#39;: 85}
d.pop(&#39;Bob&#39;)
75
&gt;&gt;&gt; d
 {&#39;Michael&#39;: 95, &#39;Tracy&#39;: 85}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>和list比较，dict有以下几个特点：</p></blockquote><p>查找和插入的速度极快，不会随着key的增加而变慢； 需要占用大量的内存，内存浪费多。</p><p>而list相反：</p><blockquote><p>查找和插入的时间随着元素的增加而增加； 占用空间小，浪费内存很少。 所以，dict是用空间来换取时间的一种方法。</p></blockquote><h2 id="set" tabindex="-1"><a class="header-anchor" href="#set" aria-hidden="true">#</a> set</h2><p>set和dict类似，也是一组key的集合，但不存储value。由于key不能重复，所以，在set中，没有重复的key。 重复元素在set中自动被过滤：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&gt;&gt;&gt; s = set([1, 1, 2, 2, 3, 3])
&gt;&gt;&gt; s
{1, 2, 3}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过add(key)方法可以添加元素到set中，可以重复添加，但不会有效果 通过remove(key)方法可以删除元素 set可以看成数学意义上的无序和无重复元素的集合，因此，两个set可以做数学意义上的交集、并集等操作: 交集 &amp; 并集 |</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&gt;&gt;&gt; s1 = set([1, 2, 3])
&gt;&gt;&gt; s2 = set([2, 3, 4])
&gt;&gt;&gt; s1 &amp; s2
{2, 3}
&gt;&gt;&gt; s1 | s2
{1, 2, 3, 4}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,33);function c(o,u){return n(),t("div",null,[l,i(" more "),r])}const g=e(s,[["render",c],["__file","python基础.html.vue"]]);export{g as default};
