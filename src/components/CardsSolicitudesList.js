import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CardsSolicitudes from './CardsSolicitudes'

const CardsSolicitudesList = ({ medicamentos }) => {
  return (
    <View>
      {medicamentos.map((medicamento, index) => (
        <CardsSolicitudes key={index} farmacia={medicamento.farmacia} medicamento={medicamento.nombre} precio={medicamento.precio}/>
      ))}
    </View>
  )
}

export default CardsSolicitudesList;