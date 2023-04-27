"use strict";(self.webpackChunkadguard_knowledge_base=self.webpackChunkadguard_knowledge_base||[]).push([[7123],{4137:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>c});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),d=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=d(e.components);return o.createElement(s.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=d(r),c=n,m=u["".concat(s,".").concat(c)]||u[c]||g[c]||a;return r?o.createElement(m,l(l({ref:t},p),{},{components:r})):o.createElement(m,l({ref:t},p))}));function c(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,l=new Array(a);l[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var d=2;d<a;d++)l[d]=r[d];return o.createElement.apply(null,l)}return o.createElement.apply(null,r)}u.displayName="MDXCreateElement"},4424:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>g,frontMatter:()=>a,metadata:()=>i,toc:()=>d});var o=r(7462),n=(r(7294),r(4137));const a={title:"How to collect AdGuard logs",sidebar_position:3},l=void 0,i={unversionedId:"adguard-for-windows/solving-problems/adguard-logs",id:"adguard-for-windows/solving-problems/adguard-logs",title:"How to collect AdGuard logs",description:"To analyse and diagnose different problems that may potentially arise, the AdGuard support service might need AdGuard log files. These files contain records about errors and other events that occurr with the software. Below is the brief instruction describing the way to get the log files and send them to the support service if necessary.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/adguard-for-windows/solving-problems/adguard-logs.md",sourceDirName:"adguard-for-windows/solving-problems",slug:"/adguard-for-windows/solving-problems/adguard-logs",permalink:"/KnowledgeBase/fr/adguard-for-windows/solving-problems/adguard-logs",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBase/edit/master/docs/adguard-for-windows/solving-problems/adguard-logs.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"How to collect AdGuard logs",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Certificate-related issues",permalink:"/KnowledgeBase/fr/adguard-for-windows/solving-problems/connection-not-trusted"},next:{title:"How to collect AdGuard installation logs",permalink:"/KnowledgeBase/fr/adguard-for-windows/solving-problems/installation-logs"}},s={},d=[{value:"Trace logs",id:"trace-logs",level:3}],p={toc:d};function g(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"To analyse and diagnose different problems that may potentially arise, the AdGuard support service might need AdGuard log files. These files contain records about errors and other events that occurr with the software. Below is the brief instruction describing the way to get the log files and send them to the support service if necessary."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Open the AdGuard settings. Go to the ",(0,n.kt)("em",{parentName:"li"},"General Settings")," section, scroll down to the end of the screen and switch the ",(0,n.kt)("em",{parentName:"li"},"Logging Level")," to ",(0,n.kt)("em",{parentName:"li"},"Debug"),".")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/adg-logs-1.png",alt:"Debug logging level *border"})),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"Reproduce the issue.")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"We strongly advise to take note of the exact time when you reproduced the issue: it will help our support team to find relevant log entries and solve the problem faster.")),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},"Export the recorded logs using the ",(0,n.kt)("em",{parentName:"li"},"Export Logs")," button.")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/adg-logs-2.png",alt:"Export logs *border"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Save the archive to any folder.")),(0,n.kt)("ol",{start:4},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Important"),": after exporting the logs, set the logging level back to ",(0,n.kt)("em",{parentName:"p"},"Standard"),". ",(0,n.kt)("em",{parentName:"p"},"Debug")," logging level will slow down the application.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Send the archive to the AdGuard support service at ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"mailto:support@adguard.com"},"support@adguard.com")),", describe the problem and don't forget to mention the time when you reproduced the issue."))),(0,n.kt)("h3",{id:"trace-logs"},"Trace logs"),(0,n.kt)("p",null,"Sometimes support team members may ask you to send ",(0,n.kt)("em",{parentName:"p"},"trace")," logs. Then you will need to do the following:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Stop AdGuard by right-clicking the AdGuard icon in the tray menu and choosing ",(0,n.kt)("em",{parentName:"li"},"Exit AdGuard"),":")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/adg-logs-3.png",alt:"Exit AdGuard *mobile"})),(0,n.kt)("p",null,"Please don't leave the service running:"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/public/Adguard/kb/newscreenshots/En/eng_logs_4.png",alt:"Stop AdGuard Service *mobile_border"})),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Open the console (type ",(0,n.kt)("inlineCode",{parentName:"p"},"cmd")," in the start panel).")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Run the app with the command ",(0,n.kt)("inlineCode",{parentName:"p"},'C:\\"Program Files (x86)"\\Adguard\\Adguard.exe /trace')," if you are using 64-bit Windows, and ",(0,n.kt)("inlineCode",{parentName:"p"},'C:\\"Program Files"\\Adguard\\Adguard.exe /trace')," in case if you use 32-bit one.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Select ",(0,n.kt)("em",{parentName:"p"},"Debug")," logging level."))),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/adg-logs-1.png",alt:"Debug *border"})),(0,n.kt)("ol",{start:5},(0,n.kt)("li",{parentName:"ol"},"Reproduce the issue.")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"We strongly advise to take note of the exact time when you reproduced the issue: it will help our support team to find relevant log entries and solve the problem faster.")),(0,n.kt)("ol",{start:6},(0,n.kt)("li",{parentName:"ol"},"Export the recorded logs using the ",(0,n.kt)("em",{parentName:"li"},"Export Logs")," button.")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/adg-logs-2.png",alt:"Export logs *border"})),(0,n.kt)("ol",{start:7},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Important"),": after exporting the logs, set the logging level back to ",(0,n.kt)("em",{parentName:"li"},"Standard"),". ",(0,n.kt)("em",{parentName:"li"},"Debug")," logging level will slow down the application.")),(0,n.kt)("p",null,"Don't worry if the log file is large. We need to know as much detail as possible to fix your problem."))}g.isMDXComponent=!0}}]);