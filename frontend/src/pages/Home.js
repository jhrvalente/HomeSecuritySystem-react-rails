import React from 'react';
import SideBar from '../components/SideBar';
import SwitchList from '../components/SwitchList';

const Home = () => {

  const SWITCHES = ["Alarme", "Modo Teste", "Iluminação Exterior", "Camara", "Sirene", "Garagem"]; 

  return (
    <React.Fragment>
      <SideBar/>
      <SwitchList switches={SWITCHES}/>
    </React.Fragment>
  ); 
}

export default Home;