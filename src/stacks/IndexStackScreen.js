import { View, Text } from 'react-native'
import React from 'react'
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {IndexScreen} from "../../Index";
import RegistrarseScreen from "../screens/RegistrarseScreen";
import PrincipioScreen from '../screens/PrincipioScreen';
import LogInScreen from '../screens/LogInScreen';
import HomeMedico from '../screens/HomeMedico';
import RegistrarDatosScreenMedico from '../screens/RegistrarDatosScreenMedico';
import AgregarRecetaScreen from '../screens/AgregarRecetaScreen';
import RecetasSubidasScreen from '../screens/RecetasSubidasScreen';


const IndexStackScreen = () => {
    const IndexStack= createNativeStackNavigator();
  return (
    <IndexStack.Navigator screenOptions={{headerShown: false}}>
        <IndexStack.Screen name="Principio" component={PrincipioScreen}/>
        <IndexStack.Screen name="LogIn" component={LogInScreen}/>
        <IndexStack.Screen name="Registrarse" component={RegistrarseScreen}/>
        <IndexStack.Screen name="RegistrarDatosMedico" component={RegistrarDatosScreenMedico}/>
        <IndexStack.Screen name="Medico" component={HomeMedico}/>
        <IndexStack.Screen name="AgregarReceta" component={AgregarRecetaScreen}/>
        <IndexStack.Screen name="RecetasSubidas" component={RecetasSubidasScreen}/>
    </IndexStack.Navigator>
  )
}

export default IndexStackScreen