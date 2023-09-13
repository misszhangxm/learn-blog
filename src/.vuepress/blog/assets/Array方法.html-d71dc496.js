import{_ as i,F as a,V as r,W as s,$ as l,a1 as d,Z as t,a0 as o,X as e,Y as c}from"./framework-fd1dac66.js";const u={},v=e("h1",{id:"join",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#join","aria-hidden":"true"},"#"),c(" join()")],-1),m=o(`<p>join(separator): 将数组的元素组起一个字符串，以separator为分隔符，省略的话则用默认用逗号为分隔符，该方法只接收一个参数：即分隔符。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var arr = [1,2,3];
console.log(arr.join()); // 1,2,3
console.log(arr.join(&quot;-&quot;)); // 1-2-3
console.log(arr); // [1, 2, 3]（原数组不变）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过join()方法可以实现重复字符串，只需传入字符串以及重复的次数，就能返回重复后的字符串，函数如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function repeatString(str, n) {
return new Array(n + 1).join(str);
}
console.log(repeatString(&quot;abc&quot;, 3)); // abcabcabc
console.log(repeatString(&quot;Hi&quot;, 5)); // HiHiHiHiHi
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="push-和pop" tabindex="-1"><a class="header-anchor" href="#push-和pop" aria-hidden="true">#</a> push()和pop()</h1><p>push(): 可以接收任意数量的参数，把它们逐个添加到数组末尾，并返回修改后数组的长度。 pop()：数组末尾移除最后一项，减少数组的 length 值，然后返回移除的项。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var arr = [&quot;Lily&quot;,&quot;lucy&quot;,&quot;Tom&quot;];
var count = arr.push(&quot;Jack&quot;,&quot;Sean&quot;);
console.log(count); // 5
console.log(arr); // [&quot;Lily&quot;, &quot;lucy&quot;, &quot;Tom&quot;, &quot;Jack&quot;, &quot;Sean&quot;]
var item = arr.pop();
console.log(item); // Sean
console.log(arr); // [&quot;Lily&quot;, &quot;lucy&quot;, &quot;Tom&quot;, &quot;Jack&quot;]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="shift-和-unshift" tabindex="-1"><a class="header-anchor" href="#shift-和-unshift" aria-hidden="true">#</a> shift() 和 unshift()</h1><p>shift()：删除原数组第一项，并返回删除元素的值；如果数组为空则返回undefined 。 unshift:将参数添加到原数组开头，并返回数组的长度 。</p><p>这组方法和上面的push()和pop()方法正好对应，一个是操作数组的开头，一个是操作数组的结尾。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var arr = [&quot;Lily&quot;,&quot;lucy&quot;,&quot;Tom&quot;];
var count = arr.unshift(&quot;Jack&quot;,&quot;Sean&quot;);
console.log(count); // 5
console.log(arr); //[&quot;Jack&quot;, &quot;Sean&quot;, &quot;Lily&quot;, &quot;lucy&quot;, &quot;Tom&quot;]
var item = arr.shift();
console.log(item); // Jack
console.log(arr); // [&quot;Sean&quot;, &quot;Lily&quot;, &quot;lucy&quot;, &quot;Tom&quot;]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="sort" tabindex="-1"><a class="header-anchor" href="#sort" aria-hidden="true">#</a> sort()</h1><p>sort()：按升序排列数组项——即最小的值位于最前面，最大的值排在最后面。</p><p>在排序时，sort()方法会调用每个数组项的 toString()转型方法，然后比较得到的字符串，以确定如何排序。即使数组中的每一项都是数值， sort()方法比较的也是字符串，因此会出现以下的这种情况：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var arr1 = [&quot;a&quot;, &quot;d&quot;, &quot;c&quot;, &quot;b&quot;];
console.log(arr1.sort()); // [&quot;a&quot;, &quot;b&quot;, &quot;c&quot;, &quot;d&quot;]
arr2 = [13, 24, 51, 3];
console.log(arr2.sort()); // [13, 24, 3, 51]
console.log(arr2); // [13, 24, 3, 51](元数组被改变)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>为了解决上述问题，sort()方法可以接收一个比较函数作为参数，以便我们指定哪个值位于哪个值的前面。比较函数接收两个参数，如果第一个参数应该位于第二个之前则返回一个负数，如果两个参数相等则返回 0，如果第一个参数应该位于第二个之后则返回一个正数。以下就是一个简单的比较函数：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function compare(value1, value2) {
    if (value1 &lt; value2) {
        return -1;
    } else if (value1 &gt; value2) {
        return 1;
    } else {
        return 0;
    }
}
arr2 = [13, 24, 51, 3];
console.log(arr2.sort(compare)); // [3, 13, 24, 51]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果需要通过比较函数产生降序排序的结果，只要交换比较函数返回的值即可：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function compare(value1, value2) {
    if (value1 &lt; value2) {
        return 1;
    } else if (value1 &gt; value2) {
        return -1;
    } else {
        return 0;
    }
}
arr2 = [13, 24, 51, 3];
console.log(arr2.sort(compare)); // [51, 24, 13, 3]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="reverse" tabindex="-1"><a class="header-anchor" href="#reverse" aria-hidden="true">#</a> reverse()</h1><p>reverse()：反转数组项的顺序。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var arr = [13, 24, 51, 3];
console.log(arr.reverse()); //[3, 51, 24, 13]
console.log(arr); //[3, 51, 24, 13](原数组改变)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="concat" tabindex="-1"><a class="header-anchor" href="#concat" aria-hidden="true">#</a> concat()</h1><p>concat() ：将参数添加到原数组中。这个方法会先创建当前数组一个副本，然后将接收到的参数添加到这个副本的末尾，最后返回新构建的数组。在没有给 concat()方法传递参数的情况下，它只是复制当前数组并返回副本。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var arr = [1,3,5,7];
var arrCopy = arr.concat(9,[11,13]);
console.log(arrCopy); //[1, 3, 5, 7, 9, 11, 13]
console.log(arr); // [1, 3, 5, 7](原数组未被修改)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>从上面测试结果可以发现：传入的不是数组，则直接把参数添加到数组后面，如果传入的是数组，则将数组中的各个项添加到数组中。但是如果传入的是一个二维数组呢？</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var arrCopy2 = arr.concat([9,[11,13]]);
console.log(arrCopy2); //[1, 3, 5, 7, 9, Array[2]]
console.log(arrCopy2[5]); //[11, 13]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上述代码中，arrCopy2数组的第五项是一个包含两项的数组，也就是说concat方法只能将传入数组中的每一项添加到数组中，如果传入数组中有些项是数组，那么也会把这一数组项当作一项添加到arrCopy2中。</p><h1 id="slice" tabindex="-1"><a class="header-anchor" href="#slice" aria-hidden="true">#</a> slice()</h1><p>slice()：返回从原数组中指定开始下标到结束下标之间的项组成的新数组。slice()方法可以接受一或两个参数，即要返回项的起始和结束位置。在只有一个参数的情况下， slice()方法返回从该参数指定位置开始到当前数组末尾的所有项。如果有两个参数，该方法返回起始和结束位置之间的项——但不包括结束位置的项。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var arr = [1,3,5,7,9,11];
var arrCopy = arr.slice(1);
var arrCopy2 = arr.slice(1,4);
var arrCopy3 = arr.slice(1,-2);
var arrCopy4 = arr.slice(-4,-1);
console.log(arr); //[1, 3, 5, 7, 9, 11](原数组没变)
console.log(arrCopy); //[3, 5, 7, 9, 11]
console.log(arrCopy2); //[3, 5, 7]
console.log(arrCopy3); //[3, 5, 7]
console.log(arrCopy4); //[5, 7, 9]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>arrCopy只设置了一个参数，也就是起始下标为1，所以返回的数组为下标1（包括下标1）开始到数组最后。 arrCopy2设置了两个参数，返回起始下标（包括1）开始到终止下标（不包括4）的子数组。 arrCopy3设置了两个参数，终止下标为负数，当出现负数时，将负数加上数组长度的值（6）来替换该位置的数，因此就是从1开始到4（不包括）的子数组。 arrCopy4中两个参数都是负数，所以都加上数组长度6转换成正数，因此相当于slice(2,5)。</p><h1 id="splice" tabindex="-1"><a class="header-anchor" href="#splice" aria-hidden="true">#</a> splice()</h1><p>splice()：很强大的数组方法，它有很多种用法，可以实现删除、插入和替换。</p><p>删除：可以删除任意数量的项，只需指定 2 个参数：要删除的第一项的位置和要删除的项数。例如， splice(0,2)会删除数组中的前两项。</p><p>插入：可以向指定位置插入任意数量的项，只需提供 3 个参数：起始位置、 0（要删除的项数）和要插入的项。例如，splice(2,0,4,6)会从当前数组的位置 2 开始插入4和6。 替换：可以向指定位置插入任意数量的项，且同时删除任意数量的项，只需指定 3 个参数：起始位置、要删除的项数和要插入的任意数量的项。插入的项数不必与删除的项数相等。例如，splice (2,1,4,6)会删除当前数组位置 2 的项，然后再从位置 2 开始插入4和6。</p><p>splice()方法始终都会返回一个数组，该数组中包含从原始数组中删除的项，如果没有删除任何项，则返回一个空数组。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var arr = [1,3,5,7,9,11];
var arrRemoved = arr.splice(0,2);
console.log(arr); //[5, 7, 9, 11]
console.log(arrRemoved); //[1, 3]
var arrRemoved2 = arr.splice(2,0,4,6);
console.log(arr); // [5, 7, 4, 6, 9, 11]
console.log(arrRemoved2); // []
var arrRemoved3 = arr.splice(1,1,2,4);
console.log(arr); // [5, 2, 4, 4, 6, 9, 11]
console.log(arrRemoved3); //[7]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="indexof-和-lastindexof" tabindex="-1"><a class="header-anchor" href="#indexof-和-lastindexof" aria-hidden="true">#</a> indexOf()和 lastIndexOf()</h1><p>indexOf()：接收两个参数：要查找的项和（可选的）表示查找起点位置的索引。其中， 从数组的开头（位置 0）开始向后查找。 lastIndexOf：接收两个参数：要查找的项和（可选的）表示查找起点位置的索引。其中， 从数组的末尾开始向前查找。</p><p>这两个方法都返回要查找的项在数组中的位置，或者在没找到的情况下返回1。在比较第一个参数与数组中的每一项时，会使用全等操作符。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var arr = [1,3,5,7,7,5,3,1];
console.log(arr.indexOf(5)); //2
console.log(arr.lastIndexOf(5)); //5
console.log(arr.indexOf(5,2)); //2
console.log(arr.lastIndexOf(5,4)); //2
console.log(arr.indexOf(&quot;5&quot;)); //-1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="foreach" tabindex="-1"><a class="header-anchor" href="#foreach" aria-hidden="true">#</a> forEach()</h1><p>forEach()：对数组进行遍历循环，对数组中的每一项运行给定函数。这个方法没有返回值。参数都是function类型，默认有传参，参数分别为：遍历的数组内容；第对应的数组索引，数组本身。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var arr = [1, 2, 3, 4, 5];
arr.forEach(function(x, index, a){
console.log(x + &#39;|&#39; + index + &#39;|&#39; + (a === arr));
});
// 输出为：
// 1|0|true
// 2|1|true
// 3|2|true
// 4|3|true
// 5|4|true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="map" tabindex="-1"><a class="header-anchor" href="#map" aria-hidden="true">#</a> map()</h1><p>map()：指“映射”，对数组中的每一项运行给定函数，返回每次函数调用的结果组成的数组。</p><p>下面代码利用map方法实现数组中每个数求平方。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var arr = [1, 2, 3, 4, 5];
var arr2 = arr.map(function(item){
return item*item;
});
console.log(arr2); //[1, 4, 9, 16, 25]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="filter" tabindex="-1"><a class="header-anchor" href="#filter" aria-hidden="true">#</a> filter()</h1><p>filter()：“过滤”功能，数组中的每一项运行给定函数，返回满足过滤条件组成的数组。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var arr2 = arr.filter(function(x, index) {
return index % 3 === 0 || x &gt;= 8;
});
console.log(arr2); //[1, 4, 7, 8, 9, 10]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="every" tabindex="-1"><a class="header-anchor" href="#every" aria-hidden="true">#</a> every()</h1><p>every()：判断数组中每一项都是否满足条件，只有所有项都满足条件，才会返回true。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var arr = [1, 2, 3, 4, 5];
var arr2 = arr.every(function(x) {
return x &lt; 10;
});
console.log(arr2); //true
var arr3 = arr.every(function(x) {
return x &lt; 3;
});
console.log(arr3); // false
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="some" tabindex="-1"><a class="header-anchor" href="#some" aria-hidden="true">#</a> some()</h1><p>some()：判断数组中是否存在满足条件的项，只要有一项满足条件，就会返回true。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var arr = [1, 2, 3, 4, 5];
var arr2 = arr.some(function(x) {
return x &lt; 3;
});
console.log(arr2); //true
var arr3 = arr.some(function(x) {
return x &lt; 1;
});
console.log(arr3); // false
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="reduce-和-reduceright" tabindex="-1"><a class="header-anchor" href="#reduce-和-reduceright" aria-hidden="true">#</a> reduce()和 reduceRight()</h1><p>这两个方法都会实现迭代数组的所有项，然后构建一个最终返回的值。reduce()方法从数组的第一项开始，逐个遍历到最后。而 reduceRight()则从数组的最后一项开始，向前遍历到第一项。</p><p>这两个方法都接收两个参数：一个在每一项上调用的函数和（可选的）作为归并基础的初始值。</p><p>传给 reduce()和 reduceRight()的函数接收 4 个参数：前一个值、当前值、项的索引和数组对象。这个函数返回的任何值都会作为第一个参数自动传给下一项。第一次迭代发生在数组的第二项上，因此第一个参数是数组的第一项，第二个参数就是数组的第二项。</p><p>下面代码用reduce()实现数组求和，数组一开始加了一个初始值10。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var values = [1,2,3,4,5];
var sum = values.reduceRight(function(prev, cur, index, array){
return prev + cur;
},10);
console.log(sum); //25
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,64);function b(p,h){const n=a("center");return r(),s("div",null,[l(n,null,{default:d(()=>[v]),_:1}),t(" more "),m])}const x=i(u,[["render",b],["__file","Array方法.html.vue"]]);export{x as default};
