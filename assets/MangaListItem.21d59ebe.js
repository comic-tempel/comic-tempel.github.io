import{d,r as v,o as m,t as f,B as u,C as c,a,u as l,D as p,E as g,G as _,H as h,F as I,c as w,w as n,J as t,K as x,L as C,M as k,N as B,y as N}from"./index.e4222209.js";var $="/assets/cover-missing.a888693e.png";const y=d({props:{src:null},setup(o){const e=v("unmounted");return(r,s)=>(m(),f(I,null,[u(a(l(p),{class:"w-full h-full",src:o.src,onIonImgWillLoad:s[0]||(s[0]=i=>e.value="loading"),onIonImgDidLoad:s[1]||(s[1]=i=>e.value="loaded"),onIonError:s[2]||(s[2]=i=>e.value="missing")},null,8,["src"]),[[c,e.value=="unmounted"||e.value=="loaded"]]),e.value=="missing"?g(r.$slots,"default",{key:0}):_("",!0),u(a(l(h),{class:"m-0 h-full w-full",animated:""},null,512),[[c,e.value=="loading"]])],64))}}),D={class:"h-36 sm:h-40 lg:h-52 xl:h-64 overflow-clip"},L=t("div",{class:"opacity-30"},[t("img",{class:"w-full",src:$})],-1),S={class:"absolute left-3 top-3"},V=N("kein Cover"),b={class:"line-clamp-1 text-sm"},F=d({props:{title:null,coverUrl:null},setup(o){return(e,r)=>(m(),w(l(B),{class:"manga-card",button:""},{default:n(()=>[t("div",D,[a(y,{src:o.coverUrl},{default:n(()=>[L,t("div",S,[a(l(x),{class:"text-white"},{default:n(()=>[V]),_:1})])]),_:1},8,["src"])]),a(l(k),null,{default:n(()=>[t("div",b,C(o.title),1)]),_:1})]),_:1}))}});export{F as _,y as a,$ as p};
