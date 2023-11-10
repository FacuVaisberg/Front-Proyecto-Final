import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TextInput, Form, onClick, Alert, TouchableOpacity, SafeAreaView} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";
import Api from '../../../Api';
import { Button } from "../../components/Button";

const DatosPersonalesScreen = () => {
  const navigation = useNavigation();
  return (
    <>
      <SafeAreaView style={styles.container}>
        <TouchableOpacity style={styles.back} onPress={() => navigation.navigate("Medico")}>
          <Image source={require("../../img/volver.png")} />
        </TouchableOpacity>
        <Text style={styles.tituloDatosPersonales}>Tus datos personales</Text>
        <View style={styles.box}>
          <View style={styles.minibox}>
            <View style={styles.formGroup1}>
              <Text style={styles.textChico}>Nombre</Text>
              <Text style={styles.textChico}>Apellido</Text>
            </View>
            <View style={styles.miniContainer1}>
              {/* Medico.Nombre */}<Text style={styles.text}>Federico</Text>
              {/* Medico.Apellido */}<Text style={styles.text}>Winik</Text>
            </View>
            <View style={styles.formGroup2}>
              <Text style={styles.textChico}>Fecha de nacimiento</Text>
              {/* Medico.FechaNacimiento */}<Text style={styles.text}></Text>
              <Text style={styles.textChico}>Numero de documento</Text>
              {/* Medico.Dni */}<Text style={styles.text}></Text>
            </View>
            <View style={styles.formGroup3}>
              <Text style={styles.textChico}>Email</Text>
              {/* Medico.Email */}<Text style={styles.text}></Text>
              <Text style={styles.textChico}>Telefono Movil</Text>
              {/* Medico.Celular */}<Text style={styles.text}></Text>
              <Text style={styles.textChico}>Telefono Fijo</Text>
              {/* Medico.Telefono */}<Text style={styles.text}></Text>
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
    backgroundColor: '#EFEFEF',
  },
  tituloDatosPersonales: {
    color: "#000000",
    /* fontFamily: "Jacques Francois-Regular", */
    fontSize: 25,
    top: "5.25%",
    left: "4.65%",
  },
  back: {
    color: "#7CB164",
    width: 30,
    height: 30,
    top: "2.57%",
    left: "4.65%",
  },
  text: {
    maxWidth:"50%",
    color: "#FFFFFF",
    fontSize: 20,
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
  formGroup1: {
    flex: 1,
    flexDirection: 'row',
    width: "100%",
    height:"10%",
    top: 20,
    marginBottom:20,
  },
  miniContainer1: {
    flex: 1,
    flexDirection: 'row',
    width: "100%",
    height:"10%",
  },
  formGroup2: {
    flexDirection: 'row',
    width: "100%",
    height:"10%",
  },
  miniContainer2: {
    flexDirection: 'row',
    width: "100%",
    height:"10%",
  },
  formGroup3: {
    flexDirection: "column",
    width: "100%",
    height:"60%",
    top: 30,
    marginBottom:30,
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