---
title: PylonViewer 新增一个锐利度指示器
date: 2019-04-10 09:09:03 +0800
description: " "
authors: wKevin
categories:
  - it
tags:
  - basler
  - pylon
---

![](./images/pylon-sharpness-indicator.png)

当调节镜头焦距时，随着图片的清晰程度变换，指示器会给出锐利度的值，帮助用户判断是否最佳。

使用中发现的问题：

- 亮度较低时指示器会失效：调节焦距值不变
- 对平面参考意义大一点，对 3D 物品参考意义不大，也很难给出一个满意的值
- 彩色图片比黑白的更准确些，测试中彩色图片能够达到 99%，黑白的要差一些

<!-- <video id="video" controls="" preload="none" poster="http://media.w3.org/2010/05/sintel/poster.png">
    <source id="ogv" src="./images/ogg">
</video> -->
