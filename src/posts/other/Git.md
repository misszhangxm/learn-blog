

## 基础配置

```

# 1.查看git配置信息
$ git config --list
 
 
# 2.查看git用户名、密码、邮箱的配置
$ git config user.name
$ git config user.password
$ git config user.email
 
 
# 3.设置git用户名、密码、邮箱的配置
$ git config user.name "freedom"
$ git config user.password "123456"
$ git config user.email "1548429568@qq.com"
# 3.设置git用户名、密码、邮箱的配置（全局配置）
$ git config --global user.name 用户命
$ git config --global user.name freedom
$ git config --global user.password 密码
$ git config --global user.password abc0506abc
$ git config --global user.password 邮箱
$ git config --global user.email "1548429568@qq.com"
 
 
# 4.修改git用户名、密码、邮箱的配置（跟设置语法一样，没有用户名就添加，有了用户名就修改）
$ git config user.name "freedom"
# 4.修改git用户名、密码、邮箱的配置（全局配置）
$ git config --global user.name "freedom"

```

## 仓库相关

1. **查看**远程仓库信息（远程地址）

   `git remote -v`

2. **删除**关联远程仓库信息

   `git remote rm origin`

3. **添加**关联远程仓库, URL为新地址。

   `git remote add origin URL`

4. **更换**远程仓库地址，URL为新地址。

   `git remote set-url origin URL`

5. 切换分支

   `git branch name`

   `git checkout -b branchname` 创建并切换到新的分支

   这个命令是将`git branch newbranch` (新建分支)和`git checkout newbranch`（切换分支）合在一起的结果。

6. 

​		

​		

## 撤销提交

```
git reset [--soft / --hard]  HEAD^ 
```

- `--soft `  不删除工作空间的改动代码 ，撤销commit，不撤销git add file
- `--hard`  删除工作空间的改动代码，撤销commit且撤销add
- `HEAD^`    表示上一个版本，即上一次的commit，也可以写成HEAD~1 
- HEAD 回退暂存区里的文件



## 修改注释

```
git commit --amend    进入vim编辑器，修改注释
```



## gitee 提交代码

Git 设置:

```
git config [ --global ] user.name "Habit"
git config [ --global ] user.email "mrceel@163.com"
```

创建 git 仓库:

```
mkdir asdf
cd asdf
git init 
touch README.md
git add README.md
git commit -m "first commit"
git remote add origin https://gitee.com/mrceel/asdf.git
git push -u origin "master"
```

已有仓库?

```
cd existing_git_repo
git remote add origin https://gitee.com/mrceel/asdf.git
git push -u origin "master"
```















创建 git 仓库:



```plain
mkdir asdf
cd asdf
git init 
touch README.md
git add README.md
git commit -m "first commit"
git remote add origin https://gitee.com/mrceel/asdf.git
git push -u origin "master"
```



已有仓库?



```plain
cd existing_git_repo
git remote add origin https://gitee.com/mrceel/asdf.git
git push -u origin "master"
```
