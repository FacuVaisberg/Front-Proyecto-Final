import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import CardRegistro from '../components/CardRegistro';
import { useNavigation } from '@react-navigation/native';


const RegistrarseScreen = () => {
  const navigation =useNavigation();
  return (
    <View style={styles.view}>
      <Text style={styles.baseText}>
            ¿Cual es tu rol en la aplicación?
          </Text>
          <View style={styles.conteiner}>
          <TouchableOpacity onPress={() => navigation.navigate("RegistrarDatosMedico")}><CardRegistro title={"Accede como medico para poder mejorar la experiencia ed sus clientes."} /></TouchableOpacity>
          <TouchableOpacity  onPress={() => navigation.navigate("RegistrarDatos")}><CardRegistro title={"Accede como usuario para poder disfrutar de las funcionalidades."}/></TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("RegistrarDatos")}><CardRegistro title={"Accede como farmacia para poder agilizar y potenciar las ventas."}  /></TouchableOpacity>
          </View>
          <Text style={styles.baseText2}>
            ¿Ya tenes una cuenta?
            <TouchableOpacity><Text style={styles.LetraDeColor} onPress={() => navigation.navigate("LogIn")}>Iniciar Sesion</Text></TouchableOpacity>
            
          </Text>
    </View>
  )
}
const styles = StyleSheet.create({
  view: {
    backgroundColor: "#EFEFEF",
    flex: 1,
    height: "auto",
    width: "auto",
  },
  baseText: {
    textAlign: 'center',
    marginTop: 60,
    marginBottom: 30,
    color: "#2C4521",
    /*fontFamily: 'Crimson Text',*/
    fontSize: 25,
    /* lineheight: 24, */
  },
  baseText2: {
    textAlign: 'right',
    /* display: 'right', */
    margin: 15,
    alignItems: 'center',
    color: "#2C4521",
    /*fontFamily: 'Crimson Text',*/
    fontSize: 12,
  },
  conteiner:{
    display: 'flex',
    flexDirection:'column',
    alignItems: 'center'
  },
  LetraDeColor: {
    color: '#99D87D',
  },
})

export default RegistrarseScreen;