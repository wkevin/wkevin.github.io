---
title: python、go、nodejs、rust 命令对比
date: 2021-05-19 16:35:15 +0800
description: " "
authors: wKevin
categories:
  - it
tags:
  - python
  - nodejs
  - go
  - rust
---

近些年学习的这几门语言，比早年吃饭的 C 语言多出了很多额外功能，做个表格对比之。

<!--truncate-->

| item                        | go                               | python                                     | js/ts                                       | rust                                                      |
| --------------------------- | -------------------------------- | ------------------------------------------ | ------------------------------------------- | --------------------------------------------------------- |
| version                     | go version                       | python --version                           | node --version                              |                                                           |
| build                       | go build                         | python -m x.py                             | npm run ...                                 |                                                           |
| run                         | go run [x.go]                    | python x.py                                | npm run ... ; node x.js                     |                                                           |
| 版本管理工具                |                                  | pyenv [shell,local,global]                 | n 或 nvm [use]                              |                                                           |
| 环境隔离                    | VenGo                            | python -m venv                             | npm i -[S,D]                                |                                                           |
| 第三方包管理                | --                               | pip                                        | npm,yarn                                    | cargo                                                     |
| version                     |                                  | pip -V                                     | npm,yarn version                            | cargo -V                                                  |
| 子命令                      |                                  |                                            |                                             | cargo list, cargo --list                                  |
| **config**                  |                                  |                                            |                                             |                                                           |
| 查看 all config             | go env                           | pip config list                            | npm/yarn config list [-a]                   | `vi ~/.cargo/config`                                      |
| 查看 one config             | ge env key                       | pip config get key                         | npm/yarn config get key                     |                                                           |
| 配置 one config             | go env -w key=value              | pip config set key value                   | npm/yarn config set key value               |                                                           |
| prefix(安装路径)：查看/配置 |                                  | pip -V                                     | npm/yarn config get,set prefix              |                                                           |
| Proxy: shell 环境变量       | Yes（基于 git）                  | 使用 `http[s]_proxy`，不使用 `no_proxy`    | 使用 `http[s]_proxy`，不使用 `no_proxy`     | Yes                                                       |
| Proxy: 自身变量-配置文件    | 无                               | `pip config set proxy ...`                 | `npm config set proxy/noproxy ...`          |                                                           |
| Proxy: 自身变量-CLI 参数    | 无                               | `pip --proxy=... install ...`              | `npm i xxx --no-proxy`                      |                                                           |
| registry：查看/配置         | go env [-w] GOPROXY=...          | pip config set global.index-url ...        | npm/yarn config get,set registry ...        |                                                           |
| registry：官方              | `https://proxy.golang.org`       | pypi.io                                    | `https://registry.npmjs.org`                | [crates-io](https://github.com/rust-lang/crates.io-index) |
| registry：清华(tuna)        |                                  | `https://pypi.tuna.tsinghua.edu.cn/simple` |                                             |                                                           |
| registry：中科大            |                                  |                                            |                                             |                                                           |
| registry：阿里              |                                  | `https://mirrors.aliyun.com/pypi/simple`   | `https://registry.npm.taobao.org`           |                                                           |
| registry：七牛              | `https://goproxy.cn`             |                                            |                                             |                                                           |
| **包(pkg) Vs. 模块(mod)**   | **module 包含多个 package**      | **package 包含多个 module**                |                                             |                                                           |
| **模块**                    | 推荐 git 库作为一个 mod          | 每个 .py 文件就是一个 module               |                                             |                                                           |
| 模块-import                 | 无                               | `import <module>`                          |                                             |                                                           |
| 模块-创建                   | go mod init [name]               |                                            |                                             |                                                           |
| 模块-描述文件               | go.mod, go.sum                   |                                            |                                             |                                                           |
| 模块-安装指定模块           | go get [mod@info]                |                                            | npm install [-g] [xxx], yarn add [-g] [xxx] |                                                           |
| 模块-从文件安装模块         | go mod download                  |                                            | npm install, yarn add                       |                                                           |
| 模块-查看已安装的依赖模块   | go mod graph                     |                                            | npm list [-g -depth], yarn list             |                                                           |
| 模块-安装路径               | go mod vendor #导出到 vendor     |                                            | 集中存放在 node-modules 或 [-g] 到全局      |                                                           |
| 模块-删除                   | go mod tidy                      |                                            | npm uninstall xxx, yarn remove xxx          |                                                           |
| 模块-更新                   |                                  |                                            | npm update, yarn upgrade                    |                                                           |
| **包**                      | `package xxx` 相同的组成一个 pkg | setup.py/cfg 声明一个 pkg                  |                                             |                                                           |
| 包-import                   | `import <mod>/path/<pkg>`        | `import <pkg>`                             |                                             |                                                           |
| 包-安装(指定包名)           | go get [pkg@info]                | pip install pkg==ver // sudo 安装到系统    |                                             | `cargo install <pkg>`                                     |
| 包-安装(指定文件)           |                                  | pip install -r requirements.txt            |                                             |                                                           |
| 包-安装(从源码)             |                                  | pip install ., python setup.py install     |                                             |                                                           |
| 包-安装(开发模式)           |                                  | pip insttall -e                            |                                             |                                                           |
| 包-查看已安装包             |                                  | pip list                                   |                                             | cargo tree                                                |
| 包-导出已安装包             |                                  | pip freeze                                 |                                             |                                                           |
| 包-删除                     |                                  | pip uninstall xxx                          |                                             |                                                           |
| 包-更新                     | go get -u                        | pip install -U xxx                         |                                             |                                                           |
| **源码**                    |                                  |                                            |                                             |                                                           |
| 源码-查看源码中定义的包     | go list ./...                    |                                            |                                             |                                                           |
