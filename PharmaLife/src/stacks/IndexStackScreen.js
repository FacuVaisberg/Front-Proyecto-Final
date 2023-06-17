import { View, Text } from 'react-native'
import React from 'react'
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {IndexScreen} from "../../Index";
import RegistrarseScreen from "../screens/RegistrarseScreen";
import PrincipioScreen from '../screens/PrincipioScreen';
import LogInScreen from '../screens/LogInScreen';
import HomeMedico from '../screens/HomeMedico';


const IndexStackScreen = () => {
    const IndexStack= createNativeStackNavigator();
  return (
    <IndexStack.Navigator>
        <IndexStack.Screen name="Principio" component={PrincipioScreen}/>
        <IndexStack.Screen name="LogIn" component={LogInScreen}/>
        <IndexStack.Screen name="Registrarse" component={RegistrarseScreen}/>
        <IndexStack.Screen name="Medico" component={HomeMedico}/>
    </IndexStack.Navigator>
  )
}

export default IndexStackScreen