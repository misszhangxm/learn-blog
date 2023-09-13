import{_ as e,V as t,W as i,Z as n,X as d,a0 as l}from"./framework-fd1dac66.js";const s={},a=d("p",null,"python数据类型之dict",-1),r=l(`<p>1、clear:删除所有元素</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#D.clear() -&gt; None.  Remove all items from D
dic_a  ={1:&#39;kong&#39;,2:&#39;zha&#39;,3:&#39;gen&#39;}
dic_a.clear()
print(dic_a)
结果：{}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2、fromkeys():从序列键和值生成字典的key,value来构建一个新字典</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#dict.fromkeys(seq[, value]))
seq:是为字典的键准备的
value:是字典的默认值

seq = (&#39;Name&#39;,&#39;Age&#39;,&#39;Sex&#39;)
new_dic = dict.fromkeys(seq,10)
print(new_dic)
结果：{&#39;Age&#39;: 10, &#39;Sex&#39;: 10, &#39;Name&#39;: 10}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3、get:获取字典值</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#get(self, k, d=None)
如果字典中没有1键，则值返回默认值10，如果不返回默认值，则返回None
dic = {1:&#39;kong&#39;,2:&#39;zha&#39;}
print(dic.get(1,10))
结果：&#39;kong&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>4、items:返回一个类集合对象</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>dic = {1:&#39;kong&#39;,2:&#39;zha&#39;}
print(dic.items())
结果：dict_items([(1, &#39;kong&#39;), (2, &#39;zha&#39;)])
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>5、keys:返回一个类集合对象</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>dic = {1:&#39;kong&#39;,2:&#39;zha&#39;}
new_dic = dic.keys()
print(new_dic)
for x in new_dic:
    print(x)
结果：
dict_keys([1, 2])
1
2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>6、pop:删除字典指定的键值，返回一个value值，必须指定键删除</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#D.pop(k[,d]) -&gt; v, remove specified key and return the corresponding value
dic = {1:&#39;kong&#39;,2:&#39;zha&#39;}
print(dic.pop(1))
print(dic)
结果：
kong
{2: &#39;zha&#39;}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>7、popitem:随机移除字典的键值对，返回一个元组，如果字典为空则报错</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#D.popitem() -&gt; (k, v), remove and return some (key, value) pair as a
        2-tuple; but raise KeyError if D is empty.
dic = {1:&#39;kong&#39;,2:&#39;zha&#39;,3:&#39;gen&#39;}
print(dic.popitem())
print(dic)
结果：
(1, &#39;kong&#39;)
{2: &#39;zha&#39;, 3: &#39;gen&#39;}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>8、setdefault:如果键在字典中，返回键对应的值，如果键不在字典中，向字典中插入这个键值</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#D.setdefault(k[,d]) -&gt; D.get(k,d), also set D[k]=d if k not in D
dic = {1:&#39;kong&#39;,2:&#39;zha&#39;,3:&#39;gen&#39;,4:&#39;ff&#39;,5:&#39;pp&#39;}
pp = dic.setdefault(6,&#39;ppp&#39;)
print(dic)
print(pp)
结果：
{1: &#39;kong&#39;, 2: &#39;zha&#39;, 3: &#39;gen&#39;, 4: &#39;ff&#39;, 5: &#39;pp&#39;, 6: &#39;ppp&#39;}
ppp
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>9、update:用dic2更新dic1:如果dic2的键在dic1中不存在，则dic2插入到dic1,否则更用dic2的键值，更新dic1</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>dic1 = {&#39;Name&#39;:&#39;kong&#39;,&#39;Age&#39;:33}
dic2 = {&#39;Name&#39;:&#39;Hucli&#39;,&#39;Sex&#39;:&#39;M&#39;}
print(dic1,dic2)
dic1.update(dic2)
print(dic1)
结果：
{&#39;Age&#39;: 33, &#39;Name&#39;: &#39;kong&#39;} {&#39;Name&#39;: &#39;Hucli&#39;, &#39;Sex&#39;: &#39;M&#39;}
{&#39;Age&#39;: 33, &#39;Name&#39;: &#39;Hucli&#39;, &#39;Sex&#39;: &#39;M&#39;}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>10、values:返回字典的所有值</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#D.values() -&gt; an object providing a view on D&#39;s values
dic1 = {&#39;Name&#39;:&#39;kong&#39;,&#39;Age&#39;:33}
print(dic1.values())
结果：dict_values([33, &#39;kong&#39;])
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>总结：</p><table><thead><tr><th style="text-align:left;">方法</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:left;">D.clear()</td><td style="text-align:left;">移除D中的所有项</td></tr><tr><td style="text-align:left;">D.copy()</td><td style="text-align:left;">返回D的副本</td></tr><tr><td style="text-align:left;">D.fromkeys(seq[,val])</td><td style="text-align:left;">返回从seq中获得的键和被设置为val的值的字典。可做类方法调用</td></tr><tr><td style="text-align:left;">D.get(key[,default])</td><td style="text-align:left;">如果D[key]存在，将其返回；否则返回给定的默认值None</td></tr><tr><td style="text-align:left;">D.has_key(key)</td><td style="text-align:left;">检查D是否有给定键key</td></tr><tr><td style="text-align:left;">D.items()</td><td style="text-align:left;">返回表示D项的(键，值)对列表</td></tr><tr><td style="text-align:left;">D.iteritems()</td><td style="text-align:left;">从D.items()返回的(键，值)对中返回一个可迭代的对象</td></tr><tr><td style="text-align:left;">D.iterkeys()</td><td style="text-align:left;">从D的键中返回一个可迭代对象</td></tr><tr><td style="text-align:left;">D.itervalues()</td><td style="text-align:left;">从D的值中返回一个可迭代对象</td></tr><tr><td style="text-align:left;">D.keys()</td><td style="text-align:left;">返回D键的列表</td></tr><tr><td style="text-align:left;">D.pop(key[,d])</td><td style="text-align:left;">移除并且返回对应给定键key或给定的默认值D的值</td></tr><tr><td style="text-align:left;">D.popitem()</td><td style="text-align:left;">从D中移除任意一项，并将其作为(键，值)对返回</td></tr><tr><td style="text-align:left;">D.setdefault(key[,default])</td><td style="text-align:left;">如果D[key]存在则将其返回；否则返回默认值None</td></tr><tr><td style="text-align:left;">D.update(other)</td><td style="text-align:left;">将other中的每一项加入到D中。</td></tr><tr><td style="text-align:left;">D.values()</td><td style="text-align:left;">返回D中值的列表</td></tr></tbody></table>`,22);function v(c,u){return t(),i("div",null,[a,n(" more "),r])}const g=e(s,[["render",v],["__file","Python-字典.html.vue"]]);export{g as default};
