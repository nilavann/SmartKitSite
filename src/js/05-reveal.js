  /* reveal on scroll: cards, frames, steps and headings rise in with a short stagger */
  if (!reduce && 'IntersectionObserver' in window) {
    var SEL = '.sec-head, .teach-foot > *, .reasons li, .story > *, .vm div, .founder > *, .offer, .camp > *, .pile button, .facts div, .steps li, .faq details, .enquire > *, .visit-head, .map-panel, .centre, .trust .wrap > *';
    if (window.matchMedia('(min-width:1000px)').matches) SEL += ', .pcard';
    var list = [].slice.call(document.querySelectorAll(SEL)).filter(function(el){ return !el.closest('.hero'); });
    list = list.filter(function(el){ return !list.some(function(o){ return o !== el && el.contains(o); }); });
    var counts = new Map();
    list.forEach(function(el){
      var par = el.parentElement, n = counts.get(par) || 0; counts.set(par, n + 1);
      el.classList.add('rv'); el.style.setProperty('--i', Math.min(n, 6));
      if (el.matches('.frame, .pile button, .pcard, .vm div, .facts div')) el.classList.add('pop');
    });
    var rio = new IntersectionObserver(function(es){
      es.forEach(function(e){ if (e.isIntersecting || e.boundingClientRect.top < 0) { e.target.classList.add('in'); rio.unobserve(e.target); } });
    }, { threshold: .12, rootMargin: '0px 0px -6% 0px' });
    list.forEach(function(el){ rio.observe(el); });
  }

