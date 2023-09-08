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
          <Text style={styles.textMiniBox}>Remedio: Ibuprofeno.
        
          Nombre del paciente: Carlos</Text>
          
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
    width: "auto%",
    height: "auto",
    width: "auto",
    color: "#000000",
    fontSize:25,
    /*fontFamily: "Jacques Francois-Regular",*
    fontSize: 25,
    left: 121,
    letterSpacing: 0,
  /*   position: "fixed", */
    textAlign: "center",
    marginTop:"10%"
  },
  textMiniBox: {

    justifyContent: "center",
    color: "#ffffff",
    height: "auto",
    marginLeft: "5%",
    shadowColor: "#FFFFFF",
    /* fontFamily: "Jacques Francois", */
    fontSize: 18,
    fontStyle: "normal",
    /*lineHeight: "normal",*/
  },
  textMiniBox2: {
    justifyContent:"center",
    color: "#ffffff",
    shadowColor: "#FFFFFF",
/*     fontFamily: "Jacques Francois", */
    fontStyle: "normal",
    marginTop:"10%"    /*lineHeight: "normal",*/
    

  },
  box: {
    backgroundColor: "#79AD60",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
    height: 613,
    width: 358,
    height: 613,
    left: 36,
/*     position: "fixed" */
    top: "20%",
    borderRadius: 20,
  },
  minibox: {
    backgroundColor: "#668557",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
    height: "15%",
    width: 312,
   /*  position: "fixed", */
    marginTop: "5%",

    borderRadius: 10,
  },
});

export default RecetasSubidasScreen;
