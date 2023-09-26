import React from 'react'
import {createNativeStackNavigator} from "@react-navigation/native-stack";

import HomeFarmacia from '../screens/farmacia/HomeFarmacia';
import RecetasPendientes from '../screens/farmacia/RecetasPendientes';
import RegistroVentas from '../screens/farmacia/RegistroVentas';

const TabFarmacia = () => {
  const Farmacia = createNativeStackNavigator();
  return (
    <Farmacia.Navigator screenOptions={{headerShown: false}}>
        <Farmacia.Screen name="HomeFarmacia" component={HomeFarmacia}/>
        <Farmacia.Screen name="RegistroVentas" component={RegistroVentas}/>
        <Farmacia.Screen name="RecetasPendientes" component={RecetasPendientes}/>
    </Farmacia.Navigator>
  )
}

export default TabFarmacia