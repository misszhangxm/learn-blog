import{_ as e,F as c,V as o,W as i,X as n,Y as a,$ as l,Z as d,a0 as t}from"./framework-fd1dac66.js";const p={},r={href:"https://mirrors.tuna.tsinghua.edu.cn/anaconda/archive/",target:"_blank",rel:"noopener noreferrer"},m=t(`<p>conda 的包管理： 例如安装<code>scipy</code></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 安装scipy</span>
conda install scipy
<span class="token comment"># conda会从从远程搜索scipy的相关信息和依赖项目，对于python 3.4，conda会同时安装numpy和mkl（运算加速的库）</span>
 
<span class="token comment"># 查看已经安装的packages</span>
conda <span class="token builtin">list</span>
<span class="token comment"># 最新版的conda是从site-packages文件夹中搜索已经安装的包，不依赖于pip，因此可以显示出通过各种方式安装的包</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>conda的一些常用操作如下：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 查看当前环境下已安装的包</span>
conda <span class="token builtin">list</span>
 
<span class="token comment"># 查看某个指定环境的已安装包</span>
conda <span class="token builtin">list</span> <span class="token operator">-</span>n python34
 
<span class="token comment"># 查找package信息</span>
conda search numpy
 
<span class="token comment"># 安装package</span>
conda install <span class="token operator">-</span>n python34 numpy
<span class="token comment"># 如果不用-n指定环境名称，则被安装在当前活跃环境</span>
<span class="token comment"># 也可以通过-c指定通过某个channel安装</span>
 
<span class="token comment"># 更新package</span>
conda update <span class="token operator">-</span>n python34 numpy
 
<span class="token comment"># 删除package</span>
conda remove <span class="token operator">-</span>n python34 numpy
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>前面已经提到，conda将conda、python等都视为package，因此，完全可以使用conda来管理conda和python的版本，例如</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 更新conda，保持conda最新</span>
conda update conda
 
<span class="token comment"># 更新anaconda</span>
conda update anaconda
 
<span class="token comment"># 更新python</span>
conda update python
<span class="token comment"># 假设当前环境是python 3.4, conda会将python升级为3.4.x系列的当前最新版本</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>补充：如果创建新的python环境，比如3.4，运行conda create -n python34 python=3.4之后，conda仅安装python 3.4相关的必须项，如python, pip等，如果希望该环境像默认环境那样，安装anaconda集合包，只需要：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 在当前环境下安装anaconda包集合
conda install anaconda
 
# 结合创建环境的命令，以上操作可以合并为
conda create -n python34 python=3.4 anaconda
# 也可以不用全部安装，根据需求安装自己需要的package即可
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>设置国内镜像 * 如果需要安装很多packages，你会发现conda下载的速度经常很慢，因为Anaconda.org的服务器在国外。所幸的是，清华TUNA镜像源有Anaconda仓库的镜像，我们将其加入conda的配置即可：</li></ul><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 添加Anaconda的TUNA镜像</span>
conda config <span class="token operator">-</span><span class="token operator">-</span>add channels https<span class="token punctuation">:</span><span class="token operator">//</span>mirrors<span class="token punctuation">.</span>tuna<span class="token punctuation">.</span>tsinghua<span class="token punctuation">.</span>edu<span class="token punctuation">.</span>cn<span class="token operator">/</span>anaconda<span class="token operator">/</span>pkgs<span class="token operator">/</span>free<span class="token operator">/</span>
<span class="token comment"># TUNA的help中镜像地址加有引号，需要去掉</span>
 
<span class="token comment"># 设置搜索时显示通道地址</span>
conda config <span class="token operator">-</span><span class="token operator">-</span><span class="token builtin">set</span> show_channel_urls yes
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行完上述命令后，会生成~/.condarc(Linux/Mac)或C:UsersUSER_NAME.condarc文件，记录着我们对conda的配置，直接手动创建、编辑该文件是相同的效果。(如果是在清华镜像下载的安装包好像是不用配置这个，因为他会自动配置好)</p><p>在Anaconda Prompt中利用Anaconda创建一个python3.5的环境，环境名称为tensorflow ，输入下面命令：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>conda create -n tensorflow python=3.5
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>假设我们需要安装Python 3.4，此时，我们需要做的操作如下：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 创建一个名为python34的环境，指定Python版本是3.4（不用管是3.4.x，conda会为我们自动寻找3.4.x中的最新版本）</span>
conda create <span class="token operator">-</span><span class="token operator">-</span>name python34 python<span class="token operator">=</span><span class="token number">3.4</span>
 
<span class="token comment"># 安装好后，使用activate激活某个环境</span>
activate python34 <span class="token comment"># for Windows</span>
source activate python34 <span class="token comment"># for Linux &amp; Mac</span>
<span class="token comment"># 激活后，会发现terminal输入的地方多了python34的字样，实际上，此时系统做的事情就是把默认2.7环境从PATH中去除，再把3.4对应的命令加入PATH</span>
 
<span class="token comment"># 此时，再次输入</span>
python <span class="token operator">-</span><span class="token operator">-</span>version
<span class="token comment"># 可以得到\`Python 3.4.5 :: Anaconda 4.1.1 (64-bit)\`，即系统已经切换到了3.4的环境</span>
 
<span class="token comment"># 如果想返回默认的python 2.7环境，运行</span>
deactivate <span class="token comment"># for Windows ()</span>
source deactivate python34 <span class="token comment"># for Linux &amp; Mac</span>
 
<span class="token comment"># 删除一个已有的环境</span>
conda remove <span class="token operator">-</span><span class="token operator">-</span>name python34 <span class="token operator">-</span><span class="token operator">-</span><span class="token builtin">all</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>本文整理于<code>https://blog.csdn.net/accumulate_zhang/article/details/77371657</code></p>`,16);function v(u,b){const s=c("ExternalLinkIcon");return o(),i("div",null,[n("p",null,[a("Anaconda安装包地址:"),n("a",r,[a("https://mirrors.tuna.tsinghua.edu.cn/anaconda/archive/"),l(s)])]),d(" more "),m])}const h=e(p,[["render",v],["__file","Anaconda.html.vue"]]);export{h as default};
