  /* founder sticker: layers drift with the pointer */
  if (!reduce && window.matchMedia('(hover:hover)').matches) {
    document.querySelectorAll('.cutout').forEach(function(c){
      var tx = 0, ty = 0, cx = 0, cy = 0, raf = 0;
      function step(){ cx += (tx - cx) * .12; cy += (ty - cy) * .12; c.style.setProperty('--px', cx.toFixed(3)); c.style.setProperty('--py', cy.toFixed(3)); raf = (Math.abs(tx - cx) + Math.abs(ty - cy) > .003) ? requestAnimationFrame(step) : 0; }
      c.addEventListener('mousemove', function(e){ var r = c.getBoundingClientRect(); tx = Math.max(-1, Math.min(1, (e.clientX - r.left - r.width / 2) / r.width * 2)); ty = Math.max(-1, Math.min(1, (e.clientY - r.top - r.height / 2) / r.height * 2)); if (!raf) raf = requestAnimationFrame(step); });
      c.addEventListener('mouseleave', function(){ tx = ty = 0; if (!raf) raf = requestAnimationFrame(step); });
    });
  }

