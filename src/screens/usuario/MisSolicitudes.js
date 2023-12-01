import { View, Text, StyleSheet, TouchableOpacity, Image, SafeAreaView, ScrollView} from "react-native";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import CardsSolicitudes from "../../components/CardsSolicitudes";
import axios from "axios";
import Api from "../../../Api";

const MisSolicitudes = () => {
  const [medicamentos, setMedicamentos] = useState([]);
  const navigation = useNavigation();
  const [listaReceta, setListaReceta] = useState([]);


  const getAllReceta = async () => {
    try {
      let datos = await axios.get(Api.ApiGetAllSolicitud);
      console.log("datos.data ", datos.data)
      setMedicamentos(datos.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

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
          <View style={styles.box}>
            <ScrollView>
              <CardsSolicitudes medicamentos={medicamentos} />
            </ScrollView>
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
  titulo: {
    color: "#000000",
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
    alignSelf:'center',
    alignItems: 'center',
    justifyContent: "center",
    height: 700,
    maxHeight: "85%",
    width: "95%",
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