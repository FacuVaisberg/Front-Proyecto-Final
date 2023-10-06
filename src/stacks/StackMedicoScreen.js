import { View, Text } from 'react-native'
import React from 'react'
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import HomeMedico from '../screens/medico/HomeMedico';
import AgregarRecetaScreen  from '../screens/medico/AgregarRecetaScreen';
import RecetasSubidasScreen from '../screens/medico/RecetasSubidasScreen';
import DatosPersonalesScreen from '../screens/medico/DatosPersonalesScreen';
import MisPacientesScreen from '../screens/medico/MisPacientesScreen';

const StackMedicoScreen = () => {
    const StackMedico = createNativeStackNavigator();
  return (
    <StackMedico.Navigator screenOptions={{headerShown: false}}>
        <StackMedico.Screen name="Medico" component={HomeMedico}/>
        <StackMedico.Screen name="RecetasSubidas" component={RecetasSubidasScreen}/>
        <StackMedico.Screen name="AgregarReceta" component={AgregarRecetaScreen}/>
        <StackMedico.Screen name="DatosPersonales" component={DatosPersonalesScreen}/>
    </StackMedico.Navigator>
  )
}

export default StackMedicoScreen