---
title: "Python IDE 常用功能及快捷键对比"
date:   2018-06-14 10:16:00 +0800
categories: 
    - it
tags:
    - Python
    - PyCharm
    - VSCode
    - jupyter
image: 
  path: http://img.mp.itc.cn/upload/20160902/d4d813ba49224604b5b3de8d99296c0f_th.jpg
  thumbnail: http://img.mp.itc.cn/upload/20160902/d4d813ba49224604b5b3de8d99296c0f_th.jpg
---

<p align="right">V2018.06.14</p>

|使用频率|动作     |Pycharm     |Wing        |VSCode      |jupyter notebook|
|:---:|------------|------------|------------|------------|------------|
|★★★|Search Everything|**Shift×2** ||/|/|
|★★★|Search File|Ctrl+Alt+N||**Ctrl+P**|/|
|★★★|Search Symbol (Class)|Ctrl+Alt+Shift+N (Ctrl+N)||Ctrl+P,# ; **Ctrl+T**|/|
|★★★|Search Symbol - 当前文件|Ctrl+F12||Ctrl+P,@ ; Ctrl+Shift+O|/|
|★★★|Search Command|Ctrl+Shift+A||Ctrl+P,> ; **F1**|*P*<br>Ctrl+Shift+F|
|★★★|Search Usage|**Alt+F7**<sup>【1】</sup>||**Shift+F12**(仅当前文件)|/|
|★★★|自动补全/智能感知<sup>【2】</sup><br>1.补全选项<br>2.信息提示<br>3.元素列表|1.Ctrl+空格[× 2](包含未import) or 自动显示<br>2.Crtl+P/Q<br>3.Ctrl+空格 or 自动显示| |1.Ctrl+空格 or 自动显示<br>2.Ctrl+空格<br>3.Ctrl+空格 or 自动显示|1./<br>2.Shift+Tab [×2]<br>3./|
|★★★|跳转到定义|Ctrl+B||F12|/|
|★★★|跳到前一个位置|Ctrl+Shift+Backspace| |Ctrl+Alt+-|/|
|★★★|跳到后一个位置|/| |Ctrl+Shift+-|/|
|★★★|列选择|1.Ctrl+Alt+Insert 打开列模式，鼠标/键盘拖选<br>2.先左键，再Alt，拖选||1.Ctrl+Shift+键盘<br>2.Alt+Shift+左键/键盘|/|
|★★★|选中光标下word的同词|/| |**Ctrl+D**|/|
|★★★|行-移动|Ctrl+Shift+↑↓| |Alt+↑↓|/|
|★★★|重构-重命名|**Shift+F6**||/|/|
|★★★|Run|Shift+F10| |Ctrl+F5|Shift+Enter：运行并下跳<br>Ctrl+Enter：运行但不下跳<br>Alt+Enter：运行并下插|
|★★★|Debug/StopDebug<br>StepOver<br>StepIn<br>StepOut|Shift+F9/Ctrl+F2<br>F8<br>F7<br>Shift+F8| |F5/Shift+F5<br>F10<br>F11<br>Shift+F11|/|
|★★★|Cell操作|/|/|/|*增拷粘剪删：A/B/C/V/X/D×2*<br>*变为Code/MD/Raw: Y/M/R*|
|★★|窗口间选择|Alt+1/2/3.. : 工具栏<br>Esc : 编辑窗口<br>Alt+F12 : CMD窗口||Ctrl+0：工具栏<br>Ctrl+1/2/3.. : 编辑窗口<br>Ctrl+\` : CMD窗口 |/|
|★★|加、去注释|Ctrl+/<sup>【3】</sup>| |Ctrl+/ <sup>【4】</sup>|/ |
|★★|高亮并保持|Ctrl+Shift+F7<br>（F3，Shift+F3）| |/|/|
|★★|行-拷贝+粘贴|Ctrl+D||C+A+S+↑↓|/|
|★★|当前可用Action|Alt+Enter||/|/|
|★|打开最近使用文件|Ctrl+E| || |
|★|方法之间跳转|Alt+↑↓| | | |
|★|tab标签选择|Alt+Home||推荐AutoFileName扩展||
|☆|Code-Override Methods<sup>【5】</sup>|⌃O||||
|☆|输入、搜索 inspection|Ctrl+Alt+Shift+I||||
|☆|虚拟环境的支持|★★★||★★|★★★|


**说明**

* 主要是功能对比，快捷键Pycharm、Wing、VSCode都是支持多种模式（vi、vs……），此处仅为默认模式，且**基于Linux版进行对比**。
* 记住**3★**的项目，基本可以脱离鼠标操作
* **粗体**：特色功能
* **/**：没有此功能
* 空白：有此功能，但没有快捷键（或待补充快捷键）
* *斜体* : notebook 的 Command Mode，否则为 Edit Mode
* VSCode、Wing、PyCharm 都是 Windows、Linux、macOS 3操作系统通用的优秀软件，个人适用建议：
    * notebook：适用于教学和演练
    * VSCode：适用与小型项目
    * Wing：适用与中型项目
    * PyCharm：适用于大型项目

**引用**

1. Ubunut系统快捷键 Alt+F7 是 Move Window，和Pycharm冲突，需要修改其中一个，或用`右键--Find Usage` 或 `Shift×2 - Find Usage`
2. VSCode 提出了**[IntelliSense 智能感知](https://code.visualstudio.com/docs/editor/intellisense) **的概念，集成了多个功能，此处沿用
    * 补全选项：在输入各种符号（func、class、变量、关键字、snippet……）时列出可供选择的项，需要软件创建字符串索引
        * 补全选项的选择和上屏效果各个软件略有不同
            * PyCharm：
                * Ctrl+Enter/. ：选择第一个补全结果
                * Tab：选中的那条上屏，但会替换掉原来的变量
                * Enter：选中的那条上屏，但不会替换原来的变量
            * VSCode：
                * Tab、Enter同效：选中的那条上屏，不会替换原来的变量
    * 信息提示：为自动补全的候选项显示其详细信息（注释、说明等），适用于函数、入参、snippet……，需要软件能够抓取目标上下文信息
    * 元素列表：当在class、struct等变量后输入`.`之后，能够列出所包含的元素，需要软件能够分析成员、尤其是类的继承、重载等关系分析
3. 会自动走到下一行
4. `auto-comment-blocks.singleLineBlockOnEnter`可以控制`回车`or`Shift+回车`才是默认加上注释符号
5. Code-Override Methods: 重载某方法，弹出父类中可重载的方法，选中后自动生成模板代码

**版本历史**

* V2018.06.14: 完成Pycharm、VSCode、Notebook的第一稿
  
**ToDo**

* Wing