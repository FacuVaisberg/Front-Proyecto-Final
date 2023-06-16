import { View, Text } from 'react-native'
import React from 'react'
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {IndexScreen} from "../screens/IndexScreen";
import {LogInScreen} from "../screens/LogInScreen";


const IndexStackScreen = () => {
    const IndexStack= createNativeStackNavigator();
  return (
    <IndexStack.Navigator>
        <IndexStack.Screen name="Index" component={IndexScreen}/>
        <IndexStack.Screen name="LogIn" component={LogInScreen}/>
    </IndexStack.Navigator>
  )
}

export default IndexStackScreen