import { View, Text, StyleSheet, TouchableOpacity, Image, SafeAreaView } from "react-native";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import CardsSolicitudesList from "../../components/CardsSolicitudesList";

const MisSolicitudes = () => {
  const [medicamentos, setMedicamentos] = useState([]);
  const navigation = useNavigation();

  const handleClick = () => {
    const medicamentos = CargarTodo();
    console.log(medicamentos);
    setMedicamentos(medicamentos);
  }
  
  return (
    <SafeAreaView style={styles.view}>
      <TouchableOpacity style={styles.back} onPress={() => navigation.navigate("HomeUsuario")}>
        <Image source={require("../../img/volver.png")} />
      </TouchableOpacity>
      <View style={styles.container}>
        <Text style={styles.titulo}>Mis Solicitudes</Text>
        <View style={styles.minicontainer}>
          <View style={styles.box}>
            <CardsSolicitudesList medicamentos={medicamentos} />
          </View>
        </View>
      </View>
        
    </SafeAreaView>
  )
}

export default MisSolicitudes

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
    alignSelf:'center',
  },
  titulo: {
    color: "#000000",
    fontSize: 25,
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
  formgroup:{
    flexDirection: "row",
    alignItems: 'center',
    marginLeft: 10,
  },
  texto:{
    fontSize: 16
  },
});