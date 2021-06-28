const ASSETS = [
  'index.html',
  'cgpa-calculator.html',
  'css/bootstrap.min.css',
  'js/bootstrap.min.js',
  'js/script.js',
  'js/vue.js',
  'img/icon-192x192.png',
  'app.js',
  'manifest.json',
];
self.addEventListener('fetch', function (event) {
  if (
    event.request.url === 'https://aizaz-ahmad.github.io/PUCIT-CGPA-Calculator/'
  ) {
    // or whatever your app's URL is
    event.respondWith(
      fetch(event.request).catch(err =>
        self.cache.open(cache_name).then(cache => cache.match('/index.html'))
      )
    );
  } else {
    event.respondWith(
      fetch(event.request).catch(err =>
        caches.match(event.request).then(response => response)
      )
    );
  }
});
let cache_name = 'CGPA CALC'; // The string used to identify our cache
self.addEventListener('install', event => {
  console.log('installing...');
  event.waitUntil(
    caches
      .open(cache_name)
      .then(cache => {
        return cache.addAll(ASSETS);
      })
      .catch(err => console.log(err))
  );
});
