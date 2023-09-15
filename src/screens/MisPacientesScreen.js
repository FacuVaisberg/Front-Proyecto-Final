import { View, Text,StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const MisPacientesScreen = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.Back} onPress={() => navigation.navigate("Medico")}>
        <Image source={require("../img/volver.png")} />
      </TouchableOpacity>
      <Text>MisPacientesScreen</Text>
    </View>
  )
}

const styles = StyleSheet.create({  
  container: {
    flex: 1,
    height: '100%',
    width: '100%',
    backgroundColor: '#EFEFEF',
  },

  Back: {
    color: "#7CB164",
    width: 30,
    height: 30,
    top: "2.57%",
    left: "4.65%",
  },
})

export default MisPacientesScreen