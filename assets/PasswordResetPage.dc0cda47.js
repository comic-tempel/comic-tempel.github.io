import{d as f,o as n,q as d,a as t,w as s,u as e,Z as w,c as m,a7 as h,F as S,f as p,b as u,Q as x,X as E,O as I,z as k,i as R,e as T,U as b,I as D,h as F,y as P}from"./index.03df7e20.js";import{c as A,u as B}from"./useMachine.2d3f02d4.js";const v=u("Dein Passwort kann nur mit Hilfe Deiner E-Mail Adresse ge\xE4ndert werden. Wir schicken Dir einen Link der Dich zum Formular f\xFCr ein neues Passwort f\xFChrt. M\xF6chtest Du ein neues Passwort vergeben, bet\xE4tige jetzt den Button."),y=u("Link anfordern"),C=f({props:{state:null},emits:["reset"],setup(o){return(r,a)=>(n(),d("div",null,[t(e(w),null,{default:s(()=>[v]),_:1}),t(e(p),{class:"absolute bottom-3.5 left-3.5 right-3.5",expand:"full",disabled:o.state=="SendingEmail",onClick:a[0]||(a[0]=i=>r.$emit("reset"))},{default:s(()=>[o.state=="SendingEmail"?(n(),m(e(h),{key:0,slot:"icon-only"})):(n(),d(S,{key:1},[y],64))]),_:1},8,["disabled"])]))}}),L=u("Passwort \xE4ndern"),z=f({setup(o){const{requestPasswordReset:r}=x(),a=A({id:"PasswordResetPage",initial:"AwaitingReset",states:{AwaitingReset:{on:{RESET_REQUESTED:{target:"SendingEmail",actions:"resetPassword"}}},SendingEmail:{on:{MAIL_SENT:{target:"AwaitingReset",actions:"toastSuccess"},RESET_FAILED:{target:"AwaitingReset",actions:"toastFailure"}}}}},{actions:{toastSuccess:async()=>{(await E.create({message:"Wir haben Dir eine E-Mail geschickt.",color:"success",duration:3e3})).present()},toastFailure:async()=>{(await E.create({message:"Leider k\xF6nnen wir Dein Passwort aktuell nicht \xE4ndern. Bitte versuche es sp\xE4ter erneut.",color:"danger",duration:3e3})).present()},resetPassword:async()=>{try{await r(),l("MAIL_SENT")}catch{l("RESET_FAILED")}}}}),{state:i,send:l}=B(a,{devTools:!1}),g=I(()=>i.value.value);return(_,c)=>(n(),m(e(k),null,{default:s(()=>[t(e(R),null,{default:s(()=>[t(e(F),null,{default:s(()=>[t(e(T),{slot:"start"},{default:s(()=>[t(e(b),{text:"","default-href":"/",disabled:e(i).matches("SendingEmail")},null,8,["disabled"])]),_:1}),t(e(D),null,{default:s(()=>[L]),_:1})]),_:1})]),_:1}),t(e(P),null,{default:s(()=>[t(C,{class:"p-4",state:e(g),onReset:c[0]||(c[0]=M=>e(l)("RESET_REQUESTED"))},null,8,["state"])]),_:1})]),_:1}))}});export{z as default};
