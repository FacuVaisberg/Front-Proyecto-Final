 import axios from 'axios';
 import ApiLogin from './Api'

// Función para enviar la solicitud de inicio de sesión
function iniciarSesion(email, contraseña) {
    // URL de tu servidor de inicio de sesión
    const urlInicioSesion = 'http://localhost:3000/login/';
  
    // Datos del usuario para enviar al servidor
    const datosUsuario = {
      email: email,
      contraseña: contraseña
    };
  
    // Enviar la solicitud POST al servidor
    axios.post(urlInicioSesion, datosUsuario)
      .then(function (respuesta) {
        // Manejar la respuesta del servidor
        if (respuesta.data.autenticado) {
          // El inicio de sesión fue exitoso, haz lo que necesites aquí
          console.log('Inicio de sesión exitoso');
        } else {
          // El inicio de sesión falló, maneja el error
          console.error('Inicio de sesión fallido');
        }
      })
      .catch(function (error) {
        // Manejar errores de la solicitud
        console.error('Error al realizar la solicitud: ' + error);
      });
  }
  
  // Ejemplo de uso de la función de inicio de sesión
  const email = 'usuario@example.com';
  const contraseña = 'contraseña123';
  iniciarSesion(email, contraseña);
  