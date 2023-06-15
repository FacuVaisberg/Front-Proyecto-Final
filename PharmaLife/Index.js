import React from 'react';

import { StyleSheet, Text, View, Image } from 'react-native';
import { Button, ButtonProps, FlatList, textAlig,fontfamily, TouchableOpacity } from 'react-native';


const Index = () => {
  return (
    <View style={styles.view}>
    <View style={styles.container}>
      <Text style={styles.baseText}>Bienvenidos a PharmaLife.</Text>
      <View style={styles.container2} ><Image
        style={styles.PharmaLifeLogo}
        source={require('./LogoPharmaLife.png')}
      /></View>
      <View><TouchableOpacity  style={styles.button}>
      <Text style={styles.buttonText}>Iniciar Sesion</Text>
    </TouchableOpacity></View>
    <View><TouchableOpacity  style={styles.button}>
      <Text style={styles.buttonText}>Registrarse</Text>
    </TouchableOpacity></View>
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
    marginBottom: 30,
    color:"white",
    fontFamily: 'Jacques Francois',
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
  button: {
    borderRadius: 15, // Ajusta este valor para cambiar el nivel de redondez del botón
    backgroundColor: '#99D87D',
    marginTop: 20,
    padding: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#2C4521',
    fontFamily: 'Uber Move',
    fontSize: 16,
    fontweight: 500,
    fontsize: 15,
    fontStyle:"normal",
    lineHeight: 18
  },  
  PharmaLifeLogo: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
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

