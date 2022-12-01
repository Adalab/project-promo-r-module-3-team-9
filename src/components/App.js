import '../styles/App.scss';
import { useState } from 'react';
import dataApi from '../services/dataApi';
import Card from './Card';
import Footer from './Footer';
//import dataApi from '../services/dataApi';
function App() {
  //VARIABLES DE ESTADO
  const [dataResult, setDataResult] = useState({});
  const [classCollaDesign, setClassCollaDesign] = useState('');
  const [classCollaFill, setClassCollaFill] = useState('collapsed');
  const [classCollaShare, setClassCollaShare] = useState('collapsed');
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
    photo:
      'https://pbs.twimg.com/profile_images/3612785540/f27afb74b4c1952a16be6b5ea79f65ca_400x400.jpeg',
  });
  const [classPalette, setClassPalette] = useState('palette-1');
  const [classCollaCreateCard, setClassCollaCreateCard] = useState('collapsed');

  //FUNCIONES DE EVENTOS (HANDLE)
  function handleClickDesign(event) {
    event.preventDefault();
    if (classCollaDesign === 'collapsed') {
      setClassCollaDesign('');
    }
    setClassArrowDesign('arrow-up');
    //Hide fill section and update arrow direction
    setClassCollaFill('collapsed');
    setClassArrowFill('arrow-down');
    //Hide share section and update arrow direction
    setClassCollaShare('collapsed');
    setClassArrowShare('arrow-down');
  }

  function handleClickFill(event) {
    event.preventDefault();
    if (classCollaFill === 'collapsed') {
      setClassCollaFill('');
    }
    setClassArrowFill('arrow-up');
    //Hide design section and update arrow direction
    setClassCollaDesign('collapsed');
    setClassArrowDesign('arrow-down');
    //Hide share section and update arrow direction
    setClassCollaShare('collapsed');
    setClassArrowShare('arrow-down');
  }

  function handleClickShare(event) {
    event.preventDefault();
    if (classCollaShare === 'collapsed') {
      setClassCollaShare('');
    }
    setClassArrowShare('arrow-up');
    //Hide design section and update arrow direction
    setClassCollaDesign('collapsed');
    setClassArrowDesign('arrow-down');
    //Hide fill section and update arrow direction
    setClassCollaFill('collapsed');
    setClassArrowFill('arrow-down');
  }

  function handleInput(event) {
    const inputName = event.currentTarget.name;
    const inputValue = event.currentTarget.value;
    setUser({ ...user, [inputName]: inputValue });
    if (inputName === 'palette' && inputValue === '1') {
      setClassPalette('palette-1');
    }
    if (inputName === 'palette' && inputValue === '2') {
      setClassPalette('palette-2');
    }
    if (inputName === 'palette' && inputValue === '3') {
      setClassPalette('palette-3');
    }
  }
  
  function handleCreateBtnClick(event) {
    event.preventDefault();
    dataApi(user).then((data) => {
      if (data.success) {
        setDataResult(data);
        setClassCollaCreateCard('');
      }
    });
  }
  //Reset button
  const handleResetBtn = () => {
    //Empty variable
    setUser({
      palette: '1',
      name: '',
      job: '',
      phone: '',
      email: '',
      linkedin: '',
      github: '',
      photo: '',
    });
    //Change palette and open design section
    setClassPalette('palette-1');
    setClassCollaDesign('');
    //Close fill section, update arrow direction
    setClassCollaFill('collapsed');
    setClassArrowFill('arrow-down');
    //Close share section, update arrow direction
    setClassCollaShare('collapsed');
    setClassArrowShare('arrow-down');
    setClassCollaCreateCard('collapsed');
  };

  return (
    <div className='body__profilecards'>
      <Card user={user} dataResult={dataResult} handleChange={handleChange} handleClickDesign={handleClickDesign} classArrowDesign={classArrowDesign}></Card>
      <Footer></Footer>
    </div>
  );
}

export default App;
