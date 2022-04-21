---
title: Jupyter 扩展
date: 2018-12-29 21:29:54 +0800
description: jupyter nbextensions
authors: wKevin
categories:
  - it
tags:
  - jupyter
---

1. jupyter-nbextensions-configurator
2. jupyter-contrib-nbextensions

都叫 nbextensions，哪个更 nb? 哪个是官方的?

| 扩展                              | Pypi                                                                                                                              | Github                                                                         |
| --------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| jupyter-nbextensions-configurator | [pypi](https://pypi.org/project/jupyter_nbextensions_configurator/)<br/>提供图形 UI 供用户使能扩展，属于 jupyer server 端配置     | [github](https://github.com/Jupyter-contrib/jupyter_nbextensions_configurator) |
| jupyter-contrib-nbextensions      | [pypi](https://pypi.org/project/jupyter_contrib_nbextensions/)<br/>nb 的扩展集合，多是前端浏览器的 js 脚本。<br/>特别声明：非官方 | [github](https://github.com/ipython-contrib/jupyter_contrib_nbextensions)      |

2 个扩展本是一家，名为：IPython-notebook-extensions. 不知道什么时候分家了，拆成现在的这 2 个。一个专注于 Server 端的扩展管理，一个专注于前端的 js 脚本。从这里也可以看出，扩展肯定不止 1 个（我们后面再谈）。

## **先说专注于 Server 端的 jupyter-nbextensions-configurator**

安装：`pip install jupyter_nbextensions_configurator`

然后就多出了 jupyter-nbextensions_configurator 命令，执行此命令使能之：

`jupyter-nbextensions_configurator enable` == `jupyter nbextensions_configurator enable`

- 会提示已把配置写入了 `~/jupyter`，其实是 `~/.jupyter/jupyter_notebook_config.json` 文件，打开可以看到这种字样：
  - `"jupyter_nbextensions_configurator": true`
- 并且默认使能了 2 个最基本的扩展
  - config_menu（文档里又称为： edit menu）
  - tree_tab

此时如果顺利的话，`jupyter notebook` 就可以看到多出了 **Nbextensions** Tab 页

![](./images/config_menu.png)

如果看不到此 tab 页，可以直接打开 [http://localhost:8888/nbextensions?nbextension=nbextensions_configurator](http://localhost:8888/nbextensions?nbextension=nbextensions_configurator) ，检查关键的 2 个扩展是否确实勾选了，如下图：

![](./images/nbexts.png)

前面默认使能的 config_menu 和 tree_tab 分别对应上图中的 dashboard tab 和 edit menu item 两个勾选，没有勾选 dashboard tab 就会看不到 tab 页。

从上图中还能看出，此时的扩展是很少的，还需要我们继续添加。

我遇到过还是看不到 tab 页的情况，最后是用 `jupyter --paths` 检查 jupyter 用到的 config path 、 data path，发现我安装了 3 套 jupyter 和 nbextensions，2 套系统（python2、python3），1 套虚拟环境，把 3 套统统卸载掉，然后重装虚拟环境的，最终 OK。

关键操作有：

- `pip uninstall jupyter-nbextensions_configurator`
- `pip3 uninstall jupyter-nbextensions_configurator`
- 删除后仍遇到多套扩展的 yaml 文件，打印出的信息：
  - [jupyter_nbextensions_configurator] nbextension 'rubberband/main' has duplicate listings in both '/Users/wangkevin/workspace/python-venv/py3-venv/share/jupyter/nbextensions/rubberband/rubberband.yaml' and '/Users/wangkevin/Library/Jupyter/nbextensions/rubberband/rubberband.yaml'
  - 说明 uninstall 并没有吧 yaml 文件删掉，手工删除：`rm -rf /Users/wangkevin/Library/Jupyter/nbextensions`

## **再说扩展集合 jupyter-contrib-nbextensions**

- `pip -V` pip 安装之前先确认一下 pip 是哪个？我一般都是只安装的虚拟环境的
- `pip install jupyter-contrib-nbextensions`
- `jupyter contrib nbextension install [--user]` 安装具体的多个扩展
  - 从 log 中可以看到从 `site-packages/jupyter_contrib_nbextensions/nbextensions/` 把扩展都拷贝到
    - 无 `--user`： `/usr/local/share/jupyter/nbextensions/`
    - 有 `--user`：`~/Library/Jupyter/nbextensions`
  - 如果 2 个地方都安装了，可以卸载 1 个：`jupyter contrib nbextension uninstall [--user]`

再看扩展，就多了很多：

![](./images/nbextensions.ok.png)

集成进去的扩展很多，需要各位慢慢去试用，我个人最喜欢的有：

- Collapsible headings：ipynb 内折叠
- Codefolding： cell 内代码折叠
- Table of Contents: 树形目录
- Notify：如果有长时间执行的 cell，则可以切换浏览器的到其他 tab，cell 执行完会给个通知
- ExecuteTime
- Exercise
- Export Embedded HTML

点击每个扩展，下面都有解释说明。

还有几个特别的小工具顺带一下：

- `%debug`
- `%lsmagic`
