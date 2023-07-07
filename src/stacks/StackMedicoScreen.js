import { View, Text } from 'react-native'
import React from 'react'
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import HomeMedico from '../screens/HomeMedico';
import AgregarRecetaScreen  from '../screens/AgregarRecetaScreen';
import RecetasSubidasScreen from '../screens/RecetasSubidasScreen';

const StackMedicoScreen = () => {
    const StackMedico = createNativeStackNavigator();
  return (
    <StackMedico.Navigator>
        <StackMedico.Screen name="Medico" component={HomeMedico}/>
        <StackMedico.Screen name="RecetasSubidas" component={RecetasSubidasScreen}/>
        <StackMedico.Screen name="AgregarReceta" component={AgregarRecetaScreen}/>
    </StackMedico.Navigator>
  )
}

export default StackMedicoScreen