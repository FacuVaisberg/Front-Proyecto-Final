import { StyleSheet, Text, View, Image } from 'react-native';
import { Button, ButtonProps, FlatList, textAlign } from 'react-native';

import React from 'react';

const Index = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.baseText}>Bienvenidos a PharmaLife.</Text>
      <View style={styles.ImgProp}><Image
        style={styles.PharmaLifeLogo}
        source={require('./PharmaLifeLogo.png')}
      /></View>
      <View><Button title="Iniciar Sesion" position= "absolute" style={styles.Button} color="#99D87D"></Button>
      <Button title="Registrarse" position= "absolute" style={styles.Button} color="#99D87D"></Button></View>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //alignItems:'center',
    height: 24,
    width: 211,
    left: 110,
    top: 323,


  },
  ImgProp:{
    height: 107,
    width: 122,
    left: 154,
    top: 358,
    
  },
  baseText: {
    fontWeight: 'bold',
    textAlign:'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  Button: {
  width: 154,
  height: 41,
  left: 143,
  top: 592,
  },
  PharmaLifeLogo: {
    width: 122,
    height: 140,
  }
  
});
export default Index;

