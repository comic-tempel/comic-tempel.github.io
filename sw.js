if(!self.define){let s,e={};const i=(i,l)=>(i=new URL(i+".js",l).href,e[i]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=i,s.onload=e,document.head.appendChild(s)}else s=i,importScripts(i),e()})).then((()=>{let s=e[i];if(!s)throw new Error(`Module ${i} didn’t register its module`);return s})));self.define=(l,n)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let a={};const t=s=>i(s,r),u={module:{uri:r},exports:a,require:t};e[r]=Promise.all(l.map((s=>u[s]||t(s)))).then((s=>(n(...s),a)))}}define(["./workbox-2ce1b432"],(function(s){"use strict";self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"assets/css-shim-8775d9ad-556f0cc2.08197ff8.js",revision:null},{url:"assets/index.6636f647.js",revision:null},{url:"assets/input-shims.687f3022.js",revision:null},{url:"assets/LoginPage.be2de8fc.js",revision:null},{url:"assets/MangaDetailsPage.07a857ef.js",revision:null},{url:"assets/MangaListPage.a2b31e06.js",revision:null},{url:"assets/mangas.217a4761.js",revision:null},{url:"assets/PasswordRecoveryPage.f323ef4d.js",revision:null},{url:"assets/PasswordResetPage.b09f1442.js",revision:null},{url:"assets/plugin-vue_export-helper.a0ead400.js",revision:null},{url:"assets/ProfilePage.1c3e4188.js",revision:null},{url:"assets/shadow-css-d7d058ec-d59cb009.1456af87.js",revision:null},{url:"assets/status-tap.03893aef.js",revision:null},{url:"assets/style.803aef3c.css",revision:null},{url:"assets/swipe-back.d7ecce53.js",revision:null},{url:"assets/swiper.bundle.a76d5250.js",revision:null},{url:"assets/tap-click.6a41f15e.js",revision:null},{url:"assets/useMachine.7746c2a6.js",revision:null},{url:"assets/validation.478ffba9.js",revision:null},{url:"assets/vendor.4c1cb8ec.js",revision:null},{url:"index.html",revision:"7230fb0f8d8f82796c40ce2c022e8fcd"},{url:"mockServiceWorker.js",revision:"c7c4b4de407033acc9b8b8f87998dfa2"},{url:"manifest.webmanifest",revision:"bda1555c52723afcec8907fbc8c02d03"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html"))),s.registerRoute(/^https:\/\/manga-wiki\.medien-dresden\.de\/.*/i,new s.StaleWhileRevalidate({cacheName:"vlb-assets",plugins:[]}),"GET")}));
