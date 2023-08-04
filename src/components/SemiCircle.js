import React from 'react';
import { View, StyleSheet } from 'react-native';

const SemiCircle = () => {
  return (
    <View style={styles.container}>
      <View style={styles.semiCircle} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  semiCircle: {
    backgroundColor: '#79AD60',
    width: 200,
    height: 100,
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
  /*   opacity:'70%' */
  },
});

export default SemiCircle;
