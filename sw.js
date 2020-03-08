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
    "revision": "773d60fe5421fea8d3f4866381899d60"
  },
  {
    "url": "index.html",
    "revision": "30b70507cf8fd0b413c054a6ecd8cd05"
  },
  {
    "url": "manifest.json",
    "revision": "a437af2d73bfc725cd2f47dc001f5c87"
  },
  {
    "url": "static/css/main.d2a57283.chunk.css",
    "revision": "8e1ffd75b6960ef008721912e06fecee"
  },
  {
    "url": "static/js/2.f3bf1c51.chunk.js",
    "revision": "293a55b4ba2ec52aa6a3d64176aa53e1"
  },
  {
    "url": "static/js/main.fca4c995.chunk.js",
    "revision": "7e2e70ae71bdd53bf2b25a24bb733df0"
  },
  {
    "url": "static/js/runtime-main.c56ba5d1.js",
    "revision": "b340baf005b924cb3bbebb2d2ac927f1"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|svg)$/, new workbox.strategies.CacheFirst({ "cacheName":"images", plugins: [new workbox.expiration.Plugin({ maxEntries: 10, purgeOnQuotaError: false })] }), 'GET');
workbox.routing.registerRoute(/https:\/\/jsonplaceholder.typicode.com/, new workbox.strategies.NetworkFirst({ "cacheName":"api-calls", plugins: [] }), 'GET');
