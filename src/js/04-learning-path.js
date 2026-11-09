  /* learning path: a curve through the five numbers that draws as the section scrolls */
  var pathWrap = document.getElementById('pathWrap'), pSvg = document.getElementById('pathSvg'), pGhost = document.getElementById('pathGhost'), pInk = document.getElementById('pathInk'), pLen = 0, stages = pathWrap.querySelectorAll('.stage');
  function layoutPath(){
    var r = pathWrap.getBoundingClientRect(), pts = [];
    pathWrap.querySelectorAll('.num').forEach(function(n){ var b = n.getBoundingClientRect(); pts.push([b.left + b.width / 2 - r.left, b.top + b.height / 2 - r.top]); });
    pSvg.setAttribute('width', r.width); pSvg.setAttribute('height', r.height); pSvg.style.width = r.width + 'px'; pSvg.style.height = r.height + 'px';
    var d = 'M' + pts[0][0] + ' ' + pts[0][1];
    for (var i = 0; i < pts.length - 1; i++) {
      var p0 = pts[i - 1] || pts[i], p1 = pts[i], p2 = pts[i + 1], p3 = pts[i + 2] || p2;
      d += ' C' + (p1[0] + (p2[0] - p0[0]) / 6) + ' ' + (p1[1] + (p2[1] - p0[1]) / 6) + ' ' + (p2[0] - (p3[0] - p1[0]) / 6) + ' ' + (p2[1] - (p3[1] - p1[1]) / 6) + ' ' + p2[0] + ' ' + p2[1];
    }
    pGhost.setAttribute('d', d); pInk.setAttribute('d', d);
    pLen = pInk.getTotalLength(); pInk.style.strokeDasharray = pLen; drawPath();
  }
  function drawPath(){
    if (!pLen) return;
    if (reduce) { pInk.style.strokeDashoffset = 0; stages.forEach(function(s){ s.classList.add('lit'); }); return; }
    var r = pathWrap.getBoundingClientRect(), vh = window.innerHeight;
    var p = Math.max(0, Math.min(1, (vh * .8 - r.top) / (r.height + vh * .3)));
    pInk.style.strokeDashoffset = pLen * (1 - p);
    stages.forEach(function(s, i){ s.classList.toggle('lit', p >= i / (stages.length - 1) - .02); });
  }

  function onScroll(){
    var sy = window.scrollY, docH = document.documentElement.scrollHeight - window.innerHeight;
    head.classList.toggle('scrolled', sy > 8);
    bar.style.width = (docH > 0 ? Math.min(1, sy / docH) * 100 : 0) + '%';
    drawPath();
  }
  var ticking = false;
  window.addEventListener('scroll', function(){ if (!ticking) { ticking = true; requestAnimationFrame(function(){ onScroll(); ticking = false; }); } }, { passive: true });
  var rt; window.addEventListener('resize', function(){ clearTimeout(rt); rt = setTimeout(layoutPath, 150); });
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(layoutPath);
  window.addEventListener('load', layoutPath);
  layoutPath(); onScroll();

