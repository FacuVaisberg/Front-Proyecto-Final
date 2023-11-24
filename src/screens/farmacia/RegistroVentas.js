import { View, Text, StyleSheet, TouchableOpacity, Image, SafeAreaView, ScrollView } from "react-native";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Feather } from '@expo/vector-icons';
import CardsVentas from "../../components/CardsVentas";

const MisRecetas = () => {
  const [medicamentos, setMedicamentos] = useState([]);
  const navigation = useNavigation();

  const handleClick = () => {
    const medicamentos = CargarTodo();
    console.log(medicamentos);
    setMedicamentos(medicamentos);
  };

  return (
    <>
      <SafeAreaView style={styles.view}>
        <TouchableOpacity style={styles.back} onPress={() => navigation.navigate("HomeFarmacia")}>
          <Image source={require("../../img/volver.png")} />
        </TouchableOpacity>
        <View style={styles.container}>
          <Text style={styles.titulo}>Historial de Ventas</Text>
          <View style={styles.minicontainer}>
            
          </View>
          <View style={styles.box}>
            <ScrollView>
            {/* poner logica de if no hay recetas escribir "No tenes recetas recetadas aún" */}
              <CardsVentas medicamentos={medicamentos} />
            </ScrollView>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    height: "100%",
    width: "100%",
    backgroundColor: "#EFEFEF",
  },
  container: {
    alignItems: 'center',
    alignContent: 'center',
  },
  minicontainer:{
    width: "85%",
    flexDirection: 'row',
    marginTop: "5%",
    alignItems: "center",
    left: 0
  },
  titulo: {
    color: "#000000",
    fontSize: 25,
    fontSize: 25,
    textAlign: "center",
    marginTop: "10%",
  },
  back: {
    color: "#7CB164",
    width: 30,
    height: 30,
    top: "2.57%",
    left: "4.65%",
  },
  textMiniBox: {
    color: "#ffffff",
    marginLeft: "5%",
    fontSize: 18,
  },
  box: {
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: "#79AD60",
    width: "100%",
    height: 650,
    maxHeight: "90%",
    maxWidth:"90%",
    borderRadius: 20,
  },
  formgroup:{
    flexDirection: "row",
    alignItems: 'center',
    marginLeft: 10,
  },
  texto:{
    fontSize: 16
  },
});

export default MisRecetas;
