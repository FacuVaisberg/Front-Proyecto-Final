import { View, Text } from 'react-native'
import React from 'react'
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import HomeMedico from '../screens/HomeMedico';
import AgregarRecetaScreen  from '../screens/AgregarRecetaScreen';
import RecetasSubidasScreen from '../screens/RecetasSubidasScreen';
import DatosPersonalesScreen from '../screens/DatosPersonalesScreen';
import MisPacientesScreen from '../screens/MisPacientesScreen';

const StackMedicoScreen = () => {
    const StackMedico = createNativeStackNavigator();
  return (
    <StackMedico.Navigator screenOptions={{headerShown: false}}>
        <StackMedico.Screen name="Medico" component={HomeMedico}/>
        <StackMedico.Screen name="RecetasSubidas" component={RecetasSubidasScreen}/>
        <StackMedico.Screen name="AgregarReceta" component={AgregarRecetaScreen}/>
        <StackMedico.Screen name="DatosPersonales" component={DatosPersonalesScreen}/>
        <StackMedico.Screen name="MisPacientes" component={MisPacientesScreen}/>
    </StackMedico.Navigator>
  )
}

export default StackMedicoScreen