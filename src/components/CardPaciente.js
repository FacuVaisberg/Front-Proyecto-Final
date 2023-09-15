import { DarkTheme } from '@react-navigation/native';
import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Button from './Button';


const CardPaciente = ({ title }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.buttonText}>{title}</Text>
      <TouchableOpacity>
        <Button onPress={() => navigation.navigate("MisPacientes")} title ="Ver info"></Button>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    width: '95%',
    height: "20%",
    backgroundColor: "#79AD60",
    borderRadius:15,
    alignContent: "center",
    marginTop: "10%",
    backgroundColor: "#D3D3D3"
  },
  botonInfo: { 

  },
  buttonText:{
    textAlign: 'center',
    color: "#ffffff",
    /*fontFamily: 'Crimson Text',*/
    fontSize: 20,
    /* lineheight: 24, */
  }
});

export default CardPaciente;