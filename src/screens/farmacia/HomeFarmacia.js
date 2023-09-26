import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import LogoSinSloganNegro from "../../img/LogoSinSlogan.png";
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';
import CardFarmacia from '../../components/CardPaciente';

const HomeFarmacia = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Image 
      style={styles.PharmaLifeLogo}
      source={LogoSinSloganNegro}></Image>
      <TouchableOpacity>
        <CardFarmacia style={styles.CardFarmacia}>Recetas Pendientes</CardFarmacia>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'center',
    flexDirection: 'column',
    height: '100%',
    width: '100%',
    top: 40,
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
  CardFarmacia: {
    width: "90%",
    height: "90%"

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

export default HomeFarmacia;
