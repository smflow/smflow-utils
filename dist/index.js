"use strict";var o=Object.defineProperty;var l=Object.getOwnPropertyDescriptor;var u=Object.getOwnPropertyNames;var f=Object.prototype.hasOwnProperty;var p=(e,n)=>{for(var t in n)o(e,t,{get:n[t],enumerable:!0})},a=(e,n,t,i)=>{if(n&&typeof n=="object"||typeof n=="function")for(let r of u(n))!f.call(e,r)&&r!==t&&o(e,r,{get:()=>n[r],enumerable:!(i=l(n,r))||i.enumerable});return e};var x=e=>a(o({},"__esModule",{value:!0}),e);var E={};p(E,{join:()=>y,ternary:()=>g});module.exports=x(E);var y=function(...e){return e.join(typeof this=="string"?this:" ")};var g=(e,n,t)=>e?n:t;0&&(module.exports={join,ternary});
