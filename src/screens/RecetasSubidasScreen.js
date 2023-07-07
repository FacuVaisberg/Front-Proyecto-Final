import { View, Text, StyleSheet } from 'react-native'
import { useState } from 'react'
import React from 'react'
import Medicamento from "../components/Medicamento"

const RecetasSubidasScreen = () => {
  const [medicamentos, setMedicamentos] = useState([]);
  
  const handleClick = () => {
    const medicamentos = CargarTodo();
    console.log(medicamentos);
    setMedicamentos(medicamentos);
  };

  return (
    <>
      <View>
        <Text style={styles.titulo}>Recetas Subidas</Text>
      </View>
      <View style={styles.box}>
        <View style={styles.minibox}>
          <Text style={styles.textMiniBox}>Remedio: Ibuprofeno</Text>
          <Text style={styles.textMiniBox2}>Nombre del paciente: Carlos</Text>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({      
  titulo: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
    border: 0,
    height: 33,
    width: 187,
    color: "#000000",
    fontFamily: "Jacques Francois-Regular",
    fontSize: 25,
    fontWeight: 400,
    left: 121,
    letterSpacing: 0,
    position: "fixed",
    textAlign: "center",
    top: 34,
  },
  textMiniBox: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "left",
    color: "#ffffff",
    height: "20%",
    marginLeft: 13,
    shadowColor: "#FFFFFF",
    fontFamily: "Jacques Francois",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "normal",
  },
  textMiniBox2: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "left",
    color: "#ffffff",
    marginLeft: 13,
    shadowColor: "#FFFFFF",
    fontFamily: "Jacques Francois",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "normal",
    marginTop: 10, // Modificar el valor aquí para ajustar el espaciado
  },
  box: {
    backgroundColor: "#79AD60",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
    border: 0,
    height: 613,
    width: 358,
    height: 613,
    left: 36,
    position: "fixed",
    top: 172,
    borderRadius: 20,
  },
  minibox: {
    backgroundColor: "#668557",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
    border: 0,
    height: 80,
    width: 312,
    left: 60,
    position: "fixed",
    marginTop: 20,
    width: 312,
    borderRadius: 10,
  },
});

export default RecetasSubidasScreen;
