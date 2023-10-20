import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import LogoSinSloganNegro from "../../img/LogoSinSlogan.png";
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';
import ButtonConImage from '../../components/ButtonConImage';
import SolicitudesImage from "../../img/SolicitudesImage.jpg";
import FarmaciasCercanasImage from "../../img/FarmaCercanasImage.jpg";
import RecetasImage from "../../img/RecetasImage.jpeg";


const HomeUsuario = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Image style={styles.PharmaLifeLogo} source={LogoSinSloganNegro}></Image>
        <ButtonConImage source={SolicitudesImage} estilo={styles.boton} onPress={() => navigation.navigate("MisSolicitudes")}>
          Solicitudes
        </ButtonConImage>
        <ButtonConImage source={RecetasImage} estilo={styles.boton} onPress={() => navigation.navigate("MisRecetas")}>
          Mis Recetas
        </ButtonConImage>
        <ButtonConImage source={FarmaciasCercanasImage} estilo={styles.boton} onPress={() => navigation.navigate("FarmaciasCercanas")}>
          Farmacias Cercanas
        </ButtonConImage>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    flexDirection: "column",
    height: "100%",
    width: "100%",
    top: 40,
    backgroundColor: "#EFEFEF",
    gap: 50,
  },
  PharmaLifeLogo: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 30,
    width: 136,
    height: 140,
    maxWidth:"80%",
    maxHeight:"20%",
    shadowRadius: 15,
  },
  boton: {
    borderRadius: 15,
    overflow: "hidden"
    
  },
  titulos: {
    color: "#ffffff",
    textAlign: "center",
    },
    titulo: {
      width: "100%",
      top: "5.25%",
      color: "#000000",
      left: "4.18%",
      fontSize: 25,
        },
    subtext: {
      color: "#FFFFFF",
    textAlign: "center",
    },
});

export default HomeUsuario;
