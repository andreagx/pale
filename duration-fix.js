(()=>{
  const E=document.querySelector('#w-E');
  if(!E) return;

  // Riduzione della sessione E per mantenerla entro circa 75–90 minuti.
  const removeKeys=['E-TRX-CURL-done','E-TRX-TRI-done','E-4-done','E-5-done','E-9-done'];
  removeKeys.forEach(key=>{
    const input=E.querySelector(`[data-key="${key}"]`);
    if(input) input.closest('article.exercise')?.remove();
  });

  // Elimina eventuali intestazioni di gruppo rimaste senza esercizi.
  [...E.querySelectorAll('.group-label')].forEach(label=>{
    let n=label.nextElementSibling, hasExercise=false;
    while(n && !n.classList.contains('group-label')){
      if(n.classList.contains('exercise')) { hasExercise=true; break; }
      n=n.nextElementSibling;
    }
    if(!hasExercise) label.remove();
  });

  // Rinumerazione dopo la riduzione.
  [...E.querySelectorAll('article.exercise .num')].forEach((n,i)=>n.textContent=i+1);

  E.querySelector('.head h2').textContent='Braccia + Avambracci + Core · 75–90 min';

  const list=E.querySelector('.list');
  if(list && !E.querySelector('.time-tip')){
    const tip=document.createElement('div');
    tip.className='time-tip';
    tip.style.cssText='grid-column:1/-1;background:#f0fdf4;border:1px solid #bbf7d0;color:#166534;border-radius:10px;padding:10px 12px;font-size:12px;line-height:1.45';
    tip.innerHTML='<b>Obiettivo durata: 75–90 min.</b><br>Per stare nei tempi puoi alternare Curl al cavo ↔ Pushdown e Wrist curl ↔ Reverse wrist curl, mantenendo i recuperi indicati.';
    list.insertBefore(tip,list.firstChild);
  }

  const sun=document.querySelectorAll('.schedule>div')[6]?.querySelector('span');
  if(sun) sun.textContent='Braccia + Avambracci + Core · 75–90 min';

  // Organizzazione per sale: macchine/cavi e pesi prima; TRX e tappetino alla fine insieme.
  document.querySelectorAll('.workout').forEach(section=>{
    const workoutList=section.querySelector('.list');
    if(!workoutList) return;
    const labels=[...workoutList.querySelectorAll('.group-label')];
    const trxLabel=labels.find(x=>x.textContent.trim()==='TRX / SOSPENSIONE');
    const coreLabel=labels.find(x=>x.textContent.trim()==='CORE');
    if(!trxLabel || !coreLabel) return;

    const block=[trxLabel];
    let n=trxLabel.nextElementSibling;
    while(n && !n.classList.contains('group-label')){
      const next=n.nextElementSibling;
      block.push(n);
      n=next;
    }
    block.forEach(el=>workoutList.insertBefore(el,coreLabel));
    [...workoutList.querySelectorAll('article.exercise .num')].forEach((num,i)=>num.textContent=i+1);
  });

  const intro=document.querySelector('.intro p');
  if(intro) intro.textContent='Per ogni sessione: prima macchine e cavi, poi pesi liberi e polsi/avambracci quando previsti; TRX e tappetino/core restano per ultimi perché sono nella stessa sala. Squat, Romanian deadlift e calf raise sono inclusi; restano esclusi step-up/salite su gradino con carico e pressa.';

  progress();
})();