import { View, Text, StyleSheet, TouchableOpacity, Image, SafeAreaView } from "react-native";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import React from "react";

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
    <SafeAreaView style={styles.view}>
      <TouchableOpacity style={styles.back} onPress={() => navigation.navigate("HomeUsuario")}>
          <Image source={require("../../img/volver.png")} />
        </TouchableOpacity>
      <Text style={styles.text}>¿Desea cerrar sesión?</Text>
      <Button title="Cerrar Sesión" onPress={handleLogout} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  view: {
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