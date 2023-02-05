(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerpolicy&&(s.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?s.credentials="include":o.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(o){if(o.ep)return;o.ep=!0;const s=n(o);fetch(o.href,s)}})();function j(){}function je(t,e){for(const n in e)t[n]=e[n];return t}function be(t){return t()}function me(){return Object.create(null)}function G(t){t.forEach(be)}function Ke(t){return typeof t=="function"}function z(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function Oe(t){return Object.keys(t).length===0}function Ne(t,...e){if(t==null)return j;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Se(t,e,n){t.$$.on_destroy.push(Ne(e,n))}function qe(t,e,n,r){if(t){const o=ve(t,e,n,r);return t[0](o)}}function ve(t,e,n,r){return t[1]&&r?je(n.ctx.slice(),t[1](r(e))):n.ctx}function ze(t,e,n,r){if(t[2]&&r){const o=t[2](r(n));if(e.dirty===void 0)return o;if(typeof o=="object"){const s=[],i=Math.max(e.dirty.length,o.length);for(let a=0;a<i;a+=1)s[a]=e.dirty[a]|o[a];return s}return e.dirty|o}return e.dirty}function We(t,e,n,r,o,s){if(o){const i=ve(e,n,r,s);t.p(i,o)}}function Me(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let r=0;r<n;r++)e[r]=-1;return e}return-1}function w(t,e){t.appendChild(e)}function L(t,e,n){t.insertBefore(e,n||null)}function b(t){t.parentNode.removeChild(t)}function y(t){return document.createElement(t)}function ke(t){return document.createTextNode(t)}function q(){return ke(" ")}function ae(){return ke("")}function Ie(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function F(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Fe(t){return Array.from(t.childNodes)}function he(t,e,n){t.classList[n?"add":"remove"](e)}let B;function D(t){B=t}function Ve(){if(!B)throw new Error("Function called outside component initialization");return B}function Le(t){Ve().$$.on_mount.push(t)}const H=[],ge=[],Y=[],pe=[],He=Promise.resolve();let oe=!1;function De(){oe||(oe=!0,He.then(Ae))}function se(t){Y.push(t)}const re=new Set;let X=0;function Ae(){const t=B;do{for(;X<H.length;){const e=H[X];X++,D(e),Be(e.$$)}for(D(null),H.length=0,X=0;ge.length;)ge.pop()();for(let e=0;e<Y.length;e+=1){const n=Y[e];re.has(n)||(re.add(n),n())}Y.length=0}while(H.length);for(;pe.length;)pe.pop()();oe=!1,re.clear(),D(t)}function Be(t){if(t.fragment!==null){t.update(),G(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(se)}}const Z=new Set;let I;function ue(){I={r:0,c:[],p:I}}function ce(){I.r||G(I.c),I=I.p}function P(t,e){t&&t.i&&(Z.delete(t),t.i(e))}function R(t,e,n,r){if(t&&t.o){if(Z.has(t))return;Z.add(t),I.c.push(()=>{Z.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}else r&&r()}function K(t){t&&t.c()}function A(t,e,n,r){const{fragment:o,on_mount:s,on_destroy:i,after_update:a}=t.$$;o&&o.m(e,n),r||se(()=>{const u=s.map(be).filter(Ke);i?i.push(...u):G(u),t.$$.on_mount=[]}),a.forEach(se)}function x(t,e){const n=t.$$;n.fragment!==null&&(G(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Qe(t,e){t.$$.dirty[0]===-1&&(H.push(t),De(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function W(t,e,n,r,o,s,i,a=[-1]){const u=B;D(t);const c=t.$$={fragment:null,ctx:null,props:s,update:j,not_equal:o,bound:me(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(u?u.$$.context:[])),callbacks:me(),dirty:a,skip_bound:!1,root:e.target||u.$$.root};i&&i(c.root);let l=!1;if(c.ctx=n?n(t,e.props||{},(p,C,...O)=>{const T=O.length?O[0]:C;return c.ctx&&o(c.ctx[p],c.ctx[p]=T)&&(!c.skip_bound&&c.bound[p]&&c.bound[p](T),l&&Qe(t,p)),C}):[],c.update(),l=!0,G(c.before_update),c.fragment=r?r(c.ctx):!1,e.target){if(e.hydrate){const p=Fe(e.target);c.fragment&&c.fragment.l(p),p.forEach(b)}else c.fragment&&c.fragment.c();e.intro&&P(t.$$.fragment),A(t,e.target,e.anchor,e.customElement),Ae()}D(u)}class M{$destroy(){x(this,1),this.$destroy=j}$on(e,n){const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(n),()=>{const o=r.indexOf(n);o!==-1&&r.splice(o,1)}}$set(e){this.$$set&&!Oe(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const V=[];function Ge(t,e=j){let n;const r=new Set;function o(a){if(z(t,a)&&(t=a,n)){const u=!V.length;for(const c of r)c[1](),V.push(c,t);if(u){for(let c=0;c<V.length;c+=2)V[c][0](V[c+1]);V.length=0}}}function s(a){o(a(t))}function i(a,u=j){const c=[a,u];return r.add(c),r.size===1&&(n=e(o)||j),a(t),()=>{r.delete(c),r.size===0&&(n(),n=null)}}return{set:o,update:s,subscribe:i}}const{set:xe,subscribe:Ue}=Ge({}),Je=()=>{xe({})},Ce={subscribe:Ue,set:xe,remove:Je},Q=(t,e="")=>{const n=new URL(t);function r(){return n.hash}function o(){return n.host}function s(){return n.hostname}function i(){const f=d();return c().reduce((g,_)=>(g[_.value]=f[_.index],g),{})}function a(){return c().reduce((m,g)=>(m.push(g.value),m),[])}function u(){const f=d();return c().reduce((g,_)=>(g.push(f[_.index]),g),[])}function c(){return h(e).reduce((m,g,_)=>(g[0]===":"&&m.push({value:g.slice(1),index:_}),m),[])}function l(){return n.port}function p(){return n.pathname}function C(){return n.protocol}function O(){return n.search}function T(){const f={};return n.searchParams.forEach((m,g)=>{f[g]=m}),f}function v(){const f=[];return n.searchParams.forEach((m,g)=>{f.push(g)}),f}function $(){const f=[];return n.searchParams.forEach(m=>{f.push(m)}),f}function d(){return h(n.pathname)}function h(f){return f==="/"||f.trim().length===0?[f]:(f.slice(-1)==="/"&&(f=f.slice(0,-1)),f[0]==="/"&&(f=f.slice(1)),f.split("/"))}return Object.freeze({hash:r(),host:o(),hostname:s(),namedParams:i(),namedParamsKeys:a(),namedParamsValues:u(),pathNames:d(),port:l(),pathname:p(),protocol:C(),search:O(),queryParams:T(),queryParamsKeys:v(),queryParamsValues:$()})},Te=t=>{let e=!1;return Object.keys(t).length===0?!0:(t.childRoute&&Object.keys(t.childRoute).length===0?e=!0:t.childRoute&&(e=Te(t.childRoute)),e)},_e=(t,e)=>(e=k(e),e.includes(":")?e.includes(t):e.startsWith(t)),$e=(t,e,n)=>{let r=!1;if(n)return{exists:e.lang&&e.lang[n]&&e.lang[n].includes(t),language:n};if(r=_e(t,e.name),!r&&e.lang&&typeof e.lang=="object")for(const[o,s]of Object.entries(e.lang))_e(t,s)&&(r=!0,n=o);return{exists:r,language:n}},Xe=(t="")=>t.trim().length===0?[]:Ye(t).reduce((n,r)=>(r[0]===":"&&n.push(r.slice(1)),n),[]),Ye=t=>t==="/"||t.trim().length===0?[t]:(t=k(t,"both"),t.split("/")),ye=(t="")=>{let e;return t==="/"||t.trim().length===0?t:(t=k(t,"lead"),e=t.split(":")[0],e=k(e,"trail"),e.toLowerCase())},Ze=t=>t.path.split("?")[0],et=t=>{let e=[];if(t.queryParams)for(let[r,o]of Object.entries(t.queryParams))e.push(`${r}=${o}`);const n=t.hash?t.hash:"";return e.length>0?`${t.path}?${e.join("&")}${n}`:t.path+n},tt=(t,e)=>{const n=e.split("/");return n.length>1&&n.forEach(function(r,o){r.length>0&&o>0&&t.shift()}),t},k=(t,e="lead")=>((e==="trail"||e==="both")&&(t=t.replace(/\/$/,"")),(e==="lead"||e==="both")&&(t=t.replace(/^\//,"")),t),ie=(t,e=null)=>!e||!t.lang||!t.lang[e]?t.name:t.lang[e],nt=t=>k(t).startsWith(":"),rt=(t,e,n,r,o=!1)=>{if(t==="/"||t.trim().length===0)return{result:t,language:null};let s=t,i=n.name,a=r;if(o&&(a=""),i=k(i),s=k(s),n.childRoute)return{result:t,language:a};{let u=$e(s,n,a);u.exists&&o&&(s=ie(n,r));let c=i.split(":")[0];return c=k(c,"trail"),c=c.split("/"),c.shift(),c.forEach(()=>{const l=e[0];if(u=$e(`${s}/${l}`,n,a),l&&u.exists)o?s=ie(n,r):s=`${s}/${l}`,e.shift();else return{result:s,language:u.language}}),{result:s,language:u.language}}},ot=t=>{const e=t||!1;let n="";const r=(u,c)=>{n=u.path,i(u,c)},o=()=>n,s=(u,c=!1)=>{u[0]!=="/"&&(u="/"+u);let l=Q(`http://fake.com${u}`).pathname,p=Q(`http://fake.com${n}`).pathname;return l=k(l,"trail"),p=k(p,"trail"),c?p.includes(l):p===l},i=(u,c)=>{if(typeof window<"u"){const l=et(u);c&&window.history.pushState({page:l},"",l),e&&a(l)}},a=u=>{typeof ga<"u"&&(ga("set","page",u),ga("send","pageview"))};return Object.freeze({active:o,isActive:s,setActive:r})},st=t=>{const e=t;return Object.freeze({valid:()=>e&&e.guard&&typeof e.guard=="function",redirect:()=>!e.guard(),redirectPath:()=>{let s="/";return e.redirect&&e.redirect.length>0&&(s=e.redirect),s}})},it=(t,e)=>{const n=st(t.onlyIf);return Object.freeze({path:()=>{let o=e;return t.redirectTo&&t.redirectTo.length>0&&(o=t.redirectTo),n.valid()&&n.redirect()&&(o=n.redirectPath()),o}})};function at({routeInfo:t,path:e,routeNamedParams:n,urlParser:r,namedPath:o,language:s}){const i=()=>{const u=Q(`https://fake.com${r.pathname}`,o).namedParams;return{...n,...u}};return Object.freeze({get:()=>({name:e,component:t.component,hash:r.hash,layout:t.layout,queryParams:r.queryParams,namedParams:i(),path:e,language:s}),namedParams:i})}function ut({basePath:t,basePathName:e,pathNames:n,convert:r,currentLanguage:o}){let s,i,a=o;function u($){return i=$,s=rt(e,n,i,a,r),a=r?o:s.language,s}function c(){return ie(i,a)}function l(){return ye(c())}function p(){return ye(s.result)}function C(){let $=c();return $&&!$.startsWith("/")&&($="/"+$),t?`${t}${$}`:$}function O(){let $=`${t}/${p()}`;$==="//"&&($="/"),a&&(n=tt(n,l()));const d=Xe(c());return d&&d.length>0&&d.forEach(function(){n.length>0&&($+=`/${n.shift()}`)}),$}function T(){return a}function v(){return p()===l()}return Object.freeze({basePathSameAsLocalised:v,updatedPath:u,basePathNameWithoutNamedParams:p,localisedPathName:c,localisedRouteWithoutNamedParams:l,namedPath:C,pathNames:n,routeLanguage:T,routePath:O})}const ct="/404.html";function lt({routes:t,currentUrl:e,routerOptions:n,convert:r}){const o=n.defaultLanguage,s=n.prefix?n.prefix.toLowerCase():"",i=T(e,s);let a="",u={},c=!1;function l(){let d=p(t,"",i.pathNames,n.lang,r);return!d||!Object.keys(d).length||Te(d)?typeof window<"u"&&(d=$(n.lang)):(d.path=Ze(d),s&&(d.path=`/${s}${d.path}`)),d}function p(d,h,f,m,g){let _={},U=f.shift().toLowerCase();const N=ut({basePath:h,basePathName:U,pathNames:f,convert:g,currentLanguage:m});return c=!1,d.forEach(function(S){if(N.updatedPath(S),C(N,S.name)){let J=N.routePath();if(a=it(S,a).path(),_.name!==J&&(_=v({route:S,routePath:J,routeLanguage:N.routeLanguage(),urlParser:i,namedPath:N.namedPath()})),S.nestedRoutes&&S.nestedRoutes.length>0&&N.pathNames.length>0)_.childRoute=p(S.nestedRoutes,J,N.pathNames,N.routeLanguage(),g),_.path=_.childRoute.path,_.language=_.childRoute.language;else if(O(S,N.pathNames)){const ne=p(S.nestedRoutes,J,["index"],N.routeLanguage(),g);ne&&Object.keys(ne).length>0&&(_.childRoute=ne,_.language=_.childRoute.language)}}}),a&&(_.redirectTo=a),_}function C(d,h){const f=d.basePathSameAsLocalised();return f&&(c=!0),f||!c&&nt(h)}function O(d,h){return d.nestedRoutes&&d.nestedRoutes.length>0&&h.length===0}function T(d,h){if(h&&h.trim().length>0){const f=d.endsWith(h)?h:h+"/",m=d.replace(f,"");return Q(m)}else return Q(d)}function v({route:d,routePath:h,routeLanguage:f,urlParser:m,namedPath:g}){const _=at({routeInfo:d,urlParser:m,path:h,routeNamedParams:u,namedPath:g,language:f||o});return u=_.namedParams(),_.get()}const $=d=>{const h=t.find(m=>m.name=="404"),f=d||o||"";return h?{...h,language:f,path:"404"}:{name:"404",component:"",path:"404",redirectTo:ct}};return Object.freeze({findActiveRoute:l})}const Pe="/404.html";let le=[],E={},ee;const fe=(t,e,n={})=>{E={...n},(typeof e>"u"||e==="")&&(e=document.location.href),ee=ot(E.gaPageviews),e=k(e,"trail"),le=t;const r=()=>{let i=!1;return E.langConvertTo&&(E.lang=E.langConvertTo,i=!0),lt({routes:t,currentUrl:e,routerOptions:E,convert:i}).findActiveRoute()},o=(i,a)=>(typeof window<"u"&&(i===Pe?ee.setActive({path:Pe},a):te(i)),i);return Object.freeze({setActiveRoute:(i=!0)=>{const a=r();return a.redirectTo?o(a.redirectTo,i):(ee.setActive(a,i),Ce.set(a),a)},findActiveRoute:r})},ft=(t,e)=>(t=k(t,"lead"),E.langConvertTo=e,fe(le,"http://fake.com/"+t,E).findActiveRoute()),te=(t,e=null,n=!0)=>(t=k(t,"lead"),e&&(E.langConvertTo=e),fe(le,"http://fake.com/"+t,E).setActiveRoute(n)),we=(t,e=!1)=>ee.isActive(t,e);typeof window<"u"&&(window.addEventListener("click",t=>{if(t.target.localName.toLowerCase()!=="a"||t.metaKey||t.ctrlKey||t.shiftKey)return;const e=E.prefix?`/${E.prefix.toLowerCase()}`:"",n=t.target.pathname&&t.target.host===window.location.host,r=e.length>1?t.target.pathname.startsWith(e):!0;if(n&&r){t.preventDefault();const s=t.target.pathname+t.target.search+t.target.search+t.target.hash;t.target.target==="_blank"?window.open(s,"newTab"):te(s)}}),window.onpopstate=function(t){let e=window.location.pathname+window.location.search+window.location.hash;te(e,null,!1)});function dt(t){let e,n;return e=new Ee({props:{currentRoute:t[0].childRoute,params:t[1]}}),{c(){K(e.$$.fragment)},m(r,o){A(e,r,o),n=!0},p(r,o){const s={};o&1&&(s.currentRoute=r[0].childRoute),o&2&&(s.params=r[1]),e.$set(s)},i(r){n||(P(e.$$.fragment,r),n=!0)},o(r){R(e.$$.fragment,r),n=!1},d(r){x(e,r)}}}function mt(t){let e,n,r;var o=t[0].component;function s(i){return{props:{currentRoute:{...i[0],component:""},params:i[1]}}}return o&&(e=new o(s(t))),{c(){e&&K(e.$$.fragment),n=ae()},m(i,a){e&&A(e,i,a),L(i,n,a),r=!0},p(i,a){const u={};if(a&1&&(u.currentRoute={...i[0],component:""}),a&2&&(u.params=i[1]),o!==(o=i[0].component)){if(e){ue();const c=e;R(c.$$.fragment,1,0,()=>{x(c,1)}),ce()}o?(e=new o(s(i)),K(e.$$.fragment),P(e.$$.fragment,1),A(e,n.parentNode,n)):e=null}else o&&e.$set(u)},i(i){r||(e&&P(e.$$.fragment,i),r=!0)},o(i){e&&R(e.$$.fragment,i),r=!1},d(i){i&&b(n),e&&x(e,i)}}}function ht(t){let e,n,r;var o=t[0].layout;function s(i){return{props:{currentRoute:{...i[0],layout:""},params:i[1]}}}return o&&(e=new o(s(t))),{c(){e&&K(e.$$.fragment),n=ae()},m(i,a){e&&A(e,i,a),L(i,n,a),r=!0},p(i,a){const u={};if(a&1&&(u.currentRoute={...i[0],layout:""}),a&2&&(u.params=i[1]),o!==(o=i[0].layout)){if(e){ue();const c=e;R(c.$$.fragment,1,0,()=>{x(c,1)}),ce()}o?(e=new o(s(i)),K(e.$$.fragment),P(e.$$.fragment,1),A(e,n.parentNode,n)):e=null}else o&&e.$set(u)},i(i){r||(e&&P(e.$$.fragment,i),r=!0)},o(i){e&&R(e.$$.fragment,i),r=!1},d(i){i&&b(n),e&&x(e,i)}}}function gt(t){let e,n,r,o;const s=[ht,mt,dt],i=[];function a(u,c){return u[0].layout?0:u[0].component?1:u[0].childRoute?2:-1}return~(e=a(t))&&(n=i[e]=s[e](t)),{c(){n&&n.c(),r=ae()},m(u,c){~e&&i[e].m(u,c),L(u,r,c),o=!0},p(u,[c]){let l=e;e=a(u),e===l?~e&&i[e].p(u,c):(n&&(ue(),R(i[l],1,1,()=>{i[l]=null}),ce()),~e?(n=i[e],n?n.p(u,c):(n=i[e]=s[e](u),n.c()),P(n,1),n.m(r.parentNode,r)):n=null)},i(u){o||(P(n),o=!0)},o(u){R(n),o=!1},d(u){~e&&i[e].d(u),u&&b(r)}}}function pt(t,e,n){let{currentRoute:r={}}=e,{params:o={}}=e;return t.$$set=s=>{"currentRoute"in s&&n(0,r=s.currentRoute),"params"in s&&n(1,o=s.params)},[r,o]}class Ee extends M{constructor(e){super(),W(this,e,pt,gt,z,{currentRoute:0,params:1})}}function _t(t){let e,n;return e=new Ee({props:{currentRoute:t[0]}}),{c(){K(e.$$.fragment)},m(r,o){A(e,r,o),n=!0},p(r,[o]){const s={};o&1&&(s.currentRoute=r[0]),e.$set(s)},i(r){n||(P(e.$$.fragment,r),n=!0)},o(r){R(e.$$.fragment,r),n=!1},d(r){x(e,r)}}}function $t(t,e,n){let r;Se(t,Ce,i=>n(0,r=i));let{routes:o=[]}=e,{options:s={}}=e;return Le(()=>{fe(o,document.location.href,s).setActiveRoute()}),t.$$set=i=>{"routes"in i&&n(1,o=i.routes),"options"in i&&n(2,s=i.options)},[r,o,s]}class yt extends M{constructor(e){super(),W(this,e,$t,_t,z,{routes:1,options:2})}}function Pt(t){let e,n,r,o;const s=t[6].default,i=qe(s,t,t[5],null);return{c(){e=y("a"),i&&i.c(),F(e,"href",t[0]),F(e,"title",t[1]),F(e,"class",t[2]),he(e,"active",we(t[0]))},m(a,u){L(a,e,u),i&&i.m(e,null),n=!0,r||(o=Ie(e,"click",t[3]),r=!0)},p(a,[u]){i&&i.p&&(!n||u&32)&&We(i,s,a,a[5],n?ze(s,a[5],u,null):Me(a[5]),null),(!n||u&1)&&F(e,"href",a[0]),(!n||u&2)&&F(e,"title",a[1]),(!n||u&4)&&F(e,"class",a[2]),(!n||u&5)&&he(e,"active",we(a[0]))},i(a){n||(P(i,a),n=!0)},o(a){R(i,a),n=!1},d(a){a&&b(e),i&&i.d(a),r=!1,o()}}}function wt(t,e,n){let{$$slots:r={},$$scope:o}=e,{to:s="/"}=e,{title:i=""}=e,{styles:a=""}=e,{lang:u=null}=e;Le(()=>{if(u){const l=ft(s,u);l&&n(0,s=l.path)}});const c=l=>{l.metaKey||l.ctrlKey||l.shiftKey||(l.preventDefault(),l.stopPropagation(),te(s))};return t.$$set=l=>{"to"in l&&n(0,s=l.to),"title"in l&&n(1,i=l.title),"styles"in l&&n(2,a=l.styles),"lang"in l&&n(4,u=l.lang),"$$scope"in l&&n(5,o=l.$$scope)},[s,i,a,c,u,o,r]}class Re extends M{constructor(e){super(),W(this,e,wt,Pt,z,{to:0,title:1,styles:2,lang:4})}}function Rt(t){let e;return{c(){e=y("strong"),e.textContent="resume"},m(n,r){L(n,e,r)},p:j,d(n){n&&b(e)}}}function bt(t){let e;return{c(){e=y("strong"),e.textContent="curriculum vitae"},m(n,r){L(n,e,r)},p:j,d(n){n&&b(e)}}}function vt(t){let e,n,r,o,s,i,a,u,c,l,p,C,O,T,v,$,d,h,f;return v=new Re({props:{to:"/resume",$$slots:{default:[Rt]},$$scope:{ctx:t}}}),h=new Re({props:{to:"/cv",$$slots:{default:[bt]},$$scope:{ctx:t}}}),{c(){e=y("header"),n=y("h1"),n.textContent="Daniel M Conrad",r=q(),o=y("h2"),o.textContent="Technology Leader",s=q(),i=y("nav"),a=y("ul"),u=y("li"),u.innerHTML='<a href="mailto:danielmconrad@gmail.com"><strong>danielmconrad</strong><ins>@gmail.com</ins></a>',c=q(),l=y("li"),l.innerHTML='<a href="https://www.linkedin.com/in/danielmconrad/"><ins>linkedin.com/in/</ins><strong>danielmconrad</strong></a>',p=q(),C=y("li"),C.innerHTML='<a href="https://github.com/danielmconrad"><ins>github.com/</ins><strong>danielmconrad</strong></a>',O=q(),T=y("li"),K(v.$$.fragment),$=q(),d=y("li"),K(h.$$.fragment)},m(m,g){L(m,e,g),w(e,n),w(e,r),w(e,o),w(e,s),w(e,i),w(i,a),w(a,u),w(a,c),w(a,l),w(a,p),w(a,C),w(a,O),w(a,T),A(v,T,null),w(a,$),w(a,d),A(h,d,null),f=!0},p(m,[g]){const _={};g&1&&(_.$$scope={dirty:g,ctx:m}),v.$set(_);const U={};g&1&&(U.$$scope={dirty:g,ctx:m}),h.$set(U)},i(m){f||(P(v.$$.fragment,m),P(h.$$.fragment,m),f=!0)},o(m){R(v.$$.fragment,m),R(h.$$.fragment,m),f=!1},d(m){m&&b(e),x(v),x(h)}}}class de extends M{constructor(e){super(),W(this,e,null,vt,z,{})}}function kt(t){let e,n,r,o;return e=new de({}),{c(){K(e.$$.fragment),n=q(),r=y("p"),r.textContent="Home Page"},m(s,i){A(e,s,i),L(s,n,i),L(s,r,i),o=!0},p:j,i(s){o||(P(e.$$.fragment,s),o=!0)},o(s){R(e.$$.fragment,s),o=!1},d(s){x(e,s),s&&b(n),s&&b(r)}}}class Lt extends M{constructor(e){super(),W(this,e,null,kt,z,{})}}function At(t){let e,n,r,o;return e=new de({}),{c(){K(e.$$.fragment),n=q(),r=y("p"),r.textContent="Resume"},m(s,i){A(e,s,i),L(s,n,i),L(s,r,i),o=!0},p:j,i(s){o||(P(e.$$.fragment,s),o=!0)},o(s){R(e.$$.fragment,s),o=!1},d(s){x(e,s),s&&b(n),s&&b(r)}}}class xt extends M{constructor(e){super(),W(this,e,null,At,z,{})}}function Ct(t){let e,n,r,o;return e=new de({}),{c(){K(e.$$.fragment),n=q(),r=y("p"),r.textContent="Curriculum Vitae"},m(s,i){A(e,s,i),L(s,n,i),L(s,r,i),o=!0},p:j,i(s){o||(P(e.$$.fragment,s),o=!0)},o(s){R(e.$$.fragment,s),o=!1},d(s){x(e,s),s&&b(n),s&&b(r)}}}class Tt extends M{constructor(e){super(),W(this,e,null,Ct,z,{})}}function Et(t){let e,n;return e=new yt({props:{routes:t[0]}}),{c(){K(e.$$.fragment)},m(r,o){A(e,r,o),n=!0},p:j,i(r){n||(P(e.$$.fragment,r),n=!0)},o(r){R(e.$$.fragment,r),n=!1},d(r){x(e,r)}}}function jt(t){return[[{name:"/",component:Lt},{name:"/resume",component:xt},{name:"/cv",component:Tt}]]}class Kt extends M{constructor(e){super(),W(this,e,jt,Et,z,{})}}new Kt({target:document.getElementById("app")});
