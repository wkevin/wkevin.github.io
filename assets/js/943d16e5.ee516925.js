"use strict";(self.webpackChunkdocusaurus_site=self.webpackChunkdocusaurus_site||[]).push([[97662],{81255:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>u,toc:()=>a});var s=t(74848),i=t(28453);const r={title:"github pages \u90e8\u7f72 docusaurus",authors:"wKevin",tags:["docusaurus","deploy","github"]},o=void 0,u={permalink:"/blog/2022/04/21/docusaurus.deploy.github",source:"@site/blog/2022-04-21-docusaurus.deploy.github/index.mdx",title:"github pages \u90e8\u7f72 docusaurus",description:"\u4eca\u5929\u628a Blog \u4ece Jekyll \u8f6c\u5230 Docusaurus \u4e86\uff0c\u4ecd\u662f\u90e8\u7f72\u5230 github\uff0c\u90e8\u7f72\u8fc7\u7a0b\u8bb0\u5f55\u4e00\u4e0b\u3002",date:"2022-04-21T00:00:00.000Z",formattedDate:"April 21, 2022",tags:[{label:"docusaurus",permalink:"/blog/tags/docusaurus"},{label:"deploy",permalink:"/blog/tags/deploy"},{label:"github",permalink:"/blog/tags/github"}],hasTruncateMarker:!0,authors:[{name:"wKevin",title:"\u4e00\u9897\u5411\u4e0a\u7684\u6c34\u6ef4",url:"http://weibo.com/wkevin27",imageURL:"/img/avastar/angry.bird-l.jpg",key:"wKevin"}],frontMatter:{title:"github pages \u90e8\u7f72 docusaurus",authors:"wKevin",tags:["docusaurus","deploy","github"]},unlisted:!1,prevItem:{title:"\u664b\u5347\u7b54\u8fa9\u600e\u4e48\u804a",permalink:"/blog/2022/04/24/promote.defence"},nextItem:{title:"Docusaurus Tips",permalink:"/blog/2022/04/15/docusaurus"}},l={authorsImageUrls:[void 0]},a=[];function g(e){const n={a:"a",code:"code",li:"li",mermaid:"mermaid",p:"p",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"\u4eca\u5929\u628a Blog \u4ece Jekyll \u8f6c\u5230 Docusaurus \u4e86\uff0c\u4ecd\u662f\u90e8\u7f72\u5230 github\uff0c\u90e8\u7f72\u8fc7\u7a0b\u8bb0\u5f55\u4e00\u4e0b\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u90e8\u7f72\u5927\u4f53\u53ef\u4ee5\u6709\u8fd9\u4e48\u51e0\u79cd\u65b9\u6848\uff0c\u6211\u90fd\u8bd5\u4e86\u4e00\u4e0b\uff0c\u5f02\u540c\u6709\u4e86\u4e00\u5b9a\u7684\u7406\u89e3\uff1a"}),"\n",(0,s.jsx)(n.mermaid,{chart:'flowchart TB\n    subgraph \u56fe\u4f8b\n    1(\u672c\u5730\u64cd\u4f5c)\n    2([github \u64cd\u4f5c])\n    end\n\n    plan1(((\u65b9\u68481))) --\x3e branch("\u5207\u6362\u5e76merge pg-pages \u5206\u652f\\n$ git co pg-pages\\n$ git merge main")\n    style plan1 fill:#4896d8,stroke:#333,stroke-width:4px\n    branch --\x3e build("\u672c\u5730\u7f16\u8bd1\\n$ npm run build")\n    build --\x3e pushgh("push gh-pages \u5206\u652f\\n$ git push origin gh-pages")\n\n    plan2(((\u65b9\u68482))) --\x3e deploy("$ yarn deploy\\n$ npm run deploy")\n    deploy --\x3e _build("\u672c\u5730\u7f16\u8bd1\\n$ npm run build")\n    style plan2 fill:#4896d8,stroke:#333,stroke-width:4px\n\n    subgraph yarn deploy \u81ea\u52a8\u6267\u884c\n    _build --\x3e test("\u672c\u5730\u542fserver\u6d4b\u8bd5\\n$ npm run server")\n    test --\x3e pr("\u4e0a\u4f20\u5230 gh_page \u5206\u652f\\n$ git clone --depth 1 --branch gh-pages ... /var/...\\n\u5c06/var/... \u521d\u59cb\u5316\u4e3a git \u5e93\u53ca gh-pages \u5206\u652f\\n$ git remote add origin ...\\n$ git add --all\\n$ git commit\\nCreate PR to gh_page")\n    end\n\n    plan3(((\u65b9\u68483))) --\x3e pushmain("push main \u5206\u652f\\n$ git push origin main")\n    style plan3 fill:#4896d8,stroke:#333,stroke-width:4px\n    pushmain --\x3e github(["Github"])\n    github --\x3e action(["Github Actions\\n.github/workflows/xxx.yml"])\n\n    ghpages[("github repo\\ngh-pages \u5206\u652f")]\n    pushgh --\x3e|./| ghpages\n    pr --\x3e|./build/| ghpages\n    action --\x3e|./build/| ghpages\n\n    gp[[Github Pages]]\n    ghpages --- gp\n'}),"\n",(0,s.jsxs)(n.p,{children:["\u65b9\u6848 1\uff1a\u672c\u5730\u7f16\u8bd1 gh-pages \u5206\u652f\uff0c\u5e76\u4e0a\u4f20\uff0cGithub Pages \u914d\u7f6e\u5230 gh-pages \u5206\u652f\u7684 ",(0,s.jsx)(n.code,{children:"build/"})," \u76ee\u5f55\u4e0a\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u65b9\u6848 2\uff1a\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"yarn deploy"})," \u6574\u5408\u547d\u4ee4\uff0c\u81ea\u52a8\u4e0a\u4f20\u5230 gh-pages \u5206\u652f\u4e0a\uff0c\u8be5\u5206\u652f\u4ec5\u5305\u542b build \u4e0b\u5185\u5bb9\uff0c\u6240\u4ee5 Github Pages \u914d\u7f6e\u5230 gh-pages \u5206\u652f\u7684 ",(0,s.jsx)(n.code,{children:"/"})," \u6839\u76ee\u5f55\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u65b9\u6848 3\uff1a\u4f7f\u7528 Github Actions\uff08\u6216\u7c7b\u4f3c Travis CI \u7ade\u54c1\uff09\uff0c\u9700\u8981\u5199 Actions \u7684 workflow \u548c job\uff0cDocusaurus \u5df2\u7ecf",(0,s.jsx)(n.a,{href:"https://docusaurus.io/docs/deployment#triggering-deployment-with-github-actions",children:"\u5199\u597d\u4e86\u4e00\u4efd"}),"\uff0c\u590d\u5236\u5230 ",(0,s.jsx)(n.code,{children:".github/workflows/"})," \u5373\u53ef\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"\u5b98\u65b9\u5199\u4e86 2 \u4e2a workflow \u7684\u4f8b\u5b50\uff1a"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:".github/workflows/test-deploy.yml"}),"\uff1a\u6307\u5b9a\u5206\u652f\u6709 PR \u65f6\u89e6\u53d1\uff0c\u4ec5\u6d4b\u8bd5\u80fd\u5426 build \u6210\u529f\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:".github/workflows/deploy.yml"}),"\uff1a\u6307\u5b9a\u5206\u652f push \u65f6\u89e6\u53d1\uff0c\u8868\u793a PR \u5df2\u7ecf\u88ab review \u901a\u8fc7\uff0c\u6267\u884c build\u3001\u548c\u53e6\u4e00\u4e2a Github Action\uff0c\u7528\u901a\u7528\u8d26\u53f7\u90e8\u7f72\u5230\u4e2a\u4eba\u7684 repo \u4e2d\u7684\u6307\u5b9a\u5206\u652f\uff08\u4e00\u822c\u5c31\u662f gh-pages\uff09\u4e2d\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["\u65b9\u6848 1 \u5168\u624b\u5de5\u6ca1\u5fc5\u8981\uff0c\u65b9\u6848 2 \u8981\u5e9f\u81ea\u5df1\u7535\u8111\u7684\u7b97\u529b\u6765 build\uff0c\u63a8\u8350\u65b9\u6848 3\uff0c\u514d\u8d39\u64b8 MS \u7684\u7f8a\u6bdb\uff0c\u5982\u679c\u6bcf\u6b21 pull \u7684\u65f6\u5019\u53ea\u62c9\u53d6 main \u5206\u652f ",(0,s.jsx)(n.code,{children:"git pull origin main"}),"\uff0c\u4e0d\u62c9\u53d6 gh-pages \u5206\u652f\uff0c\u90a3\u6837\u8fde\u672c\u673a\u78c1\u76d8\u90fd\u4e0d\u5360\u7528\u4e86\u3002"]})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(g,{...e})}):g(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>u});var s=t(96540);const i={},r=s.createContext(i);function o(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function u(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);