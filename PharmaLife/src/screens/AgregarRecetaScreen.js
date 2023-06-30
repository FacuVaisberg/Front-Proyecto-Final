import React, {useState} from 'react';
import { View, Text, StyleSheet, Image,TextInput,Form } from 'react-native';

const AgregarRecetaScreen = () => {
    const [dni, setDni] = useState('');
    const [medicamento, setMedicamento] = useState('');
    const [fechaVencimiento, setFechaVencimiento] = useState('');
  return (
    <>
    <View style={styles.box}>
              <Text style={styles.tituloAgregarReceta}> Agregar Receta</Text>
    </View>
    <View style={styles.box}>
<View style={styles.minibox}>
<form>
  <div className="form-group">
    <TextInput style={styles.input} placeholder= {"Escribir..."} value={dni} onChangeText={setDni}></TextInput>
      </div>
  <div className="form-group">
    <TextInput style={styles.input1} placeholder= {"Escribir..."} value={medicamento} onChangeText={setMedicamento}></TextInput>
  </div>
  <div className="form-group">
    <TextInput style={styles.input2} placeholder= {"Escribir..."} value={fechaVencimiento} onChangeText={setFechaVencimiento}></TextInput>
  </div>
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
            height: 38,
            width: 312,
            height: 38,
            position: "fixed",
            top: 263,
            placeholder:{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    width: "100%",
                    border: 0,
                    height: 25,
                    width: 197,
                    color: "#ffffff",
                    fontFamily: "Jacques Francois-Regular",
                    fontSize: 20,
                    fontWeight: 400,
                    left: 0,
                    lineHeight: "normal",
                    position: "fixed",
                    top: 0,
                    width: 197,
                  }
            },
            input1:{
                backgroundColor:"#79AD60",
                 display: "flex",
                 flexDirection: "row",
                 justifyContent: "center",
                 width: "100%",
         borderRadius:7,
         left:56,
                 height: 38,
                 width: 312,
                 height: 38,
                 position: "fixed",
                 top: 325,
                 placeholder:{
                         display: "flex",
                         flexDirection: "row",
                         justifyContent: "center",
                         width: "100%",
                         border: 0,
                         height: 25,
                         width: 197,
                         color: "#ffffff",
                         fontFamily: "Jacques Francois-Regular",
                         fontSize: 20,
                         fontWeight: 400,
                         left: 0,
                         lineHeight: "normal",
                         position: "fixed",
                         top: 0,
                         width: 197,
                       }
                 },
                 input2:{
                    backgroundColor:"#79AD60",
                     display: "flex",
                     flexDirection: "row",
                     justifyContent: "center",
                     width: "100%",
             borderRadius:7,
             left:56,
                     height: 38,
                     width: 312,
                     height: 38,
                     position: "fixed",
                     top: 387,
                     placeholder:{
                             display: "flex",
                             flexDirection: "row",
                             justifyContent: "center",
                             width: "100%",
                             border: 0,
                             height: 25,
                             width: 197,
                             color: "#ffffff",
                             fontFamily: "Jacques Francois-Regular",
                             fontSize: 20,
                             fontWeight: 400,
                             left: 0,
                             lineHeight: "normal",
                             position: "fixed",
                             top: 0,
                             width: 197,
                           }
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
