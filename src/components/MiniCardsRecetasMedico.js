import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import Api from '../../Api'
import axios from "axios";
import { useEffect, useState } from "react";

const MiniCardsRecetasMedico = ({ medicamento, fechaVencimiento }) => {
  const [listaReceta, setListaReceta] = useState([]);

  const getAllReceta = async () => {
    try {
      let datos = await axios.get(Api.ApiGetAllReceta);
      setListaReceta(datos.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  function addMonths(date, months) {
    date.setMonth(date.getMonth() + months);    
    return date;
  }

useEffect(() => {
  getAllReceta()
 },[]);
 useEffect(() => {
  console.log("lista receta: ",listaReceta);
 }, [listaReceta])

  return (
    <>
    {listaReceta?.map((elemento)=> (
      console.log("console log map",elemento),
    <View style={styles.card}>
      <View style={styles.formgroup}>
        <MaterialCommunityIcons name="bottle-tonic-plus-outline" size={30} color="white" />
        <Text style={styles.textMiniBox}>{elemento.NombreMedicamento}</Text>
      </View>
      <View style={styles.formgroup}>
        <MaterialCommunityIcons name="calendar-alert" size={26} color="white" />
        <Text style={styles.textMiniBox}> {addMonths(new Date(elemento.FechaCreacion), 1).toLocaleDateString()}</Text>
      </View>
      <View style={styles.formgroup}>
        <AntDesign name="user" size={24} color="white" />
        <Text style={styles.textMiniBox}> {elemento.NombrePaciente}</Text>
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
    marginTop: "3%",
    fontSize: 18,
  },
  card: {
    backgroundColor: "#668557",
    flexDirection: "column",
    justifyContent: "center",
    alignSelf: 'center',
    height: "20%",
    maxHeight: "17%",
    width: 312,
    marginTop: "5%",
    borderRadius: 10,
  },
  formgroup: {
    flexDirection: "row",
    alignItems: 'center',
    marginLeft: 10,
  },
});

export default MiniCardsRecetasMedico;
