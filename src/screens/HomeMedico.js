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
              <TouchableOpacity style={styles.imgMas} onPress={() => navigation.navigate("AgregarReceta")}>
                <Image source={require('../img/masMedico.png')}></Image>  
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
    justifyContent: "center",
    border: 0,
    /* position: "fixed ", */
    height: "30%",
    width: "40%",
    borderRadius:20,
    top:"12%",
    marginLeft:"8%",
},
box1: {
  backgroundColor: "#79AD60",
  display: "flex",
  justifyContent: "center",
  border: 0,
  /* position: "fixed ", */
  height: "30%",
  width: "40%",
  borderRadius:20,
  left:'50.93%',
  top:'19.52%',
},
box2: {
  backgroundColor: "#79AD60",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
    border: 0,
    /* position: "fixed", */
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
 /*  position: "fixed", */
  top:484,
},
miniBox: {
  backgroundColor: "#668557",
  flexDirection: "row",
  justifyContent: "center",
  height: "83.87%",
  width: "94.65%",
 top: "3.33%", 
  marginLeft:"2.67%",
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
  /* position: "fixed", */
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
  /* position: "fixed", */
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
 /*  position: "fixed", */
  top: 524,
  marginLeft:224,
  borderRadius:20,
},
imgMas:{
  backgroundColor: "#668557",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  top: "45%",
  height: "11.29%",
  width: "8%",
},
boton:
{
  backgroundColor: "#668557",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  top: "50%",
  height: "11.29%",
  width: "100%",
  marginLeft: "61.9%",
},
tituloAgregarReceta:{
  top:"0%",
  color: "#ffffff",
/*fontFamily: "Jacques Francois-Regular",* 
fontSize: 14,
left: 0,
letterSpacing: 0,
/*lineHeight: "normal",*/
/* position: "fixed", */
textAlign: "auto",
height: "auto",
width: "auto",
marginLeft:"9.6%",
},
tituloRecetasSubidas:{
  top:502,
  color: "#FFFFFF",
/*fontFamily: "Jacques Francois-Regular",* 
fontSize: 14,
left: 180,
letterSpacing: 0,
/*lineHeight: "normal",*/
/* position: "fixed", */
textAlign: "center",
height: 33,
width: 175,
marginLeft:22,
},
titulo:{
  top:49,
  color: "#000000",
  /*fontFamily: "Jacques Francois-Regular",*
  fontSize: 25,
  marginLeft:22,
  letterSpacing: 0,
  /*lineHeight: "normal",*/
  /* position: "fixed", */
  textAlign: "center",
/*   width: 104, */

},
tituloMisPacientes:{
  top:"0%",
  color: "#ffffff",
/*fontFamily: "Jacques Francois-Regular",* 
fontSize: 14,
left: 0,
letterSpacing: 0,
/*lineHeight: "normal",*/
/* position: "fixed", */
textAlign: "auto",
height: "auto",
width: "auto",
left:"10.16%",
},
tituloDatosPersonales:{
  top:430,
  color: "#FFFFFF",
/*fontFamily: "Jacques Francois-Regular",* 
fontSize: 14,
left: 0,
letterSpacing: 0,
/*lineHeight: "normal",*/
/* position: "fixed", */
textAlign: "center",
height: 33,
width: 175,
marginLeft:22,
},
subtext:{
  top:229,
  color: "#FFFFFF",
/*fontFamily: "Jacques Francois-Regular",* 
fontSize: 7,
left: 0,
letterSpacing: 0,
/*lineHeight: "normal",*/
/* position: "fixed", */
textAlign: "center",
height: 9,
width: 61,
marginLeft:228,
}

  },
)
export default HomeMedico;