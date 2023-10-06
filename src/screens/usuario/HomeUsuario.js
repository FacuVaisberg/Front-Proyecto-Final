import { View, Text } from 'react-native'
import React from 'react'

const HomeUsuario = () => {
  return (
    <View>
      <Text>HomeUsuario</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    flexDirection: "column",
    height: "100%",
    width: "100%",
    top: 40,
    backgroundColor: "#EFEFEF",
    gap: 50,
  },
  PharmaLifeLogo: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 30,
    width: 136,
    height: 140,
    maxWidth:"80%",
    maxHeight:"20%",
    shadowRadius: 15,
  },
  boton: {
    borderRadius: '15px',
    overflow: "hidden"
  },
  titulos: {
    color: "#ffffff",
    textAlign: "center",
  },
  titulo: {
    width: "100%",
    top: "5.25%",
    color: "#000000",
    left: "4.18%",
    fontSize: 25,
  },
  subtext: {
    color: "#FFFFFF",
    textAlign: "center",
  },
});
export default HomeUsuario