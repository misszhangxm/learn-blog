import{_ as n,V as s,W as a,Z as t,X as p,a0 as e}from"./framework-fd1dac66.js";const o={},c=p("p",null,"python-time",-1),l=e(`<p>当前时间：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>localtime <span class="token operator">=</span> time<span class="token punctuation">.</span>localtime<span class="token punctuation">(</span>time<span class="token punctuation">.</span>time<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;本地时间为 :&quot;</span><span class="token punctuation">,</span> localtime<span class="token punctuation">)</span>
<span class="token comment"># 输出</span>
<span class="token comment"># 本地时间为 : time.struct_time(tm_year=2016, tm_mon=4, tm_mday=7, tm_hour=10, tm_min=3, tm_sec=27, tm_wday=3, tm_yday=98, tm_isdst=0)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>time.localtime()</code> 不传入参数(时间戳)时， 默认当前时间。 传入指定时间戳时为指定时间。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> datetime <span class="token keyword">import</span> datetime<span class="token punctuation">,</span>date<span class="token punctuation">,</span>timedelta<span class="token punctuation">,</span>time
today <span class="token operator">=</span> date<span class="token punctuation">.</span>today<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>today<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>date<span class="token punctuation">.</span>fromtimestamp<span class="token punctuation">(</span><span class="token number">1457877369.650549</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment"># 将时间戳的日期输出	</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>date<span class="token punctuation">.</span>fromordinal<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment"># 将天数+最小日期 转换成日期输出    0001-01-01</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>date<span class="token punctuation">.</span><span class="token builtin">min</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">#0001-01-01</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>date<span class="token punctuation">.</span><span class="token builtin">max</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">#9999-12-31</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>date<span class="token punctuation">.</span>resolution<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">#1 day, 0:00:00</span>
 
d <span class="token operator">=</span> date<span class="token punctuation">(</span><span class="token number">2017</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
d1 <span class="token operator">=</span> d<span class="token punctuation">.</span>replace<span class="token punctuation">(</span>year<span class="token operator">=</span><span class="token number">2016</span><span class="token punctuation">,</span>day<span class="token operator">=</span><span class="token number">26</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>d<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment"># d的值不变，</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>d1<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">#2016-01-26</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>d<span class="token punctuation">.</span>toordinal<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">#该日期距离最小日期的天数  </span>
<span class="token keyword">print</span><span class="token punctuation">(</span>d<span class="token punctuation">.</span>weekday<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">#返回当前日期是所在周的第几天  0 表示周一 6 表示周日</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>d<span class="token punctuation">.</span>isoweekday<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">#返回当前日期是所在周的第几天  1 表示周一 7 表示周日</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>d<span class="token punctuation">.</span>isocalendar<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">#返回格式如(year，这一年中的第几周，周几)的元组  </span>
<span class="token keyword">print</span><span class="token punctuation">(</span>d<span class="token punctuation">.</span>isocalendar<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">#返回该日期是这一年中的第几周</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>d<span class="token punctuation">.</span>isocalendar<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">#返回该日期是周几</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>d<span class="token punctuation">.</span>isoformat<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">#返回 ISO 8601格式  YYYY-MM-DD</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>d<span class="token punctuation">.</span>strftime<span class="token punctuation">(</span><span class="token string">&quot;%d/%m/%y&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">#格式化日期为指定格式</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>d<span class="token punctuation">.</span>__format__<span class="token punctuation">(</span><span class="token string">&quot;%d/%m/%y&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">#格式化日期为指定格式</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><p>格式化日期 使用 <code>time</code> 模块的 <code>strftime</code> 方法来格式化日期:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>time<span class="token punctuation">.</span>strftime<span class="token punctuation">(</span><span class="token builtin">format</span><span class="token punctuation">[</span><span class="token punctuation">,</span> t<span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>实例：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 格式化成2016-03-20 11:45:39形式</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span>strftime<span class="token punctuation">(</span><span class="token string">&quot;%Y-%m-%d %H:%M:%S&quot;</span><span class="token punctuation">,</span> time<span class="token punctuation">.</span>localtime<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">)</span>

<span class="token keyword">print</span><span class="token punctuation">(</span>datetime<span class="token punctuation">.</span>datetime<span class="token punctuation">.</span>now<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>strftime<span class="token punctuation">(</span><span class="token string">&quot;%Y-%m-%d %H:%M:%S&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
 
<span class="token comment"># 格式化成Sat Mar 28 22:24:24 2016形式</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span>strftime<span class="token punctuation">(</span><span class="token string">&quot;%a %b %d %H:%M:%S %Y&quot;</span><span class="token punctuation">,</span> time<span class="token punctuation">.</span>localtime<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">)</span>
  
<span class="token comment"># 将格式字符串转换为时间戳</span>
a <span class="token operator">=</span> <span class="token string">&quot;Sat Mar 28 22:24:24 2016&quot;</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span>mktime<span class="token punctuation">(</span>time<span class="token punctuation">.</span>strptime<span class="token punctuation">(</span>a<span class="token punctuation">,</span><span class="token string">&quot;%a %b %d %H:%M:%S %Y&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table><thead><tr><th style="text-align:left;">python中时间日期格式化符号：</th><th style="text-align:left;">----</th></tr></thead><tbody><tr><td style="text-align:left;"><code>%y</code> 两位数的年份表示（00-99）</td><td style="text-align:left;"><code>%B</code> 本地完整的月份名称</td></tr><tr><td style="text-align:left;"><code>%Y</code> 四位数的年份表示（000-9999）</td><td style="text-align:left;"><code>%c</code> 本地相应的日期表示和时间表示</td></tr><tr><td style="text-align:left;"><code>%m</code> 月份（01-12）</td><td style="text-align:left;"><code>%j</code> 年内的一天（001-366）</td></tr><tr><td style="text-align:left;"><code>%d</code> 月内中的一天（0-31）</td><td style="text-align:left;"><code>%p</code> 本地A.M.或P.M.的等价符</td></tr><tr><td style="text-align:left;"><code>%H</code> 24小时制小时数（0-23）</td><td style="text-align:left;"><code>%U</code> 一年中的星期数（00-53）星期天为星期的开始</td></tr><tr><td style="text-align:left;"><code>%I</code> 12小时制小时数（01-12）</td><td style="text-align:left;"><code>%w</code> 星期（0-6），星期天为星期的开始</td></tr><tr><td style="text-align:left;"><code>%M</code> 分钟数（00=59）</td><td style="text-align:left;"><code>%W</code> 一年中的星期数（00-53）星期一为星期的开始</td></tr><tr><td style="text-align:left;"><code>%S</code> 秒（00-59）</td><td style="text-align:left;"><code>%x</code> 本地相应的日期表示</td></tr><tr><td style="text-align:left;"><code>%a</code> 本地简化星期名称</td><td style="text-align:left;"><code>%X</code> 本地相应的时间表示</td></tr><tr><td style="text-align:left;"><code>%A</code> 本地完整星期名称</td><td style="text-align:left;"><code>%Z</code> 当前时区的名称</td></tr><tr><td style="text-align:left;"><code>%b</code> 本地简化的月份名称</td><td style="text-align:left;"><code>%%</code> %号本身</td></tr></tbody></table>`,10);function i(u,d){return s(),a("div",null,[c,t(" more "),l])}const r=n(o,[["render",i],["__file","Python-time.html.vue"]]);export{r as default};