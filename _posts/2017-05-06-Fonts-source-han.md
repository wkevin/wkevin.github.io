---
title: "思源黑体 and 思源宋体"
date:   2017-05-06 10:16:00 +0800
categories: 
    - it
tags:
    - 思源
image: 
  path: /images/posts/2017-05-06-Fonts-source-han/serif.7kindsbold.png
  thumbnail: /images/posts/2017-05-06-Fonts-source-han/serif.7kindsbold.png
---

Google 与 Adobe 合作，为亚洲日、韩、中简、中繁四种预研创造了两种字体：思源黑体和思源宋体，覆盖15亿人群，功德无量。

思源黑体是2014年发布的，思源宋体是2017年4月发布的，黑体无衬线，宋体有衬线。

衬线并不是中文字体才有的，所有文字都有，无衬线是大老粗，有衬线是装逼，哈哈。

![](/images/posts/2017-05-06-Fonts-source-han/serif.and.sanserif.png)

衬线的英文：serif；无衬线的英文：sanserif，这个san前缀是拉丁语中无的意思。所以看到字体名称中 sans--表示无衬线、serif--表示有衬线。

正式介绍思源字体的英文名称：

|字体|Adobe命名|Google命名|
|----|---------|----------|
|思源黑体|Source Han Sans|Noto Sans CJK|
|思源宋体|Source Han Serif|Noto Serif CJK|

思源黑和思源宋都包含了65535个字，支持多种字符编码，具体到简体中文遵守**GB18030**和**通用规范汉字表**，GB18030不是国际标准，是中国标准，但她不是只有简体汉字，GB18030我国做出来是为了全中国多民族共用的，所以包括了简体、繁体、韩、蒙、傣……格局和目标虽然比Unicode（UTF）低了一点，但在中国还是通吃的。所以思源黑和思源宋全力支持了GB18030。

思源黑和思源宋各自都有7种粗细，对应7个名称：

![](/images/posts/2017-05-06-Fonts-source-han/sanserif.7kindsbold.png)

![](/images/posts/2017-05-06-Fonts-source-han/serif.7kindsbold.png)

两种字体在Adobe的官网上都有介绍，但没有下载：

* 思源黑： [https://typekit.com/fonts/source-han-sans-simplified-chinese](https://typekit.com/fonts/source-han-sans-simplified-chinese)
* 思源宋： [https://typekit.com/fonts/source-han-serif-simplified-chinese](https://typekit.com/fonts/source-han-serif-simplified-chinese)

最终我们是要下载使用的，就目前的情形来看 windows、macOS、Ubuntu、Fedora 都不打算把思源体默认安装进去，微软和苹果都有自己的字体还说得过去，Linux还不跟上这个节奏就有点不合时宜了吧，我预测今年的Ubunut和Fedora的新发布版本估计应该会用上。

系统没自带，我们自己安装吧，安装包有点大，全部下载每种字体要1.7G，单独下载中文简体思源宋要156M，思源黑也要近200M，所以先找好一个好网络是很重要的。

开源字体，Github上下载： 

* 思源黑： [https://github.com/adobe-fonts/source-han-sans/tree/release/](https://github.com/adobe-fonts/source-han-sans/tree/release/)
* 思源宋： [https://github.com/adobe-fonts/source-han-serif/tree/release/](https://github.com/adobe-fonts/source-han-serif/tree/release/)

需要注意的一点是：下载链接是在release分支上，所以需要 Branch 里切换到 release 分支，不要在 master 分支。

下载还没这么简单，有一个文件格式的问题：由于不同操作系统使用的字体文件格式不同，同一操作系统的不同版本也会使用不同的字体文件，所以需要在 Subset OFT、OTF、OTC、Super OTC 4种字体中做一个选择，选择依据：

![](/images/posts/2017-05-06-Fonts-source-han/select.filetype.png)

不同格式下载下来的效果：

![](/images/posts/2017-05-06-Fonts-source-han/otf.otc.png)

下载链接里有各种组合：按格式、按语言、按粗细，windows上下在OTF或SubsetOFT就是了。好吧，如果你是伸手党，就直接用下面的链接吧，但我不能保证一直有效：

* 思源黑
    - OTF：[SourceHanSansSC.zip](https://github.com/adobe-fonts/source-han-sans/raw/release/OTF/SourceHanSansSC.zip)（90M）
    - Subset OTF：[SourceHanSansCN.zip](https://github.com/adobe-fonts/source-han-sans/raw/release/SubsetOTF/SourceHanSansCN.zip)（48M）
* 思源宋
    - OTF：[SourceHanSerifSC_EL-M.zip(ExtraLight + Light + Regular + Medium)](https://github.com/adobe-fonts/source-han-serif/raw/release/OTF/SourceHanSerifSC_EL-M.zip)（70M） & [SourceHanSerifSC_SB-H.zip(SemiBold + Bold + Heavy)](https://github.com/adobe-fonts/source-han-serif/raw/release/OTF/SourceHanSerifSC_SB-H.zip)（55M）
    - Subset OTF：[SourceHanSerifCN.zip](https://github.com/adobe-fonts/source-han-serif/raw/release/SubsetOTF/SourceHanSerifCN.zip)（63M）

思源黑一开始使用的是Apache的License，后来修改为 OFL了，这次思源宋一出来就是 OFL。

![](/images/posts/2017-05-06-Fonts-source-han/OFLLogoRectColor.png)

OFL 是由SIL发起的一种开源License，全称：Open Font License ，比Apache更加开放一些，只要不拿来赚钱就可以随便使用、分发。

最后，为什么叫**思源**，本意是Google和Adobe的几位设计师想感恩东亚的祖先们创造出了完全不同于西方的文字，但使用者何尝不需要饮水思源，感恩这些设计师们。