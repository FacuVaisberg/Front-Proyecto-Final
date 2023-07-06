import React, {useState} from 'react';
import { View, Text, StyleSheet, Image,TextInput,Form, onClick, Alert, TouchableOpacity, text} from 'react-native';
import AgregarReceta from "../../Funciones"
import DropDownPicker from 'react-native-dropdown-picker';
import axios from 'axios';
import { Button } from 'react-native-web';

const AgregarRecetaScreen = () => {
    const [Dni, setDni] = useState('');
    const [NombreMedicamento, setMedicamento] = useState('');
    const [FechaVencimiento, setFechaVencimiento] = useState('');

    const handleAgregarReceta = () => {
      // Aquí puedes hacer lo que necesites al agregar la receta
      console.log('Receta agregada:', Dni, NombreMedicamento, FechaVencimiento);
  
      // Ejemplo de alerta
      alert('Título', 'Contenido del alerta', [
        { text: 'OK', onPress: () => console.log('OK') },
        { text: 'No', style: 'destructive' },
        { text: 'Cancelar', style: 'cancel' },
      ]);
    };

  return (
    <>
    <View style={styles.box}>
              <Text style={styles.tituloAgregarReceta}> Agregar Receta</Text>
    </View>
    <View style={styles.box}>
<View style={styles.minibox}>
<form>
  <div className="form-group">
    <Text style={styles.text}>Numero de documento del paciente</Text>
    <TextInput style={styles.input} placeholder= {"Escribir..."} value={Dni} onChangeText={setDni}></TextInput>
      </div>
  <div className="form-group">
  <Text style={styles.text1}>Numero de documento del paciente</Text>
    <TextInput style={styles.input1} placeholder= {"Escribir..."} value={NombreMedicamento} onChangeText={setMedicamento}></TextInput>
  </div>
  <div className="form-group">
  <Text style={styles.text2}>Numero de documento del paciente</Text>
    <TextInput style={styles.input2} placeholder= {"Escribir..."} value={FechaVencimiento} onChangeText={setFechaVencimiento}></TextInput>
  </div>
  <TouchableOpacity onPress={()=>handleAgregarReceta()}>
    <View>
    <Image style={styles.boton}  source={require('../img/masMedico.png')}></Image>
    </View>
  </TouchableOpacity>
  {/* <button style={styles.boton} onClick={<Text>hola</Text>/* ()=>AgregarReceta({Dni, NombreMedicamento, FechaVencimiento}) */}
  </form>
  </View>
    </View>
    
    </>
  )
}
const styles = StyleSheet.create({      
      tituloAgregarReceta: {
        color: "#000000",
        fontFamily: "Jacques Francois-Regular",
        fontSize: 25,
        fontWeight: 400,
        left: 23,
        lineHeight: "normal",
        position: "fixed",
        textAlign: "center",
        top: 49, 
    },
    boton:{
        backgroundColor:"#36C05D",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            width: 100,
            textAlign:"center",
            borderRadius: 20,
            height: 59.4,
            overflow: "hidden", 
            width: 168.63,
            height: 67,
            left: 131,
            alignItems: 'center',
            position: "fixed",
            top: 688,  
            color: "#ffffff",
            fontFamily: "Jacques Francois-Regular",
            fontSize: 20,
            fontWeight: 400,
            lineHeight: "normal",     
               
    },
    text:{
        display: "flex",
        flexDirection: "row",
        justifyContent: "left",
        width: "100%",
        border: 0,
        height: 16,
        color: "#d3d3d3",
        fontFamily: "Jacques Francois-Regular",
        fontSize: 15,
        fontWeight: 400,
        left: 56,
        lineHeight: "normal",
        position: "fixed",
        top: 247,
        width: 300,
  
    },
    text1:{
        display: "flex",
        flexDirection: "row",
        justifyContent: "left",
        width: "100%",
        border: 0,
        height: 16,
        width: 300,
        color: "#d3d3d3",
        fontFamily: "Jacques Francois-Regular",
        fontSize: 15,
        left: 56,
        lineHeight: "normal",
        position: "fixed",
        top: 309,
        
    },
    text2:{
        display: "flex",
        flexDirection: "row",
        justifyContent: "left   ",
        width: "100%",
        border: 0,
        height: 16,
        color: "#d3d3d3",
        fontFamily: "Jacques Francois-Regular",
        fontSize: 15,
        fontWeight: 400,
        left: 56,
        lineHeight: "normal",
        position: "fixed",
        top: 371,
        width: 300,
    },
    box: {
            backgroundColor: "#79AD60",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            width: "100%",
            borderRadius: 20,
            height: 641.9,
            width: 386,
            height: 642,
            left: 23,
            position: "fixed",
            top: 114.1,
            width: 386,
          },
          input:{
           backgroundColor:"#79AD60",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            width: "100%",
            borderRadius:7,
            left:56,
            height: 42,
            width: 312,
            position: "fixed",
            top: 263,
            marginBottom: 24,
                  },
            input1:{
                backgroundColor:"#79AD60",
                 display: "flex",
                 flexDirection: "row",
                 justifyContent: "center",
                 width: "100%",
         borderRadius:7,
         left:56,   
                 width: 312,
                 height: 42,
                 position: "fixed",
                 top: 325,
                 marginBottom: 24,
                 },
                 input2:{
                    backgroundColor:"#79AD60",
                     display: "flex",
                     flexDirection: "row",
                     justifyContent: "center",
                     width: "100%",
             borderRadius:7,
             left:56,
                     width: 312,
                     height: 42,
                     position: "fixed",
                     top: 387,
                     marginBottom: 24,
                     },

          minibox: {
                backgroundColor: "#668557",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                width: "100%",
                height: 538.37,
                width: 365.36,
                height: 538,
                left: 33.32,
                borderRadius:20,
                position: "fixed",
                top: 201.52,
                width: 365,               
    }
}
)
export default AgregarRecetaScreen
