// var 캐싱 스토리지에 저장될 이름 = '';
var CACHE_NAME = 'pwa-offline';
// var 캐싱할 파일 목록 = []
var filesToCache = [
    '/',
    '/css/style.css'
];

// 서비스 워커 설치 (웹 자원 캐싱)
self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(CACHE_NAME) // pwa 파일
        .then(function (cache) {
            // pwa 파일에 다 집어 넣어라
            return cache.addAll(filesToCache);
        })
        .catch(function (error) {
            return console.log(error);
        })
    );
});

self.addEventListener('fetch', function (event) {
    event.respondWith(
        caches.match(event.request)
        .then(function (response) {
            return response || fetch(event.request);
        })
        .catch(function (error) {
            console.log(error)
        })
    );
})

self.addEventListener('activate', function (event) {

    var newCacheList = ['pwa-offline'];
    event.waitUntil(
        caches.keys().then(function (cacheList) {
            return Promise.all(
                cacheList.map(function (cacheName) {
                    if (newCacheList.indexOf(cacheName) === -1) {
                        return caches.delete(cacheName);
                    }
                })
            )
        })
    )
})