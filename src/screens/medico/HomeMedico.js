import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import LogoSinSlogan from "../../img/LogoSinSlogan.png";
import masMedico from "../../img/masMedico.png";
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';
import NavBarMedico from '../../components/NavBarMedico';

const HomeMedico = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.column}>
        <View style={styles.leftColumn}>
          <Text style={styles.titulo}> Hola, (nombre)</Text>
          <View style={styles.box}>
            <Text style={styles.titulos}> Agregar Receta</Text>
            <TouchableOpacity style={styles.miniBox} onPress={() => navigation.navigate("AgregarReceta")}>
                <Image source={masMedico} style={styles.imgMas}></Image>
            </TouchableOpacity>
          </View>
            <View style={styles.box1}>
              <Text style={styles.titulos}> Datos personales</Text>
              <TouchableOpacity style={styles.miniBox1} onPress={() => navigation.navigate("DatosPersonales")}></TouchableOpacity>
            </View>
        </View>
      </View>
      <View style={styles.column}>
        <View style={styles.rightColumn}>
          <View>
          </View>
          <View style={styles.box2}>
            <Text style={styles.titulos}> Recetas Subidas</Text>
            <TouchableOpacity style={styles.miniBox2} onPress={() => navigation.navigate("RecetasSubidas")}></TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    height: '100%',
    width: '100%',
    backgroundColor: '#EFEFEF',
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
    height: "33%",
    width: "86.97%",
    borderRadius: 20,
    top: "10%",
    left: "7.5%",
  },
  box1: {
    backgroundColor: "#79AD60",
    justifyContent: "center",
    alignItems: "center",
    height: "37%",
    width: "86.97%",
    borderRadius: 20,
    top: "13.5%",
    left: "7.5%",
  },
  box2: {
    backgroundColor: "#79AD60",
    justifyContent: "center",
    alignItems: "center",
    height: "37%",
    width: "86.97%",
    borderRadius: 20,
    right: "7.5%",
    bottom:"1.5%",
    top: "30%",
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
    alignContent:"center",
    height: "83.87%",
    width: "94.65%",
    top: "2.5%", 
    borderRadius:20,
  },
  miniBox2: {
    backgroundColor: "#668557",
    alignContent:"center",
    height: "83.87%",
    width: "94.65%",
    top: "2.5%", 
    borderRadius:20,
  },
  card: {
    alignItems: "center",
    height: "10%",
    width: "80%",
  },
  imgMas:{
    backgroundColor: "#668557",
    justifyContent: "center",
    alignItems:"center",
    top:"60%",
    height: "8.5%",
  },
  titulos:{
    color: "#ffffff",
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
