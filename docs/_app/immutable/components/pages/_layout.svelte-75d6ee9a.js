import{S as T,i as V,s as z,C as F,l as g,m as v,p as k,h as m,q as _,b as d,D as G,E as j,F as B,f as h,t as $,x as E,a as S,y as D,c as q,G as b,z as A,A as C,u as H,v as J}from"../../chunks/index-c7d84774.js";import{b as I}from"../../chunks/paths-6cd3a76e.js";function K(f){let e,t,n;const o=f[3].default,s=F(o,f,f[2],null);return{c(){e=g("a"),s&&s.c(),this.h()},l(a){e=v(a,"A",{href:!0,target:!0,class:!0});var l=k(e);s&&s.l(l),l.forEach(m),this.h()},h(){_(e,"href",f[0]),_(e,"target",t=f[1]?"_blank":"_self"),_(e,"class","text-blue-600 hover:text-white hover:bg-blue-600")},m(a,l){d(a,e,l),s&&s.m(e,null),n=!0},p(a,[l]){s&&s.p&&(!n||l&4)&&G(s,o,a,a[2],n?B(o,a[2],l,null):j(a[2]),null),(!n||l&1)&&_(e,"href",a[0]),(!n||l&2&&t!==(t=a[1]?"_blank":"_self"))&&_(e,"target",t)},i(a){n||(h(s,a),n=!0)},o(a){$(s,a),n=!1},d(a){a&&m(e),s&&s.d(a)}}}function M(f,e,t){let{$$slots:n={},$$scope:o}=e,{href:s}=e,{blank:a=!1}=e;return f.$$set=l=>{"href"in l&&t(0,s=l.href),"blank"in l&&t(1,a=l.blank),"$$scope"in l&&t(2,o=l.$$scope)},[s,a,o,n]}class L extends T{constructor(e){super(),V(this,e,M,K,z,{href:0,blank:1})}}function N(f){let e;return{c(){e=H("Timer")},l(t){e=J(t,"Timer")},m(t,n){d(t,e,n)},d(t){t&&m(e)}}}function O(f){let e;return{c(){e=H("Sounds")},l(t){e=J(t,"Sounds")},m(t,n){d(t,e,n)},d(t){t&&m(e)}}}function P(f){let e,t,n,o,s,a,l;n=new L({props:{href:I+"/timer",$$slots:{default:[N]},$$scope:{ctx:f}}}),s=new L({props:{href:I+"/sounds",$$slots:{default:[O]},$$scope:{ctx:f}}});const p=f[0].default,i=F(p,f,f[1],null);return{c(){e=g("div"),t=g("div"),E(n.$$.fragment),o=S(),E(s.$$.fragment),a=S(),i&&i.c(),this.h()},l(r){e=v(r,"DIV",{class:!0});var u=k(e);t=v(u,"DIV",{class:!0});var c=k(t);D(n.$$.fragment,c),o=q(c),D(s.$$.fragment,c),c.forEach(m),a=q(u),i&&i.l(u),u.forEach(m),this.h()},h(){_(t,"class","border-b-2 border-b-black p-4"),_(e,"class","w-screen h-screen flex flex-col items-stretch flex-nowrap overflow-hidden")},m(r,u){d(r,e,u),b(e,t),A(n,t,null),b(t,o),A(s,t,null),b(e,a),i&&i.m(e,null),l=!0},p(r,[u]){const c={};u&2&&(c.$$scope={dirty:u,ctx:r}),n.$set(c);const w={};u&2&&(w.$$scope={dirty:u,ctx:r}),s.$set(w),i&&i.p&&(!l||u&2)&&G(i,p,r,r[1],l?B(p,r[1],u,null):j(r[1]),null)},i(r){l||(h(n.$$.fragment,r),h(s.$$.fragment,r),h(i,r),l=!0)},o(r){$(n.$$.fragment,r),$(s.$$.fragment,r),$(i,r),l=!1},d(r){r&&m(e),C(n),C(s),i&&i.d(r)}}}function Q(f,e,t){let{$$slots:n={},$$scope:o}=e;return f.$$set=s=>{"$$scope"in s&&t(1,o=s.$$scope)},[n,o]}class W extends T{constructor(e){super(),V(this,e,Q,P,z,{})}}export{W as default};
