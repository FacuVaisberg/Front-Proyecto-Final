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
    height: 150,
    marginTop:10,
    backgroundColor: "#79AD60",
    marginBottom: 10,
    margin:30,
    borderRadius:20,
  },
  buttonText:{
    textAlign: 'center',
    color: "#ffffff",
    /*fontFamily: 'Crimson Text',*/
    fontSize: 20,
    lineheight: 24,
  }
});

export default CardRegistro;