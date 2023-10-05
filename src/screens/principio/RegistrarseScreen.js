import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import CardRegistro from '../../components/CardRegistro';
import { useNavigation } from '@react-navigation/native';
import farmaciaVector from '../../img/farmaciaVector.jpg';


const RegistrarseScreen = () => {
  const navigation =useNavigation();
  return (
    <SafeAreaView style={styles.view}>
      <View style={styles.container}>
        <Text style={styles.titulo}>¿Cual es tu rol en la aplicación?</Text>
        <CardRegistro onPress={() => navigation.navigate("RegistrarDatosMedico")} source={farmaciaVector} style={styles.card}>Accede como Medico para poder mejorar la experiencia ed sus clientes.</CardRegistro>
        <CardRegistro onPress={() => navigation.navigate("RegistrarDatos")} source={farmaciaVector} style={styles.card}>Accede como Usuario para poder disfrutar de las funcionalidades.</CardRegistro>
        <CardRegistro onPress={() => navigation.navigate("RegistrarDatosFarmacia")} source={farmaciaVector} style={styles.card}>Accede como Farmacia para poder agilizar y potenciar las ventas.</CardRegistro>
        </View>
        <View style={styles.miniContainer}>
          <Text style={styles.text}> ¿Ya tenes una cuenta?</Text>
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
    backgroundColor: "#EFEFEF",
    height: "100%",
    width: "100%",
    gap: 50,

  },
  container: {
    top: "3%",
    alignContent: "center",
    alignItems: "center",
  },
  titulo: {
    textAlign: 'center',
    color: "#2C4521",
    /*fontFamily: 'Crimson Text',*/
    fontSize: 25,
    marginBottom: 30
  },
  card: {
    width: '80%',
    height: 125,
    flexDirection: "row",
    backgroundColor: "#79AD60",
    borderRadius:15,
    alignContent: "center",
    marginBottom: 25,
    alignItems: "center",
    padding: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
    marginVertical: 8,
  },
  miniContainer: {
    flexDirection: "row",
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