import{_ as t,F as n,V as l,W as d,$ as i,a1 as r,Z as o,Y as a,a0 as c,X as e}from"./framework-fd1dac66.js";const g={},u=e("h1",{id:"includes",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#includes","aria-hidden":"true"},"#"),a(" includes")],-1),v=c(`<h1 id="startswith-endswith" tabindex="-1"><a class="header-anchor" href="#startswith-endswith" aria-hidden="true">#</a> startsWith ，endsWith</h1><p>startsWith用于判断是否位于头部，endsWith判断是否位于尾部，可以说这两个方法是includes方法的扩展；</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let str=&#39;google&#39;;

console.log(str.startsWith(&#39;g&#39;));  //true

console.log(str.endsWith(&#39;e&#39;));    //true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="repeat" tabindex="-1"><a class="header-anchor" href="#repeat" aria-hidden="true">#</a> repeat</h1><p>顾名思义，这个方法就是可以获取字符串重复N次后的方法；</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let str=&#39;google&#39;;
console.log(str.repeat(3)); //googlegooglegoogle
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>repeat方法接受一个数字类型的参数，可以是正式也可以是小数，如果是浮点型会自动调用Math.floor方法转为整型；</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let str=&#39;google&#39;;
console.log(str.repeat(3.5)); //googlegooglegoogle
console.log(str.repeat(Math.floor(3.5)));//googlegooglegoogle
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>参数可以为0这样就会返回一个空字符串，但是不能为负数，否则会报错；</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let str=&#39;google&#39;;
console.log(str.repeat(0)); //&#39;&#39;
console.log(str.repeat(-3.5));//RangeError: Invalid count value
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="padstart-padend" tabindex="-1"><a class="header-anchor" href="#padstart-padend" aria-hidden="true">#</a> padStart,padEnd</h1><p>这两个方法其实是ES7标准下扩展的方法，作用就是自动补全；</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let str=&#39;goo&#39;;&lt;br&gt;　　　 str.padStart(5, &#39;le&#39;) // &#39;legoo&#39;
str.padStart(4, &#39;le&#39;) // &#39;lgoo&#39;

str.padEnd(5, &#39;le&#39;) // &#39;goole&#39;
str.padEnd(4, &#39;le&#39;) // &#39;gool&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这两个方法类似都是接受两个参数，第一个是补全的长度，第二个是要补充的内容，由于是es7标准的方法，现在浏览器还不能直接运行，可以尝试借助babel运行；</p>`,14);function p(h,m){const s=n("center");return l(),d("div",null,[i(s,null,{default:r(()=>[u]),_:1}),o(" more "),a(" includes是判断是否包含的,直接返回布尔值 ``` let str='google'; if(str.includes('o')){ console.log('yes'); }else{ console.log('no'); } ``` "),v])}const _=t(g,[["render",p],["__file","ES6之字符串扩展方法(常用).html.vue"]]);export{_ as default};
