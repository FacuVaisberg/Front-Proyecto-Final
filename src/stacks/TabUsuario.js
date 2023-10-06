import { View, Text } from 'react-native'
import React from 'react'

import FarmaciasCercanas from '../screens/usuario/FarmaciasCercanas';
import HomeUsuario from '../screens/usuario/HomeUsuario';
import MisRecetas from '../screens/usuario/misRecetas';
import MisSolicitudes from '../screens/usuario/MisSolicitudes';

const TabUsuario = () => {
  const Usuario = createNativeStackNavigator();
  return (
    <Usuario.Navigator screenOptions={{headerShown: false}}>
        <Usuario.Screen name="HomeUsuario" component={HomeUsuario}/>
        <Usuario.Screen name="FarmaciasCercanas" component={FarmaciasCercanas}/>
        <Usuario.Screen name="MisSolicitudes" component={MisSolicitudes}/>
        <Usuario.Screen name="MisRecetas" component={MisRecetas}/>
    </Usuario.Navigator>
  )
}

export default TabUsuario