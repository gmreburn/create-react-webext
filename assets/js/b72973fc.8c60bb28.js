"use strict";(self.webpackChunkdocusarus=self.webpackChunkdocusarus||[]).push([[299],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return b}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(n),b=r,g=d["".concat(c,".").concat(b)]||d[b]||l[b]||o;return n?a.createElement(g,i(i({ref:t},u),{},{components:n})):a.createElement(g,i({ref:t},u))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6469:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return u},default:function(){return d}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],s={sidebar_position:3},c="Adding a page action",p={unversionedId:"building-your-webext/page_action",id:"building-your-webext/page_action",isDocsHomePage:!1,title:"Adding a page action",description:"A page action is an icon that your extension adds inside the browser's URL bar.",source:"@site/docs/building-your-webext/page_action.md",sourceDirName:"building-your-webext",slug:"/building-your-webext/page_action",permalink:"/create-react-webext/docs/building-your-webext/page_action",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/building-your-webext/page_action.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Adding a browser action",permalink:"/create-react-webext/docs/building-your-webext/browser_action"},next:{title:"Adding a sidebar",permalink:"/create-react-webext/docs/building-your-webext/sidebar"}},u=[],l={toc:u};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"adding-a-page-action"},"Adding a page action"),(0,o.kt)("p",null,"A page action is an icon that your extension adds inside the browser's URL bar."),(0,o.kt)("p",null,"Your extension may optionally also supply an associated popup whose content is specified using HTML, CSS, and JavaScript."),(0,o.kt)("p",null,"If you supply a popup, then the popup is opened when the user clicks the icon, and your JavaScript running in the popup can handle the user's interaction with it. If you don't supply a popup, then a click event is dispatched to your extension's ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#background_pages"},"background scripts")," when the user clicks the icon."),(0,o.kt)("p",null,"You can also create and manipulate page actions programmatically using the ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/pageAction"},"pageAction API"),"."),(0,o.kt)("p",null,"Page actions are like browser actions, except that they are associated with particular web pages rather than with the browser as a whole. If an action is only relevant on certain pages, then you should use a page action and display it only on relevant pages. If an action is relevant to all pages or to the browser itself, use a browser action."),(0,o.kt)("p",null,"While browser actions are displayed by default, page actions are hidden by default. They can be shown for a particular tab by calling ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/pageAction/show"},"pageAction.show()"),", passing in the tab's id. You can also change this default behavior using the show_matches property."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'"page_action": {\n  "default_popup": "popup/geo.jsx"\n}\n')),(0,o.kt)("p",null,"The value of the default_popup key is a URL pointing to an HTML, JavaScript or TypeScript file that will be bundled with your extension. The URL should be relative to the ",(0,o.kt)("inlineCode",{parentName:"p"},"manifest.json")," file itself."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'# ./src/popup/geo.jsx\nimport React from "react";\nimport ReactDOM from "react-dom";\nimport Panel from "./components/Panel.jsx";\n\nbrowser.windows.getCurrent({ populate: true }).then((windowInfo) => {\n    ReactDOM.render(\n        <Panel tab={windowInfo.tabs.find((tab) => tab.active)} />,\n        document.body\n    );\n});\n')))}d.isMDXComponent=!0}}]);