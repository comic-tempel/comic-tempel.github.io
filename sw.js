if(!self.define){let s,e={};const i=(i,l)=>(i=new URL(i+".js",l).href,e[i]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=i,s.onload=e,document.head.appendChild(s)}else s=i,importScripts(i),e()})).then((()=>{let s=e[i];if(!s)throw new Error(`Module ${i} didn’t register its module`);return s})));self.define=(l,n)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let a={};const t=s=>i(s,r),u={module:{uri:r},exports:a,require:t};e[r]=Promise.all(l.map((s=>u[s]||t(s)))).then((s=>(n(...s),a)))}}define(["./workbox-2ce1b432"],(function(s){"use strict";self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"assets/css-shim-8775d9ad-556f0cc2.08197ff8.js",revision:null},{url:"assets/index.8c079ea2.js",revision:null},{url:"assets/input-shims.ec7cb342.js",revision:null},{url:"assets/LoginPage.cd20012c.js",revision:null},{url:"assets/MangaDetailsPage.285f1393.js",revision:null},{url:"assets/MangaListPage.a11237f2.js",revision:null},{url:"assets/mangas.199bb48e.js",revision:null},{url:"assets/PasswordRecoveryPage.b673713f.js",revision:null},{url:"assets/PasswordResetPage.c99a068b.js",revision:null},{url:"assets/plugin-vue_export-helper.13d32ddf.js",revision:null},{url:"assets/ProfilePage.5781563d.js",revision:null},{url:"assets/shadow-css-d7d058ec-d59cb009.1456af87.js",revision:null},{url:"assets/status-tap.989190e8.js",revision:null},{url:"assets/style.cd691b3c.css",revision:null},{url:"assets/swipe-back.c27a5c6f.js",revision:null},{url:"assets/swiper.bundle.a76d5250.js",revision:null},{url:"assets/tap-click.b6088e43.js",revision:null},{url:"assets/useMachine.27909c58.js",revision:null},{url:"assets/validation.6b613935.js",revision:null},{url:"assets/vendor.30967a74.js",revision:null},{url:"index.html",revision:"97e417f395b0c8f36ded1386a346079f"},{url:"mockServiceWorker.js",revision:"c7c4b4de407033acc9b8b8f87998dfa2"},{url:"manifest.webmanifest",revision:"bda1555c52723afcec8907fbc8c02d03"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html"))),s.registerRoute(/^https:\/\/manga-wiki\.medien-dresden\.de\/.*/i,new s.StaleWhileRevalidate({cacheName:"vlb-assets",plugins:[]}),"GET")}));
