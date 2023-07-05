import axios from "axios";
import { Alert } from "react-native";

export async function CargarTodo() {
  let url = "http://localhost:3000/api/medicamento/";
  const response = await axios.get(url);
  const data = await response.data; 
  return data;
}


 export async function AgregarReceta(receta) {
  Alert.alert('¡La receta se subió con exito!', 'Gracias por colaborar con los pacientes')
  /* let Dni = document.getElementById("Dni").value;
  let NombreMedicamento = document.getElementById("NombreMedicamento").checked;
  let FechaVencimiento = document.getElementById("FechaVencimiento").value; */
  let Receta = {
    "Dni": receta.Dni,
    "NombreMedicamento": receta.NombreMedicamento,
    "FechaVencimiento": receta.FechaVencimiento,
    "FechaCreacion": new Date (),
  }
/*   console.log(Receta)
  let url = "http://localhost:3000/api/receta/";
  receta.FechaCreacion = new Date ();
  const response = await axios.post(url, Receta);
  const data = await response.data; 
  return data; */
  return Alert.alert
}

