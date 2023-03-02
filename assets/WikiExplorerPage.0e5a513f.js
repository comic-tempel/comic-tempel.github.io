import{_ as A,a as G,b as Q}from"./CenteredMessage.62587c10.js";import{d as w,j as J,k as c,a as t,w as a,u as e,l as C,t as K,o as s,m as O,n as Z,p as V,q as H,c as d,r as S,s as X,v as ee,x as te,y as ae,z as h,A as M,B as se,C as le,D as ne,E as oe,g as re,F as ie,G as ce,H as ue,J as P,K as B,L as E,M as Y,N as x,O as k,P as N,Q as de,R as T,h as _e,i as me,S as fe,T as ve,U}from"./index.10d7ba67.js";import{e as pe}from"./mangas.cddc7dbb.js";import{_ as he,a as xe}from"./WikiImg.c3ae7e8d.js";import{_ as W}from"./plugin-vue_export-helper.21dcd24c.js";import{b as ge}from"./index.1a1d4649.js";import{d as F}from"./dayjs.min.fce83730.js";import"./BarcodeScanner.0574de94.js";const ye={class:"w-20 line-clamp-1 text-sm text-center pt-2"},be=w({__name:"CollectionListItem",props:{collectionId:null,collectionCoverUrl:null,collectionName:null},setup(g){const y=g,{proxyUrlFor:f}=H(),I=J(()=>y.collectionCoverUrl?f(y.collectionCoverUrl):"");return(D,R)=>(s(),c("div",null,[t(e(V),{class:"shadow w-20 h-20 ion-activatable ripple-parent"},{default:a(()=>[t(e(O)),t(he,{src:e(I)},{default:a(()=>[t(e(Z),{class:"opacity-30 w-full",src:e(xe)},null,8,["src"])]),_:1},8,["src"])]),_:1}),C("div",ye,K(g.collectionName),1)]))}});var Ie=W(be,[["__scopeId","data-v-1bb18d24"]]);const ke={class:"h-36 sm:h-40 lg:h-52 xl:h-64 overflow-clip"},Ce={class:"text-sm"},Se=w({__name:"MangaListItemSkeleton",setup(g){return(y,f)=>(s(),d(e(ee),{class:"manga-card"},{default:a(()=>[C("div",ke,[t(e(S),{class:"m-0",animated:""})]),t(e(X),null,{default:a(()=>[C("div",Ce,[t(e(S),{animated:""})])]),_:1})]),_:1}))}}),we={class:"w-20 text-sm text-center pt-2"},Le=w({__name:"CollectionListItemSkeleton",setup(g){return(y,f)=>(s(),c("div",null,[t(e(V),{class:"shadow w-20 h-20"},{default:a(()=>[t(e(S),{class:"m-0",animated:""})]),_:1}),C("div",we,[t(e(S),{animated:""})])]))}});const De={class:"flex overflow-x-auto overflow-y-clip space-x-4 pb-6 pt-4 px-4 snap-x scrollbar-hide"},Re=w({__name:"WikiExplorerPage",setup(g){const{client:f}=H(),{push:I}=te(),{hasPermission:D}=ae(),R=h(),_=h(null),m=h(null),v=h(""),$=h(!0),L=h(0);M(async()=>{const o=f.from("collection_updates").select();let l=!1;setTimeout(()=>{l||(m.value=null)},200),v.value!=""?o.textSearch("collection_name",v.value,{type:"phrase"}):o.lte("date_published",F().format("YYYY-MM-DD"));const{data:u,error:r}=await o.range(0,20).order("date_published",{ascending:!1});if(r)m.value=[],console.error(r.message);else if(u!=null){const i=[];u.forEach(p=>i.push(p)),m.value=i}l=!0}),M(async()=>{const o=f.from("mangas").select();let l=!1;setTimeout(()=>{l||(_.value=null)},200),v.value!=""?o.textSearch("title_tsv",v.value,{type:"phrase"}):o.lte("date_published",F().format("YYYY-MM-DD")),D("contribution.change_visibility")||o.is("is_visible",!0);const{data:u,error:r}=await o.range(0,20).order("date_published",{ascending:!1});if(r)_.value=[],console.error(r.message);else if(u!=null){const i=[];u.forEach(p=>i.push(pe(p))),_.value=i}l=!0});const j=o=>{const l=o.detail.scrollTop;l<0||Math.abs(l-L.value)<60||($.value=l<L.value,L.value=l)},q=async o=>{await I({name:"MangaDetailsPage",params:{gtin13:o}}),fe.dismiss()};return(o,l)=>{const u=ve("auto-animate");return s(),d(e(me),null,{default:a(()=>[t(e(ce),{translucent:!0,class:ie(["ion-no-border",{"header-hidden":!$.value}])},{default:a(()=>[t(e(se),{class:"search-toolbar"},{default:a(()=>[t(e(le),{ref:"searchBar",value:v.value,debounce:500,placeholder:"Mangas und Serien suchen...",onIonChange:l[0]||(l[0]=r=>{var i;return v.value=(i=r.detail.value)!=null?i:""})},null,8,["value"]),t(e(ne),{class:"mr-2",slot:"end"},{default:a(()=>[t(e(oe),{id:"scan-button",fill:"solid",color:"primary"},{default:a(()=>[t(e(re),{slot:"icon-only",src:e(ge)},null,8,["src"])]),_:1})]),_:1})]),_:1})]),_:1},8,["class"]),t(e(_e),{fullscreen:!0,"scroll-events":!0,onIonScroll:l[1]||(l[1]=r=>j(r))},{default:a(()=>{var r,i;return[t(A,{ref_key:"barcodeScanner",ref:R,trigger:"scan-button",onScanned:q},null,512),((r=m.value)==null?void 0:r.length)!=0||((i=_.value)==null?void 0:i.length)!=0?(s(),d(e(ue),{key:0},{default:a(()=>{var p,z;return[((p=m.value)==null?void 0:p.length)!=0?(s(),c(x,{key:0},[t(e(P),null,{default:a(()=>[t(e(B),{class:"text-xl mt-2"},{default:a(()=>[E("Serien")]),_:1})]),_:1}),Y((s(),c("div",De,[m.value==null?(s(!0),c(x,{key:0},k(20+1,n=>(s(),c("div",{class:"flex-shrink-0 snap-center",key:n},[t(Le)]))),128)):(s(!0),c(x,{key:1},k(m.value,n=>{var b;return s(),c("div",{class:"flex-shrink-0 snap-center",key:n.collection_id},[t(Ie,{"collection-id":n.collection_id,"collection-cover-url":(b=n.cover)!=null?b:void 0,"collection-name":n.collection_name,onClick:$e=>e(I)({name:"CollectionDetailsPage",params:{id:n.collection_id}})},null,8,["collection-id","collection-cover-url","collection-name","onClick"])])}),128))])),[[u]])],64)):N("",!0),((z=_.value)==null?void 0:z.length)!=0?(s(),c(x,{key:1},[t(e(P),null,{default:a(()=>[t(e(B),{class:"text-xl mt-2"},{default:a(()=>[E("Mangas")]),_:1})]),_:1}),t(e(de),null,{default:a(()=>[_.value==null?(s(),d(e(T),{key:0},{default:a(()=>[(s(!0),c(x,null,k(20+1,n=>(s(),d(e(U),{key:n,"size-lg":"2","size-md":"3","size-sm":"4","size-xs":"4"},{default:a(()=>[t(Se)]),_:2},1024))),128))]),_:1})):Y((s(),d(e(T),{key:1},{default:a(()=>[(s(!0),c(x,null,k(_.value,n=>(s(),d(e(U),{key:n.gtin13,"size-lg":"2","size-md":"3","size-sm":"4","size-xs":"4"},{default:a(()=>{var b;return[t(Q,{title:n.title,"cover-url":(b=n.cover("m"))!=null?b:"","is-visible":n.is_visible,"router-link":`/manga/${n.gtin13}`},null,8,["title","cover-url","is-visible","router-link"])]}),_:2},1024))),128))]),_:1})),[[u]])]),_:1})],64)):N("",!0)]}),_:1})):(s(),d(G,{key:1,emoji:"\u{1F914}",text:"Weder Serien noch Mangas gefunden"}))]}),_:1})]),_:1})}}});var Ue=W(Re,[["__scopeId","data-v-6149d552"]]);export{Ue as default};
