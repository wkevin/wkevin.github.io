---
title: "使用 Mkdocs 制作项目文档"
date: 2018-12-17 14:28:02 +0800
description: " "
authors: wKevin
categories:
  - it
tags:
  - mkdocs
---

markdown 写的文档，在项目组内外分享时不能要求读者也将就着读 markdown，最好还是读网页的友好形式 —— mkdocs 是个不错的选择。

mkdocs 之前，我都是 `git push` md 文档后，触发 http server 上的 `git pull`，然后利用一些零散的 js 脚本实现 md->html 的动态编译，包括：TOC（目录）、CSS、Theme…… mkdocs 则方便且优雅的完成这一切。

- mkdocs： https://www.mkdocs.org/
- github：https://github.com/mkdocs/mkdocs

## 安装

```
> sudo apt install mkdocs
```

## 创建新项目

```
> mkdocs new k-project
```

## 启动自带的 http-server

```
> mkdocs serve

INFO    -  Building documentation...
[I 181213 15:43:02 server:271] Serving on http://127.0.0.1:8000
```

## 撰写和预览

下图左边是 VSCode 打开的 k-project，右边是浏览器打开 `http://127.0.0.1:8000`  
新建的项目只有 2 个文件：

- mkdocs.yml —— **配置文件**
- docs/index.md —— 自动生成的官方宣传页
- 下图配置了网站的名字（site_name）

![snapshot1.png](./images/snapshot1.png)

**docs** 目录下就自由的写文档吧，我随手创建了几个：

- about.md
- foo/bar.md
- develop/hello.md
- develop/world.md
- img/ 几张图片

mkdocs 会自动把所有 md 文件编译到网站的导航栏里，官方说是：

- index.md 永远是第一个
- 其余的按字母顺序排列 —— 但我自己的操作貌似是按创建时间顺序
- img 只有图片，不列入导航栏

效果如下图，可看到导航栏有了 Home、About、Foo、Develop，没有 img

![snapshot3.png](./images/snapshot3.png)

用自动生成的导航栏基本不会是我们想要的，顺序、显示肯定要调一调。
新增和修改 mkdocs.yml 的 **pages**（以前是**nav**）可以实现。
如下图：

![snapshot4.png](./images/snapshot4.png)

## 编译

在有 mkdocs.yml 文件的目录下执行

```
> mkdocs build
```

会生成 **site** 文件夹，其中是编译好的静态 html 文件，利于部署。

## 总结

- 适合做项目文档的展示，没法做 Blog。
- 把 site 加入 .gitignore ，能和 git 项目完美融合。
- `mkdocs build` 命令使其可以融入 CI。
