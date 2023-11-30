import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const CuentaFarmacia = () => {
  const navigation = useNavigation();
  const [rol, setRol] = useState(1);
  const { login } = useUser();
  
  const userData = { //datos del usuario
    nombre,
    direccion,
    nombreDuenio,
    telefono,
    email,
    password,
    };
  const handleLogout = () => {
    login(userData, 0);
    navigation.navigate("Principio");
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

export default CuentaFarmacia;