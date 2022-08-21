var ze=Object.defineProperty;var Be=(r,e,t)=>e in r?ze(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var de=(r,e,t)=>(Be(r,typeof e!="symbol"?e+"":e,t),t);import{S as Ke,i as Je,s as We,a as He,e as j,c as Fe,b as V,g as H,t as N,d as F,f as C,h as D,j as Ge,k as Ye,o as ge,l as Me,m as Xe,n as Ze,p as pe,q as K,r as Qe,u as xe,v as et,w as q,x as Z,y as z,z as B,A as Oe}from"./chunks/index-482df250.js";import{w as re,a as tt,s as nt}from"./chunks/paths-f0d88eca.js";class ne{constructor(e,t){de(this,"name","HttpError");de(this,"stack");this.status=e,this.message=t!=null?t:`Error: ${e}`}toString(){return this.message}}class Pe{constructor(e,t){this.status=e,this.location=t}}function rt(r,e){return r==="/"||e==="ignore"?r:e==="never"?r.endsWith("/")?r.slice(0,-1):r:e==="always"&&!r.endsWith("/")?r+"/":r}function st(r){for(const e in r)r[e]=r[e].replace(/%23/g,"#").replace(/%3[Bb]/g,";").replace(/%2[Cc]/g,",").replace(/%2[Ff]/g,"/").replace(/%3[Ff]/g,"?").replace(/%3[Aa]/g,":").replace(/%40/g,"@").replace(/%26/g,"&").replace(/%3[Dd]/g,"=").replace(/%2[Bb]/g,"+").replace(/%24/g,"$");return r}class at extends URL{get hash(){throw new Error("url.hash is inaccessible from load. Consider accessing hash from the page store within the script tag of your component.")}}function je(r){let e=r.baseURI;if(!e){const t=r.getElementsByTagName("base");e=t.length?t[0].href:r.URL}return e}function we(){return{x:pageXOffset,y:pageYOffset}}function Ne(r){return r.composedPath().find(t=>t instanceof Node&&t.nodeName.toUpperCase()==="A")}function Ce(r){return r instanceof SVGAElement?new URL(r.href.baseVal,document.baseURI):new URL(r.href)}function Ie(r){const e=re(r);let t=!0;function o(){t=!0,e.update(n=>n)}function s(n){t=!1,e.set(n)}function u(n){let i;return e.subscribe(c=>{(i===void 0||t&&c!==i)&&n(i=c)})}return{notify:o,set:s,subscribe:u}}function it(){const{set:r,subscribe:e}=re(!1);let t;async function o(){clearTimeout(t);const s=await fetch(`${tt}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(s.ok){const{version:u}=await s.json(),n=u!=="1661097871492";return n&&(r(!0),clearTimeout(t)),n}else throw new Error(`Version check failed: ${s.status}`)}return{subscribe:e,check:o}}function ot(r){let e=5381,t=r.length;if(typeof r=="string")for(;t;)e=e*33^r.charCodeAt(--t);else for(;t;)e=e*33^r[--t];return(e>>>0).toString(36)}const be=window.fetch;function ct(r,e){let o=`script[sveltekit\\:data-type="data"][sveltekit\\:data-url=${JSON.stringify(typeof r=="string"?r:r.url)}]`;e&&typeof e.body=="string"&&(o+=`[sveltekit\\:data-body="${ot(e.body)}"]`);const s=document.querySelector(o);if(s&&s.textContent){const{body:u,...n}=JSON.parse(s.textContent);return Promise.resolve(new Response(u,n))}return be(r,e)}const lt=/^(\.\.\.)?(\w+)(?:=(\w+))?$/;function ft(r){const e=[],t=[];let o=!0;return{pattern:r===""?/^\/$/:new RegExp(`^${decodeURIComponent(r).split(/(?:@[a-zA-Z0-9_-]+)?(?:\/|$)/).map((u,n,i)=>{const c=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(u);if(c)return e.push(c[1]),t.push(c[2]),"(?:/(.*))?";const p=n===i.length-1;return u&&"/"+u.split(/\[(.+?)\]/).map((m,R)=>{if(R%2){const U=lt.exec(m);if(!U)throw new Error(`Invalid param: ${m}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,$,Q,x]=U;return e.push(Q),t.push(x),$?"(.*?)":"([^/]+?)"}return p&&m.includes(".")&&(o=!1),m.normalize().replace(/%5[Bb]/g,"[").replace(/%5[Dd]/g,"]").replace(/#/g,"%23").replace(/\?/g,"%3F").replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}).join("")}).join("")}${o?"/?":""}$`),names:e,types:t}}function ut(r,e,t,o){const s={};for(let u=0;u<e.length;u+=1){const n=e[u],i=t[u],c=r[u+1]||"";if(i){const p=o[i];if(!p)throw new Error(`Missing "${i}" param matcher`);if(!p(c))return}s[n]=c}return s}function dt(r,e,t){return Object.entries(e).map(([o,[s,u,n,i]])=>{const{pattern:c,names:p,types:m}=ft(o),R={id:o,exec:U=>{const $=c.exec(U);if($)return ut($,p,m,t)},errors:s.map(U=>r[U]),layouts:u.map(U=>r[U]),leaf:r[n],uses_server_data:!!i};return R.errors.length=R.layouts.length=Math.max(R.errors.length,R.layouts.length),R})}function pt(r,e){return new ne(r,e)}function ht(r){let e,t,o;var s=r[0][0];function u(n){return{props:{data:n[1],errors:n[4]}}}return s&&(e=new s(u(r))),{c(){e&&q(e.$$.fragment),t=j()},l(n){e&&Z(e.$$.fragment,n),t=j()},m(n,i){e&&z(e,n,i),V(n,t,i),o=!0},p(n,i){const c={};if(i&2&&(c.data=n[1]),i&16&&(c.errors=n[4]),s!==(s=n[0][0])){if(e){H();const p=e;N(p.$$.fragment,1,0,()=>{B(p,1)}),F()}s?(e=new s(u(n)),q(e.$$.fragment),C(e.$$.fragment,1),z(e,t.parentNode,t)):e=null}else s&&e.$set(c)},i(n){o||(e&&C(e.$$.fragment,n),o=!0)},o(n){e&&N(e.$$.fragment,n),o=!1},d(n){n&&D(t),e&&B(e,n)}}}function _t(r){let e,t,o;var s=r[0][0];function u(n){return{props:{data:n[1],$$slots:{default:[bt]},$$scope:{ctx:n}}}}return s&&(e=new s(u(r))),{c(){e&&q(e.$$.fragment),t=j()},l(n){e&&Z(e.$$.fragment,n),t=j()},m(n,i){e&&z(e,n,i),V(n,t,i),o=!0},p(n,i){const c={};if(i&2&&(c.data=n[1]),i&1053&&(c.$$scope={dirty:i,ctx:n}),s!==(s=n[0][0])){if(e){H();const p=e;N(p.$$.fragment,1,0,()=>{B(p,1)}),F()}s?(e=new s(u(n)),q(e.$$.fragment),C(e.$$.fragment,1),z(e,t.parentNode,t)):e=null}else s&&e.$set(c)},i(n){o||(e&&C(e.$$.fragment,n),o=!0)},o(n){e&&N(e.$$.fragment,n),o=!1},d(n){n&&D(t),e&&B(e,n)}}}function mt(r){let e,t,o;var s=r[0][1];function u(n){return{props:{data:n[2],errors:n[4]}}}return s&&(e=new s(u(r))),{c(){e&&q(e.$$.fragment),t=j()},l(n){e&&Z(e.$$.fragment,n),t=j()},m(n,i){e&&z(e,n,i),V(n,t,i),o=!0},p(n,i){const c={};if(i&4&&(c.data=n[2]),i&16&&(c.errors=n[4]),s!==(s=n[0][1])){if(e){H();const p=e;N(p.$$.fragment,1,0,()=>{B(p,1)}),F()}s?(e=new s(u(n)),q(e.$$.fragment),C(e.$$.fragment,1),z(e,t.parentNode,t)):e=null}else s&&e.$set(c)},i(n){o||(e&&C(e.$$.fragment,n),o=!0)},o(n){e&&N(e.$$.fragment,n),o=!1},d(n){n&&D(t),e&&B(e,n)}}}function gt(r){let e,t,o;var s=r[0][1];function u(n){return{props:{data:n[2],$$slots:{default:[wt]},$$scope:{ctx:n}}}}return s&&(e=new s(u(r))),{c(){e&&q(e.$$.fragment),t=j()},l(n){e&&Z(e.$$.fragment,n),t=j()},m(n,i){e&&z(e,n,i),V(n,t,i),o=!0},p(n,i){const c={};if(i&4&&(c.data=n[2]),i&1033&&(c.$$scope={dirty:i,ctx:n}),s!==(s=n[0][1])){if(e){H();const p=e;N(p.$$.fragment,1,0,()=>{B(p,1)}),F()}s?(e=new s(u(n)),q(e.$$.fragment),C(e.$$.fragment,1),z(e,t.parentNode,t)):e=null}else s&&e.$set(c)},i(n){o||(e&&C(e.$$.fragment,n),o=!0)},o(n){e&&N(e.$$.fragment,n),o=!1},d(n){n&&D(t),e&&B(e,n)}}}function wt(r){let e,t,o;var s=r[0][2];function u(n){return{props:{data:n[3]}}}return s&&(e=new s(u(r))),{c(){e&&q(e.$$.fragment),t=j()},l(n){e&&Z(e.$$.fragment,n),t=j()},m(n,i){e&&z(e,n,i),V(n,t,i),o=!0},p(n,i){const c={};if(i&8&&(c.data=n[3]),s!==(s=n[0][2])){if(e){H();const p=e;N(p.$$.fragment,1,0,()=>{B(p,1)}),F()}s?(e=new s(u(n)),q(e.$$.fragment),C(e.$$.fragment,1),z(e,t.parentNode,t)):e=null}else s&&e.$set(c)},i(n){o||(e&&C(e.$$.fragment,n),o=!0)},o(n){e&&N(e.$$.fragment,n),o=!1},d(n){n&&D(t),e&&B(e,n)}}}function bt(r){let e,t,o,s;const u=[gt,mt],n=[];function i(c,p){return c[0][2]?0:1}return e=i(r),t=n[e]=u[e](r),{c(){t.c(),o=j()},l(c){t.l(c),o=j()},m(c,p){n[e].m(c,p),V(c,o,p),s=!0},p(c,p){let m=e;e=i(c),e===m?n[e].p(c,p):(H(),N(n[m],1,1,()=>{n[m]=null}),F(),t=n[e],t?t.p(c,p):(t=n[e]=u[e](c),t.c()),C(t,1),t.m(o.parentNode,o))},i(c){s||(C(t),s=!0)},o(c){N(t),s=!1},d(c){n[e].d(c),c&&D(o)}}}function Te(r){let e,t=r[6]&&De(r);return{c(){e=Me("div"),t&&t.c(),this.h()},l(o){e=Xe(o,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var s=Ze(e);t&&t.l(s),s.forEach(D),this.h()},h(){pe(e,"id","svelte-announcer"),pe(e,"aria-live","assertive"),pe(e,"aria-atomic","true"),K(e,"position","absolute"),K(e,"left","0"),K(e,"top","0"),K(e,"clip","rect(0 0 0 0)"),K(e,"clip-path","inset(50%)"),K(e,"overflow","hidden"),K(e,"white-space","nowrap"),K(e,"width","1px"),K(e,"height","1px")},m(o,s){V(o,e,s),t&&t.m(e,null)},p(o,s){o[6]?t?t.p(o,s):(t=De(o),t.c(),t.m(e,null)):t&&(t.d(1),t=null)},d(o){o&&D(e),t&&t.d()}}}function De(r){let e;return{c(){e=Qe(r[7])},l(t){e=xe(t,r[7])},m(t,o){V(t,e,o)},p(t,o){o&128&&et(e,t[7])},d(t){t&&D(e)}}}function yt(r){let e,t,o,s,u;const n=[_t,ht],i=[];function c(m,R){return m[0][1]?0:1}e=c(r),t=i[e]=n[e](r);let p=r[5]&&Te(r);return{c(){t.c(),o=He(),p&&p.c(),s=j()},l(m){t.l(m),o=Fe(m),p&&p.l(m),s=j()},m(m,R){i[e].m(m,R),V(m,o,R),p&&p.m(m,R),V(m,s,R),u=!0},p(m,[R]){let U=e;e=c(m),e===U?i[e].p(m,R):(H(),N(i[U],1,1,()=>{i[U]=null}),F(),t=i[e],t?t.p(m,R):(t=i[e]=n[e](m),t.c()),C(t,1),t.m(o.parentNode,o)),m[5]?p?p.p(m,R):(p=Te(m),p.c(),p.m(s.parentNode,s)):p&&(p.d(1),p=null)},i(m){u||(C(t),u=!0)},o(m){N(t),u=!1},d(m){i[e].d(m),m&&D(o),p&&p.d(m),m&&D(s)}}}function vt(r,e,t){let{stores:o}=e,{page:s}=e,{components:u}=e,{data_0:n=null}=e,{data_1:i=null}=e,{data_2:c=null}=e,{errors:p}=e;Ge("__svelte__",o),Ye(o.page.notify);let m=!1,R=!1,U=null;return ge(()=>{const $=o.page.subscribe(()=>{m&&(t(6,R=!0),t(7,U=document.title||"untitled page"))});return t(5,m=!0),$}),r.$$set=$=>{"stores"in $&&t(8,o=$.stores),"page"in $&&t(9,s=$.page),"components"in $&&t(0,u=$.components),"data_0"in $&&t(1,n=$.data_0),"data_1"in $&&t(2,i=$.data_1),"data_2"in $&&t(3,c=$.data_2),"errors"in $&&t(4,p=$.errors)},r.$$.update=()=>{r.$$.dirty&768&&o.page.set(s)},[u,n,i,c,p,m,R,U,o,s]}class kt extends Ke{constructor(e){super(),Je(this,e,vt,yt,We,{stores:8,page:9,components:0,data_0:1,data_1:2,data_2:3,errors:4})}}const $t=function(){const e=document.createElement("link").relList;return e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}(),Et=function(r){return"/jusc-companion-app/"+r},Ve={},he=function(e,t,o){return!t||t.length===0?e():Promise.all(t.map(s=>{if(s=Et(s),s in Ve)return;Ve[s]=!0;const u=s.endsWith(".css"),n=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${s}"]${n}`))return;const i=document.createElement("link");if(i.rel=u?"stylesheet":$t,u||(i.as="script",i.crossOrigin=""),i.href=s,document.head.appendChild(i),u)return new Promise((c,p)=>{i.addEventListener("load",c),i.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>e())},Rt={},se=[()=>he(()=>import("./chunks/0-df2b11e3.js"),["_app/immutable/chunks/0-df2b11e3.js","_app/immutable/components/pages/_layout.svelte-d0f8d05f.js","_app/immutable/assets/+layout-bf1d6277.css","_app/immutable/chunks/index-482df250.js"]),()=>he(()=>import("./chunks/1-cf02462c.js"),["_app/immutable/chunks/1-cf02462c.js","_app/immutable/components/error.svelte-7a36af33.js","_app/immutable/chunks/index-482df250.js"]),()=>he(()=>import("./chunks/2-32cef07c.js"),["_app/immutable/chunks/2-32cef07c.js","_app/immutable/components/pages/_page.svelte-c932808d.js","_app/immutable/assets/+page-c3c0f612.css","_app/immutable/chunks/index-482df250.js","_app/immutable/chunks/paths-f0d88eca.js"])],Lt={"":[[1],[0],2]},qe="sveltekit:scroll",W="sveltekit:index",_e=dt(se,Lt,Rt),St=se[0](),Ut=se[1]();let X={};try{X=JSON.parse(sessionStorage[qe])}catch{}function me(r){X[r]=we()}function At({target:r,session:e,base:t,trailing_slash:o}){var Se;const s=[],u={url:Ie({}),page:Ie({}),navigating:re(null),session:re(e),updated:it()},n={id:null,promise:null},i={before_navigate:[],after_navigate:[]};let c={branch:[],error:null,session_id:0,url:null},p=!1,m=!0,R=!1,U=1,$=null,Q,x,ye=!1;u.session.subscribe(async a=>{x=a,!(!ye||(U+=1,!c.branch.some(g=>g==null?void 0:g.uses.session)))&&ce(new URL(location.href),[])}),ye=!0;let G=!0,T=(Se=history.state)==null?void 0:Se[W];T||(T=Date.now(),history.replaceState({...history.state,[W]:T},"",location.href));const ae=X[T];ae&&(history.scrollRestoration="manual",scrollTo(ae.x,ae.y));let ie=!1,oe,ve;async function ke(a,{noscroll:d=!1,replaceState:g=!1,keepfocus:l=!1,state:f={}},E){if(typeof a=="string"&&(a=new URL(a,je(document))),G)return fe({url:a,scroll:d?we():null,keepfocus:l,redirect_chain:E,details:{state:f,replaceState:g},accepted:()=>{},blocked:()=>{}});await M(a)}async function $e(a){const d=Le(a);if(!d)throw new Error("Attempted to prefetch a URL that does not belong to this app");return n.promise=Re(d),n.id=d.id,n.promise}async function ce(a,d,g,l){var y,A,L;const f=Le(a),E=ve={};let h=f&&await Re(f);if(!h&&a.origin===location.origin&&a.pathname===location.pathname&&(h=await te({status:404,error:new Error(`Not found: ${a.pathname}`),url:a,routeId:null})),!h)return await M(a),!1;if(a=(f==null?void 0:f.url)||a,ve!==E)return!1;if(s.length=0,h.type==="redirect")if(d.length>10||d.includes(a.pathname))h=await te({status:500,error:new Error("Redirect loop"),url:a,routeId:null});else return G?ke(new URL(h.location,a).href,{},[...d,a.pathname]):await M(new URL(h.location,location.href)),!1;else((A=(y=h.props)==null?void 0:y.page)==null?void 0:A.status)>=400&&await u.updated.check()&&await M(a);if(R=!0,g&&g.details){const{details:S}=g,v=S.replaceState?0:1;S.state[W]=T+=v,history[S.replaceState?"replaceState":"pushState"](S.state,"",a)}if(p?(c=h.state,h.props.page&&(h.props.page.url=a),Q.$set(h.props)):Ee(h),g){const{scroll:S,keepfocus:v}=g;if(!v){const b=document.body,_=b.getAttribute("tabindex");b.tabIndex=-1,b.focus({preventScroll:!0}),setTimeout(()=>{var w;(w=getSelection())==null||w.removeAllRanges()}),_!==null?b.setAttribute("tabindex",_):b.removeAttribute("tabindex")}if(await Oe(),m){const b=a.hash&&document.getElementById(a.hash.slice(1));S?scrollTo(S.x,S.y):b?b.scrollIntoView():scrollTo(0,0)}}else await Oe();n.promise=null,n.id=null,m=!0,h.props.page&&(oe=h.props.page);const k=h.state.branch.at(-1);G=((L=k==null?void 0:k.node.shared)==null?void 0:L.router)!==!1,l&&l(),R=!1}function Ee(a){c=a.state;const d=document.querySelector("style[data-sveltekit]");if(d&&d.remove(),oe=a.props.page,Q=new kt({target:r,props:{...a.props,stores:u},hydrate:!0}),G){const g={from:null,to:new URL(location.href)};i.after_navigate.forEach(l=>l(g))}p=!0}async function ee({url:a,params:d,branch:g,status:l,error:f,routeId:E,validation_errors:h}){const k=g.filter(Boolean),y={type:"loaded",state:{url:a,params:d,branch:g,error:f,session_id:U},props:{components:k.map(v=>v.node.component),errors:h}};let A={},L=!1;for(let v=0;v<k.length;v+=1)Object.assign(A,k[v].data),c.branch.some(b=>b===k[v])||(y.props[`data_${v}`]=k[v].data,L=!0);if(!c.url||a.href!==c.url.href||c.error!==f||L){y.props.page={error:f,params:d,routeId:E,status:l,url:a,data:A};const v=(b,_)=>{Object.defineProperty(y.props.page,b,{get:()=>{throw new Error(`$page.${b} has been replaced by $page.url.${_}`)}})};v("origin","origin"),v("path","pathname"),v("query","searchParams")}return y}async function le({node:a,parent:d,url:g,params:l,routeId:f,server_data:E}){var v,b;const h={params:new Set,url:!1,session:!1,dependencies:new Set,parent:!1};function k(..._){for(const w of _){const{href:O}=new URL(w,g);h.dependencies.add(O)}}let y=null;a.server&&(h.dependencies.add(g.href),h.url=!0);const A={};for(const _ in l)Object.defineProperty(A,_,{get(){return h.params.add(_),l[_]},enumerable:!0});const L=x,S=new at(g);if((v=a.shared)!=null&&v.load){const _={routeId:f,params:A,data:E,get url(){return h.url=!0,S},get session(){return h.session=!0,L},async fetch(w,O){let P;typeof w=="string"?P=w:(P=w.url,O={body:w.method==="GET"||w.method==="HEAD"?void 0:await w.blob(),cache:w.cache,credentials:w.credentials,headers:w.headers,integrity:w.integrity,keepalive:w.keepalive,method:w.method,mode:w.mode,redirect:w.redirect,referrer:w.referrer,referrerPolicy:w.referrerPolicy,signal:w.signal,...O});const J=new URL(P,g).href;return k(J),p?be(J,O):ct(P,O)},setHeaders:()=>{},depends:k,get parent(){return h.parent=!0,d},get props(){throw new Error("@migration task: Replace `props` with `data` stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},get stuff(){throw new Error("@migration task: Remove stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")}};y=(b=await a.shared.load.call(null,_))!=null?b:null}return{node:a,data:y||E,uses:h}}async function Re({id:a,url:d,params:g,route:l}){if(n.id===a&&n.promise)return n.promise;const{errors:f,layouts:E,leaf:h}=l,k=c.url&&{url:a!==c.url.pathname+c.url.search,params:Object.keys(g).filter(_=>c.params[_]!==g[_]),session:U!==c.session_id};[...f,...E,h].forEach(_=>_==null?void 0:_().catch(()=>{}));const y=[...E,h],A=[];for(let _=0;_<y.length;_++)if(!y[_])A.push(!1);else{const w=c.branch[_],O=!w||k.url&&w.uses.url||k.params.some(P=>w.uses.params.has(P))||k.session&&w.uses.session||Array.from(w.uses.dependencies).some(P=>s.some(J=>J(P)))||w.uses.parent&&A.includes(!0);A.push(O)}let L=null;if(l.uses_server_data){try{const _=await be(`${d.pathname}${d.pathname.endsWith("/")?"":"/"}__data.json${d.search}`);if(L=await _.json(),!_.ok)throw L}catch{throw new Error("TODO render fallback error page")}if(L.type==="redirect")return L}const S=L==null?void 0:L.nodes,v=y.map(async(_,w)=>Promise.resolve().then(async()=>{var Y;if(!_)return;const O=await _(),P=c.branch[w];if(A[w]||!P||O!==P.node){const I=S==null?void 0:S[w];if(I!=null&&I.status)throw pt(I.status,I.message);if(I!=null&&I.error)throw I.error;return await le({node:O,url:d,params:g,routeId:l.id,parent:async()=>{var Ae;const Ue={};for(let ue=0;ue<w;ue+=1)Object.assign(Ue,(Ae=await v[ue])==null?void 0:Ae.data);return Ue},server_data:(Y=I==null?void 0:I.data)!=null?Y:null})}else return P}));for(const _ of v)_.catch(()=>{});const b=[];for(let _=0;_<y.length;_+=1)if(y[_])try{b.push(await v[_])}catch(w){const O=w;if(O instanceof Pe)return{type:"redirect",location:O.location};const P=w instanceof ne?w.status:500;for(;_--;)if(f[_]){let J,Y=_;for(;!b[Y];)Y-=1;try{return J={node:await f[_](),data:{},uses:{params:new Set,url:!1,session:!1,dependencies:new Set,parent:!1}},await ee({url:d,params:g,branch:b.slice(0,Y+1).concat(J),status:P,error:O,routeId:l.id})}catch{continue}}return await te({status:P,error:O,url:d,routeId:l.id})}else b.push(void 0);return await ee({url:d,params:g,branch:b,status:200,error:null,routeId:l.id})}async function te({status:a,error:d,url:g,routeId:l}){const f={},E=await le({node:await St,url:g,params:f,routeId:l,parent:()=>Promise.resolve({}),server_data:null}),h={node:await Ut,data:null,uses:{params:new Set,url:!1,session:!1,dependencies:new Set,parent:!1}};return await ee({url:g,params:f,branch:[E,h],status:a,error:d,routeId:l})}function Le(a){if(a.origin!==location.origin||!a.pathname.startsWith(t))return;const d=decodeURI(a.pathname.slice(t.length)||"/");for(const g of _e){const l=g.exec(d);if(l){const f=new URL(a.origin+rt(a.pathname,o)+a.search+a.hash);return{id:f.pathname+f.search,route:g,params:st(l),url:f}}}}async function fe({url:a,scroll:d,keepfocus:g,redirect_chain:l,details:f,accepted:E,blocked:h}){const k=c.url;let y=!1;const A={from:k,to:a,cancel:()=>y=!0};if(i.before_navigate.forEach(L=>L(A)),y){h();return}me(T),E(),p&&u.navigating.set({from:c.url,to:a}),await ce(a,l,{scroll:d,keepfocus:g,details:f},()=>{const L={from:k,to:a};i.after_navigate.forEach(S=>S(L)),u.navigating.set(null)})}function M(a){return location.href=a.href,new Promise(()=>{})}return{after_navigate:a=>{ge(()=>(i.after_navigate.push(a),()=>{const d=i.after_navigate.indexOf(a);i.after_navigate.splice(d,1)}))},before_navigate:a=>{ge(()=>(i.before_navigate.push(a),()=>{const d=i.before_navigate.indexOf(a);i.before_navigate.splice(d,1)}))},disable_scroll_handling:()=>{(R||!p)&&(m=!1)},goto:(a,d={})=>ke(a,d,[]),invalidate:a=>{if(a===void 0){for(const d of c.branch)d==null||d.uses.dependencies.add("");s.push(()=>!0)}else if(typeof a=="function")s.push(a);else{const{href:d}=new URL(a,location.href);s.push(g=>g===d)}return $||($=Promise.resolve().then(async()=>{await ce(new URL(location.href),[]),$=null})),$},prefetch:async a=>{const d=new URL(a,je(document));await $e(d)},prefetch_routes:async a=>{const g=(a?_e.filter(l=>a.some(f=>l.exec(f))):_e).map(l=>Promise.all([...l.layouts,l.leaf].map(f=>f==null?void 0:f())));await Promise.all(g)},_start_router:()=>{history.scrollRestoration="manual",addEventListener("beforeunload",l=>{let f=!1;const E={from:c.url,to:null,cancel:()=>f=!0};i.before_navigate.forEach(h=>h(E)),f?(l.preventDefault(),l.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{if(document.visibilityState==="hidden"){me(T);try{sessionStorage[qe]=JSON.stringify(X)}catch{}}});const a=l=>{const f=Ne(l);f&&f.href&&f.hasAttribute("sveltekit:prefetch")&&$e(Ce(f))};let d;const g=l=>{clearTimeout(d),d=setTimeout(()=>{var f;(f=l.target)==null||f.dispatchEvent(new CustomEvent("sveltekit:trigger_prefetch",{bubbles:!0}))},20)};addEventListener("touchstart",a),addEventListener("mousemove",g),addEventListener("sveltekit:trigger_prefetch",a),addEventListener("click",l=>{if(!G||l.button||l.which!==1||l.metaKey||l.ctrlKey||l.shiftKey||l.altKey||l.defaultPrevented)return;const f=Ne(l);if(!f||!f.href)return;const E=f instanceof SVGAElement,h=Ce(f);if(!E&&!(h.protocol==="https:"||h.protocol==="http:"))return;const k=(f.getAttribute("rel")||"").split(/\s+/);if(f.hasAttribute("download")||k.includes("external")||f.hasAttribute("sveltekit:reload")||(E?f.target.baseVal:f.target))return;const[y,A]=h.href.split("#");if(A!==void 0&&y===location.href.split("#")[0]){ie=!0,me(T),u.page.set({...oe,url:h}),u.page.notify();return}fe({url:h,scroll:f.hasAttribute("sveltekit:noscroll")?we():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:h.href===location.href},accepted:()=>l.preventDefault(),blocked:()=>l.preventDefault()})}),addEventListener("popstate",l=>{if(l.state&&G){if(l.state[W]===T)return;fe({url:new URL(location.href),scroll:X[l.state[W]],keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{T=l.state[W]},blocked:()=>{const f=T-l.state[W];history.go(f)}})}}),addEventListener("hashchange",()=>{ie&&(ie=!1,history.replaceState({...history.state,[W]:++T},"",location.href))});for(const l of document.querySelectorAll("link"))l.rel==="icon"&&(l.href=l.href);addEventListener("pageshow",l=>{l.persisted&&u.navigating.set(null)})},_hydrate:async({status:a,error:d,node_ids:g,params:l,routeId:f})=>{const E=new URL(location.href);let h;try{const k=(S,v)=>{const b=document.querySelector(`script[sveltekit\\:data-type="${S}"]`);return b!=null&&b.textContent?JSON.parse(b.textContent):v},y=k("server_data",[]),A=k("validation_errors",void 0),L=g.map(async(S,v)=>{var b;return le({node:await se[S](),url:E,params:l,routeId:f,parent:async()=>{const _={};for(let w=0;w<v;w+=1)Object.assign(_,(await L[w]).data);return _},server_data:(b=y[v])!=null?b:null})});h=await ee({url:E,params:l,branch:await Promise.all(L),status:a,error:d!=null&&d.__is_http_error?new ne(d.status,d.message):d,validation_errors:A,routeId:f})}catch(k){const y=k;if(y instanceof Pe){await M(new URL(k.location,location.href));return}h=await te({status:y instanceof ne?y.status:500,error:y,url:E,routeId:f})}Ee(h)}}}function Ot(r){r.client}function Ct(r){}async function It({paths:r,target:e,session:t,route:o,spa:s,trailing_slash:u,hydrate:n}){const i=At({target:e,session:t,base:r.base,trailing_slash:u});Ot({client:i}),nt(r),n&&await i._hydrate(n),o&&(s&&i.goto(location.href,{replaceState:!0}),i._start_router()),dispatchEvent(new CustomEvent("sveltekit:start"))}export{Ct as set_public_env,It as start};
