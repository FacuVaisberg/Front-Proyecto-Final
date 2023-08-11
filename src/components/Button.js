import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

const Button = ({onPress, title}) =>{
 return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
);
}
const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        borderRadius: 15,
        backgroundColor: '#99D87D',
        marginTop: 10,
        paddingHorizontal: 30, // Cambia el tamaño del botón de forma horizontal
        paddingVertical: 10, // Cambia el tamaño del botón de forma vertical
        margin:80,
        shadowRadius: 15,
        marginBottom:10,
        shadowColor: '#2C4521',
        /* shadowOpacity: 0.6, */
        elevation: 5,
    },
    buttonText: {
        color: '#2C4521',
        fontSize: 16,
        fontStyle: "normal",
        /* lineHeight: 18, */
    },
  });

export default Button;