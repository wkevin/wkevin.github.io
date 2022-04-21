---
title: Github 的好基友：Travis-CI
date: 2019-06-24 09:03:23 +0800
description: " "
authors: wKevin
categories:
  - it
tags:
  - github
  - travis
---

摘要：

- Travis-CI 免费、可配置，可能是 github 上 CI 工具的头魁。
- 本文简述 Travis-CI 的配置操作步骤、配置文件释义。

github 能够与多种持续集成（CI）和持续交付（CD）工具融合，github 的 marketplace 中有整理好的[一份 CI 工具清单](https://github.com/marketplace?category=continuous-integration)，里面列了 20+ CI 工具，其中 10+ 个还带有“Verified by Github”的绿色认证标签，2017 年 github 推出过一篇[blog](https://github.blog/2017-11-07-github-welcomes-all-ci-tools/)，统计出 top10，Travis、Circle、Jenkins 为前三，但 2019 年我想估计排位已经变化了，至少上面清单中已经找不到 Jenkins 了。

Travis 等工具的 CI 功能相比 Jenkins 会弱一些，可配置性、灵活性、和插件都不可比，但 travis 不需要自己搭建和维护 CI 服务器，github 上 public 项目就免费提供服务，Jenkins 则需要自己搞台电脑 or 云主机，两者一比，免费的午餐又胜利了。

![](./images/travis.ci.logo.png)

<!--truncate-->

## Travis-CI 基本步骤：

| 顺序 | Github                                                                            | Travis                                                                                                                  |
| ---- | --------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| 1.   | 根据 [travis 文档](https://docs.travis-ci.com/)，在个人的 repo 中写 `.travis.yml` |                                                                                                                         |
| 2.   |                                                                                   | 利用 github 账号登录 [travis.org](https://travis-ci.org)（开源项目） 或 [travis.com](https://travis-ci.com)（私有项目） |
| 3.   |                                                                                   | travis 自动同步到 github 上的 repo 列表，点击打开列表中希望关联使用 CI 的 repo                                          |
| 4.   | github 中该 repo 的 settings-webhooks 中即可查看到新增了一项，可适当配置触发事件  |
| 5.   |                                                                                   | Travis-CI Dashboard 中可以手动触发 build、查看自动&手动 build 的进度……                                                  |
| 6.   |                                                                                   | Travis 被触发后，自动依次搭建环境，并在每个环境中按流程执行 install、script、deploy……中用户自己指定的动作               |
| 7.   | 使用 travis 的运行状态值                                                          |                                                                                                                         |

可以有几种方式获取&使用 travis 的状态值：

- 在 blog、个人网站、github 等放置图标，
  - 格式：`[![Build Status](https://travis-ci.org/wkevin/youtube-dl.png)](https://travis-ci.org/wkevin/youtube-dl)`
  - 效果：[![Build Status](https://travis-ci.org/wkevin/youtube-dl.png)](https://travis-ci.org/wkevin/youtube-dl)
- 基于 travis 的 web-API get 或 post 信息，需要用到 travis 中的 token
- github 中的集成：issue、PR 中都能够妥善的获取到 travis 的状态值

## .travis.yml 的书写

- Jobs
  - 指明编程语言： [支持 30+ 种语言](https://docs.travis-ci.com/user/languages)
    - `language:python`
  - 说明测试 job 环境：下面 3 个配置项做排列组合，会生成 （`python:` _ `dist|os:` _ `env:`）个 jobs
    - `python:`
    - `dist: xenial`
      - Ubuntu
        - [12.04 Precise Pangolin(精准的穿山甲)](https://docs.travis-ci.com/user/reference/precise/)
        - [14.04 Trusty Tahr (可靠的塔尔羊)](https://docs.travis-ci.com/user/reference/trusty/): `dist: trusty`
        - [16.04 Xenial Xerus (好客的非洲地松鼠)](https://docs.travis-ci.com/user/reference/xenial/): `dist: xenial`
        - [18.04 Bionic Beaver（仿生海狸）]
      - [win](https://docs.travis-ci.com/user/reference/windows/): `os: windows`
      - [macOS](https://docs.travis-ci.com/user/reference/osx): `os: osx`
    - `env:`
  - 修订测试 job 环境 —— 最终的 jobs = [(`python:` * `dist:` * `env:`）- `exclude:` + `include:`]
    - `matrix:`
      - `exclude:` : 对 （`python:` _ `dist:` _ `env:`） 的排列组合进行滤除
      - `include:` ：不管上述排列组合，此处新增一些指定环境
      - `allow_failures:` 增加滤镜
- 运行流程
  - `before_install`：
  - `install:`
  - `before_script`：
  - `script:`
  - `after_success` or `after_failure`：
  - `before_deploy`：
  - `deploy:`
  - `after_deploy`：
  - `after_script`：
- 4 种返回值
  - `passed`：运行成功，所有步骤的退出码都是 0
  - `canceled`：用户取消执行
  - `errored`：before_install、install、before_script 有非零退出码，运行会立即停止
  - `failed `：script 有非零状态码 ，会继续运行

## 实例

裁剪自 [ytdl-org/youtube-dl](https://github.com/ytdl-org/youtube-dl)

```
language: python
python:
  - "2.7"
  - "3.5"
  - "3.6"
  - "pypy"
  - "pypy3"
dist: trusty
env:
  - YTDL_TEST_SET=core
  - YTDL_TEST_SET=download
matrix:
  include:
    - python: 3.7
      dist: xenial
      env: YTDL_TEST_SET=core
    - python: 3.7
      dist: xenial
      env: YTDL_TEST_SET=download
  allow_failures:
    - env: YTDL_TEST_SET=download
before_install:
  - if [ "$JYTHON" == "true" ]; then ./devscripts/install_jython.sh; fi
script: ./devscripts/run_tests.sh
```

Travis 会为其搭建 12 套环境（docker）:

- 5 种 python×2 种 env = 10 种
- 2 种 matrix-include 特定环境
