import React from "react";
import { View, Text, TouchableOpacity, ImageBackground, StyleSheet} from "react-native";
import { Children } from "react";

const ButtonConImage = ({ onPress, source, children, estilo }) => {
  return (
    <TouchableOpacity onPress={onPress} style={estilo}>
      <ImageBackground source={source} style={styles.botonConImagen}>
        <View style={styles.textoContainer}>
          <Text style={styles.textoBoton}>{children}</Text>
        </View>
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
    overflow: "hidden",
  },
  textoContainer: {
    flex: 1,
    justifyContent: "center",
    alignSelf:"center",
    width: '100%',
    paddingHorizontal: '20%',
    height: '100%',
    backgroundColor: 'rgba(255,255,255, 0.15)'
  },
  textoBoton: {
    color: "black",
    textAlign: "center",
    fontSize: 14,
    fontWeight: "bold",
    opacity: 1,
  },
});

export default ButtonConImage;
