import React from 'react';
import { View, Text, StyleSheet, Image, SafeAreaView } from 'react-native';
import LogoSinSloganNegro from "../../img/LogoSinSlogan.png";
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';
import CardFarmacia from '../../components/CardPaciente';

const RegistroVentas = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.Back} onPress={() => navigation.navigate("Medico")}>
        <Image source={require("../../img/volver.png")} />
      </TouchableOpacity>
      <Text>ventas</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
      flex: 1,
      height: '100%',
      width: '100%',
      backgroundColor: '#EFEFEF',
  },
  PharmaLifeLogo: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
    width: 136,
    height: 140,
    shadowRadius: 15
  },
  titulos:{
    color: "#ffffff",
    textAlign: "center",
    },
    titulo:{
      width:"100%",
      top:"5.25%",
      color: "#000000",
      left:"4.18%",
      fontSize: 25,
    
    },
    subtext:{
      color: "#FFFFFF",
    textAlign: "center",
    }
});

export default RegistroVentas;
