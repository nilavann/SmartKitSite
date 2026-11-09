  /* hero collage: layers drift a little with the pointer */
  var collage = document.querySelector('.collage');
  if (collage && !reduce && window.matchMedia('(hover:hover) and (min-width:1000px)').matches) {
    var tx = 0, ty = 0, cx = 0, cy = 0, raf = 0;
    function step(){ cx += (tx - cx) * .1; cy += (ty - cy) * .1; collage.style.setProperty('--mx', cx.toFixed(3)); collage.style.setProperty('--my', cy.toFixed(3)); raf = (Math.abs(tx - cx) + Math.abs(ty - cy) > .003) ? requestAnimationFrame(step) : 0; }
    document.querySelector('.hero').addEventListener('mousemove', function(e){ var r = collage.getBoundingClientRect(); tx = Math.max(-1, Math.min(1, (e.clientX - r.left - r.width / 2) / r.width * 2)); ty = Math.max(-1, Math.min(1, (e.clientY - r.top - r.height / 2) / r.height * 2)); if (!raf) raf = requestAnimationFrame(step); });
    document.querySelector('.hero').addEventListener('mouseleave', function(){ tx = ty = 0; if (!raf) raf = requestAnimationFrame(step); });
  }

