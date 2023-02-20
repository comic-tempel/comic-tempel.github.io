import{B as W,_ as A,a as G}from"./CenteredMessage.f4279160.js";import{d as w,j as Q,o as s,k as i,a,w as t,u as e,l as J,m as K,n as F,p as k,t as O,q as U,c as _,r as C,s as Z,v as X,x as ee,y as h,z,A as ae,B as te,C as se,D as le,g as ne,E as oe,F as re,G as ce,H as B,J as M,K as E,L as x,M as I,N as P,O as ie,P as Y,h as ue,i as de,Q as V,R as _e,S as me,T as N}from"./index.462cec1b.js";import{e as fe}from"./mangas.677aea0e.js";import{_ as pe,a as ve}from"./WikiImg.6622f6d0.js";import{_ as H}from"./plugin-vue_export-helper.21dcd24c.js";import{b as he}from"./index.1d46ca08.js";import{d as T}from"./dayjs.min.931d31c4.js";const xe={class:"w-20 line-clamp-1 text-sm text-center pt-2"},ge=w({props:{collectionId:null,collectionCoverUrl:null,collectionName:null},setup(g){const y=g,{proxyUrlFor:f}=U(),b=Q(()=>y.collectionCoverUrl?f(y.collectionCoverUrl):"");return(R,u)=>(s(),i("div",null,[a(e(F),{class:"shadow w-20 h-20 ion-activatable ripple-parent"},{default:t(()=>[a(e(J)),a(pe,{src:e(b)},{default:t(()=>[a(e(K),{class:"opacity-30 w-full",src:e(ve)},null,8,["src"])]),_:1},8,["src"])]),_:1}),k("div",xe,O(g.collectionName),1)]))}});var ye=H(ge,[["__scopeId","data-v-1bb18d24"]]);const be={class:"h-36 sm:h-40 lg:h-52 xl:h-64 overflow-clip"},Ie={class:"text-sm"},ke=w({setup(g){return(y,f)=>(s(),_(e(X),{class:"manga-card"},{default:t(()=>[k("div",be,[a(e(C),{class:"m-0",animated:""})]),a(e(Z),null,{default:t(()=>[k("div",Ie,[a(e(C),{animated:""})])]),_:1})]),_:1}))}}),Ce={class:"w-20 text-sm text-center pt-2"},we=w({setup(g){return(y,f)=>(s(),i("div",null,[a(e(F),{class:"shadow w-20 h-20"},{default:t(()=>[a(e(C),{class:"m-0",animated:""})]),_:1}),k("div",Ce,[a(e(C),{animated:""})])]))}});const Se=V("Serien"),De={class:"flex overflow-x-auto overflow-y-clip space-x-4 pb-6 pt-4 px-4 snap-x scrollbar-hide"},Re=V("Mangas"),Le=w({setup(g){const{client:f}=U(),{push:b}=ee(),R=h(),u=h(null),m=h(null),p=h(""),L=h(!0),S=h(0);z(async()=>{const o=f.from("collection_updates").select();let l=!1;setTimeout(()=>{l||(m.value=null)},200),p.value!=""?o.textSearch("collection_name",p.value,{type:"phrase"}):o.lte("date_published",T().format("YYYY-MM-DD"));const{data:d,error:r}=await o.range(0,20).order("date_published",{ascending:!1});if(r)m.value=[],console.error(r.message);else if(d!=null){const c=[];d.forEach(v=>c.push(v)),m.value=c}l=!0}),z(async()=>{const o=f.from("mangas").select();let l=!1;setTimeout(()=>{l||(u.value=null)},200),p.value!=""?o.textSearch("title_tsv",p.value,{type:"phrase"}):o.lte("date_published",T().format("YYYY-MM-DD"));const{data:d,error:r}=await o.range(0,20).order("date_published",{ascending:!1});if(r)u.value=[],console.error(r.message);else if(d!=null){const c=[];d.forEach(v=>c.push(fe(v))),u.value=c}l=!0});const j=o=>{const l=o.detail.scrollTop;l<0||Math.abs(l-S.value)<60||(L.value=l<S.value,S.value=l)},q=async o=>{await b({name:"MangaDetailsPage",params:{gtin13:o}}),_e.dismiss()};return(o,l)=>{const d=me("auto-animate");return s(),_(e(de),null,{default:t(()=>[a(e(re),{translucent:!0,class:oe(["ion-no-border",{"header-hidden":!L.value}])},{default:t(()=>[a(e(ae),{class:"search-toolbar"},{default:t(()=>[a(e(te),{ref:"searchBar",value:p.value,debounce:500,placeholder:"Mangas und Serien suchen...",onIonChange:l[0]||(l[0]=r=>{var c;return p.value=(c=r.detail.value)!=null?c:""})},null,8,["value"]),a(e(se),{class:"mr-2",slot:"end"},{default:t(()=>[a(e(le),{id:"scan-button",fill:"solid",color:"primary"},{default:t(()=>[a(e(ne),{slot:"icon-only",src:e(he)},null,8,["src"])]),_:1})]),_:1})]),_:1})]),_:1},8,["class"]),a(e(ue),{fullscreen:!0,"scroll-events":!0,onIonScroll:l[1]||(l[1]=r=>j(r))},{default:t(()=>{var r,c;return[a(W,{ref_key:"barcodeScanner",ref:R,trigger:"scan-button",onScanned:q},null,512),((r=m.value)==null?void 0:r.length)!=0||((c=u.value)==null?void 0:c.length)!=0?(s(),_(e(ce),{key:0},{default:t(()=>{var v,$;return[((v=m.value)==null?void 0:v.length)!=0?(s(),i(x,{key:0},[a(e(B),null,{default:t(()=>[a(e(M),{class:"text-xl mt-2"},{default:t(()=>[Se]),_:1})]),_:1}),E((s(),i("div",De,[m.value==null?(s(!0),i(x,{key:0},I(20+1,n=>(s(),i("div",{class:"flex-shrink-0 snap-center",key:n},[a(we)]))),128)):(s(!0),i(x,{key:1},I(m.value,n=>(s(),i("div",{class:"flex-shrink-0 snap-center",key:n.collection_id},[a(ye,{"collection-id":n.collection_id,"collection-cover-url":n.cover,"collection-name":n.collection_name,onClick:D=>e(b)({name:"CollectionDetailsPage",params:{id:n.collection_id}})},null,8,["collection-id","collection-cover-url","collection-name","onClick"])]))),128))])),[[d]])],64)):P("",!0),(($=u.value)==null?void 0:$.length)!=0?(s(),i(x,{key:1},[a(e(B),null,{default:t(()=>[a(e(M),{class:"text-xl mt-2"},{default:t(()=>[Re]),_:1})]),_:1}),a(e(ie),null,{default:t(()=>[u.value==null?(s(),_(e(Y),{key:0},{default:t(()=>[(s(!0),i(x,null,I(20+1,n=>(s(),_(e(N),{key:n,"size-lg":"2","size-md":"3","size-sm":"4","size-xs":"4"},{default:t(()=>[a(ke)]),_:2},1024))),128))]),_:1})):E((s(),_(e(Y),{key:1},{default:t(()=>[(s(!0),i(x,null,I(u.value,n=>(s(),_(e(N),{key:n.gtin13,"size-lg":"2","size-md":"3","size-sm":"4","size-xs":"4"},{default:t(()=>{var D;return[a(G,{title:n.title,"cover-url":(D=n.cover("m"))!=null?D:"","router-link":`/manga/${n.gtin13}`},null,8,["title","cover-url","router-link"])]}),_:2},1024))),128))]),_:1})),[[d]])]),_:1})],64)):P("",!0)]}),_:1})):(s(),_(A,{key:1,emoji:"\u{1F914}",text:"Weder Serien noch Mangas gefunden"}))]}),_:1})]),_:1})}}});var Ne=H(Le,[["__scopeId","data-v-4d0f3b73"]]);export{Ne as default};
