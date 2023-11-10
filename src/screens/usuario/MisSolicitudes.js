import { View, Text, StyleSheet, TouchableOpacity, Image, SafeAreaView } from "react-native";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import React from "react";

const MisSolicitudes = () => {
  const navigation = useNavigation();
  
  return (
    <SafeAreaView style={styles.view}>
      <TouchableOpacity style={styles.back} onPress={() => navigation.navigate("HomeUsuario")}>
          <Image source={require("../../img/volver.png")} />
        </TouchableOpacity>
      <Text>MisAcuerdos</Text>
    </SafeAreaView>
  )
}

export default MisSolicitudes

const styles = StyleSheet.create({})