var g=Object.defineProperty,q=Object.defineProperties;var A=Object.getOwnPropertyDescriptors;var _=Object.getOwnPropertySymbols;var E=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable;var d=(s,r,e)=>r in s?g(s,r,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[r]=e,u=(s,r)=>{for(var e in r||(r={}))E.call(r,e)&&d(s,e,r[e]);if(_)for(var e of _(r))k.call(r,e)&&d(s,e,r[e]);return s},v=(s,r)=>q(s,A(r));import{y as x,ar as S,z as p,A as b,az as U,q as z}from"./index.79d194cd.js";import{e as C}from"./mangas.c8090743.js";const{client:w,proxyUrlFor:F}=z(),P=s=>{const r=p([]);return b(async()=>{const e=w.from("collections").select().limit(10);s.value&&e.textSearch("collection_name",s.value,{type:"phrase"});const{data:a,error:i}=await e;if(i)throw Error(i.message);r.value=a.map(n=>{var o;return v(u({},n),{cover:F((o=n.cover)!=null?o:"","s")})})}),{collections:U(r)}},j=s=>{const{hasPermission:r}=x(),e=S({name:null,publisherName:"",coverUrl:"",contributors:[],keywords:[]}),a=p([]),i=async n=>{var m,y;const o=w.from("mangas").select("*,user_vlb_library(*)");r("contribution.change_visibility")||o.is("is_visible",!0);const{data:t,error:f}=await o.eq("collection_id",n).order("date_published",{ascending:!1});if(f)throw Error(f.message);t!=null&&t.length>0&&(t.forEach(l=>{var h;let c;l.user_vlb_library!==null&&Array.isArray(l.user_vlb_library)&&l.user_vlb_library.length>0&&(c=(h=l.user_vlb_library[0].shelf)!=null?h:void 0),a.value.push(v(u({},C(l)),{shelf:c}))}),e.name=(m=t[0].collection_name)!=null?m:null,e.publisherName=t[0].publisher_name,e.coverUrl=(y=a.value.map(l=>l.cover("m")).find(l=>l!=null))!=null?y:"",e.keywords=[...new Set(a.value.flatMap(({keywords:l})=>l))],e.contributors=[...new Set(a.value.flatMap(({contributors:l})=>l==null?void 0:l.map(({name:c})=>c)))])};return b(()=>i(s.value)),{mangas:a,collection:e}};export{j as a,P as u};
