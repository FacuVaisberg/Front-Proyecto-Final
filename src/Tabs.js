import React from 'react'
import { Text } from 'react-native-web';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import StackMainScreen from './stacks/StackMainScreen';
import { useContext } from 'react';
import { useUser } from '../UserContext';
import NavBarMedico from './components/NavBarMedico';
import NavBarUsuario from './components/NavBarUsuario';
import NavBarFarmacia from './components/NavBarFarmacia';
import RecetasPendientes from './screens/farmacia/RecetasPendientes';


  const Tabs = () => {
    const Tab = createBottomTabNavigator();
    
    let {rol} = useUser();
    console.log('rol ',rol)
    if (rol == 0) {
    return <StackMainScreen/>
  } else if (rol == 1) {
    return <NavBarFarmacia />;
  } else if (rol == 2) {
    return <NavBarUsuario />;
  } else if(rol == 3){
    return <NavBarMedico />;
  } else{
    return <RecetasPendientes/>;
  }

  }
  
  export default Tabs