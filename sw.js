// ==========================================================================
// DESCONECTAR • SERVICE WORKER (PWA OFFLINE & INSTALACIÓN)
// ==========================================================================

const CACHE_NAME = 'desconectar-pwa-v20';

// Recursos esenciales que se guardan en caché para funcionamiento offline
const STATIC_ASSETS = [
  './',
  './index.html',
  './styles.css',
  './app.js',
  './manifest.json',
  './icons/icon.svg',
  './icons/icon-maskable.svg',
  './icons/icon-192.png',
  './icons/icon-512.png'
];

// 1. INSTALACIÓN: Guardar archivos del shell de la app
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(STATIC_ASSETS);
    }).then(() => {
      return self.skipWaiting();
    })
  );
});

// 2. ACTIVACIÓN: Limpiar cachés antiguas si se actualiza la versión
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    }).then(() => {
      return self.clients.claim();
    })
  );
});

// 3. FETCH: Estrategia híbrida
// - Para recursos locales (HTML, CSS, JS, iconos): Cache First con actualización en segundo plano
// - Para YouTube y llamadas externas: Red directa (sin interferir con el iframe de YouTube)
self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);

  // Si es una petición externa (YouTube, Google Fonts, etc.), dejar que la red responda normal
  if (url.origin !== self.location.origin) {
    return;
  }

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        // En segundo plano actualizamos la caché con la red si está disponible (Stale-While-Revalidate)
        fetch(event.request).then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, networkResponse.clone());
            });
          }
        }).catch(() => {
          // Si está sin conexión, no pasa nada porque ya devolvimos cachedResponse
        });

        return cachedResponse;
      }

      // Si no está en caché, ir a la red
      return fetch(event.request).then((response) => {
        if (!response || response.status !== 200 || response.type !== 'basic') {
          return response;
        }

        const responseToCache = response.clone();
        caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, responseToCache);
        });

        return response;
      });
    })
  );
});
