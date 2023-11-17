import { View, Text, StyleSheet, Image, TouchableOpacity, SafeAreaView, Alert} from "react-native";
import React from "react";
import FotoPerfil from "./FotoPerfil";
import Api from '../../Api'
import axios from "axios";
import { useEffect, useState } from "react";
import { ScrollView } from "react-native-web";


const RecetaNube = () => {
    //const [receta, setReceta] = useState();
    const [listaReceta, setListaReceta] = useState();
    const [listaSolicitud, setListaSolicitud] = useState();
    const [newDateString, setNewDateString] = useState('00/00/2000')
    const [idRemedio, setIdRemedio] = useState(0);
    const [idPaciente, setIdPaciente] = useState(0);
    const [idFarmacia, setIdFarmacia] = useState(0);
    const [idReceta, setIdReceta] = useState(0);
    const [precio, setPrecio] = useState(0);
    
    const getAllReceta = async () =>{
      let datos = await axios.get(Api.ApiGetAllReceta);
      setListaReceta(datos.data)
      console.log("ahora ",listaReceta)
    
    }

    const AgregarSolicitud = async () =>{
      console.log('AgregarSolicitud')
      let datos = await axios.get(Api.ApiGetAllSolicitud);
      setListaSolicitud(datos.data)
      console.log("ahora ",listaSolicitud)
      try{
        let objeto = {
                IdRemedio: idRemedio,
                IdPaciente: idPaciente,
                IdFarmacia: idFarmacia,
                IdReceta:idReceta,
                Precio: precio,
        }
        console.log("OBJETO SOLICITUD " , objeto)
        const response = await axios.post(Api.ApiPostSolicitud, objeto);
        console.log(response);
        const Headers={
          headers:{
            authorization: `Bearer ${response.data}`
          }
        }
        console.log(Headers)
        if (Headers.data!="") {
          Alert.alert("El cliente fue notificado");
        }
        else{
          console.log('los datos son erroneos, intente de nuevo')
        }
  
        
      }
      catch(error){
        console.log(error)
      }
    }

    function addMonths(date, months) {
      date.setMonth(date.getMonth() + months);    
      return date;
    }
    
    useEffect(() => {
      getAllReceta()
     },[]);

     useEffect(() => {
      console.log("listareceta",listaReceta);
     }, [listaReceta])
     useEffect(() => {
      AgregarSolicitud()
     },[]);

     useEffect(() => {
      console.log("listaSolicituf",listaSolicitud);
     }, [listaSolicitud])
     useEffect(() => {
      console.log(newDateString);
     }, [newDateString])

  return (
    <>
   
      {listaReceta?.map((elemento)=> (
        key=elemento.id,
       <View style={styles.container}>
       <View style={styles.box}>
         <Text style={styles.text}>Medicamento</Text>
         <View style={styles.minibox}>
           <View style={styles.formgroup}>
             <View style={{flexDirection:"column", alignItems: "center", flex: 1}}>
               <Text style={styles.miniText}>Fecha de Subida</Text>
               <Text style={styles.subtitulo}>{new Date(elemento.FechaCreacion).toLocaleDateString()}</Text>
             </View>
             <View style={{flexDirection:"column", alignItems: "center", flex: 1}}>
               <Text style={styles.miniText}>Fecha de Vencimiento</Text>
               <Text style={styles.subtitulo}>{addMonths(new Date(elemento.FechaCreacion), 1).toLocaleDateString()}</Text>
             </View>
           </View>
           <View style={styles.formgroup}>
             <View style={{flexDirection:"column", alignItems: "center", flex: 1}}>
               <Text style={styles.miniText}>Nombre del Medico</Text>
               <Text style={styles.subtitulo}>{elemento.NombreMedico}</Text>
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
               <Text style={styles.subtitulo}>{elemento.NombrePaciente}</Text>
             </View>
             <View style={{flexDirection:"column", alignItems: "center", flex: 1}}>
               <Text style={styles.miniText}>Direccion</Text>
               <Text style={styles.subtitulo}>{elemento.Direccion}</Text>
             </View>
           </View>
           <View style={styles.formgroup}>
             <View style={{flexDirection:"column", alignItems: "center", flex: 1}}>
               <Text style={styles.miniText}>Telofono</Text>
               <Text style={styles.subtitulo}>{elemento.Telefono}</Text>
             </View>
             <View style={{flexDirection:"column", alignItems: "center", flex: 1}}>
               <Text style={styles.miniText}>Numero de documento</Text>
               <Text style={styles.subtitulo}>{elemento.Dni}</Text>
             </View>
           </View>

             <TouchableOpacity style={styles.boton} onPress={AgregarSolicitud}>
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
    height: "90%",
    width: "100%",
    backgroundColor: "#EFEFEF",
    marginBottom: 30,
  },
  box: {
    backgroundColor: "#79AD60",
    alignItems: "center",
    borderRadius: 15,
    height: "100%",
    width: "90%",
    marginBottom: 10,
    left: "5.34%",
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