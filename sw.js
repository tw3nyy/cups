/* минимальный service worker: нужен браузеру, чтобы предложить установку. Ничего не кэширует, всегда берёт свежее из сети */
self.addEventListener('install', function () { self.skipWaiting(); });
self.addEventListener('activate', function (e) { e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', function (e) { e.respondWith(fetch(e.request)); });
