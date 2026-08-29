(()=>{
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

  function labelAnchor(section,label){
    return [...section.querySelectorAll('.group-label')].find(x=>x.textContent.trim()===label);
  }

  function ensureGroup(section,label,beforeLabel){
    let g=[...section.querySelectorAll('.group-label')].find(x=>x.textContent.trim()===label);
    if(g) return g;
    g=document.createElement('div');
    g.className='group-label';
    g.textContent=label;
    const anchor=labelAnchor(section,beforeLabel);
    const list=section.querySelector('.list');
    if(anchor) list.insertBefore(g,anchor); else list.appendChild(g);
    return g;
  }

  function addCard(section,cfg,beforeLabel){
    if(section.querySelector(`[data-key="${cfg.key}-done"]`)) return;
    const list=section.querySelector('.list');
    const anchor=labelAnchor(section,beforeLabel);
    const wrap=document.createElement('div');
    let art;
    if(cfg.placeholder){
      art=`<div class="artplaceholder"><div>${cfg.placeholder}</div><small>${cfg.hint||'Movimento controllato'}<br>Apri il video per vedere la tecnica</small></div>`;
    } else {
      art=photos([cfg.title,cfg.equip,cfg.sets,cfg.rest,cfg.video,cfg.image]);
    }
    wrap.innerHTML=`<article class="exercise" data-workout="${section.id.slice(2)}">${art}<div class="body"><div class="top"><span class="num">0</span><div><h3>${cfg.title}</h3><div class="meta">🧰 ${cfg.equip}<br>🔁 ${cfg.sets} · ⏱ ${cfg.rest}</div></div><label class="done"><input type="checkbox" data-key="${cfg.key}-done">✓</label></div><div class="track"><label>Peso<input inputmode="decimal" placeholder="kg" data-key="${cfg.key}-peso"></label><label>Rip. fatte<input inputmode="numeric" placeholder="es. 12" data-key="${cfg.key}-reps"></label></div><a class="video" href="${cfg.video}" target="_blank" rel="noopener">▶ Guarda esecuzione corretta</a><details><summary>Note personali</summary><textarea rows="2" data-key="${cfg.key}-note" placeholder="Tecnica, inclinazione, sensazioni…"></textarea></details></div></article>`;
    const card=wrap.firstElementChild;
    if(anchor) list.insertBefore(card,anchor); else list.appendChild(card);
    bindCard(card);
  }

  function renumber(section){
    [...section.querySelectorAll('article.exercise .num')].forEach((n,i)=>n.textContent=i+1);
  }

  // TRX: sempre prima dei pesi liberi.
  const A=document.querySelector('#w-A');
  if(A){
    ensureGroup(A,'TRX / SOSPENSIONE','PESI LIBERI');
    addCard(A,{
      key:'A-TRX-CP', title:'TRX chest press', equip:'Cinghie TRX', sets:'2 × 12–15', rest:'45 s',
      video:'https://www.youtube.com/results?search_query=TRX+chest+press+proper+form+tutorial',
      placeholder:'TRX / SOSPENSIONE', hint:'Corpo in linea · inclinazione moderata'
    },'PESI LIBERI');
    renumber(A);
  }

  const B=document.querySelector('#w-B');
  if(B){
    ensureGroup(B,'TRX / SOSPENSIONE','PESI LIBERI');
    addCard(B,{
      key:'B-TRX-ROW', title:'TRX row', equip:'Cinghie TRX', sets:'3 × 10–15', rest:'45–60 s',
      video:'https://www.youtube.com/results?search_query=TRX+row+proper+form+tutorial',
      placeholder:'TRX / SOSPENSIONE', hint:'Corpo rigido · tira i gomiti indietro'
    },'PESI LIBERI');

    // Gambe consentite: dopo i pesi liberi esistenti e prima di avambracci/core.
    const legAnchor=labelAnchor(B,'POLSI / AVAMBRACCI') || labelAnchor(B,'CORE');
    function addLeg(cfg){
      if(B.querySelector(`[data-key="${cfg.key}-done"]`)) return;
      const wrap=document.createElement('div');
      const art=cfg.mode==='text'
        ? `<div class="artplaceholder"><div>${cfg.title}</div><small>Movimento controllato<br>Apri il video per vedere la tecnica</small></div>`
        : photos([cfg.title,cfg.equip,cfg.sets,cfg.rest,cfg.video,cfg.image]);
      wrap.innerHTML=`<article class="exercise" data-workout="B">${art}<div class="body"><div class="top"><span class="num">0</span><div><h3>${cfg.title}</h3><div class="meta">🧰 ${cfg.equip}<br>🔁 ${cfg.sets} · ⏱ ${cfg.rest}</div></div><label class="done"><input type="checkbox" data-key="${cfg.key}-done">✓</label></div><div class="track"><label>Peso<input inputmode="decimal" placeholder="kg" data-key="${cfg.key}-peso"></label><label>Rip. fatte<input inputmode="numeric" placeholder="es. 12" data-key="${cfg.key}-reps"></label></div><a class="video" href="${cfg.video}" target="_blank" rel="noopener">▶ Guarda esecuzione corretta</a><details><summary>Note personali</summary><textarea rows="2" data-key="${cfg.key}-note" placeholder="Tecnica, carico, sensazioni…"></textarea></details></div></article>`;
      const card=wrap.firstElementChild;
      if(legAnchor) B.querySelector('.list').insertBefore(card,legAnchor); else B.querySelector('.list').appendChild(card);
      bindCard(card);
    }
    addLeg({key:'B-SQ',title:'Goblet squat',equip:'Manubrio o kettlebell',sets:'3 × 10–15',rest:'60–75 s',video:'https://musclewiki.com/exercise/dumbbell-goblet-squat',image:'Goblet_Squat'});
    addLeg({key:'B-RDL',title:'Romanian deadlift con manubri',equip:'Manubri',sets:'3 × 10–12',rest:'60–75 s',video:'https://www.youtube.com/results?search_query=dumbbell+Romanian+deadlift+proper+form+tutorial',image:'Stiff-Legged_Dumbbell_Deadlift'});
    addLeg({key:'B-CALF',title:'Calf raise in piedi con manubri',equip:'Manubri',sets:'3 × 15–20',rest:'45 s',video:'https://www.youtube.com/results?search_query=standing+dumbbell+calf+raise+proper+form+tutorial',mode:'text'});
    B.querySelector('.head h2').textContent='Schiena + Bicipiti + Gambe + Core';
    renumber(B);
  }

  const E=document.querySelector('#w-E');
  if(E){
    ensureGroup(E,'TRX / SOSPENSIONE','PESI LIBERI');
    addCard(E,{
      key:'E-TRX-CURL', title:'TRX biceps curl', equip:'Cinghie TRX', sets:'2 × 10–12', rest:'30–45 s',
      video:'https://www.youtube.com/results?search_query=TRX+biceps+curl+proper+form+tutorial',
      placeholder:'TRX / SOSPENSIONE', hint:'Gomiti alti · corpo in linea'
    },'PESI LIBERI');
    addCard(E,{
      key:'E-TRX-TRI', title:'TRX triceps extension', equip:'Cinghie TRX', sets:'2 × 10–12', rest:'30–45 s',
      video:'https://www.youtube.com/results?search_query=TRX+triceps+extension+proper+form+tutorial',
      placeholder:'TRX / SOSPENSIONE', hint:'Gomiti fermi · corpo in linea'
    },'PESI LIBERI');
    renumber(E);
  }

  const intro=document.querySelector('.intro p');
  if(intro) intro.textContent='Per ogni sessione: prima macchine e cavi, poi TRX/sospensione, quindi pesi liberi, polsi/avambracci quando previsti e infine core. Squat, Romanian deadlift e calf raise sono inclusi; restano esclusi step-up/salite su gradino con carico e pressa.';
  const wed=document.querySelectorAll('.schedule>div')[2]?.querySelector('span');
  if(wed) wed.textContent='Schiena + Bicipiti + Gambe + TRX';
  const note=document.querySelector('.note');
  if(note) note.innerHTML='<b>Ginocchio:</b> inclusi squat, Romanian deadlift e calf raise. Restano esclusi step-up/salite su gradino con peso e pressa. Gli esercizi TRX scelti sono per parte alta e si eseguono senza piegamenti dinamici del ginocchio; se un movimento provoca dolore, interrompilo.';
  progress();
})();