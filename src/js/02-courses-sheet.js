  /* course sheet */
  var COURSES = [
    { name: 'Academic Excellence Programme', c: 'c-purple', list: ['All-subject academic support','Mathematics improvement','English grammar','Tamil grammar','Reading and writing improvement','School examination preparation','Olympiad foundation and practice'] },
    { name: 'Language and Communication Skills', c: 'c-orange', list: ['English phonics','Spoken English','Spoken Hindi','Basic Hindi reading and writing','Tamil reading and writing','English reading and writing','Vocabulary and grammar development','Public speaking and communication skills'] },
    { name: 'Brain Development and Mental Mathematics', c: 'c-green', list: ['Abacus training','Vedic mathematics','Mental arithmetic','Memory and concentration activities','Logical thinking and problem-solving'] },
    { name: 'Handwriting and Creative Writing', c: 'c-yellow', list: ['English cursive handwriting','Handwriting improvement','Tamil and Hindi handwriting','Calligraphy','Creative writing activities'] },
    { name: 'Art, Creativity and Extracurricular Activities', c: 'c-red', list: ['Drawing and painting','Art and craft','Mandala art','Creative activities','Chess','Western dance','Storytelling and book reading'] },
    { name: 'Personality Development and Life Skills', c: 'c-navy', list: ['Confidence building','Public speaking','Communication etiquette','Social and emotional skills','Leadership and teamwork','Time management','Positive attitude','Good manners and behaviour'] }
  ];
  var SELECT = ['Academic Excellence','Language & Communication','Brain Development & Mental Maths','Handwriting & Creative Writing','Art, Creativity & Activities','Personality & Life Skills'];
  var sheetRoot = document.getElementById('sheetRoot'), lightRoot = document.getElementById('lightRoot'), lastFocus = null;
  function esc(s){ return s.replace(/[&<>"]/g, function(ch){ return { '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;' }[ch]; }); }
  function onKey(e){
    if (e.key === 'Escape') { closeSheet(); closeLight(); return; }
    if (e.key !== 'Tab') return;
    var dialog = sheetRoot.querySelector('[role="dialog"]') || lightRoot.querySelector('[role="dialog"]');
    if (!dialog) return;
    var focusable = dialog.querySelectorAll('a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])');
    if (!focusable.length) { e.preventDefault(); return; }
    var first = focusable[0], last = focusable[focusable.length - 1];
    if (e.shiftKey && (document.activeElement === first || !dialog.contains(document.activeElement))) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && (document.activeElement === last || !dialog.contains(document.activeElement))) {
      e.preventDefault();
      first.focus();
    }
  }
  /* page transition: the tapped card morphs into its sheet and back (View Transitions API; plain swap where unsupported) */
  var canVT = !reduce && typeof document.startViewTransition === 'function';
  if (canVT) document.documentElement.classList.add('has-vt');
  function vt(fn, card, when){
    if (!canVT || !card) { fn(); return; }
    try {
      if (when === 'old') card.style.viewTransitionName = 'course-sheet';
      var t = document.startViewTransition(function(){ card.style.viewTransitionName = when === 'old' ? '' : 'course-sheet'; fn(); });
      t.finished.then(function(){ card.style.viewTransitionName = ''; }, function(){ card.style.viewTransitionName = ''; });
    } catch (err) { card.style.viewTransitionName = ''; fn(); }
  }
  function closeSheet(){ if (!sheetRoot.innerHTML) return; document.removeEventListener('keydown', onKey); var t = lastFocus; vt(function(){ sheetRoot.innerHTML = ''; if (t) t.focus({ preventScroll: true }); }, t, 'new'); }
  function openSheet(i, trigger){
    var c = COURSES[i]; lastFocus = trigger;
    vt(function(){ renderSheet(c, i); }, trigger, 'old');
    document.addEventListener('keydown', onKey);
  }
  function renderSheet(c, i){
    sheetRoot.innerHTML = '<div class="sheet-wrap" data-close><div class="sheet ' + c.c + '" role="dialog" aria-modal="true" aria-labelledby="sheetTitle">' +
      '<button class="close" type="button" aria-label="Close"><svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path d="M6 6 L18 18 M18 6 L6 18"/></svg></button>' +
      '<span class="label"><span class="dot"></span>' + c.list.length + ' courses</span><h3 id="sheetTitle">' + esc(c.name) + '</h3><ul>' + c.list.map(function(x){ return '<li>' + esc(x) + '</li>'; }).join('') + '</ul>' +
      '<div class="row"><a class="btn btn-p" href="#enquire" data-pick="' + i + '">Enquire for this course</a><span class="gap">Ages, timings, fees</span></div></div></div>';
    sheetRoot.querySelector('.close').focus({ preventScroll: true });
  }
  document.getElementById('cards').addEventListener('click', function(e){ var b = e.target.closest('[data-course]'); if (b) openSheet(+b.getAttribute('data-course'), b); });
  sheetRoot.addEventListener('click', function(e){
    var pick = e.target.closest('[data-pick]');
    if (pick) { document.getElementById('course').value = SELECT[+pick.getAttribute('data-pick')]; sheetRoot.innerHTML = ''; document.removeEventListener('keydown', onKey); return; }
    if (e.target.hasAttribute('data-close') || e.target.closest('.close')) closeSheet();
  });

