import { View, Text } from "react-native";
import React from "react";

//const ROOT_DOMAIN = 'http://A-PHZ2-CIDI-010:3000/';
const ROOT_DOMAIN = "https://pharmalife.onrender.com/";
//const ROOT_DOMAIN = 'http://9b-wzc.anonymous.front-proyecto-final.exp.direct:3000/'

const Api = {
  ApiLogin: ROOT_DOMAIN + "login/",
  ApiUsuarioGetAll: ROOT_DOMAIN + "api/usuario/",
  /* ApiAgregarReceta:   ROOT_DOMAIN + 'api/receta/', */
  ApiAgregarReceta: ROOT_DOMAIN + "api/receta/",
  ApiGetAllReceta: ROOT_DOMAIN + "api/receta/",
  ApiGetAllNombreMedicamento: ROOT_DOMAIN + "api/medicamento/",
  ApiGetAllSolicitud: ROOT_DOMAIN + "api/solicitud/",
  GetSolicitudByIdReceta: ROOT_DOMAIN + "api/solicitud/",
  ApiPostSolicitud: ROOT_DOMAIN + "api/solicitud/",
  ApiDeleteSolicitud: ROOT_DOMAIN + 'api/solicitud/',
  ApiAceptarSolicitud: ROOT_DOMAIN +'api/solicitud/aceptada/'
};
export default Api;



export const registerUser = async (userData) => {
  try {
    const response = await fetch(`${ROOT_DOMAIN}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    if (response.ok) {
      const data = await response.json();
      return data; // Devolvemos los datos del usuario o cualquier información adicional del servidor
    } else {
      const errorData = await response.json();
      throw new Error(errorData.message || "Error en el registro");
    }
  } catch (error) {
    throw new Error(error.message || "Error en el registro");
  }
};
