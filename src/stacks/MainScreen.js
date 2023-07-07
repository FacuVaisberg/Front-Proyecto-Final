import { View, Text } from 'react-native'
import React from 'react'
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import RegistrarseScreen from "../screens/RegistrarseScreen";
import PrincipioScreen from '../screens/PrincipioScreen';
import LogInScreen from '../screens/LogInScreen';
import RegistrarDatosScreenMedico from '../screens/RegistrarDatosScreenMedico';


const MainScreen = () => {  
    const Main= createNativeStackNavigator();
  return (
    <Main.Navigator screenOptions={{headerShown: false}}>
        <Main.Screen name="Principio" component={PrincipioScreen}/>
        <Main.Screen name="LogIn" component={LogInScreen}/>
        <Main.Screen name="Registrarse" component={RegistrarseScreen}/>
        <Main.Screen name="RegistrarDatosMedico" component={RegistrarDatosScreenMedico}/>
    </Main.Navigator>
  )
}

export default MainScreen