import '../styles/App.scss';
import logo from '../images/logo-coding-time-2.png';
import sword from '../images/espada-3.png';
import logoAdalab from '../images/logo-adalab.png';
import { useState } from 'react';

function App() {
  const [classColla, setClassColla] = useState('collapsed');
  const [classArrowDesign, setClassArrowDesign] = useState('arrow-up');
  const [classArrowFill, setClassArrowFill] = useState('arrow-down');
  const [classArrowShare, setClassArrowShare] = useState('arrow-down');
  const [user, setUser] = useState({
    palette: '1',
    name: '',
    job: '',
    phone: '',
    email: '',
    linkedin: '',
    github: '',
    photo: '',
  });
  const[classPalette, setClassPalette]= useState('palette-1');
  // lógica de las flechas del equipo de monica
  // for (let i = 0; i < titleHeader.length; i++) {
  //   titleHeader[i].addEventListener('click', () => {
  //     for (let j = 0; j < content.length; j++) {
  //       if (i === j) {
  //         content[j].classList.contains('collapsed') && content[j].classList.remove('collapsed');
  //         arrow[j].classList.contains('upsideDown')
  //           && arrow[j].classList.remove('upsideDown');
  //       } else {
  //         content[j].classList.add('collapsed');
  //         arrow[j].classList.add('upsideDown');
  //       }
  //     }
  //   });
  // }

  function handleClickDesign(event) {
    event.preventDefault();
    if (classColla === 'collapsed') {
      setClassColla('');
    }
    setClassArrowDesign('arrow-down');
    /*closeFill();
      closeShare();*/
  }

  function handleClickFill(event) {
    event.preventDefault();
    if (classColla === 'collapsed') {
      setClassColla('');
    }
    setClassArrowFill('arrow-up');
    //
    /*closeFill();
    closeShare();*/
  }
  function handleClickShare(event) {
    event.preventDefault();
    if (classColla === 'collapsed') {
      setClassColla('');
    }
    setClassArrowShare('arrow-up');
    //
    /*closeFill();
    closeShare();*/
  }

  function handleInput(event) {
    const inputName = event.currentTarget.name;
    const inputValue = event.currentTarget.value;
    setUser({ ...user, [inputName]: inputValue });
    if(inputName === 'palette' && inputValue === '1'){
      setClassPalette('palette-1')
    }if(inputName === 'palette' && inputValue === '2'){
      setClassPalette('palette-2')
      
    }if(inputName === 'palette' && inputValue === '3'){
      setClassPalette('palette-3')
      
    }
  }


  return (
    <div className='body__profilecards'>
      <header className='headerprofilecards'>
        <a href='./index.html'>
          <img
            className='headerprofilecards__img'
            src={logo}
            alt='Logo Awesome Profile Cards'
          />
        </a>
      </header>
      <main className='main'>
        <section className='js-card card'>
          <div className='card__wrap'>
            <button type='reset' className='js-card__button card__button'>
              <span className='card__button__reset__icon'>
                <i className='fa-sharp fa-solid fa-trash-can'></i>
              </span>
              Reset
            </button>
            <article className={`js-card__article card__article ${classPalette}`}>
              <div className='js-profile profile'>
                <h1 className='js-profile__name profile__name'>
                  Nombre apellido
                </h1>
                <p className='js-profile__text profile__text'>
                  Front-end developer
                </p>
              </div>
              <div className='js__profile-image js-image image'></div>
              <nav className='js-nav nav'>
                <ul className='js-nav__ul nav__ul'>
                  <li className='js-nav__li1 nav__li'>
                    <a
                      href=''
                      target='_blank'
                      className='js-nav__mobile nav__icon'
                    >
                      <i className='fa-solid fa-mobile-screen-button'></i>
                    </a>
                  </li>
                  <li className='js-nav__li2 nav__li'>
                    <a
                      href=''
                      target='_blank'
                      className='js-nav__mail nav__icon'
                    >
                      <i className='fa-regular fa-envelope'></i>
                    </a>
                  </li>
                  <li className='js-nav__li3 nav__li'>
                    <a
                      href=''
                      target='_blank'
                      className='js-nav__linkedin nav__icon'
                    >
                      <i className='fa-brands fa-linkedin-in'></i>
                    </a>
                  </li>
                  <li className='js-nav__li4 nav__li'>
                    <a
                      href=''
                      target='_blank'
                      className='js-nav__github nav__icon'
                    >
                      <i className='fa-brands fa-github-alt'></i>
                    </a>
                  </li>
                </ul>
              </nav>
            </article>
          </div>
        </section>
        <section className='main__form'>
          <form className='js-form' action='' method='POST'>
            <fieldset className='design'>
              <section
                className='design__wrap1 js-design-clicker'
                onClick={handleClickDesign}
              >
                <legend className='design__wrap1--legend'>
                  <i className='legend__icon fa-regular fa-object-ungroup'></i>
                  Diseña
                </legend>
                <img
                  className={`js-arrow-design legend__scroll ${classArrowDesign}`}
                  src={sword}
                  alt='Icono desplegable'
                />
              </section>
              <section
                className={`js-design__wrap2 design__wrap2 ${classColla}`}
              >
                <h3 className='color'>Colores</h3>
                <section className='palettes'>
                  <div className='palettes__1'>
                    <input
                      className='palettes__1--radio'
                      id='palette1'
                      type='radio'
                      name='palette'
                      value='1'
                      required
                      checked={user.palette === '1'}
                      onChange={handleInput}
                    />
                    <div className='palettes__1--color dark-green'></div>
                    <div className='palettes__1--color dirty-blue'></div>
                    <div className='palettes__1--color hospital-green'></div>
                  </div>
                  <div className='palettes__2'>
                    <input
                      className='palettes__2--radio'
                      id='palette2'
                      type='radio'
                      name='palette'
                      value='2'
                      required
                      checked={user.palette === '2'}
                      onChange={handleInput}
                    />
                    <div className='palettes__2--color dried-blood'></div>
                    <div className='palettes__2--color rusty-red'></div>
                    <div className='palettes__2--color tomato'></div>
                  </div>
                  <div className='palettes__3'>
                    <input
                      className='palettes__3--radio'
                      id='palette3'
                      type='radio'
                      name='palette'
                      value='3'
                      required
                      checked={user.palette === '3'}
                      onChange={handleInput}
                    />
                    <div className='palettes__3--color slate'></div>
                    <div className='palettes__3--color faded-orange'></div>
                    <div className='palettes__3--color light-grey-blue'></div>
                  </div>
                </section>
              </section>
              <div className='line'></div>
            </fieldset>
            <fieldset className='fill'>
              <section
                className='fill__wrap1 js-fill-clicker'
                onClick={handleClickFill}
              >
                <legend className='fill__wrap1--legend'>
                  <i className='legend__icon fa-regular fa-keyboard'></i>
                  Rellena
                </legend>
                <img
                  className={`js-arrow-fill legend__scroll fill__arrow ${classArrowFill}`}
                  src={sword}
                  alt='Icono desplegable'
                />
              </section>
              <section className={`js-fill__wrap2 fill__wrap2 ${classColla}`}>
                <label htmlFor='name' className='fill__label'>
                  Nombre completo
                </label>
                <input
                  className='js-name fill__input'
                  id='name'
                  type='text'
                  name='name'
                  required
                  placeholder='Ej: Marceline Abadeer'
                  onChange={handleInput}
                  value={user.name}
                />
                <label htmlFor='job' className='fill__label'>
                  Puesto
                </label>
                <input
                  className='js-job fill__input'
                  id='job'
                  type='text'
                  name='job'
                  required
                  placeholder='Ej: Front-end vampire queen'
                  onChange={handleInput}
                  value={user.job}
                />
                <label className='fill__label'>Imagen de perfil</label>
                <div className='js-photo fill__container'>
                  <label htmlFor='photo' className='fill__button'>
                    Añadir imagen
                  </label>
                  <input
                    type='file'
                    className='js__profile-upload-btn fill__input fill__input--hide'
                    id='photo'
                    name='photo'
                    required
                  />
                  <div className='js__profile-preview fill__square'></div>
                </div>
                <label htmlFor='email' className='fill__label'>
                  Email
                </label>
                <input
                  className='js-email fill__input'
                  id='email'
                  type='email'
                  name='email'
                  required
                  placeholder='Ej: vampire.queen@candymail.com'
                  onChange={handleInput}
                  value={user.email}
                />
                <label htmlFor='phone' className='fill__label'>
                  Teléfono
                </label>
                <input
                  className='js-phone fill__input'
                  id='phone'
                  type='tel'
                  name='phone'
                  required
                  placeholder='Ej: 555-55-55-55'
                  onChange={handleInput}
                  value={user.phone}
                />
                <label htmlFor='linkedin' className='fill__label'>
                  Linkedin
                </label>
                <input
                  className='js-linkedin fill__input'
                  id='linkedin'
                  type='text'
                  name='linkedin'
                  required
                  placeholder='Ej: linkedin.com/in/marceline-abadeer'
                  onChange={handleInput}
                  value={user.linkedin}
                />
                <label htmlFor='github' className='fill__label'>
                  Github
                </label>
                <input
                  className='js-github fill__input'
                  id='github'
                  type='text'
                  name='github'
                  required
                  placeholder='Ej: @marceline-abadeer'
                  onChange={handleInput}
                  value={user.github}
                />
              </section>
              <div className='line'></div>
            </fieldset>
            <fieldset className='share'>
              <section
                className='share__wrap1 js-share-clicker'
                onClick={handleClickShare}
              >
                <legend className='share__wrap1--legend'>
                  <i className='legend__icon fa-solid fa-share-nodes'></i>
                  Comparte
                </legend>
                <img
                  className={`js-arrow-share legend__scroll ${classArrowShare}`}
                  src={sword}
                  alt='Icono desplegable'
                />
              </section>
              <div className={`js-share-wrap-all ${classColla}`}>
                <section className='js-share__wrap2 share__wrap2'>
                  <button
                    className='js-create__btn share__wrap2--button'
                    id='created-card'
                    type='submit'
                  >
                    <i className='share__card fa-regular fa-address-card'></i>
                    Crear tarjeta
                  </button>
                  <p className='js-errormessage share__wrap2--errormessage'></p>
                </section>
                <div className='line'></div>
                <section className='js-share__wrap3 share__wrap3 collapsed'>
                  <h3 className='share__wrap3--h3'>
                    La tarjeta ha sido creada:
                  </h3>
                  <a
                    className='share__wrap3--link js-new_cardlink'
                    href='#'
                    target='_blank'
                  ></a>
                  <a
                    className='share__wrap3--twitter twitter-share-button js-twitter-share-button'
                    href='https://twitter.com/intent/tweet?text=¡Mirad%20mi%20nueva%20tarjeta!%20&hashtags=CodingTime,Adalab,PromoRadia&url='
                    data-size='large'
                    target='_blank'
                  >
                    <i className='fa-brands fa-twitter share__wrap3--twitter--icon'></i>
                    Compartir en twitter
                  </a>
                  <div className='line'></div>
                </section>
              </div>
            </fieldset>
          </form>
        </section>
      </main>
      <footer className='footer'>
        <a href='./index.html'>
          <p className='footer__paragraph'>
            Algebraic profile-cards &copy;2022
          </p>
        </a>
        <a href='https://adalab.es/' target='blank'>
          <img className='footer__img' src={logoAdalab} alt='Logo Adalab' />
        </a>
      </footer>
    </div>
  );
}

export default App;
