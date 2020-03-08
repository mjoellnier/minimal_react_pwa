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
    "revision": "a6372cb894ca7d83ee351a83f9c35dc7"
  },
  {
    "url": "index.html",
    "revision": "f67a83eea925265a71eecdc69b1b7d54"
  },
  {
    "url": "manifest.json",
    "revision": "d9d975cebe2ec20b6c652e1e4c12ccf0"
  },
  {
    "url": "static/css/main.cd2cfa00.chunk.css",
    "revision": "456b081b49b46a730b1780593929b23e"
  },
  {
    "url": "static/js/2.f3bf1c51.chunk.js",
    "revision": "293a55b4ba2ec52aa6a3d64176aa53e1"
  },
  {
    "url": "static/js/main.7806670c.chunk.js",
    "revision": "e34cb6c7cc17bc3860fa7943e94aedb2"
  },
  {
    "url": "static/js/runtime-main.c56ba5d1.js",
    "revision": "b340baf005b924cb3bbebb2d2ac927f1"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|svg)$/, new workbox.strategies.CacheFirst({ "cacheName":"images", plugins: [new workbox.expiration.Plugin({ maxEntries: 10, purgeOnQuotaError: false })] }), 'GET');
workbox.routing.registerRoute(/https:\/\/jsonplaceholder.typicode.com/, new workbox.strategies.NetworkFirst({ "cacheName":"api-calls", plugins: [] }), 'GET');
