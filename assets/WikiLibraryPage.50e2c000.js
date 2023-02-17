import{B,a as F,b as z}from"./CenteredMessage.024fb940.js";import{d as C,x as E,j as $,v as L,Z as T,c,w as t,u as e,a as s,z as M,B as _,C as g,g as p,_ as N,O as S,t as R,E as j,F as G,M as P,N as V,k as W,K as q,J as A,h as D,i as H,p as J,o as i,Q as K}from"./index.4625a793.js";import{e as O}from"./mangas.b278b8f2.js";import{t as b,a as y}from"./ui.13abbc01.js";import{p as Q,a as U}from"./index.ec2db92e.js";import"./plugin-vue_export-helper.21dcd24c.js";const ae=C({props:{shelf:null},setup(d){const u=d,{client:h}=J(),l=E([]),v=$(()=>{switch(u.shelf){case"wished":return"Meine Wunschliste";case"owned":return"Meine Sammlung";default:return u.shelf}}),{beforeEach:I}=L(),{currentUser:k}=T(),f=async()=>{const{data:a,error:o}=await h.from("mangas").select("*, user_vlb_library!inner(*)").eq("user_vlb_library.shelf",u.shelf);if(a!=null)l.value=a.map(O);else throw o?(b(),Error(o.message)):Error("There is no data...")},w=async a=>{var r;const o=l.value.find(n=>n.gtin13==a);if(o!==void 0)y({message:`"${o.title}" ist bereits Teil dieses Regals \u{1F914}`,color:"success",position:"middle"});else{const{error:n}=await h.from("user_vlb_library").upsert({gtin13:a,shelf:u.shelf,user_id:(r=k.value)==null?void 0:r.id});if(n)b(),console.error(n.message);else{await f();const m=l.value.find(x=>x.gtin13==a);y({message:`"${m==null?void 0:m.title}" hinzugef\xFCgt \u{1F389}`,color:"success",position:"middle"})}}};return I(a=>(a.name=="WikiLibraryPage"&&f(),!0)),f(),(a,o)=>(i(),c(e(H),null,{default:t(()=>[s(e(j),{class:"ion-no-border",translucent:!0},{default:t(()=>[s(e(M),null,{default:t(()=>[s(e(_),{slot:"start"},{default:t(()=>[s(e(g),{"router-link":"/profile"},{default:t(()=>[s(e(p),{slot:"icon-only",src:e(Q)},null,8,["src"])]),_:1})]),_:1}),s(e(N),null,{default:t(()=>[S(R(e(v)),1)]),_:1}),s(e(_),{slot:"end"},{default:t(()=>[s(e(g),{id:`add-button-${d.shelf}`},{default:t(()=>[s(e(p),{slot:"icon-only",src:e(U)},null,8,["src"])]),_:1},8,["id"])]),_:1})]),_:1})]),_:1}),s(e(D),null,{default:t(()=>[s(B,{trigger:`add-button-${d.shelf}`,onScanned:w},null,8,["trigger"]),l.value.length<1?(i(),c(F,{key:0,emoji:"\u{1F914}",text:"G\xE4hnende Leere. F\xFCg mal ein paar Manga hinzu!"})):(i(),c(e(G),{key:1},{default:t(()=>[s(e(P),null,{default:t(()=>[s(e(V),null,{default:t(()=>[(i(!0),W(A,null,q(l.value,r=>(i(),c(e(K),{key:r.gtin13,"size-lg":"2","size-md":"3","size-sm":"4","size-xs":"4"},{default:t(()=>{var n;return[s(z,{title:r.title,"cover-url":(n=r.cover("m"))!=null?n:"","router-link":`/manga/${r.gtin13}`},null,8,["title","cover-url","router-link"])]}),_:2},1024))),128))]),_:1})]),_:1})]),_:1}))]),_:1})]),_:1}))}});export{ae as default};
