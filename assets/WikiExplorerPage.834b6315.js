import{p as E,_ as b}from"./MangaListItem.ab75e5d6.js";import{d as C,K as S,r as _,o as n,c as f,w as t,u as e,D as m,L as z,z as B,M as g,i as L,a,k as U,N as F,p as N,h as $,O as x,C as I,m as q,B as y,t as p,v as w,F as k,q as M,s as R,x as V,y as v,E as A,A as D}from"./index.44a9fc20.js";import{e as H}from"./mangas.24ab708e.js";const T=C({props:{collectionId:null,collectionCoverUrl:null},setup(h){const u=h,{proxyUrlFor:i}=B(),d=S(()=>u.collectionCoverUrl?i(u.collectionCoverUrl):""),o=_(!1);return(c,s)=>(n(),f(e(z),{class:"shadow"},{default:t(()=>[o.value?(n(),f(e(m),{key:0,class:"opacity-30",src:e(E)},null,8,["src"])):(n(),f(e(m),{key:1,src:e(d),onIonError:s[0]||(s[0]=l=>o.value=!0)},null,8,["src"]))]),_:1}))}}),G=v("Serien"),K=v("alle"),O={class:"flex overflow-x-auto overflow-y-clip space-x-4 pb-6 pt-4 px-4 snap-x scrollbar-hide"},P={class:"w-20 line-clamp-1 text-sm text-center pt-2"},Q=v("Mangas"),X=C({setup(h){const{client:u}=B(),i=_([]),d=_([]),o=_("");return g(async()=>{const c=u.from("collection_updates").select();d.value=[],o.value!=""&&c.textSearch("collection_name",o.value,{type:"phrase",config:"german"});const{data:s,error:l}=await c.range(0,20).order("date_updated",{ascending:!1});if(l)throw Error(l.message);s!=null&&s.length>0&&s.forEach(r=>d.value.push(r))}),g(async()=>{const c=u.from("mangas").select();i.value=[],o.value!=""&&c.textSearch("title_tsv",o.value,{type:"phrase",config:"german"});const{data:s,error:l}=await c.range(0,20).order("date_updated",{ascending:!1});if(l)throw Error(l.message);s!=null&&s.length>0&&s.forEach(r=>i.value.push(H(r)))}),(c,s)=>(n(),f(e(L),null,{default:t(()=>[a(e(U),{class:"ion-no-border",translucent:!0},{default:t(()=>[a(e(N),{class:"search-toolbar"},{default:t(()=>[a(e(F),{ref:"searchBar",value:o.value,onIonChange:s[0]||(s[0]=l=>{var r;return o.value=(r=l.detail.value)!=null?r:""})},null,8,["value"])]),_:1})]),_:1}),a(e($),{fullscreen:!0},{default:t(()=>[a(e(V),{lines:"full"},{default:t(()=>[a(e(x),null,{default:t(()=>[a(e(I),{class:"text-xl"},{default:t(()=>[G]),_:1}),a(e(q),null,{default:t(()=>[K]),_:1})]),_:1}),y("div",O,[(n(!0),p(k,null,w(d.value,l=>(n(),p("div",{class:"flex-shrink-0 snap-center",key:l.collection_id},[a(T,{class:"w-20 h-20","collection-id":l.collection_id,"collection-cover-url":l.cover},null,8,["collection-id","collection-cover-url"]),y("div",P,A(l.collection_name),1)]))),128))]),a(e(x),null,{default:t(()=>[a(e(I),{class:"text-xl"},{default:t(()=>[Q]),_:1})]),_:1}),a(e(M),null,{default:t(()=>[a(e(R),null,{default:t(()=>[(n(!0),p(k,null,w(i.value,l=>(n(),f(e(D),{key:l.gtin13,"size-lg":"2","size-md":"3","size-sm":"4","size-xs":"4"},{default:t(()=>{var r;return[a(b,{title:l.title,"cover-url":(r=l.cover("m"))!=null?r:"","router-link":`/manga/${l.gtin13}`},null,8,["title","cover-url","router-link"])]}),_:2},1024))),128))]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}))}});export{X as default};
