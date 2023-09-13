import{_ as s,F as i,V as d,W as r,$ as n,a1 as l,Y as a,a0 as u,X as e}from"./framework-fd1dac66.js";const c={},v=e("h1",{id:"_1-charat",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_1-charat","aria-hidden":"true"},"#"),a(" 1. charAt()")],-1),o=u(`<h1 id="_2-indexof" tabindex="-1"><a class="header-anchor" href="#_2-indexof" aria-hidden="true">#</a> 2. indexOf()</h1><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>indexOf(substr[,start])
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>返回 substr 在字符串 str 中首次出现的位置,从 start 位置开始查找，如果不存在，则返回 -1。</p><p>start可以是任意整数，默认值为 0。如果 start &lt; 0 则查找整个字符串（如同传进了 0）。如果 start &gt;= str.length，则该方法返回 -1，除非被查找的字符串是一个空字符串，此时返回 str.length.</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var str = &quot;javascript&quot;;
str.indexOf(&#39;s&#39;); // 1
str.indexOf(&#39;s&#39;,6); // -1
str.indexOf(&#39;&#39;,11); // 10
str.indexOf(&#39;&#39;,8); // 8
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_3-lastindexof" tabindex="-1"><a class="header-anchor" href="#_3-lastindexof" aria-hidden="true">#</a> 3. lastIndexOf()</h1><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>lastIndexOf(substr[,start])
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>返回 substr 在字符串 str 中最后出现的位置,从 start 位置 向前开始查找，如果不存在，则返回 -1。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&#39;lastindex&#39;.lastIndexOf(&#39;a&#39;); // 1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h1 id="_4-substring" tabindex="-1"><a class="header-anchor" href="#_4-substring" aria-hidden="true">#</a> 4. substring()</h1><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>str.substring(start[, end])
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>返回从 start 到 end（不包括）之间的字符，start、end均为 非负整数。若结束参数(end)省略，则表示从start位置一直截取到最后。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var str = &#39;abcdefg&#39;;
str.substring(1, 4); //&quot;bcd&quot;
str.substring(1); // &quot;bcdefg&quot;
str.substring(-1); //&quot;abcdefg&quot; 传入负值时会视为0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_5-slice" tabindex="-1"><a class="header-anchor" href="#_5-slice" aria-hidden="true">#</a> 5. slice()</h1><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>str.slice(start[,end])
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>返回从 start 到 end （不包括）之间的字符，可传负值</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var str = &#39;this is awesome&#39;;
str.slice(4, -1); //&quot; is awesom&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_6-substr" tabindex="-1"><a class="header-anchor" href="#_6-substr" aria-hidden="true">#</a> 6. substr()</h1><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>str.slice(start[,end])
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>返回 str 中从指定位置开始到指定长度的子字符串，start可为负值</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var str = &quot;Just give me a reason&quot;;
str.substr(5, 10); // &quot;give me a &quot;
str.substr(-4, 2); // &quot;as&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_7-replace" tabindex="-1"><a class="header-anchor" href="#_7-replace" aria-hidden="true">#</a> 7.replace()</h1><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>str.replace(regexp|substr, newSubStr|function)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>替换 str 的子字符串</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var str = &quot;do you love me&quot;;
str.replace(&#39;love&#39;,&#39;hate&#39;); // &quot;do you hate me&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_8-search" tabindex="-1"><a class="header-anchor" href="#_8-search" aria-hidden="true">#</a> 8. search()</h1><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>str.search(regexp)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>查找 str 与一个正则表达式是否匹配。如果匹配成功，则返回正则表达式在字符串中首次匹配项的索引；否则，返回 -1。如果参数传入的是一个非正则表达式对象，则会使用 new RegExp(obj) 隐式地将其转换为正则表达式对象</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var str = &#39;I love JavaScript!&#39;;
str.search(/java/); // -1
str.search(/Java/); // 7
str.search(/java/i); // 7
str.search(&#39;Java&#39;); // 7
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_9-match" tabindex="-1"><a class="header-anchor" href="#_9-match" aria-hidden="true">#</a> 9. match()</h1><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>str.match(regexp)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>返回一个包含匹配结果的数组，如果没有匹配项，则返回 null。如果参数传入的是一个非正则表达式对象，则会使用 new RegExp(obj) 隐式地将其转换为正则表达式对象</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var str = &#39;Javascript java&#39;;
str.match(/Java/); // [&quot;Java&quot;]
str.match(/Java/gi); // [&quot;java&quot;, &quot;Java&quot;]
str.match(/ab/g); // null
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_10-split" tabindex="-1"><a class="header-anchor" href="#_10-split" aria-hidden="true">#</a> 10. split()</h1><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>str.split([separator][, limit])
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>返回一个数组，分隔符 separator 可以是一个字符串或正则表达式</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var str = &quot;Hello?World!&quot;;
str.split(); // [&quot;Hello?World!&quot;]
str.split(&#39;&#39;); // [&quot;H&quot;, &quot;e&quot;, &quot;l&quot;, &quot;l&quot;, &quot;o&quot;, &quot;?&quot;, &quot;W&quot;, &quot;o&quot;, &quot;r&quot;, &quot;l&quot;, &quot;d&quot;, &quot;!&quot;]
str.split(&#39;?&#39;); // [&quot;Hello&quot;, &quot;World!&quot;]
str.split(&#39;&#39;,5); // [&quot;H&quot;, &quot;e&quot;, &quot;l&quot;, &quot;l&quot;, &quot;o&quot;]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_11-trim" tabindex="-1"><a class="header-anchor" href="#_11-trim" aria-hidden="true">#</a> 11. trim()</h1><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>str.trim()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>去除 str 开头和结尾处的空白字符，返回 str 的一个副本，不影响字符串本身的值</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var str = &#39; abc &#39;;
str.trim(); // &#39;abc&#39;
console.log(str); // &#39; abc &#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_12-tolowercase" tabindex="-1"><a class="header-anchor" href="#_12-tolowercase" aria-hidden="true">#</a> 12. toLowerCase()</h1><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>str.toLowerCase()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>将 str 转换为小写，并返回 str 的一个副本，不影响字符串本身的值</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var str = &#39;JavaScript&#39;;
str.toLowerCase(); // &#39;javascript&#39;
console.log(str); // &#39;JavaScript&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_13-touppercase" tabindex="-1"><a class="header-anchor" href="#_13-touppercase" aria-hidden="true">#</a> 13. toUpperCase()</h1><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>str.toUpperCase()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>将 str 转换为大写，并返回 str 的一个副本，不影响字符串本身的值</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var str = &#39;JavaScript&#39;;
str.toUpperCase(); // &#39;JAVASCRIPT&#39;
console.log(str); // &#39;JavaScript&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,49);function m(b,x){const t=i("center");return d(),r("div",null,[n(t,null,{default:l(()=>[v]),_:1}),a(" ``` str.charAt(n) ``` 返回字符串的第 n 个字符，如果不在 0~str.length-1之间，则返回一个空字符串。 "),o])}const g=s(c,[["render",m],["__file","String字符串方法.html.vue"]]);export{g as default};
