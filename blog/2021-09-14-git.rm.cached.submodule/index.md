---
title: 令人头疼的 git submodule
date: 2021-09-14 18:17:10 +0800
description: " "
authors: wKevin
categories:
  - it
tags:
  - git
---

发现若干 submodule 处于修改状态，想清理到初始状态。

```sh
$ git st
...
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
  (commit or discard the untracked or modified content in submodules)
	modified:   AI/ML-DL/100-Days-Of-ML-Code/100-Days-Of-ML-Code (new commits)
	modified:   AI/ML-DL/Andrew.Ng/machine-learning-yearning (new commits)
	modified:   AI/challenge/kaggle/cifar-10/CIFAR10_mxnet (modified content)
	modified:   AI/challenge/kaggle/cifar-10/cifar10-gluon (modified content)
	modified:   AI/challenge/kaggle/cifar-10/densenet.pytorch (modified content)
```

执行下面 4 类操作都都无法清理。

<!--truncate-->

1. `git submodule update`
1. `git submodule update --init`
1. `git submodule foreach --recursive git reset --hard HEAD`
1. `git submodule foreach --recursive git clean -f`

执行 `git submodule status` 时发现某个 submodule 报错：

```sh
$ git submodule status
......
fatal: no submodule mapping found in .gitmodules for path 'AI/challenge/kaggle/dog-breed-identification/DogBreed_gluon'
```

该 submodule 在 .gitmodules 中找不到了，所以阻塞了前面的 update、foreach 操作。

大概率是该 submodule 已经 `git submodule add` 了，但 .gitmodules 文件被异常编辑了，但执行 `git submodule add` 会直接进入 cache 区，所以普通的删除还不行，只好：

```sh
git rm --cached 'AI/challenge/kaggle/dog-breed-identification/DogBreed_gluon'
rm 'AI/challenge/kaggle/dog-breed-identification/DogBreed_gluon'
```

再执行前面的 1~4 步骤，正常清理。
