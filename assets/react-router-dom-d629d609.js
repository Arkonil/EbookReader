import{R as M,r as u}from"./react-5284b0bf.js";/**
 * @remix-run/router v1.3.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function U(){return U=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},U.apply(this,arguments)}var R;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(R||(R={}));const _="popstate";function ie(e){e===void 0&&(e={});function t(a,o){let{pathname:l="/",search:i="",hash:s=""}=b(a.location.hash.substr(1));return N("",{pathname:l,search:i,hash:s},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(a,o){let l=a.document.querySelector("base"),i="";if(l&&l.getAttribute("href")){let s=a.location.href,c=s.indexOf("#");i=c===-1?s:s.slice(0,c)}return i+"#"+(typeof o=="string"?o:I(o))}function r(a,o){se(a.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(o)+")")}return ce(t,n,r,e)}function m(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function se(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function ue(){return Math.random().toString(36).substr(2,8)}function K(e,t){return{usr:e.state,key:e.key,idx:t}}function N(e,t,n,r){return n===void 0&&(n=null),U({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?b(t):t,{state:n,key:t&&t.key||r||ue()})}function I(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function b(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function ce(e,t,n,r){r===void 0&&(r={});let{window:a=document.defaultView,v5Compat:o=!1}=r,l=a.history,i=R.Pop,s=null,c=h();c==null&&(c=0,l.replaceState(U({},l.state,{idx:c}),""));function h(){return(l.state||{idx:null}).idx}function f(){i=R.Pop;let p=h(),y=p==null?null:p-c;c=p,s&&s({action:i,location:d.location,delta:y})}function v(p,y){i=R.Push;let g=N(d.location,p,y);n&&n(g,p),c=h()+1;let E=K(g,c),w=d.createHref(g);try{l.pushState(E,"",w)}catch{a.location.assign(w)}o&&s&&s({action:i,location:d.location,delta:1})}function C(p,y){i=R.Replace;let g=N(d.location,p,y);n&&n(g,p),c=h();let E=K(g,c),w=d.createHref(g);l.replaceState(E,"",w),o&&s&&s({action:i,location:d.location,delta:0})}function x(p){let y=a.location.origin!=="null"?a.location.origin:a.location.href,g=typeof p=="string"?p:I(p);return m(y,"No window.location.(origin|href) available to create URL for href: "+g),new URL(g,y)}let d={get action(){return i},get location(){return e(a,l)},listen(p){if(s)throw new Error("A history only accepts one active listener");return a.addEventListener(_,f),s=p,()=>{a.removeEventListener(_,f),s=null}},createHref(p){return t(a,p)},createURL:x,encodeLocation(p){let y=x(p);return{pathname:y.pathname,search:y.search,hash:y.hash}},push:v,replace:C,go(p){return l.go(p)}};return d}var z;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(z||(z={}));function he(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?b(t):t,a=F(r.pathname||"/",n);if(a==null)return null;let o=Y(e);fe(o);let l=null;for(let i=0;l==null&&i<o.length;++i)l=Ee(o[i],Pe(a));return l}function Y(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let a=(o,l,i)=>{let s={relativePath:i===void 0?o.path||"":i,caseSensitive:o.caseSensitive===!0,childrenIndex:l,route:o};s.relativePath.startsWith("/")&&(m(s.relativePath.startsWith(r),'Absolute route path "'+s.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),s.relativePath=s.relativePath.slice(r.length));let c=S([r,s.relativePath]),h=n.concat(s);o.children&&o.children.length>0&&(m(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),Y(o.children,t,h,c)),!(o.path==null&&!o.index)&&t.push({path:c,score:xe(c,o.index),routesMeta:h})};return e.forEach((o,l)=>{var i;if(o.path===""||!((i=o.path)!=null&&i.includes("?")))a(o,l);else for(let s of Z(o.path))a(o,l,s)}),t}function Z(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,a=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return a?[o,""]:[o];let l=Z(r.join("/")),i=[];return i.push(...l.map(s=>s===""?o:[o,s].join("/"))),a&&i.push(...l),i.map(s=>e.startsWith("/")&&s===""?"/":s)}function fe(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Ce(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const de=/^:\w+$/,pe=3,me=2,ge=1,ve=10,ye=-2,q=e=>e==="*";function xe(e,t){let n=e.split("/"),r=n.length;return n.some(q)&&(r+=ye),t&&(r+=me),n.filter(a=>!q(a)).reduce((a,o)=>a+(de.test(o)?pe:o===""?ge:ve),r)}function Ce(e,t){return e.length===t.length&&e.slice(0,-1).every((r,a)=>r===t[a])?e[e.length-1]-t[t.length-1]:0}function Ee(e,t){let{routesMeta:n}=e,r={},a="/",o=[];for(let l=0;l<n.length;++l){let i=n[l],s=l===n.length-1,c=a==="/"?t:t.slice(a.length)||"/",h=Re({path:i.relativePath,caseSensitive:i.caseSensitive,end:s},c);if(!h)return null;Object.assign(r,h.params);let f=i.route;o.push({params:r,pathname:S([a,h.pathname]),pathnameBase:Ue(S([a,h.pathnameBase])),route:f}),h.pathnameBase!=="/"&&(a=S([a,h.pathnameBase]))}return o}function Re(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Se(e.path,e.caseSensitive,e.end),a=t.match(n);if(!a)return null;let o=a[0],l=o.replace(/(.)\/+$/,"$1"),i=a.slice(1);return{params:r.reduce((c,h,f)=>{if(h==="*"){let v=i[f]||"";l=o.slice(0,o.length-v.length).replace(/(.)\/+$/,"$1")}return c[h]=we(i[f]||"",h),c},{}),pathname:o,pathnameBase:l,pattern:e}}function Se(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),V(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],a="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(l,i)=>(r.push(i),"/([^\\/]+)"));return e.endsWith("*")?(r.push("*"),a+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?a+="\\/*$":e!==""&&e!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,t?void 0:"i"),r]}function Pe(e){try{return decodeURI(e)}catch(t){return V(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function we(e,t){try{return decodeURIComponent(e)}catch(n){return V(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function F(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function V(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function be(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:a=""}=typeof e=="string"?b(e):e;return{pathname:n?n.startsWith("/")?n:Oe(n,t):t,search:Le(r),hash:Ie(a)}}function Oe(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(a=>{a===".."?n.length>1&&n.pop():a!=="."&&n.push(a)}),n.length>1?n.join("/"):"/"}function k(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function ee(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function te(e,t,n,r){r===void 0&&(r=!1);let a;typeof e=="string"?a=b(e):(a=U({},e),m(!a.pathname||!a.pathname.includes("?"),k("?","pathname","search",a)),m(!a.pathname||!a.pathname.includes("#"),k("#","pathname","hash",a)),m(!a.search||!a.search.includes("#"),k("#","search","hash",a)));let o=e===""||a.pathname==="",l=o?"/":a.pathname,i;if(r||l==null)i=n;else{let f=t.length-1;if(l.startsWith("..")){let v=l.split("/");for(;v[0]==="..";)v.shift(),f-=1;a.pathname=v.join("/")}i=f>=0?t[f]:"/"}let s=be(a,i),c=l&&l!=="/"&&l.endsWith("/"),h=(o||l===".")&&n.endsWith("/");return!s.pathname.endsWith("/")&&(c||h)&&(s.pathname+="/"),s}const S=e=>e.join("/").replace(/\/\/+/g,"/"),Ue=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Le=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Ie=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function $e(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const ne=["post","put","patch","delete"];new Set(ne);const je=["get",...ne];new Set(je);/**
 * React Router v6.8.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function D(){return D=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},D.apply(this,arguments)}function Be(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}const ke=typeof Object.is=="function"?Object.is:Be,{useState:We,useEffect:Me,useLayoutEffect:Ne,useDebugValue:De}=M;function Te(e,t,n){const r=t(),[{inst:a},o]=We({inst:{value:r,getSnapshot:t}});return Ne(()=>{a.value=r,a.getSnapshot=t,W(a)&&o({inst:a})},[e,r,t]),Me(()=>(W(a)&&o({inst:a}),e(()=>{W(a)&&o({inst:a})})),[e]),De(r),r}function W(e){const t=e.getSnapshot,n=e.value;try{const r=t();return!ke(n,r)}catch{return!0}}function He(e,t,n){return t()}const Fe=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Ve=!Fe,Je=Ve?He:Te;"useSyncExternalStore"in M&&(e=>e.useSyncExternalStore)(M);const re=u.createContext(null),J=u.createContext(null),L=u.createContext(null),j=u.createContext(null),P=u.createContext({outlet:null,matches:[]}),ae=u.createContext(null);function _e(e,t){let{relative:n}=t===void 0?{}:t;O()||m(!1);let{basename:r,navigator:a}=u.useContext(L),{hash:o,pathname:l,search:i}=le(e,{relative:n}),s=l;return r!=="/"&&(s=l==="/"?r:S([r,l])),a.createHref({pathname:s,search:i,hash:o})}function O(){return u.useContext(j)!=null}function B(){return O()||m(!1),u.useContext(j).location}function oe(){O()||m(!1);let{basename:e,navigator:t}=u.useContext(L),{matches:n}=u.useContext(P),{pathname:r}=B(),a=JSON.stringify(ee(n).map(i=>i.pathnameBase)),o=u.useRef(!1);return u.useEffect(()=>{o.current=!0}),u.useCallback(function(i,s){if(s===void 0&&(s={}),!o.current)return;if(typeof i=="number"){t.go(i);return}let c=te(i,JSON.parse(a),r,s.relative==="path");e!=="/"&&(c.pathname=c.pathname==="/"?e:S([e,c.pathname])),(s.replace?t.replace:t.push)(c,s.state,s)},[e,t,a,r])}const Ke=u.createContext(null);function ze(e){let t=u.useContext(P).outlet;return t&&u.createElement(Ke.Provider,{value:e},t)}function dt(){let{matches:e}=u.useContext(P),t=e[e.length-1];return t?t.params:{}}function le(e,t){let{relative:n}=t===void 0?{}:t,{matches:r}=u.useContext(P),{pathname:a}=B(),o=JSON.stringify(ee(r).map(l=>l.pathnameBase));return u.useMemo(()=>te(e,JSON.parse(o),a,n==="path"),[e,o,a,n])}function qe(e,t){O()||m(!1);let{navigator:n}=u.useContext(L),r=u.useContext(J),{matches:a}=u.useContext(P),o=a[a.length-1],l=o?o.params:{};o&&o.pathname;let i=o?o.pathnameBase:"/";o&&o.route;let s=B(),c;if(t){var h;let d=typeof t=="string"?b(t):t;i==="/"||(h=d.pathname)!=null&&h.startsWith(i)||m(!1),c=d}else c=s;let f=c.pathname||"/",v=i==="/"?f:f.slice(i.length)||"/",C=he(e,{pathname:v}),x=Qe(C&&C.map(d=>Object.assign({},d,{params:Object.assign({},l,d.params),pathname:S([i,n.encodeLocation?n.encodeLocation(d.pathname).pathname:d.pathname]),pathnameBase:d.pathnameBase==="/"?i:S([i,n.encodeLocation?n.encodeLocation(d.pathnameBase).pathname:d.pathnameBase])})),a,r||void 0);return t&&x?u.createElement(j.Provider,{value:{location:D({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:R.Pop}},x):x}function Ge(){let e=tt(),t=$e(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,a={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},o=null;return u.createElement(u.Fragment,null,u.createElement("h2",null,"Unexpected Application Error!"),u.createElement("h3",{style:{fontStyle:"italic"}},t),n?u.createElement("pre",{style:a},n):null,o)}class Ae extends u.Component{constructor(t){super(t),this.state={location:t.location,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location?{error:t.error,location:t.location}:{error:t.error||n.error,location:n.location}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?u.createElement(P.Provider,{value:this.props.routeContext},u.createElement(ae.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Xe(e){let{routeContext:t,match:n,children:r}=e,a=u.useContext(re);return a&&a.static&&a.staticContext&&n.route.errorElement&&(a.staticContext._deepestRenderedBoundaryId=n.route.id),u.createElement(P.Provider,{value:t},r)}function Qe(e,t,n){if(t===void 0&&(t=[]),e==null)if(n!=null&&n.errors)e=n.matches;else return null;let r=e,a=n==null?void 0:n.errors;if(a!=null){let o=r.findIndex(l=>l.route.id&&(a==null?void 0:a[l.route.id]));o>=0||m(!1),r=r.slice(0,Math.min(r.length,o+1))}return r.reduceRight((o,l,i)=>{let s=l.route.id?a==null?void 0:a[l.route.id]:null,c=n?l.route.errorElement||u.createElement(Ge,null):null,h=t.concat(r.slice(0,i+1)),f=()=>u.createElement(Xe,{match:l,routeContext:{outlet:o,matches:h}},s?c:l.route.element!==void 0?l.route.element:o);return n&&(l.route.errorElement||i===0)?u.createElement(Ae,{location:n.location,component:c,error:s,children:f(),routeContext:{outlet:null,matches:h}}):f()},null)}var G;(function(e){e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator"})(G||(G={}));var $;(function(e){e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator"})($||($={}));function Ye(e){let t=u.useContext(J);return t||m(!1),t}function Ze(e){let t=u.useContext(P);return t||m(!1),t}function et(e){let t=Ze(),n=t.matches[t.matches.length-1];return n.route.id||m(!1),n.route.id}function tt(){var e;let t=u.useContext(ae),n=Ye($.UseRouteError),r=et($.UseRouteError);return t||((e=n.errors)==null?void 0:e[r])}function pt(e){let{to:t,replace:n,state:r,relative:a}=e;O()||m(!1);let o=u.useContext(J),l=oe();return u.useEffect(()=>{o&&o.navigation.state!=="idle"||l(t,{replace:n,state:r,relative:a})}),null}function mt(e){return ze(e.context)}function nt(e){m(!1)}function rt(e){let{basename:t="/",children:n=null,location:r,navigationType:a=R.Pop,navigator:o,static:l=!1}=e;O()&&m(!1);let i=t.replace(/^\/*/,"/"),s=u.useMemo(()=>({basename:i,navigator:o,static:l}),[i,o,l]);typeof r=="string"&&(r=b(r));let{pathname:c="/",search:h="",hash:f="",state:v=null,key:C="default"}=r,x=u.useMemo(()=>{let d=F(c,i);return d==null?null:{pathname:d,search:h,hash:f,state:v,key:C}},[i,c,h,f,v,C]);return x==null?null:u.createElement(L.Provider,{value:s},u.createElement(j.Provider,{children:n,value:{location:x,navigationType:a}}))}function gt(e){let{children:t,location:n}=e,r=u.useContext(re),a=r&&!t?r.router.routes:T(t);return qe(a,n)}var A;(function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"})(A||(A={}));new Promise(()=>{});function T(e,t){t===void 0&&(t=[]);let n=[];return u.Children.forEach(e,(r,a)=>{if(!u.isValidElement(r))return;if(r.type===u.Fragment){n.push.apply(n,T(r.props.children,t));return}r.type!==nt&&m(!1),!r.props.index||!r.props.children||m(!1);let o=[...t,a],l={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,hasErrorBoundary:r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle};r.props.children&&(l.children=T(r.props.children,o)),n.push(l)}),n}/**
 * React Router DOM v6.8.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function H(){return H=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},H.apply(this,arguments)}function at(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,o;for(o=0;o<r.length;o++)a=r[o],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function ot(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function lt(e,t){return e.button===0&&(!t||t==="_self")&&!ot(e)}const it=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"];function vt(e){let{basename:t,children:n,window:r}=e,a=u.useRef();a.current==null&&(a.current=ie({window:r,v5Compat:!0}));let o=a.current,[l,i]=u.useState({action:o.action,location:o.location});return u.useLayoutEffect(()=>o.listen(i),[o]),u.createElement(rt,{basename:t,children:n,location:l.location,navigationType:l.action,navigator:o})}const st=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",ut=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,yt=u.forwardRef(function(t,n){let{onClick:r,relative:a,reloadDocument:o,replace:l,state:i,target:s,to:c,preventScrollReset:h}=t,f=at(t,it),{basename:v}=u.useContext(L),C,x=!1;if(typeof c=="string"&&ut.test(c)&&(C=c,st)){let g=new URL(window.location.href),E=c.startsWith("//")?new URL(g.protocol+c):new URL(c),w=F(E.pathname,v);E.origin===g.origin&&w!=null?c=w+E.search+E.hash:x=!0}let d=_e(c,{relative:a}),p=ct(c,{replace:l,state:i,target:s,preventScrollReset:h,relative:a});function y(g){r&&r(g),g.defaultPrevented||p(g)}return u.createElement("a",H({},f,{href:C||d,onClick:x||o?r:y,ref:n,target:s}))});var X;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmitImpl="useSubmitImpl",e.UseFetcher="useFetcher"})(X||(X={}));var Q;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Q||(Q={}));function ct(e,t){let{target:n,replace:r,state:a,preventScrollReset:o,relative:l}=t===void 0?{}:t,i=oe(),s=B(),c=le(e,{relative:l});return u.useCallback(h=>{if(lt(h,n)){h.preventDefault();let f=r!==void 0?r:I(s)===I(c);i(e,{replace:f,state:a,preventScrollReset:o,relative:l})}},[s,i,c,r,a,n,e,o,l])}export{vt as H,yt as L,pt as N,mt as O,gt as R,nt as a,oe as b,dt as c,B as u};
