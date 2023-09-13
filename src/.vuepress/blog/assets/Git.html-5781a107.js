import{_ as i,V as e,W as n,a0 as d}from"./framework-fd1dac66.js";const s={},a=d(`<h2 id="基础配置" tabindex="-1"><a class="header-anchor" href="#基础配置" aria-hidden="true">#</a> 基础配置</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
# 1.查看git配置信息
$ git config --list
 
 
# 2.查看git用户名、密码、邮箱的配置
$ git config user.name
$ git config user.password
$ git config user.email
 
 
# 3.设置git用户名、密码、邮箱的配置
$ git config user.name &quot;freedom&quot;
$ git config user.password &quot;123456&quot;
$ git config user.email &quot;1548429568@qq.com&quot;
# 3.设置git用户名、密码、邮箱的配置（全局配置）
$ git config --global user.name 用户命
$ git config --global user.name freedom
$ git config --global user.password 密码
$ git config --global user.password abc0506abc
$ git config --global user.password 邮箱
$ git config --global user.email &quot;1548429568@qq.com&quot;
 
 
# 4.修改git用户名、密码、邮箱的配置（跟设置语法一样，没有用户名就添加，有了用户名就修改）
$ git config user.name &quot;freedom&quot;
# 4.修改git用户名、密码、邮箱的配置（全局配置）
$ git config --global user.name &quot;freedom&quot;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="仓库相关" tabindex="-1"><a class="header-anchor" href="#仓库相关" aria-hidden="true">#</a> 仓库相关</h2><ol><li><p><strong>查看</strong>远程仓库信息（远程地址）</p><p><code>git remote -v</code></p></li><li><p><strong>删除</strong>关联远程仓库信息</p><p><code>git remote rm origin</code></p></li><li><p><strong>添加</strong>关联远程仓库, URL为新地址。</p><p><code>git remote add origin URL</code></p></li><li><p><strong>更换</strong>远程仓库地址，URL为新地址。</p><p><code>git remote set-url origin URL</code></p></li><li><p>切换分支</p><p><code>git branch name</code></p><p><code>git checkout -b branchname</code> 创建并切换到新的分支</p><p>这个命令是将<code>git branch newbranch</code> (新建分支)和<code>git checkout newbranch</code>（切换分支）合在一起的结果。</p></li><li></li></ol><p>​</p><p>​</p><h2 id="撤销提交" tabindex="-1"><a class="header-anchor" href="#撤销提交" aria-hidden="true">#</a> 撤销提交</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git reset [--soft / --hard]  HEAD^ 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><code>--soft </code> 不删除工作空间的改动代码 ，撤销commit，不撤销git add file</li><li><code>--hard</code> 删除工作空间的改动代码，撤销commit且撤销add</li><li><code>HEAD^</code> 表示上一个版本，即上一次的commit，也可以写成HEAD~1</li><li>HEAD 回退暂存区里的文件</li></ul><h2 id="修改注释" tabindex="-1"><a class="header-anchor" href="#修改注释" aria-hidden="true">#</a> 修改注释</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git commit --amend    进入vim编辑器，修改注释
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="gitee-提交代码" tabindex="-1"><a class="header-anchor" href="#gitee-提交代码" aria-hidden="true">#</a> gitee 提交代码</h2><p>Git 设置:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git config [ --global ] user.name &quot;Habit&quot;
git config [ --global ] user.email &quot;mrceel@163.com&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>创建 git 仓库:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>mkdir asdf
cd asdf
git init 
touch README.md
git add README.md
git commit -m &quot;first commit&quot;
git remote add origin https://gitee.com/mrceel/asdf.git
git push -u origin &quot;master&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>已有仓库?</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>cd existing_git_repo
git remote add origin https://gitee.com/mrceel/asdf.git
git push -u origin &quot;master&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>创建 git 仓库:</p><div class="language-plain line-numbers-mode" data-ext="plain"><pre class="language-plain"><code>mkdir asdf
cd asdf
git init 
touch README.md
git add README.md
git commit -m &quot;first commit&quot;
git remote add origin https://gitee.com/mrceel/asdf.git
git push -u origin &quot;master&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>已有仓库?</p><div class="language-plain line-numbers-mode" data-ext="plain"><pre class="language-plain"><code>cd existing_git_repo
git remote add origin https://gitee.com/mrceel/asdf.git
git push -u origin &quot;master&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,22),l=[a];function t(r,c){return e(),n("div",null,l)}const u=i(s,[["render",t],["__file","Git.html.vue"]]);export{u as default};
