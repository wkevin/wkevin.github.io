"use strict";(self.webpackChunkdocusaurus_site=self.webpackChunkdocusaurus_site||[]).push([[84318],{3905:function(t,e,a){a.d(e,{Zo:function(){return u},kt:function(){return s}});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),m=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},u=function(t){var e=m(t.components);return n.createElement(p.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},k=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),k=m(a),s=r,c=k["".concat(p,".").concat(s)]||k[s]||d[s]||l;return a?n.createElement(c,o(o({ref:e},u),{},{components:a})):n.createElement(c,o({ref:e},u))}));function s(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,o=new Array(l);o[0]=k;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i.mdxType="string"==typeof t?t:r,o[1]=i;for(var m=2;m<l;m++)o[m]=a[m];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},38586:function(t,e,a){a.r(e),a.d(e,{assets:function(){return u},contentTitle:function(){return p},default:function(){return s},frontMatter:function(){return i},metadata:function(){return m},toc:function(){return d}});var n=a(87462),r=a(63366),l=(a(67294),a(3905)),o=["components"],i={title:"Docusaurus Tips",authors:"wKevin",tags:["docusaurus","mdx","jsx"]},p=void 0,m={permalink:"/blog/2022/04/15/docusaurus",source:"@site/blog/2022-04-15-docusaurus/index.md",title:"Docusaurus Tips",description:"\u6700\u8fd1\u5b66\u4e60\u4f7f\u7528 Midway \u548c Tauri\uff0c\u5ffd\u7136\u5bf9\u7f51\u7ad9\u662f\u600e\u4e48\u505a\u51fa\u6765\u7684\u6765\u4e86\u5174\u8da3\uff0c\u5c24\u5176\u662f\u201c\u4fa7\u8fb9\u680f\u548c ToC \u5206\u5217\u5de6\u53f3\u201d\u7279\u522b\u559c\u6b22\uff0c\u6211\u591a\u5e74\u6765\u4e00\u76f4\u4f7f\u7528\u7684 Docsify \u603b\u662f ToC \u6df7\u5165\u4fa7\u8fb9\u680f\uff0c\u8ba9\u6211\u603b\u6709\u4e9b\u522b\u626d\u3002",date:"2022-04-15T00:00:00.000Z",formattedDate:"April 15, 2022",tags:[{label:"docusaurus",permalink:"/blog/tags/docusaurus"},{label:"mdx",permalink:"/blog/tags/mdx"},{label:"jsx",permalink:"/blog/tags/jsx"}],truncated:!0,authors:[{name:"wKevin",title:"\u4e00\u9897\u5411\u4e0a\u7684\u6c34\u6ef4",url:"http://weibo.com/wkevin27",imageURL:"/img/avastar/angry.bird-l.jpg",key:"wKevin"}],frontMatter:{title:"Docusaurus Tips",authors:"wKevin",tags:["docusaurus","mdx","jsx"]},prevItem:{title:"github pages \u90e8\u7f72 docusaurus",permalink:"/blog/2022/04/21/docusaurus.deploy.github"},nextItem:{title:"\u5bf9\u6bd4 yarn \u548c npm \u521b\u5efa Tauri \u9879\u76ee",permalink:"/blog/2022/01/22/create-tauri-app"}},u={authorsImageUrls:[void 0]},d=[{value:"3 \u7c7b\u5185\u5bb9",id:"3-\u7c7b\u5185\u5bb9",level:2},{value:"Markdown front matter",id:"markdown-front-matter",level:2},{value:"\u6458\u8981\u663e\u793a",id:"\u6458\u8981\u663e\u793a",level:2},{value:"MDX",id:"mdx",level:2},{value:"\u89e3\u6790\u5668",id:"\u89e3\u6790\u5668",level:2},{value:"PlantUML \u753b\u56fe",id:"plantuml-\u753b\u56fe",level:3},{value:"Mermaid \u753b\u56fe",id:"mermaid-\u753b\u56fe",level:3},{value:"Katex \u6570\u5b66\u516c\u5f0f",id:"katex-\u6570\u5b66\u516c\u5f0f",level:3},{value:"remark \u7684\u68c0\u67e5\u529f\u80fd",id:"remark-\u7684\u68c0\u67e5\u529f\u80fd",level:3},{value:"\u5176\u4ed6\u4e00\u4e9b\u96f6\u788e Tips",id:"\u5176\u4ed6\u4e00\u4e9b\u96f6\u788e-tips",level:2},{value:"\u5c55\u5f00\u7ec4\u4ef6",id:"\u5c55\u5f00\u7ec4\u4ef6",level:3},{value:"\u4e3a\u4ee3\u7801\u6bb5\u6dfb\u52a0\u6807\u9898",id:"\u4e3a\u4ee3\u7801\u6bb5\u6dfb\u52a0\u6807\u9898",level:3},{value:"\u4e0d\u60f3\u8ba9\u4ee3\u7801\u6bb5\u88ab Prettier \u4fee\u6539",id:"\u4e0d\u60f3\u8ba9\u4ee3\u7801\u6bb5\u88ab-prettier-\u4fee\u6539",level:3}],k={toc:d};function s(t){var e=t.components,i=(0,r.Z)(t,o);return(0,l.kt)("wrapper",(0,n.Z)({},k,i,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("img",{src:a(83091).Z+"#size20",width:"200",height:"200"})),(0,l.kt)("p",null,"\u6700\u8fd1\u5b66\u4e60\u4f7f\u7528 ",(0,l.kt)("a",{parentName:"p",href:"http://midwayjs.org/"},"Midway")," \u548c ",(0,l.kt)("a",{parentName:"p",href:"https://tauri.studio/"},"Tauri"),"\uff0c\u5ffd\u7136\u5bf9\u7f51\u7ad9\u662f\u600e\u4e48\u505a\u51fa\u6765\u7684\u6765\u4e86\u5174\u8da3\uff0c\u5c24\u5176\u662f\u201c\u4fa7\u8fb9\u680f\u548c ToC \u5206\u5217\u5de6\u53f3\u201d\u7279\u522b\u559c\u6b22\uff0c\u6211\u591a\u5e74\u6765\u4e00\u76f4\u4f7f\u7528\u7684 ",(0,l.kt)("a",{parentName:"p",href:"https://docsify.js.org/"},"Docsify")," \u603b\u662f ToC \u6df7\u5165\u4fa7\u8fb9\u680f\uff0c\u8ba9\u6211\u603b\u6709\u4e9b\u522b\u626d\u3002"),(0,l.kt)("p",null,"\u628a Midway \u548c Tauri \u7684\u7f51\u7ad9\u6e90\u7801\u4e0b\u8f7d\u4e0b\u6765\uff0c\u53d1\u73b0\u90fd\u662f\u57fa\u4e8e\u540c\u4e00\u4e2a\u6846\u67b6\uff1a",(0,l.kt)("a",{parentName:"p",href:"https://docusaurus.io/"},"Docusaurus"),"\uff0c\u5c31\u82b1\u4e86\u4e00\u4e9b\u65f6\u95f4\u7814\u7a76\uff0c\u5e76\u4e14\u628a\u516c\u53f8\u56e2\u961f\u7684\u6280\u672f\u79ef\u7d2f\u5e73\u53f0\u4fee\u6539\u6210\u6b64\u6846\u67b6\uff0c\u611f\u89c9\u4e00\u4e0b\u9ad8\u5927\u4e0a\u8d77\u6765\u4e86\u3002"),(0,l.kt)("p",null,"\u5b98\u65b9\u6587\u6863\u5df2\u7ecf\u5f88\u8be6\u7ec6\u4e86\uff0c\u6211\u8fd9\u91cc\u53ea\u80fd\u505a\u4e00\u4e9b\u5c0f\u63d0\u793a\u5427\u3002"),(0,l.kt)("h2",{id:"3-\u7c7b\u5185\u5bb9"},"3 \u7c7b\u5185\u5bb9"),(0,l.kt)("p",null,"\u7528\u6237\u53ef\u4ee5\u5728 Docusaurus \u4e2d\u5199 3 \u7c7b\u5185\u5bb9\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Page\uff1a",(0,l.kt)("inlineCode",{parentName:"li"},"src/pages/")," \u8def\u5f84\u4e0b\u5185\u5bb9\uff0c\u652f\u6301 js\u3001md \u6587\u4ef6\u3002"),(0,l.kt)("li",{parentName:"ol"},"doc\uff1a",(0,l.kt)("inlineCode",{parentName:"li"},"docs/")," \u8def\u5f84\u4e0b\u5185\u5bb9\uff0c\u652f\u6301 md\u3001mdx \u6587\u4ef6\u3002"),(0,l.kt)("li",{parentName:"ol"},"blog\uff1a",(0,l.kt)("inlineCode",{parentName:"li"},"blog/")," \u8def\u5f84\u4e0b\u5185\u5bb9\uff0c\u652f\u6301 md\u3001mdx \u6587\u4ef6\u3002")),(0,l.kt)("p",null,"Page\u3001Blog \u5185\u5bb9\u4e0d\u540c\u8def\u5f84\u4e0b\u7684\u6587\u4ef6\u751f\u6210\u7684\u8def\u7531\uff08url \u8def\u5f84\uff09\u4e0d\u540c\uff0c\u6bd4\u5982\uff1a"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u6587\u4ef6\u8def\u5f84"),(0,l.kt)("th",{parentName:"tr",align:null},"URL \u8def\u5f84"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"src/pages/index.js")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"[baseUrl]/"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"src/pages/foo.js")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"[baseUrl]/foo"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"src/pages/foo.md")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"[baseUrl]/foo"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"src/pages/foo/index.js")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"[baseUrl]/foo/"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"src/pages/foo/bar.js")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"[baseUrl]/foo/bar"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"blog/YYYY-MM-DD-foo.bar/index.md")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"blog/YYYY/MM/DD/foo.bar"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"blog/YYYY-MM-DD-foo.bar.md")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"blog/YYYY/MM/DD/foo.bar"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"blog/YYYY-MM-DD-foo.bar/foobar.md")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"blog/YYYY/MM/DD/foo.bar/foobar"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"blog/YYYY-MM-DD_foo.bar/index.md")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"blog/YYYY/MM/DD/_foo.bar"))))),(0,l.kt)("p",null,"docs \u7684\u8def\u7531\u548c blog \u7c7b\u4f3c\uff0c\u4f46\u8fd8\u548c md \u6587\u4ef6\u4e2d yaml \u5934\u4e2d\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"id")," \u5b57\u6bb5\u6709\u5173\u3002"),(0,l.kt)("h2",{id:"markdown-front-matter"},"Markdown front matter"),(0,l.kt)("p",null,"\u6839\u636e\u60ef\u4f8b\uff0cmd \u6587\u4ef6\u53ef\u4ee5\u5199\u4e2a yaml \u683c\u5f0f\u7684\u5934\uff0c\u79f0\u4e3a Markdown front matter\uff0c\u6bd4\u5982\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-xml"},'---\ntitle: Docusaurus Tips\ndate: 2022-04-15 14:03:13 +0800\ndescription: " "\n---\n')),(0,l.kt)("p",null,"Yaml \u662f ",(0,l.kt)("inlineCode",{parentName:"p"},"key: value")," \u5f62\u5f0f\u7684\u5199\u6cd5\uff0cvalue \u652f\u6301\u6570\u7ec4\u3002\u5e38\u7528\u7684 key \u6709\uff1a"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"key"),(0,l.kt)("th",{parentName:"tr",align:null},"key \u8bf4\u660e"),(0,l.kt)("th",{parentName:"tr",align:null},"value \u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"th"},"blog/")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"th"},"docs/")))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"title")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5de6\u4fa7\u8fb9\u680f\u7684\u6587\u7ae0\u6807\u9898\uff08\u6ce8 1\uff09"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6709\u6548"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6709\u6548")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"hide_table_of_contents")),(0,l.kt)("td",{parentName:"tr",align:null},"\u9690\u85cf\u53f3\u4fa7 TOC"),(0,l.kt)("td",{parentName:"tr",align:null},"true/false"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6709\u6548"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6709\u6548")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"authors")),(0,l.kt)("td",{parentName:"tr",align:null},"\u4f5c\u8005\uff0c\u641c\u7d22 ",(0,l.kt)("inlineCode",{parentName:"td"},"blog/authors.yml")," \u6587\u4ef6\u4e2d\u7684\u7528\u6237"),(0,l.kt)("td",{parentName:"tr",align:null},"string/string[]"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6709\u6548"),(0,l.kt)("td",{parentName:"tr",align:null},"\u65e0\u6548")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"date")),(0,l.kt)("td",{parentName:"tr",align:null},"\u624b\u5de5\u6307\u5b9a\u6587\u7ae0\u5c55\u793a\u7ed9\u7528\u6237\u7684\u65e5\u671f (\u6ce8 2)"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6709\u6548"),(0,l.kt)("td",{parentName:"tr",align:null},"\u65e0\u6548")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"tags")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"string/string[]"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6709\u6548"),(0,l.kt)("td",{parentName:"tr",align:null},"\u65e0\u6548")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"sidebar_position")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5de6\u4fa7\u8fb9\u680f\u7684\u987a\u5e8f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6570\u5b57"),(0,l.kt)("td",{parentName:"tr",align:null},"\u65e0\u6548"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6709\u6548")))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u6ce8 1\uff1a\n\u5de6\u4fa7\u8fb9\u680f\u663e\u793a\u7684\u6807\u9898\u6293\u53d6\u987a\u5e8f\u6309\u4f18\u5148\u7ea7\u4e3a\uff1a"),(0,l.kt)("ol",{parentName:"blockquote"},(0,l.kt)("li",{parentName:"ol"},"yaml \u4e2d\u7684 title key"),(0,l.kt)("li",{parentName:"ol"},"\u63d0\u53d6 markdown \u6587\u7ae0\u4e2d\u4e00\u7ea7\u76ee\u5f55\uff0c\u4f46\u4e00\u7ea7\u76ee\u5f55\u524d\u4e0d\u80fd\u6709\u9664 yaml \u4e4b\u5916\u7684\u5176\u4ed6\u884c"),(0,l.kt)("li",{parentName:"ol"},"\u4ece\u6587\u4ef6\u5939\u4e2d\u63d0\u53d6\uff08\u4f1a\u81ea\u52a8\u53bb\u6389\u65e5\u671f\uff09"))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u6ce8 2\uff1a\nblog \u4e2d\u4e2a\u4eba\u6280\u672f\u79ef\u7d2f\u6587\u7ae0\u5728\u6807\u9898\u4e0b\u5c55\u793a\u51fa\u7684\u65e5\u671f\u4f9d\u6b21\u4ece 3 \u4e2a\u5730\u65b9\u83b7\u53d6\uff1a"),(0,l.kt)("ol",{parentName:"blockquote"},(0,l.kt)("li",{parentName:"ol"},"\u4ece markdown \u6587\u4ef6\u4e2d\u7684 ",(0,l.kt)("inlineCode",{parentName:"li"},"date")," key \u5b57\u6bb5"),(0,l.kt)("li",{parentName:"ol"},"\u4ece\u6587\u4ef6\u5939\u6216\u6587\u4ef6\u540d\u79f0\u4e2d\u81ea\u52a8\u63d0\u53d6\uff0c\u6bd4\u5982\uff1a 2022-04-05\uff08\u4e0d\u5e26\u4e2d\u5212\u7ebf\u65e0\u6cd5\u63d0\u53d6\uff09"),(0,l.kt)("li",{parentName:"ol"},"\u4ece git log \u7684\u65f6\u95f4\u4e2d\u63d0\u53d6 \u2014\u2014 \u8fd9\u4e2a\u53ef\u80fd\u662f\u5927\u5bb6\u4e0d\u613f\u770b\u5230\u7684"))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"blog/")," \u76ee\u5f55 md \u6587\u4ef6\u53ef\u7528\u7684\u5934\u90e8 key \u5b8c\u6574\u5b9a\u4e49\u53c2\u8003 ",(0,l.kt)("a",{parentName:"li",href:"https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-blog#markdown-front-matter"},"\u8fd9\u91cc"),"\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"docs/")," \u76ee\u5f55 md \u6587\u4ef6\u53ef\u7528\u7684\u5934\u90e8 key \u5b8c\u6574\u5b9a\u4e49\u53c2\u8003 ",(0,l.kt)("a",{parentName:"li",href:"https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-docs#markdown-front-matter"},"\u8fd9\u91cc"),"\u3002")),(0,l.kt)("h2",{id:"\u6458\u8981\u663e\u793a"},"\u6458\u8981\u663e\u793a"),(0,l.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b blog \u5168\u6587\u4f1a\u663e\u793a\u5728 blog \u9996\u9875\uff0c\u5982\u679c\u5168\u6587\u592a\u957f\uff0c\u4f1a\u9020\u6210\u52a0\u8f7d\u8017\u65f6\u548c\u9605\u8bfb\u56f0\u96be\uff0c\u5728 blog \u4e2d\u6dfb\u52a0\u5982\u4e0b\u884c\u53ef\u4ee5\u5728\u9996\u9875\u4e2d\u622a\u65ad\uff0c\u70b9\u51fb\u8fdb\u5165\u6587\u7ae0\u540e\u624d\u663e\u793a\u5168\u6587\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},"\x3c!--truncate--\x3e\n")),(0,l.kt)("h2",{id:"mdx"},"MDX"),(0,l.kt)("p",null,"\u6700\u540e\u6765\u804a\u804a docusaurus \u4f7f\u7528\u7684\u7f16\u8bd1\u5668\u3002"),(0,l.kt)("p",null,"\u6211\u4e5f\u7b97\u662f Markdown \u201c\u8d44\u6df1\u201d\u73a9\u5bb6\u4e86\uff0c\u4eca\u5929\u7adf\u7136\u7b2c\u4e00\u6b21\u542c\u8bf4 MDX\uff0c\u8d44\u6df1\u4e00\u4e0b\u6ca1\u4e86\u5e95\u6c14\u3002\u5e94\u8be5\u662f\u666e\u901a\u7684 Markdown \u5df2\u7ecf\u65e0\u6cd5\u6ee1\u8db3\u7a0b\u5e8f\u5458\u4eec\u65e5\u76ca\u589e\u957f\u7684\u5199\u6587\u6863\u70ed\u60c5\uff0cMDX \u5c31\u88ab\u521b\u9020\u51fa\u6765\u4e86\uff0c\u6709\u4eba\u8bf4 ",(0,l.kt)("inlineCode",{parentName:"p"},"MDX = MD - HTML + JSX"),"\uff0c\u5373\uff1aMarkdown \u4e2d\u4e0d\u518d\u80fd\u5199\u4f20\u7edf\u7684 html \u8bed\u6cd5\uff0c\u800c\u662f\u7528 JSX \u8bed\u6cd5\u3002"),(0,l.kt)("p",null,"JSX \u662f Facebook \u4e3a React \u521b\u9020\u7684\u8bed\u8a00\uff0c\u662f ",(0,l.kt)("inlineCode",{parentName:"p"},"JavaScript + XML")," \u7684\u7f29\u5199\uff0c\u8ba9\u4f60\u7528\u7c7b\u4f3c HTML\uff08HTML \u5c31\u662f\u4e00\u79cd XML \u6807\u8bb0\u578b\u8bed\u8a00\uff09\u7684\u8bed\u6cd5\u5199\u6587\u4ef6\uff0c\u7136\u540e\u901a\u8fc7\u7f16\u8bd1\u5668\uff08\u5e38\u7528\u7684\u662f babel\uff09\u7f16\u8bd1\u6210 JavaScript\uff0c\u5bf9\u5e94\u7684 VUE \u597d\u50cf\u8fd8\u6ca1\u6709\u7c7b\u4f3c\u4ea7\u54c1\u3002"),(0,l.kt)("p",null,"JSX \u4ece JavaScript \u800c\u6765\uff0c\u53c8\u5411 HTML \u505a\u4e86\u9760\u62e2\uff0c\u4f46\u6bd5\u7adf\u4e0d\u662f HTML\uff0c\u6240\u4ee5\u521d\u5199\u8d77\u6765\u6211\u8fd8\u662f\u633a\u96be\u53d7\u7684\uff0c\u6bd4\u5982\u76f4\u63a5\u5728 md \u6587\u4ef6\u4e2d\u5199\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'import Tabs from "@theme/Tabs";\nimport TabItem from "@theme/TabItem";\n\n**\u591a Tab \u6f14\u793a**\uff1a\n\n<Tabs groupId="operating-systems">\n  <TabItem value="win" label="Windows">\n    Use Ctrl + C to copy.\n  </TabItem>\n  <TabItem value="mac" label="macOS">\n    Use Command + C to copy.\n  </TabItem>\n</Tabs>;\n')),(0,l.kt)("p",null,"\u603b\u611f\u89c9\u4e0d\u4f26\u4e0d\u7c7b\uff0cmarkdown \u4e2d\u5d4c\u5165\u65e2\u4e0d\u662f js\uff0c\u4e5f\u4e0d\u662f html \u7684\u6587\u5b57\u2026\u2026OMG\uff0c\u8bf4\u4e0d\u5b9a\u8fc7\u6bb5\u65f6\u95f4\u6211\u81ea\u5df1\u5c31\u770b\u4e0d\u61c2\u4e86\u3002"),(0,l.kt)("p",null,"\u4f46\u662f\u6dfb\u52a0\u4e86 JSX \u7684 MDX \u7ed9\u4e86\u7a0b\u5e8f\u5458\u505a\u51fa\u66f4\u590d\u6742\u3001\u70ab\u9177\u7f51\u9875\u7684\u80fd\u529b\uff0c\u5404\u79cd React \u7684\u52a8\u753b\u3001\u7ffb\u9875\u3001\u6570\u636e\u5904\u7406\u3001\u6570\u636e\u53ef\u89c6\u5316\u2026\u2026React \u7ec4\u4ef6\u52a0\u6301\uff0c\u77ac\u95f4\u63d0\u5347\u903c\u683c\uff0c\u4e0e\u666e\u901a Markdown \u7528\u6237\u62c9\u5f00\u4e86\u8ddd\u79bb\u2026\u2026\u8fd9\u5e94\u8be5\u662f md \u5e73\u6c11\u5316\u540e\u5c0f\u4f17\u5f70\u663e\u4e2a\u6027\u7684\u4e00\u4e2a\u673a\u4f1a\u3002"),(0,l.kt)("p",null,"\u600e\u4e48\u5199 MDX\uff0c\u8fd8\u662f\u770b ",(0,l.kt)("a",{parentName:"p",href:"https://mdxjs.com"},"MDX \u5b98\u7f51"),"\u3001",(0,l.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/introducing-jsx.html"},"JSX \u5b98\u7f51"),"\u5427\u3002"),(0,l.kt)("h2",{id:"\u89e3\u6790\u5668"},"\u89e3\u6790\u5668"),(0,l.kt)("p",null,"\u5f97\u5230\u6700\u7ec8\u7684\u7f16\u8bd1\u7ed3\u679c\uff0cMDX \u9700\u8981\u7ecf\u8fc7\u591a\u6b21\u7f16\u8bd1\uff1a"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"[MDX] --(@mdx-js/mdx)--\x3e [MD] --(remark)--\x3e [HTML] --(rehype)--\x3e [HTML]")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.mdxjs.cn/"},(0,l.kt)("inlineCode",{parentName:"a"},"@mdx-js/mdx"))," \u80fd\u591f\u5904\u7406 mdx \u8bed\u6cd5\uff0c\u5c06 md \u7f16\u8bd1\u6210 md + js/html"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://remark.js.org/"},(0,l.kt)("inlineCode",{parentName:"a"},"remark"))," \u662f\u4e00\u4e2a markdonw \u751f\u6001\uff0c\u80fd\u591f\u63a5\u5165\u591a\u4e2a\u63d2\u4ef6\uff0c\u5b9e\u73b0 md \u7684\u5404\u79cd\u7c7b\u578b\u8f93\u51fa"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/rehypejs/rehype"},(0,l.kt)("inlineCode",{parentName:"a"},"rehype"))," \u76f4\u63a5\u64cd\u4f5c\u548c\u4fee\u6539 html DOM\uff0c\u6bd4\u5982\u6570\u5b66\u516c\u5f0f\u7684\u6e32\u67d3\uff0c\u5219\u53ef\u4ee5\u5728 rehype \u9636\u6bb5\u63d2\u5165")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"$ npm list -a | grep remark\n\u251c\u2500\u252c @akebifiky/remark-simple-plantuml@1.0.2\n\u2502 \u2502 \u2502 \u251c\u2500\u2500 remark-footnotes@2.0.0\n\u2502 \u2502 \u2502 \u251c\u2500\u252c remark-mdx@1.6.22\n\u2502 \u2502 \u2502 \u2502 \u251c\u2500\u2500 remark-parse@8.0.3 deduped\n\u2502 \u2502 \u2502 \u251c\u2500\u252c remark-parse@8.0.3\n\u2502 \u2502 \u2502 \u251c\u2500\u252c remark-squeeze-paragraphs@4.0.0\n\u2502 \u2502 \u251c\u2500\u252c remark-emoji@2.2.0\n\u2502 \u251c\u2500\u252c remark-admonitions@1.2.1\n\u2502 \u2502 \u251c\u2500\u2500 remark-admonitions@1.2.1 deduped\n\u2502 \u2502 \u251c\u2500\u2500 remark-admonitions@1.2.1 deduped\n\u2502 \u2502 \u251c\u2500\u2500 remark-admonitions@1.2.1 deduped\n\u2514\u2500\u2500 remark-math@3.0.1\n")),(0,l.kt)("p",null,"Docusaurus \u7ec4\u5408\u4e86 babel\u3001 mdx\u3001remark\u3001rehype \u7b49\u6210\u719f\u5de5\u5177\uff0c\u6253\u9020\u4e86\u4e00\u4e2a\u529f\u80fd\u5b8c\u6574\u3001\u63d2\u4ef6\u7075\u6d3b\u7684\u7f51\u7ad9\u751f\u6210\u6846\u67b6\u3002"),(0,l.kt)("p",null,"\u6bd4\u5982\u4e0b\u9762\u51e0\u4e2a\u529f\u80fd\u7684\u6269\u5c55\u90fd\u662f\u501f\u52a9 remark\u3001rehype \u8fdb\u884c\u7684\u3002"),(0,l.kt)("h3",{id:"plantuml-\u753b\u56fe"},"PlantUML \u753b\u56fe"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"$ npm i --save @akebifiky/remark-simple-plantuml\n")),(0,l.kt)("p",null,"\u4fee\u6539 docusaurus.config.js"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'presets: [\n    [\n      "classic",\n      /** @type {import(\'@docusaurus/preset-classic\').Options} */\n      ({\n        docs: {\n          remarkPlugins: [\n            [\n              ...\n              require("@akebifiky/remark-simple-plantuml"),\n              {\n                baseUrl: "http://10.7.225.106:8088/svg/",\n              },\n            ],\n            ...\n          ],\n          ...\n        }\n        blog: {\n          // \u540c\u7406\u6dfb\u52a0\n        }\n')),(0,l.kt)("h3",{id:"mermaid-\u753b\u56fe"},"Mermaid \u753b\u56fe"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"$ npm i --save mdx-mermaid\n")),(0,l.kt)("p",null,"\u4fee\u6539 docusaurus.config.js"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'  presets: [\n    [\n      "classic",\n      /** @type {import(\'@docusaurus/preset-classic\').Options} */\n      ({\n        docs: {\n          remarkPlugins: [\n            require("mdx-mermaid"),\n            ...\n          ],\n          ...\n        }\n        blog: {\n          // \u540c\u7406\u6dfb\u52a0\n        }\n')),(0,l.kt)("h3",{id:"katex-\u6570\u5b66\u516c\u5f0f"},"Katex \u6570\u5b66\u516c\u5f0f"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs/markdown-features/math-equations"},"\u5b98\u65b9\u6587\u6863"),"\u7ed9\u51fa\u6765\u7684\u547d\u4ee4\u662f\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"$ npm install --save remark-math@3 rehype-katex@5 hast-util-is-element@1.1.0\n")),(0,l.kt)("p",null,"\u7136\u540e\u4fee\u6539 docusaurus.config.js\uff0c\u6ce8\u518c\u63d2\u4ef6\u5206\u522b\u5230 remark \u548c rehype\uff0c\u5e76\u4e14\u6dfb\u52a0 katex \u7684 CSS\uff08\u5982\u679c\u4e0d\u6b63\u786e\u6dfb\u52a0 CSS\uff0cfirefox \u53ef\u4ee5\u6b63\u786e\u663e\u793a\uff0c\u4f46 Chrome \u4e0a\u4e0d\u884c\u2014\u2014\u8fd9\u662f\u6211\u7b2c\u4e00\u6b21\u770b\u5230 Chrome \u6bd4 ff \u5f31\u7684\uff09\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'const math = require("remark-math");\nconst katex = require("rehype-katex");\n\nmodule.exports = {\n  title: "Docusaurus",\n  tagline: "Build optimized websites quickly, focus on your content",\n  presets: [\n    [\n      "@docusaurus/preset-classic",\n      {\n        docs: {\n          path: "docs",\n          remarkPlugins: [math],\n          rehypePlugins: [katex],\n        },\n      },\n    ],\n  ],\n  stylesheets: [\n    {\n      href: "https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css",\n      type: "text/css",\n      integrity:\n        "sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM",\n      crossorigin: "anonymous",\n    },\n  ],\n};\n')),(0,l.kt)("p",null,"\u4f46\u5176\u5b9e Docusaurus \u81ea\u5df1\u5e76\u4e0d\u662f\u8fd9\u79cd\u65b9\u5f0f\uff0c\u800c\u662f\u5b89\u88c5\u7684\u6700\u65b0\u7248 ",(0,l.kt)("inlineCode",{parentName:"p"},"rehype-katex@6"),"\uff0c\u5e76\u4e14\u8fd9\u6837\u4fee\u6539 docusaurus.config.js\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'async function createConfig() {\n  const katex = (await import("rehype-katex")).default;\n  config.presets[0][1].docs.rehypePlugins.push(katex);\n  config.presets[0][1].blog.rehypePlugins.push(katex);\n  return config;\n}\nmodule.exports = createConfig;\n')),(0,l.kt)("p",null,"\u81ea\u5df1\u8bd5\u4e00\u4e0b\u5c31\u660e\u4e86\u5176\u4e2d\u539f\u56e0\u4e86\u3002"),(0,l.kt)("p",null,"\u53e6\u5916\uff0c\u8fd8\u53ef\u4ee5\u7ed9 rehype-katex \u9001\u53c2\u6570\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'rehypePlugins: [\n  [\n    katex,\n    {\n      output: "mathml",\n    },\n  ],\n],\n')),(0,l.kt)("p",null,"rehype-katex \u6709 3 \u79cd output\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"'html' :\u53ef copy \u7684\u7f51\u9875\u663e\u793a"),(0,l.kt)("li",{parentName:"ul"},"'mathml' : \u6211\u4eec\u901a\u5e38\u7406\u89e3\u7684\u5f88\u6709\u79d1\u5b66\u8303\u513f\u7684\u663e\u793a"),(0,l.kt)("li",{parentName:"ul"},"'htmlAndMathml'(\u9ed8\u8ba4) \uff1a\u4e24\u79cd\u90fd\u663e\u793a")),(0,l.kt)("p",null,"\u66f4\u591a\u7684\u53c2\u6570\u6253\u5f00 rehype-katex \u6e90\u7801\u770b\u4e00\u773c\u5c31\u662f\u4e86\u3002"),(0,l.kt)("h3",{id:"remark-\u7684\u68c0\u67e5\u529f\u80fd"},"remark \u7684\u68c0\u67e5\u529f\u80fd"),(0,l.kt)("p",null,"remark \u9664\u4e86\u7f16\u8bd1\uff0c\u8fd8\u80fd\u591f\u50cf\u9ad8\u7ea7\u8bed\u8a00\u4e00\u6837\u5bf9 markdown \u6587\u672c\u8fdb\u884c\u6e90\u4ee3\u7801\u9759\u6001\u68c0\u67e5\uff0c\u6709\u70b9\u5411\u9ad8\u7ea7\u8bed\u8a00\u8d70\u7684\u5185\u5473\u513f\u4e86\uff0c\u6240\u4ee5\u5982\u679c md \u5199\u7684\u4e0d\u4e13\u4e1a\uff0c\u88ab remark \u544a\u8b66\uff0c\u4e5f\u662f\u633a\u5c34\u5c2c\u7684\u3002"),(0,l.kt)("p",null,"\u5217\u51e0\u4e2a\u6211\u88ab\u544a\u8b66\u7684\u9879\u76ee\uff1a"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u544a\u8b66\u9879"),(0,l.kt)("th",{parentName:"tr",align:null},"\u9519\u8bef\u5199\u6cd5"),(0,l.kt)("th",{parentName:"tr",align:null},"\u6b63\u786e\u5199\u6cd5"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u6362\u884c"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"<br/>")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"<br/>"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u8def\u5f84"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"foo\\bar")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"foo/bar"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u7a7a\u6216\u65e0\u6548\u94fe\u63a5"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"[foobar]()")),(0,l.kt)("td",{parentName:"tr",align:null},"--")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u627e\u4e0d\u5230\u56fe\u7247"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"![](foobar.png)")),(0,l.kt)("td",{parentName:"tr",align:null},"\u600e\u4e48\u627e\u5230\u56fe\u7247\u5b98\u7f51\u6709",(0,l.kt)("a",{parentName:"td",href:"https://docusaurus.io/docs/markdown-features/assets"},"\u8bf4\u660e"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u4f7f\u7528 js \u5173\u952e\u5b57"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"import"),"\u3001",(0,l.kt)("inlineCode",{parentName:"td"},"export")," \u5728\u884c\u9996\u65f6\u53ea\u80fd\u7528\u4e8e jsx \u8bed\u6cd5\u80fd")))),(0,l.kt)("h2",{id:"\u5176\u4ed6\u4e00\u4e9b\u96f6\u788e-tips"},"\u5176\u4ed6\u4e00\u4e9b\u96f6\u788e Tips"),(0,l.kt)("h3",{id:"\u5c55\u5f00\u7ec4\u4ef6"},"\u5c55\u5f00\u7ec4\u4ef6"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"<details>\n  <summary>Hello World</summary>\n  \n  I like docusaurus!\n  \n</details>\n")),(0,l.kt)("p",null,"\u5728 md \u6587\u4ef6\u4e2d\u76f4\u63a5\u5199\u4e0a\u9762\u7684 js\uff0c\u53ef\u4ee5\u5f97\u5230\u4e00\u4e2a\u9ed8\u8ba4\u6536\u7f29\uff0c\u70b9\u51fb\u5c55\u5f00\u7684\u6548\u679c\u3002"),(0,l.kt)("h3",{id:"\u4e3a\u4ee3\u7801\u6bb5\u6dfb\u52a0\u6807\u9898"},"\u4e3a\u4ee3\u7801\u6bb5\u6dfb\u52a0\u6807\u9898"),(0,l.kt)("pre",null,(0,l.kt)("code",null,'```js title="docusaurus.config.js"',(0,l.kt)("br",null),'const math = require("remark-math");',(0,l.kt)("br",null),'const katex = require("rehype-katex");',(0,l.kt)("br",null),"```")),(0,l.kt)("p",null,"\u8fd9\u6837\u5199\u53ef\u4ee5\u5f97\u5230\u4e00\u4e2a\u5e26\u6807\u9898\u7684\u4ee3\u7801\u5757\u3002"),(0,l.kt)("h3",{id:"\u4e0d\u60f3\u8ba9\u4ee3\u7801\u6bb5\u88ab-prettier-\u4fee\u6539"},"\u4e0d\u60f3\u8ba9\u4ee3\u7801\u6bb5\u88ab Prettier \u4fee\u6539"),(0,l.kt)("p",null,"\u6574\u7bc7\u6587\u7ae0\u9ed8\u8ba4\u5f53\u7136\u662f Prettier \u505a formatter\uff0c\u4f46\u6709\u4e9b\u6bb5\u843d\u4e34\u65f6\u4e0d\u60f3\u8ba9 Prettier \u751f\u6548\uff0c\u600e\u4e48\u529e\uff1f"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"\x3c!-- prettier-ignore --\x3e\n// \u81ea\u5df1\u7684\u4ee3\u7801\u6bb5\n")),(0,l.kt)("p",null,"\u8fd9\u662f\u914d\u7f6e Prettier \u4e86\uff0c\u672c\u8d28\u4e0a\u548c Docusaurus \u65e0\u5173\u3002"),(0,l.kt)("p",null,"OK\uff01\u54ea\u5929\u6709\u7a7a\u628a\u6211\u5f53\u524d\u8fd9\u4e2a blog \u4e5f\u6539\u7528 Docusaurus\uff0c\u6216\u8005 VUEPress\u3002"))}s.isMDXComponent=!0},83091:function(t,e,a){e.Z=a.p+"assets/images/docusaurus_keytar-749fc0e4c827a781c5d4c8b10d40b033.svg"}}]);