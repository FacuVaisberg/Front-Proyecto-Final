import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TextInput, Form, onClick, Alert, TouchableOpacity, SafeAreaView} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";
import Api from "../../Api";
import { Button } from "../components/Button";

const DatosPersonalesScreen = () => {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <TouchableOpacity style={styles.Back} onPress={() => navigation.navigate("Medico")}>
          <Image source={require("../img/volver.png")} />
        </TouchableOpacity>
        <Text style={styles.tituloDatosPersonales}>Tus datos personales</Text>
        <View style={styles.box}>
          <View style={styles.minibox}>
            <View style={styles.formGroup}>
              <Text style={styles.textChico}>Nombre</Text>
              {/* Medico.Nombre */}<Text style={styles.text}></Text>
              <Text style={styles.textChico}>Apellido</Text>
              {/* Medico.Apellido */}<Text style={styles.text}></Text>
            </View>
            <View style={styles.formGroup}>
              <Text style={styles.textChico}>Fecha de nacimiento</Text>
              {/* Medico.FechaNacimiento */}<Text style={styles.text}></Text>
              <Text style={styles.textChico}>Numero de documento</Text>
              {/* Medico.Dni */}<Text style={styles.text}></Text>
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
  tituloDatosPersonales: {
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
    maxWidth:"50%",
    color: "#FFFFFF",
    fontSize: 12,
    marginLeft: "6.2%",
  },
  textChico: {
    maxWidth:"50%",
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
    flexDirection: "column",
    width: "50%",
    maxWidth: "50%",
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
export default DatosPersonalesScreen;