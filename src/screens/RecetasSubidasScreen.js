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
        {medicamentos &&
        medicamentos.map((item) => {
          return  <Medicamento key={item.IdMedicamentos} medicamento={item} />;
        })}
        <View>
     
    </View>
        </View>
    </View>
    </>
  )
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
            width: 358,
            borderRadius:20,
          
          
    },
    minibox:{
            backgroundColor: "#668557",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            width: "100%",
            border: 0,
            height: 48,
            width: 312,
            height: 48,
            left: 60,
            position: "fixed",
            top: 190,
            width: 312,
            borderRadius:10,    
          
    }
})
export default RecetasSubidasScreen