---
title: Docusaurus Tips
date: 2022-04-15 14:03:13 +0800
description:
author: wKevin
categories:
  - IT
tags:
  - docusaurus
  - mdx
  - jsx
---

![](/images/posts/2022-04-15-docusaurus/docusaurus_keytar.svg)

最近学习使用 [Midway](http://midwayjs.org/) 和 [Tauri](https://tauri.studio/)，忽然对网站是怎么做出来的来了兴趣，尤其是“侧边栏和 ToC 分列左右”特别喜欢，我多年来一直使用的 [Docsify](https://docsify.js.org/) 总是 ToC 混入侧边栏，让我总有些别扭。

把 Midway 和 Tauri 的网站源码下载下来，发现都是基于同一个框架：[Docusaurus](https://docusaurus.io/)，就花了一些时间研究，并且把公司团队的技术积累平台修改成此框架，感觉一下高大上起来了。

官方文档已经很详细了，我这里只能做一些小提示吧。

## 3 类内容

用户可以在 Docusaurus 中写 3 类内容：

1. Page：`src/pages/` 路径下内容，支持 js、md 文件。
2. doc：`docs/` 路径下内容，支持 md、mdx 文件。
3. blog：`blog/` 路径下内容，支持 md、mdx 文件。

Page、Blog 内容不同路径下的文件生成的路由（url 路径）不同，比如：

| 文件路径                            | URL 路径                         |
| ----------------------------------- | -------------------------------- |
| `src/pages/index.js`                | `[baseUrl]/`                     |
| `src/pages/foo.js`                  | `[baseUrl]/foo`                  |
| `src/pages/foo.md`                  | `[baseUrl]/foo`                  |
| `src/pages/foo/index.js`            | `[baseUrl]/foo/`                 |
| `src/pages/foo/bar.js`              | `[baseUrl]/foo/bar`              |
| `blog/YYYY-MM-DD-foo.bar/index.md`  | `blog/YYYY/MM/DD/foo.bar`        |
| `blog/YYYY-MM-DD-foo.bar.md`        | `blog/YYYY/MM/DD/foo.bar`        |
| `blog/YYYY-MM-DD-foo.bar/foobar.md` | `blog/YYYY/MM/DD/foo.bar/foobar` |
| `blog/YYYY-MM-DD_foo.bar/index.md`  | `blog/YYYY/MM/DD/_foo.bar`       |

docs 的路由和 blog 类似，但还和 md 文件中 yaml 头中的 `id` 字段有关。

## Markdown front matter

根据惯例，md 文件可以写个 yaml 格式的头，称为 Markdown front matter，比如：

```xml
---
title: Docusaurus Tips
date: 2022-04-15 14:03:13 +0800
description:
---
```

Yaml 是 `key: value` 形式的写法，value 支持数组。常用的 key 有：

| key                        | key 说明                                   | value 类型      | `blog/` | `docs/` |
| -------------------------- | ------------------------------------------ | --------------- | ------- | ------- |
| **title**                  | 左侧边栏的文章标题（注 1）                 | string          | 有效    | 有效    |
| **hide_table_of_contents** | 隐藏右侧 TOC                               | true/false      | 有效    | 有效    |
| **authors**                | 作者，搜索 `blog/authors.yml` 文件中的用户 | string/string[] | 有效    | 无效    |
| **date**                   | 手工指定文章展示给用户的日期 (注 2)        | string          | 有效    | 无效    |
| **tags**                   |                                            | string/string[] | 有效    | 无效    |
| **sidebar_position**       | 左侧边栏的顺序                             | 数字            | 无效    | 有效    |

> 注 1：
> 左侧边栏显示的标题抓取顺序按优先级为：
>
> 1. yaml 中的 title key
> 2. 提取 markdown 文章中一级目录，但一级目录前不能有除 yaml 之外的其他行
> 3. 从文件夹中提取（会自动去掉日期）

> 注 2：
> blog 中个人技术积累文章在标题下展示出的日期依次从 3 个地方获取：
>
> 1. 从 markdown 文件中的 `date` key 字段
> 2. 从文件夹或文件名称中自动提取，比如： 2022-04-05（不带中划线无法提取）
> 3. 从 git log 的时间中提取 —— 这个可能是大家不愿看到的

- `blog/` 目录 md 文件可用的头部 key 完整定义参考 [这里](https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-blog#markdown-front-matter)。
- `docs/` 目录 md 文件可用的头部 key 完整定义参考 [这里](https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-docs#markdown-front-matter)。

## 摘要显示

默认情况下 blog 全文会显示在 blog 首页，如果全文太长，会造成加载耗时和阅读困难，在 blog 中添加如下行可以在首页中截断，点击进入文章后才显示全文。

```html
<!--truncate-->
```

## MDX

最后来聊聊 docusaurus 使用的编译器。

我也算是 Markdown “资深”玩家了，今天竟然第一次听说 MDX，资深一下没了底气。应该是普通的 Markdown 已经无法满足程序员们日益增长的写文档热情，MDX 就被创造出来了，有人说 `MDX = MD - HTML + JSX`，即：Markdown 中不再能写传统的 html 语法，而是用 JSX 语法。

JSX 是 Facebook 为 React 创造的语言，是 `JavaScript + XML` 的缩写，让你用类似 HTML（HTML 就是一种 XML 标记型语言）的语法写文件，然后通过编译器（常用的是 babel）编译成 JavaScript，对应的 VUE 好像还没有类似产品。

JSX 从 JavaScript 而来，又向 HTML 做了靠拢，但毕竟不是 HTML，所以初写起来我还是挺难受的，比如直接在 md 文件中写：

```js
import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

**多 Tab 演示**：

<Tabs groupId="operating-systems">
  <TabItem value="win" label="Windows">
    Use Ctrl + C to copy.
  </TabItem>
  <TabItem value="mac" label="macOS">
    Use Command + C to copy.
  </TabItem>
</Tabs>;
```

总感觉不伦不类，markdown 中嵌入既不是 js，也不是 html 的文字……OMG，说不定过段时间我自己就看不懂了。

但是添加了 JSX 的 MDX 给了程序员做出更复杂、炫酷网页的能力，各种 React 的动画、翻页、数据处理、数据可视化……React 组件加持，瞬间提升逼格，与普通 Markdown 用户拉开了距离……这应该是 md 平民化后小众彰显个性的一个机会。

怎么写 MDX，还是看 [MDX 官网](https://mdxjs.com)、[JSX 官网](https://reactjs.org/docs/introducing-jsx.html)吧。

## 解析器

得到最终的编译结果，MDX 需要经过多次编译：

`[MDX] --(@mdx-js/mdx)--> [MD] --(remark)--> [HTML] --(rehype)--> [HTML]`

- [`@mdx-js/mdx`](https://www.mdxjs.cn/) 能够处理 mdx 语法，将 md 编译成 md + js/html
- [`remark`](https://remark.js.org/) 是一个 markdonw 生态，能够接入多个插件，实现 md 的各种类型输出
- [`rehype`](https://github.com/rehypejs/rehype) 直接操作和修改 html DOM，比如数学公式的渲染，则可以在 rehype 阶段插入

```sh
$ npm list -a | grep remark
├─┬ @akebifiky/remark-simple-plantuml@1.0.2
│ │ │ ├── remark-footnotes@2.0.0
│ │ │ ├─┬ remark-mdx@1.6.22
│ │ │ │ ├── remark-parse@8.0.3 deduped
│ │ │ ├─┬ remark-parse@8.0.3
│ │ │ ├─┬ remark-squeeze-paragraphs@4.0.0
│ │ ├─┬ remark-emoji@2.2.0
│ ├─┬ remark-admonitions@1.2.1
│ │ ├── remark-admonitions@1.2.1 deduped
│ │ ├── remark-admonitions@1.2.1 deduped
│ │ ├── remark-admonitions@1.2.1 deduped
└── remark-math@3.0.1
```

Docusaurus 组合了 babel、 mdx、remark、rehype 等成熟工具，打造了一个功能完整、插件灵活的网站生成框架。

比如下面几个功能的扩展都是借助 remark、rehype 进行的。

### PlantUML 画图

```sh
$ npm i --save @akebifiky/remark-simple-plantuml
```

修改 docusaurus.config.js

```js
presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          remarkPlugins: [
            [
              ...
              require("@akebifiky/remark-simple-plantuml"),
              {
                baseUrl: "http://10.7.225.106:8088/svg/",
              },
            ],
            ...
          ],
          ...
        }
        blog: {
          // 同理添加
        }
```

### Mermaid 画图

```sh
$ npm i --save mdx-mermaid
```

修改 docusaurus.config.js

```js
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          remarkPlugins: [
            require("mdx-mermaid"),
            ...
          ],
          ...
        }
        blog: {
          // 同理添加
        }
```

### Katex 数学公式

[官方文档](https://docusaurus.io/docs/markdown-features/math-equations)给出来的命令是：

```sh
$ npm install --save remark-math@3 rehype-katex@5 hast-util-is-element@1.1.0
```

然后修改 docusaurus.config.js，注册插件分别到 remark 和 rehype，并且添加 katex 的 CSS（如果不正确添加 CSS，firefox 可以正确显示，但 Chrome 上不行——这是我第一次看到 Chrome 比 ff 弱的）。

```js
const math = require("remark-math");
const katex = require("rehype-katex");

module.exports = {
  title: "Docusaurus",
  tagline: "Build optimized websites quickly, focus on your content",
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          path: "docs",
          remarkPlugins: [math],
          rehypePlugins: [katex],
        },
      },
    ],
  ],
  stylesheets: [
    {
      href: "https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css",
      type: "text/css",
      integrity:
        "sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM",
      crossorigin: "anonymous",
    },
  ],
};
```

但其实 Docusaurus 自己并不是这种方式，而是安装的最新版 `rehype-katex@6`，并且这样修改 docusaurus.config.js：

```js
async function createConfig() {
  const katex = (await import("rehype-katex")).default;
  config.presets[0][1].docs.rehypePlugins.push(katex);
  config.presets[0][1].blog.rehypePlugins.push(katex);
  return config;
}
module.exports = createConfig;
```

自己试一下就明了其中原因了。

另外，还可以给 rehype-katex 送参数：

```js
rehypePlugins: [
  [
    katex,
    {
      output: "mathml",
    },
  ],
],
```

rehype-katex 有 3 种 output：

- 'html' :可 copy 的网页显示
- 'mathml' : 我们通常理解的很有科学范儿的显示
- 'htmlAndMathml'(默认) ：两种都显示

更多的参数打开 rehype-katex 源码看一眼就是了。

### remark 的检查功能

remark 除了编译，还能够像高级语言一样对 markdown 文本进行源代码静态检查，有点向高级语言走的内味儿了，所以如果 md 写的不专业，被 remark 告警，也是挺尴尬的。

列几个我被告警的项目：

| 告警项         | 错误写法          | 正确写法                                                                      |
| -------------- | ----------------- | ----------------------------------------------------------------------------- |
| 换行           | `<br>`            | `<br/>`                                                                       |
| 路径           | `foo\bar`         | `foo/bar`                                                                     |
| 空或无效链接   | `[foobar]()`      | --                                                                            |
| 找不到图片     | `![](foobar.png)` | 怎么找到图片官网有[说明](https://docusaurus.io/docs/markdown-features/assets) |
| 使用 js 关键字 |                   | `import`、`export` 在行首时只能用于 jsx 语法能                                |

## 其他一些零碎 Tips

### 展开组件

<!-- prettier-ignore -->
```js
<details>
  <summary>Hello World</summary>
  
  I like docusaurus!
  
</details>
```

在 md 文件中直接写上面的 js，可以得到一个默认收缩，点击展开的效果。

### 为代码段添加标题

<pre><code>
```js title="docusaurus.config.js"<br/>
const math = require("remark-math");<br/>
const katex = require("rehype-katex");<br/>
```
</code></pre>

这样写可以得到一个带标题的代码块。

### 不想让代码段被 Prettier 修改

整篇文章默认当然是 Prettier 做 formatter，但有些段落临时不想让 Prettier 生效，怎么办？

```
<!-- prettier-ignore -->
// 自己的代码段
```

这是配置 Prettier 了，本质上和 Docusaurus 无关。

OK！哪天有空把我当前这个 blog 也改用 Docusaurus，或者 VUEPress。
