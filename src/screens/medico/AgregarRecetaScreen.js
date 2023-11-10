import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TextInput, Form, onClick, Alert, TouchableOpacity, SafeAreaView} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import axios from "axios";
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useNavigation } from "@react-navigation/native";
import Api from '../../../Api';
import { Button } from "../../components/Button";
//llamar en data a la url del inner join

let data = await axios.get(Api.ApiGetAllNombreMedicamento);

const AgregarRecetaScreen = () => {
  const [idMedicamento, setIdMedicamento] = useState(0);
  const [idPaciente, setIdPaciente] = useState(0);
  const [observaciones, setObservaciones] = useState("")
  const [fechaCreacion, setFechaCreacion] = useState(new Date())
  const [fechaVencimiento, setFechaVencimiento] = useState(new Date())
  const [estado, setEstado] = useState(true)
  const navigation = useNavigation();


  const handleAgregarReceta = () => {
    setFechaCreacion(Date.now())
    setFechaVencimiento(fechaCreacion)
    var dias = parseInt(30);
  
  //nueva fecha sumada
  setFechaVencimiento.setDate(fechaCreacion.getDate() + dias);
  //formato de salida para la fecha
  resultado.innerText = fechaVencimiento.getDate() + '/' +
    (setFechaVencimiento.getMonth() + 1) + '/' + fechaVencimiento.getFullYear();

    console.log("Receta agregada:", dni, NombreMedicamento, fechaCreacion, estado, fechaVencimiento);
    

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
              IdMedicamento: idMedicamento,
              IdPaciente: idPaciente,
              Observaciones:observaciones,
              FechaCreacion: fechaCreacion,
              Estado: estado,
              FechaVencimiento: fechaVencimiento,

      }
      console.log(objeto)
      const response = await axios.post(Api.ApiAgregarReceta, objeto);
      console.log(response);
      const Headers={
        headers:{
          authorization: `Bearer ${response.data}`
        }
      }
      console.log(Headers)
      if (Headers.data!="") {
        alert("receta agregada con exito");
      }
      else{
        console.log('los datos son erroneos, intente de nuevo')
      }

      
    }
    catch(error){
      console.log(error)
    }
  }
  return (
      <SafeAreaView style={styles.container}>
        <TouchableOpacity style={styles.back} onPress={() => navigation.navigate("Medico")}>
          <Image source={require("../../img/volver.png")} />
        </TouchableOpacity>
        <Text style={styles.tituloAgregarReceta}>Agregar Receta</Text>
        <View style={styles.box}>
          <View style={styles.minibox}>
            <View style={styles.formGroup}>
              <Text style={styles.text}>Número de documento del paciente</Text>
              <TextInput style={styles.input} placeholder={"Escribir..."} value={idPaciente} onChangeText={setIdPaciente}></TextInput>
            </View>
            <View style={styles.formGroup}>
            <Dropdown
        style={styles.input}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        data={data}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={"Seleccionar medicamento"}
        searchPlaceholder="Buscar medicamento"
        value={idMedicamento}
        onChangeText={setIdMedicamento}
      />
            </View>
            <View style={styles.formGroup}>
              <Text style={styles.text2}>Observaciones</Text>
              <TextInput style={styles.input} placeholder={"Escribir 2..."} value={observaciones} onChangeText={setObservaciones}></TextInput>
            </View>
            <View>
              <TouchableOpacity style={styles.boton} onPress={AgregarReceta}>
                <Text style={{ color: "white", fontSize: 20,}}>Subir Receta</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </SafeAreaView>
  );
  
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    width: '100%',
    backgroundColor: '#EFEFEF',
  },
  tituloAgregarReceta: {
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
  },
  dropdown: {
    margin: 16,
    height: 50,
    borderBottomColor: 'gray',
    borderBottomWidth: 0.5,
  },
  icon: {
    marginRight: 5,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
  
;
export default AgregarRecetaScreen;