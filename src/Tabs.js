import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import StackMainScreen from './stacks/StackMainScreen';
import StackMedico from './stacks/StackMedicoScreen';
import TabFarmacia from './stacks/TabFarmacia';
import TabUsuario from './stacks/TabUsuario';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';

/* import { rol } from './UserContext';
import NavBarMedico from './components/NavBarMedico';
import NavBarUsuario from './components/NavBarUsuario';
import NavBarFarmacia from './components/NavBarFarmacia';
 */
  const Tabs = () => {
    const Tab = createBottomTabNavigator();
    /* let navBar;
  
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
  } */
  
    return (
      /* navbar, */
      <NavigationContainer>
          <Tab.Navigator screenOptions={{headerShown: false}}>
              <Tab.Screen name="Principal" component={StackMainScreen} options={{tabBarStyle:{ display: "none"},}}/>
              <Tab.Screen name="Medico" component={StackMedico}/>
              <Tab.Screen name="Farmacia" component={TabFarmacia}/>
              <Tab.Screen name="Usuario" component={TabUsuario}/>
          </Tab.Navigator>
      </NavigationContainer>
    )
  }
  
  export default Tabs