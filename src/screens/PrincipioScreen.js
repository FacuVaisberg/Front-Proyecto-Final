import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Button from "../components/Button.js";
import { useNavigation } from '@react-navigation/native';
import RegistrarseScreen from '../screens/RegistrarseScreen.js';
import Index from '../../Index'


const PrincipioScreen = () => {
    const navigation =useNavigation();
    return (
      <View style={styles.view}>
          <Text style={styles.baseText}>
            Bienvenidos a Pharma
            <Text style={styles.LetraDeColor}>L</Text>
            ife.
          </Text>
          <View style={styles.container2}>
            <Image
              style={styles.PharmaLifeLogo}
              source={require('../img/LogoPharmaLife.png')}
            />
          </View>
          <Button title="Iniciar sesion" onPress={() => navigation.navigate("LogIn")} />
          <Button title="Registrarse" onPress={() => navigation.navigate("Registrarse")}/>
        </View>
      
    );
}
const styles = StyleSheet.create({
    view: {
      backgroundColor: "#668557",
      flex: 1,
      height: "auto",
      width: "auto",
      /* left: 110, */
    /*   top: 323 */
    },
    ImgProp: {
      flex: 1,
      alignItems: 'center',
      verticalAlign: "center"
    },
    baseText: {
      textAlign: 'center',
      marginTop: 180,
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
      height: 150.189946785,
      textAlign: 'center',
    },
    LetraDeColor: {
      color: '#99D87D',
    },
  });

export default PrincipioScreen