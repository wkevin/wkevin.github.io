---
title: 令人惊叹的录屏方式：terminal 操作保存为 SVG 动画
date: 2020-12-09 20:42:09 +0800
description:
author: wKevin
categories:
  - it
tags:
  - 录屏
  - SVG
---

![](/images/posts/2020-12-09-termtosvg/record-dracula.svg)

上图竟然是个 SVG 文件，可以单独下载，不是视频，SVG 矢量文件，即：

- 是个文本文件，可以用文本编辑器打开，利于 git 管理
- 矢量文件，无限缩放，画质不影响
- 图片中的文字可以选中、复制

今天挖到一个宝： [termtosvg](https://github.com/nbedos/termtosvg)

原本是看到一个推荐：redis 的封装 [iredis](https://iredis.io/)，首页的动图我以为是录屏，无意间右键下载了一下，没想到是 svg 文件，顿感意外，不知道怎么实现的。svg 我已经解除过好多年了，近 5 年来的画图也基本 100% 是 svg 格式了，动画也做过一些，但不知道还能这么玩。

一通搜索，找到了 [termtosvg](https://github.com/nbedos/termtosvg)，安装很简单：

```bash
$ pip3 install termtosvg
```

使用也是简单：

1. `termtosvg foo/bar.svg [-t <template>]` 录屏，并直接保存为 svg 文件
2. `termtosvg record foo/bar.txt [-t <template>]` 录屏，并保存为 txt 文件
3. `termtosvg render foo/bar.txt bar/foo.svg` 将前面保存的 txt 文件渲染成 svg 文件

1 好理解，2、3 有什么用呢？—— 答案是：非常有用。

录制成的 txt 文件长这样：

```bash
{"version": 2, "width": 105, "height": 24}
[0.0, "o", "\u001b]7;file://MBP.local/Users/wangkevin/workspace/osrc/webrtc/webrtc\u0007"]
[1.783982, "o", "\u001b[1m\u001b[7m%\u001b[27m\u001b[1m\u001b[0m                                                                                                        \r \r"]
[1.785654, "o", "\u001b]7;file://MBP.local/Users/wangkevin/workspace/osrc/webrtc/webrtc\u0007"]
[1.785808, "o", "\u001b]2;wangkevin@MBP\u0007"]
[1.785973, "o", "\u001b]1;..webrtc/webrtc\u0007"]
[1.793306, "o", "\u001b]7;file://MBP.local/Users/wangkevin/workspace/osrc/webrtc/webrtc\u0007"]
[1.971497, "o", "\r\u001b[0m\u001b[27m\u001b[24m\u001b[J\u001b[01;32m➜  \u001b[36mwebrtc\u001b[00m \u001b[01;34mgit:(\u001b[31mmaster\u001b[34m)\u001b[00m \u001b[K"]
[1.972259, "o", "\u001b[?1h\u001b="]
[1.975024, "o", "\u001b[?2004h"]
[2.540656, "o", "\u001b[32ml\u001b[39m\u001b[90ms\u
```

先用 txt 文件保存，后期再渲染成 svg 有 2 个好处：

1. txt 文件更小，通常是 svg 文件的 1/10，更利于分享、git 管理、CI/CD。
2. 后期渲染时再根据需求确定 template，比录制时就确定 template 更能满足灵活需求

比如我前面的录制保存为了 record.txt ，后期渲染时这样操作：

![](/images/posts/2020-12-09-termtosvg/a-progress_bar.svg)

渲染出 dracula（本文第一幅图）、ubuntu 等

![](/images/posts/2020-12-09-termtosvg/record-ubuntu.svg)

各种渲染模板给出了多姿多彩的关键字高亮、外壳、滚动条…… 放在 Jenkins 的 CI/CD 中，多有意思的事情啊。

最后，一点可惜的是，termtosvg 的作者已经不再更新了，不过相信会有人接力的。
