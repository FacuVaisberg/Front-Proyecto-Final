import { DarkTheme } from '@react-navigation/native';
import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, ImageBackground} from 'react-native';

const CardRegistro = ({ source, estilo, children }) => {
  return (
    <View style={styles.view}>
      
    </View>
      
  );
};

const styles = StyleSheet.create({
  view:{
    flexDirection: "row",
    width: 350,
    maxWidth:"85%",
    height: 175,
    maxHeight: "25%",
    backgroundColor: '#99D87D',
    borderRadius: 20
  },
  inputFoto:{
    backgroundColor: '#D9D9D9'
  },
  card: {
    width: 300,
    height: 125,
    flexDirection: "row",
    backgroundColor: "#79AD60",
    borderRadius:15,
    alignContent: "center",
    marginBottom: 25,
    alignItems: "center",
    padding: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
    marginVertical: 8,
    /* position: "absolute" */
  },
  image: {
    width: "30%",
    height: "100%",
    justifyContent: "center",
    resizeMode: 'contain',
    overflow: "hidden"
  },
  textoBoton: {
    color: "black",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default CardRegistro;