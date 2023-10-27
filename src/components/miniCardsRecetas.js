import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const miniCardsRecetas = (medicamento, fechaVencimiento) => {
  return (
    <View style={styles.card}>
      <View style={styles.formgroup}>
        <MaterialCommunityIcons name="bottle-tonic-plus-outline" size={32} color="white" />
        <Text style={styles.textMiniBox}>{medicamento}</Text>
      </View>
      <View style={styles.formgroup}>
        <MaterialCommunityIcons name="calendar-alert" size={32} color="white" />
        <Text style={styles.textMiniBox}>{fechaVencimiento}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  textMiniBox: {
    color: "#ffffff",
    marginLeft: "5%",
    fontSize: 18,
  },
  card: {
    backgroundColor: "#668557",
    flexDirection: "column",
    justifyContent: "center",
    height: "15%",
    width: 312,
    marginTop: "5%",
    borderRadius: 10,
  },
  formgroup:{
    flexDirection: "row",
    alignItems: 'center',
    marginLeft: 10,
  },
})

export default miniCardsRecetas