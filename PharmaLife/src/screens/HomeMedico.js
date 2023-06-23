import React from 'react';
import { View, Text, StyleSheet,box } from 'react-native';
import LogoSinSlogan from "../img/LogoSinSlogan.png";

const HomeMedico = () => {
  return (
    <>
       <Text style={styles.titulo}> Hola, Puto</Text> 
            <View style={styles.box}/>
            <View style={styles.box1}/>
            <View style={styles.box2}/>
            <View style={styles.box3}/>
       
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
titulo:{
  top:49,
  color: "#000000",
fontFamily: "Jacques Francois-Regular", 
fontSize: 25,
fontWeight: 400,
left: 0,
letterSpacing: 0,
lineHeight: "normal",
position: "fixed",
textAlign: "center",
height: 33,
width: 175,

}

  
  },
)
export default HomeMedico;