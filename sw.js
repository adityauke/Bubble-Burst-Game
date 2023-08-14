self.addEventListener("install"  , e=>{
    e.waitUntil(
        caches.open("static").then(cache =>{
            return cache.addAll( ["./" , "./style.css" , "./script.js" , "./assets/logo.png" , "./assets/bubble.wav" , "./assets/bubbleSoap.jpg" , "./assets/gameEnd.mp3"] )
        })
    );
});

self.addEventListener("fetch" , e=>{
    e.respondWith(
        caches.match(e.request).then(response =>{
            return response || fetch(e.request);
        })
    );
});
