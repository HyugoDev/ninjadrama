import{j as n}from"./jsx-runtime.e2a65d70.js";import{r as e}from"./index.364e49f0.js";function o({title:a,titleId:t,...s},r){return e.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:r,"aria-labelledby":t},s),a?e.createElement("title",{id:t},a):null,e.createElement("path",{fillRule:"evenodd",d:"M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z",clipRule:"evenodd"}))}const c=e.forwardRef(o),i=c,m=()=>{const[a,t]=e.useState(""),s=l=>{t(l.target.value)},r=l=>{l.preventDefault(),window.location.assign(`/anime/directorio/buscar/${a}`)};return n.jsxs("form",{onSubmit:r,className:"flex flex-row mr-3",children:[n.jsx("input",{type:"search",placeholder:"  Buscar",onChange:s,className:"rounded-md placeholder-slate-950 text-slate-950 text-center"}),n.jsx("button",{onClick:r,children:n.jsx(i,{className:"w-7"})})]})};export{m as default};