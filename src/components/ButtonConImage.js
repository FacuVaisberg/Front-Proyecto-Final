import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground, StyleSheet } from 'react-native';

const ButtonConImage = ({onPress, source})  =>{
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <ImageBackground
          source={require(source)}
          style={styles.botonConImagen}
        >
          <Text style={styles.textoBoton}>Texto en el Botón</Text>
        </ImageBackground>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  botonConImagen: {
    width: 200, // Ancho de la imagen de fondo
    height: 50, // Altura de la imagen de fondo
    justifyContent: 'center', // Para alinear el texto en el centro
  },
  textoBoton: {
    color: 'white', // Color del texto
    textAlign: 'center', // Alineación del texto
    fontSize: 16, // Tamaño del texto
    fontWeight: 'bold', // Peso de la fuente
  },
});

export default ButtonConImage;