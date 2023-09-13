import{_ as t,V as d,W as n,Z as i,a0 as e}from"./framework-fd1dac66.js";const a={},r=e(`<h4 id="切片" tabindex="-1"><a class="header-anchor" href="#切片" aria-hidden="true">#</a> 切片</h4><p>切片操作十分有用。我们先创建一个0-99的数列：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&gt;&gt;&gt; L = list(range(100))
&gt;&gt;&gt; L
[0, 1, 2, 3, ..., 99]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以通过切片轻松取出某一段数列。</p>`,4),s=e(`<p>比如前10个数：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&gt;&gt;&gt; L[:10]
[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>后10个数：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&gt;&gt;&gt; L[-10:]
[90, 91, 92, 93, 94, 95, 96, 97, 98, 99]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>前11-20个数：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&gt;&gt;&gt; L[10:20]
[10, 11, 12, 13, 14, 15, 16, 17, 18, 19]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>前10个数，每两个取一个：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&gt;&gt;&gt; L[:10:2]
[0, 2, 4, 6, 8]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>所有数，每5个取一个：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&gt;&gt;&gt; L[::5]
[0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>甚至什么都不写，只写[:]就可以原样复制一个list：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&gt;&gt;&gt; L[:]
[0, 1, 2, 3, ..., 99]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>tuple也是一种list，唯一区别是tuple不可变。因此，tuple也可以用切片操作，只是操作的结果仍是tuple：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&gt;&gt;&gt; (0, 1, 2, 3, 4, 5)[:3]
(0, 1, 2)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>字符串&#39;xxx&#39;也可以看成是一种list，每个元素就是一个字符。因此，字符串也可以用切片操作，只是操作结果仍是字符串：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&gt;&gt;&gt; &#39;ABCDEFG&#39;[:3]
&#39;ABC&#39;
&gt;&gt;&gt; &#39;ABCDEFG&#39;[::2]
&#39;ACEG&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="generator" tabindex="-1"><a class="header-anchor" href="#generator" aria-hidden="true">#</a> generator</h4><p>要创建一个generator，有很多种方法。第一种方法很简单，只要把一个列表生成式的[]改成()，就创建了一个generator：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&gt;&gt;&gt; L = [x * x for x in range(10)]
&gt;&gt;&gt; L
[0, 1, 4, 9, 16, 25, 36, 49, 64, 81]
&gt;&gt;&gt; g = (x * x for x in range(10))
&gt;&gt;&gt; g
&lt;generator object &lt;genexpr&gt; at 0x1022ef630&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过next()函数获得generator的下一个返回值：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>next(g)
0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>generator保存的是算法，每次调用next(g)，就计算出g的下一个元素的值，直到计算到最后一个元素，没有更多的元素时，抛出StopIteration的错误。 <code>通过for循环来迭代它，并且不需要关心StopIteration的错误。</code></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    g = (x * x for x in range(10))
    for n in g:
        print(n)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>定义generator的另一种方法。如果一个函数定义中包含yield关键字，那么这个函数就不再是一个普通函数，而是一个generator.</p><p><code>generator和函数的执行流程不一样。函数是顺序执行，遇到return语句或者最后一行函数语句就返回。而变成generator的函数，在每次调用next()的时候执行，遇到yield语句返回，再次执行时从上次返回的yield语句处继续执行。</code></p><p>for循环调用generator时，发现拿不到generator的return语句的返回值。如果想要拿到返回值，必须捕获StopIteration错误，返回值包含在StopIteration的value中</p><h4 id="迭代器-iterable" tabindex="-1"><a class="header-anchor" href="#迭代器-iterable" aria-hidden="true">#</a> 迭代器 (Iterable)</h4><p>可以直接作用于for循环的数据类型有以下几种：</p><p>一类是集合数据类型，如<code>list</code>、<code>tuple</code>、<code>dict</code>、<code>set</code>、<code>str</code>等； 一类是<code>generator</code>，包括生成器和带<code>yield</code>的<code>generator</code> <code>function</code>。 这些可以直接作用于<code>for</code>循环的对象统称为可迭代对象：<code>Iterable</code>。 可以使用<code>isinstance()</code>判断一个对象是否是<code>Iterable</code>对象</p><p>而生成器不但可以作用于<code>for</code>循环，还可以被<code>next()</code>函数不断调用并返回下一个值，直到最后抛出<code>StopIteration</code>错误表示无法继续返回下一个值了。</p><p>可以被<code>next()</code>函数调用并不断返回下一个值的对象称为迭代器：<code>Iterator</code>。 可以使用isinstance()判断一个对象是否是Iterator对象</p><p>生成器都是<code>Iterator</code>对象，但<code>list</code>、<code>dict</code>、<code>str</code>虽然是<code>Iterable</code>，却不是<code>Iterator</code>。 把<code>list</code>、<code>dict</code>、<code>str</code>等<code>Iterable</code>变成<code>Iterator</code>可以使用<code>iter()</code>函数：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&gt;&gt;&gt; isinstance(iter([]), Iterator)
True
&gt;&gt;&gt; isinstance(iter(&#39;abc&#39;), Iterator)
True
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>为什么list、dict、str等数据类型不是Iterator？ 因为Python的Iterator对象表示的是一个数据流，Iterator对象可以被next()函数调用并不断返回下一个数据，直到没有数据时抛出StopIteration错误。可以把这个数据流看做是一个有序序列，但我们却不能提前知道序列的长度，只能不断通过next()函数实现按需计算下一个数据，所以Iterator的计算是惰性的，只有在需要返回下一个数据时它才会计算。</p><p>Iterator甚至可以表示一个无限大的数据流，例如全体自然数。而使用list是永远不可能存储全体自然数的。</p><p>小结:</p><p>凡是可作用于for循环的对象都是Iterable类型；</p><p>凡是可作用于next()函数的对象都是Iterator类型，它们表示一个惰性计算的序列；</p><p>集合数据类型如list、dict、str等是Iterable但不是Iterator，不过可以通过iter()函数获得一个Iterator对象。</p><p>Python的for循环本质上就是通过不断调用next()函数实现的，例如：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>for x in [1, 2, 3, 4, 5]:
    pass

#实际上完全等价于：

# 首先获得Iterator对象:
it = iter([1, 2, 3, 4, 5])
# 循环:
while True:
    try:
        # 获得下一个值:
        x = next(it)
    except StopIteration:
        # 遇到StopIteration就退出循环
        break
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,41);function l(c,o){return d(),n("div",null,[r,i(" more "),s])}const u=t(a,[["render",l],["__file","python-高级特性.html.vue"]]);export{u as default};
