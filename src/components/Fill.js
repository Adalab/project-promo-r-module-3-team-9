function Fill() {
  return (
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
      <section className={`js-fill__wrap2 fill__wrap2 ${classCollaFill}`}>
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
  );
}

export default Fill;
