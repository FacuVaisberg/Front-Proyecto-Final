import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Index from './Index';
import Button from './src/components/Button';
import Tabs from './src/Tabs';

export default function App() {
  return <Tabs/>;
}

const styles = StyleSheet.create({
  baseText: {
    fontWeight: 'bold',
  },
  innerText: {
    color: 'red',
  },
  view: {
    flex: 1,
    backgroundColor:"#668557", 
  },
  viewConMargin:{
    flex: 1,
    marginTop: 320,
    backgroundColor:"#668557", 
  },
  viewDivBoton: {
    marginTop: 350,
    padding: 70,
    margin:10,
    alignItems: 'center',
    shadowRadius: 15,
  }
});
