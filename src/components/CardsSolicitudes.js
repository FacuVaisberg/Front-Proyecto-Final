import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import Api from '../../Api'
import axios from "axios";
import { useEffect, useState } from "react";
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

const CardsSolicitudes = (farmacia, medicamento, precio) => {
  const [listaReceta, setListaReceta] = useState([]);


  const getAllReceta = async () => {
    try {
      let datos = await axios.get(Api.ApiGetAllSolicitud);
      setListaReceta(datos.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  const deleteReceta = async (IdSolicitud) => {
    console.log(Api.ApiDeleteSolicitud + IdSolicitud);
    axios.delete(Api.ApiDeleteSolicitud + IdSolicitud)
      .then(response => {
        console.log('Resource deleted successfully:', response.data);
      })
      .catch(error => {
        console.error('Error deleting resource:', error);
      });
      getAllReceta();
  }

  useEffect(() => {
    getAllReceta()
  }, []);
  useEffect(() => {
    console.log(listaReceta);
  }, [listaReceta])



  return (
    <>
      {listaReceta?.map((elemento, i) => (

        console.log("elemento... ", elemento.IdSolicitud),
        <View style={styles.card}>
          <View style={styles.formgroup}>
            <FontAwesome5 name="clinic-medical" size={24} color="white" />
            <Text style={styles.textMiniBox}>{elemento.Nombre[1]}</Text>
          </View>
          <View style={styles.formgroup}>
            <MaterialCommunityIcons name="bottle-tonic-plus-outline" size={32} color="white" />
            <Text style={styles.textMiniBox}>{elemento.NombreMedicamento}</Text>
          </View>
          <View style={styles.containerBotones}>
            <TouchableOpacity style={styles.botonVerde} >
              <Text style={{ color: "#fff", fontSize: 20, }}>Aceptar</Text>
              <AntDesign name="checkcircleo" size={24} color="white" style={{ margin: 5, }} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.botonRojo} onPress={() => deleteReceta(elemento.IdSolicitud)}>
              <Text style={{ color: "#fff", fontSize: 20, }}>Rechazar</Text>
              <Feather name="x-circle" size={24} color="white" style={{ margin: 5, }} />
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </>
  );
};

const styles = StyleSheet.create({
  textMiniBox: {
    color: "#ffffff",
    marginLeft: "5%",
    fontSize: 18,
  },
  card: {
    marginBottom: "5%",
    backgroundColor: "#668557",
    flexDirection: "column",
    alignSelf: 'center',
    height: "25%",
    maxHeight: "20%",
    width: 312,
    marginTop: "7%",
    borderRadius: 10,
  },
  formgroup: {
    top: "2%",
    marginBottom: "1%",
    flexDirection: "row",
    alignItems: 'center',
    marginLeft: 10,
  },
  containerBotones: {
    alignSelf: 'center',
    margin: 1,
    flexDirection: 'row',
  },
  botonVerde: {
    top: "20%",
    flexDirection: 'row',
    backgroundColor: "#36C05D",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    width: "45%",
    height: "100%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 10,
    right: "2%"
  },
  botonRojo: {
    top: "20%",
    flexDirection: 'row',
    backgroundColor: "#C61313",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    width: "45%",
    height: "100%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 10,
    left: "2%",
  }
});

export default CardsSolicitudes;