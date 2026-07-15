const CACHE_NAME = 'online-games-shell-v1';
const GAMES_CACHE = 'online-games-games-v1';
const SHELL_ASSETS = [
  '/',
  '/index.html',
  '/manifest.json',
  '/styles.css',
  '/favicon.ico'
];

self.addEventListener('install', (e) => {
  self.skipWaiting();
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(SHELL_ASSETS).catch(()=>{}))
  );
});

self.addEventListener('activate', (e) => {
  e.waitUntil(self.clients.claim());
});

// Fetch strategy:
// - shell: cache-first
// - games (.b64 or /games/): network-first, then cache
self.addEventListener('fetch', (e) => {
  const url = new URL(e.request.url);
  if (url.pathname.startsWith('/games/') || url.pathname.endsWith('.b64')) {
    e.respondWith(
      fetch(e.request).then(res => {
        // cache a copy
        const copy = res.clone();
        caches.open(GAMES_CACHE).then(c => c.put(e.request, copy));
        return res;
      }).catch(() => caches.match(e.request))
    );
    return;
  }

  // default: cache-first for shell assets
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request))
  );
});
