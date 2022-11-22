'use strict';
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

designClicker.addEventListener('click', (event) => {
  event.preventDefault();

  if (sectionDesign.classList.contains('collapsed')) {
    sectionDesign.classList.remove('collapsed');
    arrowDesign.classList.add('arrow-up');
    arrowDesign.classList.remove('arrow-down');
    closeFill();
    closeShare();
  }
});

fillClicker.addEventListener('click', (event) => {
  event.preventDefault();
  if (sectionFill.classList.contains('collapsed')) {
    sectionFill.classList.remove('collapsed');
    arrowFill.classList.add('arrow-up');
    arrowFill.classList.remove('arrow-down');
    closeDesign();
    closeShare();
  }
});

shareClicker.addEventListener('click', (event) => {
  event.preventDefault();
  if (sectionShare.classList.contains('collapsed')) {
    sectionShare.classList.remove('collapsed');
    arrowShare.classList.add('arrow-up');
    arrowShare.classList.remove('arrow-down');
    closeDesign();
    closeFill();
  }
});

function closeDesign() {
  sectionDesign.classList.add('collapsed');
  arrowDesign.classList.add('arrow-down');
  arrowDesign.classList.remove('arrow-up');
}

function closeShare() {
  sectionShare.classList.add('collapsed');
  arrowShare.classList.add('arrow-down');
  arrowShare.classList.remove('arrow-up');
}

function closeFill() {
  sectionFill.classList.add('collapsed');
  arrowFill.classList.add('arrow-down');
  arrowFill.classList.remove('arrow-up');
}

//si existe el link que nos devolvió la API, lo mostramos
//si no, escondemos la sección
if (JSON.parse(localStorage.getItem('newCardUrl'))) {
  //esto muestra la sección de Twitter
  sectionCardCreate.classList.remove('collapsed');
  //desactivar el botón de crear tarjeta
  createCardBtn.disabled = true;
  createCardBtn.classList.add('button-disabled');
  //poner el link naranjita con la URL que nos devolvió la API
  newCardLink.innerHTML = JSON.parse(localStorage.getItem('newCardUrl'));
  newCardLink.href = JSON.parse(localStorage.getItem('newCardUrl')); //esto pone el href igual al link que nos devuelve el servidor
  //poner el botón de twitter con la URL que nos devolvió la API
  twitterBtn.href += JSON.parse(localStorage.getItem('newCardUrl'));
} else {
  //esto oculta la sección de Twitter
  sectionCardCreate.classList.add('collapsed');
}
