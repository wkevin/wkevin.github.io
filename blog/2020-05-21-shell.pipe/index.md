---
title: Linux 管道和连接符
date: 2020-05-21 14:55:23 +0800
description: " "
authors: wKevin
categories:
  - it
tags:
  - shell
---

为了让定时播放的吃饭音乐能够随机选择，重写了一下 crontab 的配置：

```
49 11 * * 1-6  ls -1 /home/me/Music/mp3/*.mp3 | sort --random-sort | head -1 | xargs -I{} nohup play {} fade t 0:20> /dev/null 2>&1 &
```

其中又复习了一下 shell 的管道和连接符。

## 管道：`|`

- 一些 shell 命令（如 cat）有这样的行为规范：
  - 读到命令行参数送给 main 入口函数
    - 是文件，则操作文件
    - 是`-`符号，则操作 stdin（并不作为文件）
  - 没有命令行参数，则从 stdin 读取
  - 举例：
    - `cat`：单独执行 cat 命令会等待用户输入，然后 cat 出来
    - `echo 'file1' | cat` cat 从 stdin 中读取
    - `echo 'file1' | cat file2` cat 有入参时，就不再从 stdin 中读取，所以不会打印 main
    - `echo 'file1' | cat -` cat 遇到`-`入参，从 stdin 读取，但仅是打印“file1”字符串，并不是打印 file1 内容
    - `echo 'file1' | cat - file2` 会先打印出 file1 字符串，然后是 file2 的内容。
- 一些命令给出了专门的参数指定文件名，这样可以更好的使用 `-`
  - 举例
    - `ls -1 *.mp3 | sort --random-sort | head -1 | mpg123 -@ -`
- xargs 能够把管道中的字符串转化成后面命令的参数
  - `echo 'file1' | xargs cat` == `cat file1`
  - `echo 'file1' | xargs -I{} cat {}` == `cat file1` 用 -I 指定占位符，以便后面命令用的更灵活
  - `echo 'file1' | xargs -I{} play {} fade t 0:10` 此时如果不用占位符，play 则很难成功执行

## 连接符：`;`,`&&`,`||`

- `cmd1 ; cmd2` ：cmd2 总会执行
- `cmd1 && cmd2` ：cmd1 成功，cmd2 才会执行
- `cmd1 || cmd2` ：cmd1 失败，cmd2 才会执行
