/* import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Button from "./Button.js";
import { useNavigation } from '@react-navigation/native';
import LogInScreen from './src/screens/LogInScreen.js';

const Index = () => {
  const navigation =useNavigation();
  return (
    <View style={styles.view}>
      <View style={styles.container}>
        <Text style={styles.baseText}>
          Bienvenidos a Pharma
          <Text style={styles.LetraDeColor}>L</Text>
          ife.
        </Text>
        <View style={styles.container2}>
          <Image
            style={styles.PharmaLifeLogo}
            source={require('/src/img/LogoPharmaLife.png')}
          />
        </View>
        <Button onPress={() => navigation.navigate(LogIn)} title="Iniciar sesion"/>
        <Button onPress={() => console.log('Registrarse')} title="Registrarse"/>
        </View>
      </View>
    
  );
}

const styles = StyleSheet.create({
  view: {
    backgroundColor: "#668557",
  },
  container: {
    flex: 1,
    height: 24,
    width: 250,
    left: 110,
    top: 323
  },
  ImgProp: {
    flex: 1,
    alignItems: 'center',
    verticalAlign: "center"
  },
  baseText: {
    textAlign: 'center',
    marginBottom: 30,
    color: "white",
    fontFamily: 'Jacques Francois',
    fontSize: 16,
    lineheight: 24,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  PharmaLifeLogo: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
    width: 122,
    height: 140,
    shadowRadius: 15
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
  LetraDeColor: {
    color: '#99D87D',
  },
});

export default Index; */