import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import Button from '../components/Button';
import Api from '../../Api'
import axios from "axios";
import { useEffect, useState } from "react";

const CardsSolicitudes = (farmacia, medicamento, precio) => {
    const [listaReceta, setListaReceta] = useState([]);

const getAllReceta = async () => {
    try {
      let datos = await axios.get(Api.ApiGetAllReceta);
      setListaReceta(datos.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

useEffect(() => {
  getAllReceta()
 },[]);
 useEffect(() => {
  console.log(listaReceta);
 }, [listaReceta])



  return (
    <>
    {listaReceta?.map((elemento)=> (
        <View style={styles.card}>
            <View style={styles.formgroup}>
                <FontAwesome5 name="clinic-medical" size={24} color="white" />
                <Text style={styles.textMiniBox}>{farmacia}</Text>
            </View>
            <View style={styles.formgroup}>
                <MaterialCommunityIcons name="bottle-tonic-plus-outline" size={32} color="white" />
                <Text style={styles.textMiniBox}>{medicamento}</Text>
            </View>
            <View style={styles.formgroup}>
                <FontAwesome name="dollar" size={32} color="white" />
                <Text style={styles.textMiniBox}>{precio}</Text>
            </View>
            <View style={{flexDirection:'row'}}>
                <Button style={{color: 'red'}} title="Rechazar"/>
                <Button style={{color: 'green'}} title="Aceptar"/>
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
    backgroundColor: "#668557",
    flexDirection: "column",
    justifyContent: "center",
    height: "15%",
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

export default CardsSolicitudes;