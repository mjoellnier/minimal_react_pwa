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
    "revision": "c3d665d96f095cfc0e10432ad7ed7a30"
  },
  {
    "url": "index.html",
    "revision": "1ed7984a197babc9595df6e3783fb18b"
  },
  {
    "url": "manifest.json",
    "revision": "9f5218285de5e95e23067fcd85b11bd7"
  },
  {
    "url": "static/css/main.66253d8c.chunk.css",
    "revision": "9c9bb2ba3703ed141d1c38fc137b17de"
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
