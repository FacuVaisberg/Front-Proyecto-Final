import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

const LogInScreen = () => {
  return (
    <View style={styles.view}>
      <Text style={styles.baseText}>
            ¿Cual es tu rol en la aplicación?
          </Text>
    </View>
  )
}
const styles = StyleSheet.create({
  view: {
    backgroundColor: "#EFEFEF",
    flex: 1,
    height: "auto",
    width: "auto",
  },
  baseText: {
    textAlign: 'center',
    marginTop: 180,
    marginBottom: 30,
    color: "#2C4521",
    fontFamily: 'Crimson Text',
    fontWeight:"bold",
    fontSize: 25,
    lineheight: 24,
  },
})

export default LogInScreen;