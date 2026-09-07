(()=>{
  const ID='reset-all-workouts';

  function install(){
    const header=document.querySelector('header');
    const nav=header?.querySelector('nav');
    if(!header||!nav) return;

    if(!document.getElementById('reset-all-style')){
      const s=document.createElement('style');
      s.id='reset-all-style';
      s.textContent=`
        [data-reset]{display:none!important}
        .global-reset-row{display:flex;justify-content:flex-end;margin:7px 0 8px}
        #${ID}{border:1px solid #fecaca;background:#7f1d1d;color:#fff;border-radius:10px;padding:8px 12px;font:inherit;font-size:12px;font-weight:900;cursor:pointer}
        .workout{scroll-margin-top:155px}
      `;
      document.head.appendChild(s);
    }

    // Il reset globale deve essere separato dalla navigazione A–E.
    document.getElementById(ID)?.closest('.global-reset-row')?.remove();
    const row=document.createElement('div');
    row.className='global-reset-row';
    const btn=document.createElement('button');
    btn.id=ID;
    btn.type='button';
    btn.textContent='Azzera tutto';
    row.appendChild(btn);
    nav.insertAdjacentElement('beforebegin',row);

    // Rimuove il testo descrittivo sotto "Programma settimanale".
    document.querySelector('.intro > p')?.remove();

    // Navigazione affidabile anche in PWA/iOS con header sticky.
    nav.querySelectorAll('a[href^="#w-"]').forEach(a=>{
      a.addEventListener('click',ev=>{
        const target=document.querySelector(a.getAttribute('href'));
        if(!target) return;
        ev.preventDefault();
        target.scrollIntoView({behavior:'smooth',block:'start'});
        try{history.replaceState(null,'',a.getAttribute('href'));}catch(_){ }
      });
    });

    btn.addEventListener('click',()=>{
      if(!confirm('Azzero tutti i dati degli allenamenti di questa scheda: spunte, pesi, ripetizioni e note?')) return;

      for(let i=localStorage.length-1;i>=0;i--){
        const k=localStorage.key(i);
        if(k&&k.startsWith('pale-')) localStorage.removeItem(k);
      }

      document.querySelectorAll('[data-key]').forEach(el=>{
        if(el.type==='checkbox') el.checked=false;
        else if('value' in el) el.value='';
      });
      document.querySelectorAll('.exercise input[type="checkbox"]').forEach(x=>x.checked=false);

      if(typeof progress==='function') progress();
      else {
        const fill=document.getElementById('fill'),prog=document.getElementById('prog');
        if(fill) fill.style.width='0%';
        if(prog) prog.textContent='0% completato';
      }

      btn.textContent='Azzerato ✓';
      setTimeout(()=>btn.textContent='Azzera tutto',1400);
    });
  }

  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',install,{once:true});
  else install();
})();
