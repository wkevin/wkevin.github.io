---
title: git submodule 的重命名
date: 2014-05-20 00:45:23 +8000
categories: 
    - it
tags:
    - git
    - submodule
---

`git help submodule` 文档中找不到如何 mv 一个已有的 submodule，stackoverflow上可以搜到很多这个问题的解决办法，大多和本文的内容一样，晦涩而繁杂，没办法，好像没有完美而简洁的办法。
本文只是分析 stackoverflow 上的解决办法，进行一些梳理和总结。

## 要素
重命名一个submodule，要涉及以下几个方面：

1.	.gitmodules
	1.1.	.submodules
	1.2.	path
2.	.git/config  //基本不需要修改 
3.	.git/modules/
	3.1.	oldPath/xxx/config -- worktree
	3.2.	oldPath/submodule -->  newPath/submodule
4.	submodule/
	4.1.	创建 newPath/submodule
	4.2.	mv oldPaht/submodule/*.* --> newPath/submodule/ 
	4.3.	newPath/submodule/.git -- gitdir
	4.4.	删除 oldPath/submodule

## mv 操作
如何做“重命名”（mv）操作呢？两种方法：   

1.	一步步手工，把上面的1、2、3、4全部做完，就OK了
2.	或者用 `git mv ...`实现部分，然后剩下的手工

**详细说一下第2个方法**
`git mv oldpath/submodule  newpath/  ` —— 其中存在一个陷进，参见本文最后一段
**上面命令执行后会发生什么？**
*	如果：submodule 没做过 `git submodule update`
	*	2、3、4.2、4.3都还没哟偶 
    *	1.2、4.1 会做
*	如果：submodule 已做过 `git submodule update`
    *	1.1和2只是名字，没修改，不修改也没关系
    *	1.2会修改
    *	3.1 和 4.2 是一对，（3.1指向4.2），都会修改
    *	3.2 和 4.3 是一对，（4.3指向3.2），都没修改 —— **这部分还需要手工修改**，但不改也是可以的
    *	4.1 必然会做修改，没啥说的

## merge 操作

维护 submodule 的人做完了重命名，自己爽快了，使用 submodule 的同学的痛苦就来了。

`git pull` 或 `git merge ...` 
**上面的命令执行后又发生了什么改变呢？**  
*	如果：submodule 没做过 `git submodule update`
	*	修改：1.2、4.1、4.4
*	如果：submodule 已做过 `git submodule update`
	*	修改：1.2、4.1
    *	没改：3.1、3.2、4.2、4.3
    *	没改：4.4 —— oldpath/submdulle 没有删，但已经不受 git 管理，只能手工删除了
    *	`git submdule update newpath/submodule`：
    	*	3.1-OK
        *	4.2-OK，其实应该是从 .git/modules/submodule/ 里面恢复的
        *	4.3-OK

## 总结

|No.|Contents|`git mv old/subm new/`|`git merge newbranch`|`git submodule update`|
|---|--------|----------------------|---------------------|----------------------|
|1.1|.gitmodules -- submodules                                          |  |  |  |
|1.2|.gitmodules -- path                                                | Done | Done |  |
|2. |.git/config //受 `git submodule init/deinit` 影响                  |  |  |  |
|3.1|.git/modules/oldPath/submodule/config -- worktree                  | Done |  | Done |
|3.2|.git/modules/oldPath/submodule —> .git/modules/newPath/submodule   |  |  |  |
|4.1|创建 newPath/submodule                                             | Done | Done |  |
|4.2|拷贝 oldPaht/submodule/. —> newPath/submodule/                       | Done |  | Done |
|4.3|newPath/submodule/.git -- gitdir                                   |  |  | Done |
|4.4|删除 oldPath/submodule                                             | Try | Try |  |
|   |说明| 4.3指向3.2，两个是一对，同时不修改| 和git clone类似，新的submodule路径下没有东西 |  |  |

## 其他
**git mv 的陷阱**
```
$ git mv ui/ext.UIActionSheet/AHKActionSheet/ freshman/ui/ext.UIActionSheet
$ ls freshman/ui/ext.UIActionSheet/     
//什么都没有，错误


$ mkdir freshman/ui/ext.UIButton
$ git mv ui/ext.UIButton/FlatButtons/ freshman/ui/ext.UIButton/
$ ls freshman/ui/ext.UIButton/
FlatButtons
```
对比上面两例，再查看 git mv 的help

    to <destination>. In the second form, the last argument has to be an existing directory; the given sources will be moved into this directory.

结论：目标文件夹必须存在，否则就成了目标

