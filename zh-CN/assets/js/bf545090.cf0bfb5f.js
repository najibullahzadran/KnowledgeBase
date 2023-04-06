"use strict";(self.webpackChunkadguard_knowledge_base=self.webpackChunkadguard_knowledge_base||[]).push([[9275],{4137:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=u(r),d=o,b=m["".concat(s,".").concat(d)]||m[d]||c[d]||i;return r?n.createElement(b,a(a({ref:t},p),{},{components:r})):n.createElement(b,a({ref:t},p))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var u=2;u<i;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7582:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var n=r(7462),o=(r(7294),r(4137));const i={title:"How to avoid compatibility problem with FaceTime",sidebar_position:3},a=void 0,l={unversionedId:"adguard-for-ios/solving-problems/facetime-compatibility-issues",id:"adguard-for-ios/solving-problems/facetime-compatibility-issues",title:"How to avoid compatibility problem with FaceTime",description:"It turned out that Full-Tunnel mode might interfere not only with compatibility with other VPN applications, but also with FaceTime.",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/adguard-for-ios/solving-problems/facetime-compatibility-issues.md",sourceDirName:"adguard-for-ios/solving-problems",slug:"/adguard-for-ios/solving-problems/facetime-compatibility-issues",permalink:"/KnowledgeBase/zh-CN/adguard-for-ios/solving-problems/facetime-compatibility-issues",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBase/edit/master/docs/adguard-for-ios/solving-problems/facetime-compatibility-issues.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"How to avoid compatibility problem with FaceTime",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"\u5982\u4f55\u5728 AdGuard iOS \u7248\u8bbe\u7f6e\u7cfb\u7edf\u5c42\u9762\u7684\u8fc7\u6ee4\uff1f",permalink:"/KnowledgeBase/zh-CN/adguard-for-ios/solving-problems/system-wide-filtering"},next:{title:"\u5982\u4f55\u5728 Safari \u4e2d\u62e6\u622a YouTube \u5e7f\u544a",permalink:"/KnowledgeBase/zh-CN/adguard-for-ios/solving-problems/block-youtube-ads"}},s={},u=[],p={toc:u};function c(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"It turned out that Full-Tunnel mode might interfere not only with compatibility with other VPN applications, but also with FaceTime."),(0,o.kt)("p",null,"Some users have encountered the problem that FaceTime does not work on the device when the AdGuard app for iOS is in Full-Tunnel mode."),(0,o.kt)("p",null,"It is likely but not guaranteed that FaceTime will work when AdGuard is in Full-Tunnel mode without VPN icon because it is also incompatible with other VPN apps and unstable."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"If you want to use FaceTime and make sure that video/audio calls don't stop working, use Split-Tunnel mode.")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/public/Adguard/kb/newscreenshots/Ru/iOS/tunnel-mode.PNG?!",alt:"Tunnel mode screen *mobile"})),(0,o.kt)("p",null,"To enable it, follow the instructions:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Go to AdGuard for iOS ",(0,o.kt)("em",{parentName:"li"},"Settings")," \u2192 ",(0,o.kt)("em",{parentName:"li"},"General settings"),"."),(0,o.kt)("li",{parentName:"ol"},"Enable ",(0,o.kt)("em",{parentName:"li"},"Advanced mode")," and go to the ",(0,o.kt)("em",{parentName:"li"},"Advanced settings")," section that appears right after."),(0,o.kt)("li",{parentName:"ol"},"Open ",(0,o.kt)("em",{parentName:"li"},"Tunnel mode")," and select ",(0,o.kt)("em",{parentName:"li"},"Split-Tunnel"),".")),(0,o.kt)("p",null,"Done! Now there should be no problems with FaceTime compatibility."))}c.isMDXComponent=!0}}]);