import { DarkTheme } from '@react-navigation/native';
import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const CardRegistro = ({ title }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.buttonText}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '80%',
    height: 125,
    backgroundColor: "#79AD60",
    borderRadius:15,
    alignContent: "center",
    marginBottom: 25,
  },
  buttonText:{
    textAlign: 'center',
    color: "#ffffff",
    /*fontFamily: 'Crimson Text',*/
    fontSize: 20,
    /* lineheight: 24, */
  }
});

export default CardRegistro;