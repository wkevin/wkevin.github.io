---
title: 对比 yarn 和 npm 创建 Tauri 项目
date: 2022-01-22 19:21:43 +0800
description:
author: wKevin
categories:
  - it
tags:
  - tauri
---

![](/images/posts/2022-01-22-create-tauri-app/icon.png)

一直想用前后端技术栈做个跨平台（Win/Linux/macOS）的 APP，前几年了解过 Electron，到后来一直没有应用场景，就放下了，最近又掌握了一下最新情况：

| 框架     | 前端                       | 后端       |
| -------- | -------------------------- | ---------- |
| Electron | Angular/VUE/React          | typescript |
| Wails    | VUE/React                  | go         |
| Goxygen  | Angular/VUE/React          | go         |
| Tauri    | Angular/VUE/React/Vite/... | rust       |

前几天恰逢有个场景，就试了一下 [Tauri](https://tauri.studio/)，相比 Electron, Tauri 不会把 node 和 chromium 打包到最终 APP，所以最终构建出的版本会小很多，运行速度也快很多。

用了 2 天跑起来了一个基本的 APP，前端 `Vite + VUE4 + Element-plus + TypeScript`，后端 Rust。尤其是在公司 Proxy 的后面，第一步脚手架搭建环境通常会遇到一些困难，记录如下。

执行脚手架之前，首先还是要配置 npm 镜像源和 no-proxy 配置项：

- `npm config set registry <公司内镜像源>` 公网上当然是用淘宝源、中科大源……
- `npm config set no-proxy <公司内镜像源>` 公网上则不需要，公司内则必须。因为脚手架执行过程中有一些操作需要通过 proxy 访问外网，所以 shell 的 http_proxy 环境变量必须配置，但下载 npm 镜像源不使用 proxy，所以我将镜像源配置到了 no_proxy 环境变量中 —— 可是，npm 不认这个环境变量，反复折磨了我 2h，终于在 stackoverflow 上看到网友的解决方案：将 no_proxy 配置到 npm 的 config 中。

下面是 yarn 和 npx 两种用脚手架的方式对比，运行阶段是相同的，整体来说 yarn 的成功率会高一些，反复安装的速度也大幅提升，必须首选 yarn：

- yarn: `yarn create tauri-app`
- npm: `npx create-tauri-app`

| 阶段                                                    | 说明                                                   | yarn             | npm                 |
| ------------------------------------------------------- | ------------------------------------------------------ | ---------------- | ------------------- |
| 准备脚手架                                              | Install create-tauri-app@1.0.0-beta.4                  | 正常             | 正常                |
| 交互式配置                                              | app name/title/UI reciped 等                           | 正常             | 正常                |
| `>>Running initial command(s)`                          | 安装 create-vite                                       | 正常             | 正常                |
| `>> Installing any additional`<br>`needed dependencies` | 安装 vue,vite,ts,tauri-apps/cli 直接包及其 370+ 依赖包 | 优秀<br>[注 1]   | 偶发失败<br>[注 2]  |
| `>> Updating "package.json"`                            | 将项目配置写入 package.json                            | 正常             | 正常                |
| `>> Running "tauri init"`                               | 先 Download Rust CLI [注 3]，然后执行初始化[注 4]      | 一次下载         | 反复下载            |
| `>> Updating "tauri.conf.json"`                         |                                                        |                  |                     |
| `>> Running final command(s)`                           | `vue-tsc --noEmit && vite build`                       |                  |                     |
| 运行                                                    | `cd myproject`                                         | `yarn tauri dev` | `npm run tauri dev` |

注：

1. yarn 下载的包会缓存在 `yarn cache dir` 目录下面，然后在项目目录下的 node_modules 下创建软连接，所以重复安装时会非常快速，并节省硬盘空间。
2. 多次出现安装不完整的情况，以至于后面使用 esbuild 包总是找不到，其实 esbuild 是 vite 所依赖的，安装 vite 时应该装上。
3. Downloading Rust CLI 下载的是 rust 版本的 tauri-cli，会把这个命令放在 `node_modules/@tauri-apps/cli/bin/` 下面，是从 github 上下载的，准备好科学上网，一旦成功最好保存好。但 yarn 就放心吧，以后用的都是软连接，不会再重复下载了。
4. `$ tauri init --app-name demo --window-title demo --dist-dir ../dist --dev-path http://localhost:3000 --ci` 会创建 src-tauri 文件夹。

Good luck!
