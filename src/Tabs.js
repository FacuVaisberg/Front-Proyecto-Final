import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import StackMainScreen from './stacks/StackMainScreen';
import { rol } from './UserContext';
import NavBarMedico from './components/NavBarMedico';
import NavBarUsuario from './components/NavBarUsuario';
import NavBarFarmacia from './components/NavBarFarmacia';


const Tabs = () => {
  const Tab = createBottomTabNavigator();
  let navBar;

  if (rol === 0) {
    navBar = <StackMainScreen/>
  } else if (rol === 1) {
    navBar = <NavBarFarmacia />;
  } else if (rol === 2) {
    navBar = <NavBarUsuario />;
  } else if(rol === 3){
    navBar = <NavBarMedico />;
  } else {
    navBar = <p>Rol no reconocido</p>;
  }

  return navBar;
}

export default Tabs