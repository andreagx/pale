(()=>{
  const section=document.querySelector('#w-B');
  if(!section) return;

  const list=section.querySelector('.list');
  const labels=[...list.querySelectorAll('.group-label')];
  const anchor=labels.find(x=>x.textContent.trim()==='POLSI / AVAMBRACCI') || labels.find(x=>x.textContent.trim()==='CORE');

  function bindCard(card){
    card.querySelectorAll('[data-key]').forEach(el=>{
      const k='pale-'+el.dataset.key, v=localStorage.getItem(k);
      if(v!==null) el.type==='checkbox' ? el.checked=(v==='1') : el.value=v;
      el.addEventListener(el.type==='checkbox'?'change':'input',()=>{
        localStorage.setItem(k,el.type==='checkbox'?(el.checked?'1':'0'):el.value);
        progress();
      });
    });
  }

  function addExercise(cfg){
    if(section.querySelector(`[data-key="${cfg.key}-done"]`)) return;
    const wrap=document.createElement('div');
    const art=cfg.mode==='text'
      ? `<div class="artplaceholder"><div>${cfg.title}</div><small>Movimento controllato<br>Apri il video per vedere la tecnica</small></div>`
      : photos([cfg.title,cfg.equip,cfg.sets,cfg.rest,cfg.video,cfg.image]);
    wrap.innerHTML=`<article class="exercise" data-workout="B">${art}<div class="body"><div class="top"><span class="num">0</span><div><h3>${cfg.title}</h3><div class="meta">🧰 ${cfg.equip}<br>🔁 ${cfg.sets} · ⏱ ${cfg.rest}</div></div><label class="done"><input type="checkbox" data-key="${cfg.key}-done">✓</label></div><div class="track"><label>Peso<input inputmode="decimal" placeholder="kg" data-key="${cfg.key}-peso"></label><label>Rip. fatte<input inputmode="numeric" placeholder="es. 12" data-key="${cfg.key}-reps"></label></div><a class="video" href="${cfg.video}" target="_blank" rel="noopener">▶ Guarda esecuzione corretta</a><details><summary>Note personali</summary><textarea rows="2" data-key="${cfg.key}-note" placeholder="Tecnica, carico, sensazioni…"></textarea></details></div></article>`;
    const card=wrap.firstElementChild;
    if(anchor) list.insertBefore(card,anchor); else list.appendChild(card);
    bindCard(card);
  }

  addExercise({
    key:'B-SQ',
    title:'Goblet squat',
    equip:'Manubrio o kettlebell',
    sets:'3 × 10–15',
    rest:'60–75 s',
    video:'https://musclewiki.com/exercise/dumbbell-goblet-squat',
    image:'Goblet_Squat'
  });

  addExercise({
    key:'B-RDL',
    title:'Romanian deadlift con manubri',
    equip:'Manubri',
    sets:'3 × 10–12',
    rest:'60–75 s',
    video:'https://www.youtube.com/results?search_query=dumbbell+Romanian+deadlift+proper+form+tutorial',
    image:'Stiff-Legged_Dumbbell_Deadlift'
  });

  addExercise({
    key:'B-CALF',
    title:'Calf raise in piedi con manubri',
    equip:'Manubri',
    sets:'3 × 15–20',
    rest:'45 s',
    video:'https://www.youtube.com/results?search_query=standing+dumbbell+calf+raise+proper+form+tutorial',
    mode:'text'
  });

  section.querySelector('.head h2').textContent='Schiena + Bicipiti + Gambe + Core';
  [...list.querySelectorAll('article.exercise .num')].forEach((n,i)=>n.textContent=i+1);

  const intro=document.querySelector('.intro p');
  if(intro) intro.textContent='Per ogni sessione: prima macchine e cavi, poi pesi liberi, quindi polsi/avambracci quando previsti e infine core. Squat, Romanian deadlift e calf raise sono inclusi; restano esclusi step-up/salite su gradino con carico e pressa.';
  const wed=document.querySelectorAll('.schedule>div')[2]?.querySelector('span');
  if(wed) wed.textContent='Schiena + Bicipiti + Gambe + Core';
  const note=document.querySelector('.note');
  if(note) note.innerHTML='<b>Ginocchio:</b> inclusi squat, Romanian deadlift e calf raise. Restano esclusi step-up/salite su gradino con peso e pressa. Se un esercizio provoca dolore al ginocchio, interrompilo.';
  progress();
})();