---
title: VSCode 最近几个版本的新功能
date: 2019-03-07 18:10:07 +0800
description: " "
authors: wKevin
categories:
  - it
tags:
  - vscode
---

# 新特性：

很久没有升级 VSCode 了，今天有空 update 了一下，顺便把几个版本的 new feature 看了一遍，摘录我喜欢的几条如下：

## 1.29(2018.10)

- Workbench
  - 左侧搜索功能中新增“多行搜索” shift+enter 新开一行
  - References view 转正，不再是预览版
    - References view: 左边的一个新图标、新窗口，只有执行一次 Find All Reference(Shift+Alt+F12) 才会出现

## 1.30(2018.11)

<!--truncate-->

- Debug & Task
  - task.json
    - "runOptions" 中
      - 新增 "runOn" 配置，如
        - `"runOn": "folderOpen"` ：打开文件夹是自动执行此 task
      - 新增 "reevaluateOnRerun" 配置，配合 workbench.action.tasks.reRunTask 使用， 如：
        - `"reevaluateOnRerun": false` ：
    - "presentation" 中新增 "clear" 配置，如
      - `"clear": true`：执行此 task 时自动清理 terminal
  - 增加 **"input variable category"** ，task.json 和 launch.json 都有效
    - 以前 launch.json 中可以使用 `${command:pickNodeProcess}` 来实现提示用户输入参数，但 task.json 中不能实现此功能
    - 本次新增的用户输入功能在 launch.json 和 task.json 中都有效
    - 使用方法
      1. 增加变量类： `"inputs": [{"id":xxx, "type":xxx}, {"id":xxx, "type":xxx}]` 其中的变量可以是：
         - id：即 name
         - type：promptString（输入提示框）、pickString（选择框）
         - description
         - default：默认值（用户之间回车时的值）
         - options：type=pickString 时的选项
      2. 增加变量：在 task.json 的 "tasks" or launch.json 的 "configurations" 中增加 input 变量
         - `${input:<id>}` id 即上面 inputs 中的 id

## 1.31(2019.01)

- 扩展
  - 安装扩展不再需要重启: 个别
- Workbench
  - 树型目录
    - 中可以敲入字符进行筛选，然后点击树根右边的字符仅显示筛选结果
    - 任意选中 1 个，Ctrl+A 可选中同级所有
  - 新增录屏（Screencast）模式
    - F1-Toggle Screencast Mode
    - 然后键盘和鼠标的输入都会有特别标识
- Debug & Task
  - "inputs" 变量类中的变量新增 1 套：command，用于提前测试用户的输入
    - type：新增 command 可选值
    - command：新增参数，指定一个 command
    - args：command 的入参

# Task

还重新整理了一下 Task 的用法：

**task.json 文件**

- 创建
  - `F1` -- `Tasks:Configure Tasks` -- `Create task.json`
    - 会在 ./.vscode/ 下新建 task.json
    - 如果非第一次创建，则不会有 create task.json 选项
- 打开
  - `F1` -- `Tasks:Configure Tasks` -- 选中某条
  - `Ctrl+P` -- `tasks.json`
- 编辑 `tasks.json`
  - label:
  - type:
    - shell:在 bash, cmd, or PowerShell 中运行，参数会传递给 bash
    - process:新开线程运行，弄不好会找不到路径
  - command：
  - windows：
  - group：只有 build、test、none 3 种，分别对应不同的 Command： Run xxx Task
- 执行 Task
  - `F1` -- `Tasks:Run Task` -- 选择 1 个 task
  - `F1` -- `Tasks:Run Build Task` // 快捷键：Ctrl+Shift+B
  - `F1` -- `Tasks:Run Test Task`
