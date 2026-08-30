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

  progress();
})();