import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const FotoPerfil = ({ source }) => {
  return (
    <View style={styles.container}>
      <Image source={source} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 100,
    borderRadius: 50,
    overflow: 'hidden', 
    borderWidth: 2, // Opcional: agrega un borde
    borderColor: 'white', // Opcional: color del borde
  },
  image: {
    flex: 1,
    width: null,
    height: null,
  },
});

export default FotoPerfil;