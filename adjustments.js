(()=>{
  const section=document.querySelector('#w-B');
  if(!section || section.querySelector('[data-key="B-SQ-done"]')) return;

  const list=section.querySelector('.list');
  const labels=[...list.querySelectorAll('.group-label')];
  const anchor=labels.find(x=>x.textContent.trim()==='POLSI / AVAMBRACCI') || labels.find(x=>x.textContent.trim()==='CORE');
  const e=['Goblet squat','Manubrio o kettlebell','3 × 10–15','60–75 s','https://musclewiki.com/exercise/dumbbell-goblet-squat','Goblet_Squat'];
  const wrap=document.createElement('div');
  wrap.innerHTML=`<article class="exercise" data-workout="B">${photos(e)}<div class="body"><div class="top"><span class="num">0</span><div><h3>${e[0]}</h3><div class="meta">🧰 ${e[1]}<br>🔁 ${e[2]} · ⏱ ${e[3]}</div></div><label class="done"><input type="checkbox" data-key="B-SQ-done">✓</label></div><div class="track"><label>Peso<input inputmode="decimal" placeholder="kg" data-key="B-SQ-peso"></label><label>Rip. fatte<input inputmode="numeric" placeholder="es. 12" data-key="B-SQ-reps"></label></div><a class="video" href="${e[4]}" target="_blank" rel="noopener">▶ Guarda esecuzione corretta</a><details><summary>Note personali</summary><textarea rows="2" data-key="B-SQ-note" placeholder="Tecnica, carico, sensazioni…"></textarea></details></div></article>`;
  const card=wrap.firstElementChild;
  if(anchor) list.insertBefore(card,anchor); else list.appendChild(card);

  section.querySelector('.head h2').textContent='Schiena + Bicipiti + Gambe + Core';
  [...list.querySelectorAll('article.exercise .num')].forEach((n,i)=>n.textContent=i+1);

  card.querySelectorAll('[data-key]').forEach(el=>{
    const k='pale-'+el.dataset.key, v=localStorage.getItem(k);
    if(v!==null) el.type==='checkbox' ? el.checked=(v==='1') : el.value=v;
    el.addEventListener(el.type==='checkbox'?'change':'input',()=>{
      localStorage.setItem(k,el.type==='checkbox'?(el.checked?'1':'0'):el.value);
      progress();
    });
  });

  const intro=document.querySelector('.intro p');
  if(intro) intro.textContent='Per ogni sessione: prima macchine e cavi, poi pesi liberi, quindi polsi/avambracci quando previsti e infine core. Gli squat sono consentiti; restano esclusi step-up/salite su gradino con carico e pressa.';
  const wed=document.querySelectorAll('.schedule>div')[2]?.querySelector('span');
  if(wed) wed.textContent='Schiena + Bicipiti + Squat + Core';
  const note=document.querySelector('.note');
  if(note) note.innerHTML='<b>Ginocchio:</b> gli squat sono inclusi perché tollerati. Restano esclusi step-up/salite su gradino con peso e pressa. Se un esercizio provoca dolore al ginocchio, interrompilo.';
  progress();
})();