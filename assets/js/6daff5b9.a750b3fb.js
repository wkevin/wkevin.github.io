"use strict";(self.webpackChunkdocusaurus_site=self.webpackChunkdocusaurus_site||[]).push([[13540],{3905:function(t,e,r){r.d(e,{Zo:function(){return s},kt:function(){return g}});var n=r(67294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function u(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},l=Object.keys(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var o=n.createContext({}),p=function(t){var e=n.useContext(o),r=e;return t&&(r="function"==typeof t?t(e):u(u({},e),t)),r},s=function(t){var e=p(t.components);return n.createElement(o.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,l=t.originalType,o=t.parentName,s=i(t,["components","mdxType","originalType","parentName"]),c=p(r),g=a,k=c["".concat(o,".").concat(g)]||c[g]||m[g]||l;return r?n.createElement(k,u(u({ref:e},s),{},{components:r})):n.createElement(k,u({ref:e},s))}));function g(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=r.length,u=new Array(l);u[0]=c;var i={};for(var o in e)hasOwnProperty.call(e,o)&&(i[o]=e[o]);i.originalType=t,i.mdxType="string"==typeof t?t:a,u[1]=i;for(var p=2;p<l;p++)u[p]=r[p];return n.createElement.apply(null,u)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},12131:function(t,e,r){r.r(e),r.d(e,{assets:function(){return s},contentTitle:function(){return o},default:function(){return g},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return m}});var n=r(87462),a=r(63366),l=(r(67294),r(3905)),u=["components"],i={title:"Rust \u5f00\u6e90\u4e66",description:"rust.resource",authors:"wKevin",tags:["rust","open source book"]},o=void 0,p={permalink:"/blog/2022/08/13/rust.resource",source:"@site/blog/2022-08-13-rust.resource/index.mdx",title:"Rust \u5f00\u6e90\u4e66",description:"rust.resource",date:"2022-08-13T00:00:00.000Z",formattedDate:"August 13, 2022",tags:[{label:"rust",permalink:"/blog/tags/rust"},{label:"open source book",permalink:"/blog/tags/open-source-book"}],truncated:!1,authors:[{name:"wKevin",title:"\u4e00\u9897\u5411\u4e0a\u7684\u6c34\u6ef4",url:"http://weibo.com/wkevin27",imageURL:"/img/avastar/angry.bird-l.jpg",key:"wKevin"}],frontMatter:{title:"Rust \u5f00\u6e90\u4e66",description:"rust.resource",authors:"wKevin",tags:["rust","open source book"]},prevItem:{title:"\u5230\u5e95\u7528\u54ea\u4e2a\u65b9\u5f0f\u521b\u5efa vite \u9879\u76ee",permalink:"/blog/2022/08/25/how.to.create.vite.project"},nextItem:{title:"Gitee Jenkins Plugin",permalink:"/blog/2022/06/17/gitee.jenkins.plugin"}},s={authorsImageUrls:[void 0]},m=[],c={toc:m};function g(t){var e=t.components,r=(0,a.Z)(t,u);return(0,l.kt)("wrapper",(0,n.Z)({},c,r,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5b98\u65b9\u7684 4 \u672c\u4e66\uff0c\u82f1\u6587\u7248\u5728\u5b89\u88c5 rust \u540e\u53ef\u4ee5 ",(0,l.kt)("inlineCode",{parentName:"li"},"rustup doc")," \u672c\u5730\u6253\u5f00\u9605\u8bfb\uff0c\u65e0\u9700\u5728\u7ebf\u9605\u8bfb\u3002"),(0,l.kt)("li",{parentName:"ul"},"Rust \u4e2d\u6587\u7ffb\u8bd1\u7ec4(",(0,l.kt)("strong",{parentName:"li"},"rust-lang-cn"),") \u7ffb\u8bd1\u4e86\u5b98\u65b9\u7684 4 \u672c\uff0c\u5728\u7ebf\u9605\u8bfb\u6258\u7ba1\u5728\u81ea\u5df1\u7ef4\u62a4\u7684 ",(0,l.kt)("a",{parentName:"li",href:"https://www.rustwiki.org.cn"},"rustwiki")," \u4e0a\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/rustlang-cn"},"RustCN")," \u793e\u533a(",(0,l.kt)("strong",{parentName:"li"},"rustlang-cn"),") \u5199\u4e86 4 \u672c\uff0c\u5176\u4e2d\u521b\u59cb\u4eba Sunface \u81ea\u5df1\u5199\u4e86 2 \u672c\uff0c\u540c\u65f6\u4ed6\u4e5f\u662f ",(0,l.kt)("a",{parentName:"li",href:"https://hub.fgit.ml/rustlang-cn/Rustt"},"Rust \u8bed\u8a00\u5468\u520a")," \u7684\u7ef4\u62a4\u8005\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5b98\u65b9\u7684 \u300a\u7a0b\u5e8f\u8bbe\u8ba1\u8bed\u8a00\u300b\u6307\u5b9a\u4e2d\u6587\u7248\u5e76\u4e0d\u662f Rust \u4e2d\u6587\u7ffb\u8bd1\u7ec4\u7684\u7248\u672c\uff0c\u800c\u662f KaiserY \u540c\u5b66\u7684\u3002")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"th",href:"https://www.rust-lang.org/"},"\u5b98\u65b9")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"th",href:"https://github.com/rust-lang-cn"},"Rust \u7ffb\u8bd1\u7ec4")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"th",href:"https://github.com/rustlang-cn"},"RustCN")),(0,l.kt)("th",{parentName:"tr",align:null},"\u4e2a\u4eba"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u300aThe Rust Programming Language\u300b",(0,l.kt)("br",null),"\u300aRust \u7a0b\u5e8f\u8bbe\u8ba1\u8bed\u8a00\u300b"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/rust-lang/book"},"github"),(0,l.kt)("br",null),(0,l.kt)("a",{parentName:"td",href:"https://doc.rust-lang.org/book/"},"\u5728\u7ebf\u9605\u8bfb")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/rust-lang-cn/book-cn"},"github"),(0,l.kt)("br",null),(0,l.kt)("a",{parentName:"td",href:"https://rustwiki.org/zh-CN/book/"},"\u5728\u7ebf\u9605\u8bfb")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"KaiserY",(0,l.kt)("br",null),(0,l.kt)("a",{parentName:"td",href:"https://github.com/KaiserY/trpl-zh-cn"},"github"),(0,l.kt)("br",null),(0,l.kt)("a",{parentName:"td",href:"https://kaisery.github.io/trpl-zh-cn/"},"\u5728\u7ebf\u9605\u8bfb"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u300aRust by Example\u300b",(0,l.kt)("br",null),"\u300a\u901a\u8fc7\u4f8b\u5b50\u5b66 Rust\u300b"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/rust-lang/book"},"github"),(0,l.kt)("br",null),(0,l.kt)("a",{parentName:"td",href:"https://doc.rust-lang.org/book/"},"\u5728\u7ebf\u9605\u8bfb")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/rust-lang-cn/rust-by-example-cn"},"github"),(0,l.kt)("br",null),(0,l.kt)("a",{parentName:"td",href:"https://rustwiki.org/zh-CN/rust-by-example/"},"\u5728\u7ebf\u9605\u8bfb")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u300aThe Rustonomicon\u300b",(0,l.kt)("br",null)," \u300aRust \u79d8\u5178\uff08\u6b7b\u7075\u4e66\uff09\u300b"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/rust-lang/nomicon"},"github"),(0,l.kt)("br",null),(0,l.kt)("a",{parentName:"td",href:"https://doc.rust-lang.org/nomicon/"},"\u5728\u7ebf\u9605\u8bfb")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/rust-lang-cn/nomicon-zh-Hans"},"github"),(0,l.kt)("br",null),(0,l.kt)("a",{parentName:"td",href:"https://nomicon.purewhite.io/"},"\u5728\u7ebf\u9605\u8bfb")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u300aThe Rust Language Reference\u300b",(0,l.kt)("br",null),"\u300aRust \u53c2\u8003\u624b\u518c\u300b"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/rust-lang/reference/"},"github"),(0,l.kt)("br",null),(0,l.kt)("a",{parentName:"td",href:"https://doc.rust-lang.org/stable/reference/"},"\u5728\u7ebf\u9605\u8bfb")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/rust-lang-cn/reference-cn"},"github"),(0,l.kt)("br",null),(0,l.kt)("a",{parentName:"td",href:"https://rustwiki.org/zh-CN/reference/"},"\u5728\u7ebf\u9605\u8bfb")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u300aRust \u8bed\u8a00\u5723\u7ecf\u300b"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Sunface",(0,l.kt)("br",null),(0,l.kt)("a",{parentName:"td",href:"https://github.com/sunface/rust-course"},"github"),(0,l.kt)("br",null),(0,l.kt)("a",{parentName:"td",href:"https://course.rs"},"\u5728\u7ebf\u9605\u8bfb")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u300aRust \u8bed\u8a00\u5b9e\u6218\u300b"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Sunface",(0,l.kt)("br",null),(0,l.kt)("a",{parentName:"td",href:"https://github.com/sunface/rust-by-practice"},"github"),(0,l.kt)("br",null),(0,l.kt)("a",{parentName:"td",href:"https://zh.practice.rs"},"\u5728\u7ebf\u9605\u8bfb")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u300aRust \u7ee3\u4e66\u300b"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/rustlang-cn/rusty-book"},"github"),(0,l.kt)("br",null),(0,l.kt)("a",{parentName:"td",href:"https://rusty.rs"},"\u5728\u7ebf\u9605\u8bfb")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u300aRust \u7b97\u6cd5\u9898\u89e3\u300b"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/rustlang-cn/rust-algos"},"github"),(0,l.kt)("br",null),(0,l.kt)("a",{parentName:"td",href:"https://algos.rs"},"\u5728\u7ebf\u9605\u8bfb")),(0,l.kt)("td",{parentName:"tr",align:null})))))}g.isMDXComponent=!0}}]);