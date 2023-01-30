import{d as p,r as v,o as _,x as D,C as S,D as A,a as h,u as r,E,G as j,H,J as T,F as N,c as y,w as m,K as i,L as V,M as q,N as F,O,z as U,P as B,Q as L,R as G,h as P,S as R,T as z,A as J}from"./index.d085fc6e.js";import{_ as K}from"./plugin-vue_export-helper.21dcd24c.js";var Q="/assets/cover-missing.a888693e.png";const X=p({props:{src:null},setup(d){const n=v("unmounted");return(a,e)=>(_(),D(N,null,[S(h(r(E),{class:"w-full h-full object-cover object-top",src:d.src,onIonImgWillLoad:e[0]||(e[0]=c=>n.value="loading"),onIonImgDidLoad:e[1]||(e[1]=c=>n.value="loaded"),onIonError:e[2]||(e[2]=c=>n.value="missing")},null,8,["src"]),[[A,n.value=="unmounted"||n.value=="loaded"]]),n.value=="missing"?j(a.$slots,"default",{key:0}):H("",!0),S(h(r(T),{class:"m-0 h-full w-full",animated:""},null,512),[[A,n.value=="loading"]])],64))}}),Y={class:"h-36 sm:h-40 lg:h-52 xl:h-64 overflow-clip"},Z=i("div",{class:"opacity-30"},[i("img",{class:"w-full",src:Q})],-1),ee={class:"absolute left-3 top-3"},ae=U("kein Cover"),te={class:"line-clamp-1 text-sm"},ue=p({props:{title:null,coverUrl:null},setup(d){return(n,a)=>(_(),y(r(O),{class:"manga-card",button:""},{default:m(()=>[i("div",Y,[h(X,{src:d.coverUrl},{default:m(()=>[Z,i("div",ee,[h(r(V),{class:"text-white"},{default:m(()=>[ae]),_:1})])]),_:1},8,["src"])]),h(r(F),null,{default:m(()=>[i("div",te,q(d.title),1)]),_:1})]),_:1}))}});var se="/assets/beep.08636030.mp3";function ne(){return new Worker("/assets/barcode-worker.5819c62b.js",{type:"module"})}const le=["src"],oe=p({emits:["scanned"],setup(d,{emit:n}){const a=v(null),e=v(null),c=v(null),l=v(),s=v("");let f=0;B(async()=>{s.value.length>0&&(setTimeout(()=>s.value="",1e3),n("scanned",s.value))});const x=t=>{if(e.value!==null&&a.value!==null&&l.value!==null&&l.value!==void 0&&e.value.readyState===e.value.HAVE_ENOUGH_DATA){const u=a.value.getContext("2d",{willReadFrequently:!0}),o=Math.max(a.value.width/e.value.videoWidth,a.value.height/e.value.videoHeight),w=e.value.videoHeight,b=e.value.videoWidth,I=a.value.height/2-w/2*o,C=a.value.width/2-b/2*o;if(a.value.height=a.value.clientHeight,a.value.width=a.value.clientWidth,u.drawImage(e.value,C,I,b*o,w*o),t-f>200){f=t;const g=document.createElement("canvas"),M=g.getContext("2d");g.width=a.value.width/o,g.height=a.value.height/o,M.drawImage(e.value,C/o,I/o,b,w);const k=M.getImageData(0,0,g.width,g.height);l.value.postMessage({data:k.data,width:k.width,height:k.height})}}requestAnimationFrame(x)};B(async()=>{if(e.value===null)return;const t=await navigator.mediaDevices.getUserMedia({audio:!1,video:{facingMode:"environment",width:{ideal:800},height:{ideal:800}}});e.value.srcObject=t,e.value.setAttribute("playsinline",""),e.value.play(),requestAnimationFrame(x)});const W=()=>{l.value=new ne,l.value.onmessage=t=>{var u;s.value!=t.data.data&&(s.value=t.data.data,(u=c.value)==null||u.play())}},$=()=>{var t;(t=l.value)==null||t.terminate()};return L(W),G(()=>{var t;e.value!==null&&(e.value.pause(),(t=e.value.srcObject)==null||t.getVideoTracks().forEach(u=>u.stop()),e.value.srcObject=null,$())}),(t,u)=>(_(),y(r(P),{"scroll-x":!1,"scroll-y":!1},{default:m(()=>[i("canvas",{class:"w-full h-48",ref_key:"displayCanvas",ref:a},null,512),i("video",{class:"hidden",ref_key:"video",ref:e},null,512),i("audio",{ref_key:"beepAudio",ref:c,src:r(se)},null,8,le)]),_:1}))}});const re=p({emits:["scanned"],setup(d,{emit:n}){const{client:a}=J(),e=async l=>{const{data:s,error:f}=await a.from("mangas").select().or(`gtin13.eq.${l},isbn10.eq.${l}`).single();return f||s==null?Promise.reject(new Error("Das ist kein Manga")):s},c=async l=>{try{const s=await e(l);n("scanned",s.gtin13)}catch(s){(await z.create({message:s.message,duration:2e3,color:"warning"})).present()}};return(l,s)=>(_(),y(r(R),{id:"barcode-modal","initial-breakpoint":1,breakpoints:[0,1]},{default:m(()=>[h(oe,{onScanned:c})]),_:1},8,["initial-breakpoint","breakpoints"]))}});var de=K(re,[["__scopeId","data-v-7457ae95"]]);export{de as B,ue as _,X as a,Q as p};
