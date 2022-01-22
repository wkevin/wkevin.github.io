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

恰逢有个场景，就试了一下 [Tauri](https://tauri.studio/)，相比 Electron, Tauri 不将 node 和 chromium 打包到最终 APP，所以最终构建出的版本会小很多。

用了 2 天跑起来了一个基本的 APP，前端 `Vite + VUE4 + Element-plus + TypeScript`，后端 Rust，在公司 Proxy 后面，第一步脚手架搭建环境通常会遇到一些困难，记录如下：

执行 `yarn create tauri-app` 或 `npx create-tauri-app` 之前，首先还是要配置 npm 镜像源和 no-proxy 配置项：

- `npm config set registry <公司内 npm 镜像源>` 公网上当然是用淘宝源、中科大源……
- `npm config set no-proxy <公司内 npm 镜像源>` 公网上则不需要，公司内则必须，因为 npm 访问镜像源不使用 proxy，但后面的 Download Rust CLI 等操作又需要 proxy，但是 npm 又不使用 shell 的 no_proxy 环境变量，所以这个配置太关键了，搞了我至少 2h 才在 stackoverflow 上看到网友的这个解决方案。

下面是 yarn 和 npx 2 种是用脚手架的方式，整体来说 yarn 的成功率会高一些，反复安装的速度也大幅提升，必须首选 yarn，具体对比如下：

| 阶段                                                    | 说明                                                   | `yarn create tauri-app` | `npx create-tauri-app` |
| ------------------------------------------------------- | ------------------------------------------------------ | ----------------------- | ---------------------- |
| 准备脚手架                                              | Install create-tauri-app@1.0.0-beta.4                  | 正常                    | 正常                   |
| 交互式配置                                              | app name/title/UI reciped 等                           | 正常                    | 正常                   |
| `>>Running initial command(s)`                          | 安装 create-vite                                       | 正常                    | 正常                   |
| `>> Installing any additional`<br>`needed dependencies` | 安装 vue,vite,ts,tauri-apps/cli 直接包及其 370+ 依赖包 | 优秀 [注 1]             | 偶发失败 [注 2]        |
| `>> Updating "package.json"`                            | 将项目配置写入 package.json                            | 正常                    | 正常                   |
| `>> Running "tauri init"`                               | 先 Download Rust CLI [注 3]，然后执行初始化[注 4]      | 不用反复下载            | 需要反复下载           |
| `>> Updating "tauri.conf.json"`                         |                                                        |                         |                        |
| `>> Running final command(s)`                           | `vue-tsc --noEmit && vite build`                       |                         |                        |
| 运行                                                    | `cd myproject`                                         | `yarn tauri dev`        | `npm run tauri dev`    |

注：

1. yarn 下载的包会缓存在 `yarn cache dir` 目录下面，然后在项目目录下的 node_modules 下创建软连接，所以重复安装时会非常快速，并节省硬盘空间。
2. 多次出现安装不完整的情况，以至于后面使用 esbuild 包总是找不到，其实 esbuild 是 vite 所依赖的，安装 vite 时应该装上。
3. Downloading Rust CLI 下载的是 rust 版本的 tauri-cli，会把这个命令放在 `node_modules/@tauri-apps/cli/bin/` 下面，是从 github 上下载的，准备好科学上网，一旦成功最好保存好。但 yarn 就放心吧，以后用的都是软连接，不会再重复下载了。
4. `$ tauri init --app-name demo --window-title demo --dist-dir ../dist --dev-path http://localhost:3000 --ci` 会创建 src-tauri 文件夹。

Good luck!
