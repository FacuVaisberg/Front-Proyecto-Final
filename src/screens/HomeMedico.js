import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import LogoSinSlogan from "../img/LogoSinSlogan.png";
import masMedico from "../img/masMedico.png";
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';

const HomeMedico = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.column}>
        <View style={styles.leftColumn}>
          <Text style={styles.titulo}> Hola, (nombre)</Text>
          <View style={styles.box}>
            <Text style={styles.tituloAgregarReceta}> Agregar Receta</Text>
            <View style={styles.miniBox}>
              <TouchableOpacity style={styles.imgMas} onPress={() => navigation.navigate("AgregarReceta")}>
                <Image source={require('../img/masMedico.png')}></Image>  
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate("DatosPersonales")}>
            <View style={styles.box2}>
              <Text style={styles.tituloDatosPersonales}> Datos personales</Text>
              <View style={styles.miniBox2}>
                {/* Contenido de miniBox2 */}
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.column}>
        <View style={styles.rightColumn}>
          <TouchableOpacity onPress={() => navigation.navigate("MisPacientes")}>
            <View style={styles.box1}>
              <Text style={styles.tituloMisPacientes}> Mis Pacientes</Text>
              <View style={styles.miniBox1}>
                <Text style={styles.subtext}>Ultimos Pacientes:</Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("RecetasSubidas")}>
            <View style={styles.box3}>
              <Text style={styles.tituloRecetasSubidas}> Recetas Subidas</Text>
              <View style={styles.miniBox3}>
                {/* Contenido de miniBox3 */}
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: '100%',
    width: '100%',
  },
  column: {
    flex: 1,
  },
  leftColumn: {
    flex: 1,
    paddingRight: 10,
    height: "100%",
  },
  rightColumn: {
    flex: 1,
    paddingLeft: 10,
    height: "100%",
  },
  box: {
    backgroundColor: "#79AD60",
    justifyContent: "center",
    alignItems: "center",
    height: "30%", // Aumenta el valor de altura
    width: "86.97%",
    borderRadius: 20,
    top: "10%", // Ajusta la posición
    left: "7.5%", // Ajusta la posición
  },
  box1: {
    backgroundColor: "#79AD60",
    justifyContent: "center",
    alignItems: "center",
    height: "57%", // Aumenta el valor de altura
    width: "86.97%",
    borderRadius: 20,
    top: "35%", // Ajusta la posición
    right: "7.5%", // Ajusta la posición
    marginBottom:0,
  },
  box2: {
    backgroundColor: "#79AD60",
    justifyContent: "center",
    alignItems: "center",
    height: "60%", // Aumenta el valor de altura
    width: "86.97%",
    borderRadius: 20,
    top: "25%", // Ajusta la posición
    left: "7.5%", // Ajusta la posición
  },
  box3: {
    backgroundColor: "#79AD60",
    justifyContent: "center",
    alignItems: "center",
    height: "58%", // Aumenta el valor de altura
    width: "86.97%",
    borderRadius: 20,
    right: "7.5%", // Ajusta la posición
  },
  miniBox: {
    backgroundColor: "#668557",
    flexDirection: "row",
    justifyContent: "center",
    height: "83.87%",
    width: "94.65%",
    top: "3.33%", 
    borderRadius:20,
  },
  miniBox1: {
    backgroundColor: "#668557",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    border: 0,
    height: "83.87%",
    width: "94.65%",
    top: "2.5%",
    /* position: "fixed", */
    borderRadius:20,
  },
  miniBox2: {
    backgroundColor: "#668557",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    border: 0,
    height: "83.87%",
    width: "94.65%",
    marginLeft:"2%",
    /* position: "fixed", */
    borderRadius:20,
  },
  miniBox3: {
    backgroundColor: "#668557",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    border: 0,
    height: "83.87%",
    width: "94.65%",
    marginLeft:"2.67%",
   /*  position: "fixed", */
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
  tituloAgregarReceta:{
    color: "#ffffff",
    /* fontFamily: "Jacques Francois-Regular", */
    /* fontSize: 14, */
    /* left: 0, */
    /* letterSpacing: 0, */
    /*lineHeight: "normal",*/
    /* position: "fixed", */
    height: "auto",
    width: "auto",
    },
    tituloRecetasSubidas:{
    color: "#FFFFFF",
    /*fontFamily: "Jacques Francois-Regular",* 
    fontSize: 14,
    left: 180,
    letterSpacing: 0,
    /*lineHeight: "normal",*/
    /* position: "fixed", */
    textAlign: "center",
    },
    titulo:{
      width:"100%",
      top:"5.25%",
      color: "#000000",
      left:"4.18%",
      /* fontFamily: "Jacques Francois-Regular", */
      fontSize: 25,
      /*lineHeight: "normal",*/
      /* position: "fixed", */
    
    },
    tituloMisPacientes:{
    color: "#ffffff",
    /*fontFamily: "Jacques Francois-Regular",* 
    fontSize: 14,
    left: 0,
    letterSpacing: 0,
    /*lineHeight: "normal",*/
    /* position: "fixed", */
    textAlign: "auto",
    },
    tituloDatosPersonales:{
    color: "#FFFFFF",
    /*fontFamily: "Jacques Francois-Regular",* 
    fontSize: 14,
    left: 0,
    letterSpacing: 0,
    /*lineHeight: "normal",*/
    /* position: "fixed", */
    textAlign: "center",
    },
    subtext:{
      color: "#FFFFFF",
    /*fontFamily: "Jacques Francois-Regular",* 
    fontSize: 7,
    left: 0,
    letterSpacing: 0,
    /*lineHeight: "normal",*/
    /* position: "fixed", */
    textAlign: "center",
    }
});

export default HomeMedico;
