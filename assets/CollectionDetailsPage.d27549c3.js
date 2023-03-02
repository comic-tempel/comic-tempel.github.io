var M=Object.defineProperty,U=Object.defineProperties;var q=Object.getOwnPropertyDescriptors;var w=Object.getOwnPropertySymbols;var F=Object.prototype.hasOwnProperty,H=Object.prototype.propertyIsEnumerable;var x=(s,o,a)=>o in s?M(s,o,{enumerable:!0,configurable:!0,writable:!0,value:a}):s[o]=a,C=(s,o)=>{for(var a in o||(o={}))F.call(o,a)&&x(s,a,o[a]);if(w)for(var a of w(o))H.call(o,a)&&x(s,a,o[a]);return s},S=(s,o)=>U(s,q(o));import{_ as $,a as R}from"./WikiImg.c3ae7e8d.js";import{y as j,an as G,z as k,A as K,q as O,d as J,av as Q,x as W,c as y,w as t,u as e,o as p,a as l,G as B,B as P,a3 as X,L as N,t as v,D as h,ak as D,E as T,g as E,P as V,l as i,aw as Y,k as z,v as Z,H as ee,O as ae,N as le,h as te,i as se,a6 as oe,F as re,K as ne,al as ce,am as ie}from"./index.10d7ba67.js";import{e as ue}from"./mangas.cddc7dbb.js";import{T as de}from"./TransitionToggleSlideDown.e52ecbc2.js";import{n as A}from"./index.1a1d4649.js";import{_ as fe}from"./plugin-vue_export-helper.21dcd24c.js";const{client:_e}=O(),pe=s=>{const{hasPermission:o}=j(),a=G({name:null,publisherName:"",coverUrl:"",contributors:[],keywords:[]}),u=k([]),g=async b=>{var n,c;const f=_e.from("mangas").select("*,user_vlb_library(*)");o("contribution.change_visibility")||f.is("is_visible",!0);const{data:d,error:_}=await f.eq("collection_id",b).order("date_published",{ascending:!1});if(_)throw Error(_.message);d!=null&&d.length>0&&(d.forEach(r=>{var I;let m;r.user_vlb_library!==null&&Array.isArray(r.user_vlb_library)&&r.user_vlb_library.length>0&&(m=(I=r.user_vlb_library[0].shelf)!=null?I:void 0),u.value.push(S(C({},ue(r)),{shelf:m}))}),a.name=(n=d[0].collection_name)!=null?n:null,a.publisherName=d[0].publisher_name,a.coverUrl=(c=u.value.map(r=>r.cover("m")).find(r=>r!=null))!=null?c:"",a.keywords=[...new Set(u.value.flatMap(({keywords:r})=>r))],a.contributors=[...new Set(u.value.flatMap(({contributors:r})=>r==null?void 0:r.map(({name:m})=>m)))])};return K(()=>g(s.value)),{mangas:u,collection:a}};const L=s=>(ce("data-v-1391ea2c"),s=s(),ie(),s),ve={class:"h-80"},be=L(()=>i("div",{class:"header-foreground absolute top-0 w-full h-full p-4"},null,-1)),me={key:0,class:"p-4 flex flex-row gap-4"},he=L(()=>i("div",{class:"opacity-30"},[i("img",{class:"w-full",src:R})],-1)),ge={class:"basis-2/3"},ye={class:"text-2xl py-4"},ke={class:"text-lg pb-2"},Ie=J({__name:"CollectionDetailsPage",props:{id:null},setup(s){const o=s,{collection:a,mangas:u}=pe(Q(o,"id")),{push:g}=W(),b=k(!1),f=k(0),d=_=>{const n=_.detail.scrollTop;n<0||Math.abs(n-f.value)<60||(b.value=n>f.value,f.value=n)};return(_,n)=>(p(),y(e(se),null,{default:t(()=>[l(de,null,{default:t(()=>[b.value?(p(),y(e(B),{key:0,class:"absolute",translucent:!0},{default:t(()=>[l(e(P),null,{default:t(()=>[l(e(X),null,{default:t(()=>[N(v(e(a).name),1)]),_:1}),l(e(h),{slot:"start"},{default:t(()=>[l(e(D),{"default-href":"/",text:""})]),_:1}),l(e(h),{slot:"end"},{default:t(()=>[l(e(T),{disabled:""},{default:t(()=>[l(e(E),{slot:"icon-only",src:e(A)},null,8,["src"])]),_:1})]),_:1})]),_:1})]),_:1})):V("",!0)]),_:1}),l(e(te),{fullscreen:!0,"scroll-events":!0,onIonScroll:n[0]||(n[0]=c=>d(c))},{default:t(()=>[i("div",ve,[i("div",{class:"header-background h-full",style:Y(`background-image: url(${e(a).coverUrl})`)},null,4),be,l(e(B),{class:"absolute top-0 overflow-hidden"},{default:t(()=>[l(e(P),{class:"transparent"},{default:t(()=>[l(e(h),{slot:"start"},{default:t(()=>[l(e(D),{"default-href":"/",text:""})]),_:1}),l(e(h),{slot:"end"},{default:t(()=>[l(e(T),{disabled:""},{default:t(()=>[l(e(E),{slot:"icon-only",src:e(A)},null,8,["src"])]),_:1})]),_:1})]),_:1}),e(a).name!=null?(p(),z("div",me,[l(e(Z),{class:"manga-card max-h-56 w-40"},{default:t(()=>[l($,{src:e(a).coverUrl},{default:t(()=>[he]),_:1},8,["src"])]),_:1}),i("div",ge,[i("p",ye,v(e(a).name),1),i("p",ke,v(e(a).contributors.join(", ")),1),i("p",null,v(e(a).publisherName),1)])])):V("",!0)]),_:1})]),l(e(ee),{lines:"full"},{default:t(()=>[(p(!0),z(le,null,ae(e(u),c=>(p(),y(e(oe),{class:re({translucent:!c.is_visible}),key:c.gtin13,button:!0,detail:!0,onClick:r=>{e(g)({name:"MangaDetailsPage",params:{gtin13:c.gtin13}})}},{default:t(()=>[l(e(ne),null,{default:t(()=>[N(v(c.title),1)]),_:2},1024)]),_:2},1032,["class","onClick"]))),128))]),_:1})]),_:1})]),_:1}))}});var De=fe(Ie,[["__scopeId","data-v-1391ea2c"]]);export{De as default};
