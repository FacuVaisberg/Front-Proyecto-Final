import { View, Text } from 'react-native'
import React from 'react'
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import HomeMedico from '../screens/HomeMedico';
import AgregarRecetaScreen  from '../screens/AgregarRecetaScreen';
import RecetasSubidasScreen from '../screens/RecetasSubidasScreen';

const TabMedicoScreen = () => {
    const TabMedico = createNativeStackNavigator();
  return (
    <TabMedico.Navigator>
        <TabMedico.Screen name="Medico" component={HomeMedico}/>
        <TabMedico.Screen name="RecetasSubidas" component={RecetasSubidasScreen}/>
        <TabMedico.Screen name="AgregarReceta" component={AgregarRecetaScreen}/>
    </TabMedico.Navigator>
  )
}

export default TabMedicoScreen