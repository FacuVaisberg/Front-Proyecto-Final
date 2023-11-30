import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image} from 'react-native'
import React, { useState } from 'react';
import CardRegistro from '../../components/CardRegistro'
import { useNavigation } from '@react-navigation/native';
import farmaciaFoto from '../../img/farmaciaRegistrarse.jpg'
import { useUser } from '../../../UserContext';
//import { registerUser } from '../../../Api';


const RegistrarDatosScreenFarmacia = () => {
  const [nombre, setName] = useState('');
  const [direccion, setDireccion] = useState('');
  const [nombreDuenio, setNombreDuenio] = useState('');
  const [telefono, setTelefono] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigation = useNavigation();
  const [rol, setRol] = useState(0);
  const { login } = useUser();


  const handleRegistro = async () => {
    // Lógica de registro...

    const userData = { //datos del usuario
      nombre,
      direccion,
      nombreDuenio,
      telefono,
      email,
      password,
      };

      login(userData, 1);
      navigation.navigate("HomeFarmacia");
  };

  return (
    <View style={styles.view}>
      <TouchableOpacity style={styles.back} onPress={() => navigation.navigate("Medico")}>
          <Image source={require("../../img/volver.png")} />
        </TouchableOpacity>
        <View style={styles.container}>
          <Text style={styles.baseText}>Completa los datos como Farmacia</Text>
          <CardRegistro style={styles.card} source={farmaciaFoto}>
            Accede como farmacia para poder mejorar la experiencia en sus clientes
          </CardRegistro>
          <View style={[styles.inputContainer, styles.button]}>
              <TextInput style={styles.input} placeholder="Nombre:" value={nombre} onChangeText={setName}/>
          </View>
          <View style={[styles.inputContainer, styles.button]}>
              <TextInput style={styles.input} placeholder="Direccion:" value={direccion} onChangeText={setDireccion}/>
          </View>
          <View style={[styles.inputContainer, styles.buttonOscuro]}>
            <TextInput style={styles.input} placeholder="Nombre del dueño:" value={nombreDuenio} onChangeText={setNombreDuenio }/>
          </View>
          <View style={[styles.inputContainer, styles.button]}>
              <TextInput style={styles.input} placeholder="Telefono:" value={telefono} onChangeText={setTelefono}/>
          </View>
          <View style={[styles.inputContainer, styles.buttonOscuro]}>
              <TextInput style={styles.input} placeholder="Mail:" value={email} onChangeText={setEmail}/>
          </View>
          <View style={[styles.inputContainer, styles.button]}>
              <TextInput style={styles.input} placeholder="Contraseña:" value={password} onChangeText={setPassword}/>
          </View>
          <TouchableOpacity style={styles.buttonChico} onPress={handleRegistro/* () => navigation.navigate("Farmacia") */}>
            <Text style={styles.buttonText}>Registrarse</Text>
          </TouchableOpacity>
        </View>
    </View>
  )
}
const styles = StyleSheet.create({
  view: {
    backgroundColor: '#EFEFEF',
    flex: 1,
  },
  baseText: {
    textAlign: 'center',
    marginTop: 35,
    marginBottom: 30,
    color: '#668557',
    fontSize: 25,
  },
  card:{
    height:300,
    width: "100%"

  },
  container:{
    alignContent:'center',
    alignItems:'center',
  },
  back: {
    color: "#7CB164",
    width: 30,
    height: 30,
    top: "2.57%",
    left: "4.65%",
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
    width:"80%",
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    paddingLeft: 10,
    margin: 30,
  },
  input: {
    flex: 1,
    paddingVertical: 7,
    height:"100%"
  },
  showPasswordButton: {
    paddingHorizontal: 10,
    left: 15,
  },
  button: {
    alignItems: 'center',
    borderRadius: 15,
    backgroundColor: '#99D87D',
    marginTop: 10,
    paddingHorizontal:"40%",
    paddingVertical: 1,
    shadowRadius: 5,
    shadowColor: '#2C4521',
    elevation: 5,
    margin:30
  },
  buttonOscuro: {
    alignItems: 'center',
    borderRadius: 15,
    backgroundColor: '#79AD60',
    marginTop: 10,
    paddingHorizontal:"40%",
    paddingVertical: 1,
    shadowRadius: 5,
    shadowColor: '#2C4521',
    elevation: 5,
    margin:30
  },
  buttonChico: {
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    width: '50%',
    borderRadius: 15,
    backgroundColor: '#99D87D',
    marginTop: 10,
    paddingHorizontal: 30,
    paddingVertical: 10,
    shadowRadius: 15,
    shadowColor: '#2C4521',
    elevation: 5,
  },
  buttonText: {
    color: '#2C4521',
    fontSize: 16,
    fontStyle: 'normal',
  },
})

export default RegistrarDatosScreenFarmacia