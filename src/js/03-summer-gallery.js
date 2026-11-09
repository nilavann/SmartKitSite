  /* summer camp gallery */
  var PHOTOS = [ ['Camp days','c-orange','circle-time','A teacher leading a group activity with children seated in a circle'], ['Games','c-green','chess','Two children playing chess on a green board'], ['Art and craft','c-purple','craft','A girl doing a paper craft activity at her desk'], ['Big smiles','c-yellow','big-grin','Two boys grinning during an activity'], ['Thinking caps on','c-red','class-smiles','Children smiling with fingers on their chins during a class game'] ], cur = 0;
  function closeLight(){ if (!lightRoot.innerHTML) return; lightRoot.innerHTML = ''; document.removeEventListener('keydown', onKey); if (lastFocus) lastFocus.focus(); }
  function renderLight(){
    var p = PHOTOS[cur];
    lightRoot.innerHTML = '<div class="lightbox" data-lclose role="dialog" aria-modal="true" aria-label="Summer camp photos"><div class="box"><div class="frame ' + p[1] + '"><span class="stand"><img src="img/photo-' + p[2] + '.jpg" alt="' + esc(p[3]) + '"></span><span class="cap">' + esc(p[0]) + '</span></div><div class="nav-btns"><button type="button" data-prev>Previous</button><button type="button" data-next>Next</button><button type="button" data-lclose>Close</button></div></div></div>';
    lightRoot.querySelector('[data-next]').focus();
  }
  document.getElementById('pile').addEventListener('click', function(e){ var b = e.target.closest('[data-photo]'); if (!b) return; lastFocus = b; cur = +b.getAttribute('data-photo'); renderLight(); document.addEventListener('keydown', onKey); });
  lightRoot.addEventListener('click', function(e){
    if (e.target.hasAttribute('data-next')) { cur = (cur + 1) % PHOTOS.length; renderLight(); }
    else if (e.target.hasAttribute('data-prev')) { cur = (cur + PHOTOS.length - 1) % PHOTOS.length; renderLight(); }
    else if (e.target.hasAttribute('data-lclose')) closeLight();
  });

