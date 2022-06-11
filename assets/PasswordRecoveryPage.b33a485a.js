import{d as x,o as p,x as g,a as s,w as a,u as e,a2 as E,k as v,aa as R,j as b,a3 as C,ab as y,b as n,t as I,J as S,c as D,ac as k,F as B,f as A,m as T,Y as U,l as Y,q as P,X as O,M as z,i as L,I as M,h as N,z as $,y as q}from"./index.b9bcba95.js";import{u as j,t as K,o as Q,p as V,a as F}from"./validation.80faaed1.js";import{c as Z,u as H}from"./useMachine.6b3bf717.js";const J=n("Um sicherzustellen, dass Dein Konto gut gesch\xFCtzt ist, verwende bitte 8 oder mehr Zeichen mit einer Kombination aus Buchstaben, Zahlen & Symbolen."),X=n("sicheres Passwort"),G=n("Passwort wiederholen"),W=n("Passwort speichern"),ee=x({props:{state:null},emits:["submit"],setup(l,{expose:u,emit:f}){const{handleSubmit:w,errors:r,meta:_,resetForm:d}=j({validationSchema:K(Q({password:V,confirmation:V.nonempty("Bitte wiederhole das Passwort")}).refine(o=>o.password==o.confirmation,{message:"Die Passw\xF6rter stimmen nicht \xFCberein",path:["confirmation"]}))}),{value:c}=F("password"),{value:t}=F("confirmation"),i=w(o=>f("submit",{password:o.password}));return u({clear:d}),(o,m)=>(p(),g("div",null,[s(e(E),null,{default:a(()=>[J]),_:1}),s(e(S),null,{default:a(()=>[s(e(v),{class:R({"ion-invalid":e(r).password})},{default:a(()=>[s(e(b),{position:"floating"},{default:a(()=>[X]),_:1}),s(e(C),{modelValue:e(c),"onUpdate:modelValue":m[0]||(m[0]=h=>y(c)?c.value=h:null),name:"password",type:"password",required:"true",enterkeyhint:"send",disabled:l.state=="Recovering"},null,8,["modelValue","disabled"]),s(e(E),{slot:"error"},{default:a(()=>[n(I(e(r).password),1)]),_:1})]),_:1},8,["class"]),s(e(v),{class:R({"ion-invalid":e(r).confirmation})},{default:a(()=>[s(e(b),{position:"floating"},{default:a(()=>[G]),_:1}),s(e(C),{modelValue:e(t),"onUpdate:modelValue":m[1]||(m[1]=h=>y(t)?t.value=h:null),name:"confirmation",type:"password",required:"true",enterkeyhint:"send",disabled:l.state=="Recovering"},null,8,["modelValue","disabled"]),s(e(E),{slot:"error"},{default:a(()=>[n(I(e(r).confirmation),1)]),_:1})]),_:1},8,["class"])]),_:1}),s(e(A),{class:"absolute bottom-3.5 left-3.5 right-3.5",expand:"full",disabled:!e(_).valid||l.state=="Recovering",onClick:e(i)},{default:a(()=>[l.state=="Recovering"?(p(),D(e(k),{key:0,slot:"icon-only"})):(p(),g(B,{key:1},[W],64))]),_:1},8,["disabled","onClick"])]))}}),se=n("Mein Passwort"),ae={class:"p-4"},re=x({setup(l){const u=T(null),{updatePasswort:f}=U(),{replace:w}=Y(),r=Z({id:"PasswordRecovery",initial:"AwaitingPassword",states:{AwaitingPassword:{on:{RECOVERY_REQUESTED:{target:"Recovering",actions:"recoverPassword"}}},Recovering:{on:{RECOVERY_SUCCEEDED:{target:"AwaitingPassword",actions:["toastSuccess","clearForm","exit"]},RECOVERY_FAILED:{target:"AwaitingPassword",actions:"toastFailure"}}}}},{actions:{toastSuccess:async()=>{(await P.create({message:"Dein Passwort wurde gespeichert.",color:"success",duration:2e3})).present()},toastFailure:async()=>{(await P.create({message:"Dein Passwort konnte nicht gespeichert werden. Bitte versuche es sp\xE4ter erneut.",color:"danger",duration:2e3})).present()},clearForm:()=>{var t;return(t=u.value)==null?void 0:t.clear()},exit:()=>w("/"),recoverPassword:async(t,i)=>{try{await f(i.password),d("RECOVERY_SUCCEEDED")}catch{d("RECOVERY_FAILED")}}}}),{state:_,send:d}=H(r,{devTools:!1}),c=O(()=>_.value.value);return(t,i)=>(p(),D(e(z),null,{default:a(()=>[s(e(L),null,{default:a(()=>[s(e(N),null,{default:a(()=>[s(e(M),null,{default:a(()=>[se]),_:1})]),_:1})]),_:1}),s(e($),null,{default:a(()=>[q("div",ae,[s(ee,{ref_key:"form",ref:u,state:e(c),onSubmit:i[0]||(i[0]=o=>e(d)("RECOVERY_REQUESTED",o))},null,8,["state"])])]),_:1})]),_:1}))}});export{re as default};
