import { DarkTheme } from '@react-navigation/native';
import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, ImageBackground} from 'react-native';

const CardRegistro = ({ onPress, source, children, estilo }) => {
  return (
    <TouchableOpacity onPress={onPress} style={estilo}>
      <ImageBackground source={source} style={styles.image}>
        <Text style={styles.textoBoton}>{children}</Text>
      </ImageBackground>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '80%',
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