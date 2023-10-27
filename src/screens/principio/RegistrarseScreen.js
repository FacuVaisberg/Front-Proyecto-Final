import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import CardRegistro from '../../components/CardRegistro';
import { useNavigation } from '@react-navigation/native';
import farmacia from '../../img/farmaciaRegistrarse.jpg';
import ButtonConImage from '../../components/ButtonConImage';
import medico from '../../img/medico.jpg';
import usuario from '../../img/abuelos.jpg';
/* import abuelos from '../../img/abuelos.jpg'; */

const RegistrarseScreen = () => {
  const navigation =useNavigation();
  return (
    <SafeAreaView style={styles.view}>
      <View style={styles.container}>
        <Text style={styles.titulo}>¿Cual es tu rol en la aplicación?</Text>
        <ButtonConImage onPress={() => navigation.navigate("RegistrarDatosMedico")} source={medico} estilo={styles.card}>Accede como Medico para poder mejorar la experiencia en sus clientes.</ButtonConImage>
        <ButtonConImage onPress={() => navigation.navigate("RegistrarDatosUsuario")} source={usuario} estilo={styles.card}>Accede como Usuario para poder disfrutar de las funcionalidades.</ButtonConImage>
        <ButtonConImage onPress={() => navigation.navigate("RegistrarDatosFarmacia")} source={farmacia} estilo={styles.card}>Accede como Farmacia para poder agilizar y potenciar las ventas.</ButtonConImage>
      </View>
        <View style={styles.miniContainer}>
          <Text style={styles.text}> ¿Ya tenes una cuenta? </Text>
            <TouchableOpacity>
              <Text style={styles.LetraDeColor} onPress={() => navigation.navigate("LogIn")}>Iniciar Sesion</Text>
            </TouchableOpacity>
        </View>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  view: {
    flex: 1,
    flexDirection: "column",
    height: "100%",
    width: "100%",
    top: 40,
    backgroundColor: "#EFEFEF",
    gap: 50,
  },
  container: {
    top: "3%",
    alignContent: "center",
    alignItems: "center",
    gap: 50,
  },
  titulo: {
    textAlign: 'center',
    color: "#2C4521",
    /*fontFamily: 'Crimson Text',*/
    fontSize: 25,
    marginBottom: 30
  },
  card: {
    width:"80%",
    alignItems:"center",
    borderRadius: 15,
    overflow: "hidden",
    resizeMode: "contain",
  },
  miniContainer: {
    width: "90%",
    flexDirection: "row",
    justifyContent: "center"

  },
  text: {
    textAlign: 'right',
    alignItems: 'center',
    color: "#2C4521",
    /*fontFamily: 'Crimson Text',*/
    fontSize: 12,
  },
  LetraDeColor: {
    textAlign: 'right',
    alignItems: 'center',
    color: '#99D87D',
    fontSize: 12,
  },
})

export default RegistrarseScreen;