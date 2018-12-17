---
title: "仪器通讯接口简史"
date:   2015-02-14 10:16:00 +0800
categories: 
    - it
tags:
    - VISA
    - SCPI
    - VPP
image: 
  path: https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=91784127,1318939839&fm=26&gp=0.jpg
---

1960`，个人电脑还只在科幻书籍中的年代，当年的惠普主营业务还是电气领域。

1965年，惠普在成立26年的时候，收购了宾西的F&M科技公司，跻身于分析仪器领域，同年推出了 HP-IB(HP Interface Bus)接口规范，应用在自己的医疗和测量仪表中，这是个像串口、I2C、PIC一样的物理接口协议。但在随后的几年里，HP也对仪表领域的雄心壮志一发不可收拾，HP-IB 也逐渐被HP推广成了IEEE的标准，直到后来的安捷伦成立。


HP-IB 成为业内既成规范之后，改了个更高大上的名字 GPIB(General-Purpose Interface Bus)，但仍是个物理层+链路层的协议，规定了总线电平、双向异步、并行比特、支持级联…… 当年仪表里面还没有操作系统，还叫做下位机，操作仪表的设备叫做上位机，上位机里的软件还是用 BASIC 语言编写的…… 就像现在的功放（PA），控制功放的TR板只用一根I2C总线就把PA搞定了。另外，I2C和GPIB有个共同点：都能够级联，URAT就不行了。

学过《计算机组成原理》的同学可能还记得Motorola的一款经典CPU：68k，那是1979年的作品，32位的总线和寄存器、big-ending，应用在PDP-11、VAX等这种庞然大物的工作站中，放在研究所、高校里面给教授们搞科研。68k众多创新中有一条：[VMEbus](http://en.wikipedia.org/wiki/VMEbus)，这种CPU对外扩展接口的16bit总线，搭着68k的顺风车迅速成长为主板和扩展卡之间、主板与主板之间的通用通信接口，后来也发展出了32bit、64bit。

80年代，个人计算机（PC）时代来了，世界的各个角落都能放一台PC，插一个卡来控制仪表了，也能用C语言开发驱动了。1987年6月，Colorado Data System,Hewlett Packard,Racal Dana, Tektronix 和 Wavetek等5家公司成立[VXIbus联盟](http://www.vxibus.org/)，在VMEBus、IEEE488等标准基础上制定“具有开发体系结构的仪器总线标准”,VXI(VME eXtensions for Instrumentation) 名字中就能看出 VME 的身影。1987年7月，VXIbus联盟发布了第一个版本：VXI-1，几乎就是VME的克隆，但你注意了没有，Motorola并没有在这个VXI联盟中，所以 VXI-1和VME只能做孪生兄弟，不能合并归一。这种事情并不少见，ANSI C & ISO C 也是缠的难舍难分。

时间过的很快，转眼90年代了，但其实对仪表接口来说，发展的还是相当缓慢，毕竟还是在摩尔定律的前期。一个大得的进展就是1990年的 SCPI(Standard Commands for Programmable Instruments) 了，这是IEEE搞的一套树状分层结构的命令集，其实就是定义了若干个操作的ASCII字符串，比如，通用的命令，如配置仪器参数的命令CONFigure，测量命令MEASure等。SCPI 在 ISO 7层结构中属于应用层，没物理层和链路层啥事，所以这些做物理层的仪表厂家们都乐得其所，让IEEE来干吧。IEEE也喜欢干些有一定现实基础的，风险不是很高的规范性工作，比如92年9月，IEEE 又将 VXI 升华为自己的 IEEE-1552标准。

把 SCPI 字符串发给仪表的PC驱动（windows dll库等）还都是由各自厂家开发的，IEEE 控制不了也不想控制，但确实用起来受限制，如果能安装一个库就能向所有仪表发送 SCPI 命令就好了，其实这并不难，几个厂家从驱动团队中各抽一人，很快就能搞定。1993年NI、Tektronics、Racal等著名仪器公司成立了VPP(VXI plug & play)联盟，并制定了 VPP 规范，目标只有一个：为VXIbus开发通用的驱动，即插即用 —— 就像C语言标准库接口（19个头文件，定义了百来个宏定义和函数），用这个VPP编程接口发送SCPI命令字符串就能控制仪表了——全世界这么多厂家能够做到这一步，好像真的不容易啊。

VPP包括以下几部分：

* VPP-1      ： Charter Document
* VPP-2      ： System Frameworks Specification
* VPP-3.x    ： Instrument Driver Specifications，仪器驱动程序设计
* VPP-4.x    ： VISA Virtual Instrument Software Architecture Specifications
* VPP-6      ： Installation and Packaging Specification
* VPP-7      ： Soft Front Panel Specification，软面板
* VPP-8      ： VXI Module/Mainframe to Receiver Interconnection
* VPP-9      ： Instrument Vendor Abbreviations

VPP就像POSIX接口一样，是个系统级的工程，其中的 VPP-4 规范出的 VISA(The Virtual Instrument Software Architecture) 就主要描述了 I/O API，如果要编程的话，仔细看VISA的文档，就跟写C语言要仔细看Standrd C，写C++要仔细看MFC一样。

编程接口很快就写好了，谁来实现是个问题，就像几个科室联合写了个方案，具体落实谁来出人开发是另外一回事了，项目经理可以点名：那个谁谁谁，听说你linux熟，这个模块就交给你来了。但VPP的实现可没有项目经理，还好，大厂勇敢的挑起了重担，NI实现了一把（[NI-VISA](http://www.ni.com/visa/)），安捷伦实现了一把（[Agilent IO](http://www.chem.agilent.com/search/?Ntt=io%20library)），我猜罗德、泰克和安利应该也有，只不过用的少，你想这又何必呢，用 Agilent IO 已经能够和几乎所有仪表通信了，谁还再多安装一个呢。

一切看来都在向好的方向发展，物理层和链路层统一了：VXI联盟的VXIbus；高层控制命令统一了：IEEE的SCPI；PC上的函数接口统一了：VPP联盟的VPP规范。但还没完…… 因为90年代是计算机界的大航海时代！

1998年8月，由九个公司成立的 [IVI（Interchangeable Virtual Instruments）基金会](http://www.ivifoundation.org/)，致力于推动仪表的统一编程和开发，为的是响应快速增长的PC上开发仪表控制的需求。要知道，基金会（foundation）和联盟（alliance）的玩法是不一样的，联盟有立场，比如二战的盟军（allied forces），为的是联手干翻对手；基金会则是庄家出钱但不参与基金会运营，基金会大多从事公益、慈善活动。从另一角度来说，名称和玩法的改变也是时代进步的选择，再弄些联盟的冷战字眼会显得很扎眼。

IVI基金会制定的 [IVI 规范](http://www.ivifoundation.org/specifications/default.aspx) 很快取得了一片喝彩和认同，不论是迫于无奈，还是心甘情愿，SCPI和VPP都在2002年并入和IVI基金会，成为 IVI 规范中的一部分。

IVI 成了包含驱动、指令集（SCPI）、函数编程接口（VISA）等各个门派的武功大全，唯独物理层的少林派（南少林VXIbus/北少林VMEbus）还没有被他收至麾下。

少林派在释长老的带领下与时俱进，自我蜕变:

* VXI 发展出 VXI-11，从SCPI终于过度到TCP/IP
* 2004年Agilent 和 VXI Technology 两公司建立的LXI联盟，[LXI（LAN eXtension for instrumentation）](http://www.lxistandard.org/) 意思是 VXI 扩展到 LAN 局域网上，所以可以用LXI的驱动与LXI的仪表通信，也可以使用 VXI-11的驱动与 LXI 的仪表通信。

好了，故事讲完了，再来整理一下关键词：

* 物理层/链路层：VMEbus(by Moto) --> VXIbus(by VXI联盟) --> LXIbus(by LXI联盟)
* 控制命令：SCPI(by IEEE) --------\_
* 驱动和编程接口：VPP(by VPP联盟) --> IVI(by IVI基金会)

>以上故事大多猜测、杜撰，如有错误，不吝指正。

# 参考资料

## VMEbus (Versa Module Europa bus)


## VXI(VME eXtension for Instrumentation)

The VXIbus specification combines VMEbus with GPIB features

* 1987年6月，Colorado Data System,Hewlett Packard,Racal Dana, Tektronix 和 Wavetek等5家公司成立委员会（[VXIbus联盟](http://www.vxibus.org/)），在VMEBus、IEEE488等标准基础上制定“具有开发体系结构的仪器总线标准”。
* 1987年7月，VXIbus联盟发布了第一个版本。
* 1992年9月，IEEE批准为 IEEE-1552标准。

VXI规范目前包括3个文档：
1. VXI-1 : VXIbus System Specification
2. VXI-10: Fast Data Channel Specification
3. VXI-11: TCP/IP Instrument Protocol Specification

## VPP(VXI plug & play)

1993年NI、Tektronics、Racal等著名仪器公司成立了VXIplug&play 联盟并制定了VXIplug&play 规范，简称VPP规范。目标是为VXIbus开发通用的驱动。

VPP包括以下几部分：

* VPP-1       Charter Document
* VPP-2       System Frameworks Specification
* VPP-3.x     Instrument Driver Specifications，仪器驱动程序设计
* VPP-4.x     VISA Virtual Instrument Software Architecture Specifications
* VPP-6       Installation and Packaging Specification
* VPP-7       Soft Front Panel Specification，软面板
* VPP-8       VXI Module/Mainframe to Receiver Interconnection
* VPP-9       Instrument Vendor Abbreviations


* VISA(Virtual Instrument Software Architecture)
    - [Wiki](http://en.wikipedia.org/wiki/Virtual_Instrument_Software_Architecture)
    - The Virtual Instrument Software Architecture (VISA) is a standard for configuring, programming, and troubleshooting instrumentation systems comprising GPIB, VXI, PXI, Serial, Ethernet, and/or USB interfaces. VISA provides the programming interface between the hardware and development environments such as LabVIEW, LabWindows/CVI, and Measurement Studio for Microsoft Visual Studio. 
    - 发起人：
        + Agilent Technologies
        + Anritsu
        + Bustec
        + Keysight Technologies
        + Kikusui
        + National Instruments
        + Rohde & Schwarz
        + Tektronix
    - 实现：
        + [NI-VISA](http://www.ni.com/visa/):
            * software libraries, interactive utilities such as NI I/O Trace and the VISA Interactive Control, and configuration programs through Measurement & Automation Explorer for all your development needs.


## SCPI

2002年，SCPI并入IVI基金会

## IVI

1998年8月，由九个公司成立的IVI（Interchangeable Virtual Instruments）基金会。
2002年合入VPP后，在VPP的基础上为仪器驱动程序制定了新的编程接口标准，使应用程序可以实现完全独立于硬件，独立于接口，并增加了仪器仿真、状态缓存等机制，大大提高了仪器驱动程序的执行效率。
IVI基金会制订的仪器驱动程序规范将仪器分成基本功能和扩展功能两部分，并将所有的仪器进行分类。更换同类仪器的时候，只要修改或更换那些特殊功能的代码，也就是具体的驱动程序，而不必改动类驱动程序。
已经公布了九类仪器的规范：示波器、开关、任意波形发生器/函数发生器、数字电压表、电源、射频信号发生器、频谱分析仪、功率计和数字I/O仪器。

IVI 协议包括几部分：

* Architecture （IVI-3.x）：IVI/IVI-C/IVI-COM/IVI-NET等驱动
* Instrument Classes （IVI-4.x）：针对示波器、信号源……等仪表分别描述Class
* HiSLIP Network Protocol Specifications（IVI-6.x）：告诉网络协议说明
* SCPI：继承并增强SCPI
* VISA（VPP-4.x）：继承并增强VPP
* Instrument Driver（VPP-3.x）：继承并增强VPP

## LXI (LAN eXtensions for Instrumentation) 

http://www.lxistandard.org/

可以使用 VXI-11 的接口与 LXI 的仪表通信

Many LXI instruments communicate via the LAN through one of two protocols, VXI-11 and HiSLIP