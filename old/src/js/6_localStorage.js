'use strict';
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

function saveData() {
  localStorage.setItem('dataFromForm', JSON.stringify(data));
}

function printFromLocal() {
  data = JSON.parse(localStorage.getItem('dataFromForm'));
  if (data.palette === '2') {
    paletteRadio1.checked = false;
    paletteRadio2.checked = true;
    paletteRadio3.checked = false;
    cardArticlePreview.classList.add('palette-2');
    cardArticlePreview.classList.remove('palette-1');
    cardArticlePreview.classList.remove('palette-3');
  } else if (data.palette === '3') {
    paletteRadio1.checked = false;
    paletteRadio2.checked = false;
    paletteRadio3.checked = true;
    cardArticlePreview.classList.add('palette-3');
    cardArticlePreview.classList.remove('palette-1');
    cardArticlePreview.classList.remove('palette-2');
  } else {
    paletteRadio1.checked = true;
    paletteRadio2.checked = false;
    paletteRadio3.checked = false;
    cardArticlePreview.classList.add('palette-1');
    cardArticlePreview.classList.remove('palette-2');
    cardArticlePreview.classList.remove('palette-3');
  }

  inputName.value = data.name;
  inputJob.value = data.job;
  if (data.photo) {
    profileImage.style.backgroundImage = `url(${data.photo})`;
    profilePreview.style.backgroundImage = `url(${data.photo})`;
  }
  inputPhone.value = data.phone;
  inputEmail.value = data.email;
  inputLinkedin.value = data.linkedin;
  inputGithub.value = data.github;

  //esta función pinta lo que tenga data en la tarjeta preview
  updatePreview();
}

//if el localStorage está relleno, ejecuta printPreview()
//si no está relleno hacemos el fetch
if (JSON.parse(localStorage.getItem('dataFromForm'))) {
  printFromLocal();
}
