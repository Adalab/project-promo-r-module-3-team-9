function CardPreview() {
  return (
    <section className='js-card card'>
      <div className='card__wrap'>
        <button
          type='reset'
          className='js-card__button card__button'
          onClick={handleResetBtn}
        >
          <span className='card__button__reset__icon'>
            <i className='fa-sharp fa-solid fa-trash-can'></i>
          </span>
          Reset
        </button>
        <article className={`js-card__article card__article ${classPalette}`}>
          <div className='js-profile profile'>
            <h1 className='js-profile__name profile__name'>
              {user.name || 'Nombre apellido'}
            </h1>
            <p className='js-profile__text profile__text'>
              {user.job || 'Front-end developer'}
            </p>
          </div>
          <div className='js__profile-image js-image image'></div>
          <nav className='js-nav nav'>
            <ul className='js-nav__ul nav__ul'>
              <li className='js-nav__li1 nav__li'>
                <a
                  href={user.phone ? `tel:${user.phone}` : ''}
                  target='_blank'
                  className='js-nav__mobile nav__icon'
                >
                  <i className='fa-solid fa-mobile-screen-button'></i>
                </a>
              </li>
              <li className='js-nav__li2 nav__li'>
                <a
                  href={user.email ? `mailto:${user.email}` : ''}
                  target='_blank'
                  className='js-nav__mail nav__icon'
                >
                  <i className='fa-regular fa-envelope'></i>
                </a>
              </li>
              <li className='js-nav__li3 nav__li'>
                <a
                  href={
                    user.linkedin
                      ? `https://www.linkedin.com/in/${user.linkedin}`
                      : '#'
                  }
                  target='_blank'
                  className='js-nav__linkedin nav__icon'
                >
                  <i className='fa-brands fa-linkedin-in'></i>
                </a>
              </li>
              <li className='js-nav__li4 nav__li'>
                <a
                  href={user.github ? `https://github.com/${user.github}` : '#'}
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
  );
}
export default CardPreview;
