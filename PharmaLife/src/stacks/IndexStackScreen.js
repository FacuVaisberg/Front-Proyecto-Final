import { View, Text } from 'react-native'
import React from 'react'
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {IndexScreen} from "../../Index";
import LogInScreen from "../screens/LogInScreen";
import PrincipioScreen from '../screens/PrincipioScreen';
import Registrarse from '../screens/Registrarse';


const IndexStackScreen = () => {
    const IndexStack= createNativeStackNavigator();
  return (
    <IndexStack.Navigator>
        <IndexStack.Screen name="Principio" component={PrincipioScreen}/>
        <IndexStack.Screen name="LogIn" component={LogInScreen}/>
        <IndexStack.Screen name="Registrarse" component={Registrarse}/>
    </IndexStack.Navigator>
  )
}

export default IndexStackScreen