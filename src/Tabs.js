import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import IndexStackScreen from './stacks/IndexStackScreen';
import SettingsStackScreen from './stacks/SettingsStackScreen';
import { NavigationContainer } from "@react-navigation/native";

const Tabs = () => {
    const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
        <Tab.Navigator screenOptions={{headerShown: false}}>
            <Tab.Screen name="HomeMenu" component={IndexStackScreen} options={{tabBarStyle:{ display: "none"},
}}/>
            {/* <Tab.Screen name="settingss" component={SettingsStackScreen}/> */}
        </Tab.Navigator>
    </NavigationContainer>
  )
}

export default Tabs