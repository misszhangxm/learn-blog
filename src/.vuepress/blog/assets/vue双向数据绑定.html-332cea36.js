import{_ as e,V as r,W as p,a0 as i}from"./framework-fd1dac66.js";const t="/assets/image-20230907213433886-aa9a35b4.png",a={},l=i('<p>三部分</p><ol><li>数据层 model 存储数据及业务逻辑</li><li>视图层view 展示效果</li><li>业务逻辑层 viewModel 数据 视图</li></ol><p>数据 视图</p><ol><li><p>observer : 对所有数据的属性进行监听</p></li><li><p>complier : 更新</p></li><li><p>new Vue()</p></li><li><p>Observer 劫持监听所有的属性 通知变化Dep watcher 视图更新 Updater</p></li><li><p>Compiler 订阅数据变化 watcher</p></li></ol><h2 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a> <img src="'+t+'" alt="" class="imgcenter" loading="lazy"></h2><h4 id="数据双向绑定原理-官方说法" tabindex="-1"><a class="header-anchor" href="#数据双向绑定原理-官方说法" aria-hidden="true">#</a> 数据双向绑定原理（官方说法）</h4><p>通过数据劫持和发布订阅者模式来实现，同时利用Object.defineProperty()劫持各个属性的setter和getter，</p><p>在数据发生改变的时候发布消息给订阅者，触发对应的监听回调渲染视图，也就是说数据和视图时同步的，数据发生改变，视图跟着发生改变，视图改变，数据也会发生改变。</p><p>​ 第一步：需要observer的数据对象进行递归遍历，包括子属性对象的属性，都加上setter和getter</p><p>​ 第二步：compile模板解析指令，把模板中的变量替换成数据，然后初始化渲染视图，同时把每个指令对应的节点绑定上更新函数，添加订阅者，如果数据变化，收到通知，更新视图</p><p>​ 第三步：Watcher订阅者是Observer和Compile之间的通信桥梁，作用：</p><p>​ 1.在自身实例化的时候忘订阅器内添加自己</p><p>​ 2.自身要有一个update()方法</p><p>​ 3.等待属性变动时，调用自身的update方法，触发compile这种的回调</p><p>​ 第四步：MVVM作为数据绑定的入口，整合了observer、compile和watcher三者，通过observer来监听自己的数据变化，通过compile解析模板指令，最后利用watcher把observer和compile联系起来，最终达到数据更新视图更新，视图更新数据更新的效果</p>',15),o=[l];function c(s,n){return r(),p("div",null,o)}const _=e(a,[["render",c],["__file","vue双向数据绑定.html.vue"]]);export{_ as default};
