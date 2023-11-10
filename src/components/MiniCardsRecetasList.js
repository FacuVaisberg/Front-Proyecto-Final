import React from 'react';
import { View } from 'react-native';
<<<<<<< HEAD
import MiniCardsRecetas from '../components/miniCardsRecetas';
=======
import MiniCardsRecetas from './miniCardsRecetas'
>>>>>>> 8bc8a7eaaabccc5c43db18183f9f3a9c711d2d42

const MiniCardsRecetasList = ({ medicamentos }) => {
  return (
    <View>
      {medicamentos.map((medicamento, index) => (
        <MiniCardsRecetas key={index} medicamento={medicamento.nombre} fechaVencimiento={medicamento.fechaVencimiento}/>
      ))}
    </View>
  );
};

export default MiniCardsRecetasList;