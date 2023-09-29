import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
} from "react-native";
import { Children } from "react";

const ButtonConImage = ({ onPress, source, children }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <ImageBackground source={source} style={styles.botonConImagen}>
          <Text style={styles.textoBoton}>{children}</Text>
        </ImageBackground>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  botonConImagen: {
    width: 380, // Ancho de la imagen de fondo
    height: 100, // Altura de la imagen de fondo
    justifyContent: "center", // Para alinear el texto en el centro
    borderRadius: 20,
  },
  textoBoton: {
    color: "black", // Color del texto
    textAlign: "center", // Alineación del texto
    fontSize: 16, // Tamaño del texto
    fontWeight: "bold", // Peso de la fuente
  },
});

export default ButtonConImage;
