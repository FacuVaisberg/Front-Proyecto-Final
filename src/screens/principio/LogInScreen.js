import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import ValidarLogin from "../../../ValidarLogin"
import Api from '../../../Api';
import axios from 'axios';
import SemiCircle from '../../components/SemiCircle';
import { Alert } from 'react-native';

const LogInScreen = () => {
  const [mail, setMail] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigation = useNavigation();

  const validarUsuario =async () =>{
    try{
      let objeto = {
        email: mail,
        password: contraseña,
      }
   
      /* console.log(objeto)
      console.log(Api.ApiLogin)
      const response = await axios.post(Api.ApiLogin, objeto);
      console.log(response.data)*/


      console.log(Api.ApiLogin)
      const response = await axios.post(Api.ApiLogin, objeto);
      console.log(response)
      const Headers={
        headers:{
          authorization: `Bearer ${response.data}`
        }
      }
      console.log(Headers)
      if (Headers.data!="") {
        navigation.navigate('Farmacia', { mail, contraseña })
      }
      else{
        console.log('los datos son erroneos, intente de nuevo')
      }


      /*if (){
        navigation.navigate('Medico', { mail, contraseña });
      }else{
        Alert.alert('los datos son erroneos, intente de nuevo')
      }*/ 
      

    }
    catch(error){
      console.log(error)
    }
  }

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
   /*  BackURl="http://localhost:3000/api/usuario/" */
  return (
    <View style={styles.view}>
      <SemiCircle style={styles.semiCircle}/>
      <View style={styles.container}>
        <Text style={styles.baseText}>Ingresa tu cuenta</Text>

        <View style={[styles.inputContainer, styles.button]}>
          <TextInput
            style={styles.input}
            placeholder="Mail:"
            value={mail}
            onChangeText={setMail}
          />
        </View>

        <View style={[styles.inputContainer, styles.button]}>
          <TextInput
            style={styles.input}
            placeholder="Contraseña:"
            value={contraseña}
            onChangeText={setContraseña}
            secureTextEntry={!showPassword}
          />
          <TouchableOpacity style={styles.showPasswordButton} onPress={toggleShowPassword}>
            <Icon name={showPassword ? 'eye' : 'eye-slash'} size={20} color="#555" />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.buttonChico} onPress={validarUsuario} >
          <Text style={styles.buttonText}>Iniciar sesión</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    backgroundColor: '#EFEFEF',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  baseText: {
    textAlign: 'center',
    marginTop: 180,
    marginBottom: 30,
    color: '#668557',
    /*fontFamily: 'Crimson Text',*/
    fontSize: 25,
  /*   lineHeight: 24, */
  },
  container: {
    height: '100%',
    width: '80%',
    alignItems:'center',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    paddingLeft: 10,
  },
  input: {
    flex: 1,
    paddingVertical: 10,
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
    paddingHorizontal: 30,
    paddingVertical: 10,
    shadowRadius: 15,
    shadowColor: '#2C4521',
    /* shadowOpacity: 0.6, */
    elevation: 5,
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
    color: '#2C4521',
    /* fontFamily: 'assets/fonts/UberMoveMedium.otf', */
    fontSize: 16,
    fontStyle: 'normal',
    justifyContent:'center',
    alignContent:'center',
  /*   lineHeight: 18, */
  },
  semiCircle: {
    /* position: 'absolute', */
    top: 0,
    left: 0,
  },
});

export default LogInScreen;
