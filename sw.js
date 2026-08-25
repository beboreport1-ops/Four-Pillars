var CACHE='fp-v5';
var ASSETS=['./','./index.html','./manifest.json','./icon-192.png','./icon-512.png'];
self.addEventListener('install',function(e){
  self.skipWaiting();
  e.waitUntil(caches.open(CACHE).then(function(c){return c.addAll(ASSETS).catch(function(){})}));
});
self.addEventListener('activate',function(e){
  e.waitUntil(caches.keys().then(function(keys){
    return Promise.all(keys.filter(function(k){return k!==CACHE}).map(function(k){return caches.delete(k)}));
  }).then(function(){return self.clients.claim()}));
});
self.addEventListener('fetch',function(e){
  var u=e.request.url;
  if(e.request.method!=='GET')return;
  if(u.indexOf('supabase.co')>=0||u.indexOf('aladhan.com')>=0)return;
  e.respondWith(
    fetch(e.request).then(function(r){
      var copy=r.clone();
      caches.open(CACHE).then(function(c){c.put(e.request,copy).catch(function(){})});
      return r;
    }).catch(function(){return caches.match(e.request).then(function(m){return m||caches.match('./index.html')})})
  );
});
