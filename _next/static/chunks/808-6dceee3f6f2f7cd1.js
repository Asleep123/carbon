"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[808],{8302:function(e,t,n){var r=n(3555);n.o(r,"usePathname")&&n.d(t,{usePathname:function(){return r.usePathname}}),n.o(r,"useRouter")&&n.d(t,{useRouter:function(){return r.useRouter}})},7033:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"BailoutToCSR",{enumerable:!0,get:function(){return o}});let r=n(2089);function o(e){let{reason:t,children:n}=e;if("undefined"==typeof window)throw new r.BailoutToCSRError(t);return n}},8873:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"PreloadCss",{enumerable:!0,get:function(){return a}});let r=n(7516),o=n(5192);function a(e){let{moduleIds:t}=e;if("undefined"!=typeof window)return null;let n=(0,o.getExpectedRequestStore)("next/dynamic css"),a=[];if(n.reactLoadableManifest&&t){let e=n.reactLoadableManifest;for(let n of t){if(!e[n])continue;let t=e[n].files.filter(e=>e.endsWith(".css"));a.push(...t)}}return 0===a.length?null:(0,r.jsx)(r.Fragment,{children:a.map(e=>(0,r.jsx)("link",{precedence:"dynamic",rel:"stylesheet",href:n.assetPrefix+"/_next/"+encodeURI(e),as:"style"},e))})}},7118:function(e,t,n){n.d(t,{Av:function(){return c},pF:function(){return r},xv:function(){return a},zi:function(){return o}});var r="right-scroll-bar-position",o="width-before-scroll-bar",a="with-scroll-bars-hidden",c="--removed-body-scroll-bar-size"},9718:function(e,t,n){n.d(t,{jp:function(){return v}});var r=n(2374),o=n(7323),a=n(7118),c={left:0,top:0,right:0,gap:0},i=function(e){return parseInt(e||"",10)||0},u=function(e){var t=window.getComputedStyle(document.body),n=t["padding"===e?"paddingLeft":"marginLeft"],r=t["padding"===e?"paddingTop":"marginTop"],o=t["padding"===e?"paddingRight":"marginRight"];return[i(n),i(r),i(o)]},l=function(e){if(void 0===e&&(e="margin"),"undefined"==typeof window)return c;var t=u(e),n=document.documentElement.clientWidth,r=window.innerWidth;return{left:t[0],top:t[1],right:t[2],gap:Math.max(0,r-n+t[2]-t[0])}},s=(0,o.Ws)(),d="data-scroll-locked",f=function(e,t,n,r){var o=e.left,c=e.top,i=e.right,u=e.gap;return void 0===n&&(n="margin"),"\n  .".concat(a.xv," {\n   overflow: hidden ").concat(r,";\n   padding-right: ").concat(u,"px ").concat(r,";\n  }\n  body[").concat(d,"] {\n    overflow: hidden ").concat(r,";\n    overscroll-behavior: contain;\n    ").concat([t&&"position: relative ".concat(r,";"),"margin"===n&&"\n    padding-left: ".concat(o,"px;\n    padding-top: ").concat(c,"px;\n    padding-right: ").concat(i,"px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(u,"px ").concat(r,";\n    "),"padding"===n&&"padding-right: ".concat(u,"px ").concat(r,";")].filter(Boolean).join(""),"\n  }\n  \n  .").concat(a.pF," {\n    right: ").concat(u,"px ").concat(r,";\n  }\n  \n  .").concat(a.zi," {\n    margin-right: ").concat(u,"px ").concat(r,";\n  }\n  \n  .").concat(a.pF," .").concat(a.pF," {\n    right: 0 ").concat(r,";\n  }\n  \n  .").concat(a.zi," .").concat(a.zi," {\n    margin-right: 0 ").concat(r,";\n  }\n  \n  body[").concat(d,"] {\n    ").concat(a.Av,": ").concat(u,"px;\n  }\n")},h=function(){var e=parseInt(document.body.getAttribute(d)||"0",10);return isFinite(e)?e:0},m=function(){r.useEffect(function(){return document.body.setAttribute(d,(h()+1).toString()),function(){var e=h()-1;e<=0?document.body.removeAttribute(d):document.body.setAttribute(d,e.toString())}},[])},v=function(e){var t=e.noRelative,n=e.noImportant,o=e.gapMode,a=void 0===o?"margin":o;m();var c=r.useMemo(function(){return l(a)},[a]);return r.createElement(s,{styles:f(c,!t,a,n?"":"!important")})}},7323:function(e,t,n){n.d(t,{Ws:function(){return i}});var r,o=n(2374),a=function(){var e=0,t=null;return{add:function(o){if(0==e&&(t=function(){if(!document)return null;var e=document.createElement("style");e.type="text/css";var t=r||n.nc;return t&&e.setAttribute("nonce",t),e}())){var a,c;(a=t).styleSheet?a.styleSheet.cssText=o:a.appendChild(document.createTextNode(o)),c=t,(document.head||document.getElementsByTagName("head")[0]).appendChild(c)}e++},remove:function(){--e||!t||(t.parentNode&&t.parentNode.removeChild(t),t=null)}}},c=function(){var e=a();return function(t,n){o.useEffect(function(){return e.add(t),function(){e.remove()}},[t&&n])}},i=function(){var e=c();return function(t){return e(t.styles,t.dynamic),null}}},6622:function(e,t,n){n.d(t,{q:function(){return i}});var r=n(2374);function o(e,t){return"function"==typeof e?e(t):e&&(e.current=t),e}var a="undefined"!=typeof window?r.useLayoutEffect:r.useEffect,c=new WeakMap;function i(e,t){var n,i,u,l=(n=t||null,i=function(t){return e.forEach(function(e){return o(e,t)})},(u=(0,r.useState)(function(){return{value:n,callback:i,facade:{get current(){return u.value},set current(value){var e=u.value;e!==value&&(u.value=value,u.callback(value,e))}}}})[0]).callback=i,u.facade);return a(function(){var t=c.get(l);if(t){var n=new Set(t),r=new Set(e),a=l.current;n.forEach(function(e){r.has(e)||o(e,null)}),r.forEach(function(e){n.has(e)||o(e,a)})}c.set(l,e)},[e]),l}},9937:function(e,t,n){n.d(t,{L:function(){return c}});var r=n(4539),o=n(2374),a=function(e){var t=e.sideCar,n=(0,r._T)(e,["sideCar"]);if(!t)throw Error("Sidecar: please provide `sideCar` property to import the right car");var a=t.read();if(!a)throw Error("Sidecar medium not found");return o.createElement(a,(0,r.pi)({},n))};function c(e,t){return e.useMedium(t),a}a.isSideCarExport=!0},679:function(e,t,n){n.d(t,{_:function(){return a}});var r=n(4539);function o(e){return e}function a(e){void 0===e&&(e={});var t,n,a,c=(void 0===t&&(t=o),n=[],a=!1,{read:function(){if(a)throw Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return n.length?n[n.length-1]:null},useMedium:function(e){var r=t(e,a);return n.push(r),function(){n=n.filter(function(e){return e!==r})}},assignSyncMedium:function(e){for(a=!0;n.length;){var t=n;n=[],t.forEach(e)}n={push:function(t){return e(t)},filter:function(){return n}}},assignMedium:function(e){a=!0;var t=[];if(n.length){var r=n;n=[],r.forEach(e),t=n}var o=function(){var n=t;t=[],n.forEach(e)},c=function(){return Promise.resolve().then(o)};c(),n={push:function(e){t.push(e),c()},filter:function(e){return t=t.filter(e),n}}}});return c.options=(0,r.pi)({async:!0,ssr:!1},e),c}},8454:function(e,t,n){n.d(t,{_9:function(){return c},gm:function(){return i}});var r=n(2374),o=n(7516),a=r.createContext(void 0),c=e=>{let{dir:t,children:n}=e;return(0,o.jsx)(a.Provider,{value:t,children:n})};function i(e){let t=r.useContext(a);return e||t||"ltr"}},1453:function(e,t,n){n.d(t,{p:function(){return o}});var r=n(2374);function o(e,t){let[n,o]=(0,r.useState)(e);n!==e&&(t(e,n),o(e))}},6384:function(e,t,n){},4557:function(e,t,n){n.d(t,{wb:function(){return N},Hn:function(){return R},vP:function(){return j}}),n(6384);var r=n(2374),o=n(4539),a=n(7118),c=n(6622),i=(0,n(679)._)(),u=function(){},l=r.forwardRef(function(e,t){var n=r.useRef(null),a=r.useState({onScrollCapture:u,onWheelCapture:u,onTouchMoveCapture:u}),l=a[0],s=a[1],d=e.forwardProps,f=e.children,h=e.className,m=e.removeScrollBar,v=e.enabled,p=e.shards,g=e.sideCar,y=e.noIsolation,w=e.inert,b=e.allowPinchZoom,E=e.as,C=e.gapMode,S=(0,o._T)(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noIsolation","inert","allowPinchZoom","as","gapMode"]),x=(0,c.q)([n,t]),k=(0,o.pi)((0,o.pi)({},S),l);return r.createElement(r.Fragment,null,v&&r.createElement(g,{sideCar:i,removeScrollBar:m,shards:p,noIsolation:y,inert:w,setCallbacks:s,allowPinchZoom:!!b,lockRef:n,gapMode:C}),d?r.cloneElement(r.Children.only(f),(0,o.pi)((0,o.pi)({},k),{ref:x})):r.createElement(void 0===E?"div":E,(0,o.pi)({},k,{className:h,ref:x}),f))});l.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1},l.classNames={fullWidth:a.zi,zeroRight:a.pF};var s=n(9937),d=n(9718),f=n(7323),h=!1;if("undefined"!=typeof window)try{var m=Object.defineProperty({},"passive",{get:function(){return h=!0,!0}});window.addEventListener("test",m,m),window.removeEventListener("test",m,m)}catch(e){h=!1}var v=!!h&&{passive:!1},p=function(e,t){if(!(e instanceof Element))return!1;var n=window.getComputedStyle(e);return"hidden"!==n[t]&&!(n.overflowY===n.overflowX&&"TEXTAREA"!==e.tagName&&"visible"===n[t])},g=function(e,t){var n=t.ownerDocument,r=t;do{if("undefined"!=typeof ShadowRoot&&r instanceof ShadowRoot&&(r=r.host),y(e,r)){var o=w(e,r);if(o[1]>o[2])return!0}r=r.parentNode}while(r&&r!==n.body);return!1},y=function(e,t){return"v"===e?p(t,"overflowY"):p(t,"overflowX")},w=function(e,t){return"v"===e?[t.scrollTop,t.scrollHeight,t.clientHeight]:[t.scrollLeft,t.scrollWidth,t.clientWidth]},b=function(e,t,n,r,o){var a,c=(a=window.getComputedStyle(t).direction,"h"===e&&"rtl"===a?-1:1),i=c*r,u=n.target,l=t.contains(u),s=!1,d=i>0,f=0,h=0;do{var m=w(e,u),v=m[0],p=m[1]-m[2]-c*v;(v||p)&&y(e,u)&&(f+=p,h+=v),u instanceof ShadowRoot?u=u.host:u=u.parentNode}while(!l&&u!==document.body||l&&(t.contains(u)||t===u));return d&&(o&&1>Math.abs(f)||!o&&i>f)?s=!0:!d&&(o&&1>Math.abs(h)||!o&&-i>h)&&(s=!0),s},E=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},C=function(e){return[e.deltaX,e.deltaY]},S=function(e){return e&&"current"in e?e.current:e},x=0,k=[],T=(0,s.L)(i,function(e){var t=r.useRef([]),n=r.useRef([0,0]),a=r.useRef(),c=r.useState(x++)[0],i=r.useState(f.Ws)[0],u=r.useRef(e);r.useEffect(function(){u.current=e},[e]),r.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(c));var t=(0,o.ev)([e.lockRef.current],(e.shards||[]).map(S),!0).filter(Boolean);return t.forEach(function(e){return e.classList.add("allow-interactivity-".concat(c))}),function(){document.body.classList.remove("block-interactivity-".concat(c)),t.forEach(function(e){return e.classList.remove("allow-interactivity-".concat(c))})}}},[e.inert,e.lockRef.current,e.shards]);var l=r.useCallback(function(e,t){if("touches"in e&&2===e.touches.length)return!u.current.allowPinchZoom;var r,o=E(e),c=n.current,i="deltaX"in e?e.deltaX:c[0]-o[0],l="deltaY"in e?e.deltaY:c[1]-o[1],s=e.target,d=Math.abs(i)>Math.abs(l)?"h":"v";if("touches"in e&&"h"===d&&"range"===s.type)return!1;var f=g(d,s);if(!f)return!0;if(f?r=d:(r="v"===d?"h":"v",f=g(d,s)),!f)return!1;if(!a.current&&"changedTouches"in e&&(i||l)&&(a.current=r),!r)return!0;var h=a.current||r;return b(h,t,e,"h"===h?i:l,!0)},[]),s=r.useCallback(function(e){if(k.length&&k[k.length-1]===i){var n="deltaY"in e?C(e):E(e),r=t.current.filter(function(t){var r;return t.name===e.type&&(t.target===e.target||e.target===t.shadowParent)&&(r=t.delta)[0]===n[0]&&r[1]===n[1]})[0];if(r&&r.should){e.cancelable&&e.preventDefault();return}if(!r){var o=(u.current.shards||[]).map(S).filter(Boolean).filter(function(t){return t.contains(e.target)});(o.length>0?l(e,o[0]):!u.current.noIsolation)&&e.cancelable&&e.preventDefault()}}},[]),h=r.useCallback(function(e,n,r,o){var a={name:e,delta:n,target:r,should:o,shadowParent:function(e){for(var t=null;null!==e;)e instanceof ShadowRoot&&(t=e.host,e=e.host),e=e.parentNode;return t}(r)};t.current.push(a),setTimeout(function(){t.current=t.current.filter(function(e){return e!==a})},1)},[]),m=r.useCallback(function(e){n.current=E(e),a.current=void 0},[]),p=r.useCallback(function(t){h(t.type,C(t),t.target,l(t,e.lockRef.current))},[]),y=r.useCallback(function(t){h(t.type,E(t),t.target,l(t,e.lockRef.current))},[]);r.useEffect(function(){return k.push(i),e.setCallbacks({onScrollCapture:p,onWheelCapture:p,onTouchMoveCapture:y}),document.addEventListener("wheel",s,v),document.addEventListener("touchmove",s,v),document.addEventListener("touchstart",m,v),function(){k=k.filter(function(e){return e!==i}),document.removeEventListener("wheel",s,v),document.removeEventListener("touchmove",s,v),document.removeEventListener("touchstart",m,v)}},[]);var w=e.removeScrollBar,T=e.inert;return r.createElement(r.Fragment,null,T?r.createElement(i,{styles:"\n  .block-interactivity-".concat(c," {pointer-events: none;}\n  .allow-interactivity-").concat(c," {pointer-events: all;}\n")}):null,w?r.createElement(d.jp,{gapMode:e.gapMode}):null)}),M=r.forwardRef(function(e,t){return r.createElement(l,(0,o.pi)({},e,{ref:t,sideCar:T}))});M.classNames=l.classNames;var P=n(7516),L=(0,r.createContext)(void 0);function O(){let e=(0,r.useContext)(L);if(!e)throw Error("Missing sidebar provider");return e}function R(e){var t,n;let[o,a]=(0,r.useState)(!1),[c,i]=[null!==(t=e.open)&&void 0!==t?t:o,null!==(n=e.onOpenChange)&&void 0!==n?n:a];return(0,P.jsx)(L.Provider,{value:[c,i],children:e.children})}function j(e){let{as:t,...n}=e,[o,a]=O();return(0,P.jsx)(null!=t?t:"button",{"aria-label":"Toggle Sidebar","data-open":o,onClick:(0,r.useCallback)(()=>{a(!o)},[o,a]),...n})}function N(e){let{as:t,blockScrollingWidth:n,...o}=e,[a]=O(),[c,i]=(0,r.useState)(!1);return(0,r.useEffect)(()=>{if(!n)return;let e=window.matchMedia("(min-width: ".concat(n.toString(),"px)")),t=()=>{i(!e.matches)};return t(),e.addEventListener("change",t),()=>{e.removeEventListener("change",t)}},[n]),(0,P.jsx)(M,{as:null!=t?t:"aside","data-open":a,enabled:!!(c&&a),...o,children:o.children})}},1694:function(e,t,n){n.d(t,{p:function(){return r.p}});var r=n(1453);n(6384)},9602:function(e,t,n){n.d(t,{A:function(){return l},H:function(){return s}});var r=n(2374),o=n(8302),a=n(4557),c=n(1694),i=n(7516),u=(0,r.createContext)(void 0);function l(){let e=(0,r.useContext)(u);if(!e)throw Error("Missing root provider");return e}function s({children:e}){let t=(0,r.useRef)(!0),[n,l]=(0,r.useState)(!1),[s,d]=(0,r.useState)(!1),f=(0,o.usePathname)();return(0,c.p)(f,()=>{t.current&&l(!1),t.current=!0}),(0,i.jsx)(u.Provider,{value:(0,r.useMemo)(()=>({open:n,setOpen:l,collapsed:s,setCollapsed:d,closeOnRedirect:t}),[n,s]),children:(0,i.jsx)(a.Hn,{open:n,onOpenChange:l,children:e})})}},5558:function(e,t,n){n.d(t,{Q:function(){return a}});var r=n(2374),o=(0,r.createContext)({text:{search:"Search",searchNoResult:"No results found",toc:"On this page",tocNoHeadings:"No Headings",lastUpdate:"Last updated on",chooseLanguage:"Choose a language",nextPage:"Next",previousPage:"Previous",chooseTheme:"Theme",editOnGithub:"Edit on GitHub"}});function a(){return(0,r.useContext)(o)}},8212:function(e,t,n){n.d(t,{A:function(){return c},X:function(){return i}});var r=n(2374),o=n(7516),a=(0,r.createContext)({enabled:!1,hotKey:[],setOpenSearch:()=>void 0});function c(){return(0,r.useContext)(a)}function i({SearchDialog:e,children:t,preload:n=!0,options:c,hotKey:i=[{key:e=>e.metaKey||e.ctrlKey,display:"⌘"},{key:"k",display:"K"}],links:u}){let[l,s]=(0,r.useState)(!n&&void 0);return(0,r.useEffect)(()=>{let e=e=>{i.every(t=>"string"==typeof t.key?e.key===t.key:t.key(e))&&(s(!0),e.preventDefault())};return window.addEventListener("keydown",e),()=>{window.removeEventListener("keydown",e)}},[i]),(0,o.jsxs)(a.Provider,{value:(0,r.useMemo)(()=>({enabled:!0,hotKey:i,setOpenSearch:s}),[i]),children:[void 0!==l&&(0,o.jsx)(e,{open:l,onOpenChange:s,links:u,...c}),t]})}},3880:function(e,t,n){n.d(t,{G:function(){return u},W:function(){return l}});var r=n(546),o=n(8302),a=n(2374),c=n(7516),i=(0,a.createContext)(void 0);function u({children:e,tree:t}){let n=(0,o.usePathname)(),u=(0,a.useMemo)(()=>{let e=function e(t,n){for(let o of t)if("folder"===o.type){let t=e(o.children,n);if(t)return t;if(!0===o.root&&(0,r.$M)(o.children,n))return o}}(t.children,n)??t,o=function e(t){return t.flatMap(t=>{if("separator"===t.type)return[];if("folder"===t.type){let n=e(t.children);return!t.root&&t.index&&n.unshift(t.index),n}return t.external?[]:[t]})}(e.children);return{root:e,navigation:o,tree:t}},[n,t]);return(0,c.jsx)(i.Provider,{value:u,children:e})}function l(){let e=(0,a.useContext)(i);if(!e)throw Error("You must wrap this component under <DocsLayout />");return e}},4918:function(e,t,n){n.d(t,{r:function(){return o}});var r=Object.defineProperty,o=(e,t)=>{for(var n in t)r(e,n,{get:t[n],enumerable:!0})}},546:function(e,t,n){n.d(t,{$M:function(){return function e(t,n){return t.some(t=>"page"===t.type?t.url===n:"folder"===t.type&&(t.index?.url===n||e(t.children,n)))}},wW:function(){return r},zh:function(){return o}});var r="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 900px";function o(e,t,n=!0){return e===t||n&&t.startsWith(`${e}/`)}},3358:function(e,t,n){n.d(t,{F:function(){return l},f:function(){return s}});var r=n(2374),o=["light","dark"],a="(prefers-color-scheme: dark)",c="undefined"==typeof window,i=r.createContext(void 0),u={setTheme:e=>{},themes:[]},l=()=>{var e;return null!=(e=r.useContext(i))?e:u},s=e=>r.useContext(i)?e.children:r.createElement(f,{...e}),d=["light","dark"],f=e=>{let{forcedTheme:t,disableTransitionOnChange:n=!1,enableSystem:c=!0,enableColorScheme:u=!0,storageKey:l="theme",themes:s=d,defaultTheme:f=c?"system":"light",attribute:g="data-theme",value:y,children:w,nonce:b}=e,[E,C]=r.useState(()=>m(l,f)),[S,x]=r.useState(()=>m(l)),k=y?Object.values(y):s,T=r.useCallback(e=>{let t=e;if(!t)return;"system"===e&&c&&(t=p());let r=y?y[t]:t,a=n?v():null,i=document.documentElement;if("class"===g?(i.classList.remove(...k),r&&i.classList.add(r)):r?i.setAttribute(g,r):i.removeAttribute(g),u){let e=o.includes(f)?f:null,n=o.includes(t)?t:e;i.style.colorScheme=n}null==a||a()},[]),M=r.useCallback(e=>{let t="function"==typeof e?e(e):e;C(t);try{localStorage.setItem(l,t)}catch(e){}},[t]),P=r.useCallback(e=>{x(p(e)),"system"===E&&c&&!t&&T("system")},[E,t]);r.useEffect(()=>{let e=window.matchMedia(a);return e.addListener(P),P(e),()=>e.removeListener(P)},[P]),r.useEffect(()=>{let e=e=>{e.key===l&&M(e.newValue||f)};return window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)},[M]),r.useEffect(()=>{T(null!=t?t:E)},[t,E]);let L=r.useMemo(()=>({theme:E,setTheme:M,forcedTheme:t,resolvedTheme:"system"===E?S:E,themes:c?[...s,"system"]:s,systemTheme:c?S:void 0}),[E,M,t,S,c,s]);return r.createElement(i.Provider,{value:L},r.createElement(h,{forcedTheme:t,disableTransitionOnChange:n,enableSystem:c,enableColorScheme:u,storageKey:l,themes:s,defaultTheme:f,attribute:g,value:y,children:w,attrs:k,nonce:b}),w)},h=r.memo(e=>{let{forcedTheme:t,storageKey:n,attribute:c,enableSystem:i,enableColorScheme:u,defaultTheme:l,value:s,attrs:d,nonce:f}=e,h="system"===l,m="class"===c?"var d=document.documentElement,c=d.classList;".concat("c.remove(".concat(d.map(e=>"'".concat(e,"'")).join(","),")"),";"):"var d=document.documentElement,n='".concat(c,"',s='setAttribute';"),v=u?(o.includes(l)?l:null)?"if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'".concat(l,"'"):"if(e==='light'||e==='dark')d.style.colorScheme=e":"",p=function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=!(arguments.length>2)||void 0===arguments[2]||arguments[2],r=s?s[e]:e,a=t?e+"|| ''":"'".concat(r,"'"),i="";return u&&n&&!t&&o.includes(e)&&(i+="d.style.colorScheme = '".concat(e,"';")),"class"===c?t||r?i+="c.add(".concat(a,")"):i+="null":r&&(i+="d[s](n,".concat(a,")")),i},g=t?"!function(){".concat(m).concat(p(t),"}()"):i?"!function(){try{".concat(m,"var e=localStorage.getItem('").concat(n,"');if('system'===e||(!e&&").concat(h,")){var t='").concat(a,"',m=window.matchMedia(t);if(m.media!==t||m.matches){").concat(p("dark"),"}else{").concat(p("light"),"}}else if(e){").concat(s?"var x=".concat(JSON.stringify(s),";"):"").concat(p(s?"x[e]":"e",!0),"}").concat(h?"":"else{"+p(l,!1,!1)+"}").concat(v,"}catch(e){}}()"):"!function(){try{".concat(m,"var e=localStorage.getItem('").concat(n,"');if(e){").concat(s?"var x=".concat(JSON.stringify(s),";"):"").concat(p(s?"x[e]":"e",!0),"}else{").concat(p(l,!1,!1),";}").concat(v,"}catch(t){}}();");return r.createElement("script",{nonce:f,dangerouslySetInnerHTML:{__html:g}})}),m=(e,t)=>{let n;if(!c){try{n=localStorage.getItem(e)||void 0}catch(e){}return n||t}},v=()=>{let e=document.createElement("style");return e.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(e),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(e)},1)}},p=e=>(e||(e=window.matchMedia(a)),e.matches?"dark":"light")},4539:function(e,t,n){n.d(t,{_T:function(){return o},ev:function(){return a},pi:function(){return r}});var r=function(){return(r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function o(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)0>t.indexOf(r[o])&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n}function a(e,t,n){if(n||2==arguments.length)for(var r,o=0,a=t.length;o<a;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))}"function"==typeof SuppressedError&&SuppressedError}}]);