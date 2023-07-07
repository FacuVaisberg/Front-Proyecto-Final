import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import MainScreen from './stacks/MainScreen';
import TabMedicoScreen from './stacks/TabMedicoScreen';
import TabFarmacia from './stacks/TabFarmacia';
import TabUsuario from './stacks/TabUsuario';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';

const Tabs = () => {
    const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
        <Tab.Navigator screenOptions={{headerShown: false}}>
            <Tab.Screen name="Principal" component={MainScreen} options={{tabBarStyle:{ display: "none"},}}/>
            <Tab.Screen name="Medico" component={TabMedicoScreen}/>
            <Tab.Screen name="Farmacia" component={TabFarmacia}/>
            <Tab.Screen name="Usuario" component={TabUsuario}/>
        </Tab.Navigator>
    </NavigationContainer>
  )
}

export default Tabs