import{ax as E,ay as k}from"./vendor.b36a9285.js";/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */const V=n=>{let i=-m*10,a=0,o,s,p,d;const I=n.getBoolean("animated",!0)&&n.getBoolean("rippleEffect",!0),u=new WeakMap,b=()=>(o==null?void 0:o.parentElement)!==null,x=t=>{i=E(t),h(t)},L=t=>{i=E(t),v(t)},y=t=>{const e=E(t)-m;i<e&&h(t)},M=t=>{const e=E(t)-m;i<e&&v(t)},_=t=>{v(t)},T=()=>{clearTimeout(d),d=void 0,s&&(R(!1),s=void 0)},h=t=>{s||b()||(o=void 0,A(q(t),t))},v=t=>{A(void 0,t)},A=(t,e)=>{if(t&&t===s)return;clearTimeout(d),d=void 0;const{x:l,y:r}=k(e);if(s){if(u.has(s))throw new Error("internal error");s.classList.contains(f)||D(s,l,r),R(!0)}if(t){const S=u.get(t);S&&(clearTimeout(S),u.delete(t));const U=g(t)?0:F;t.classList.remove(f),d=setTimeout(()=>{D(t,l,r),d=void 0},U)}s=t},D=(t,e,l)=>{a=Date.now(),t.classList.add(f);const r=I&&B(t);r&&r.addRipple&&(w(),p=r.addRipple(e,l))},w=()=>{p!==void 0&&(p.then(t=>t()),p=void 0)},R=t=>{w();const e=s;if(!e)return;const l=C-Date.now()+a;if(t&&l>0&&!g(e)){const r=setTimeout(()=>{e.classList.remove(f),u.delete(e)},C);u.set(e,r)}else e.classList.remove(f)},c=document;c.addEventListener("ionScrollStart",t=>{o=t.target,T()}),c.addEventListener("ionScrollEnd",()=>{o=void 0}),c.addEventListener("ionGestureCaptured",T),c.addEventListener("touchstart",x,!0),c.addEventListener("touchcancel",L,!0),c.addEventListener("touchend",L,!0),c.addEventListener("mousedown",y,!0),c.addEventListener("mouseup",M,!0),c.addEventListener("contextmenu",_,!0)},q=n=>{if(n.composedPath){const i=n.composedPath();for(let a=0;a<i.length-2;a++){const o=i[a];if(o==null?void 0:o.classList.contains("ion-activatable"))return o}}else return n.target.closest(".ion-activatable")},g=n=>n.classList.contains("ion-activatable-instant"),B=n=>{if(n.shadowRoot){const i=n.shadowRoot.querySelector("ion-ripple-effect");if(i)return i}return n.querySelector("ion-ripple-effect")},f="ion-activated",F=200,C=200,m=2500;export{V as startTapClick};
