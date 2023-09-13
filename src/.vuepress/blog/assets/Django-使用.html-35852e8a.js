import{_ as n,V as e,W as s,Z as i,X as a,a0 as l}from"./framework-fd1dac66.js";const d={},t=a("p",null,"安装Django",-1),o=l(`<div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>pip3 install django

<span class="token comment"># 查看版本号等</span>

python <span class="token operator">-</span>m django <span class="token operator">-</span><span class="token operator">-</span>version
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>创建项目</strong></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>django<span class="token operator">-</span>admin startproject mysite
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>回生成以下目录</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>mysite/
    manage.py
    mysite/
        __init__.py
        settings.py
        urls.py
        wsgi.py
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这些目录和文件的用处是：</p><ul><li>最外层的:file: <code>mysite/</code> 根目录只是你项目的容器， Django 不关心它的名字，你可以将它重命名为任何你喜欢的名字。</li><li><code>manage.py</code>: 一个让你用各种方式管理 Django 项目的命令行工具。</li><li>里面一层的 <code>mysite/</code> 目录包含你的项目，它是一个纯 Python 包。它的名字就是当你引用它内部任何东西时需要用到的 Python 包名。 (比如 mysite.urls).</li><li><code>mysite/__init__.py</code>：一个空文件，告诉 Python 这个目录应该被认为是一个 Python 包。如果你是 Python 初学者，阅读官方文档中的 更多关于包的知识。</li><li><code>mysite/settings.py</code>：Django 项目的配置文件。</li><li><code>mysite/urls.py</code>：Django 项目的 URL 声明，就像你网站的“目录”。</li><li><code>mysite/wsgi.py</code>：作为你的项目的运行在 WSGI 兼容的Web服务器上的入口。</li></ul><p><strong>开启服务</strong></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>python manage<span class="token punctuation">.</span>py runserver

<span class="token comment"># 默认使用的是8000端口</span>
<span class="token comment"># 如果想要更换端口增加一个参数即可</span>
python manage<span class="token punctuation">.</span>py runserver <span class="token number">8080</span>


<span class="token comment"># 如果你想要修改服务器监听的IP，在端口之前输入新的。</span>
python manage<span class="token punctuation">.</span>py runserver <span class="token number">0</span><span class="token punctuation">:</span><span class="token number">8000</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>新建一个应用(polls)</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>python manage.py startapp polls

# 结构如下
polls/
    __init__.py
    admin.py
    apps.py
    migrations/
        __init__.py
    models.py
    tests.py
    views.py
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在polls/目录下 <code> views.py</code> 文件中</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> django<span class="token punctuation">.</span>http <span class="token keyword">import</span> HttpResponse

<span class="token keyword">def</span> <span class="token function">index</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">:</span>
	<span class="token keyword">return</span> HttpResponse<span class="token punctuation">(</span><span class="token string">&#39;hello 丽丽&#39;</span><span class="token punctuation">)</span> 

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在polls/目录下新建一个 <code> urls.py</code> 文件 用于配置这个应用的url</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>from django.http import path
from . import views

urlpatterns = [
	path(&#39;&#39;, views.index, name=&#39;index&#39;)
]
# 这里的views指的是views.py views.index 会调用 views.py里面的index函数
&#39;&#39;&#39; 
path() 具有四个参数，两个必须参数：route 和 view，两个可选参数：kwargs 和 name。
path() 参数： route
route 是一个匹配 URL 的准则（类似正则表达式）。当 Django 响应一个请求时，它会从 urlpatterns 的第一项开始，
按顺序依次匹配列表中的项，直到找到匹配的项。

这些准则不会匹配 GET 和 POST 参数或域名。例如，URLconf 在处理请求 https://www.example.com/myapp/ 时，
它会尝试匹配 myapp/ 。处理请求 https://www.example.com/myapp/?page=3 时，也只会尝试匹配 myapp/。

path() 参数： view
当 Django 找到了一个匹配的准则，就会调用这个特定的视图函数，并传入一个 HttpRequest 对象作为第一个参数，
被“捕获”的参数以关键字参数的形式传入。

path() 参数： kwargs
任意个关键字参数可以作为一个字典传递给目标视图函数。

path() 参数： name
为你的 URL 取名能使你在 Django 的任意地方唯一地引用它，尤其是在模板中。
这个有用的特性允许你只改一个文件就能全局地修改某个 URL 模式。
&#39;&#39;&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下一步是要在根 URLconf 文件中指定我们创建的 polls.urls 模块。在 mysite/urls.py 文件的 urlpatterns 列表里插入一个 include()， 如下： mysite/urls.py</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> django<span class="token punctuation">.</span>contrib <span class="token keyword">import</span> admin
<span class="token keyword">from</span> django<span class="token punctuation">.</span>urls <span class="token keyword">import</span> include<span class="token punctuation">,</span> path

urlpatterns <span class="token operator">=</span> <span class="token punctuation">[</span>
    path<span class="token punctuation">(</span><span class="token string">&#39;polls/&#39;</span><span class="token punctuation">,</span> include<span class="token punctuation">(</span><span class="token string">&#39;polls.urls&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    path<span class="token punctuation">(</span><span class="token string">&#39;admin/&#39;</span><span class="token punctuation">,</span> admin<span class="token punctuation">.</span>site<span class="token punctuation">.</span>urls<span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>
<span class="token comment"># include() 是一个url正则匹配  例如： localhost：8000/polls/vue/</span>
<span class="token comment">#     这里他会匹配到第一条path 它会截断与此项匹配的 URL 的部分，</span>
<span class="token comment">#     并将剩余的字符串发送到include里面的polls.urls去处理</span>
<span class="token comment"># 第一个参数 是指 访问的url 例如： localhost：8000/polls/vue/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这时候重启服务访问：localhost：8000/polls/ 成功的话可以看到 <code>hello 丽丽</code></p><hr><p>默认开启的某些应用需要至少一个数据表，所以，在使用他们之前需要在数据库中创建一些表。请执行以下命令： 使用mysql时 settings.py的配置</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>DATABASES = {
    &#39;default&#39;: {
        &#39;ENGINE&#39;: &#39;django.db.backends.mysql&#39;,
        &#39;NAME&#39;: &#39;test&#39;,
        &#39;USER&#39;: &#39;test&#39;,
        &#39;PASSWORD&#39;: &#39;test&#39;,
        &#39;HOST&#39;: &#39;localhost&#39;,
        &#39;PORT&#39;: &#39;3306&#39;,
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>python manage.py migrate #创建表结构
执行这里的时候可能会报错 django.db.utils.OperationalError: (1049, &quot;Unknown database &#39;local&#39;&quot;)
这时候可以进入数据库交互式命令行中使用 &quot;CREATE DATABASE database_name;&quot; 
然后在执行python manage.py migrate #创建表结构

python manage.py makemigrations myapp #告诉django，myapp中的表结构有更新
模型的迁移数据，它被储存在 polls/migrations/0001_initial.py 里。

python manage.py migrate myapp  #执行myapp中的表结构到mysql中
在数据库里创建新定义的模型的数据表：
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>polls/model.py</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>from django.db import models

class Question(models.Model):
    question_text = models.CharField(max_length=200) #varchar
    pub_date = models.DateTimeField(&#39;date published&#39;) #datetime


class Choice(models.Model):
    question = models.ForeignKey(Question, on_delete=models.CASCADE) #外键，关联其它模型，创建关联索引
    choice_text = models.CharField(max_length=200) #varchar
    votes = models.IntegerField(default=0) #int
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以上的类名代表了数据库表名，且继承了models.Model，类里面的字段代表数据表中的字段(name)，数据类型则由CharField（相当于varchar）、DateField（相当于datetime）， max_length 参数限定长度。</p><p>尽管我们没有在models给表设置主键，但是Django会自动添加一个id作为主键。</p><p>我们需要在配置类 INSTALLED_APPS 中添加设置。因为 PollsConfig 类写在文件 polls/apps.py 中，所以它的点式路径是 &#39;polls.apps.PollsConfig&#39;。在文件 mysite/settings.py 中 INSTALLED_APPS 子项添加点式路径后，它看起来像这样 mysite/settings.py</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>INSTALLED_APPS = [
    &#39;polls.apps.PollsConfig&#39;,
    &#39;django.contrib.admin&#39;,
    &#39;django.contrib.auth&#39;,
    &#39;django.contrib.contenttypes&#39;,
    &#39;django.contrib.sessions&#39;,
    &#39;django.contrib.messages&#39;,
    &#39;django.contrib.staticfiles&#39;,
]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>render() 「载入模板，填充上下文，再返回由它生成的 HttpResponse 对象」是一个非常常用的操作流程。 官网例子：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>from django.shortcuts import render

from .models import Question


def index(request):
    latest_question_list = Question.objects.order_by(&#39;-pub_date&#39;)[:5]
    context = {&#39;latest_question_list&#39;: latest_question_list}
    return render(request, &#39;polls/index.html&#39;, context)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,30);function c(p,r){return e(),s("div",null,[t,i(" more "),o])}const u=n(d,[["render",c],["__file","Django-使用.html.vue"]]);export{u as default};
