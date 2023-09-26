import { DarkTheme } from '@react-navigation/native';
import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const CardFarmacia = ({ title }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.buttonText}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '80%',
    height: "30%",
    backgroundColor: "#79AD60",
    borderRadius:20,
    alignContent: "center",
    marginBottom: 25,
  },
  buttonText:{
    textAlign: 'center',
    color: "#ffffff",
    fontSize: 20,
  }
});

export default CardFarmacia;