const CACHE='pale-v17';
const ASSETS=['./','./index.html','./program.js','./app.js','./reset-all.js','./manifest.webmanifest','./icon.svg'];
self.addEventListener('install',event=>event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(ASSETS)).then(()=>self.skipWaiting())));
self.addEventListener('activate',event=>event.waitUntil((async()=>{
  const keys=await caches.keys();
  await Promise.all(keys.filter(key=>key.startsWith('pale-')&&key!==CACHE).map(key=>caches.delete(key)));
  await self.clients.claim();
  const clients=await self.clients.matchAll({type:'window'});
  await Promise.all(clients.map(client=>client.navigate(client.url).catch(()=>{})));
})()));
self.addEventListener('fetch',event=>{
  if(event.request.method!=='GET')return;
  const url=new URL(event.request.url);
  if(url.origin!==self.location.origin)return;
  if(event.request.mode==='navigate'){
    event.respondWith((async()=>{
      const cache=await caches.open(CACHE);
      try{const response=await fetch(event.request,{cache:'no-store'});if(response.ok){await cache.put('./index.html',response.clone());return response;}}catch(_){ }
      return await cache.match('./index.html')||Response.error();
    })());return;
  }
  event.respondWith((async()=>{const cache=await caches.open(CACHE);return await cache.match(event.request)||fetch(event.request);})());
});
