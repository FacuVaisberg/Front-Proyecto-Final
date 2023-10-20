import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import LogoSinSloganNegro from "../../img/LogoSinSlogan.png";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import ButtonConImage from "../../components/ButtonConImage";
import VentasImage from "../../img/ventas.jpg";
import RecetasImage from "../../img/RecetasImage.jpg";

const HomeFarmacia = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Image style={styles.PharmaLifeLogo} source={LogoSinSloganNegro}></Image>
        <ButtonConImage source={/* RecetasImage */ FarmaciasCercanasImage} estilo={styles.boton} onPress={() => navigation.navigate("RecetasPendientes")}>
          Recetas Pendientes
        </ButtonConImage>
      <ButtonConImage source={VentasImage} estilo={styles.boton} onPress={() => navigation.navigate("RegistroVentas")}>
          Historial de ventas
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
    borderRadius: '15px',
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

export default HomeFarmacia;
