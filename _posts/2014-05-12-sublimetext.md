---
title: Sublime Text
date: 2014-05-12 16:55:40 +8000
categories: 
    - it
tags: 
    - sublime
---

ST3 比 ST2 加强了 project 的功能，如“F12 - 跳转到定义”，使得ST更像个IDE了。

下面按最常用、最喜欢的菜单排序

## 切换到 vi 模式
*	Setting-Default：拷贝 `"ignored_packages": ["Vintage"]` —— Default是修改不了的
*	Setting-User：粘贴为 `"ignored_packages": [ ]` —— User的设置会覆盖Default
*	基本的字符、搜索、行、列……操作都是使用vi的快捷键实现，就不去再记忆一份ST的快捷键了

## Goto
*	（搜索后）跳转
	*	跳转到文件：**Ctrl + P**：
	*	跳转到 symbol：**Ctrl + P，`@`**，或 **Ctrl + R**
	*	跳转到 word：**Ctrl + P，`#`**，或 **Ctrl + ;**
	*	跳转到 line：**Ctrl + P，`:`**，或 **Ctrl + g**
	*	跳转到 定义：**F12** —— ST3中新增，需要文件首先加入到project中
*	向回和向前跳转：**Alt + `-`** 和 **Alt + Shift + `-`**
*	文件切换
	*	Tab直接定位：**Alt + 1/2/3/...**
	*	Tab间切换：**Ctrl + PageDown/Up**
	*	头文件和源文件之间切换：**Alt + O**

## Select
*	Multiple Selections（多重选择）
	*	**Ctrl + 鼠标左键**：同时在多个地方放置光标，然后可进行同时的修改、删除等
	*	**Ctrl + D**：选中相同的word
		*	依次 **Ctrl + D**，选中每一个想要的，然后可进行同时的修改、删除等
		*	遇到某个不想要的，用 **Ctrl + K** & **Ctrl + D** 跳过
		*	取消选定：**Ctrl + U**
	*	上述两种操作也可以组合使用：先 Ctrl+D，在Ctrl+左键选……
*	Column Selection
	*	Windows： 	**Ctrl + Alt + Up/Down**，或者**Shift + 右键拖动**
	*	Linux： **Alt + ⇧ + Up/Down**
	*	OS X： **⌃ + ⇧ + Up/Down**

## View
*	Groups：
	*	新建 Group：**Ctrl + K** & **Ctrl + Shift + Up**
	*	新建 Group，并将当前文件挪过去：**Ctrl + K** & **Ctrl + Up**
	*	关闭 Group：**Ctrl + K** & **Ctrl + Down**
	*	光标在Group之间切换：**Ctrl + 1/2/3/...**
	*	文件在Group之间挪动：**Ctrl + Shift + 1/2/3/...** -- 当前光标所在文件被挪到指定group

## Tools
*	Command Pallete（命令操作）：**Ctrl + Shift + P**，[官方文档](http://docs.sublimetext.info/en/latest/reference/commands.html)

## Plugin
请百度