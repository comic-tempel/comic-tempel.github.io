import{d,o as l,c as s,w as t,a,p as c,t as I,u as e,q as _,r as p,s as m,i as g,j as k,v as x,n as C,h as b,x as h,y as v,z as B,A as L,F as y,B as S,C as w,D as N}from"./index.13e5300e.js";import{u as V}from"./mangas.7b48cdf5.js";const A=d({props:{title:null},setup(i){return(r,f)=>(l(),s(e(p),{button:!0,detail:!0},{default:t(()=>[a(e(_),{class:"ion-text-wrap"},{default:t(()=>[c(I(i.title),1)]),_:1})]),_:1}))}}),D=c("Aktualisierungen"),$=d({setup(i){const{load:r,mangas:f,filter:u}=V();return m(!1),r(),(F,o)=>(l(),s(e(g),null,{default:t(()=>[a(e(k),{class:"ion-no-border"},{default:t(()=>[a(e(C),{class:"search-toolbar"},{default:t(()=>[a(e(x),{ref:"searchBar",value:e(u),onIonChange:o[0]||(o[0]=n=>u.value=n.detail.value)},null,8,["value"])]),_:1})]),_:1}),a(e(b),null,{default:t(()=>[a(e(S),{lines:"full"},{default:t(()=>[e(u)?v("",!0):(l(),s(e(h),{key:0},{default:t(()=>[D]),_:1})),(l(!0),B(y,null,L(e(f),n=>(l(),s(A,{key:n.gtin13,title:n.title,"router-link":`/manga/${n.gtin13}`},null,8,["title","router-link"]))),128))]),_:1}),a(e(N),{onIonInfinite:o[1]||(o[1]=n=>e(r)().then(()=>n.target.complete()))},{default:t(()=>[a(e(w))]),_:1})]),_:1})]),_:1}))}});export{$ as default};
