---
title: Floccus – 跨平台浏览器「书签同步」
date: 2019-05-22 10:02:15 +0800
description: " "
authors: wKevin
categories:
  - it
tags:
  - Floccus
  - XMarks
---

XMarks 前年挂掉之后，一直没有找到合适的替代，虽然 XMarks 在 safari 上有时候不能用，在 ff 上有时候生成重复标签，但还是能用的，服务关掉之后一直耿耿于怀。

直到前几天看到 [Floccus – 跨平台浏览器「书签同步」插件](https://www.appinn.com/floccus/)，终于遇到了替代品，更完美的替代品，试用了几天，几乎没有 bug，特此推荐。

[Floccus - Github](https://github.com/marcelklehr/floccus)

- 支持 3 种书签文件同步方式（协议）
  - WebDav：类似 Http 的网络协议，一些云盘有支持，如：
    - 企业云盘：[坚果云](https://www.jianguoyun.com)
    - Nextcloud：私有云盘，即在 VPS 上搭建自己的云盘
  - Nextcloud 内建书签协议
  - 本地文件
- 浏览器插件支持：Chrome、FF、Kiwi 等，不支持 Safari（遗憾）
  - 上不了 Chrome 的 Web Store 的话，Github 上有下载 .crx 文件

<!--truncate-->

我使用的坚果云的 WebDav，配置中的 2 个提示：

**1. 创建坚果云的 WebDav 入口**

[坚果云](https://www.jianguoyun.com) -- 账户信息 -- 安全选项 -- 第三方应用管理 -- 添加应用（名称随意，记住密码）

![](./images/jgyadd.png)

**2. 需要在坚果云中新建一个文件夹，用根目录我这里总是提示失败**

我这里新建了 floccus 文件夹：

![](./images/jianguoyun.png)

配置中 URL 里加上了 floccus：

![](./images/floccus.png)
