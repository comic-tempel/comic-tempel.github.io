if(!self.define){let s,e={};const i=(i,l)=>(i=new URL(i+".js",l).href,e[i]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=i,s.onload=e,document.head.appendChild(s)}else s=i,importScripts(i),e()})).then((()=>{let s=e[i];if(!s)throw new Error(`Module ${i} didn’t register its module`);return s})));self.define=(l,n)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let t={};const a=s=>i(s,r),u={module:{uri:r},exports:t,require:a};e[r]=Promise.all(l.map((s=>u[s]||a(s)))).then((s=>(n(...s),t)))}}define(["./workbox-2ce1b432"],(function(s){"use strict";self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"assets/AuthPage.d320bf29.js",revision:null},{url:"assets/css-shim-8775d9ad-556f0cc2.08197ff8.js",revision:null},{url:"assets/index.c4984c2c.js",revision:null},{url:"assets/input-shims.d60266ee.js",revision:null},{url:"assets/ios.transition.d15b5d61.js",revision:null},{url:"assets/MangaDetailsPage.e6cc2a5f.js",revision:null},{url:"assets/MangaEditorPage.6c7b9233.js",revision:null},{url:"assets/MangaListPage.6b66b865.js",revision:null},{url:"assets/mangas.e4879dd6.js",revision:null},{url:"assets/md.transition.4fc67e98.js",revision:null},{url:"assets/PasswordRecoveryPage.ec0a43e8.js",revision:null},{url:"assets/PasswordResetPage.eb1e3f3b.js",revision:null},{url:"assets/plugin-vue_export-helper.21dcd24c.js",revision:null},{url:"assets/ProfilePage.913133d1.js",revision:null},{url:"assets/shadow-css-d7d058ec-d59cb009.1456af87.js",revision:null},{url:"assets/status-tap.7a023c60.js",revision:null},{url:"assets/style.989f2eb6.css",revision:null},{url:"assets/swipe-back.270fd188.js",revision:null},{url:"assets/swiper.bundle.a76d5250.js",revision:null},{url:"assets/tap-click.766a4a0e.js",revision:null},{url:"assets/ui.c5a29218.js",revision:null},{url:"assets/useMachine.8ad8092e.js",revision:null},{url:"assets/validation.b252412e.js",revision:null},{url:"index.html",revision:"72a46c5f2e1a6fc6d5471226849f8eab"},{url:"mockServiceWorker.js",revision:"2d31259850ba228bfbbdad765f393bf0"},{url:"manifest.webmanifest",revision:"bda1555c52723afcec8907fbc8c02d03"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html"))),s.registerRoute(/https:\/\/manga-wiki-media.sit.institute/,new s.StaleWhileRevalidate,"GET")}));
