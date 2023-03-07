import{d as k,o as w,k as b,a as n,w as s,M as h,u as e,E as C,L as m,Y as g,v as B,V as S,N as I,l as v,S as y,y as x,z as T,q as E,c as V,B as $,a3 as D,D as N,ak as F,G as M,h as P,i as j,ay as q}from"./index.18e73127.js";import{_ as z}from"./BarcodeScanner.2b49cb7c.js";import{a as A}from"./ui.c9bf80f1.js";var G="/assets/logo-comic-tempel.a6b5d799.jpg";const H=v("img",{src:G},null,-1),L=k({__name:"ShopCardComicTempel",props:{isConnected:{type:Boolean}},emits:["connect","disconnect"],setup(a,{emit:c}){const i=d=>{/^B!\w+!\w$/.test(d)?(y.dismiss(),c("connect",d)):A({message:"Das ist keine Tempel-Card",color:"warning"})},l=()=>{c("disconnect")};return(d,r)=>(w(),b(I,null,[n(e(B),{class:"text-center"},{default:s(()=>[H,h(n(e(C),{id:"scan-tempel-card",fill:"clear"},{default:s(()=>[m("Tempel-Card scannen")]),_:1},512),[[g,!a.isConnected]]),h(n(e(C),{fill:"clear",onClick:l},{default:s(()=>[m("Verbindung trennen")]),_:1},512),[[g,a.isConnected]])]),_:1}),n(e(S),{class:"barcode-scanner",trigger:"scan-tempel-card","initial-breakpoint":1,breakpoints:[0,1]},{default:s(()=>[n(z,{onScanned:i})]),_:1},8,["initial-breakpoint","breakpoints"])],64))}}),U=()=>{const{client:a}=E(),{currentUser:c}=x(),i=T([]),l=async()=>{const{data:o,error:t}=await a.from("user_shops").select();if(t)throw new Error(t.message);i.value=o},d=async(o,t)=>{var _,f;const{error:u}=await a.from("user_shops").upsert({user_id:(f=(_=c.value)==null?void 0:_.id)!=null?f:"",shop_name:o,shop_user_id:t.trim()});if(u)throw Error(u.message)},r=async o=>{var u;const{error:t}=await a.from("user_shops").delete().match({user_id:(u=c.value)==null?void 0:u.id,shop_name:o});if(t)throw Error(t.message)},p=o=>i.value.find(({shop_name:t})=>t==o);return a.channel("any").on("postgres_changes",{event:"*",schema:"public",table:"user_shops"},l).subscribe(),l(),{findConnection:p,connectShop:d,disconnectShop:r}},Y={class:"p-8"},Q=k({__name:"ShopPage",setup(a){const{connectShop:c,disconnectShop:i,findConnection:l}=U();return(d,r)=>{const p=q("Feature");return w(),V(e(j),null,{default:s(()=>[n(e(M),null,{default:s(()=>[n(e($),null,{default:s(()=>[n(e(D),null,{default:s(()=>[m("Meine Shops")]),_:1}),n(e(N),{slot:"start"},{default:s(()=>[n(e(F),{"default-href":"/",text:""})]),_:1})]),_:1})]),_:1}),n(e(P),null,{default:s(()=>[v("div",Y,[n(p,{"feature-key":"shopsComicTempel"},{default:s(()=>[n(L,{"is-connected":e(l)("comic-tempel")!==void 0,onConnect:r[0]||(r[0]=o=>e(c)("comic-tempel",o)),onDisconnect:r[1]||(r[1]=o=>e(i)("comic-tempel"))},null,8,["is-connected"])]),_:1})])]),_:1})]),_:1})}}});export{Q as default};
