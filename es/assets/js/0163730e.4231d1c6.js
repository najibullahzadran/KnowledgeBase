"use strict";(self.webpackChunkadguard_knowledge_base=self.webpackChunkadguard_knowledge_base||[]).push([[6354],{4137:(e,a,t)=>{t.d(a,{Zo:()=>m,kt:()=>k});var r=t(7294);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function p(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var i=r.createContext({}),s=function(e){var a=r.useContext(i),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},m=function(e){var a=s(e.components);return r.createElement(i.Provider,{value:a},e.children)},c={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},d=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),d=s(t),k=n,u=d["".concat(i,".").concat(k)]||d[k]||c[k]||l;return t?r.createElement(u,o(o({ref:a},m),{},{components:t})):r.createElement(u,o({ref:a},m))}));function k(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var l=t.length,o=new Array(l);o[0]=d;var p={};for(var i in a)hasOwnProperty.call(a,i)&&(p[i]=a[i]);p.originalType=e,p.mdxType="string"==typeof e?e:n,o[1]=p;for(var s=2;s<l;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5946:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>i,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>p,toc:()=>s});var r=t(7462),n=(t(7294),t(4137));const l={title:"C\xf3mo recopilar un archivo HAR",sidebar_position:1},o=void 0,p={unversionedId:"guides/collect-har-file",id:"guides/collect-har-file",title:"C\xf3mo recopilar un archivo HAR",description:"Los archivos HAR ayudan a nuestros equipos de soporte t\xe9cnico a solucionar problemas complejos. Para crear estos archivos, recomendamos usar Chrome o Firefox. Sin embargo, IE 11, Edge y Safari tambi\xe9n brindan capacidad de exportaci\xf3n y generaci\xf3n de archivos .har.",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/guides/collect-har-file.md",sourceDirName:"guides",slug:"/guides/collect-har-file",permalink:"/KnowledgeBase/es/guides/collect-har-file",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBase/edit/master/docs/guides/collect-har-file.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"C\xf3mo recopilar un archivo HAR",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Cr\xe9ditos & Agradecimientos",permalink:"/KnowledgeBase/es/miscellaneous/acknowledgements"},next:{title:"C\xf3mo instalar un certificado proxy",permalink:"/KnowledgeBase/es/guides/proxy-certificate"}},i={},s=[{value:"Chrome",id:"chrome",level:2},{value:"Edge",id:"edge",level:2},{value:"Firefox",id:"firefox",level:2},{value:"Internet Explorer 11",id:"ie11",level:2},{value:"Safari",id:"safari",level:2},{value:"Android",id:"android",level:2},{value:"Windows",id:"windows",level:2}],m={toc:s};function c(e){let{components:a,...t}=e;return(0,n.kt)("wrapper",(0,r.Z)({},m,t,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Los archivos HAR ayudan a nuestros equipos de soporte t\xe9cnico a solucionar problemas complejos. Para crear estos archivos, recomendamos usar Chrome o Firefox. Sin embargo, IE 11, Edge y Safari tambi\xe9n brindan capacidad de exportaci\xf3n y generaci\xf3n de archivos ",(0,n.kt)("inlineCode",{parentName:"p"},".har"),"."),(0,n.kt)("h2",{id:"chrome"},"Chrome"),(0,n.kt)("p",null,"Para crear un archivo HAR en Chrome:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Ve a la URL donde ocurre el problema. No reproduzca el problema todav\xeda.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Abre ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"Herramientas de desarrollo")),":"))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Desde el men\xfa: ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("em",{parentName:"strong"},"Men\xfa \u2192 M\xe1s herramientas \u2192 Herramientas de desarrollador")),"."),(0,n.kt)("li",{parentName:"ul"},"Teclado: ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("em",{parentName:"strong"},"Ctrl+Shift+C")),", o ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("em",{parentName:"strong"},"Ctrl+Alt+I")),", o ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("em",{parentName:"strong"},"\u2325+\u2318+I para Mac")),".")),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Haz clic en la pesta\xf1a ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"Red")),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Localiza el bot\xf3n redondo en la parte superior izquierda de la pesta\xf1a Red y confirma que est\xe1 en modo de grabaci\xf3n en rojo. Si est\xe1 en gris, haz clic para que se vuelva rojo e iniciar la grabaci\xf3n.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Utiliza el bot\xf3n ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"borrar"))," (el bot\xf3n circular con una l\xednea que lo atraviesa junto al bot\xf3n de grabaci\xf3n) para borrar toda la actividad anterior.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Selecciona la casilla de verificaci\xf3n ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"Conservar registro"))," en la pesta\xf1a Red.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Marca la casilla de verificaci\xf3n ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"Desactivar cach\xe9")),"."))),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/Kb/ad_blocker/guides/chrome.png",alt:"chrome"})),(0,n.kt)("ol",{start:8},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Reproduce los pasos que crean el problema.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Save session as a .har file by right-clicking the grid and selecting ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"Save as HAR with content")),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Reenv\xedalo al soporte de AdGuard (",(0,n.kt)("a",{parentName:"p",href:"mailto:support@adguard.com"},"support@adguard.com"),") con una explicaci\xf3n detallada del problema. Las capturas de pantalla de apoyo tambi\xe9n pueden ser \xfatiles."))),(0,n.kt)("h2",{id:"edge"},"Edge"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Ve a la URL donde ocurre el problema. No reproduzca el problema todav\xeda.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Abre ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"Herramientas de desarrollo")),":"))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Desde el men\xfa: ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("em",{parentName:"strong"},"Men\xfa \u2192 M\xe1s herramientas \u2192 Herramientas de desarrollador")),"."),(0,n.kt)("li",{parentName:"ul"},"Teclado: ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("em",{parentName:"strong"},"Ctrl+Shift+C")),", o ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("em",{parentName:"strong"},"Ctrl+Alt+I")),", o ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("em",{parentName:"strong"},"\u2325+\u2318+I para Mac")),".")),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Haz clic en la pesta\xf1a ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"Red")),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Localiza el bot\xf3n redondo en la parte superior izquierda de la pesta\xf1a Red y confirma que est\xe1 en modo de grabaci\xf3n en rojo. Si est\xe1 en gris, haz clic para que se vuelva rojo e iniciar la grabaci\xf3n.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Utiliza el bot\xf3n ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"borrar"))," (el bot\xf3n circular con una l\xednea que lo atraviesa junto al bot\xf3n de grabaci\xf3n) para borrar toda la actividad anterior.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Selecciona la casilla de verificaci\xf3n ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"Conservar registro"))," en la pesta\xf1a Red.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Marca la casilla de verificaci\xf3n ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"Desactivar cach\xe9")),"."))),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/Kb/ad_blocker/guides/edge.png",alt:"edge"})),(0,n.kt)("ol",{start:8},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Reproduce los pasos que crean el problema.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Save session as a .har file by right-clicking the grid and selecting ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"Save as HAR with content")),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Reenv\xedalo al soporte de AdGuard (",(0,n.kt)("a",{parentName:"p",href:"mailto:support@adguard.com"},"support@adguard.com"),") con una explicaci\xf3n detallada del problema. Las capturas de pantalla de apoyo tambi\xe9n pueden ser \xfatiles."))),(0,n.kt)("h2",{id:"firefox"},"Firefox"),(0,n.kt)("p",null,"Para crear un archivo HAR en Firefox:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Ve a la URL donde ocurre el problema. No reproduzca el problema todav\xeda.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Abre las herramientas de desarrollo en el modo ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"Red")),":"))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Desde el men\xfa: ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("em",{parentName:"strong"},"Men\xfa\u2192Desarrollador web\u2192Red")),"."),(0,n.kt)("li",{parentName:"ul"},"Teclado: ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("em",{parentName:"strong"},"Ctrl+Shift+C")),", o ",(0,n.kt)("strong",{parentName:"li"},"\u2325+\u2318+E (Mac)"),".")),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},"Ten en cuenta el bot\xf3n ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("em",{parentName:"strong"},"reproducir/pausar"))," en la parte superior izquierda de la pesta\xf1a Red.")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"El bot\xf3n debe estar en modo de reproducci\xf3n.")),(0,n.kt)("ol",{start:4},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Si actualmente se muestra alguna informaci\xf3n en la cuadr\xedcula, b\xf3rrala haciendo clic en el bot\xf3n ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"eliminar papelera"))," junto al bot\xf3n reproducir/pausar.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Selecciona la opci\xf3n ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"Conservar registros"))," en la ficha Red.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Marca la casilla de verificaci\xf3n ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"Desactivar cach\xe9")),"."))),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/Kb/ad_blocker/guides/firefox.png",alt:"firefox"})),(0,n.kt)("ol",{start:7},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Reproduce los pasos que crean el problema.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Save session as a .har file by right-clicking the grid and selecting ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"Save all as HAR")),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Reenv\xedalo al soporte de AdGuard (",(0,n.kt)("a",{parentName:"p",href:"mailto:support@adguard.com"},"support@adguard.com"),") con una explicaci\xf3n detallada del problema. Las capturas de pantalla de apoyo tambi\xe9n pueden ser \xfatiles."))),(0,n.kt)("h2",{id:"ie11"},"Internet Explorer 11"),(0,n.kt)("p",null,"Para crear un archivo HAR en Internet Explorer 11:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Ve a la URL donde ocurre el problema. No reproduzca el problema todav\xeda.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Abre las herramientas de desarrollo en el modo ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"Red")),":"))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"En el men\xfa Herramientas: ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("em",{parentName:"strong"},"Herramientas de desarrollo"))," \u2192 ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("em",{parentName:"strong"},"Pesta\xf1a de red")),"."),(0,n.kt)("li",{parentName:"ul"},"Teclado: ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("em",{parentName:"strong"},"F12\u2192Pesta\xf1a Red")),".")),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},"Ten en cuenta que para iniciar la sesi\xf3n de generaci\xf3n de perfiles, haz clic en ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("em",{parentName:"strong"},"Play"))," y para detener la generaci\xf3n de perfiles, haz clic en ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("em",{parentName:"strong"},"Parar"))," en la parte superior izquierda de la pesta\xf1a Red.")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"El bot\xf3n Reproducir estar\xe1 gris cuando se est\xe9 grabando y el bot\xf3n Detener estar\xe1 rojo. Poner en modo ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("em",{parentName:"strong"},"Play")),".")),(0,n.kt)("ol",{start:4},(0,n.kt)("li",{parentName:"ol"},"Borra cualquier informaci\xf3n de sesi\xf3n que aparezca en la cuadr\xedcula inferior con el bot\xf3n ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("em",{parentName:"strong"},"Borrar sesi\xf3n"))," en la pesta\xf1a Red. Pasa el cursor sobre los iconos para ver los nombres.")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("em",{parentName:"strong"},"Borrar sesi\xf3n"))," El bot\xf3n es un icono de tres l\xedneas con una x.")),(0,n.kt)("ol",{start:5},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Marca la casilla de verificaci\xf3n ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"Desactivar cach\xe9")),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Reproduce los pasos que crean el problema.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Guarda la sesi\xf3n como un archivo .har haciendo clic en el bot\xf3n ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"Guardar disco"))," (Exportar como HAR) en la pesta\xf1a Red.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Reenv\xedalo al soporte de AdGuard (",(0,n.kt)("a",{parentName:"p",href:"mailto:support@adguard.com"},"support@adguard.com"),") con una explicaci\xf3n detallada del problema. Las capturas de pantalla de apoyo tambi\xe9n pueden ser \xfatiles."))),(0,n.kt)("h2",{id:"safari"},"Safari"),(0,n.kt)("p",null,"Para crear un archivo HAR en Chrome:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Consulta la barra de men\xfa de Safari en la parte superior de la pantalla para ver el men\xfa ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("em",{parentName:"strong"},"Desarrollar")),". Marca la casilla de verificaci\xf3n en la parte inferior junto a ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("em",{parentName:"strong"},"Mostrar el men\xfa Desarrollar en la barra de men\xfa")),".")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Si no est\xe1 visible, act\xedvalo yendo a ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("em",{parentName:"strong"},"Safari\u2192Preferencias\u2192Avanzado")),".")),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Ve a la URL donde ocurre el problema. No reproduzca el problema todav\xeda.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Abre la pesta\xf1a ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"Red"))," en Web Inspector:"))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Desde el men\xfa: ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("em",{parentName:"strong"},"Desarrollar\u2192Mostrar Web Inspector\u2192Red")),"."),(0,n.kt)("li",{parentName:"ul"},"Teclado: ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("em",{parentName:"strong"},"\u2325+\u2318+I\u2192Red")))),(0,n.kt)("ol",{start:4},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Marca la casilla de verificaci\xf3n ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"Conservar registro"))," en el lado derecho de las pesta\xf1as Red.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Borra los elementos de red actuales haciendo clic en el \xedcono ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"eliminar Papelera"))," en el extremo derecho de las pesta\xf1as de red.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Marca la casilla de verificaci\xf3n ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"Desactivar cach\xe9")),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Reproduce los pasos que crean el problema.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Guarda la sesi\xf3n como un archivo .har haciendo clic en el icono ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"Exportar"))," junto a ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"Conservar registro")),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Reenv\xedalo al soporte de AdGuard (",(0,n.kt)("a",{parentName:"p",href:"mailto:support@adguard.com"},"support@adguard.com"),") con una explicaci\xf3n detallada del problema. Las capturas de pantalla de apoyo tambi\xe9n pueden ser \xfatiles."))),(0,n.kt)("h2",{id:"android"},"Android"),(0,n.kt)("p",null,"Para obtener archivos HAR, sigue estos pasos:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Abra AdGuard y ve a ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"Configuraci\xf3n")),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Elige ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"Avanzado"))," en el men\xfa.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Elige ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"Ajustes de bajo nivel")))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Activa ",(0,n.kt)("inlineCode",{parentName:"p"},"pref.har.capture")," (tendr\xe1s que reiniciar la protecci\xf3n).")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Ahora reproduce el problema: abre la aplicaci\xf3n y realiza las acciones necesarias para que aparezca el anuncio.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Ahora desactiva ",(0,n.kt)("inlineCode",{parentName:"p"},"pref.har.capture")," de nuevo.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Vuelve atr\xe1s y toca ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"Exportar registros e informaci\xf3n del sistema"))," \u2192 ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"Salvar")),"."))),(0,n.kt)("h2",{id:"windows"},"Windows"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Abre ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"Configuraci\xf3n"))," \u2192 ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"Configuraci\xf3n general"))," \u2192 ",(0,n.kt)("strong",{parentName:"p"},"*Configuraci\xf3n avanzada")," y despl\xe1zate hacia abajo.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Marca la casilla ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"Habilitar escrita HAR")),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Reproducir el problema.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Vete a ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"Configuraci\xf3n general"))," \u2192 Haz clic en ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"Exportar registros"))," \u2192 ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"Salvar")),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Deshabilita la escritura HAR desmarcando la casilla correspondiente."))))}c.isMDXComponent=!0}}]);