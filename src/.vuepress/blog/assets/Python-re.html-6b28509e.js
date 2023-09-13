import{_ as e,V as t,W as d,Z as i,X as n,a0 as l}from"./framework-fd1dac66.js";const a={},s=n("p",null,"python-re(正则)",-1),r=l(`<p>正则表达式中常用的字符含义</p><table><thead><tr><th style="text-align:left;">字符</th><th style="text-align:left;">普通字符和11个元字符</th></tr></thead><tbody><tr><td style="text-align:left;">普通字符</td><td style="text-align:left;">匹配自身</td></tr><tr><td style="text-align:left;">.</td><td style="text-align:left;">匹配任意除换行符&quot;\\n&quot;外的字符(在DOTALL模式中也能匹配换行符</td></tr><tr><td style="text-align:left;">\\</td><td style="text-align:left;">转义字符，使后一个字符改变原来的意思</td></tr></tbody></table><ul><li>| 匹配前一个字符0或多次</li></ul><ul><li>| 匹配前一个字符1次或无限次 ? | 匹配一个字符0次或1次 ^ | 匹配字符串开头。在多行模式中匹配每一行的开头 $ | 匹配字符串末尾，在多行模式中匹配每一行的末尾 {} | {m}匹配前一个字符m次，{m,n}匹配前一个字符m至n次，若省略n，则匹配m至无限次 [] | 字符集。对应的位置可以是字符集中任意字符。字符集中的字符可以逐个列出，也可以给出范围，如[abc]或[a-c]。<code>[^abc]</code>表示取反，即非abc。 () | 被括起来的表达式将作为分组，从表达式左边开始没遇到一个分组的左括号“（”，编号+1. 所有特殊字符在字符集中都失去其原有的特殊含义。用\\反斜杠转义恢复特殊字符的特殊含义。 分组表达式作为一个整体，可以后接数量词。表达式中的|仅在该组中有效。 <code>| 或。匹配|左右表达式任意一个，从左到右匹配，如果|没有包括在()中，则它的范围是整个正则表达式</code> 这里需要强调一下反斜杠<code>\\</code>的作用：</li></ul><ul><li>反斜杠后边跟元字符去除特殊功能；（即将特殊字符转义成普通字符）</li><li>反斜杠后边跟普通字符实现特殊功能；（即预定义字符）</li><li>引用序号对应的字组所匹配的字符串。</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>a=re.search(r&#39;(tina)(fei)haha\\2&#39;,&#39;tinafeihahafei tinafeihahatina&#39;).group()
print(a)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>结果： <code>tinafeihahafei</code></p><p>2、预定义字符集（可以写在字符集[...]中）</p><table><thead><tr><th style="text-align:left;">字符</th><th style="text-align:left;">正则表达式中常用的字符含义</th></tr></thead><tbody><tr><td style="text-align:left;">\\d</td><td style="text-align:left;">数字:[0-9]</td></tr><tr><td style="text-align:left;">\\D</td><td style="text-align:left;">非数字:[^\\d]</td></tr><tr><td style="text-align:left;">\\s</td><td style="text-align:left;">匹配任何空白字符:[&lt;空格&gt;\\t\\r\\n\\f\\v]</td></tr><tr><td style="text-align:left;">\\S</td><td style="text-align:left;">非空白字符:[^\\s]</td></tr><tr><td style="text-align:left;">\\w</td><td style="text-align:left;">匹配包括下划线在内的任何字字符:[A-Za-z0-9_]</td></tr><tr><td style="text-align:left;">\\W</td><td style="text-align:left;">匹配非字母字符，即匹配特殊字符</td></tr><tr><td style="text-align:left;">\\A</td><td style="text-align:left;">仅匹配字符串开头,同^ \\Aabc</td></tr><tr><td style="text-align:left;">\\Z</td><td style="text-align:left;">仅匹配字符串结尾，</td></tr><tr><td style="text-align:left;">\\b</td><td style="text-align:left;">匹配\\w和\\W之间，即匹配单词边界匹配一个单词边界，也就是指单词和空格间的位置。例如， &#39;er\\b&#39; 可以匹配&quot;r&quot; 中的 &#39;er&#39;，但不能匹配 &quot;verb&quot; 中的 &#39;er&#39;。</td></tr><tr><td style="text-align:left;">\\B</td><td style="text-align:left;">[^\\b]</td></tr></tbody></table><p>re模块中常用功能函数</p><p>1、compile() 编译正则表达式模式，返回一个对象的模式。（可以把那些常用的正则表达式编译成正则表达式对象，这样可以提高一点效率。） 格式： <code>re.compile(pattern,flags=0)</code><code>pattern:</code> 编译时用的表达式字符串。</p><p><code>flags</code> 编译标志位，用于修改正则表达式的匹配方式，如：是否区分大小写，多行匹配等。 常用的 <code>flags</code> 有：</p><table><thead><tr><th style="text-align:left;">标志</th><th style="text-align:left;">含义</th></tr></thead><tbody><tr><td style="text-align:left;">re.S(DOTALL)</td><td style="text-align:left;">使.匹配包括换行在内的所有字符</td></tr><tr><td style="text-align:left;">re.I（IGNORECASE）</td><td style="text-align:left;">使匹配对大小写不敏感</td></tr><tr><td style="text-align:left;">re.L（LOCALE）</td><td style="text-align:left;">做本地化识别（locale-aware)匹配，法语等</td></tr><tr><td style="text-align:left;">re.M(MULTILINE)</td><td style="text-align:left;">多行匹配，影响^和$</td></tr><tr><td style="text-align:left;">re.X(VERBOSE)</td><td style="text-align:left;">该标志通过给予更灵活的格式以便将正则表达式写得更易于理解</td></tr><tr><td style="text-align:left;">re.U</td><td style="text-align:left;">根据Unicode字符集解析字符，这个标志影响\\w,\\W,\\b,\\B</td></tr></tbody></table><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import re
tt = &quot;Tina is a good girl, she is cool, clever, and so on...&quot;
rr = re.compile(r&#39;\\w*oo\\w*&#39;)
print(rr.findall(tt))   #查找所有包含&#39;oo&#39;的单词
执行结果如下：
[&#39;good&#39;, &#39;cool&#39;]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2、match()</p><p>决定RE是否在字符串刚开始的位置匹配。//注：这个方法并不是完全匹配。当pattern结束时若string还有剩余字符，仍然视为成功。想要完全匹配，可以在表达式末尾加上边界匹配符&#39;$&#39;</p><p>格式：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># re.match(pattern, string, flags=0)

print(re.match(&#39;com&#39;,&#39;comwww.runcomoob&#39;).group())
print(re.match(&#39;com&#39;,&#39;Comwww.runcomoob&#39;,re.I).group())
# 执行结果如下：
com
com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3、search() 格式： <code>re.search(pattern, string, flags=0)</code><code>re.search</code>函数会在字符串内查找模式匹配,只要找到第一个匹配然后返回，如果字符串没有匹配，则返回<code>None</code>。 <code>print(re.search(&#39;\\dcom&#39;,&#39;www.4comrunoob.5com&#39;).group())</code> 执行结果如下： <code>4com</code> *注：<code>match</code>和<code>search</code>一旦匹配成功，就是一个<code>match object</code>对象，而<code>match object</code>对象有以下方法：</p><ul><li>group() 返回被 RE 匹配的字符串</li><li>start() 返回匹配开始的位置</li><li>end() 返回匹配结束的位置</li><li>span() 返回一个元组包含匹配 (开始,结束) 的位置</li><li>group() 返回re整体匹配的字符串，可以一次输入多个组号，对应组号匹配的字符串。</li><li>a. group（）返回re整体匹配的字符串，</li><li>b. group (n,m) 返回组号为n，m所匹配的字符串，如果组号不存在，则返回indexError异常</li><li>c.groups（）groups() 方法返回一个包含正则表达式中所有小组字符串的元组，从 1 到所含的小组号，通常groups()不需要参数，返回一个元组，元组中的元就是正则表达式中定义的组。</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import re
a = &quot;123abc456&quot;
 print(re.search(&quot;([0-9]*)([a-z]*)([0-9]*)&quot;,a).group(0))   #123abc456,返回整体
 print(re.search(&quot;([0-9]*)([a-z]*)([0-9]*)&quot;,a).group(1))   #123
 print(re.search(&quot;([0-9]*)([a-z]*)([0-9]*)&quot;,a).group(2))   #abc
 print(re.search(&quot;([0-9]*)([a-z]*)([0-9]*)&quot;,a).group(3))   #456
###group(1) 列出第一个括号匹配部分，group(2) 列出第二个括号匹配部分，group(3) 列出第三个括号匹配部分。###
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>4、findall() <code>re.findall</code>遍历匹配，可以获取字符串中所有匹配的字符串，返回一个列表。 格式： <code>re.findall(pattern, string, flags=0)</code></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>p = re.compile(r&#39;\\d+&#39;)
print(p.findall(&#39;o1n2m3k4&#39;))
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>执行结果如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[&#39;1&#39;, &#39;2&#39;, &#39;3&#39;, &#39;4&#39;]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import re
tt = &quot;Tina is a good girl, she is cool, clever, and so on...&quot;
rr = re.compile(r&#39;\\w*oo\\w*&#39;)
print(rr.findall(tt))
print(re.findall(r&#39;(\\w)*oo(\\w)&#39;,tt))#()表示子表达式 
# 执行结果如下：
[&#39;good&#39;, &#39;cool&#39;]
[(&#39;g&#39;, &#39;d&#39;), (&#39;c&#39;, &#39;l&#39;)]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>5、finditer()</p><p>搜索<code>string</code>，返回一个顺序访问每一个匹配结果（Match对象）的迭代器。找到 <code>RE</code> 匹配的所有子串，并把它们作为一个迭代器返回。 格式： <code>re.finditer(pattern, string, flags=0)</code></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>iter = re.finditer(r&#39;\\d+&#39;,&#39;12 drumm44ers drumming, 11 ... 10 ...&#39;)
for i in iter:
    print(i)
    print(i.group())
    print(i.span())
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行结果如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;_sre.SRE_Match object; span=(0, 2), match=&#39;12&#39;&gt;
12
(0, 2)
&lt;_sre.SRE_Match object; span=(8, 10), match=&#39;44&#39;&gt;
44
(8, 10)
&lt;_sre.SRE_Match object; span=(24, 26), match=&#39;11&#39;&gt;
11
(24, 26)
&lt;_sre.SRE_Match object; span=(31, 33), match=&#39;10&#39;&gt;
10
(31, 33)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>6、split()</p><p>按照能够匹配的子串将<code>string</code>分割后返回列表。 可以使用<code>re.split</code>来分割字符串，如：<code>re.split(r&#39;\\s+&#39;, text)</code>；将字符串按空格分割成一个单词列表。 格式： <code>re.split(pattern, string[, maxsplit])</code><code>maxsplit</code>用于指定最大分割次数，不指定将全部分割。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>print(re.split(&#39;\\d+&#39;,&#39;one1two2three3four4five5&#39;))
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>执行结果如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[&#39;one&#39;, &#39;two&#39;, &#39;three&#39;, &#39;four&#39;, &#39;five&#39;, &#39;&#39;]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>7、sub() 使用<code>re</code>替换<code>string</code>中每一个匹配的子串后返回替换后的字符串。 格式：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>re.sub(pattern, repl, string, count)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import re
text = &quot;JGood is a handsome boy, he is cool, clever, and so on...&quot;
print(re.sub(r&#39;\\s+&#39;, &#39;-&#39;, text))
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行结果如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>JGood-is-a-handsome-boy,-he-is-cool,-clever,-and-so-on...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>其中第二个函数是替换后的字符串；本例中为<code>&#39;-&#39;</code> 第四个参数指替换个数。默认为0，表示每个匹配项都替换。 <code>re.sub</code>还允许使用函数对匹配项的替换进行复杂的处理。 如：<code>re.sub(r&#39;\\s&#39;, lambda m: &#39;[&#39; + m.group(0) + &#39;]&#39;, text, 0)</code>；将字符串中的空格<code>&#39; &#39;</code>替换为<code>&#39;[ ]&#39;</code>。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import re
text = &quot;JGood is a handsome boy, he is cool, clever, and so on...&quot;
print(re.sub(r&#39;\\s+&#39;, lambda m:&#39;[&#39;+m.group(0)+&#39;]&#39;, text,0))
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行结果如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>JGood[ ]is[ ]a[ ]handsome[ ]boy,[ ]he[ ]is[ ]cool,[ ]clever,[ ]and[ ]so[ ]on...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>8、 ** subn() ** 返回替换次数 格式：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>subn(pattern, repl, string, count=0, flags=0)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>print(re.subn(&#39;[1-2]&#39;,&#39;A&#39;,&#39;123456abcdef&#39;))
print(re.sub(&quot;g.t&quot;,&quot;have&quot;,&#39;I get A,  I got B ,I gut C&#39;))
print(re.subn(&quot;g.t&quot;,&quot;have&quot;,&#39;I get A,  I got B ,I gut C&#39;))
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行结果如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>(&#39;AA3456abcdef&#39;, 2)
I have A,  I have B ,I have C
(&#39;I have A,  I have B ,I have C&#39;, 3)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>** 一些注意点 ** 1、<code>re.match</code>与<code>re.search</code>与<code>re.findall</code>的区别：</p><p><code>re.match</code>只匹配字符串的开始，如果字符串开始不符合正则表达式，则匹配失败，函数返回<code>None</code>；而<code>re.search</code>匹配整个字符串，直到找到一个匹配。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>a=re.search(&#39;[\\d]&#39;,&quot;abc33&quot;).group()
print(a)
p=re.match(&#39;[\\d]&#39;,&quot;abc33&quot;)
print(p)
b=re.findall(&#39;[\\d]&#39;,&quot;abc33&quot;)
print(b)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行结果：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>3
None
[&#39;3&#39;, &#39;3&#39;]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2、贪婪匹配与非贪婪匹配</p><p><code>*?,+?,??,{m,n}? </code> 前面的<code>*,+,?</code>等都是贪婪匹配，也就是尽可能匹配，后面加<code>?</code>号使其变成惰性匹配</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>a = re.findall(r&quot;a(\\d+?)&quot;,&#39;a23b&#39;)
print(a)
b = re.findall(r&quot;a(\\d+)&quot;,&#39;a23b&#39;)
print(b)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行结果：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[&#39;2&#39;]
[&#39;23&#39;]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>a = re.match(&#39;&lt;(.*)&gt;&#39;,&#39;&lt;H1&gt;title&lt;H1&gt;&#39;).group()
print(a)
b = re.match(&#39;&lt;(.*?)&gt;&#39;,&#39;&lt;H1&gt;title&lt;H1&gt;&#39;).group()
print(b)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行结果：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;H1&gt;title&lt;H1&gt;
&lt;H1&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>a = re.findall(r&quot;a(\\d+)b&quot;,&#39;a3333b&#39;)
print(a)
b = re.findall(r&quot;a(\\d+?)b&quot;,&#39;a3333b&#39;)
print(b)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行结果如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[&#39;3333&#39;]
[&#39;3333&#39;]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><hr><p>这里需要注意的是如果前后均有限定条件的时候，就不存在什么贪婪模式了，非匹配模式失效。 复制代码 3、用<code>flags</code>时遇到的小坑</p><p><code>print(re.split(&#39;a&#39;,&#39;1A1a2A3&#39;,re.I))</code>#输出结果并未能区分大小写 这是因为<code>re.split(pattern，string，maxsplit,flags)</code>默认是四个参数，当我们传入的三个参数的时候，系统会默认re.I是第三个参数，所以就没起作用。如果想让这里的<code>re.I</code>起作用，写成<code>flags=re.I</code>即可。 ** 正则的小实践 ** 1、匹配电话号码</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>p = re.compile(r&#39;\\d{3}-\\d{6}&#39;)
print(p.findall(&#39;010-628888&#39;))
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>2、匹配IP</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>re.search(r&quot;(([01]?\\d?\\d|2[0-4]\\d|25[0-5])\\.){3}([01]?\\d?\\d|2[0-4]\\d|25[0-5]\\.)&quot;,&quot;192.168.1.1&quot;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,72);function c(o,u){return t(),d("div",null,[s,i(" more "),r])}const m=e(a,[["render",c],["__file","Python-re.html.vue"]]);export{m as default};
