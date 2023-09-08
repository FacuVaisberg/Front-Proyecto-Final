import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TextInput, Form, onClick, Alert, TouchableOpacity, SafeAreaView} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";
import Api from "../../Api";
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
    console.log('AgregarReceta')
    try{
      let objeto = {
              "IdMedicamento": 2,
              "IdMedico": 2,
              "IdPaciente": 2,
              "IdFarmacia": 2,
              "FechaCreacion": "2018-10-10T00:00:00.000Z",
              "FechaVencimiento": "2013-07-07T00:00:00.000Z",
              "Estado": false,
              "Observaciones": "hola"
      }
      console.log(objeto)
      const response = await axios.post(Api.ApiAgregarReceta, objeto);
      console.log(response);
      Alert.alert("receta agregada con exito");
    /*
      axios.post(Api.ApiAgregarReceta, objeto).
        then((response) => {
            ;
          console.log(response);
          console.log(response.data)
        })
        .catch((error) => {
          if (error.response) {
            console.error('Server Error:', error.response.status);
          } else if (error.request) {
            console.error('Network Error:', error.request);
          } else {
            console.error('Error:', error.message);
          }
      });
      */
      
      
    }
    catch(error){
      console.log(error)
    }
  }
  return (
    <>
      <SafeAreaView style={styles.container}>
        <TouchableOpacity style={styles.Back} onPress={() => navigation.navigate("Medico")}>
          <Image source={require("../img/volver.png")} />
        </TouchableOpacity>
        <Text style={styles.tituloAgregarReceta}>Agregar Receta</Text>
        <View style={styles.box}>
          <View style={styles.minibox}>
            <View style={styles.formGroup}>
              <Text style={styles.text}>Número de documento del paciente</Text>
              <TextInput style={styles.input} placeholder={"Escribir..."} value={dni} onChangeText={setDni}></TextInput>
            </View>
            <View style={styles.formGroup}>
              <Text style={styles.text1}>Medicamento</Text>
              <TextInput style={styles.input} placeholder={"Escribir 1..."} value={NombreMedicamento} onChangeText={setMedicamento}></TextInput>
            </View>
            <View style={styles.formGroup}>
              <Text style={styles.text2}>Fecha de vencimiento</Text>
              <TextInput style={styles.input} placeholder={"Escribir 2..."} value={fechaVencimiento} onChangeText={setFechaVencimiento}></TextInput>
            </View>
            <View>
              <TouchableOpacity style={styles.boton} onPress={AgregarReceta}>
                <Text style={{ color: "white", fontSize: 20,}}>Subir Receta</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
  
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    width: '100%',
  },
  tituloAgregarReceta: {
    color: "#000000",
    /* fontFamily: "Jacques Francois-Regular", */
    fontSize: 25,
    top: "5.25%",
    left: "4.65%",
  },
  Back: {
    color: "#7CB164",
    width: 30,
    height: 30,
    top: "2.57%",
    left: "4.65%",
  },
  text: {
    color: "#d3d3d3",
    fontSize: 12,
    marginLeft: "6.2%",
  },
  text1: {
    color: "#d3d3d3",
    fontSize: 12,
    marginLeft: "6.2%",
  },
  text2: {
    color: "#d3d3d3",
    fontSize: 12,
    marginLeft: "6.2%",
  },
  box: {
    backgroundColor: "#79AD60",
    justifyContent: "center",
    alignItems:"center",
    borderRadius: 15,
    height: "70%",
    width: "89.7%",
    left: "5.34%",
    top: "12.24%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.9,
    shadowRadius: 5,
    elevation:6,
  },
  minibox: {
    backgroundColor: "#668557",
    width: "90%",
    height: "85%",
    top:"6%",
    borderRadius: 10,
    marginBottom:20,
  },
  formGroup: {
    top: 20,
    marginBottom:20,
  },

  input: {
    backgroundColor: "#79AD60",
    width: "85.39%",
    height: 40,
    borderRadius: 7,
    left:"6.2%",
  },
  boton: {
    backgroundColor: "#36C05D",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
    width: "45%",
    height: "35%",
    top: "125%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 10,
  }
  
});
export default AgregarRecetaScreen;