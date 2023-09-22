import { View, Text } from 'react-native'
import React from 'react'
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import RegistrarseScreen from "../screens/principio/RegistrarseScreen";
import PrincipioScreen from '../screens/principio/PrincipioScreen';
import LogInScreen from '../screens/principio/LogInScreen';
import RegistrarDatosScreenMedico from '../screens/principio/RegistrarDatosScreenMedico';
import RegistrarDatosScreenFarmacia from '../screens/principio/RegistrarDatosScreenFarmacia';


const StackMainScreen = () => {  
    const StackMain= createNativeStackNavigator();
  return (
    <StackMain.Navigator screenOptions={{headerShown: false}}>
        <StackMain.Screen name="Principio" component={PrincipioScreen}/>
        <StackMain.Screen name="LogIn" component={LogInScreen}/>
        <StackMain.Screen name="Registrarse" component={RegistrarseScreen}/>
        <StackMain.Screen name="RegistrarDatosMedico" component={RegistrarDatosScreenMedico}/>
        <StackMain.Screen name="RegistrarDatosFarmacia" component={RegistrarDatosScreenFarmacia}/>
    </StackMain.Navigator>
  )
}

export default StackMainScreen