import{d as P,P as R,o as m,x as E,a,w as t,u as e,a8 as I,X as k,L as f,ag as S,ak as b,al as A,af as C,z as r,M as D,s as $,c as x,a5 as K,F as B,n as L,K as T,r as F,k as Q,j,a0 as W,am as z,an as X,t as J,v as Y,B as Z,O as ee,ao as ae,ap as te,aq as se,ar as G,N as oe,H as O,h as ne,i as ie,a9 as le,aa as re}from"./index.2d6df163.js";import{u as U,t as M,o as H,e as q,p as V,a as N}from"./validation.55c7b954.js";import{a as de}from"./ui.a8e2d16f.js";import{_ as ue}from"./plugin-vue_export-helper.21dcd24c.js";import{c as ce,u as me}from"./useMachine.80136349.js";var fe="/assets/header.d375a6b9.jpg";const pe=r("E-Mail Adresse"),ge=r("Passwort"),_e=r("anmelden"),he=P({props:{email:{default:void 0},password:{default:void 0},isBusy:{type:Boolean,default:!1}},emits:["submit"],setup(o,{expose:p,emit:g}){const _=o,{handleSubmit:h,errors:d,meta:y,resetForm:w}=U({validationSchema:M(H({email:q,password:V}))}),{value:l}=N("email"),{value:u}=N("password"),i=h(s=>g("submit",s));return R(()=>l.value=_.email),R(()=>u.value=_.password),p({reset:w}),(s,n)=>(m(),E(B,null,[a(e($),{class:"m-0",lines:"full"},{default:t(()=>[a(e(I),{class:k({"ion-invalid":e(d).email})},{default:t(()=>[a(e(f),{position:"floating"},{default:t(()=>[pe]),_:1}),a(e(S),{modelValue:e(l),"onUpdate:modelValue":n[0]||(n[0]=c=>b(l)?l.value=c:null),name:"email",type:"email",autocomplete:"email",inputmode:"email",required:"true",enterkeyhint:"next",autofocus:!0,disabled:o.isBusy,onKeyup:A(e(i),["enter"])},null,8,["modelValue","disabled","onKeyup"]),a(e(C),{slot:"error"},{default:t(()=>[r(D(e(d).email),1)]),_:1})]),_:1},8,["class"]),a(e(I),{class:k({"ion-invalid":e(d).password})},{default:t(()=>[a(e(f),{position:"floating"},{default:t(()=>[ge]),_:1}),a(e(S),{modelValue:e(u),"onUpdate:modelValue":n[1]||(n[1]=c=>b(u)?u.value=c:null),name:"password",type:"password",required:"true",enterkeyhint:"send",disabled:o.isBusy,onKeyup:A(e(i),["enter"])},null,8,["modelValue","disabled","onKeyup"]),a(e(C),{slot:"error"},{default:t(()=>[r(D(e(d).password),1)]),_:1})]),_:1},8,["class"])]),_:1}),a(e(L),{class:"mt-5",expand:"full",disabled:!e(y).valid||o.isBusy,onClick:e(i)},{default:t(()=>[o.isBusy?(m(),x(e(K),{key:0,slot:"icon-only"})):(m(),E(B,{key:1},[_e],64))]),_:1},8,["disabled","onClick"])],64))}}),ye={key:0,class:"text-center"},we=T("div",{class:"text-5xl py-8 block"},"\u{1F389}",-1),ve=T("div",{class:"block"},"Du hast Dich erfolgreich angemeldet! Bitte \xF6ffne Dein Postfach und klick auf den Best\xE4tigungslink in unserer Nachricht.",-1),Ee=[we,ve],Ie=r("E-Mail Adresse"),ke=r("sicheres Passwort"),Se=r("Passwort wiederholen"),be=r("ich bin dabei!"),Ae=P({props:{email:{default:void 0},isBusy:{type:Boolean,default:!1},isDone:{type:Boolean,default:!1}},emits:["submit"],setup(o,{expose:p,emit:g}){const _=o,{handleSubmit:h,errors:d,meta:y,resetForm:w}=U({validationSchema:M(H({email:q,password:V,confirmation:V.nonempty("Bitte wiederhole das Passwort")}).refine(n=>n.password==n.confirmation,{message:"Die Passw\xF6rter stimmen nicht \xFCberein",path:["confirmation"]}))}),{value:l}=N("email"),{value:u}=N("password"),{value:i}=N("confirmation"),s=h(n=>g("submit",n));return R(()=>l.value=_.email),p({reset:w}),(n,c)=>o.isDone?(m(),E("div",ye,Ee)):(m(),E(B,{key:1},[a(e($),{class:"m-0",lines:"full"},{default:t(()=>[a(e(I),{class:k({"ion-invalid":e(d).email})},{default:t(()=>[a(e(f),{position:"floating"},{default:t(()=>[Ie]),_:1}),a(e(S),{modelValue:e(l),"onUpdate:modelValue":c[0]||(c[0]=v=>b(l)?l.value=v:null),name:"email",type:"email",autocomplete:"email",inputmode:"email",required:"true",enterkeyhint:"next",autofocus:!0,disabled:o.isBusy,onKeyup:A(e(s),["enter"])},null,8,["modelValue","disabled","onKeyup"]),a(e(C),{slot:"error"},{default:t(()=>[r(D(e(d).email),1)]),_:1})]),_:1},8,["class"]),a(e(I),{class:k({"ion-invalid":e(d).password})},{default:t(()=>[a(e(f),{position:"floating"},{default:t(()=>[ke]),_:1}),a(e(S),{modelValue:e(u),"onUpdate:modelValue":c[1]||(c[1]=v=>b(u)?u.value=v:null),name:"password",type:"password",required:"true",enterkeyhint:"send",disabled:o.isBusy,onKeyup:A(e(s),["enter"])},null,8,["modelValue","disabled","onKeyup"]),a(e(C),{slot:"error"},{default:t(()=>[r(D(e(d).password),1)]),_:1})]),_:1},8,["class"]),a(e(I),{class:k({"ion-invalid":e(d).confirmation})},{default:t(()=>[a(e(f),{position:"floating"},{default:t(()=>[Se]),_:1}),a(e(S),{modelValue:e(i),"onUpdate:modelValue":c[2]||(c[2]=v=>b(i)?i.value=v:null),name:"confirmation",type:"password",required:"true",enterkeyhint:"send",disabled:o.isBusy,onKeyup:A(e(s),["enter"])},null,8,["modelValue","disabled","onKeyup"]),a(e(C),{slot:"error"},{default:t(()=>[r(D(e(d).confirmation),1)]),_:1})]),_:1},8,["class"])]),_:1}),a(e(L),{class:"mt-5",expand:"full",disabled:!e(y).valid||o.isBusy,onClick:e(s)},{default:t(()=>[o.isBusy?(m(),x(e(K),{key:0,slot:"icon-only"})):(m(),E(B,{key:1},[be],64))]),_:1},8,["disabled","onClick"])],64))}});const Ce=o=>(le("data-v-06aa5742"),o=o(),re(),o),De=Ce(()=>T("img",{class:"w-full",src:fe,alt:"Manga Wiki Kopzeile"},null,-1)),xe=r("Manga Wiki"),Ne=r("Anmeldung"),Be=r("Neu hier?"),Re=P({setup(o){const p=F(null),g=F(null),{login:_,register:h,currentSession:d}=Q(),{replace:y}=j(),w=ce({id:"Auth",initial:"Login",schema:{events:{}},on:{SESSION_CHANGED:{cond:"isAuthenticated",target:"Login.Authenticated"}},states:{Login:{initial:"AwaitingCredentials",on:{MODE_CHANGED:"Registration"},states:{AwaitingCredentials:{on:{LOGIN_REQUESTED:{target:"Processing"}}},Processing:{invoke:{src:"login",onDone:"Authenticated",onError:{actions:"showError",target:"AwaitingCredentials"}}},Authenticated:{type:"final",entry:"enterWiki"}}},Registration:{initial:"AwaitingCredentials",on:{MODE_CHANGED:"Login"},states:{AwaitingCredentials:{on:{REGISTRATION_REQUESTED:{target:"Processing"}}},Processing:{invoke:{src:"register",onDone:"Registered",onError:{actions:"showError",target:"AwaitingCredentials"}}},Registered:{type:"final"}}}}},{actions:{showError:(i,s)=>{var n;return de({message:(n=s.data)!=null?n:"Das hat leider nicht geklappt...",color:"danger"})},enterWiki:()=>y({name:"WikiPage"})},services:{login:(i,s)=>s.type==="LOGIN_REQUESTED"?_(s):Promise.reject(),register:(i,s)=>s.type==="REGISTRATION_REQUESTED"?h(s):Promise.reject()},guards:{isAuthenticated:(i,s)=>s.type==="SESSION_CHANGED"?s.isAuthenticated:!1}}),{state:l,send:u}=me(w,{devTools:!1});return W(()=>d,i=>u("SESSION_CHANGED",{isAuthenticated:i!=null})),z(()=>u("SESSION_CHANGED",{isAuthenticated:d.value!=null})),X(()=>{var i,s;(i=p.value)==null||i.reset(),(s=g.value)==null||s.reset()}),(i,s)=>(m(),x(e(ie),null,{default:t(()=>[a(e(ne),null,{default:t(()=>[a(e(J),{class:"h-full"},{default:t(()=>[a(e(Y),{class:"h-full"},{default:t(()=>[a(e(Z),{class:"align-top md:flex md:align-middle"},{default:t(()=>[a(e(ee),{class:"rounded-none shadow-none m-auto w-full md:w-96 md:rounded-xl md:shadow-xl"},{default:t(()=>[De,a(e(ae),null,{default:t(()=>[a(e(te),null,{default:t(()=>[xe]),_:1}),a(e(se),{class:"mt-4",value:"login",onIonChange:s[0]||(s[0]=n=>e(u)("MODE_CHANGED"))},{default:t(()=>[a(e(G),{value:"login"},{default:t(()=>[a(e(f),null,{default:t(()=>[Ne]),_:1})]),_:1}),a(e(G),{value:"registration"},{default:t(()=>[a(e(f),null,{default:t(()=>[Be]),_:1})]),_:1})]),_:1})]),_:1}),a(e(oe),null,{default:t(()=>[e(l).matches("Login")?(m(),x(he,{key:0,ref_key:"loginForm",ref:p,"is-busy":e(l).matches("Login.Processing"),onSubmit:s[1]||(s[1]=n=>e(u)("LOGIN_REQUESTED",n))},null,8,["is-busy"])):O("",!0),e(l).matches("Registration")?(m(),x(Ae,{key:1,ref_key:"registrationForm",ref:g,"is-busy":e(l).matches("Registration.Processing"),"is-done":e(l).matches("Registration.Registered"),onSubmit:s[2]||(s[2]=n=>e(u)("REGISTRATION_REQUESTED",n))},null,8,["is-busy","is-done"])):O("",!0)]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}))}});var Oe=ue(Re,[["__scopeId","data-v-06aa5742"]]);export{Oe as default};
