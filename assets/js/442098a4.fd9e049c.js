"use strict";(self.webpackChunkdocusaurus_site=self.webpackChunkdocusaurus_site||[]).push([[80481],{28815:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>a,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var r=n(74848),o=n(28453);const i={title:"Vue Router \u4e2d\u7684\u51e0\u4e2a\u6982\u5ff5",description:"vue.route",authors:"wKevin",tags:["vue","router"]},s=void 0,c={permalink:"/blog/2022/09/07/vue.route",source:"@site/blog/2022-09-07-vue.route/index.mdx",title:"Vue Router \u4e2d\u7684\u51e0\u4e2a\u6982\u5ff5",description:"vue.route",date:"2022-09-07T00:00:00.000Z",formattedDate:"September 7, 2022",tags:[{label:"vue",permalink:"/blog/tags/vue"},{label:"router",permalink:"/blog/tags/router"}],hasTruncateMarker:!0,authors:[{name:"wKevin",title:"\u4e00\u9897\u5411\u4e0a\u7684\u6c34\u6ef4",url:"http://weibo.com/wkevin27",imageURL:"/img/avastar/angry.bird-l.jpg",key:"wKevin"}],frontMatter:{title:"Vue Router \u4e2d\u7684\u51e0\u4e2a\u6982\u5ff5",description:"vue.route",authors:"wKevin",tags:["vue","router"]},unlisted:!1,prevItem:{title:"\u4f7f\u7528 git daemon \u5feb\u901f\u4f20\u9012\u4ee3\u7801",permalink:"/blog/2022/10/14/git.daemon"},nextItem:{title:"\u5230\u5e95\u7528\u54ea\u4e2a\u65b9\u5f0f\u521b\u5efa vite \u9879\u76ee",permalink:"/blog/2022/08/25/how.to.create.vite.project"}},l={authorsImageUrls:[void 0]},d=[{value:"\u547d\u540d\u89c6\u56fe",id:"\u547d\u540d\u89c6\u56fe",level:2},{value:"\u5d4c\u5957\u8def\u7531",id:"\u5d4c\u5957\u8def\u7531",level:2},{value:"\u547d\u540d\u8def\u7531",id:"\u547d\u540d\u8def\u7531",level:2}];function u(e){const t={code:"code",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{src:n(49975).A+"",width:"2560",height:"1600"})}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"/user"})," \u5339\u914d\u5230\u7b2c 2 \u4e2a\u8def\u7531\u4e0a\uff0c\u7b2c 2 \u6839\u767d\u7ebf\u6240\u793a\uff0c\u56e0\u4e3a\u662f\u4e00\u7ea7\u8def\u7531\uff0c\u4e0e\u6240\u6709\u4e00\u7ea7\u8def\u7531\u4e00\u6837\uff08\u5982\uff1a",(0,r.jsx)(t.code,{children:"/"}),"\uff09\uff0c\u90fd\u4f1a\u5728 App.vue \u7684 ",(0,r.jsx)(t.code,{children:"<RouterView>"})," \u4e0a\u6e32\u67d3\u3002"]}),"\n",(0,r.jsx)(t.h2,{id:"\u547d\u540d\u89c6\u56fe",children:"\u547d\u540d\u89c6\u56fe"}),"\n",(0,r.jsxs)(t.p,{children:["\u7b2c 2\u30013 \u6839\u767d\u7ebf\uff0c\u53d1\u73b0 components \u4e2d\u6709\u591a\u4e2a\u7ec4\u4ef6\uff0c\u5c31\u6839\u636e ",(0,r.jsx)(t.code,{children:"<RouterView>"})," \u4e2d\u7684\u6709 name \u7684\u8fdb\u884c\u6e32\u67d3\uff0c\u6240\u4ee5\u53ef\u4ee5\u8fbe\u5230\u201c\u547d\u540d\u89c6\u56fe\u6839\u636e routes \u4e2d\u662f\u5426\u5b9a\u4e49\u800c\u8fdb\u884c\u9009\u62e9\u6027\u6e32\u67d3\u201d\u7684\u6548\u679c\u3002"]}),"\n",(0,r.jsx)(t.p,{children:"\u8fd9\u6837 Header \u5c31\u53ef\u4ee5\u9009\u62e9\u6027\u51fa\u73b0\u4e86\uff0c\u9009\u62e9\u6743\u5728 routes \u7684\u5b9a\u4e49\u4e2d\u3002"}),"\n",(0,r.jsx)(t.h2,{id:"\u5d4c\u5957\u8def\u7531",children:"\u5d4c\u5957\u8def\u7531"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"/user/3"})," \u5148\u5339\u914d\u5230 ",(0,r.jsx)(t.code,{children:"/user/:id"})," \u4e0a\uff08\u7b2c 3 \u6839\u767d\u7ebf\uff09\uff0c\u547d\u540d\u89c6\u56fe\u4f9d\u7136\u4f1a\u8d77\u6548\uff0c\u5728 App.vue \u7684 ",(0,r.jsx)(t.code,{children:"<RouterView>"})," \u4e2d\u6e32\u67d3\u3002"]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"/user/3/foo"})," or ",(0,r.jsx)(t.code,{children:"/user/3/bar"})," \u9996\u5148\u540c\u4e0a\uff0c\u4f46\u7ee7\u7eed\u4f1a\u53d1\u73b0 children \u4e2d\u7684\u5d4c\u5957\u8def\u7531\uff0c\u7ee7\u7eed\u5339\u914d\uff0c\u4f46\u4f1a\u5728\u7236\u7ec4\u4ef6\u4e2d\u7684 ",(0,r.jsx)(t.code,{children:"<router-view />"})," \u4e2d\u6e32\u67d3\uff0c\u800c\u4e0d\u662f App.vue \u4e2d\u7684\u3002"]}),"\n",(0,r.jsx)(t.p,{children:"\u5d4c\u5957\u8def\u7531\u53ef\u4ee5\u9632\u6b62\u8def\u7531\u66f4\u65b0\u65f6\u6574\u4f53\u7f51\u9875\u91cd\u65b0\u6e32\u67d3\u3002"}),"\n",(0,r.jsx)(t.h2,{id:"\u547d\u540d\u8def\u7531",children:"\u547d\u540d\u8def\u7531"}),"\n",(0,r.jsx)(t.p,{children:"\u4e0d\u8981\u4e0e\u524d\u9762\u7684\u547d\u540d\u89c6\u56fe\u6df7\u6dc6\u4e86\u3002"}),"\n",(0,r.jsxs)(t.p,{children:["\u5728\u7528 ",(0,r.jsx)(t.code,{children:"<RouterLink>"})," \u751f\u6210\u5d4c\u5957\u8def\u7531\u7684 URL \u65f6\uff0c\u53ef\u4ee5\u6709\u51e0\u79cd\u65b9\u5f0f\uff1a"]}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["\u4f7f\u7528\u76f8\u5bf9\u8def\u5f84\uff0c\u5982\uff1a ",(0,r.jsx)(t.code,{children:'to:"./foo"'})," \u2014\u2014 \u4f46\u8fd9\u57fa\u672c\u4e0a\u5f88\u96be\u6b63\u5e38\u5de5\u4f5c\uff0c\u56e0\u4e3a\u76f8\u5bf9\u8def\u5f84\u5f88\u5bb9\u6613\u53d8\u5316\u3002"]}),"\n",(0,r.jsxs)(t.li,{children:["\u4f7f\u7528\u547d\u540d\u8def\u7531\uff1a\u65e0\u8bba\u662f\u54ea\u4e00\u7ea7\u8def\u7531\uff0c\u90fd\u53ef\u4ee5\u8d77\u4e2a\u552f\u4e00\u6027\u7684 name\uff0c",(0,r.jsx)(t.code,{children:'<RouterLink :to="{name: ...}">'})," \u5373\u53ef\u6784\u9020\u51fa\u76ee\u6807 URL\u3002"]}),"\n"]})]})}function a(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},49975:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/screenshot-cd04a06c36e68ca889fab45fca7f931b.png"},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>c});var r=n(96540);const o={},i=r.createContext(o);function s(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);