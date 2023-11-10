import React from 'react';
import { View } from 'react-native';
import MiniCardsRecetas from './miniCardsRecetas'

const MiniCardsRecetasList = ({ medicamentos }) => {
  return (
    <View>
      {medicamentos.map((medicamento, index) => (
        <MiniCardsRecetas
          key={index}
          medicamento={medicamento.nombre}
          fechaVencimiento={medicamento.fechaVencimiento}
        />
      ))}
    </View>
  );
};

export default MiniCardsRecetasList;