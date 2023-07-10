import{_ as A,a as G}from"./BarcodeScannerModal.b50c4652.js";import{d as w,j as Q,k as c,a as t,w as a,u as e,l as C,t as J,o as s,m as K,n as O,p as V,q as H,c as d,r as S,s as Z,v as X,x as ee,y as te,z as h,A as E,B as ae,C as se,D as le,E as ne,g as oe,F as re,G as ie,H as ce,J as M,K as P,L as B,M as Y,N as x,O as k,P as N,Q as ue,R as T,h as de,i as _e,S as me,T as fe,U}from"./index.450d10d0.js";import{e as pe}from"./mangas.7e8a2ea9.js";import{_ as ve,a as he}from"./WikiImg.133dda8a.js";import{_ as W}from"./plugin-vue_export-helper.21dcd24c.js";import{b as xe}from"./index.2d43f867.js";import{_ as ge}from"./CenteredMessage.32bbc637.js";import{d as F}from"./dayjs.min.fa05d6ee.js";import"./BarcodeScanner.cdb0f8a4.js";const ye={class:"w-20 line-clamp-1 text-sm text-center pt-2"},be=w({__name:"CollectionListItem",props:{collectionId:null,collectionCoverUrl:null,collectionName:null},setup(g){const y=g,{proxyUrlFor:f}=H(),I=Q(()=>y.collectionCoverUrl?f(y.collectionCoverUrl):"");return(D,R)=>(s(),c("div",null,[t(e(V),{class:"shadow w-20 h-20 ion-activatable ripple-parent"},{default:a(()=>[t(e(K)),t(ve,{src:e(I)},{default:a(()=>[t(e(O),{class:"opacity-30 w-full",src:e(he)},null,8,["src"])]),_:1},8,["src"])]),_:1}),C("div",ye,J(g.collectionName),1)]))}});var Ie=W(be,[["__scopeId","data-v-1bb18d24"]]);const ke={class:"h-36 sm:h-40 lg:h-52 xl:h-64 overflow-clip"},Ce={class:"text-sm"},Se=w({__name:"MangaListItemSkeleton",setup(g){return(y,f)=>(s(),d(e(X),{class:"manga-card"},{default:a(()=>[C("div",ke,[t(e(S),{class:"m-0",animated:""})]),t(e(Z),null,{default:a(()=>[C("div",Ce,[t(e(S),{animated:""})])]),_:1})]),_:1}))}}),we={class:"w-20 text-sm text-center pt-2"},Le=w({__name:"CollectionListItemSkeleton",setup(g){return(y,f)=>(s(),c("div",null,[t(e(V),{class:"shadow w-20 h-20"},{default:a(()=>[t(e(S),{class:"m-0",animated:""})]),_:1}),C("div",we,[t(e(S),{animated:""})])]))}});const De={class:"flex overflow-x-auto overflow-y-clip space-x-4 pb-6 pt-4 px-4 snap-x scrollbar-hide"},Re=w({__name:"WikiExplorerPage",setup(g){const{client:f}=H(),{push:I}=ee(),{hasPermission:D}=te(),R=h(),_=h(null),m=h(null),p=h(""),z=h(!0),L=h(0);E(async()=>{const o=f.from("collection_updates").select();let l=!1;setTimeout(()=>{l||(m.value=null)},200),p.value!=""?o.textSearch("collection_name",p.value,{type:"phrase"}):o.lte("date_published",F().format("YYYY-MM-DD"));const{data:u,error:r}=await o.range(0,20).order("date_published",{ascending:!1});if(r)m.value=[],console.error(r.message);else if(u!=null){const i=[];u.forEach(v=>i.push(v)),m.value=i}l=!0}),E(async()=>{const o=f.from("mangas").select();let l=!1;setTimeout(()=>{l||(_.value=null)},200),p.value!=""?o.textSearch("title_tsv",p.value,{type:"phrase"}):o.lte("date_published",F().format("YYYY-MM-DD")),D("contribution.change_visibility")||o.is("is_visible",!0);const{data:u,error:r}=await o.range(0,20).order("date_published",{ascending:!1});if(r)_.value=[],console.error(r.message);else if(u!=null){const i=[];u.forEach(v=>i.push(pe(v))),_.value=i}l=!0});const j=o=>{const l=o.detail.scrollTop;l<0||Math.abs(l-L.value)<60||(z.value=l<L.value,L.value=l)},q=async o=>{await I({name:"MangaDetailsPage",params:{gtin13:o}}),me.dismiss()};return(o,l)=>{const u=fe("auto-animate");return s(),d(e(_e),null,{default:a(()=>[t(e(ie),{translucent:!0,class:re(["ion-no-border",{"header-hidden":!z.value}])},{default:a(()=>[t(e(ae),{class:"search-toolbar"},{default:a(()=>[t(e(se),{ref:"searchBar",value:p.value,debounce:500,placeholder:"Manga und Serien suchen...",onIonChange:l[0]||(l[0]=r=>{var i;return p.value=(i=r.detail.value)!=null?i:""})},null,8,["value"]),t(e(le),{class:"mr-2",slot:"end"},{default:a(()=>[t(e(ne),{id:"scan-button",fill:"solid",color:"primary"},{default:a(()=>[t(e(oe),{slot:"icon-only",src:e(xe)},null,8,["src"])]),_:1})]),_:1})]),_:1})]),_:1},8,["class"]),t(e(de),{fullscreen:!0,"scroll-events":!0,onIonScroll:l[1]||(l[1]=r=>j(r))},{default:a(()=>{var r,i;return[t(A,{ref_key:"barcodeScanner",ref:R,trigger:"scan-button",onScanned:q},null,512),((r=m.value)==null?void 0:r.length)!=0||((i=_.value)==null?void 0:i.length)!=0?(s(),d(e(ce),{key:0},{default:a(()=>{var v,$;return[((v=m.value)==null?void 0:v.length)!=0?(s(),c(x,{key:0},[t(e(M),null,{default:a(()=>[t(e(P),{class:"text-xl mt-2"},{default:a(()=>[B("Serien")]),_:1})]),_:1}),Y((s(),c("div",De,[m.value==null?(s(!0),c(x,{key:0},k(20+1,n=>(s(),c("div",{class:"flex-shrink-0 snap-center",key:n},[t(Le)]))),128)):(s(!0),c(x,{key:1},k(m.value,n=>{var b;return s(),c("div",{class:"flex-shrink-0 snap-center",key:n.collection_id},[t(Ie,{"collection-id":n.collection_id,"collection-cover-url":(b=n.cover)!=null?b:void 0,"collection-name":n.collection_name,onClick:ze=>e(I)({name:"CollectionDetailsPage",params:{id:n.collection_id}})},null,8,["collection-id","collection-cover-url","collection-name","onClick"])])}),128))])),[[u]])],64)):N("",!0),(($=_.value)==null?void 0:$.length)!=0?(s(),c(x,{key:1},[t(e(M),null,{default:a(()=>[t(e(P),{class:"text-xl mt-2"},{default:a(()=>[B("Manga")]),_:1})]),_:1}),t(e(ue),null,{default:a(()=>[_.value==null?(s(),d(e(T),{key:0},{default:a(()=>[(s(!0),c(x,null,k(20+1,n=>(s(),d(e(U),{key:n,"size-lg":"2","size-md":"3","size-sm":"4","size-xs":"4"},{default:a(()=>[t(Se)]),_:2},1024))),128))]),_:1})):Y((s(),d(e(T),{key:1},{default:a(()=>[(s(!0),c(x,null,k(_.value,n=>(s(),d(e(U),{key:n.gtin13,"size-lg":"2","size-md":"3","size-sm":"4","size-xs":"4"},{default:a(()=>{var b;return[t(G,{title:n.title,"cover-url":(b=n.cover("m"))!=null?b:"","is-visible":n.is_visible,"router-link":`/manga/${n.gtin13}`},null,8,["title","cover-url","is-visible","router-link"])]}),_:2},1024))),128))]),_:1})),[[u]])]),_:1})],64)):N("",!0)]}),_:1})):(s(),d(ge,{key:1,emoji:"\u{1F914}",text:"Weder Serien noch Einzelausgaben gefunden"}))]}),_:1})]),_:1})}}});var Fe=W(Re,[["__scopeId","data-v-4fdf0ecc"]]);export{Fe as default};
