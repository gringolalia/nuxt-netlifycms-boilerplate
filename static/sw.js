importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/1077b58a33aa1b82a45d.js",
    "revision": "3c2939d00521d6ee8496730e3ce0a4eb"
  },
  {
    "url": "/_nuxt/1f40a97042f71827db99.js",
    "revision": "b85c7ffff62a223156b0d7a8bfd547fa"
  },
  {
    "url": "/_nuxt/4fc0af34e4ee15ca016c.js",
    "revision": "ab1919fbdeb617e3be0a37c3ba71fdbc"
  },
  {
    "url": "/_nuxt/674384dab4fc5579239f.js",
    "revision": "48e58413717733836b7093bcd3911b1d"
  },
  {
    "url": "/_nuxt/81455168b0c21fe2ef74.js",
    "revision": "e4a4ab1b3d2daeffae69047d957371cf"
  },
  {
    "url": "/_nuxt/dbc57c9364494ac23455.js",
    "revision": "a6eff0d69c50a3c40599353a7554e6ab"
  }
], {
  "cacheId": "nuxt-netlifycms-boilerplate",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
