import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import LogoSinSlogan from "../img/LogoSinSlogan.png";
import masMedico from "../img/masMedico.png";
import { useNavigation } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';

const HomeMedico = () => {
  const navigation =useNavigation();
  return (
    <>
       <Text style={styles.titulo}> Hola, (nombre)</Text> 
            <View style={styles.box}>
              <Text style={styles.tituloAgregarReceta}> Agregar Receta</Text>
              <View style={styles.miniBox} >
              <TouchableOpacity onPress={() => navigation.navigate("AgregarReceta")}>
                <Image style={styles.imgMas}  source={require('../img/masMedico.png')}></Image>  
                </TouchableOpacity>
              </View>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate("MisPacientes")}>
            <View style={styles.box1} >
                <Text style={styles.tituloMisPacientes}> Mis Pacientes</Text>
                <View style={styles.miniBox1}>
                  <Text style={styles.subtext}>Ultimos Pacientes:</Text>
              </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("DatosPersonales")}>
            <View style={styles.box2}>
            <Text style={styles.tituloDatosPersonales}> Datos personales</Text>
              <View style={styles.miniBox2}>
              </View>
            </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("RecetasSubidas")}>
            <View style={styles.box3}>
            <Text style={styles.tituloRecetasSubidas}> Recetas Subidas</Text>
              <View style={styles.miniBox3}>
              </View>
            </View>
            </TouchableOpacity>
            </>
        );
    };

const styles = StyleSheet.create({
  
  box: {
    backgroundColor: "#79AD60",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
    border: 0,
    position: "fixed",
    height: 279,
    width: 187,
    borderRadius:20,
    top:114,
    marginLeft:23,
},
box1: {
  backgroundColor: "#79AD60",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  width: "100%",
  border: 0,
  height: 279,
  width: 187,
  borderRadius:20,
  marginLeft:219,
  marginRight:24,
  position: "fixed",
  top:182,
},
box2: {
  backgroundColor: "#79AD60",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
    border: 0,
    position: "fixed",
    height: 279,
    width: 187,
    borderRadius:20,
    top:411,
    marginLeft:23,
},
box3: {
  backgroundColor: "#79AD60",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  width: "100%",
  border: 0,
  height: 279,
  width: 187,
  borderRadius:20,
  marginLeft:219,
  marginRight:24,
  position: "fixed",
  top:484,
},
miniBox: {
  backgroundColor: "#668557",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  width: "100%",
  border: 0,
  height: 234,
  width: 177,
  left: 0,
  position: "fixed",
  top: 154,
  marginLeft:27.5,
  borderRadius:20,
},
miniBox1: {
  backgroundColor: "#668557",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  width: "100%",
  border: 0,
  height: 234,
  width: 177,
  left: 0,
  position: "fixed",
  top: 222,
  marginLeft:224,
  borderRadius:20,
},
miniBox2: {
  backgroundColor: "#668557",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  width: "100%",
  border: 0,
  height: 234,
  width: 177,
  left: 0,
  position: "fixed",
  top: 449,
  marginLeft:28,
  borderRadius:20,
},
miniBox3: {
  backgroundColor: "#668557",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  width: "100%",
  border: 0,
  height: 234,
  width: 177,
  left: 0,
  position: "fixed",
  top: 524,
  marginLeft:224,
  borderRadius:20,
},
imgMas:{
  backgroundColor: "#668557",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  width: "100%",
  border: 0,
  height: 20,
  width: 20,
  left: 0,
  position: "fixed",
  top: 261,
  marginLeft:107,
  borderRadius:20,
},
tituloAgregarReceta:{
  top:127,
  color: "#FFFFFF",
fontFamily: "Jacques Francois-Regular", 
fontSize: 14,
fontWeight: 400,
left: 0,
letterSpacing: 0,
lineHeight: "normal",
position: "fixed",
textAlign: "center",
height: 33,
width: 175,
marginLeft:22,
},
tituloRecetasSubidas:{
  top:502,
  color: "#FFFFFF",
fontFamily: "Jacques Francois-Regular", 
fontSize: 14,
fontWeight: 400,
left: 180,
letterSpacing: 0,
lineHeight: "normal",
position: "fixed",
textAlign: "center",
height: 33,
width: 175,
marginLeft:22,
},
titulo:{
  top:49,
  color: "#000000",
  fontFamily: "Jacques Francois-Regular",
  fontSize: 25,
  marginLeft:22,
  fontWeight: 400,
  letterSpacing: 0,
  lineHeight: "normal",
  position: "fixed",
  textAlign: "center",
/*   width: 104, */

},
tituloMisPacientes:{
  top:200,
  color: "#FFFFFF",
fontFamily: "Jacques Francois-Regular", 
fontSize: 14,
fontWeight: 400,
left: 180,
letterSpacing: 0,
lineHeight: "normal",
position: "fixed",
textAlign: "center",
height: 33,
width: 175,
marginLeft:22,
},
tituloDatosPersonales:{
  top:430,
  color: "#FFFFFF",
fontFamily: "Jacques Francois-Regular", 
fontSize: 14,
fontWeight: 400,
left: 0,
letterSpacing: 0,
lineHeight: "normal",
position: "fixed",
textAlign: "center",
height: 33,
width: 175,
marginLeft:22,
},
subtext:{
  top:229,
  color: "#FFFFFF",
fontFamily: "Jacques Francois-Regular", 
fontSize: 7,
fontWeight: 400,
left: 0,
letterSpacing: 0,
lineHeight: "normal",
position: "fixed",
textAlign: "center",
height: 9,
width: 61,
marginLeft:228,
}

  },
)
export default HomeMedico;