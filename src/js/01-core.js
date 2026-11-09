  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var body = document.body;
  var head = document.querySelector('.site-head'), bar = document.getElementById('progress');
  var menuBtn = document.getElementById('menuBtn'), drawer = document.getElementById('drawer');
  menuBtn.addEventListener('click', function(){
    var open = drawer.hidden;
    drawer.hidden = !open;
    menuBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
    menuBtn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  });

  /* logo: raise hands on hover, focus or tap */
  var logo = document.getElementById('logoAnim'), brand = document.getElementById('brandLink');
  function speak(){ if (reduce) return; logo.classList.remove('speak'); void logo.offsetWidth; logo.classList.add('speak'); }
  brand.addEventListener('mouseenter', speak);
  brand.addEventListener('focus', speak);
  brand.addEventListener('click', speak);

  /* in-page links: close the menu; preset the form for demo / school links */
  document.addEventListener('click', function(e){
    var a = e.target.closest('a[href^="#"]');
    if (!a) return;
    if (!drawer.hidden) { drawer.hidden = true; menuBtn.setAttribute('aria-expanded', 'false'); menuBtn.setAttribute('aria-label', 'Open menu'); }
    var tgt = document.querySelector(a.getAttribute('href') === '#' ? 'body' : a.getAttribute('href')), h = tgt && tgt.querySelector('h2');
    if (h && !reduce) setTimeout(function(){ h.classList.remove('arrive'); void h.offsetWidth; h.classList.add('arrive'); }, 650);
    var p = a.getAttribute('data-preset');
    if (p === 'demo') document.getElementById('modeDemo').checked = true;
    if (p === 'school') document.getElementById('course').value = 'School collaboration';
  });

