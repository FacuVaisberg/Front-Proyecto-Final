import React, {useState} from 'react';
import {Image, StyleSheet, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeMedico from '../screens/HomeMedico';
import AgregarRecetaScreen from '../screens/AgregarRecetaScreen';
import DatosPersonalesScreen from '../screens/DatosPersonalesScreen';
import MisPacientes from '../screens/MisPacientesScreen';
import RecetasSubidas from '../screens/RecetasSubidasScreen';

import LogoSolo from "../img/LogoSolo.png";
/* aca habria que importar los icons del navbar de cada una de las screens */

const Tab = createBottomTabNavigator();

export default function NavBarMedico({navigation}) {
  let options = {
    showLabel: false,
  };


  return (
    <Tab.Navigator screenOptions={options}>
        <Tab.Screen
            name="Home"
            children={()=><HomeMedico navigation={navigation}/>}
            options={{
                tabBarIcon: ({focused}) => (
                    <Image 
                      source={focused ? LogoSolo: LogoSolo} 
                      style={{width: 50, height: 50, marginLeft: 30, marginTop: 30}}
                    />
                )
            }}
        />

        <Tab.Screen
            name="AgregarReceta"
            children={()=><AgregarRecetaScreen navigation={navigation}/>}
            options={{
              tabBarIcon: ({focused}) => (
                  <Image 
                    source={focused ? iconReceta : iconReceta }
                    style={{width: 50, height: 50, marginLeft: 30, marginTop: 30}}
                  />
              ),
          }}
        />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({

});

