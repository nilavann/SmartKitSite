  /* enquiry form → WhatsApp message */
  var ages = ['4','5','6','7','8','9','10','11','12','13','14+'], ageBox = document.getElementById('ageChoices');
  ageBox.innerHTML = ages.map(function(a, i){ return '<label><input type="radio" name="age" id="age' + i + '" value="' + a + '"><span>' + a + '</span></label>'; }).join('');
  var form = document.getElementById('enqForm'), err = document.getElementById('formErr'), done = document.getElementById('done'), wa = document.getElementById('waLink'), send = document.getElementById('sendBtn');
  form.addEventListener('submit', function(e){
    e.preventDefault();
    var name = form.childName.value.trim(), phone = form.phone.value.replace(/\D/g, ''), age = (form.querySelector('input[name=age]:checked') || {}).value, mode = form.querySelector('input[name=mode]:checked').value, course = form.course.value;
    var problems = [];
    if (!name) problems.push("your child's name");
    if (phone.length < 10) problems.push('a 10-digit phone number');
    if (problems.length) { err.hidden = false; err.textContent = 'Please add ' + problems.join(' and ') + '.'; form.childName.setAttribute('aria-invalid', name ? 'false' : 'true'); form.phone.setAttribute('aria-invalid', phone.length < 10 ? 'true' : 'false'); (name ? form.phone : form.childName).focus(); return; }
    err.hidden = true; form.childName.removeAttribute('aria-invalid'); form.phone.removeAttribute('aria-invalid');
    var msg = 'Hello Smart Kids! I would like to enquire.\nChild: ' + name + (age ? '\nAge: ' + age : '') + '\nClass: ' + mode + (course ? '\nCourse: ' + course : '') + '\nParent phone: ' + phone;
    wa.href = 'https://wa.me/919487388419?text=' + encodeURIComponent(msg);
    done.hidden = false; send.classList.add('sent'); send.textContent = 'Message ready';
    wa.focus();
  });
