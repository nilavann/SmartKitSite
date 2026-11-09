  /* nav: mark the section in view */
  if ('IntersectionObserver' in window) {
    var links = {}; document.querySelectorAll('.nav a').forEach(function(a){ links[a.getAttribute('href')] = a; });
    var sio = new IntersectionObserver(function(es){
      es.forEach(function(e){ var a = links['#' + e.target.id]; if (a) a.classList.toggle('on', e.isIntersecting); });
    }, { rootMargin: '-40% 0px -55% 0px' });
    Object.keys(links).forEach(function(h){ var s = document.querySelector(h); if (s) sio.observe(s); });
  }

