import axios from "axios";

async function CargarTodo() {
  let url = "http://localhost:3000/api/medicamento/";
  const response = await axios.get(url);
  const data = await response.data; 
  return data;
}


async function AgregarReceta() {
  let url = "http://localhost:3000/api/receta/";
  const response = await axios.post(url);
  const data = await response.data; 
  return data;
}
export default AgregarReceta && CargarTodo;
