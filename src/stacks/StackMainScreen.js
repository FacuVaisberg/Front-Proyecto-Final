import { View, Text } from 'react-native'
import React from 'react'
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import RegistrarseScreen from "../screens/RegistrarseScreen";
import PrincipioScreen from '../screens/PrincipioScreen';
import LogInScreen from '../screens/LogInScreen';
import RegistrarDatosScreenMedico from '../screens/RegistrarDatosScreenMedico';
import RegistrarDatosScreenFarmacia from '../screens/RegistrarDatosScreenFarmacia';


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