import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Tabs from './src/Tabs';
import { UserProvider } from './UserContext';
import { useUser } from './UserContext';

export default function App() {
  return (
    <>
      <UserProvider>
        <Tabs />
      </UserProvider>
    </>
  )
}


const styles = StyleSheet.create({
  baseText: {
  },
  innerText: {
    color: 'red',
  },
  view: {
    flex: 1,
    backgroundColor: "#668557",
  },
  viewConMargin: {
    flex: 1,
    marginTop: 320,
    backgroundColor: "#668557",
  },
  viewDivBoton: {
    marginTop: 350,
    padding: 70,
    margin: 10,
    alignItems: 'center',
    shadowRadius: 15,
  }
});
