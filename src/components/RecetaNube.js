import { View, Text, StyleSheet, Image, TouchableOpacity, SafeAreaView} from "react-native";
import React from "react";
import FotoPerfil from "./FotoPerfil";
import Api from '../../Api'
import axios from "axios";
import { useEffect, useState } from "react";
import { ScrollView } from "react-native-web";


const RecetaNube = () => {
    //const [receta, setReceta] = useState();
    const [listaReceta, setListaReceta] = useState();
    
    const getAllReceta = async () =>{
      let datos = await axios.get(Api.ApiGetAllReceta);
      setListaReceta(datos.data)
    }

    useEffect(() => {
      getAllReceta()
     },[]);

     useEffect(() => {
      console.log(listaReceta);
     }, [listaReceta])

  return (
    <>
   
      {listaReceta?.map((elemento)=> (
       <View style={styles.container}>
       <View style={styles.box}>
         <Text style={styles.text}>Medicamento</Text>
         <View style={styles.minibox}>
           <View style={styles.formgroup}>
             <View style={{flexDirection:"column", alignItems: "center", flex: 1}}>
               <Text style={styles.miniText}>Fecha de Subida</Text>
               <Text style={styles.subtitulo}>{elemento.FechaCreacion}</Text>
             </View>
             <View style={{flexDirection:"column", alignItems: "center", flex: 1}}>
               <Text style={styles.miniText}>Fecha de Vencimiento</Text>
               <Text style={styles.subtitulo}>12/12/2023</Text>
             </View>
           </View>
           <View style={styles.formgroup}>
             <View style={{flexDirection:"column", alignItems: "center", flex: 1}}>
               <Text style={styles.miniText}>Nombre del Medico</Text>
               <Text style={styles.subtitulo}>{elemento.IdMedico}</Text>
             </View>
             <View style={{flexDirection:"column", alignItems: "center", flex: 1}}>
               <Text style={styles.miniText}>Firma</Text>
               <Text style={styles.subtitulo}>-</Text>
             </View>
           </View>
           <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: "15%", marginBottom: "15%"}}>
             <FotoPerfil source={require('../img/ibupirac.jpg')}/>
           </View>
           <View style={styles.formgroup}>
             <View style={{flexDirection:"column", alignItems: "center", flex: 1}}>
               <Text style={styles.miniText}>Nombre paciente</Text>
               <Text style={styles.subtitulo}>nombre paciente</Text>
             </View>
             <View style={{flexDirection:"column", alignItems: "center", flex: 1}}>
               <Text style={styles.miniText}>Direccion</Text>
               <Text style={styles.subtitulo}>Direccion usuario en bd</Text>
             </View>
           </View>
           <View style={styles.formgroup}>
             <View style={{flexDirection:"column", alignItems: "center", flex: 1}}>
               <Text style={styles.miniText}>Telofono</Text>
               <Text style={styles.subtitulo}>bd telefono usuario</Text>
             </View>
             <View style={{flexDirection:"column", alignItems: "center", flex: 1}}>
               <Text style={styles.miniText}>Numero de documento</Text>
               <Text style={styles.subtitulo}>Dni usuario</Text>
             </View>
           </View>

             <TouchableOpacity style={styles.boton}>
               <Text style={{ color: "white", fontSize: 20 }}>
                 ¡La Quiero!
               </Text>
             </TouchableOpacity>
         </View>
       </View>
     </View>
      ))}
    </>
  );
  }
const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    width: "100%",
    backgroundColor: "#EFEFEF",
  },
  box: {
    backgroundColor: "#79AD60",
    alignItems: "center",
    borderRadius: 15,
    height: "70%",
    width: "89.7%",
    left: "5.34%",
    top: "12.24%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.9,
    shadowRadius: 5,
    elevation: 6,
  },
  minibox: {
    backgroundColor: "#668557",
    width: "90%",
    height: "85%",
    top: "6%",
    borderRadius: 10,
    marginBottom: 20,
  },
  formgroup:{
    flexDirection: "row",
    top: "5%",
    marginBottom: "10%",

  },
  text: {
    fontSize: 30,
    color: "#ffffff",
    textAlign: 'center',
  },

  subtitulo:{
    color: "#FFFFFF",
    fontSize: 15,
  },

  miniText:{
    color: "#D3D3D3",
    fontSize: 10,
  },

  boton: {
    backgroundColor: "#36C05D",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
    width: "50%",
    height: 50,
    top:"1.5%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 10,
  },
});

export default RecetaNube;
