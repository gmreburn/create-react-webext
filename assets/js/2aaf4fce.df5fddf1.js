"use strict";(self.webpackChunkdocusarus=self.webpackChunkdocusarus||[]).push([[936],{3905:function(e,r,t){t.d(r,{Zo:function(){return l},kt:function(){return d}});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=n.createContext({}),u=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},l=function(e){var r=u(e.components);return n.createElement(i.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),f=u(t),d=a,b=f["".concat(i,".").concat(d)]||f[d]||p[d]||o;return t?n.createElement(b,c(c({ref:r},l),{},{components:t})):n.createElement(b,c({ref:r},l))}));function d(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,c=new Array(o);c[0]=f;var s={};for(var i in r)hasOwnProperty.call(r,i)&&(s[i]=r[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,c[1]=s;for(var u=2;u<o;u++)c[u]=t[u];return n.createElement.apply(null,c)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},8663:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return s},contentTitle:function(){return i},metadata:function(){return u},toc:function(){return l},default:function(){return f}});var n=t(7462),a=t(3366),o=(t(7294),t(3905)),c=["components"],s={},i="Change the browser",u={unversionedId:"advanced-usage/change-browser",id:"advanced-usage/change-browser",isDocsHomePage:!1,title:"Change the browser",description:"Create React WebExt will load the extension in your system's default browser.",source:"@site/docs/advanced-usage/change-browser.md",sourceDirName:"advanced-usage",slug:"/advanced-usage/change-browser",permalink:"/create-react-webext/docs/advanced-usage/change-browser",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/advanced-usage/change-browser.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Firefox",permalink:"/create-react-webext/docs/publishing/firefox"}},l=[],p={toc:l};function f(e){var r=e.components,t=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"change-the-browser"},"Change the browser"),(0,o.kt)("p",null,"Create React WebExt will load the extension in your system's default browser."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"npm start\n")),(0,o.kt)("p",null,"You can specify a browser in the ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-diff"},' "scripts": {\n-    "start": "react-webext-scripts start",\n+    "start": "react-webext-scripts start:firefox",\n}\n')))}f.isMDXComponent=!0}}]);