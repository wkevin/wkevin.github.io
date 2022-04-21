"use strict";(self.webpackChunkdocusaurus_site=self.webpackChunkdocusaurus_site||[]).push([[126],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return s}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=c(n),s=a,f=d["".concat(p,".").concat(s)]||d[s]||m[s]||l;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},22516:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return s},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return m}});var r=n(87462),a=n(63366),l=(n(67294),n(3905)),i=["components"],o={title:"Linux \u7ba1\u9053\u548c\u8fde\u63a5\u7b26",date:"2020-05-21 14:55:23 +0800",description:" ",authors:"wKevin",categories:["it"],tags:["shell"]},p=void 0,c={permalink:"/blog/2020/05/21/shell.pipe",source:"@site/blog/2020-05-21-shell.pipe/index.md",title:"Linux \u7ba1\u9053\u548c\u8fde\u63a5\u7b26",description:" ",date:"2020-05-21T14:55:23.000Z",formattedDate:"May 21, 2020",tags:[{label:"shell",permalink:"/blog/tags/shell"}],truncated:!1,authors:[{name:"wKevin",title:"Coder|Linuxer|Agiler|ZTEer",url:"http://wkevin.github.io/",imageURL:"/img/avastar/angry.bird-l.jpg",key:"wKevin"}],frontMatter:{title:"Linux \u7ba1\u9053\u548c\u8fde\u63a5\u7b26",date:"2020-05-21 14:55:23 +0800",description:" ",authors:"wKevin",categories:["it"],tags:["shell"]},prevItem:{title:"Freeplane \u81ea\u7531\u98de\u7fd4\u7684\u601d\u7ef4\u5bfc\u56fe",permalink:"/blog/2020/05/22/freeplane"},nextItem:{title:"RISC-V \u626b\u63cf",permalink:"/blog/2020/03/14/risc-v"}},u={authorsImageUrls:[void 0]},m=[{value:"\u7ba1\u9053\uff1a<code>|</code>",id:"\u7ba1\u9053",level:2},{value:"\u8fde\u63a5\u7b26\uff1a<code>;</code>,<code>&amp;&amp;</code>,<code>||</code>",id:"\u8fde\u63a5\u7b26",level:2}],d={toc:m};function s(e){var t=e.components,n=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u4e3a\u4e86\u8ba9\u5b9a\u65f6\u64ad\u653e\u7684\u5403\u996d\u97f3\u4e50\u80fd\u591f\u968f\u673a\u9009\u62e9\uff0c\u91cd\u5199\u4e86\u4e00\u4e0b crontab \u7684\u914d\u7f6e\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"49 11 * * 1-6  ls -1 /home/me/Music/mp3/*.mp3 | sort --random-sort | head -1 | xargs -I{} nohup play {} fade t 0:20> /dev/null 2>&1 &\n")),(0,l.kt)("p",null,"\u5176\u4e2d\u53c8\u590d\u4e60\u4e86\u4e00\u4e0b shell \u7684\u7ba1\u9053\u548c\u8fde\u63a5\u7b26\u3002"),(0,l.kt)("h2",{id:"\u7ba1\u9053"},"\u7ba1\u9053\uff1a",(0,l.kt)("inlineCode",{parentName:"h2"},"|")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4e00\u4e9b shell \u547d\u4ee4\uff08\u5982 cat\uff09\u6709\u8fd9\u6837\u7684\u884c\u4e3a\u89c4\u8303\uff1a",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u8bfb\u5230\u547d\u4ee4\u884c\u53c2\u6570\u9001\u7ed9 main \u5165\u53e3\u51fd\u6570",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u662f\u6587\u4ef6\uff0c\u5219\u64cd\u4f5c\u6587\u4ef6"),(0,l.kt)("li",{parentName:"ul"},"\u662f",(0,l.kt)("inlineCode",{parentName:"li"},"-"),"\u7b26\u53f7\uff0c\u5219\u64cd\u4f5c stdin\uff08\u5e76\u4e0d\u4f5c\u4e3a\u6587\u4ef6\uff09"))),(0,l.kt)("li",{parentName:"ul"},"\u6ca1\u6709\u547d\u4ee4\u884c\u53c2\u6570\uff0c\u5219\u4ece stdin \u8bfb\u53d6"),(0,l.kt)("li",{parentName:"ul"},"\u4e3e\u4f8b\uff1a",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"cat"),"\uff1a\u5355\u72ec\u6267\u884c cat \u547d\u4ee4\u4f1a\u7b49\u5f85\u7528\u6237\u8f93\u5165\uff0c\u7136\u540e cat \u51fa\u6765"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"echo 'file1' | cat")," cat \u4ece stdin \u4e2d\u8bfb\u53d6"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"echo 'file1' | cat file2")," cat \u6709\u5165\u53c2\u65f6\uff0c\u5c31\u4e0d\u518d\u4ece stdin \u4e2d\u8bfb\u53d6\uff0c\u6240\u4ee5\u4e0d\u4f1a\u6253\u5370 main"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"echo 'file1' | cat -")," cat \u9047\u5230",(0,l.kt)("inlineCode",{parentName:"li"},"-"),"\u5165\u53c2\uff0c\u4ece stdin \u8bfb\u53d6\uff0c\u4f46\u4ec5\u662f\u6253\u5370\u201cfile1\u201d\u5b57\u7b26\u4e32\uff0c\u5e76\u4e0d\u662f\u6253\u5370 file1 \u5185\u5bb9"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"echo 'file1' | cat - file2")," \u4f1a\u5148\u6253\u5370\u51fa file1 \u5b57\u7b26\u4e32\uff0c\u7136\u540e\u662f file2 \u7684\u5185\u5bb9\u3002"))))),(0,l.kt)("li",{parentName:"ul"},"\u4e00\u4e9b\u547d\u4ee4\u7ed9\u51fa\u4e86\u4e13\u95e8\u7684\u53c2\u6570\u6307\u5b9a\u6587\u4ef6\u540d\uff0c\u8fd9\u6837\u53ef\u4ee5\u66f4\u597d\u7684\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"li"},"-"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u4e3e\u4f8b",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ls -1 *.mp3 | sort --random-sort | head -1 | mpg123 -@ -")))))),(0,l.kt)("li",{parentName:"ul"},"xargs \u80fd\u591f\u628a\u7ba1\u9053\u4e2d\u7684\u5b57\u7b26\u4e32\u8f6c\u5316\u6210\u540e\u9762\u547d\u4ee4\u7684\u53c2\u6570",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"echo 'file1' | xargs cat")," == ",(0,l.kt)("inlineCode",{parentName:"li"},"cat file1")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"echo 'file1' | xargs -I{} cat {}")," == ",(0,l.kt)("inlineCode",{parentName:"li"},"cat file1")," \u7528 -I \u6307\u5b9a\u5360\u4f4d\u7b26\uff0c\u4ee5\u4fbf\u540e\u9762\u547d\u4ee4\u7528\u7684\u66f4\u7075\u6d3b"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"echo 'file1' | xargs -I{} play {} fade t 0:10")," \u6b64\u65f6\u5982\u679c\u4e0d\u7528\u5360\u4f4d\u7b26\uff0cplay \u5219\u5f88\u96be\u6210\u529f\u6267\u884c")))),(0,l.kt)("h2",{id:"\u8fde\u63a5\u7b26"},"\u8fde\u63a5\u7b26\uff1a",(0,l.kt)("inlineCode",{parentName:"h2"},";"),",",(0,l.kt)("inlineCode",{parentName:"h2"},"&&"),",",(0,l.kt)("inlineCode",{parentName:"h2"},"||")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"cmd1 ; cmd2")," \uff1acmd2 \u603b\u4f1a\u6267\u884c"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"cmd1 && cmd2")," \uff1acmd1 \u6210\u529f\uff0ccmd2 \u624d\u4f1a\u6267\u884c"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"cmd1 || cmd2")," \uff1acmd1 \u5931\u8d25\uff0ccmd2 \u624d\u4f1a\u6267\u884c")))}s.isMDXComponent=!0}}]);