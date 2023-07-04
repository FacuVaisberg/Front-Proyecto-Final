import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react';
import CardRegistro from '../components/CardRegistro'
import Button from '../components/Button'
import { useNavigation } from '@react-navigation/native';
import HomeMedico from './HomeMedico';

const RegistrarDatosScreenMedico = () => {
  const [nombre, setName] = useState('');
  const [apellido, setApellido] = useState('');
  const [direccion, setDireccion] = useState('');
  const [dni, setDni] = useState('');
  const [telefono, setTelefono] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigation = useNavigation();
  return (
    <View style={styles.view}>
      <Text style={styles.baseText}>Completa tus datos como Medico</Text>
      <CardRegistro title={"Accede como medico para poder mejorar la experiencia ed sus clientes."} />
      <View style={[styles.inputContainer, styles.button]}>
          <TextInput style={styles.input} placeholder="Nombre:" value={nombre} onChangeText={setName}/>
        </View>
        <View style={[styles.inputContainer, styles.buttonOscuro]}>
          <TextInput style={styles.input} placeholder="Apellido:" value={apellido} onChangeText={setApellido }/>
        </View>
        <View style={[styles.inputContainer, styles.button]}>
            <TextInput style={styles.input} placeholder="Direccion:" value={direccion} onChangeText={setDireccion}/>
        </View>
        <View style={[styles.inputContainer, styles.buttonOscuro]}>
            <TextInput style={styles.input} placeholder="Dni:" value={dni} onChangeText={setDni}/>
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

        <TouchableOpacity style={styles.buttonChico} onPress={() => navigation.navigate("Medico")}>
          <Text style={styles.buttonText}>Registrarse</Text>
        </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
  view: {
    backgroundColor: '#EFEFEF',
    flex: 1,
    justifyContent: 'top',
    alignItems: 'center',
  },
  baseText: {
    textAlign: 'center',
    marginTop: 125,
    marginBottom: 30,
    color: '#668557',
    fontFamily: 'Crimson Text',
    fontWeight: 'bold',
    fontSize: 25,
    lineHeight: 24,
  },
  container: {
    height: '100%',
    width: '80%',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    paddingLeft: 10,
    margin: 30,
  },
  input: {
    flex: 1,
    paddingVertical: 7,
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
    shadowOpacity: 0.6,
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
    shadowOpacity: 0.6,
    elevation: 5,
    margin:30
  },
  buttonChico: {
    justifyContent: 'center',
    alignContent: 'center',
    width: '50%',
    borderRadius: 15,
    backgroundColor: '#99D87D',
    marginTop: 10,
    paddingHorizontal: 30,
    paddingVertical: 10,
    shadowRadius: 15,
    shadowColor: '#2C4521',
    shadowOpacity: 0.6,
    elevation: 5,
  },
  buttonText: {
    color: '#2C4521',
    fontFamily: 'assets/fonts/UberMoveMedium.otf',
    fontSize: 16,
    fontWeight: '500',
    fontStyle: 'normal',
    lineHeight: 18,
  },
})

export default RegistrarDatosScreenMedico