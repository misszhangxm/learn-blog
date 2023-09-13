import{_ as d,F as l,V as a,W as r,$ as v,a1 as t,Z as c,Y as e,a0 as i,X as n}from"./framework-fd1dac66.js";const u={},m=n("h1",{id:"类的声明",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#类的声明","aria-hidden":"true"},"#"),e(" 类的声明")],-1),o=i(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>class Remou {
    constructor(name,age) {
      this.name = name;
      this.age = age;
    }
  }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="不存在变量提升" tabindex="-1"><a class="header-anchor" href="#不存在变量提升" aria-hidden="true">#</a> 不存在变量提升</h2><p>类不存在变量提升（hoist），这一点与 ES5 完全不同。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>new Foo(); // ReferenceError
class Foo {}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，Foo类使用在前，定义在后，这样会报错，因为 ES6 不会把类的声明提升到代码头部。这种规定的原因与下文要提到的继承有关，必须保证子类在父类之后定义。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
  let Foo = class {};
  class Bar extends Foo {
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的代码不会报错，因为Bar继承Foo的时候，Foo已经有定义了。但是，如果存在class的提升，上面代码就会报错，因为class会被提升到代码头部，而let命令是不提升的，所以导致Bar继承Foo的时候，Foo还没有定义。</p><h1 id="类的表达式" tabindex="-1"><a class="header-anchor" href="#类的表达式" aria-hidden="true">#</a> 类的表达式</h1><p>一个** 类表达式 **是定义一个类的另一种方式。类表达式可以是被命名的或匿名的。赋予一个命名类表达式的名称是类的主体的本地名称。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//匿名的类
let Rou = class {
    constructor(name,age) {
      this.name = name;
      this.age = age;
    }
  }

//命名的类
let Rou = class Remou{
    constructor(name,age) {
      this.name = name;
      this.age = age;
    }
  }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>** 注意: ** 类<strong>表达式</strong>也同样受到<strong>类声明</strong>中提到的提升问题的困扰。</p><hr><h1 id="类的方法和定义" tabindex="-1"><a class="header-anchor" href="#类的方法和定义" aria-hidden="true">#</a> 类的方法和定义</h1><br>`,14),b=i(`<h2 id="严格模式" tabindex="-1"><a class="header-anchor" href="#严格模式" aria-hidden="true">#</a> 严格模式</h2><blockquote><p>类和模块的内部，默认就是严格模式，所以不需要使用use strict指定运行模式。只要你的代码写在类或模块之中，就只有严格模式可用。</p></blockquote><blockquote><p>考虑到未来所有的代码，其实都是运行在模块之中，所以 ES6 实际上把整个语言升级到了严格模式。</p></blockquote><p>类声明和类表达式的主体都执行在严格模式下。比如，构造函数，静态方法，原型方法，getter和setter都在严格模式下执行。</p><h2 id="constructor-方法" tabindex="-1"><a class="header-anchor" href="#constructor-方法" aria-hidden="true">#</a> constructor 方法</h2><p><span style="display:inline-block;background-color:#999;">constructor</span>方法是类的默认方法，通过new命令生成对象实例时，自动调用该方法。一个类必须有<span style="display:inline-block;background-color:#999;">constructor</span>方法，如果没有显式定义，一个空的constructor方法会被默认添加。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>class Point {
}

// 等同于
class Point {
  constructor() {}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，定义了一个空的类Point，JavaScript 引擎会自动为它添加一个空的constructor方法。</p><p>constructor方法默认返回实例对象（即this），完全可以指定返回另外一个对象。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>class Foo {
  constructor() {
    return Object.create(null);
  }
}

new Foo() instanceof Foo
// false
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，constructor函数返回一个全新的对象，结果导致实例对象不是Foo类的实例。</p><hr><p>类必须使用new调用，否则会报错。这是它跟普通构造函数的一个主要区别，后者不用new也可以执行。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>class Foo {
  constructor() {
    return Object.create(null);
  }
}

Foo()
// TypeError: Class constructor Foo cannot be invoked without &#39;new&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="类的实例化对象" tabindex="-1"><a class="header-anchor" href="#类的实例化对象" aria-hidden="true">#</a> 类的实例化对象</h1><p>生成类的实例对象的写法，与 ES5 完全一样，也是使用new命令。前面说过，如果忘记加上new，像函数那样调用Class，将会报错。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>class Point {
  // ...
}

// 报错
var point = Point(2, 3);

// 正确
var point = new Point(2, 3);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>与 ES5 一样，实例的属性除非显式定义在其本身（即定义在this对象上），否则都是定义在原型上（即定义在class上）。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//定义类
class Point {

  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  toString() {
    return &#39;(&#39; + this.x + &#39;, &#39; + this.y + &#39;)&#39;;
  }

}

var point = new Point(2, 3);

point.toString() // (2, 3)

point.hasOwnProperty(&#39;x&#39;) // true
point.hasOwnProperty(&#39;y&#39;) // true
point.hasOwnProperty(&#39;toString&#39;) // false
point.__proto__.hasOwnProperty(&#39;toString&#39;) // true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，x和y都是实例对象point自身的属性（因为定义在this变量上），所以hasOwnProperty方法返回true，而toString是原型对象的属性（因为定义在Point类上），所以hasOwnProperty方法返回false。这些都与 ES5 的行为保持一致。</p><p>与 ES5 一样，类的所有实例共享一个原型对象。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var p1 = new Point(2,3);
var p2 = new Point(3,2);

p1.__proto__ === p2.__proto__
//true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，p1和p2都是Point的实例，它们的原型都是Point.prototype，所以__proto__属性是相等的。<br> 这也意味着，可以通过实例的__proto__属性为“类”添加方法。</p><p>__proto__ 并不是语言本身的特性，这是各大厂商具体实现时添加的私有属性，虽然目前很多现代浏览器的 JS 引擎中都提供了这个私有属性，但依旧不建议在生产中使用该属性，避免对环境产生依赖。生产环境中，我们可以使用 Object.getPrototypeOf 方法来获取实例对象的原型，然后再来为原型添加方法/属性。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var p1 = new Point(2,3);
var p2 = new Point(3,2);

p1.__proto__.printName = function () { return &#39;Oops&#39; };

p1.printName() // &quot;Oops&quot;
p2.printName() // &quot;Oops&quot;

var p3 = new Point(4,2);
p3.printName() // &quot;Oops&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码在p1的原型上添加了一个printName方法，由于p1的原型就是p2的原型，因此p2也可以调用这个方法。而且，此后新建的实例p3也可以调用这个方法。这意味着，使用实例的__proto__属性改写原型，必须相当谨慎，不推荐使用，因为这会改变“类”的原始定义，影响到所有实例。</p><h1 id="class-表达式" tabindex="-1"><a class="header-anchor" href="#class-表达式" aria-hidden="true">#</a> Class 表达式</h1><p>与函数一样，类也可以使用表达式的形式定义。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const MyClass = class Me {
  getClassName() {
    return Me.name;
  }
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码使用表达式定义了一个类。需要注意的是，这个类的名字是MyClass而不是Me，Me只在 Class 的内部代码可用，指代当前类。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let inst = new MyClass();
inst.getClassName() // Me
Me.name // ReferenceError: Me is not defined
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码表示，Me只在 Class 内部有定义。<br> 如果类的内部没用到的话，可以省略Me，也就是可以写成下面的形式。</p><p><code>const MyClass = class { /* ... */ };</code> 采用 Class 表达式，可以写出立即执行的 Class。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let person = new class {
  constructor(name) {
    this.name = name;
  }

  sayName() {
    console.log(this.name);
  }
}(&#39;张三&#39;);

person.sayName(); // &quot;张三&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="上面代码中-person是一个立即执行的类的实例。" tabindex="-1"><a class="header-anchor" href="#上面代码中-person是一个立即执行的类的实例。" aria-hidden="true">#</a> 上面代码中，person是一个立即执行的类的实例。</h2><h1 id="私有方法" tabindex="-1"><a class="header-anchor" href="#私有方法" aria-hidden="true">#</a> 私有方法</h1><p>私有方法是常见需求，但 ES6 不提供，只能通过变通方法模拟实现。</p><p>一种做法是在命名上加以区别。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>class Widget {

  // 公有方法
  foo (baz) {
    this._bar(baz);
  }

  // 私有方法
  _bar(baz) {
    return this.snaf = baz;
  }

  // ...
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，_bar方法前面的下划线，表示这是一个只限于内部使用的私有方法。但是，这种命名是不保险的，在类的外部，还是可以调用到这个方法。<br> 另一种方法就是索性将私有方法移出模块，因为模块内部的所有方法都是对外可见的。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>class Widget {
  foo (baz) {
    bar.call(this, baz);
  }

  // ...
}

function bar(baz) {
  return this.snaf = baz;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，foo是公有方法，内部调用了bar.call(this, baz)。这使得bar实际上成为了当前模块的私有方法。<br></p><p>还有一种方法是利用Symbol值的唯一性，将私有方法的名字命名为一个Symbol值。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const bar = Symbol(&#39;bar&#39;);
const snaf = Symbol(&#39;snaf&#39;);

export default class myClass{

  // 公有方法
  foo(baz) {
    this[bar](baz);
  }

  // 私有方法
  [bar](baz) {
    return this[snaf] = baz;
  }

  // ...
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，bar和snaf都是Symbol值，导致第三方无法获取到它们，因此达到了私有方法和私有属性的效果。</p><h1 id="this-的指向" tabindex="-1"><a class="header-anchor" href="#this-的指向" aria-hidden="true">#</a> this 的指向</h1><p>类的方法内部如果含有this，它默认指向类的实例。但是，必须非常小心，一旦单独使用该方法，很可能报错。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>class Logger {
  printName(name = &#39;there&#39;) {
    this.print(\`Hello \${name}\`);
  }

  print(text) {
    console.log(text);
  }
}

const logger = new Logger();
const { printName } = logger;
printName(); // TypeError: Cannot read property &#39;print&#39; of undefined
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，printName方法中的this，默认指向Logger类的实例。但是，如果将这个方法提取出来单独使用，this会指向该方法运行时所在的环境，因为找不到print方法而导致报错。<br> 一个比较简单的解决方法是，在构造方法中绑定this，这样就不会找不到print方法了。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>class Logger {
  constructor() {
    this.printName = this.printName.bind(this);
  }

  // ...
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>另一种解决方法是使用箭头函数。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>class Logger {
  constructor() {
    this.printName = (name = &#39;there&#39;) =&gt; {
      this.print(\`Hello \${name}\`);
    };
  }

  // ...
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>还有一种解决方法是使用Proxy，获取方法的时候，自动绑定this。(目前水平达不到先记录一下)</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function selfish (target) {
  const cache = new WeakMap();
  const handler = {
    get (target, key) {
      const value = Reflect.get(target, key);
      if (typeof value !== &#39;function&#39;) {
        return value;
      }
      if (!cache.has(value)) {
        cache.set(value, value.bind(target));
      }
      return cache.get(value);
    }
  };
  const proxy = new Proxy(target, handler);
  return proxy;
}

const logger = selfish(new Logger());
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="name属性" tabindex="-1"><a class="header-anchor" href="#name属性" aria-hidden="true">#</a> name属性</h1><p>由于本质上，ES6 的类只是 ES5 的构造函数的一层包装，所以函数的许多特性都被Class继承，包括name属性。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>class Point {}
Point.name // &quot;Point&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="name属性总是返回紧跟在class关键字后面的类名。" tabindex="-1"><a class="header-anchor" href="#name属性总是返回紧跟在class关键字后面的类名。" aria-hidden="true">#</a> name属性总是返回紧跟在class关键字后面的类名。</h2><h1 id="class-的取值函数-getter-和存值函数-setter" tabindex="-1"><a class="header-anchor" href="#class-的取值函数-getter-和存值函数-setter" aria-hidden="true">#</a> Class 的取值函数（getter）和存值函数（setter）</h1><p>与 ES5 一样，在“类”的内部可以使用get和set关键字，对某个属性设置存值函数和取值函数，拦截该属性的存取行为。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>class MyClass {
  constructor() {
    // ...
  }
  get prop() {
    return &#39;getter&#39;;
  }
  set prop(value) {
    console.log(&#39;setter: &#39;+value);
  }
}

let inst = new MyClass();

inst.prop = 123;
// setter: 123

inst.prop
// &#39;getter&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，prop属性有对应的存值函数和取值函数，因此赋值和读取行为都被自定义了。<br> 存值函数和取值函数是设置在属性的 Descriptor 对象上的。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>class CustomHTMLElement {
  constructor(element) {
    this.element = element;
  }

  get html() {
    return this.element.innerHTML;
  }

  set html(value) {
    this.element.innerHTML = value;
  }
}

var descriptor = Object.getOwnPropertyDescriptor(
  CustomHTMLElement.prototype, &quot;html&quot;
);

&quot;get&quot; in descriptor  // true
&quot;set&quot; in descriptor  // true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="上面代码中-存值函数和取值函数是定义在html属性的描述对象上面-这与-es5-完全一致。" tabindex="-1"><a class="header-anchor" href="#上面代码中-存值函数和取值函数是定义在html属性的描述对象上面-这与-es5-完全一致。" aria-hidden="true">#</a> 上面代码中，存值函数和取值函数是定义在html属性的描述对象上面，这与 ES5 完全一致。</h2><h1 id="class-的静态方法" tabindex="-1"><a class="header-anchor" href="#class-的静态方法" aria-hidden="true">#</a> Class 的静态方法</h1><p>类相当于实例的原型，所有在类中定义的方法，都会被实例继承。如果在一个方法前，加上static关键字，就表示该方法不会被实例继承，而是直接通过类来调用，这就称为“静态方法”。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>class Foo {
  static classMethod() {
    return &#39;hello&#39;;
  }
}

Foo.classMethod() // &#39;hello&#39;

var foo = new Foo();
foo.classMethod()
// TypeError: foo.classMethod is not a function
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，Foo类的classMethod方法前有static关键字，表明该方法是一个静态方法，可以直接在Foo类上调用（Foo.classMethod()），而不是在Foo类的实例上调用。如果在实例上调用静态方法，会抛出一个错误，表示不存在该方法。<br></p><blockquote><p>注意，如果静态方法包含this关键字，这个this指的是类，而不是实例。</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>class Foo {
  static bar () {
    this.baz();
  }
  static baz () {
    console.log(&#39;hello&#39;);
  }
  baz () {
    console.log(&#39;world&#39;);
  }
}

Foo.bar() // hello
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，静态方法bar调用了this.baz，这里的this指的是Foo类，而不是Foo的实例，等同于调用Foo.baz。另外，从这个例子还可以看出，静态方法可以与非静态方法重名。<br> 父类的静态方法，可以被子类继承。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>class Foo {
  static classMethod() {
    return &#39;hello&#39;;
  }
}

class Bar extends Foo {
}

Bar.classMethod() // &#39;hello&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，父类Foo有一个静态方法，子类Bar可以调用这个方法。<br> 静态方法也是可以从super对象上调用的。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>class Foo {
  static classMethod() {
    return &#39;hello&#39;;
  }
}

class Bar extends Foo {
  static classMethod() {
    return super.classMethod() + &#39;, too&#39;;
  }
}

Bar.classMethod() // &quot;hello, too&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="class-的静态属性和实例属性" tabindex="-1"><a class="header-anchor" href="#class-的静态属性和实例属性" aria-hidden="true">#</a> Class 的静态属性和实例属性</h1><p>静态属性指的是 Class 本身的属性，即Class.propName，而不是定义在实例对象（this）上的属性。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>class Foo {
}

Foo.prop = 1;
Foo.prop // 1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的写法为Foo类定义了一个静态属性prop。</p><p>目前，只有这种写法可行，因为 ES6 明确规定，Class 内部只有静态方法，没有静态属性。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 以下两种写法都无效
class Foo {
  // 写法一
  prop: 2

  // 写法二
  static prop: 2
}

Foo.prop // undefined
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="new-target-属性" tabindex="-1"><a class="header-anchor" href="#new-target-属性" aria-hidden="true">#</a> new.target 属性</h1><p>new是从构造函数生成实例对象的命令。ES6 为new命令引入了一个new.target属性，该属性一般用在构造函数之中，返回new命令作用于的那个构造函数。如果构造函数不是通过new命令调用的，new.target会返回undefined，因此这个属性可以用来确定构造函数是怎么调用的。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function Person(name) {
  if (new.target !== undefined) {
    this.name = name;
  } else {
    throw new Error(&#39;必须使用 new 命令生成实例&#39;);
  }
}

// 另一种写法
function Person(name) {
  if (new.target === Person) {
    this.name = name;
  } else {
    throw new Error(&#39;必须使用 new 命令生成实例&#39;);
  }
}

var person = new Person(&#39;张三&#39;); // 正确
var notAPerson = Person.call(person, &#39;张三&#39;);  // 报错
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码确保构造函数只能通过new命令调用。</p><p>Class 内部调用new.target，返回当前 Class。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>class Rectangle {
  constructor(length, width) {
    console.log(new.target === Rectangle);
    this.length = length;
    this.width = width;
  }
}

var obj = new Rectangle(3, 4); // 输出 true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>需要注意的是，子类继承父类时，new.target会返回子类。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>class Rectangle {
  constructor(length, width) {
    console.log(new.target === Rectangle);
    // ...
  }
}

class Square extends Rectangle {
  constructor(length) {
    super(length, length);
  }
}

var obj = new Square(3); // 输出 false
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，new.target会返回子类。</p><p>利用这个特点，可以写出不能独立使用、必须继承后才能使用的类。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>class Shape {
  constructor() {
    if (new.target === Shape) {
      throw new Error(&#39;本类不能实例化&#39;);
    }
  }
}

class Rectangle extends Shape {
  constructor(length, width) {
    super();
    // ...
  }
}

var x = new Shape();  // 报错
var y = new Rectangle(3, 4);  // 正确
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，Shape类不能被实例化，只能用于继承。</p><p>注意，在函数外部，使用new.target会报错。</p>`,93);function p(h,g){const s=l("center");return a(),r("div",null,[v(s,null,{default:t(()=>[m]),_:1}),c(" more "),e(" 定义一个类的一种方法是使用一个类声明。要声明一个类，你可以使用带有class关键字的类名 "),o,e(" > 一个类的类体是一对花括号 {} 中的部分。这是你定义类成员的位置，如方法或构造函数。 "),b])}const f=d(u,[["render",p],["__file","Class-类-初识.html.vue"]]);export{f as default};
