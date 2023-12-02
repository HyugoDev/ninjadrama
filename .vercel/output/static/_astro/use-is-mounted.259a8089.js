import{r as s,m as E,e as O}from"./index.364e49f0.js";var I=Object.defineProperty,$=(e,t,n)=>t in e?I(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,g=(e,t,n)=>($(e,typeof t!="symbol"?t+"":t,n),n);let T=class{constructor(){g(this,"current",this.detect()),g(this,"handoffState","pending"),g(this,"currentId",0)}set(t){this.current!==t&&(this.handoffState="pending",this.currentId=0,this.current=t)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return this.current==="server"}get isClient(){return this.current==="client"}detect(){return typeof window>"u"||typeof document>"u"?"server":"client"}handoff(){this.handoffState==="pending"&&(this.handoffState="complete")}get isHandoffComplete(){return this.handoffState==="complete"}},y=new T,v=(e,t)=>{y.isServer?s.useEffect(e,t):s.useLayoutEffect(e,t)};function M(e){let t=s.useRef(e);return v(()=>{t.current=e},[e]),t}function ie(e){typeof queueMicrotask=="function"?queueMicrotask(e):Promise.resolve().then(e).catch(t=>setTimeout(()=>{throw t}))}let D=function(e){let t=M(e);return E.useCallback((...n)=>t.current(...n),[t])};function L(){let e=typeof document>"u";return"useSyncExternalStore"in O?(t=>t.useSyncExternalStore)(O)(()=>()=>{},()=>!1,()=>!e):!1}function k(){let e=L(),[t,n]=s.useState(y.isHandoffComplete);return t&&y.isHandoffComplete===!1&&n(!1),s.useEffect(()=>{t!==!0&&n(!0)},[t]),s.useEffect(()=>y.handoff(),[]),e?!1:t}var F;let ue=(F=E.useId)!=null?F:function(){let e=k(),[t,n]=E.useState(e?()=>y.nextId():null);return v(()=>{t===null&&n(y.nextId())},[t]),t!=null?""+t:void 0};function S(e,t,...n){if(e in t){let o=t[e];return typeof o=="function"?o(...n):o}let r=new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map(o=>`"${o}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,S),r}function H(e){return y.isServer?null:e instanceof Node?e.ownerDocument:e!=null&&e.hasOwnProperty("current")&&e.current instanceof Node?e.current.ownerDocument:document}let N=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(",");var R=(e=>(e[e.First=1]="First",e[e.Previous=2]="Previous",e[e.Next=4]="Next",e[e.Last=8]="Last",e[e.WrapAround=16]="WrapAround",e[e.NoScroll=32]="NoScroll",e))(R||{}),U=(e=>(e[e.Error=0]="Error",e[e.Overflow=1]="Overflow",e[e.Success=2]="Success",e[e.Underflow=3]="Underflow",e))(U||{}),C=(e=>(e[e.Previous=-1]="Previous",e[e.Next=1]="Next",e))(C||{});function _(e=document.body){return e==null?[]:Array.from(e.querySelectorAll(N)).sort((t,n)=>Math.sign((t.tabIndex||Number.MAX_SAFE_INTEGER)-(n.tabIndex||Number.MAX_SAFE_INTEGER)))}var K=(e=>(e[e.Strict=0]="Strict",e[e.Loose=1]="Loose",e))(K||{});function se(e,t=0){var n;return e===((n=H(e))==null?void 0:n.body)?!1:S(t,{0(){return e.matches(N)},1(){let r=e;for(;r!==null;){if(r.matches(N))return!0;r=r.parentElement}return!1}})}var W=(e=>(e[e.Keyboard=0]="Keyboard",e[e.Mouse=1]="Mouse",e))(W||{});typeof window<"u"&&typeof document<"u"&&(document.addEventListener("keydown",e=>{e.metaKey||e.altKey||e.ctrlKey||(document.documentElement.dataset.headlessuiFocusVisible="")},!0),document.addEventListener("click",e=>{e.detail===1?delete document.documentElement.dataset.headlessuiFocusVisible:e.detail===0&&(document.documentElement.dataset.headlessuiFocusVisible="")},!0));let B=["textarea","input"].join(",");function G(e){var t,n;return(n=(t=e?.matches)==null?void 0:t.call(e,B))!=null?n:!1}function V(e,t=n=>n){return e.slice().sort((n,r)=>{let o=t(n),c=t(r);if(o===null||c===null)return 0;let i=o.compareDocumentPosition(c);return i&Node.DOCUMENT_POSITION_FOLLOWING?-1:i&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function ae(e,t,{sorted:n=!0,relativeTo:r=null,skipElements:o=[]}={}){let c=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e.ownerDocument,i=Array.isArray(e)?n?V(e):e:_(e);o.length>0&&i.length>1&&(i=i.filter(m=>!o.includes(m))),r=r??c.activeElement;let u=(()=>{if(t&5)return 1;if(t&10)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),p=(()=>{if(t&1)return 0;if(t&2)return Math.max(0,i.indexOf(r))-1;if(t&4)return Math.max(0,i.indexOf(r))+1;if(t&8)return i.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),l=t&32?{preventScroll:!0}:{},f=0,a=i.length,d;do{if(f>=a||f+a<=0)return 0;let m=p+f;if(t&16)m=(m+a)%a;else{if(m<0)return 3;if(m>=a)return 1}d=i[m],d?.focus(l),f+=u}while(d!==c.activeElement);return t&6&&G(d)&&d.select(),2}function x(e){var t;if(e.type)return e.type;let n=(t=e.as)!=null?t:"button";if(typeof n=="string"&&n.toLowerCase()==="button")return"button"}function le(e,t){let[n,r]=s.useState(()=>x(e));return v(()=>{r(x(e))},[e.type,e.as]),v(()=>{n||t.current&&t.current instanceof HTMLButtonElement&&!t.current.hasAttribute("type")&&r("button")},[n,t]),n}let q=Symbol();function ce(...e){let t=s.useRef(e);s.useEffect(()=>{t.current=e},[e]);let n=D(r=>{for(let o of t.current)o!=null&&(typeof o=="function"?o(r):o.current=r)});return e.every(r=>r==null||r?.[q])?void 0:n}function A(...e){return Array.from(new Set(e.flatMap(t=>typeof t=="string"?t.split(" "):[]))).filter(Boolean).join(" ")}var X=(e=>(e[e.None=0]="None",e[e.RenderStrategy=1]="RenderStrategy",e[e.Static=2]="Static",e))(X||{}),Y=(e=>(e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden",e))(Y||{});function z({ourProps:e,theirProps:t,slot:n,defaultTag:r,features:o,visible:c=!0,name:i}){let u=P(t,e);if(c)return b(u,n,r,i);let p=o??0;if(p&2){let{static:l=!1,...f}=u;if(l)return b(f,n,r,i)}if(p&1){let{unmount:l=!0,...f}=u;return S(l?0:1,{0(){return null},1(){return b({...f,hidden:!0,style:{display:"none"}},n,r,i)}})}return b(u,n,r,i)}function b(e,t={},n,r){let{as:o=n,children:c,refName:i="ref",...u}=w(e,["unmount","static"]),p=e.ref!==void 0?{[i]:e.ref}:{},l=typeof c=="function"?c(t):c;"className"in u&&u.className&&typeof u.className=="function"&&(u.className=u.className(t));let f={};if(t){let a=!1,d=[];for(let[m,h]of Object.entries(t))typeof h=="boolean"&&(a=!0),h===!0&&d.push(m);a&&(f["data-headlessui-state"]=d.join(" "))}if(o===s.Fragment&&Object.keys(j(u)).length>0){if(!s.isValidElement(l)||Array.isArray(l)&&l.length>1)throw new Error(['Passing props on "Fragment"!',"",`The current component <${r} /> is rendering a "Fragment".`,"However we need to passthrough the following props:",Object.keys(u).map(h=>`  - ${h}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map(h=>`  - ${h}`).join(`
`)].join(`
`));let a=l.props,d=typeof a?.className=="function"?(...h)=>A(a?.className(...h),u.className):A(a?.className,u.className),m=d?{className:d}:{};return s.cloneElement(l,Object.assign({},P(l.props,j(w(u,["ref"]))),f,p,J(l.ref,p.ref),m))}return s.createElement(o,Object.assign({},w(u,["ref"]),o!==s.Fragment&&p,o!==s.Fragment&&f),l)}function J(...e){return{ref:e.every(t=>t==null)?void 0:t=>{for(let n of e)n!=null&&(typeof n=="function"?n(t):n.current=t)}}}function P(...e){if(e.length===0)return{};if(e.length===1)return e[0];let t={},n={};for(let r of e)for(let o in r)o.startsWith("on")&&typeof r[o]=="function"?(n[o]!=null||(n[o]=[]),n[o].push(r[o])):t[o]=r[o];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(n).map(r=>[r,void 0])));for(let r in n)Object.assign(t,{[r](o,...c){let i=n[r];for(let u of i){if((o instanceof Event||o?.nativeEvent instanceof Event)&&o.defaultPrevented)return;u(o,...c)}}});return t}function Q(e){var t;return Object.assign(s.forwardRef(e),{displayName:(t=e.displayName)!=null?t:e.name})}function j(e){let t=Object.assign({},e);for(let n in t)t[n]===void 0&&delete t[n];return t}function w(e,t=[]){let n=Object.assign({},e);for(let r of t)r in n&&delete n[r];return n}let Z="div";var ee=(e=>(e[e.None=1]="None",e[e.Focusable=2]="Focusable",e[e.Hidden=4]="Hidden",e))(ee||{});function te(e,t){let{features:n=1,...r}=e,o={ref:t,"aria-hidden":(n&2)===2?!0:void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(n&4)===4&&(n&2)!==2&&{display:"none"}}};return z({ourProps:o,theirProps:r,slot:{},defaultTag:Z,name:"Hidden"})}let fe=Q(te);var ne=(e=>(e.Space=" ",e.Enter="Enter",e.Escape="Escape",e.Backspace="Backspace",e.Delete="Delete",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowRight="ArrowRight",e.ArrowDown="ArrowDown",e.Home="Home",e.End="End",e.PageUp="PageUp",e.PageDown="PageDown",e.Tab="Tab",e))(ne||{});function de(){let e=s.useRef(!1);return v(()=>(e.current=!0,()=>{e.current=!1}),[]),e}export{Q as D,ue as I,R as M,U as N,ae as O,j as R,X as S,K as T,z as X,le as a,V as b,fe as c,ne as d,H as e,de as f,k as g,se as h,A as i,Y as j,v as l,D as o,ee as p,M as s,ie as t,S as u,ce as y};
