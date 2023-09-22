import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import CardRegistro from '../../components/CardRegistro';
import { useNavigation } from '@react-navigation/native';


const RegistrarseScreen = () => {
  const navigation =useNavigation();
  return (
    <SafeAreaView style={styles.view}>
      <View style={styles.container}>
        <Text style={styles.titulo}>¿Cual es tu rol en la aplicación?</Text>
        <TouchableOpacity onPress={() => navigation.navigate("RegistrarDatosMedico")}><CardRegistro style={styles.card} title={"Accede como medico para poder mejorar la experiencia ed sus clientes."} /></TouchableOpacity>
        <TouchableOpacity  onPress={() => navigation.navigate("RegistrarDatos")}><CardRegistro style={styles.card} title={"Accede como usuario para poder disfrutar de las funcionalidades."}/></TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("RegistrarDatosFarmacia")}><CardRegistro style={styles.card} title={"Accede como farmacia para poder agilizar y potenciar las ventas."}  /></TouchableOpacity>
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
  },
  container: {
    top: "3%",
    alignContent: "center",
    alignItems: 'center',
  },
  titulo: {
    textAlign: 'center',
    color: "#2C4521",
    /*fontFamily: 'Crimson Text',*/
    fontSize: 25,
    marginBottom: 30
  },
  card: {
    alignContent: "center",
    alignItems: 'center',
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