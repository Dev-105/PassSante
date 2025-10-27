self.addEventListener("install", (e) => {
  console.log("Service Worker installed");
  e.waitUntil(
    caches.open("myapp-cache").then((cache) => {
      return cache.addAll(["/", "/index.html", "/icons.json"]);
    })
  );
});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
