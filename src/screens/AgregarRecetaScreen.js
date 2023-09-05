import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TextInput, Form, onClick, Alert, TouchableOpacity} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";
import { Button } from "../components/Button";

const AgregarRecetaScreen = () => {
  const [dni, setDni] = useState("");
  const [NombreMedicamento, setMedicamento] = useState("");
  const [fechaVencimiento, setFechaVencimiento] = useState("");
  const navigation = useNavigation();

  const handleAgregarReceta = () => {
    // Aquí puedes hacer lo que necesites al agregar la receta
    console.log("Receta agregada:", dni, NombreMedicamento, fechaVencimiento);

    // Ejemplo de alerta
    alert("Receta Agregada con exito!!", "Contenido del alerta", [
      { text: "OK", onPress: () => console.log("OK") },
      { text: "No", style: "destructive" },
      { text: "Cancelar", style: "cancel" },
    ]);
  };

  const AgregarReceta = async () =>{
    try{
      let objeto = {
        FechaVencimiento: fechaVencimiento,
        Dni: dni,
      }
        console.log(objeto)
      console.log(Api.ApiLogin)
      const response = await axios.post(Api.ApiLogin, objeto);
      console.log(response.data)
      Alert.alert("receta agregada con exito")
  }
  catch(error){
    console.log(error)
  }
}

  return (
    <>
      <TouchableOpacity style={styles.Back} onPress={() => navigation.navigate("Medico")}>
        <View>
          <Image style={styles.Back} source={require("../img/volver.png")} />
        </View>
      </TouchableOpacity>
      <Text style={styles.tituloAgregarReceta}>Agregar Receta</Text>
      <View style={styles.box}>
        <View style={styles.minibox}>
          <View style={"form-group"}>
            <Text style={styles.text}>Numero de documento del paciente</Text>
            <TextInput style={styles.input} placeholder={"Escribir..."} value={dni} onChangeText={setDni}></TextInput>
          </View>
          <View style={"form-group"}>
            <Text style={styles.text1}>Medicamento</Text>
            <TextInput style={styles.input1} placeholder={"Escribir..."} value={NombreMedicamento} onChangeText={setMedicamento}></TextInput>
          </View>
          <View style={"form-group"}>
            <Text style={styles.text2}>Fecha de vencimiento</Text>
            <TextInput style={styles.input2} placeholder={"Escribir..."} value={fechaVencimiento} onChangeText={setFechaVencimiento}></TextInput>
          </View>
          <View>
            <TouchableOpacity style={styles.boton}></TouchableOpacity>
          </View>
          
          
           
        </View>
      </View>
    </>
  );
  
};
const styles = StyleSheet.create({
  tituloAgregarReceta: {
    color: "#000000",
    /* fontFamily: "Jacques Francois-Regular", */
    fontSize: 25,
    /* lineHeight: "normal", */
    /* position: "fixed", */
    textAlign: "center",
    top: "5.25%",
  },
  Back: {
    /* color: "#7CB164", */
    width: 30,
    height: 30,
    top: "2.57%",
    left: "4.65%",
  },
  text: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    border: 0,
    height: "100%",
    color: "#d3d3d3",
    /*fontFamily: "Jacques Francois-Regular",*
        fontSize: 15,
        /*lineHeight: "normal",*/
    /* position: "fixed", */
    top: "13.44%",
    width: "100%",
    left:"65.20%",
  },
  
  text1: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
    border: 0,
    height: "100%",
    left:"25.20%",
    top: "40%",
    color: "#d3d3d3",
    /* fontFamily: "Jacques Francois-Regular", */
        fontSize: 20,
        /* center: 56, */
        /*lineHeight: "normal",*/
    /* position: "fixed", */
  },
  text2: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    left:"-31%",
    color: "#d3d3d3",
    /* fontFamily: "Jacques Francois-Regular", */
        fontSize: 20,
        /*lineHeight: "normal",*/
    /* position: "fixed", */
    top: "80%",
  },
  box: {
    backgroundColor: "#79AD60",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
    borderRadius: 20,
    height: "68.87%",
    width: "89.7%",
    left: 23,
    top: "12.4%",
  },
  input: {
    backgroundColor: "#79AD60",
    flexDirection: "row",
    justifyContent: "center",
    width: "130%",
    borderRadius: 7,
    top: "-220%",
    left:"65%",
    height:40,
    marginBottom: 24,
  },
  input1: {
    backgroundColor: "#79AD60",
    flexDirection: "row",
    justifyContent: "center",
    borderRadius: 7,
    left: "25%",
    width: 312,
    height: 40,
    /*  position: "fixed", */
    top: "-120%",
    marginBottom: 24,
  },
  input2: {
    backgroundColor: "#79AD60",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
    borderRadius: 7,
    left: "-32%",
    width: 312,
    height: 42,
    /* position: "fixed", */
    top: "-85%",
    marginBottom: 24,
  },

  minibox: {
    backgroundColor: "#668557",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    width: "83.87%",
    height: "94.6%",
    left: "1.70%",
    top:"3.75%",
    borderRadius: 20,
  },
  boton: {
    backgroundColor: "#36C05D",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    textAlign: "center",
    borderRadius: 20,
    width: 168.63,
    height: 67,
    left: 131,
    alignItems: "center",
    /*  position: "fixed", */
    top: 400,
  },
});
export default AgregarRecetaScreen;
