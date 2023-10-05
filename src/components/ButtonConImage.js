import React from "react";
import { View, Text, TouchableOpacity, ImageBackground, StyleSheet,
} from "react-native";
import { Children } from "react";

const ButtonConImage = ({ onPress, source, children, estilo }) => {
  return (
    <TouchableOpacity onPress={onPress} style={estilo}>
      <ImageBackground source={source} style={styles.botonConImagen}>
        <Text style={styles.textoBoton}>{children}</Text>
      </ImageBackground>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  botonConImagen: {
    width: 380,
    height: 100,
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

export default ButtonConImage;
