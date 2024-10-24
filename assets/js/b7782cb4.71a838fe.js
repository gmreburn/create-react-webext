"use strict";(self.webpackChunkdocusarus=self.webpackChunkdocusarus||[]).push([[8144],{1288:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>d,toc:()=>c});var o=n(6070),s=n(5658);const r={},i="Extend the browser's dev tools",d={id:"building-your-webext/dev_tools",title:"Extend the browser's dev tools",description:'You can use WebExtensions APIs to extend the browser\'s built-in developer tools. To create a devtools extension, include the "devtools_page" key in manifest.json:',source:"@site/docs/building-your-webext/dev_tools.md",sourceDirName:"building-your-webext",slug:"/building-your-webext/dev_tools",permalink:"/create-react-webext/docs/building-your-webext/dev_tools",draft:!1,unlisted:!1,editUrl:"https://github.com/gmreburn/create-react-webext/tree/main/docusarus/docs/docs/building-your-webext/dev_tools.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Adding a sidebar",permalink:"/create-react-webext/docs/building-your-webext/sidebar"},next:{title:"Publish your extension",permalink:"/create-react-webext/docs/publishing/deployment"}},a={},c=[];function l(e){const t={code:"code",h1:"h1",header:"header",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"extend-the-browsers-dev-tools",children:"Extend the browser's dev tools"})}),"\n",(0,o.jsx)(t.p,{children:'You can use WebExtensions APIs to extend the browser\'s built-in developer tools. To create a devtools extension, include the "devtools_page" key in manifest.json:'}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-json",children:'"devtools_page": "devtools/my-page.jsx"\n'})}),"\n",(0,o.jsxs)(t.p,{children:["The value of this key is a URL pointing to an HTML, JavaScript or TypeScript file that will be bundled with your extension. The URL should be relative to the ",(0,o.jsx)(t.code,{children:"manifest.json"})," file itself."]}),"\n",(0,o.jsx)(t.p,{children:"The file defines a special page in the extension, called the devtools page."}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-jsx",children:'# ./src/devtools/my-page.jsx\r\nimport React from "react";\r\nimport ReactDOM from "react-dom";\r\nimport MyPage from "./components/MyPage.jsx";\r\n\r\nbrowser.windows.getCurrent({ populate: true }).then((windowInfo) => {\r\n\tReactDOM.render(\r\n\t\t<MyPage tab={windowInfo.tabs.find((tab) => tab.active)} />,\r\n\t\tdocument.body\r\n\t);\r\n});\n'})})]})}function u(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},5658:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>d});var o=n(758);const s={},r=o.createContext(s);function i(e){const t=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),o.createElement(r.Provider,{value:t},e.children)}}}]);