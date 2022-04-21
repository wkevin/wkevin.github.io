---
title: git submodule 操作
date: 2014-05-05 13:59:46 +8000
categories: 
  - it
tags: 
  - git
  - submodule
---


## 常规操作
发布者：维护父项目与submodule之间的依赖关系
```
$ git submodule add https://......
$ git commit
```

使用者：使用父项目，透明处理或更新submodule，但不修改依赖关系
```
$ git clone https://github.com/wkevin/iOS.grocery.git
$ cd iOS.grocery
$ git submodule init
$ git submodule update
```

## 存在的问题
1. 使用者 update 后， submodule 的本地目录中代码不是最新的
2. 使用者 update 后， submodule 的HEAD处于 detached（游离）状态

git submodule 要实现“父项目依赖于子项目”，可以有两种**依赖**方式：
（1）依赖于某个指定commit，不一定是最新
（2）依赖于某个子项目的branch

无论（1）还是（2），.git 库中都记录着 submodule 的一个 commit id，用来记录依赖关系，和跟踪本地工作拷贝的修改。

常规操作中（即默认）是第（1），所以 `git submodule update` 会按照指定的 commit id 来checkout，而不是 master 的最新。
使用者可以使用下面的命令递归更新所有 submodule  
```
$ git submodule foreach --recursive git fetch origin
```
然后记得进去 git merge

方式（2）是这样操作的：
发布者：
```
$ git submodule add -b branch-xxx https://......
```
使用者：
```
$ git submodule update --remote
```
这样clone出来的 submodule 将会是 branch-xxx 分支的最新 commit

无论是方式（1）or（2），都会存在“submodule 处于 detached 状态”问题
```
$ cd submodule-xxx
$ git branch -avv
*(detached from 53d8811) 53d8811 Create README.md
  master                  0163586 [origin/master] Update README.md
  remotes/origin/HEAD     -> origin/master
  remotes/origin/master   0163586 Update README.md
```
**只好进去把本地目录切到想要的分支上：**
```
$ cd submodule-xxx
$ git checkout branch-xxx
```

## 推荐操作
发布者：
```
$ git submodule add -b master https://......
$ git commit
```
使用者：
```
$ git clone https://github.com/wkevin/iOS.grocery.git
$ cd iOS.grocery
$ git submodule init
$ git submodule update --remote
$ git submodule foreach --recursive git fetch origin
```

不要试图把最后一句换成
```
$ git submodule foreach --recursive git pull origin master
```
git 的branch很活跃，到底哪个才是你想要的，最好确认好了再merge。

