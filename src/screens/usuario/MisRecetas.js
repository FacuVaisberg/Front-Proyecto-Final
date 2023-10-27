import { View, Text, StyleSheet, TouchableOpacity, Image, SafeAreaView } from "react-native";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Medicamento from "../../components/Medicamento";
import miniCardsRecetas from "../../components/miniCardsRecetas";

const MisRecetas = () => {
  const [medicamentos, setMedicamentos] = useState([]);
  const navigation = useNavigation();

  const handleClick = () => {
    const medicamentos = CargarTodo();
    console.log(medicamentos);
    setMedicamentos(medicamentos);
  };

  return (
    <>
      <SafeAreaView style={styles.view}>
        <TouchableOpacity style={styles.back} onPress={() => navigation.navigate("Medico")}>
          <Image source={require("../../img/volver.png")} />
        </TouchableOpacity>
        <View style={styles.container}>
          <Text style={styles.titulo}>Mis Recetas</Text>
          <View style={styles.minicontainer}>
            <Feather name="alert-triangle" size={24} color="#7CB164" style={{marginRight: 5}}/>
            <Text>¡Por razones de seguridad, {'\n'} 
            la información de tus recetas se ve acotada!</Text>
          </View>
          <View style={styles.box}>
            <miniCardsRecetas>
              
            </miniCardsRecetas>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    height: "100%",
    width: "100%",
    backgroundColor: "#EFEFEF",
  },
  container: {
    alignItems: 'center',
    alignContent: 'center',
  },
  minicontainer:{
    width: "85%",
    flexDirection: 'row',
    marginTop: "5%",
    alignItems: "center",
    left: 0
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
    color: "#ffffff",
    marginLeft: "5%",
    fontSize: 18,
  },
  box: {
    alignSelf: 'center',
    backgroundColor: "#79AD60",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
    height: 650,
    maxHeight: "90%",
    width: 350,
    maxWidth:"90%",
    borderRadius: 20,
  },
  minibox: {
    backgroundColor: "#668557",
    flexDirection: "column",
    justifyContent: "center",
    height: "15%",
    width: 312,
    marginTop: "5%",
    borderRadius: 10,
  },
  formgroup:{
    flexDirection: "row",
    alignItems: 'center',
    marginLeft: 10,
  },
  texto:{
    fontSize: 16
  },
});

export default MisRecetas;
