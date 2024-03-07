"use strict";(self.webpackChunkdocusaurus_site=self.webpackChunkdocusaurus_site||[]).push([[97281],{44122:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>o,contentTitle:()=>r,default:()=>h,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var s=t(74848),a=t(28453);const l={title:"\u914d\u7f6e matplotlib \u4e2d\u6587\u5b57\u4f53",format:"docusaurus-md"},r=void 0,i={permalink:"/blog/2023/07/03/matplotlib.zh.font",source:"@site/blog/2023-07-03-matplotlib.zh.font/index.md",title:"\u914d\u7f6e matplotlib \u4e2d\u6587\u5b57\u4f53",description:"matplotlib",date:"2023-07-03T00:00:00.000Z",formattedDate:"July 3, 2023",tags:[],hasTruncateMarker:!0,authors:[],frontMatter:{title:"\u914d\u7f6e matplotlib \u4e2d\u6587\u5b57\u4f53",format:"docusaurus-md"},unlisted:!1,prevItem:{title:"Python3.12 \u4ecb\u7ecd",permalink:"/blog/2023/11/21/python3.12"},nextItem:{title:"ViT ChatGPT \u95ee\u7b54",permalink:"/blog/2023/05/17/vits"}},o={authorsImageUrls:[]},c=[{value:"mpl.FontManager",id:"mplfontmanager",level:2},{value:"\u4e09\u7c7b\u5b57\u4f53",id:"\u4e09\u7c7b\u5b57\u4f53",level:2},{value:"\u53d1\u73b0\u4e2d\u6587\u5b57\u4f53",id:"\u53d1\u73b0\u4e2d\u6587\u5b57\u4f53",level:2},{value:"\u914d\u7f6e plot \u5b57\u4f53",id:"\u914d\u7f6e-plot-\u5b57\u4f53",level:2},{value:"\u6dfb\u52a0 plot \u4e2d\u6587\u5b57\u4f53",id:"\u6dfb\u52a0-plot-\u4e2d\u6587\u5b57\u4f53",level:2}];function d(n){const e={a:"a",code:"code",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.p,{children:"matplotlib\n\u4e2d\u4f5c\u56fe\u65f6\u5e38\u9047\u5230\u4e2d\u6587\u663e\u793a\u4e71\u7801\u7684\u95ee\u9898\uff0c\u672c\u6587\u63a2\u7d22\u4e00\u4e0b\u539f\u56e0\uff0c\u5e76\u5728\u6587\u672b\u7ed9\u51fa\u4e00\u4e2a\u901a\u7528\u7684\u89e3\u51b3\u65b9\u6848\u3002"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-python",children:"import os\nimport matplotlib as mpl\nimport matplotlib.pyplot as plt\n"})}),"\n",(0,s.jsx)(e.h2,{id:"mplfontmanager",children:"mpl.FontManager"}),"\n",(0,s.jsx)(e.p,{children:"matplotlib\n\u4e2d\u6709\u4e2a\u5b57\u4f53\u7ba1\u7406\u7c7b\uff0c\u53ef\u4ee5\u67e5\u8be2\u3001\u6dfb\u52a0\u3001\u5220\u9664\u5b57\u4f53\uff0c\u5305\u62ec\u7cfb\u7edf\u5b89\u88c5\u3001matplotlib\n\u5b89\u88c5\u3001\u7528\u6237\u81ea\u5df1\u5b89\u88c5\u7684 3 \u7c7b\u5b57\u4f53\u3002"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-python",children:'fm = mpl.font_manager.FontManager()\nprint(len(fm.ttflist))\nprint(fm.ttflist[0])\nprint(len(fm.afmlist))\nprint(fm.afmlist[0])\n\nprint(f"manager \u627e\u5230\u4e86 {len(fm.ttflist)} \u4e2a ttf \u5b57\u4f53\uff0c{len(fm.afmlist)} \u4e2a afm \u5b57\u4f53\u3002")\n'})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-text",children:"551\nFontEntry(fname='/data/kevin/workspace/venv/venv310/lib/python3.10/site-packages/matplotlib/mpl-data/fonts/ttf/DejaVuSans-Bold.ttf', name='DejaVu Sans', style='normal', variant='normal', weight=700, stretch='normal', size='scalable')\n138\nFontEntry(fname='/data/kevin/workspace/venv/venv310/lib/python3.10/site-packages/matplotlib/mpl-data/fonts/afm/putb8a.afm', name='Utopia', style='normal', variant='normal', weight='bold', stretch='normal', size='scalable')\nmanager \u627e\u5230\u4e86 551 \u4e2a ttf \u5b57\u4f53\uff0c138 \u4e2a afm \u5b57\u4f53\u3002\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u5b57\u4f53\u7531 FontEntry Class \u5c01\u88c5\uff0c\u5305\u62ec fname\u3001name\u3001style\u2026 \u7b49\u6210\u5458"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"ttf:\n\u82f9\u679c\u516c\u53f8\u548c\u5fae\u8f6f\u516c\u53f8\u5171\u540c\u5f00\u53d1\u7684\u4e00\u79cd\u7535\u8111\u8f6e\u5ed3\u5b57\u4f53\uff08\u66f2\u7ebf\u63cf\u8fb9\u5b57\uff09\u7c7b\u578b\u6807\u51c6\u3002"}),"\n",(0,s.jsx)(e.li,{children:"afm\uff1aAdobe \u516c\u53f8\u5f00\u53d1\uff0c\u5e76\u5305\u542b\u4e86\u6709\u5173 Type 1 PostScript\n\u5b57\u4f53\u7684\u5ea6\u91cf\u7279\u6027\u7684\u4fe1\u606f\u3002AFM \u7ed3\u6784\u9700\u8981\u4e00\u4e2a\u5b9a\u4e49\u4e86\u6bcf\u4e00\u4e2a\u5b57\u4f53\u7b26\u53f7\u7684\u6837\u5f0f\u7684\u63a7\u5236\u6a21\u7248\u3002\u5b83\u4e3b\u8981\u88ab\u7528\u4e8e UNIX\u3002"}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"\u901a\u8fc7 manager \u8fd8\u80fd\u67e5\u8be2\u5f53\u524d matplotlib \u4f7f\u7528\u7684\u9ed8\u8ba4\u5b57\u4f53\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-python",children:"print(fm.defaultFamily)\nprint(fm.defaultFont)\n"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-text",children:"{'ttf': 'DejaVu Sans', 'afm': 'Helvetica'}\n{'ttf': '/data/kevin/workspace/venv/venv310/lib/python3.10/site-packages/matplotlib/mpl-data/fonts/ttf/DejaVuSans.ttf', 'afm': '/data/kevin/workspace/venv/venv310/lib/python3.10/site-packages/matplotlib/mpl-data/fonts/pdfcorefonts/Helvetica.afm'}\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u5982\u679c\u4e0d\u51fa\u610f\u5916\uff0c\u4f7f\u7528\u7684\u90fd\u662f matplotlib \u81ea\u5e26\u7684\u5b57\u4f53\uff0cDejaVu Sans \u548c\nHelvetica\uff0c\u6587\u4ef6\u8def\u5f84\u5728 matplotlib \u5b89\u88c5\u5305\u6240\u5728\u7684\u6587\u4ef6\u5939\u4e0b\u3002"}),"\n",(0,s.jsxs)(e.p,{children:["DejaVu\n\u5b57\u4f53\u662f\u5386\u53f2\u60a0\u4e45\u7684\u5f00\u6e90\u5b57\u4f53\uff0c",(0,s.jsx)(e.a,{href:"https://github.com/dejavu-fonts/dejavu-fonts",children:"github"}),"\n\u4e0a\u4e0b\u8f7d\u8be5\u5b57\u4f53\uff0c3M\n\u5de6\u53f3\uff0c\u6709\u4f53\u79ef\u4e0a\u770b\u4e5f\u80fd\u731c\u51fa\u6765\u4e0d\u53ef\u80fd\u5305\u542b\u4e2d\u65e5\u97e9\u7b49\u4e1c\u4e9a\u5b57\u4f53\u3002\u5728\u5176\n",(0,s.jsx)(e.a,{href:"https://dejavu-fonts.github.io/",children:"\u5b98\u7f51"})," \u4e0a\u53ef\u4ee5\u67e5\u8be2\u5b83\u652f\u6301\u7684\u5b57\u7b26\u96c6\u3002"]}),"\n",(0,s.jsx)(e.h2,{id:"\u4e09\u7c7b\u5b57\u4f53",children:"\u4e09\u7c7b\u5b57\u4f53"}),"\n",(0,s.jsx)(e.p,{children:"\u5982\u4f55\u5206\u8fa8\u7cfb\u7edf\u5b89\u88c5\u3001matplotlib \u5b89\u88c5\u3001\u7528\u6237\u81ea\u5df1\u5b89\u88c5\u7684 3 \u7c7b\u5b57\u4f53\uff1f"}),"\n",(0,s.jsx)(e.p,{children:"\u53ef\u4ee5\u4ece fname\n(\u6587\u4ef6\u8def\u5f84)\u5165\u624b\uff0c\u7f3a\u70b9\u662f\u5982\u679c\u7528\u6237\u5f3a\u5236\u5b89\u88c5\u5230\u7cfb\u7edf\u8def\u5f84\u5c31\u5206\u8fa8\u4e0d\u4e86\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-python",children:'ttflist = fm.ttflist\nsysttf = [t for t in ttflist if t.fname.startswith("/usr/")]\nmplttf = [t for t in ttflist if t.fname.find("matplotlib") != -1]\nusrttf = [t for t in ttflist if t.fname.startswith(os.environ["HOME"])]\n\nprint(f"{len(systtf)} \u4e2a\u7cfb\u7edf\u5b89\u88c5\u5b57\u4f53")\nprint(f"{len(mplttf)} \u4e2aMatplotlib\u5b89\u88c5\u5b57\u4f53")\nprint(f"{len(usrttf)} \u4e2a\u7528\u6237\u5b89\u88c5\u5b57\u4f53")\n'})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-text",children:"353 \u4e2a\u7cfb\u7edf\u5b89\u88c5\u5b57\u4f53\n38 \u4e2aMatplotlib\u5b89\u88c5\u5b57\u4f53\n160 \u4e2a\u7528\u6237\u5b89\u88c5\u5b57\u4f53\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u5b57\u4f53\u8fd9\u4e48\u591a\uff0c\u5176\u5b9e\u662f\u5b57\u4f53\u6587\u4ef6\uff0c\u57fa\u672c\u4e0a\u6bcf\u4e2a\u5b57\u4f53\u90fd\u6709\u591a\u79cd\nstyle\uff0c\u6bd4\u5982\uff1a\u6781\u7ec6\u3001\u7ec6\u3001\u6b63\u5e38\u3001\u7c97\u3001\u6781\u7c97\u3001\u659c\u4f53\u2026\u20266\u30017\n\u4e2a\u90fd\u5e38\u7528\uff0c\u6240\u4ee5\u6bcf\u79cd\u5b57\u4f53\u90fd\u591a\u4e2a\u6587\u4ef6\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u73b0\u5728\u6765\u770b\u770b mpl \u9ed8\u8ba4\u7684\u5b57\u4f53 DejaVu Sans \u5728\u54ea\u91cc\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-python",children:'if len([t for t in systtf if t.name.find("DejaVu Sans") != -1]) > 0:\n    print("systtf \u4e2d\u53d1\u73b0 DejaVu Sans")\nif len([t for t in mplttf if t.name.find("DejaVu Sans") != -1]) > 0:\n    print("mplttf \u4e2d\u53d1\u73b0 DejaVu Sans")\nif len([t for t in usrttf if t.name.find("DejaVu Sans") != -1]) > 0:\n    print("usrttf \u4e2d\u53d1\u73b0 DejaVu Sans")\n'})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-text",children:"systtf \u4e2d\u53d1\u73b0 DejaVu Sans\nmplttf \u4e2d\u53d1\u73b0 DejaVu Sans\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u5728 Linux \u4e2d\u53ef\u80fd\u4f1a\u5728\u7cfb\u7edf\u548c mpl \u4e24\u4e2a\u96c6\u5408\u4e2d\u53d1\u73b0 DejaVu\nSans\uff0c\u56e0\u4e3a\u8fd9\u4e2a\u5b57\u4f53\u4e5f\u662f Linux \u9ed8\u8ba4\u81ea\u5e26\u3001\u63a8\u8350\u7684\uff1b"}),"\n",(0,s.jsx)(e.p,{children:"\u5728 Windows \u4e2d\u53ef\u80fd\u53ea\u4f1a\u5728 mpl \u81ea\u5df1\u7684\u96c6\u5408\u4e2d\u53d1\u73b0\u4e86\u3002"}),"\n",(0,s.jsx)(e.h2,{id:"\u53d1\u73b0\u4e2d\u6587\u5b57\u4f53",children:"\u53d1\u73b0\u4e2d\u6587\u5b57\u4f53"}),"\n",(0,s.jsx)(e.p,{children:"\u4f17\u591a\u7684\u5b57\u4f53\u4e2d\u600e\u4e48\u53d1\u73b0\u54ea\u4e9b\u662f\u4e2d\u6587\u5b57\u4f53\uff1f"}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"fc-list :lang=zh"})," \u627e\u5230\u5b57\u4f53 \u2014\u2014 \u4f46\u53ea\u80fd\u7528\u4e8e Linux"]}),"\n",(0,s.jsx)(e.li,{children:"\u540d\u5b57\u4e2d\u5305\u542b CN\u3001zh \u2014\u2014 \u4f46\u5f88\u591a\u4e2d\u6587\u5b57\u4f53\u4e0d\u6ee1\u8db3"}),"\n",(0,s.jsx)(e.li,{children:"\u770b\u6587\u4ef6\u4f53\u79ef\uff0c\u6211\u89c9\u5f97\u81f3\u5c11\u8981\u5927\u4e8e 5M \u5427 \u2014\u2014 \u4f46\u53ea\u80fd\u4f5c\u4e3a\u53c2\u8003\uff0c\u4e0d\u80fd\u4f5c\u4e3a\u4f9d\u636e"}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-python",children:'from subprocess import Popen, PIPE\n\n_p = Popen("fc-list :lang=zh", shell=True, stdout=PIPE, encoding="utf-8")\nzhs = _p.communicate()[0]\n\n# \u6355\u83b7\u56de\u6765\u7684 shell \u6253\u5370\u662f\u4e2a\u5b57\u7b26\u4e32\uff0c\u7528 `\\n` \u8868\u793a\u65b0\u884c\uff0c\u5b57\u7b26\u4e32\u5f88\u957f\n# \u9996\u5148\u5206\u5272\u9010\u4e2a\u63d0\u53d6\u51fa\u6765\u3002\nzhs = [zh for zh in zhs.split("\\n") if zh != ""]  # \u53d1\u73b0\u6709\u7a7a\u7684\uff0c\u53bb\u6389\nprint(f"\u53d1\u73b0 {len(zhs)} \u4e2a\u4e2d\u6587\u5b57\u4f53\u6587\u4ef6")\n\n# \u8fdb\u4e00\u6b65\u63d0\u53d6\u51fa\u6587\u4ef6\u8def\u5f84\uff0c\u653e\u5728 zhsfn \u6570\u7ec4\u4e2d\nzhsfn = [zh.split(":")[0] for zh in zhs]\n\n# \u63d0\u53d6\u51fa\u540d\u79f0\uff0c\u653e\u5728 zhsn \u6570\u7ec4\u4e2d\uff0c\u5e76\u53bb\u91cd\nzhsn = list(set([zh.split(":")[1].split(",")[0] for zh in zhs]))\n\nprint(f"\u4e2d\u6587\u5b57\u4f53\uff08\u53bb\u91cd\u540e\uff09\uff1a\\n\u5171 {len(zhsn)}, \\n\u524d3\u4e2a {zhsn[:3]}")\n'})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-text",children:"\u53d1\u73b0 234 \u4e2a\u4e2d\u6587\u5b57\u4f53\u6587\u4ef6\n\u4e2d\u6587\u5b57\u4f53\uff08\u53bb\u91cd\u540e\uff09\uff1a\n\u5171 41,\n\u524d3\u4e2a [' Noto Sans CJK SC', ' AR PL UKai CN', ' AR PL UKai HK']\n"})}),"\n",(0,s.jsxs)(e.p,{children:["\u4e0a\u9762\u67e5\u8be2\u51fa\u4e86\u672c\u673a\u5b89\u88c5\u7684\u6240\u6709\u4e2d\u6587\u5b57\u4f53\uff0c\u4f46",(0,s.jsxs)(e.strong,{children:["\u7279\u522b\u9700\u8981\u6ce8\u610f\u7684\u662f\uff1a\u5e76\u975e\n",(0,s.jsx)(e.code,{children:"fc-list :lang=zh"})," \u80fd\u591f\u627e\u5230\u7684\u5b57\u4f53\uff0cMatplotlib \u90fd\u80fd\u4f7f\u7528\u3002"]})]}),"\n",(0,s.jsxs)(e.p,{children:["\u4e0b\u9762\u5b9a\u4e49\u4e00\u4e2a",(0,s.jsx)(e.strong,{children:"\u7528 fontEntry \u96c6\u5408\u5339\u914d zhsfn"})," \u51fd\u6570\uff0c\u6765\u67e5\u627e\u5165\u53c2\uff08FontEntry\n\u6570\u7ec4\uff09\u4e0e zhsfn \u7684\u4ea4\u96c6\uff0c\u4ee5\u6b64\u53ef\u627e\u51fa Matplitlib \u80fd\u591f\u4f7f\u7528\u7684\u4e2d\u6587\u5b57\u4f53\uff1a"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-python",children:"def intersection_fclistzh_entry(fontEntries):\n    _fs = [t.name for t in fontEntries if t.fname in zhsfn]\n    # _fs = sorted(_fs, key=lambda f: f[1])\n    # _fs.reverse()\n    return list(set(_fs))  # \u53bb\u91cd\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u4e0a\u9762\u51fd\u6570\u4e2d\u505a\u4e86\u53bb\u91cd\uff0c\u5c31\u662f\u6bcf\u79cd\u5b57\u4f53\u7684\u591a\u79cd style \u53ea\u7b97\u4e00\u4e2a \u2014\u2014\n\u8fd9\u4e5f\u662f\u6211\u4eec\u53e3\u5934\u4e0a\u8ba4\u4e3a\u7684\u4e00\u4e2a\u5b57\u4f53\u3002"}),"\n",(0,s.jsx)(e.p,{children:"OK\uff0c\u4e0b\u9762\u53ef\u4ee5\u5206\u522b\u67e5\u627e 3 \u7ea7\u5b57\u4f53\u4e2d\u5404\u81ea\u7684\u4e2d\u6587\u5b57\u4f53\uff1a"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.strong,{children:"\u7cfb\u7edf\u5b89\u88c5\u7684\u4e2d\u6587\u5b57\u4f53\uff1a"})}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-python",children:"intersection_fclistzh_entry(systtf)\n"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-text",children:"['Droid Sans Fallback',\n 'AR PL UKai CN',\n 'Noto Serif CJK JP',\n 'AR PL UMing CN',\n 'Noto Sans CJK JP']\n"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.strong,{children:"Matpltlib \u5b89\u88c5\u7684\u4e2d\u6587\u5b57\u4f53\uff08\u4e0d\u51fa\u610f\u5916\u7684\u8bdd\u6ca1\u6709\uff09\uff1a"})}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-python",children:"intersection_fclistzh_entry(mplttf)\n"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-text",children:"[]\n"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.strong,{children:"\u7528\u6237\u5b89\u88c5\u7684\u4e2d\u6587\u5b57\u4f53\uff1a"})}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-python",children:"intersection_fclistzh_entry(usrttf)\n"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-text",children:"['Sarasa Mono SC Nerd',\n 'Sarasa Mono Slab J',\n 'Sarasa Mono TC',\n 'Sarasa Mono Slab TC',\n 'Sarasa Mono SC',\n 'Sarasa Mono Slab SC',\n 'Sarasa Mono CL',\n 'Source Han Sans CN',\n 'Sarasa Mono Slab CL',\n 'LXGW WenKai Mono',\n 'Sarasa Mono Slab K',\n 'Source Han Serif SC',\n 'Sarasa Mono K',\n 'Sarasa Mono HC',\n 'Source Han Sans HW SC',\n 'LXGW WenKai',\n 'Sarasa Mono Slab HC',\n 'Sarasa Mono J']\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u603b\u5171\u4ea4\u96c6\u591a\u5c11\u4e2a\uff1f"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-python",children:"len(intersection_fclistzh_entry(fm.ttflist))\n"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-text",children:"23\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u8fd9\u91cc\u7684\u6570\u5b57\uff0823\uff09\uff0c\u6bd4\u4e0a\u9762\u6240\u6709\u7684\u6570\u5b57\uff0841\uff09\u8981\u5c11\u4e00\u4e9b\uff0c\u8bf4\u660e Matplotlib\n\u5e76\u4e0d\u80fd\u8ba4\u51fa\u6240\u6709\u5df2\u5b89\u88c5\u7684\u5b57\u4f53\uff0c\u4e2d\u6587\u5b57\u4f53\u4e5f\u5c31\u540c\u7406\u3002"}),"\n",(0,s.jsx)(e.h2,{id:"\u914d\u7f6e-plot-\u5b57\u4f53",children:"\u914d\u7f6e plot \u5b57\u4f53"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-python",children:"import matplotlib.pyplot as plt\n"})}),"\n",(0,s.jsx)(e.p,{children:"plot \u7ed8\u56fe\u53ea\u662f matplotlib \u4e2d\u7684\u4e00\u4e2a\u529f\u80fd\u6a21\u5757\uff0cplot\n\u4f1a\u914d\u7f6e\u81ea\u5df1\u7684\u53c2\u6570\u6765\u5b9a\u4e49\u7ed8\u56fe\u4e2d\u6240\u7528\u5230\u7684\u5b57\u4f53\u3002"}),"\n",(0,s.jsxs)(e.p,{children:["plot \u7684\u53c2\u6570\u5b9a\u4e49\u5728\u5168\u5c40\u53d8\u91cf ",(0,s.jsx)(e.code,{children:"plt.rcParams"})," \u4e2d\uff0c\u5305\u62ec\u65e5\u671f\u683c\u5f0f\u3001 x/y\n\u8f74\u7684\u663e\u793a\u3001figure \u7684\u663e\u793a\u2026\u2026\u5176\u4e2d\u4e5f\u6709 font \u5b57\u4f53\u7684\u914d\u7f6e\uff1a"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-python",children:'plt.rcParams["font.family"]\n'})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-text",children:"['sans-serif']\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u8bf4\u660e plot \u9ed8\u8ba4\u4f7f\u7528\u65e0\u886c\u7ebf\u5b57\u4f53\u3002\u5b57\u4f53\u4e00\u822c\u5206\u4e3a 5 \u7c7b\uff1a"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"serif\uff1a \u886c\u7ebf"}),"\n",(0,s.jsx)(e.li,{children:"sans-serif\uff1a \u65e0\u886c\u7ebf"}),"\n",(0,s.jsx)(e.li,{children:"monospace\uff1a \u7b49\u5bbd"}),"\n",(0,s.jsx)(e.li,{children:"cursive\uff1a"}),"\n",(0,s.jsx)(e.li,{children:"fantasy\uff1a \u827a\u672f\u5b57"}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"\u7ee7\u7eed\u67e5\u770b\u65e0\u886c\u7ebf\u5b57\u4f53\u6709\u54ea\u4e9b\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-python",children:'plt.rcParams["font.sans-serif"][:5]\n'})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-text",children:"['DejaVu Sans',\n 'Bitstream Vera Sans',\n 'Computer Modern Sans Serif',\n 'Lucida Grande',\n 'Verdana']\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u7ee7\u7eed\u67e5\u770b\u65e0\u886c\u7ebf\u5b57\u4f53\u4e2d\u54ea\u4e9b\u662f\u4e2d\u6587\u7684\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-python",children:'def get_font_entry(font_names: [str]):\n    result = []\n    for fn in font_names:\n        result += [entry for entry in fm.ttflist if entry.name == fn]\n\n    return result\n\nintersection_fclistzh_entry(get_font_entry(plt.rcParams["font.sans-serif"]))\n'})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-text",children:"[]\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u4e0d\u51fa\u610f\u5916\uff0c\u6ca1\u6709\u3002"}),"\n",(0,s.jsx)(e.h2,{id:"\u6dfb\u52a0-plot-\u4e2d\u6587\u5b57\u4f53",children:"\u6dfb\u52a0 plot \u4e2d\u6587\u5b57\u4f53"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-python",children:'origin = plt.rcParams["font.sans-serif"]\norigin[:3]\n'})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-text",children:"['DejaVu Sans', 'Bitstream Vera Sans', 'Computer Modern Sans Serif']\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u6ca1\u6709\u4e2d\u6587\u5b57\u4f53\uff0cplot \u4e2d\u7684\u7ed8\u56fe\u9047\u5230\u4e2d\u6587\u5c31\u662f\u4e71\u7801\uff0c\u89e3\u51b3\u7684\u529e\u6cd5\u6709\uff1a"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"baidu \u5230\u7684\u5e38\u89c1\u65b9\u5f0f\uff1a"}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-python",children:'plt.rcParams["font.sans-serif"] = ["SimHei"]\nplt.rcParams["font.sans-serif"]\n'})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-text",children:"['SimHei']\n"})}),"\n",(0,s.jsx)(e.p,{children:"SimHei \u662f Windows \u4e2d\u5e38\u89c1\u7684\u9ed1\u4f53\u4e2d\u6587\uff0cLinux\n\u6ca1\u6709\uff0c\u9700\u8981\u5b89\u88c5\uff0c\u8fd9\u79cd\u65b9\u5f0f\u8de8\u64cd\u4f5c\u7cfb\u7edf\u517c\u5bb9\u6027\u4e0d\u5f3a\uff0c\u4e0d\u597d\u79fb\u690d\u3002"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u4fee\u8ba2 1"}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-python",children:'plt.rcParams["font.sans-serif"] = ["SimHei"] + origin\nplt.rcParams["font.sans-serif"][:3]\n'})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-text",children:"['SimHei', 'DejaVu Sans', 'Bitstream Vera Sans']\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u8fd9\u6837\u4e07\u4e00 SimHei \u6ca1\u6709\uff0c\u5176\u4f59\u5b57\u4f53\u8fd8\u80fd\u7ee7\u7eed\u7528\uff0c\u4e0d\u81f3\u4e8e\u5168\u519b\u8986\u6ca1\u3002"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u4fee\u8ba2 2"}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-python",children:'plt.rcParams["font.sans-serif"] = intersection_fclistzh_entry(fm.ttflist) + origin\nplt.rcParams["font.sans-serif"][:3]\n'})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-text",children:"['Sarasa Mono SC Nerd', 'Sarasa Mono Slab J', 'Sarasa Mono Slab SC']\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u8fd9\u6837\u5c31\u80fd\u4fdd\u8bc1 Matplotlib \u6b63\u786e\u4f7f\u7528\u4e2d\u6587\u4e86\u3002"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-python",children:'plt.bar(["\u732b", "\u72d7", "\u9e21"], [3, 2, 1])\nplt.show()\n'})}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{src:t(92407).A+"",width:"1287",height:"822"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u4fee\u8ba2 3"}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-python",children:'ff = plt.rcParams["font.family"][0]\nplt.rcParams[f"font.{ff}"] = (\n    intersection_fclistzh_entry(fm.ttflist) + plt.rcParams[f"font.{ff}"]\n)\nplt.rcParams["font.sans-serif"][:3]\n'})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-text",children:"['Sarasa Mono SC Nerd', 'Sarasa Mono Slab J', 'Sarasa Mono Slab SC']\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u8fd9\u6837\u7684\u4ee3\u7801\u66f4\u5177\u901a\u7528\u6027\u4e00\u4e9b\uff0c\u4e07\u4e00 font.family\n\u88ab\u5176\u4ed6\u4ee3\u7801\u4fee\u6539\u4e3a\u65e0\u886c\u7ebf\u5b57\u4f53\uff0c\u4e5f\u80fd\u517c\u5bb9\u3002"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"\u6240\u4ee5\uff0cLinux \u6700\u7ec8\u53ef\u4ee5\u8fd9\u6837\u5b9e\u73b0\uff1a"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-python",children:'from subprocess import Popen, PIPE\n\n_p = Popen("fc-list :lang=zh", shell=True, stdout=PIPE, encoding="utf-8")\nzhs = _p.communicate()[0]\nzhs = [zh for zh in zhs.split("\\n") if zh != ""]\nzhsfn = [zh.split(":")[0] for zh in zhs]\n\nfm = mpl.font_manager.FontManager()\nff = plt.rcParams["font.family"][0]\nintersection = [t.name for t in fm.ttflist if t.fname in zhsfn]  # \u4ea4\u96c6\uff0c\u5f97\u5230 mpl \u53ef\u7528\u7684\u4e2d\u6587\n\nplt.rcParams[f"font.{ff}"] = intersection + plt.rcParams[f"font.{ff}"]\nplt.bar(["\u732b", "\u72d7", "\u9e21"], [3, 2, 1])\nplt.show()\n'})}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{src:t(42196).A+"",width:"1287",height:"822"})}),"\n",(0,s.jsxs)(e.p,{children:["\u5982\u679c\u4f60\u7684\u64cd\u4f5c\u7cfb\u7edf\u6216\u4f7f\u7528\u73af\u5883\u660e\u786e\uff0c\u5f53\u7136\u4e5f\u53ef\u4ee5\u7528\n",(0,s.jsx)(e.code,{children:"intersection_fclistzh_entry(fm.ttflist)"})," \u67e5\u5230\u67d0\u4e2a\u4e2d\u6587\u5b57\u4f53\uff0c\u7136\u540e\u6307\u5b9a\u5b83\u3002"]})]})}function h(n={}){const{wrapper:e}={...(0,a.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(d,{...n})}):d(n)}},92407:(n,e,t)=>{t.d(e,{A:()=>s});const s=t.p+"assets/images/cell-21-output-1-7218b87043661cdd4a16f6dc4dc16d13.png"},42196:(n,e,t)=>{t.d(e,{A:()=>s});const s=t.p+"assets/images/cell-24-output-1-16d8ce2b4145dda2af7a1f371bfd1e27.png"},28453:(n,e,t)=>{t.d(e,{R:()=>r,x:()=>i});var s=t(96540);const a={},l=s.createContext(a);function r(n){const e=s.useContext(l);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function i(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(a):n.components||a:r(n.components),s.createElement(l.Provider,{value:e},n.children)}}}]);