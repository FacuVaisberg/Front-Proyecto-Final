import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

const Index = () => {
  return (
    <View style={styles.view}>
      <View style={styles.container}>
        <Text style={styles.baseText}>
          Bienvenidos a Pharma
          <Text style={styles.LetraDeColor}>L</Text>
          ife.
        </Text>
        <View style={styles.container2}>
          <Image
            style={styles.PharmaLifeLogo}
            source={require('./LogoPharmaLife.png')}
          />
        </View>
        <View>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Iniciar Sesion</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Registrarse</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    backgroundColor: "#668557",
  },
  container: {
    flex: 1,
    height: 24,
    width: 211,
    left: 110,
    top: 323
  },
  ImgProp: {
    flex: 1,
    alignItems: 'center',
    verticalAlign: "center"
  },
  baseText: {
    textAlign: 'center',
    marginBottom: 30,
    color: "white",
    fontFamily: 'Jacques Francois',
    fontweight: 400,
    fontsize: 18,
    lineheight: 24,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  button: {
    borderRadius: 15,
    backgroundColor: '#99D87D',
    marginTop: 20,
    padding: 10,
    alignItems: 'center',
    shadowRadius: 15,
    shadowColor: '#2C4521',
    shadowOpacity: 0.6,
    elevation: 5,
  },
  buttonText: {
    color: '#2C4521',
    fontFamily: 'assets/fonts/UberMoveMedium.otf', //con el .otf funciona por ahora pero no esta bueno que este
    fontSize: 16,
    fontWeight: '500',
    fontStyle: "normal",
    lineHeight: 18,
  },
  PharmaLifeLogo: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
    width: 122,
    height: 140,
    shadowRadius: 15
  },
  container2: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: 195,
    height: 132.189946785,
    textAlign: 'center',
  },
  LetraDeColor: {
    color: '#99D87D',
  },
});

export default Index;