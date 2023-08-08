import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TextInput, Form, onClick, Alert, TouchableOpacity} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import axios from "axios";
import { Button } from "react-native-web";
import { useNavigation } from "@react-navigation/native";

const AgregarRecetaScreen = () => {
  const [Dni, setDni] = useState("");
  const [NombreMedicamento, setMedicamento] = useState("");
  const [FechaVencimiento, setFechaVencimiento] = useState("");
  const navigation = useNavigation();

  const handleAgregarReceta = () => {
    // Aquí puedes hacer lo que necesites al agregar la receta
    console.log("Receta agregada:", Dni, NombreMedicamento, FechaVencimiento);

    // Ejemplo de alerta
    alert("Receta Agregada con exito!!", "Contenido del alerta", [
      { text: "OK", onPress: () => console.log("OK") },
      { text: "No", style: "destructive" },
      { text: "Cancelar", style: "cancel" },
    ]);
  };

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
            <TextInput style={styles.input} placeholder={"Escribir..."} value={Dni} onChangeText={setDni}></TextInput>
          </View>
          <View style={"form-group"}>
            <Text style={styles.text1}>Medicamento</Text>
            <TextInput style={styles.input1} placeholder={"Escribir..."} value={NombreMedicamento} onChangeText={setMedicamento}></TextInput>
          </View>
          <View style={"form-group"}>
            <Text style={styles.text2}>Fecha de vencimiento</Text>
            <TextInput style={styles.input2} placeholder={"Escribir..."} value={FechaVencimiento} onChangeText={setFechaVencimiento}></TextInput>
          </View>
          <TouchableOpacity onPress={() => handleAgregarReceta()}>
            <View>
              <Text style={styles.boton}> Subir Receta</Text>
            </View>
          </TouchableOpacity>
          {/* <button style={styles.boton} onClick={<Text>hola</Text>/* ()=>AgregarReceta({Dni, NombreMedicamento, FechaVencimiento}) */}
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
    color: "#7CB164",
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
    height: 16,
    color: "#d3d3d3",
    /*fontFamily: "Jacques Francois-Regular",*
        fontSize: 15,
        /*lineHeight: "normal",*/
    /* position: "fixed", */
    top: "8.44%",
    width: 195,
    left:"6.20%",
  },
  text1: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    width: 195,
    border: 0,
    height: 16,
    left:"6.20%",
    top: "20%",
    color: "#d3d3d3",
    /* fontFamily: "Jacques Francois-Regular", */
        fontSize: 15,
        /* center: 56, */
        /*lineHeight: "normal",*/
    /* position: "fixed", */
  },
  text2: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
    border: 0,
    height: 16,
    left:"6.20%",
    color: "#d3d3d3",
    /* fontFamily: "Jacques Francois-Regular", */
        fontSize: 15,
        /*lineHeight: "normal",*/
    /* position: "fixed", */
    top: "31.5%",
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
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
    borderRadius: 7,
    left: 56,
    height: 42,
    width: 312,
    /* position: "fixed", */
    top: 263,
    marginBottom: 24,
  },
  input1: {
    backgroundColor: "#79AD60",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
    borderRadius: 7,
    left: 56,
    width: 312,
    height: 42,
    /*  position: "fixed", */
    top: 325,
    marginBottom: 24,
  },
  input2: {
    backgroundColor: "#79AD60",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
    borderRadius: 7,
    left: 56,
    width: 312,
    height: 42,
    /* position: "fixed", */
    top: 387,
    marginBottom: 24,
  },

  minibox: {
    backgroundColor: "#668557",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    width: "83.87%",
    height: "94.6%",
    left: "2.67%",
    top:"13.62%",
    borderRadius: 20,
  },
  boton: {
    backgroundColor: "#36C05D",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    width: 100,
    textAlign: "center",
    borderRadius: 20,
    height: 59.4,
    overflow: "hidden",
    width: 168.63,
    height: 67,
    left: 131,
    alignItems: "center",
    /*  position: "fixed", */
    top: 688,
    color: "#ffffff",
    /*fontFamily: "Jacques Francois-Regular",*
            fontSize: 20,
            /*lineHeight: "normal",*/
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    elevation: 24,
  },
});
export default AgregarRecetaScreen;
