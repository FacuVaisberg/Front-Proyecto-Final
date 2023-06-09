import { StyleSheet, Text, View, Image } from 'react-native';
import { Button, ButtonProps, FlatList, textAlig,fontfamily } from 'react-native';

import React from 'react';

const Index = () => {
  return (
    <View style={styles.view}>
    <View style={styles.container}>
      <Text style={styles.baseText}>Bienvenidos a PharmaLife.</Text>
      <View style={styles.container2} ><Image
        style={styles.PharmaLifeLogo}
        source={require('./PharmaLifeLogo.png')}
      /></View>
      <View><Button title="Iniciar Sesion" position= "absolute" style={styles.Button} color="#99D87D"></Button>
      <Button title="Registrarse" position= "absolute" style={styles.Button} color="#99D87D"></Button></View>


      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    backgroundColor:"#668557", 
  },
  container: {
    flex: 1,
    //alignItems:'center',
    height: 24,
    width: 211,
    left: 110,
    top: 323
  },
  ImgProp:{
    flex: 1,
    alignItems:'center',
    verticalAlign:"center"
    //height: 24,
    //width: 211,
    //left: 110,
    //top: 323

    
  },
  baseText: {
    textAlign:'center',
    color:"white",
    fontfamily: 'Jacques Francois',
    fontweight: 400,
    fontsize: 18,
    lineheight: 24,
    
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
    justifyContent: 'center',
    alignItems: 'center',
    width: 122,
    height: 140,
    //resizeMode: 'contain',
  },
  container2: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: 195,
    height: 132.189946785,
    textAlign: 'center',
  },
});
  

export default Index;

