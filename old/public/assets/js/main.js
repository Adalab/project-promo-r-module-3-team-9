'use strict';
/* eslint-disable no-unused-vars */

// 1- Elementos de la página que voy a usar.
//elementos HTML de la tarjeta preview
const resetBtn = document.querySelector('.js-card__button');
const profileName = document.querySelector('.js-profile__name');
const profileText = document.querySelector('.js-profile__text');
const profileImg = document.querySelector('.js-image');
const linkMobile = document.querySelector('.js-nav__mobile');
const linkEmail = document.querySelector('.js-nav__mail');
const linkLinkedin = document.querySelector('.js-nav__linkedin');
const linkGithub = document.querySelector('.js-nav__github');
const cardArticlePreview = document.querySelector('.js-card__article');

//Elemento HTML del form
const form = document.querySelector('.js-form');

//elementos HTML del form de profile-cards, la parte de DISEÑA
const designClicker = document.querySelector('.js-design-clicker');
const paletteRadio1 = document.querySelector('.palettes__1--radio');
const paletteRadio2 = document.querySelector('.palettes__2--radio');
const paletteRadio3 = document.querySelector('.palettes__3--radio');

//elementos HTML del form de profile-cards, la parte de RELLENA
const fillClicker = document.querySelector('.js-fill-clicker');
const inputName = document.querySelector('.js-name');
const inputJob = document.querySelector('.js-job');
const inputPhoto = document.querySelector('.js-photo');
const inputEmail = document.querySelector('.js-email');
const inputPhone = document.querySelector('.js-phone');
const inputLinkedin = document.querySelector('.js-linkedin');
const inputGithub = document.querySelector('.js-github');

//elementos HTML del form de profile-cards, la parte de COMPARTE
const shareClicker = document.querySelector('.js-share-clicker');
const errorMessage = document.querySelector('.js-errormessage');
const newCardLink = document.querySelector('.js-new_cardlink');
const twitterBtn = document.querySelector('.js-twitter-share-button');

//Arrows
const arrowDesign = document.querySelector('.js-arrow-design');
const sectionDesign = document.querySelector('.js-design__wrap2');
const arrowFill = document.querySelector('.js-arrow-fill');
const sectionFill = document.querySelector('.js-fill__wrap2');
const arrowShare = document.querySelector('.js-arrow-share');
const sectionShare = document.querySelector('.js-share-wrap-all');

//Buttom form
const createCardBtn = document.querySelector('.js-create__btn');
const sectionCardCreate = document.querySelector('.js-share__wrap3');

// 2- Variables globales: contiene los datos de la aplicación.

//Objeto que guarda la data del form
let data = {
  palette: '1',
  name: '',
  job: '',
  phone: '',
  email: '',
  linkedin: '',
  github: '',
  photo: '',
};

'use strict';
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

function resetBtnClick(event) {
  event.preventDefault();
  //resetear la variable data
  data = {
    palette: '1',
    name: '',
    job: '',
    phone: '',
    email: '',
    linkedin: '',
    github: '',
    photo: '',
  };
  //esto oculta la sección de Twitter
  sectionCardCreate.classList.add('collapsed');
  //resetear el link de la nueva tarjeta creada
  newCardLink.value = '';
  newCardLink.href = '';
  //resetear las paletas
  cardArticlePreview.classList.add('palette-1');
  cardArticlePreview.classList.remove('palette-2');
  cardArticlePreview.classList.remove('palette-3');
  paletteRadio1.checked = true;
  //resetear los inputs
  inputName.value = '';
  inputJob.value = '';
  fileField.value = '';
  profileImage.style.backgroundImage = '';
  profilePreview.style.backgroundImage = ''; // se queda por defecto la que hemos puesto
  inputEmail.value = '';
  inputPhone.value = '';
  inputLinkedin.value = '';
  inputGithub.value = '';
  //limpiar el local storage
  localStorage.clear();
  //resetear el link del botón de Twitter
  twitterBtn.href =
    'https://twitter.com/intent/tweet?text=Mirad%20mi%20nueva%20tarjeta%20';
  //volver a habilitar el botón de crear tarjeta
  createCardBtn.disabled = false;
  createCardBtn.classList.remove('button-disabled');

  updatePreview();
}

//*Se podría hacer con reset() pero habría que añadir lo de cambiar las clases de las paletas
// resetBtn.addEventListener('click', (event) => {
//   event.preventDefault();
//   form.reset();
//   updatePreview();
// });

//BUCLE ( añadir el bucle dentro de la funcion manejadora, mantener las paletas y update preview();
//(habría que añadir la clase "js_reset" a los inputs.)

// function reset() {
//   const inputsToReset = document.querySelectorAll('.js_reset');
//   for (let i = 0; i < inputsToReset.length; i++) {
//     inputsToReset[i].value = '';
//   }
// }

resetBtn.addEventListener('click', resetBtnClick);

'use strict';
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

// 3- Funciones.

//función que maneja el quitar y poner las clases de las paletas

function handlePalette(event) {
  cardArticlePreview.classList.remove('palette-1');
  cardArticlePreview.classList.remove('palette-2');
  cardArticlePreview.classList.remove('palette-3');
  cardArticlePreview.classList.add(`palette-${event.currentTarget.value}`);
}

//función que maneja los inputs del form
function handleInput(event) {
  const elementName = event.target.name;
  const value = event.target.value;

  if (elementName === 'linkedin') {
    const linkedinArray = value.split('/');
    const length = linkedinArray.length;
    if (value.endsWith('/')) {
      data[elementName] = linkedinArray[length - 2];
    } else {
      data[elementName] = linkedinArray[length - 1];
    }
  } else if (elementName === 'github') {
    const userGithub = value.replace('@', '');
    data[elementName] = userGithub;
  } else {
    data[elementName] = value;
  }

  updatePreview();
  saveData();
}

//TODO: preguntar cómo simplicar esto y hacer lo de linkedin y github
function updatePreview() {
  //Elemento input del Nombre en el formulario (RELLENA)
  const name = inputName.value;
  if (name === '') {
    profileName.innerHTML = 'Nombre apellido';
  } else {
    profileName.innerHTML = name;
  }
  //Elemento input del Trabajo en el formulario (RELLENA)
  const job = inputJob.value;
  if (job === '') {
    profileText.innerHTML = 'Front-end developer';
  } else {
    profileText.innerHTML = job;
  }
  //Elemento input del Teléfono en el formulario (RELLENA)
  const phone = inputPhone.value;
  if (phone === '') {
    linkMobile.href = '';
  } else {
    linkMobile.href = `tel:${phone}`;
  }
  //Elemento input del Email en el formulario (RELLENA)
  const email = inputEmail.value;
  if (email === '') {
    linkEmail.href = '';
  } else {
    linkEmail.href = `mailto:${email}`;
  }
  //Elemento input del linkedin en el formulario (RELLENA)
  const linkedin = inputLinkedin.value;
  if (linkedin === '') {
    linkLinkedin.href = '';
  } else {
    const linkedinArray = linkedin.split('/');
    const length = linkedinArray.length;
    let userLinkedin = '';
    if (linkedin.endsWith('/')) {
      userLinkedin = linkedinArray[length - 2];
    } else {
      userLinkedin = linkedinArray[length - 1];
    }
    linkLinkedin.href = `https://www.linkedin.com/in/${userLinkedin}`;
  }
  //Elemento input del github en el formulario (RELLENA)
  const github = inputGithub.value;
  if (github === '') {
    linkGithub.href = '';
  } else {
    const userGithub = github.replace('@', '');
    linkGithub.href = `https://github.com/${userGithub}`;
  }
}

// 4- Eventos.

//Eventos click para las paletas (elemento input type = "radio") del formulario (DISEÑA)
paletteRadio1.addEventListener('click', handlePalette);
paletteRadio2.addEventListener('click', handlePalette);
paletteRadio3.addEventListener('click', handlePalette);

//Evento para el form completo
form.addEventListener('input', handleInput);

//Cuando se carga la página
createCardBtn.disabled = false; //esto habrá que revisarlo

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

'use strict';
/* eslint-disable no-undef */

const fr = new FileReader();
const fileField = document.querySelector('.js__profile-upload-btn');
const profileImage = document.querySelector('.js__profile-image');
const profilePreview = document.querySelector('.js__profile-preview');

/**
 * Recoge el archivo añadido al campo de tipo "file"
 * y lo carga en nuestro objeto FileReader para que
 * lo convierta a algo con lo que podamos trabajar.
 * Añade un listener al FR para que ejecute una función
 * al tener los datos listos
 * @param {evento} e
 */
function getImage(e) {
  const myFile = e.currentTarget.files[0];
  fr.addEventListener('load', writeImage);
  fr.readAsDataURL(myFile);
}

/**
 * Una vez tenemos los datos listos en el FR podemos
 * trabajar con ellos ;)
 */
function writeImage() {
  /* En la propiedad `result` de nuestro FR se almacena
   * el resultado. Ese resultado de procesar el fichero que hemos cargado
   * podemos pasarlo como background a la imagen de perfil y a la vista previa
   * de nuestro componente.
   */
  profileImage.style.backgroundImage = `url(${fr.result})`;
  profilePreview.style.backgroundImage = `url(${fr.result})`;
  data.photo = fr.result;
}

/**
 * Añadimos los listeners necesarios:
 * - al botón visible para generar el click automático
 * - al campo oculto para cuando cambie su value
 */
fileField.addEventListener('change', getImage);

'use strict';
/* eslint-disable indent */
/* eslint-disable no-undef */

function handleCreateCardClick(event) {
  event.preventDefault();
  fetch('https://awesome-profile-cards.herokuapp.com/card', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())

    .then((responseJson) => {
      console.log(responseJson);
      if (responseJson.success) {
        sectionCardCreate.classList.remove('collapsed');
        errorMessage.innerHTML = '';
        newCardLink.innerHTML = responseJson.cardURL;
        newCardLink.href = responseJson.cardURL; //esto pone el href igual al link que nos devuelve el servidor
        twitterBtn.href += responseJson.cardURL;
        createCardBtn.disabled = true;
        createCardBtn.classList.add('button-disabled');
        localStorage.setItem(
          'newCardUrl',
          JSON.stringify(responseJson.cardURL)
        );
      } else {
        sectionCardCreate.classList.add('collapsed');

        errorMessage.innerHTML = 'Debes rellenar todos los campos';
        console.log('error');
      }
    });
}

createCardBtn.addEventListener('click', handleCreateCardClick);

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

//# sourceMappingURL=main.js.map
