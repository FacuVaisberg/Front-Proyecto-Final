import { View, Text, StyleSheet, TouchableOpacity, Image, SafeAreaView } from "react-native";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import React from "react";

import Medicamento from "../../components/Medicamento";

const RecetasSubidasScreen = () => {
  const [medicamentos, setMedicamentos] = useState([]);
  const navigation = useNavigation();

  const handleClick = () => {
    const medicamentos = CargarTodo();
    console.log(medicamentos);
    setMedicamentos(medicamentos);
  };

  return (
    <>
      <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.back} onPress={() => navigation.navigate("Medico")}>
          <Image source={require("../../img/volver.png")} />
        </TouchableOpacity>
        <Text style={styles.titulo}>Recetas Subidas</Text>

        <View style={styles.box}>
          <View style={styles.minibox}>
            <Text style={styles.textMiniBox}>
              Remedio: Ibuprofeno. Nombre del paciente: Carlos
            </Text>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    width: "100%",
    backgroundColor: "#EFEFEF",
  },
  titulo: {
    color: "#000000",
    fontSize: 25,
    /* fontFamily: "Jacques Francois-Regular", */
    fontSize: 25,
    textAlign: "center",
    marginTop: "10%",
  },
  back: {
    color: "#7CB164",
    width: 30,
    height: 30,
    top: "2.57%",
    left: "4.65%",
  },
  textMiniBox: {
    justifyContent: "center",
    color: "#ffffff",
    height: "auto",
    marginLeft: "5%",
    shadowColor: "#FFFFFF",
    /* fontFamily: "Jacques Francois", */
    fontSize: 18,
    fontStyle: "normal",
    /*lineHeight: "normal",*/
  },
  textMiniBox2: {
    justifyContent: "center",
    color: "#ffffff",
    shadowColor: "#FFFFFF",
    /*     fontFamily: "Jacques Francois", */
    fontStyle: "normal",
    marginTop: "10%" /*lineHeight: "normal",*/,
  },
  box: {
    backgroundColor: "#79AD60",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
    height: 613,
    width: 358,
    height: 613,
    left: 36,
    /*     position: "fixed" */
    top: "20%",
    borderRadius: 20,
  },
  minibox: {
    backgroundColor: "#668557",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
    height: "15%",
    width: 312,
    /*  position: "fixed", */
    marginTop: "5%",

    borderRadius: 10,
  },
});

export default RecetasSubidasScreen;
