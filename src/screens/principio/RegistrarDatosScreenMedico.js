import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react';
import CardRegistro from '../../components/CardRegistro'
import Button from '../../components/Button'
import { useNavigation } from '@react-navigation/native';
import { useUser } from '../../../UserContext';

const RegistrarDatosScreenMedico = () => {
  const [nombre, setName] = useState('');
  const [apellido, setApellido] = useState('');
  const [direccion, setDireccion] = useState('');
  const [dni, setDni] = useState('');
  const [isValid, setIsValid] = useState(true);
  const [telefono, setTelefono] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigation = useNavigation();
  /* const [rol, setRol] = useState(0);
  const { login } = useUser(); */

/*   const handleDniChange = (text) => {
    // Verificar si el DNI tiene exactamente 8 dígitos
    const isValidDni = /^\d{8}$/.test(text);
    setIsValid(isValidDni);
    setDni(text);
  }; */

  /* const handleRegistro = () => {
    // Lógica de registro...

    // Supongamos que la lógica de registro es exitosa y obtenemos los datos del usuario
    const userData = {
      nombre,
      // ... Otras propiedades del usuario
    };

    // Actualizar el contexto con los datos del usuario y el nuevo rol (3 para Medico)
    login(userData, 3);

    // Navegar a la pantalla correspondiente al nuevo rol
    navigation.navigate("Medico");
  };
 */
  return (
    <View style={styles.view}>
      <Text style={styles.baseText}>Completa tus datos como Medico</Text>
      <CardRegistro title={"Accede como medico para poder mejorar la experiencia en sus clientes."} />
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
            <TextInput style={styles.input} placeholder="Dni:" value={dni} onChangeText={handleDniChange}/>
            {!isValid && <Text style={{ color: 'red' }}>El DNI debe tener 8 dígitos.</Text>}
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

        <TouchableOpacity style={styles.buttonChico} onPress={/* handleRegistro */() => navigation.navigate("Medico")}>
          <Text style={styles.buttonText}>Registrarse</Text>
        </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
  view: {
    backgroundColor: '#EFEFEF',
    flex: 1,
    alignItems: 'center',
  },
  baseText: {
    textAlign: 'center',
    marginTop: 125,
    marginBottom: 30,
    color: '#668557',
    /*fontFamily: 'Crimson Text',*/
    fontSize: 25,
    /* lineHeight: 24, */
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
    /* shadowOpacity: 0.6, */
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
/*     shadowOpacity: 0.6, */
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
    /* shadowOpacity: 0.6, */
    elevation: 5,
  },
  buttonText: {
    textAlign:"center",
    color: '#2C4521',
/*     fontFamily: 'assets/fonts/UberMoveMedium.otf', */
    fontSize: 16,
    fontStyle: 'normal',
    /* lineHeight: 18, */
  },
})

export default RegistrarDatosScreenMedico