import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import StackMainScreen from './stacks/StackMainScreen';
import StackMedicoScreen from './stacks/StackMedicoScreen';
import TabFarmacia from './stacks/TabFarmacia';
import TabUsuario from './stacks/TabUsuario';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';

const Tabs = () => {
    const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
        <Tab.Navigator screenOptions={{headerShown: false}}>
            <Tab.Screen name="Principal" component={StackMainScreen} options={{tabBarStyle:{ display: "none"},}}/>
            <Tab.Screen name="Medico" component={StackMedicoScreen}/>
            <Tab.Screen name="Farmacia" component={TabFarmacia}/>
            <Tab.Screen name="Usuario" component={TabUsuario}/>
        </Tab.Navigator>
    </NavigationContainer>
  )
}

export default Tabs