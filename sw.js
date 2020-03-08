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
    "revision": "42e5bcf0e086e962fbb0e0d1178f9ea9"
  },
  {
    "url": "index.html",
    "revision": "ceafd8c1f0737c84dfb50047061f5b4b"
  },
  {
    "url": "manifest.json",
    "revision": "a437af2d73bfc725cd2f47dc001f5c87"
  },
  {
    "url": "static/css/main.86818a6c.chunk.css",
    "revision": "039de2279353f7996bd0e72c4ed63eb5"
  },
  {
    "url": "static/js/2.aa3d2a92.chunk.js",
    "revision": "d36a5dc6b31c9880ac6daf9505260e8d"
  },
  {
    "url": "static/js/main.c8d00dc6.chunk.js",
    "revision": "6bf6850b1e915fdb6d6809cf083856a6"
  },
  {
    "url": "static/js/runtime-main.c56ba5d1.js",
    "revision": "b340baf005b924cb3bbebb2d2ac927f1"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|svg)$/, new workbox.strategies.CacheFirst({ "cacheName":"images", plugins: [new workbox.expiration.Plugin({ maxEntries: 10, purgeOnQuotaError: false })] }), 'GET');
workbox.routing.registerRoute(/https:\/\/jsonplaceholder.typicode.com/, new workbox.strategies.NetworkFirst({ "cacheName":"api-calls", plugins: [] }), 'GET');
