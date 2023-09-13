import{_ as n,V as i,W as r,Z as s,X as e,a0 as d}from"./framework-fd1dac66.js";const t={},l=e("p",null,[e("strong",null,"find :")],-1),a=d(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let arr=[1,2,234,&#39;sdf&#39;,-2];
arr.find(function(x){
    return x&amp;lt;=2;
})//结果：1，返回第一个符合条件的x值
arr.find(function(x,i,arr){
    if(x&amp;lt;2){console.log(x,i,arr)}
})//结果：1 0 [1, 2, 234, &quot;sdf&quot;, -2]，-2 4 [1, 2, 234, &quot;sdf&quot;, -2]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>find的参数为回调函数，回调函数可以接收3个参数，值x、索引i、数组arr，回调函数默认返回值x。 <strong>findIndex :</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let arr=[1,2,234,&#39;sdf&#39;,-2];
arr.findIndex(function(x){
    return x&amp;lt;=2;
})//结果：0，返回第一个符合条件的x值的索引
arr.findIndex(function(x,i,arr){
    if(x&amp;lt;2){console.log(x,i,arr)}
})//结果：1 0 [1, 2, 234, &quot;sdf&quot;, -2]，-2 4 [1, 2, 234, &quot;sdf&quot;, -2]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>findIndex和find差不多，不过默认返回的是索引。</p><p><strong>includes :</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let arr=[1,2,234,&#39;sdf&#39;,-2];
arr.includes(2);// 结果true，返回布尔值
arr.includes(20);// 结果：false，返回布尔值
arr.includes(2,3)//结果：false，返回布尔值
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>includes函数与string的includes一样，接收2参数，查询的项以及查询起始位置。</p><p><strong>keys :</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let arr=[1,2,234,&#39;sdf&#39;,-2];
for(let a of arr.keys()){
    console.log(a)
}//结果：0,1,2,3,4  遍历了数组arr的索引
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>keys，对数组索引的遍历</p><p><strong>values :</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let arr=[1,2,234,&#39;sdf&#39;,-2];
for(let a of arr.values()){
    console.log(a)
}//结果：1,2,234,sdf,-2 遍历了数组arr的值
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>values，对数组项的遍历</p><p><strong>entries :</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let arr=[&#39;w&#39;,&#39;b&#39;];
for(let a of arr.entries()){
    console.log(a)
}//结果：[0,w],[1,b]
for(let [i,v] of arr.entries()){
    console.log(i,v)
}//结果：0 w,1 b
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>entries，对数组键值对的遍历。</p><p><strong>fill :</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let arr=[&#39;w&#39;,&#39;b&#39;];
arr.fill(&#39;i&#39;)//结果：[&#39;i&#39;,&#39;i&#39;]，改变原数组
arr.fill(&#39;o&#39;,1)//结果：[&#39;i&#39;,&#39;o&#39;]改变原数组,第二个参数表示填充起始位置
new Array(3).fill(&#39;k&#39;).fill(&#39;r&#39;,1,2)//结果：[&#39;k&#39;,&#39;r&#39;,&#39;k&#39;]，第三个数组表示填充的结束位置
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>fill方法改变原数组，当第三个参数大于数组长度时候，以最后一位为结束位置。</p><p><strong>Array.of() :</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Array.of(&#39;w&#39;,&#39;i&#39;,&#39;r&#39;)//[&quot;w&quot;, &quot;i&quot;, &quot;r&quot;]返回数组
Array.of([&#39;w&#39;,&#39;o&#39;])//[[&#39;w&#39;,&#39;o&#39;]]返回嵌套数组
Array.of(undefined)//[undefined]依然返回数组
Array.of()//[]返回一个空数组
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Array.of()方法永远返回一个数组，参数不分类型，只分数量，数量为0返回空数组。</p><p><strong>copyWithin :</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[&quot;w&quot;, &quot;i&quot;, &quot;r&quot;].copyWithin(0)//此时数组不变
[&quot;w&quot;, &quot;i&quot;, &quot;r&quot;].copyWithin(1)//[&quot;w&quot;, &quot;w&quot;, &quot;i&quot;],数组从位置1开始被原数组覆盖，只有1之前的项0保持不变
[&quot;w&quot;, &quot;i&quot;, &quot;r&quot;,&quot;b&quot;].copyWithin(1,2)//[&quot;w&quot;, &quot;r&quot;, &quot;b&quot;, &quot;b&quot;],索引2到最后的r,b两项分别替换到原数组1开始的各项，当数量不够，变终止
[&quot;w&quot;, &quot;i&quot;, &quot;r&quot;,&#39;b&#39;].copyWithin(1,2,3)//[&quot;w&quot;, &quot;r&quot;, &quot;r&quot;, &quot;b&quot;]，强第1项的i替换为第2项的r
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copyWithin方法接收三个参数，被替换数据的开始处、替换块的开始处、替换块的结束处(不包括);copyWithin(s,m,n).</p><p><strong>Array.from() :</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Array.from({&#39;0&#39;:&#39;w&#39;,&#39;1&#39;:&#39;b&#39;,length:2})//[&quot;w&quot;, &quot;b&quot;],返回数组的长度取决于对象中的length，故此项必须有！
Array.from({&#39;0&#39;:&#39;w&#39;,&#39;1&#39;:&#39;b&#39;,length:4})//[&quot;w&quot;, &quot;b&quot;, undefined, undefined],数组后2项没有属性去赋值，故undefined
Array.from({&#39;0&#39;:&#39;w&#39;,&#39;1&#39;:&#39;b&#39;,length:1})//[&quot;w&quot;],length小于key的数目，按序添加数组

//////////////////////////////
let divs=document.getElementsByTagName(&#39;div&#39;);
Array.from(divs)//返回div元素数组
Array.from(&#39;wbiokr&#39;)//[&quot;w&quot;, &quot;b&quot;, &quot;i&quot;, &quot;o&quot;, &quot;k&quot;, &quot;r&quot;]
Array.from([1,2,3],function(x){
        return x+1})//[2, 3, 4],第二个参数为回调函数
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Array.from可以把带有lenght属性类似数组的对象转换为数组，也可以把字符串等可以遍历的对象转换为数组，它接收2个参数，转换对象与回调函数</p>`,28);function u(o,v){return i(),r("div",null,[l,s(" more "),a])}const m=n(t,[["render",u],["__file","es6新增array.html.vue"]]);export{m as default};
