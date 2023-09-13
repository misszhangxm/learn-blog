import{_ as t,V as e,W as n,Z as s,X as l,a0 as i}from"./framework-fd1dac66.js";const a={},d=l("p",null,"为了能方便记忆，想看就看。这里记录一下Python3.x的字符串方法。",-1),r=i(`<h3 id="增" tabindex="-1"><a class="header-anchor" href="#增" aria-hidden="true">#</a> 增：</h3><table><thead><tr><th style="text-align:center;">序号</th><th style="text-align:left;">方法</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:center;">1</td><td style="text-align:left;">string.zfill()</td><td style="text-align:left;">方法返回指定长度的字符串，原字符串右对齐，前面填充0。</td></tr><tr><td style="text-align:center;">2</td><td style="text-align:left;">string.join()</td><td style="text-align:left;">方法用于将序列中的元素以指定的字符连接生成一个新的字符串。</td></tr><tr><td style="text-align:center;">3</td><td style="text-align:left;">string.ljust()</td><td style="text-align:left;">方法返回一个原字符串左对齐,并使用空格填充至指定长度的新字符串。如果指定的长度小于原字符串的长度则返回原字符串。</td></tr><tr><td style="text-align:center;">4</td><td style="text-align:left;">string.center(51, &#39;*&#39;)</td><td style="text-align:left;">返回一个指定的宽度 width 居中的字符串，fillchar 为填充的字符，默认为空格。</td></tr><tr><td style="text-align:center;">5</td><td style="text-align:left;">string.rjust(width,[, fillchar])</td><td style="text-align:left;">返回一个原字符串右对齐,并使用fillchar(默认空格）填充至长度 width 的新字符串</td></tr></tbody></table><h3 id="删" tabindex="-1"><a class="header-anchor" href="#删" aria-hidden="true">#</a> 删：</h3><table><thead><tr><th style="text-align:center;">序号</th><th style="text-align:left;">方法</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:center;">1</td><td style="text-align:left;">string.strip()</td><td style="text-align:left;">方法用于移除字符串头尾指定的字符（默认为空格）或字符序列。注意：该方法只能删除开头或是结尾的字符，不能删除中间部分的字符。</td></tr><tr><td style="text-align:center;">2</td><td style="text-align:left;">string.rstrip()</td><td style="text-align:left;">删除 string 字符串末尾的指定字符（默认为空格）</td></tr><tr><td style="text-align:center;">3</td><td style="text-align:left;">string.lstrip()</td><td style="text-align:left;">方法用于截掉字符串左边的空格或指定字符。</td></tr></tbody></table><h3 id="改" tabindex="-1"><a class="header-anchor" href="#改" aria-hidden="true">#</a> 改：</h3><table><thead><tr><th style="text-align:center;">序号</th><th style="text-align:left;">方法</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:center;">1</td><td style="text-align:left;">string.swapcase()</td><td style="text-align:left;">方法用于对字符串的大小写字母进行转换。返回大小写字母转换后生成的新字符串。</td></tr><tr><td style="text-align:center;">2</td><td style="text-align:left;">string.upper()</td><td style="text-align:left;">转换字符串中的小写字母为大写</td></tr><tr><td style="text-align:center;">3</td><td style="text-align:left;">string.lower()</td><td style="text-align:left;">方法转换字符串中所有大写字符为小写。</td></tr><tr><td style="text-align:center;">4</td><td style="text-align:left;">string.capitalize()</td><td style="text-align:left;">字符串的首字母变大写</td></tr><tr><td style="text-align:center;">5</td><td style="text-align:left;">string.title()</td><td style="text-align:left;">返回&quot;标题化&quot;的字符串,就是说所有单词的首个字母转化为大写，其余字母均为小写</td></tr><tr><td style="text-align:center;">6</td><td style="text-align:left;">string.replace(old, new[, max])</td><td style="text-align:left;">把字符串中的 old（旧字符串） 替换成 new(新字符串)如果指定第三个参数max，则替换不超过max次</td></tr><tr><td style="text-align:center;">7</td><td style="text-align:left;">str.split(str=&quot;&quot;, num=string.count(str))</td><td style="text-align:left;">通过指定分隔符对字符串进行切片，如果参数num 有指定值，则仅分隔 num 个子字符串</td></tr><tr><td style="text-align:center;">8</td><td style="text-align:left;">string.expandtabs(16)</td><td style="text-align:left;">把字符串 string 中的 tab 符号转为空格，tab 符号默认的空格数是 8 。</td></tr><tr><td style="text-align:center;">9</td><td style="text-align:left;">str.maketrans()</td><td style="text-align:left;">intab = &quot;aeiou&quot; <br> outtab = &quot;12345&quot;<br> trantab = str.maketrans(intab, outtab)<br> 指定替换 a=&gt;1, e=&gt;2, i=&gt;3, o=&gt;4, u=&gt;5<br> str = &quot;this is string example....wow!!!&quot;<br> str.translate(trantab)<br> translate 开始替换str里面的 a, e, i, o, u 为 1,2,3,4,5</td></tr><tr><td style="text-align:center;">10</td><td style="text-align:left;">translate()</td><td style="text-align:left;"><br>方法根据参数table给出的表(包含 256 个字符)转换字符串的字符,<br>要过滤掉的字符放到 deletechars 参数中。<br>translate()方法语法：<br>str.translate(table)<br>bytes.translate(table[, delete]) <br>bytearray.translate(table[, delete]) <br><br>table -- 翻译表，翻译表是通过 maketrans() 方法转换而来。<br>deletechars -- 字符串中要过滤的字符列表。</td></tr><tr><td style="text-align:center;">11</td><td style="text-align:left;">splitlines()</td><td style="text-align:left;"><br>按照行(&#39;\\r&#39;, &#39;\\r\\n&#39;, \\n&#39;)分隔，返回一个包含各行作为元素的列表，<br>如果参数 keepends 为 False，不包含换行符，如果为 True，则保留换行符。<br>str.splitlines([keepends])<br>keepends -- 在输出结果里是否去掉换行符(&#39;\\r&#39;, &#39;\\r\\n&#39;, \\n&#39;)，默认为 False，<br>不包含换行符，如果为 True，则保留换行符。</td></tr></tbody></table><h3 id="查" tabindex="-1"><a class="header-anchor" href="#查" aria-hidden="true">#</a> 查：</h3><table><thead><tr><th style="text-align:center;">序号</th><th style="text-align:left;">方法</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:center;">1</td><td style="text-align:left;">string.isdecimal()</td><td style="text-align:left;">检查字符串是否只包含十进制字符，如果是返回 true，否则返回 false。</td></tr><tr><td style="text-align:center;">2</td><td style="text-align:left;">string.find(&#39;k&#39;, 0, 7)</td><td style="text-align:left;">检测 str 是否包含在字符串中，<br>如果指定范围 beg 和 end ，则检查是否包含在指定范围内，<br>如果包含返回开始的索引值，否则返回-1</td></tr><tr><td style="text-align:center;">3</td><td style="text-align:left;">index(str, beg=0, end=len(string)</td><td style="text-align:left;">跟find()方法一样，只不过如果str不在字符串中会报一个异常.</td></tr><tr><td style="text-align:center;">4</td><td style="text-align:left;">string.rfind(str, beg=0,end=len(string))</td><td style="text-align:left;">类似于 find()函数，不过是从右边开始查找.</td></tr><tr><td style="text-align:center;">5</td><td style="text-align:left;">string.rindex( str, beg=0, end=len(string)</td><td style="text-align:left;">类似于 index()，不过是从右边开始.</td></tr><tr><td style="text-align:center;">6</td><td style="text-align:left;">string.isupper()</td><td style="text-align:left;">检测字符串中所有的字母是否都为大写。</td></tr><tr><td style="text-align:center;">7</td><td style="text-align:left;">string.islower()</td><td style="text-align:left;">如果都是小写返回True 否则返回False</td></tr><tr><td style="text-align:center;">8</td><td style="text-align:left;">string.istitle()</td><td style="text-align:left;">方法检测字符串中所有的单词拼写首字母是否为大写，且其他字母为小写。</td></tr><tr><td style="text-align:center;">9</td><td style="text-align:left;">max(string)</td><td style="text-align:left;">返回字符串 str 中最大的字母。</td></tr><tr><td style="text-align:center;">10</td><td style="text-align:left;">min(string)</td><td style="text-align:left;">返回字符串 str 中最小的字母。</td></tr><tr><td style="text-align:center;">11</td><td style="text-align:left;">string.isnumeric()</td><td style="text-align:left;">检测字符串是否只由数字组成。这种方法是只针对unicode对象。<br>如果字符串中只包含数字字符，则返回 True，否则返回 False。</td></tr><tr><td style="text-align:center;">12</td><td style="text-align:left;">string.isalnum()</td><td style="text-align:left;">如果字符串至少有一个字符并且所有字符都是字母或数字则返 回 True,否则返回 False<br>注：必须是全字母或者全数字，不能有空格等。</td></tr><tr><td style="text-align:center;">13</td><td style="text-align:left;">string.isalpha()</td><td style="text-align:left;">如果字符串至少有一个字符并且所有字符都是字母则返回 True, 否则返回 False</td></tr><tr><td style="text-align:center;">14</td><td style="text-align:left;">string.isdigit()</td><td style="text-align:left;">如果字符串只包含数字则返回 True 否则返回 False.<br>注：必须是全数字，不能有空格等。</td></tr><tr><td style="text-align:center;">15</td><td style="text-align:left;">string.isspace()</td><td style="text-align:left;">如果字符串中只包含空白，则返回 True，否则返回 False.</td></tr><tr><td style="text-align:center;">16</td><td style="text-align:left;">string.count(&#39;l&#39;, 0, 3)</td><td style="text-align:left;">用于统计字符串里某个字符出现的次数。可选参数为在字符串搜索的开始与结束位置。</td></tr><tr><td style="text-align:center;">17</td><td style="text-align:left;">string.endswith(&#39;l&#39;, 0, 3)</td><td style="text-align:left;">检查字符串是否以 obj 结束，<br>如果设置第二个和第三个参数，则判断在指定的范围内是否以 obj 结束<br>如果是，返回 True,否则返回 False.</td></tr><tr><td style="text-align:center;">18</td><td style="text-align:left;">string.startswith()</td><td style="text-align:left;">方法用于检查字符串是否是以指定子字符串开头，<br>如果是则返回 True，否则返回 False。<br>如果参数 beg 和 end 指定值，则在指定范围内检查。</td></tr><tr><td style="text-align:center;">19</td><td style="text-align:left;">len(string)</td><td style="text-align:left;">方法返回对象（字符、列表、元组等）长度或项目个数。</td></tr></tbody></table><h3 id="字符串的格式化" tabindex="-1"><a class="header-anchor" href="#字符串的格式化" aria-hidden="true">#</a> 字符串的格式化</h3><p><strong>Python之%s%d%f</strong></p><p>%s 字符串</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>string<span class="token operator">=</span><span class="token string">&quot;hello&quot;</span>  
  
<span class="token comment">#%s打印时结果是hello  </span>
<span class="token keyword">print</span> <span class="token string">&quot;string=%s&quot;</span> <span class="token operator">%</span> string      <span class="token comment"># output: string=hello  </span>
  
<span class="token comment">#%2s意思是字符串长度为2，当原字符串的长度超过2时，按原长度打印，所以%2s的打印结果还是hello  </span>
<span class="token keyword">print</span> <span class="token string">&quot;string=%2s&quot;</span> <span class="token operator">%</span> string     <span class="token comment"># output: string=hello  </span>
  
<span class="token comment">#%7s意思是字符串长度为7，当原字符串的长度小于7时，在原字符串左侧补空格，  </span>
<span class="token comment">#所以%7s的打印结果是  hello  </span>
<span class="token keyword">print</span> <span class="token string">&quot;string=%7s&quot;</span> <span class="token operator">%</span> string     <span class="token comment"># output: string=  hello  </span>
  
<span class="token comment">#%-7s意思是字符串长度为7，当原字符串的长度小于7时，在原字符串右侧补空格，  </span>
<span class="token comment">#所以%-7s的打印结果是  hello  </span>
<span class="token keyword">print</span> <span class="token string">&quot;string=%-7s!&quot;</span> <span class="token operator">%</span> string     <span class="token comment"># output: string=hello  !  </span>
  
<span class="token comment">#%.2s意思是截取字符串的前2个字符，所以%.2s的打印结果是he  </span>
<span class="token keyword">print</span> <span class="token string">&quot;string=%.2s&quot;</span> <span class="token operator">%</span> string    <span class="token comment"># output: string=he  </span>
  
<span class="token comment">#%.7s意思是截取字符串的前7个字符，当原字符串长度小于7时，即是字符串本身，  </span>
<span class="token comment">#所以%.7s的打印结果是hello  </span>
<span class="token keyword">print</span> <span class="token string">&quot;string=%.7s&quot;</span> <span class="token operator">%</span> string    <span class="token comment"># output: string=hello  </span>
  
<span class="token comment">#%a.bs这种格式是上面两种格式的综合，首先根据小数点后面的数b截取字符串，  </span>
<span class="token comment">#当截取的字符串长度小于a时，还需要在其左侧补空格  </span>
<span class="token keyword">print</span> <span class="token string">&quot;string=%7.2s&quot;</span> <span class="token operator">%</span> string   <span class="token comment"># output: string=     he  </span>
<span class="token keyword">print</span> <span class="token string">&quot;string=%2.7s&quot;</span> <span class="token operator">%</span> string   <span class="token comment"># output: string=hello  </span>
<span class="token keyword">print</span> <span class="token string">&quot;string=%10.7s&quot;</span> <span class="token operator">%</span> string  <span class="token comment"># output: string=     hello  </span>
  
<span class="token comment">#还可以用%*.*s来表示精度，两个*的值分别在后面小括号的前两位数值指定  </span>
<span class="token keyword">print</span> <span class="token string">&quot;string=%*.*s&quot;</span> <span class="token operator">%</span> <span class="token punctuation">(</span><span class="token number">7</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span>string<span class="token punctuation">)</span>      <span class="token comment"># output: string=     he  </span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>%d 整型</p><div class="language-python3.6 line-numbers-mode" data-ext="python3.6"><pre class="language-python3.6"><code>num=14  
  
#%d打印时结果是14  
print &quot;num=%d&quot; % num            # output: num=14  
  
#%1d意思是打印结果为1位整数，当整数的位数超过1位时，按整数原值打印，所以%1d的打印结果还是14  
print &quot;num=%1d&quot; % num           # output: num=14  
  
#%3d意思是打印结果为3位整数，当整数的位数不够3位时，在整数左侧补空格，所以%3d的打印结果是 14  
print &quot;num=%3d&quot; % num           # output: num= 14  
  
#%-3d意思是打印结果为3位整数，当整数的位数不够3位时，在整数右侧补空格，所以%3d的打印结果是14_  
print &quot;num=%-3d&quot; % num          # output: num=14_  
  
#%05d意思是打印结果为5位整数，当整数的位数不够5位时，在整数左侧补0，所以%05d的打印结果是00014  
print &quot;num=%05d&quot; % num          # output: num=00014  
  
#%.3d小数点后面的3意思是打印结果为3位整数，  
#当整数的位数不够3位时，在整数左侧补0，所以%.3d的打印结果是014  
print &quot;num=%.3d&quot; % num          # output: num=014  
  
#%.0003d小数点后面的0003和3一样，都表示3，意思是打印结果为3位整数，  
#当整数的位数不够3位时，在整数左侧补0，所以%.3d的打印结果还是014  
print &quot;num=%.0003d&quot; % num       # output: num=014  
  
#%5.3d是两种补齐方式的综合，当整数的位数不够3时，先在左侧补0，还是不够5位时，再在左侧补空格，  
#规则就是补0优先，最终的长度选数值较大的那个，所以%5.3d的打印结果还是  014  
print &quot;num=%5.3d&quot; % num         # output: num=  014  
  
#%05.3d是两种补齐方式的综合，当整数的位数不够3时，先在左侧补0，还是不够5位时，  
#由于是05，再在左侧补0，最终的长度选数值较大的那个，所以%05.3d的打印结果还是00014  
print &quot;num=%05.3d&quot; % num        # output: num=00014  
  
#还可以用%*.*d来表示精度，两个*的值分别在后面小括号的前两位数值指定  
#如下，不过这种方式04就失去补0的功能，只能补空格，只有小数点后面的3才能补0  
print &quot;num=%*.*d&quot; % (04,3,num)  # output: num= 014  

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>%f 浮点型</p><div class="language-python3.6 line-numbers-mode" data-ext="python3.6"><pre class="language-python3.6"><code>import math  
  
#%a.bf，a表示浮点数的打印长度，b表示浮点数小数点后面的精度  
  
#只是%f时表示原值，默认是小数点后5位数  
print &quot;PI=%f&quot; % math.pi             # output: PI=3.141593  
  
#只是%9f时，表示打印长度9位数，小数点也占一位，不够左侧补空格  
print &quot;PI=%9f&quot; % math.pi            # output: PI=_3.141593  
  
#只有.没有后面的数字时，表示去掉小数输出整数，03表示不够3位数左侧补0  
print &quot;PI=%03.f&quot; % math.pi          # output: PI=003  
  
#%6.3f表示小数点后面精确到3位，总长度6位数，包括小数点，不够左侧补空格  
print &quot;PI=%6.3f&quot; % math.pi          # output: PI=_3.142  
  
#%-6.3f表示小数点后面精确到3位，总长度6位数，包括小数点，不够右侧补空格  
print &quot;PI=%-6.3f&quot; % math.pi         # output: PI=3.142_  
  
#还可以用%*.*f来表示精度，两个*的值分别在后面小括号的前两位数值指定  
#如下，不过这种方式06就失去补0的功能，只能补空格  
print &quot;PI=%*.*f&quot; % (06,3,math.pi)   # output: PI=_3.142  

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,16);function u(o,c){return e(),n("div",null,[d,s(" more "),r])}const g=t(a,[["render",u],["__file","Python-字符串方法.html.vue"]]);export{g as default};
