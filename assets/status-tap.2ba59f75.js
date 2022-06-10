import{ar as a,as as i,at as c}from"./index.03df7e20.js";/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */const l=()=>{const e=window;e.addEventListener("statusTap",()=>{a(()=>{const o=e.innerWidth,s=e.innerHeight,n=document.elementFromPoint(o/2,s/2);if(!n)return;const t=n.closest("ion-content");t&&new Promise(r=>i(t,r)).then(()=>{c(async()=>{t.style.setProperty("--overflow","hidden"),await t.scrollToTop(300),t.style.removeProperty("--overflow")})})})})};export{l as startStatusTap};
