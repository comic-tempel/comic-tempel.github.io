import{d as m,o as n,z as d,a as t,w as s,u as e,a0 as w,c as f,a9 as h,F as p,l as S,p as u,T as k,_ as E,R as x,i as I,j as R,k as T,X as b,m as D,n as F,h as P}from"./index.13e5300e.js";import{c as A,u as B}from"./useMachine.ecb54bd2.js";const v=u("Dein Passwort kann nur mit Hilfe Deiner E-Mail Adresse ge\xE4ndert werden. Wir schicken Dir einen Link der Dich zum Formular f\xFCr ein neues Passwort f\xFChrt. M\xF6chtest Du ein neues Passwort vergeben, bet\xE4tige jetzt den Button."),y=u("Link anfordern"),C=m({props:{state:null},emits:["reset"],setup(o){return(r,a)=>(n(),d("div",null,[t(e(w),null,{default:s(()=>[v]),_:1}),t(e(S),{class:"absolute bottom-3.5 left-3.5 right-3.5",expand:"full",disabled:o.state=="SendingEmail",onClick:a[0]||(a[0]=i=>r.$emit("reset"))},{default:s(()=>[o.state=="SendingEmail"?(n(),f(e(h),{key:0,slot:"icon-only"})):(n(),d(p,{key:1},[y],64))]),_:1},8,["disabled"])]))}}),L=u("Passwort \xE4ndern"),z=m({setup(o){const{requestPasswordReset:r}=k(),a=A({id:"PasswordResetPage",initial:"AwaitingReset",states:{AwaitingReset:{on:{RESET_REQUESTED:{target:"SendingEmail",actions:"resetPassword"}}},SendingEmail:{on:{MAIL_SENT:{target:"AwaitingReset",actions:"toastSuccess"},RESET_FAILED:{target:"AwaitingReset",actions:"toastFailure"}}}}},{actions:{toastSuccess:async()=>{(await E.create({message:"Wir haben Dir eine E-Mail geschickt.",color:"success",duration:3e3})).present()},toastFailure:async()=>{(await E.create({message:"Leider k\xF6nnen wir Dein Passwort aktuell nicht \xE4ndern. Bitte versuche es sp\xE4ter erneut.",color:"danger",duration:3e3})).present()},resetPassword:async()=>{try{await r(),l("MAIL_SENT")}catch{l("RESET_FAILED")}}}}),{state:i,send:l}=B(a,{devTools:!1}),_=x(()=>i.value.value);return(g,c)=>(n(),f(e(I),null,{default:s(()=>[t(e(R),{class:"ion-no-border"},{default:s(()=>[t(e(F),null,{default:s(()=>[t(e(T),{slot:"start"},{default:s(()=>[t(e(b),{text:"","default-href":"/",disabled:e(i).matches("SendingEmail")},null,8,["disabled"])]),_:1}),t(e(D),null,{default:s(()=>[L]),_:1})]),_:1})]),_:1}),t(e(P),null,{default:s(()=>[t(C,{class:"p-4",state:e(_),onReset:c[0]||(c[0]=M=>e(l)("RESET_REQUESTED"))},null,8,["state"])]),_:1})]),_:1}))}});export{z as default};
