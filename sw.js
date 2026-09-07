const CACHE='pale-v14';
const ASSETS=['./','./index.html','./app.js','./adjustments.js','./duration-fix.js','./reset-all.js','./manifest.webmanifest','./icon.svg'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil((async()=>{
  await caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k))));
  await self.clients.claim();
  const clients=await self.clients.matchAll({type:'window',includeUncontrolled:true});
  await Promise.all(clients.map(c=>c.navigate(c.url).catch(()=>{})));
})()));
async function withReset(resp){
  if(!resp) return resp;
  let html=await resp.text();
  html=html.replace(/<script[^>]+reset-all\.js[^>]*><\/script>/g,'');
  html=html.replace('</body>','<script src="./reset-all.js?v=14"></script></body>');
  return new Response(html,{status:resp.status,statusText:resp.statusText,headers:{'Content-Type':'text/html; charset=utf-8','Cache-Control':'no-cache, no-store, must-revalidate'}});
}
self.addEventListener('fetch',e=>{
  if(e.request.method!=='GET') return;
  const u=new URL(e.request.url);
  if(e.request.mode==='navigate'||u.pathname.endsWith('/index.html')){
    e.respondWith((async()=>{
      try{
        const net=await fetch(e.request,{cache:'no-store'});
        if(net.ok){const raw=net.clone();caches.open(CACHE).then(c=>c.put('./index.html',raw));return withReset(net)}
      }catch(_){ }
      return withReset(await caches.match('./index.html'));
    })());
    return;
  }
  if(u.pathname.endsWith('/reset-all.js')){
    e.respondWith(fetch(e.request,{cache:'no-store'}).catch(()=>caches.match('./reset-all.js')));
    return;
  }
  e.respondWith(caches.match(e.request).then(hit=>hit||fetch(e.request).then(resp=>{if(resp&&(resp.ok||resp.type==='opaque')){const copy=resp.clone();caches.open(CACHE).then(c=>c.put(e.request,copy))}return resp}).catch(()=>Response.error())));
});