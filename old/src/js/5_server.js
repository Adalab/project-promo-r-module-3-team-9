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
