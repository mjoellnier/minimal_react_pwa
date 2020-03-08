/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

workbox.core.skipWaiting();

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "asset-manifest.json",
    "revision": "f706e012a1fd2a31cc4bdc2f5e5205c7"
  },
  {
    "url": "index.html",
    "revision": "c3862dd07455db54c7703b629bf34f4f"
  },
  {
    "url": "manifest.json",
    "revision": "3316d4715b982764fcc63ba2e0caf450"
  },
  {
    "url": "static/css/main.ab54b556.chunk.css",
    "revision": "b3d8e5edfb3a37c9a49c5fb19799f188"
  },
  {
    "url": "static/js/2.aa3d2a92.chunk.js",
    "revision": "d36a5dc6b31c9880ac6daf9505260e8d"
  },
  {
    "url": "static/js/main.263bab65.chunk.js",
    "revision": "1d500e85b55ca59a246214069ba57633"
  },
  {
    "url": "static/js/runtime-main.c56ba5d1.js",
    "revision": "b340baf005b924cb3bbebb2d2ac927f1"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|svg)$/, new workbox.strategies.CacheFirst({ "cacheName":"images", plugins: [new workbox.expiration.Plugin({ maxEntries: 10, purgeOnQuotaError: false })] }), 'GET');
workbox.routing.registerRoute(/https:\/\/jsonplaceholder.typicode.com/, new workbox.strategies.NetworkFirst({ "cacheName":"api-calls", plugins: [] }), 'GET');
