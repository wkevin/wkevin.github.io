# Kevin's Blog

## 2022.4 - Github Pages base on Docusaurus

Move to Docusaurus

## 2018.12 - Github Pages base on Jekyll

- Init
  - `gem install jekyll bundle`
  - `jekyll new wkevin.github.io`
  - `cd wkevin.github.io`
  - `bundle exec jekyll serve`
- `_config.yml`
  - `_config.yml` 是给 `jekyll serve`或`jekyll build`使用的
  - [jekyll official](https://jekyllrb.com/docs/configuration/)
  - 修改后需要重启 jekyll serve
- `Gemfile`
  - Github Pages 有默认的 Gemfile，用户不需要上传：`git rm Gemfile`
  - 本地浏览如果需要模拟 Github Pages，修改:
    - 注释 `gem "jekyll"`
    - 打开 `gem "github-pages", group: :jekyll_plugins`
- Config theme
  - 一些 theme 是 gem 打包发布的，用户的文档中不会出现`_layout`、`_css`等内容，本地和远程只需指定`theme:xxx`或`remote_theme:xxx`
    - 本地 bundle 安装了 theme 后，可以使用 `bundle show xxx` 查看其具体内容，学习或修改
  - 一些 theme 而是以源码发布的，需要用户`fork`或`git clone`其`_layout`、`_css`等内容到自己的文件夹中。
  - 不同的 theme 会有不同的配置项，如：layout：xxx，需要读其说明，仔细配置
  - Github Pages 把 theme 分 2 类：
    1. [officially supported themes](https://pages.github.com/themes/): `theme: xxx`，都已 gem 化。
       - **Blog 使用：** 自动搜索 `_posts` 目录并生成瀑布流文章列表
         - `theme: minima` —— `jekyll new` 时默认
       - **网站使用：** 自己组织链接，不支持 page、post
         - `theme: jekyll-theme-cayman`
         - 其他的都是，所以要想写 blog，还得用下面的 `remote_theme`
    2. [open source Jekyll theme hosted on GitHub](https://github.com/topics/jekyll-theme)
       - `remote_theme: xxx` —— 需要该 theme 已经 gem 化，Github Pages 能够在云端找到并安装
         - https://github.com/mmistakes/minimal-mistakes
         - https://github.com/mmistakes/so-simple-theme —— 简洁、大方，本 Blog 使用
           - 简要说明
             - `data/navigation.yml` 定义导航栏
             - 10 种 layout：home, posts, post, collection(等同 pages), page, categories, category, tags, tag, search.
             - 2 种 entries_layout ： list, grid
           - 个性化配置方法
             - `_config.yml` 中可以在 `[head|footer]_scripts` 中添加 js 的路径，注意是下滑线
             - `bundle show jekyll-theme-so-simple` 查看本插件源文件的位置
             - 从源文件中拷贝 `_includes/[head|footer]-custom.html` 到 blog 目录下，根据情况修改
             - 从源文件中拷贝 `assets/css/main.scss` 到 blog 目录下，酌情修改
             - 从源文件中拷贝 `assets/js/main.js` 到 blog 目录下，酌情修改
           - 我的配置：
             - 根目录下的 .md 文件对应每个子目录：posts、categories、tags、ai、auto、search —— 其中 posts、ai、auto 包含 md 文件，其他是视图
               - `_config.yml` 中定义了默认值：随笔是 post，其他是 page —— 不需要每篇文章中再定义
             - posts、ai、auto 分别对应 `_post`、`_ai`、`_auto` 文件夹 —— `_config.yml` 中定义的 path
             - 根目录下的 `ai/auto/it.md` 中定义了 entries_layout 使用 grid
       - fork -- modify
         - https://github.com/daattali/beautiful-jekyll
- Others
  - [font awesome](https://fontawesome.com)
- 其他说明
  - 新建 post 可以用 `./newpost.sh`，同时创建一个 post 及其 images 下的同名文件夹放图片
