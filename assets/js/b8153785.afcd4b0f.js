"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[848],{9435:(e,s,n)=>{const a=n(1855),r=n(6586),i=n(2906),c=n(7745),l=n(7937),t=n(7477),d=n(3072),o=n(7557),p=n(3159),m=e=>e&&e.__esModule?e:{default:e},h=m(r),u=m(l);function x(e,s,n){if(!e.match(/api\/([\d.]+)/)&&!e.includes("api/next")&&n&&n.name!==s.version){const s="current"===n.name?"next":n.name;return e.endsWith("/api")?`${e}/${s}`:e.replace("/api/",`/api/${s}/`)}return e}e.exports=function(e){let{options:s,packages:n,history:r}=e;const l=c.useDocsVersion(),m=i.useDocsPreferredVersion(l.pluginId).preferredVersion;return a.useEffect((()=>{1===n.length?r.replace(x(n[0].entryPoints[0].reflection.permalink,l,m)):m&&r.replace(x(r.location.pathname,l,m))}),[n,r,l,m]),p.jsx("div",{className:"row",children:p.jsxs("div",{className:"col apiItemCol",children:[s.banner&&p.jsx("div",{className:"alert alert--info margin-bottom--md",role:"alert",children:p.jsx("div",{dangerouslySetInnerHTML:{__html:s.banner}})}),p.jsx(o.VersionBanner,{}),p.jsx("div",{className:"apiItemContainer",children:p.jsxs("article",{children:[p.jsxs("div",{className:"markdown",children:[p.jsx("header",{children:p.jsx(u.default,{as:"h1",children:"API"})}),p.jsxs("section",{className:"tsd-panel",children:[p.jsx("h3",{className:"tsd-panel-header",children:"Packages"}),p.jsx("div",{className:"tsd-panel-content",children:p.jsx("ul",{className:"tsd-index-list",children:n.map((e=>p.jsx("li",{className:"tsd-truncate",children:p.jsxs(h.default,{className:"tsd-kind-icon",to:e.entryPoints[0].reflection.permalink,children:[p.jsxs("span",{className:"tsd-signature-symbol",children:["v",e.packageVersion]})," ",p.jsx("span",{children:t.removeScopes(e.packageName,s.scopes)})]})},e.packageName)))})})]})]}),p.jsx(d.Footer,{})]})})]})})}},7477:(e,s)=>{s.removeScopes=function(e,s){return 0===s.length?e:s.reduce(((e,s)=>e.replace(new RegExp(`^(${s}-|@${s}/)`),"")),e)}}}]);