import{az as a,aA as i,aB as c}from"./vendor.b36a9285.js";/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */const l=()=>{const e=window;e.addEventListener("statusTap",()=>{a(()=>{const o=e.innerWidth,s=e.innerHeight,n=document.elementFromPoint(o/2,s/2);if(!n)return;const t=n.closest("ion-content");t&&new Promise(r=>i(t,r)).then(()=>{c(async()=>{t.style.setProperty("--overflow","hidden"),await t.scrollToTop(300),t.style.removeProperty("--overflow")})})})})};export{l as startStatusTap};
