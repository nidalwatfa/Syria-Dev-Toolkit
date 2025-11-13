const CACHE_NAME = "syria-dev-toolkit-v1";
const urlsToCache = [
  "/",
  "/index.html",
  "/notes.html",
  "/tasks.html",
  "/json-viewer.html"
];

// تثبيت Service Worker وتخزين الملفات
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

// تفعيل وحذف الكاش القديم
self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(names =>
      Promise.all(names.map(name => name !== CACHE_NAME && caches.delete(name)))
    )
  );
});

// جلب الملفات من الكاش أو الشبكة
self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});

// تسجيل Service Worker تلقائيًا
if (typeof window !== "undefined" && "serviceWorker" in navigator) {
  navigator.serviceWorker.register("/sw.js")
    .then(() => console.log("✅ Service Worker مسجل"))
    .catch(err => console.error("❌ خطأ:", err));
}
