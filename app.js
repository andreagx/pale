const REPDB='https://exercise-dataset.com/images/flat/';
const REPDB_MAP={
'Croci ai cavi':['cable-fly','pair'],'Pushdown tricipiti con corda':['tricep-pushdown','pair'],'Cable crunch':['cable-crunch','pair'],
'Distensioni manubri su panca piana':['db-bench-press','pair'],'French press con due manubri':['db-skull-crusher','pair'],'TRX chest press':['trx-chest-press','pair'],'Plank':['plank','main'],
'Lat machine presa larga':['lat-pulldown','pair'],'Seated row al pulley':['seated-cable-row','pair'],'Curl bilaterale al cavo':['cable-curl','pair'],'Goblet squat':['goblet-squat','pair'],
'Romanian deadlift con manubri':['dumbbell-romanian-deadlift','pair'],'Calf raise in piedi con manubri':['dumbbell-calf-raise','pair'],'TRX row':['trx-row','pair'],'Dead bug':['dead-bug','pair'],
'Shoulder press guidata':['machine-shoulder-press','pair'],'Overhead triceps extension con corda':[['https://i0.wp.com/www.strengthlog.com/wp-content/uploads/2025/11/overhead-tricep-extension-start.png?resize=700%2C700&ssl=1','https://i0.wp.com/www.strengthlog.com/wp-content/uploads/2025/11/overhead-tricep-extension-end-1024x1024.png?resize=700%2C700&ssl=1'],'externalpair'],'Curl manubri su panca inclinata':['incline-db-curl','pair'],
'Alzate laterali':['lateral-raise','pair'],'Alzate posteriori con petto appoggiato':['dumbbell-reverse-fly','pair'],'Russian twist':['russian-twist','pair'],'Side plank':['side-plank','main'],
'Pullover al cavo a braccia tese':['straight-arm-pulldown','pair'],'Pallof press':['cable-pallof-press','pair'],'Distensioni inclinate manubri':['incline-db-press','pair'],
'Rematore manubrio su panca':['single-arm-db-row','pair'],'Croci su panca inclinata':['incline-dumbbell-fly','pair'],'Glute bridge':['glute-bridge','pair'],'Bird dog':['bird-dog','pair'],
'Concentration curl':['concentration-curl','pair'],'Hammer curl':['hammer-curl','pair'],'Kickback tricipiti con manubrio':['tricep-kickback','pair'],'Wrist curl seduto':['dumbbell-wrist-curl','pair'],
'Reverse wrist curl seduto':['db-reverse-wrist-curl','pair'],'TRX triceps extension':['trx-tricep-extension','pair'],'Reverse crunch':['reverse-crunches','pair'],'Heel taps alternati':['cross-body-crunch','pair']
};
function photos(e){
  const m=REPDB_MAP[e[0]];
  if(!m) return '';
  const [id,mode]=m;
  if(mode==='externalpair') return '<div class="artpair"><figure class="frame"><img src="'+id[0]+'" alt="'+e[0]+' · inizio" loading="lazy" decoding="async"><figcaption>INIZIO</figcaption></figure><figure class="frame"><img src="'+id[1]+'" alt="'+e[0]+' · fine" loading="lazy" decoding="async"><figcaption>FINE</figcaption></figure></div>';
  const files=mode==='main'?[[id+'-main.webp','POSIZIONE']]:[[id+'-start.webp','INIZIO'],[id+'-peak.webp','FINE']];
  return '<div class="artpair '+(mode==='main'?'single':'')+'">'+files.map(([file,label])=>'<figure class="frame"><img src="'+REPDB+file+'" alt="'+e[0]+' · '+label.toLowerCase()+'" loading="lazy" decoding="async"><figcaption>'+label+'</figcaption></figure>').join('')+'</div>';
}
function sessionNote(w){
  const sets=w[3].reduce((sum,e)=>sum+parseInt(e[2]),0);
  return w[3].length+' esercizi · '+sets+' serie. Riserva 8–10 min al riscaldamento e 8–12 min ai cambi attrezzo. Recuperi dopo ogni serie; negli esercizi per lato completa entrambi prima del recupero. Mantieni circa 2 ripetizioni di margine. '+(w[0]<'D'?'Se arrivi a 60 min, riduci di una serie gli ultimi complementari per concludere entro 70 min.':'Non serve riempire tutti i 90 min: termina quando hai completato il lavoro previsto.');
}
function render(){let h='';W.forEach(w=>{h+=`<section class="workout ${w[2]}" id="w-${w[0]}"><div class="head"><div><small>ALLENAMENTO ${w[0]}</small><h2>${w[1]}</h2><p class="duration">${w[0] < 'D' ? 'Obiettivo 65–70 min' : 'Fino a 90 min'}</p></div><button data-reset="${w[0]}">Azzera</button></div><div class="time-tip">${sessionNote(w)}</div><div class="list">`;let last='';w[3].forEach((e,i)=>{if(e[7]!==last){last=e[7];h+=`<div class="group-label">${last}</div>`}const k=e[8];h+=`<article class="exercise" data-workout="${w[0]}">${photos(e)}<div class="body"><div class="top"><span class="num">${i+1}</span><div><h3>${e[0]}</h3><div class="meta">🧰 ${e[1]}<br>🔁 ${e[2]} · ⏱ ${e[3]}</div></div><label class="done"><input type="checkbox" data-key="${k}-done">✓</label></div><div class="track"><label>Peso<input inputmode="decimal" placeholder="kg" data-key="${k}-peso"></label><label>Rip. fatte<input inputmode="numeric" placeholder="es. 12" data-key="${k}-reps"></label></div><a class="video" href="${e[4]}" target="_blank" rel="noopener">${e[4].includes('/results?') ? '▶ Cerca video della variante' : '▶ Apri guida e video'}</a>${e[5] ? `<p class="cue">${e[9]}</p>` : ''}<details><summary>Note personali</summary><textarea rows="2" data-key="${k}-note" placeholder="Tecnica, carico, sensazioni…"></textarea></details></div></article>`});h+='</div></section>'});document.getElementById('app').innerHTML=h;bind()}
function bind(){const els=[...document.querySelectorAll('[data-key]')];els.forEach(el=>{const k='pale-'+el.dataset.key,v=localStorage.getItem(k);if(v!==null)el.type==='checkbox'?el.checked=v==='1':el.value=v;el.addEventListener(el.type==='checkbox'?'change':'input',()=>{localStorage.setItem(k,el.type==='checkbox'?(el.checked?'1':'0'):el.value);progress()})});document.querySelectorAll('[data-reset]').forEach(b=>b.onclick=()=>{document.querySelectorAll('[data-workout="'+b.dataset.reset+'"] [data-key]').forEach(el=>{localStorage.removeItem('pale-'+el.dataset.key);el.type==='checkbox'?el.checked=false:el.value=''});progress()});progress()}
function progress(){const b=[...document.querySelectorAll('input[type=checkbox][data-key]')],d=b.filter(x=>x.checked).length,p=b.length?Math.round(d*100/b.length):0;document.getElementById('fill').style.width=p+'%';document.getElementById('prog').textContent=p+'% completato · '+d+'/'+b.length+' esercizi'}
render();
document.querySelectorAll('.artpair img').forEach(img=>img.addEventListener('error',()=>{
  const pair=img.closest('.artpair');if(!pair)return;
  const fallback=document.createElement('div');fallback.className='artplaceholder';fallback.textContent='Immagine non disponibile · leggi la tecnica qui sotto';pair.replaceWith(fallback);
}));
// Immagini esterne: se un singolo asset non esiste, non mostrare riquadri placeholder giganti.
document.querySelectorAll('.artpair img').forEach(img=>img.addEventListener('error',()=>{const fig=img.closest('.frame');const pair=img.closest('.artpair');if(fig)fig.remove();if(pair&&!pair.querySelector('img'))pair.remove();}));
