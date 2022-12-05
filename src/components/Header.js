import logo from '../images/logo-coding-time-2.png';
function Header (){
    return ( 
    <header className='headerprofilecards'>
    <a href='./index.html'>
      <img
        className='headerprofilecards__img'
        src={logo}
        alt='Logo Awesome Profile Cards'
      />
    </a>
    </header>)
}

export default Header;