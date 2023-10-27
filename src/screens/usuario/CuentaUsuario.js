import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const CuentaUsuario = () => {
  const navigation = useNavigation();

  const handleLogout = () => {
    // Aquí debes agregar la lógica para cerrar la sesión del usuario.
    // Esto podría implicar eliminar el token de autenticación, limpiar el estado, etc.
    // Una vez que se haya realizado la acción de cierre de sesión, puedes navegar a la pantalla de inicio de sesión u otra pantalla adecuada.
    // Ejemplo de navegación:
    // navigation.navigate('Login'); // Asegúrate de que 'Login' sea el nombre correcto de tu pantalla de inicio de sesión.
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>¿Desea cerrar sesión?</Text>
      <Button title="Cerrar Sesión" onPress={handleLogout} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    marginBottom: 20,
  },
});

export default CuentaUsuario;