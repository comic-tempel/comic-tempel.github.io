if(!self.define){let s,e={};const i=(i,n)=>(i=new URL(i+".js",n).href,e[i]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=i,s.onload=e,document.head.appendChild(s)}else s=i,importScripts(i),e()})).then((()=>{let s=e[i];if(!s)throw new Error(`Module ${i} didn’t register its module`);return s})));self.define=(n,l)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let a={};const o=s=>i(s,r),u={module:{uri:r},exports:a,require:o};e[r]=Promise.all(n.map((s=>u[s]||o(s)))).then((s=>(l(...s),a)))}}define(["./workbox-2ce1b432"],(function(s){"use strict";self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"assets/AuthPage.61727330.js",revision:null},{url:"assets/barcode-worker.5819c62b.js",revision:null},{url:"assets/BarcodeScanner.0574de94.js",revision:null},{url:"assets/CenteredMessage.62587c10.js",revision:null},{url:"assets/CollectionDetailsPage.d27549c3.js",revision:null},{url:"assets/css-shim-8775d9ad-556f0cc2.08197ff8.js",revision:null},{url:"assets/dayjs.min.fce83730.js",revision:null},{url:"assets/index.10d7ba67.js",revision:null},{url:"assets/index.1a1d4649.js",revision:null},{url:"assets/index10.0448e35d.js",revision:null},{url:"assets/input-shims.8a504a71.js",revision:null},{url:"assets/ios.transition.6d40a6d8.js",revision:null},{url:"assets/MangaDetailsPage.d4969d44.js",revision:null},{url:"assets/MangaEditorPage.ac110fc9.js",revision:null},{url:"assets/mangas.cddc7dbb.js",revision:null},{url:"assets/md.transition.f6964562.js",revision:null},{url:"assets/PasswordRecoveryPage.36d15bc7.js",revision:null},{url:"assets/PasswordResetPage.17ff1ca7.js",revision:null},{url:"assets/plugin-vue_export-helper.21dcd24c.js",revision:null},{url:"assets/ProfilePage.4a4af0cf.js",revision:null},{url:"assets/shadow-css-d7d058ec-d59cb009.1456af87.js",revision:null},{url:"assets/ShopPage.7f469d54.js",revision:null},{url:"assets/status-tap.4fbb0341.js",revision:null},{url:"assets/style.7be4a994.css",revision:null},{url:"assets/swipe-back.839c1330.js",revision:null},{url:"assets/swiper.bundle.a76d5250.js",revision:null},{url:"assets/TransitionToggleSlideDown.e52ecbc2.js",revision:null},{url:"assets/ui.be55ac54.js",revision:null},{url:"assets/useMachine.c8999c58.js",revision:null},{url:"assets/validation.1ab13172.js",revision:null},{url:"assets/WikiExplorerPage.0e5a513f.js",revision:null},{url:"assets/WikiImg.c3ae7e8d.js",revision:null},{url:"assets/WikiLibraryPage.9f652755.js",revision:null},{url:"assets/WikiPage.0108e032.js",revision:null},{url:"index.html",revision:"cd512d273e8cb197f962b54502a278fe"},{url:"./img/icons/android-chrome-192x192.png",revision:"b4b49beb38e8b88c2144b0e42dc3894e"},{url:"./img/icons/android-chrome-512x512.png",revision:"0fe24e81683fc97411c6204d9584b10d"},{url:"./img/icons/android-chrome-maskable-192x192.png",revision:"b4b49beb38e8b88c2144b0e42dc3894e"},{url:"./img/icons/android-chrome-maskable-512x512.png",revision:"0fe24e81683fc97411c6204d9584b10d"},{url:"./img/icons/apple-touch-icon-60x60.png",revision:"4ef240cdba4f25b361fc9601b156eb77"},{url:"./img/icons/apple-touch-icon-76x76.png",revision:"3056ca7744bb8e636d979fce6f8c520c"},{url:"./img/icons/apple-touch-icon-120x120.png",revision:"51b6d79e4bb30d9ad58288a84e28a55e"},{url:"./img/icons/apple-touch-icon-152x152.png",revision:"6178ab6061f13845706626cffdf69c08"},{url:"./img/icons/apple-touch-icon-180x180.png",revision:"302d2c4fd06daa9080bbfd347fd695bf"},{url:"./img/icons/apple-touch-icon.png",revision:"302d2c4fd06daa9080bbfd347fd695bf"},{url:"./img/icons/favicon-16x16.png",revision:"046aa2b138548856f4d2fed33267db67"},{url:"./img/icons/favicon-32x32.png",revision:"e981048afb3dcd44610a1dd363a37bce"},{url:"./img/icons/msapplication-icon-144x144.png",revision:"11e01caa3b98184c5dc747a423bc7869"},{url:"./img/icons/mstile-150x150.png",revision:"42bc3a7f4a6931b029d0829fae739580"},{url:"manifest.webmanifest",revision:"0482f6440510e32e0af603febc87299e"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html"))),s.registerRoute(/https:\/\/manga-wiki-media.sit.institute/,new s.StaleWhileRevalidate,"GET")}));
