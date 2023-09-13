import{_ as n,V as s,W as a,Z as e,X as t,a0 as i}from"./framework-fd1dac66.js";const l={},c=t("p",null,"python-random(随机数)",-1),p=i(`<div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>random<span class="token punctuation">.</span>seed<span class="token punctuation">(</span>a<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">,</span> version<span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">)</span>  
<span class="token comment"># 初始化伪随机数生成器。如果未提供a或者a=None，则使用系统时间为种子。如果a是一个整数，则作为种子。</span>

random<span class="token punctuation">.</span>getstate<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment"># 返回一个当前生成器的内部状态的对象</span>

random<span class="token punctuation">.</span>setstate<span class="token punctuation">(</span>state<span class="token punctuation">)</span>
<span class="token comment"># 传入一个先前利用getstate方法获得的状态对象，使得生成器恢复到这个状态。</span>

random<span class="token punctuation">.</span>getrandbits<span class="token punctuation">(</span>k<span class="token punctuation">)</span>
<span class="token comment"># 返回range(0,2**k)之间的一个整数，相当于randrange(0,2**k)</span>

random<span class="token punctuation">.</span>randrange<span class="token punctuation">(</span>stop<span class="token punctuation">)</span>
<span class="token comment"># 返回range(0,stop)之间的一个整数</span>

random<span class="token punctuation">.</span>randrange<span class="token punctuation">(</span>start<span class="token punctuation">,</span> stop<span class="token punctuation">[</span><span class="token punctuation">,</span> step<span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token comment"># 返回range[start,stop)之间的一个整数，可加step，跟range(0,10,2)类似</span>

random<span class="token punctuation">.</span>randint<span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span>
<span class="token comment"># 返回range[a,b]之间的一个整数，等价于然的range(a,b+1)</span>

random<span class="token punctuation">.</span>choice<span class="token punctuation">(</span>seq<span class="token punctuation">)</span>
<span class="token comment"># 从非空序列seq中随机选取一个元素。如果seq为空则弹出 IndexError异常。</span>

random<span class="token punctuation">.</span>choices<span class="token punctuation">(</span>population<span class="token punctuation">,</span> weights<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">,</span> <span class="token operator">*</span><span class="token punctuation">,</span> cum_weights<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">,</span> k<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">)</span>
<span class="token comment"># 3.6版本新增。从population集群中随机抽取K个元素（可重复）。</span>
<span class="token comment"># weights是相对权重列表，cum_weights是累计权重，两个参数不能同时存在。</span>

random<span class="token punctuation">.</span>shuffle<span class="token punctuation">(</span>x<span class="token punctuation">[</span><span class="token punctuation">,</span> random<span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token comment"># 随机打乱序列x内元素的排列顺序。只能针对可变的序列，对于不可变序列，请使用下面的sample()方法。</span>

random<span class="token punctuation">.</span>sample<span class="token punctuation">(</span>population<span class="token punctuation">,</span> k<span class="token punctuation">)</span>
<span class="token comment"># 从population样本或集合中随机抽取K个不重复的元素形成新的序列。</span>
<span class="token comment"># 常用于不重复的随机抽样。返回的是一个新的序列，不会破坏原有序列。</span>
<span class="token comment"># 要从一个整数区间随机抽取一定数量的整数，请使用sample(range(10000000), k=60)类似的方法，</span>
<span class="token comment"># 这非常有效和节省空间。如果k大于population的长度，则弹出ValueError异常。</span>

random<span class="token punctuation">.</span>random<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment"># 返回一个介于左闭右开[0.0, 1.0)区间的浮点数</span>

random<span class="token punctuation">.</span>uniform<span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span>
<span class="token comment"># 返回一个介于a和b之间的浮点数。如果a&gt;b，则是b到a之间的浮点数。这里的a和b都有可能出现在结果中。</span>

random<span class="token punctuation">.</span>triangular<span class="token punctuation">(</span>low<span class="token punctuation">,</span> high<span class="token punctuation">,</span> mode<span class="token punctuation">)</span>
<span class="token comment"># 返回一个low &lt;= N &lt;=high的三角形分布的随机数。参数mode指明众数出现位置。</span>

random<span class="token punctuation">.</span>betavariate<span class="token punctuation">(</span>alpha<span class="token punctuation">,</span> beta<span class="token punctuation">)</span>
<span class="token comment"># β分布。返回的结果在0~1之间</span>

random<span class="token punctuation">.</span>expovariate<span class="token punctuation">(</span>lambd<span class="token punctuation">)</span>
<span class="token comment"># 指数分布</span>

random<span class="token punctuation">.</span>gammavariate<span class="token punctuation">(</span>alpha<span class="token punctuation">,</span> beta<span class="token punctuation">)</span>
<span class="token comment"># 伽玛分布</span>

random<span class="token punctuation">.</span>gauss<span class="token punctuation">(</span>mu<span class="token punctuation">,</span> sigma<span class="token punctuation">)</span>
<span class="token comment"># 高斯分布</span>

random<span class="token punctuation">.</span>lognormvariate<span class="token punctuation">(</span>mu<span class="token punctuation">,</span> sigma<span class="token punctuation">)</span>
<span class="token comment"># 对数正态分布</span>

random<span class="token punctuation">.</span>normalvariate<span class="token punctuation">(</span>mu<span class="token punctuation">,</span> sigma<span class="token punctuation">)</span>
<span class="token comment"># 正态分布</span>

random<span class="token punctuation">.</span>vonmisesvariate<span class="token punctuation">(</span>mu<span class="token punctuation">,</span> kappa<span class="token punctuation">)</span>
<span class="token comment"># 卡帕分布</span>

random<span class="token punctuation">.</span>paretovariate<span class="token punctuation">(</span>alpha<span class="token punctuation">)</span>
<span class="token comment"># 帕累托分布</span>

random<span class="token punctuation">.</span>weibullvariate<span class="token punctuation">(</span>alpha<span class="token punctuation">,</span> beta<span class="token punctuation">)</span>
<span class="token comment"># 威布尔分布</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>实例：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> &gt;&gt;&gt; random()                             # 随机浮点数:  0.0 &lt;= x &lt; 1.0
0.37444887175646646
 
&gt;&gt;&gt; uniform(2.5, 10.0)                   # 随机浮点数:  2.5 &lt;= x &lt; 10.0
3.1800146073117523
 
 
&gt;&gt;&gt; randrange(10)                        # 0-9的整数：
7
 
&gt;&gt;&gt; randrange(0, 101, 2)                 # 0-100的偶数
26
 
&gt;&gt;&gt; choice([&#39;win&#39;, &#39;lose&#39;, &#39;draw&#39;])      # 从序列随机选择一个元素
&#39;draw&#39;
 
&gt;&gt;&gt; deck = &#39;ace two three four&#39;.split()
&gt;&gt;&gt; shuffle(deck)                        # 对序列进行洗牌，改变原序列
&gt;&gt;&gt; deck
[&#39;four&#39;, &#39;two&#39;, &#39;ace&#39;, &#39;three&#39;]
 
&gt;&gt;&gt; sample([10, 20, 30, 40, 50], k=4)    # 不改变原序列的抽取指定数目样本，并生成新序列
[40, 10, 50, 30]
 
 
&gt;&gt;&gt; # 6次旋转红黑绿轮盘(带权重可重复的取样)，不破坏原序列,weight[18,18,2]
&gt;&gt;&gt; choices([&#39;red&#39;, &#39;black&#39;, &#39;green&#39;], [18, 18, 2], k=6)
[&#39;red&#39;, &#39;green&#39;, &#39;black&#39;, &#39;black&#39;, &#39;red&#39;, &#39;black&#39;]
 
&gt;&gt;&gt; # 德州扑克计算概率Deal 20 cards without replacement from a deck of 52 playing cards
&gt;&gt;&gt; # and determine the proportion of cards with a ten-value
&gt;&gt;&gt; # (a ten, jack, queen, or king).
&gt;&gt;&gt; deck = collections.Counter(tens=16, low_cards=36)
&gt;&gt;&gt; seen = sample(list(deck.elements()), k=20)
&gt;&gt;&gt; seen.count(&#39;tens&#39;) / 20
0.15
 
&gt;&gt;&gt; # 模拟概率Estimate the probability of getting 5 or more heads from 7 spins
&gt;&gt;&gt; # of a biased coin that settles on heads 60% of the time.&#39;H&#39;的概率是0.6，“T”的概率是1-0.6
&gt;&gt;&gt; trial = lambda: choices(&#39;HT&#39;, cum_weights=(0.60, 1.00), k=7).count(&#39;H&#39;) &gt;= 5
&gt;&gt;&gt; sum(trial() for i in range(10000)) / 10000
0.4169
 
&gt;&gt;&gt; # Probability of the median of 5 samples being in middle two quartiles
&gt;&gt;&gt; trial = lambda : 2500 &lt;= sorted(choices(range(10000), k=5))[2]  &lt; 7500
&gt;&gt;&gt; sum(trial() for i in range(10000)) / 10000
0.7958
 
&gt;&gt;&gt; from statistics import mean
&gt;&gt;&gt; from random import choices
 
&gt;&gt;&gt; data = 1, 2, 4, 4, 10
&gt;&gt;&gt; means = sorted(mean(choices(data, k=5)) for i in range(20))  # mean是求平均
&gt;&gt;&gt; print(f&#39;The sample mean of {mean(data):.1f} has a 90% confidence &#39;
      f&#39;interval from {means[1]:.1f} to {means[-2]:.1f}&#39;)  # 这里的f用法
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3);function o(u,d){return s(),a("div",null,[c,e(" more "),p])}const m=n(l,[["render",o],["__file","Python-random.html.vue"]]);export{m as default};
