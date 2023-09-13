import{_ as n,F as a,V as d,W as s,$ as l,a1 as r,Z as t,Y as e,a0 as u}from"./framework-fd1dac66.js";const m={},c=u(`<h1 id="定义模块" tabindex="-1"><a class="header-anchor" href="#定义模块" aria-hidden="true">#</a> 定义模块</h1><p>使用 ** export ** 关键字将任意变量、函数或者类公开给其他模块。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//导出变量
export var color = &quot;red&quot;;
export let name = &quot;cz&quot;;
export const age = 25;

//导出函数
export function add(num1,num2){
    return num1+num2;
}

//导出类
export class Rectangle {
    constructor(length, width) {
        this.length = length;
        this.width = width;
    }
}

function multiply(num1, num2) {
    return num1 * num2;
}

//导出对象，即导出引用
export {multiply}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="重命名模块" tabindex="-1"><a class="header-anchor" href="#重命名模块" aria-hidden="true">#</a> 重命名模块</h1><p>重命名想导出的变量、函数或类的名称</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function sum(num1, num2) {
    return num1 + num2;
}

export {sum as add}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里将本地的sum函数重命名为add导出，因此在使用此模块的时候必须使用add这个名称。</p><h1 id="导出默认值" tabindex="-1"><a class="header-anchor" href="#导出默认值" aria-hidden="true">#</a> 导出默认值</h1><p>模块的默认值是使用 ** default 关键字 ** 所指定的单个变量、函数或类，而你在每个模块中 ** 只能设置一个默认导出。 **</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>export default function(num1, num2) {
    return num1 + num2;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此模块将一个函数作为默认值进行了导出， default 关键字标明了这是一个默认导出。此函数并不需要有名称，因为它就代表这个模块自身。对比最前面使用export导出的函数，并不是匿名函数而是必须有一个名称用于加载模块的时候使用，但是默认导出则无需一个名字，因为模块名就代表了这个导出值。</p><p>也可以使用重命名语法来导出默认值。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function sum(num1, num2) {
    return num1 + num2;
}

export { sum as default };
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="加载模块" tabindex="-1"><a class="header-anchor" href="#加载模块" aria-hidden="true">#</a> 加载模块</h1><p>在模块中使用** import **关键字来导入其他模块。 import 语句有两个部分，一是需要导入的标识符，二是需导入的标识符的来源模块。此处是导入语句的基本形式：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import { identifier1,identifier2 } from &quot;./example.js&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>大括号中指定了从给定模块导入的标识符</li><li>from指明了需要导入的模块。模块由一个表示模块路径的字符串来指定。</li></ul><p>当从模块导入了一个绑定时，你不能在当前文件中再定义另一个同名变量（包括导入另一个同名绑定），也不能在对应的 import 语句之前使用此标识符，更不能修改它的值。</p><h1 id="导入单个绑定" tabindex="-1"><a class="header-anchor" href="#导入单个绑定" aria-hidden="true">#</a> 导入单个绑定</h1><p>如果一个模块只导出了一个函数（或变量或类），或者导出了多个接口但是只选择导入其中的一个，那么就可以写成下面单个导入的模式：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import {sum} from &#39;./example.js&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h1 id="完全导入一个模块" tabindex="-1"><a class="header-anchor" href="#完全导入一个模块" aria-hidden="true">#</a> 完全导入一个模块</h1><p>还有一种情况，就是将整个模块当做单一对象导入，该模块的所有导出都会作为对象的属性存在：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import * as example from &#39;./example.js&#39;
example.sum(1,2);
example.multiply(2,3);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在此代码中， example.js 中所有导出的绑定都被加载到一个名为 example 的对象中，具名导出（ sum() 函数、 multiple() 函数）都成为 example 的可用属性。 这种导入格式被称为** 命名空间导入 **，这是因为该 example 对象并不存在于 example.js 文件中，而是作为一个命名空间对象被创建使用，其中包含了 example.js 的所有导出成员。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>然而要记住，无论你对同一个模块使用了多少次 import 语句，该模块都只会被执行一次。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在导出模块的代码执行之后，已被实例化的模块就被保留在内存中，并随时都能被其他 import 所引用.</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import { sum } from &quot;./example.js&quot;;
import { multiply } from &quot;./example.js&quot;;
import { magicNumber } from &quot;./example.js&quot;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>尽管此处的模块使用了三个 import 语句，但 example.js 只会被执行一次。若同一个应用中的其他模块打算从 example.js 导入绑定，则那些模块都会使用这段代码中所用的同一个模块实例。</p><h1 id="重命名导入" tabindex="-1"><a class="header-anchor" href="#重命名导入" aria-hidden="true">#</a> 重命名导入</h1><p>与导出相同，我们同样可以重命名导入的绑定：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import { sum as add} from &#39;./example.js&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h1 id="导入默认值" tabindex="-1"><a class="header-anchor" href="#导入默认值" aria-hidden="true">#</a> 导入默认值</h1><p>如果一个模块导出了默认值，那么可以这样导入默认值：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import sum from &quot;./example.js&quot;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这个导入语句从 example.js 模块导入了其默认值。注意此处并未使用花括号，与之前在非默认的导入中看到的不同。本地名称 sum 被用于代表目标模块所默认导出的函数，因此无需使用花括号。</p><p>如果一个模块既导出了默认值、又导出了一个或更多非默认的绑定的模块：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>export let color = &quot;red&quot;;

export default function(num1, num2) {
    return num1 + num2;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以像下面这样使用一条import语句来导入它的所有导出绑定：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import sum,{color} from &quot;./example.js&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>逗号将默认的本地名称与非默认的名称分隔开，后者仍旧被花括号所包裹。 要记住在 import 语句中** 默认名称必须位于非默认名称之前。 **</p><h1 id="导入的再导出" tabindex="-1"><a class="header-anchor" href="#导入的再导出" aria-hidden="true">#</a> 导入的再导出</h1><p>有时想在当前的模块中将已导入的内容再导出去，可以像下面这样写：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import {sum} from &#39;./example.js&#39;
……
export {sum}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>但是有一种更简洁的方法：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>export {sum} from &#39;./example.js&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>同样可以重命名：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>export { sum as add } from &quot;./example.js&quot;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>也可以使用完全导出：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>export * from &quot;./example.js&quot;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h1 id="限制" tabindex="-1"><a class="header-anchor" href="#限制" aria-hidden="true">#</a> 限制</h1><p>export 与 import 都有一个重要的限制，那就是它们必须被用在其他语句或表达式的外部，而不能使用在if等代码块内部。原因之一是模块语法需要让 JS 能静态判断需要导出什么，正因为此，你只能在模块的顶级作用域使用 export与import。</p>`,52);function v(o,p){const i=a("center");return d(),s("div",null,[l(i,null,{default:r(()=>[e(" ES6正式提出了内置的模块化语法，我们在浏览器端无需额外引入requirejs来进行模块化 。 ")]),_:1}),t(" more "),e(" ** ES6中的模块有以下特点： ** 1. 模块自动运行在严格模式下 2. 在模块的顶级作用域创建的变量，不会被自动添加到共享的全局作用域，它们只会在模块顶级作用域的内部存在； 3. 模块顶级作用域的 this 值为 undefined 4. 对于需要让模块外部代码访问的内容，模块必须导出它们 "),c])}const b=n(m,[["render",v],["__file","ES6-Modules.html.vue"]]);export{b as default};
