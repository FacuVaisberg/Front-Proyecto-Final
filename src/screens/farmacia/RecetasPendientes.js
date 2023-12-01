import React from 'react';
import { View, Text, StyleSheet, Image, SafeAreaView, ScrollView } from 'react-native';
import LogoSinSloganNegro from "../../img/LogoSinSlogan.png";
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';
import RecetaNube from '../../components/RecetaNube';

const RecetasPendientes = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
        <TouchableOpacity style={styles.Back} onPress={() => navigation.navigate("HomeFarmacia")}>
          <Image source={require("../../img/volver.png")} />
        </TouchableOpacity>
        <Text style={styles.titulos}>Recetas</Text>
          <View style={styles.box}>
            <ScrollView style={{bottom: 50}}>
                <RecetaNube/>
            </ScrollView>
          </View>
        
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    width: '100%',
    backgroundColor: '#EFEFEF',
  },
  PharmaLifeLogo: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
    width: 136,
    height: 140,
    shadowRadius: 15
  },
  box: {
    height: '85%',
    width: '100%',
    position: "absolute",
    bottom: 0,
  },
  titulos:{
      color: "#000000",
      fontSize: 25,
      top: "5.25%",
      left: "4.65%",
  },
  titulo:{
    width:"100%",
    top:"5.25%",
    color: "#000000",
    left:"4.18%",
    fontSize: 25,
  
  },
  subtext:{
    color: "#FFFFFF",
  textAlign: "center",
  },

});

export default RecetasPendientes;
