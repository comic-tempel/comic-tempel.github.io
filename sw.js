if(!self.define){let s,e={};const i=(i,n)=>(i=new URL(i+".js",n).href,e[i]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=i,s.onload=e,document.head.appendChild(s)}else s=i,importScripts(i),e()})).then((()=>{let s=e[i];if(!s)throw new Error(`Module ${i} didn’t register its module`);return s})));self.define=(n,l)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let a={};const o=s=>i(s,r),u={module:{uri:r},exports:a,require:o};e[r]=Promise.all(n.map((s=>u[s]||o(s)))).then((s=>(l(...s),a)))}}define(["./workbox-2ce1b432"],(function(s){"use strict";self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"assets/AuthPage.605de7db.js",revision:null},{url:"assets/barcode-worker.5819c62b.js",revision:null},{url:"assets/BarcodeScanner.9ae2f6af.js",revision:null},{url:"assets/BarcodeScannerModal.22f13637.js",revision:null},{url:"assets/CenteredMessage.8d51280f.js",revision:null},{url:"assets/CollectionDetailsPage.83eb08f9.js",revision:null},{url:"assets/collections.11929fa2.js",revision:null},{url:"assets/css-shim-8775d9ad-556f0cc2.08197ff8.js",revision:null},{url:"assets/dayjs.min.8dd6be1e.js",revision:null},{url:"assets/index.2d43f867.js",revision:null},{url:"assets/index.79d194cd.js",revision:null},{url:"assets/index10.e39169c7.js",revision:null},{url:"assets/input-shims.54ded992.js",revision:null},{url:"assets/ios.transition.307488a7.js",revision:null},{url:"assets/MangaDetailsPage.9145a38e.js",revision:null},{url:"assets/MangaEditorPage.e95c37ef.js",revision:null},{url:"assets/mangas.c8090743.js",revision:null},{url:"assets/md.transition.37750187.js",revision:null},{url:"assets/PasswordRecoveryPage.0dee9c4d.js",revision:null},{url:"assets/PasswordResetPage.f54d6fdf.js",revision:null},{url:"assets/plugin-vue_export-helper.21dcd24c.js",revision:null},{url:"assets/ProfilePage.2c7e0533.js",revision:null},{url:"assets/shadow-css-d7d058ec-d59cb009.1456af87.js",revision:null},{url:"assets/ShopPage.ca3a7766.js",revision:null},{url:"assets/status-tap.f3ab7d0d.js",revision:null},{url:"assets/style.afdec49f.css",revision:null},{url:"assets/swipe-back.e19efb4d.js",revision:null},{url:"assets/swiper.bundle.a76d5250.js",revision:null},{url:"assets/TransitionToggleSlideDown.3372b6f6.js",revision:null},{url:"assets/ui.82bacb6e.js",revision:null},{url:"assets/useMachine.47045379.js",revision:null},{url:"assets/validation.e50bc88d.js",revision:null},{url:"assets/WikiExplorerPage.704b31c7.js",revision:null},{url:"assets/WikiImg.7770569c.js",revision:null},{url:"assets/WikiLibraryPage.ee006f5a.js",revision:null},{url:"assets/WikiPage.60b8cd2d.js",revision:null},{url:"index.html",revision:"26121d23fce2b2d332374a45dd9a44d3"},{url:"./img/icons/android-chrome-192x192.png",revision:"b4b49beb38e8b88c2144b0e42dc3894e"},{url:"./img/icons/android-chrome-512x512.png",revision:"0fe24e81683fc97411c6204d9584b10d"},{url:"./img/icons/android-chrome-maskable-192x192.png",revision:"b4b49beb38e8b88c2144b0e42dc3894e"},{url:"./img/icons/android-chrome-maskable-512x512.png",revision:"0fe24e81683fc97411c6204d9584b10d"},{url:"./img/icons/apple-touch-icon-60x60.png",revision:"4ef240cdba4f25b361fc9601b156eb77"},{url:"./img/icons/apple-touch-icon-76x76.png",revision:"3056ca7744bb8e636d979fce6f8c520c"},{url:"./img/icons/apple-touch-icon-120x120.png",revision:"51b6d79e4bb30d9ad58288a84e28a55e"},{url:"./img/icons/apple-touch-icon-152x152.png",revision:"6178ab6061f13845706626cffdf69c08"},{url:"./img/icons/apple-touch-icon-180x180.png",revision:"302d2c4fd06daa9080bbfd347fd695bf"},{url:"./img/icons/apple-touch-icon.png",revision:"302d2c4fd06daa9080bbfd347fd695bf"},{url:"./img/icons/favicon-16x16.png",revision:"046aa2b138548856f4d2fed33267db67"},{url:"./img/icons/favicon-32x32.png",revision:"e981048afb3dcd44610a1dd363a37bce"},{url:"./img/icons/msapplication-icon-144x144.png",revision:"11e01caa3b98184c5dc747a423bc7869"},{url:"./img/icons/mstile-150x150.png",revision:"42bc3a7f4a6931b029d0829fae739580"},{url:"manifest.webmanifest",revision:"0482f6440510e32e0af603febc87299e"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html"))),s.registerRoute(/https:\/\/manga-wiki-media.sit.institute/,new s.StaleWhileRevalidate,"GET")}));
