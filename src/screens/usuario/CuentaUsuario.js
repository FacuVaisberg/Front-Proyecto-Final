import { View, Text, StyleSheet, TouchableOpacity, Image, SafeAreaView, Button } from "react-native";
import { useState } from "react";
import { useUser } from "../../../UserContext";
import { useNavigation } from "@react-navigation/native";
import React from "react";

const CuentaUsuario = () => {
  const navigation = useNavigation();
  const { login } = useUser();
  
  const handleLogout = () => {
    const [rol, setRol] = useState(2);
    
  
  const userData = { //datos del usuario
    nombre,
    direccion,
    nombreDuenio,
    telefono,
    email,
    password,
    };
  
    login(userData, 0);
    navigation.navigate("Principio");
  };

  return (
    <SafeAreaView style={styles.view}>
      <TouchableOpacity style={styles.back} onPress={() => navigation.navigate("HomeUsuario")}>
          <Image source={require("../../img/volver.png")} />
        </TouchableOpacity>
        <View style={styles.container}>
        <Text style={styles.text}>¿Desea cerrar sesión?</Text>
        <Button title="Cerrar Sesión" onPress={handleLogout} />
        </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    height: "100%",
    width: "100%",
    backgroundColor: "#EFEFEF",
  },
  text: {
    fontSize: 18,
    marginBottom: 20,
  },
});

export default CuentaUsuario;