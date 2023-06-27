import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import LogoSinSlogan from "../img/LogoSinSlogan.png";
import masMedico from "../img/masMedico.png"

const HomeMedico = () => {
  return (
    <>
       <Text style={styles.titulo}> Hola, (nombre)</Text> 
            <View style={styles.box}>
              <Text style={styles.tituloAgregarReceta}> Agregar Receta</Text>
              <View style={styles.miniBox}>
                <Image style={styles.imgMas} source={require('../img/masMedico.png')}>

                </Image>
              </View>
            </View>
            <View style={styles.box1}>
            </View>
            <View style={styles.box2}>
              <View style={styles.miniBox1}>
              </View>
            </View>
            <View style={styles.box3}>
              <View style={styles.miniBox3}>
              </View>
            </View>
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
  top: 449,
  marginLeft:27.5,
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
marginLeft:23,
},
titulo:{
  top:127,
  color: "#ffffff",
  fontFamily: "Jacques Francois-Regular",
  fontSize: 14,
  fontWeight: 400,
  left: 0,
  letterSpacing: 0,
  lineHeight: "normal",
  position: "fixed",
  textAlign: "center",
  width: 104,

}

  
  },
)
export default HomeMedico;