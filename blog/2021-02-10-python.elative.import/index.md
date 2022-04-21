---
title: Python 相对引用导入
date: 2021-02-10 15:17:16 +0800
description: " "
authors: wKevin
categories:
  - it
tags:
  - python
  - import
---

![](./images/python.relative.import.svg)

一图解释 Python 相对引用的 import

<!--truncate-->

知识点：

- python 中有包（package）和模块（module）
  - 包有 2 种：
    - 普通包（一直以来都有的）：即包含 `__init__.py` 文件的文件夹
    - 命名空间包（python3.2 才加入的）：不需要 `__init__.py` 的文件夹
  - 模块：即一个 .py 文件
- python 文件有 2 种执行模式：顶层脚本、模块（细分为：顶层模块、非顶层模块）
  - `python foo/bar.py` 方式执行时，bar.py 即顶层脚本。
  - `python -m foo.bar` 执行，bar 为顶层模块。
  - 无论何处被 `import` 导入并执行的，是非顶层模块运行。
- `__name__` 用于区分作用域
  - 当以顶层脚本或顶层模块运行时 `__name__` 的值是 `__main__`
  - 当以非顶层模块运行时 `__name__` 是命名空间（namespace）
  - 所以可以通过检查自己的 `__name__` 来得知是否运行在 main 作用域中（顶层脚本，或顶层模块）
- `__package__` :当以模块运行时，`__package__` 才会有值
  - 当模块是包时，其 `__package__` 值应该设为其 `__name__` 值
  - 当模块不是包时，对于最高层级模块 `__package__` 应该设为空字符串，对于子模块则应该设为其父包名

**import 相对路径是根据 `__package__` 来计算的：**

- `python main.py` 时，`__package__` 为 None，相对导入失败
- `python -m main` 时，`__package__` 为空，相对导入失败
- `python -m foo.main` 时，`__package__` 为 foo，相对导入 `.bar` 成功，`..hello` 失败
- `python -m root.foo.main` 时，`__package__` 为 root.foo，`..hello` 成功
