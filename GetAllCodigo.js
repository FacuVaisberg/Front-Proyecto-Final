/*import { View, Text } from "react-native";
import React, { useState } from "react";
import CargarTodo from "../../Funciones";
import { Medicamento } from "../components/Medicamento";

const HomeMedico = () => {
  const [medicamentos, setMedicamentos] = useState([]);

  const handleClick = async () => {
    const medicamentos = await CargarTodo();
    console.log(medicamentos);
    setMedicamentos(medicamentos);
  };

  return (
    <View>
      <Text>HomeMedico</Text>
      <button onClick={handleClick}>Cargar Todo</button>
      {medicamentos &&
        medicamentos.map((item) => {
          return <Medicamento key={item.IdMedicamentos} medicamento={item} />;
        })}
    </View>
  );
};

export default HomeMedico;




<div class="col-4">
              <div class="colorCard card border-success mb-3 cardPokemon" style="max-width: 20rem;">
                <div class="card-header bg-colorCard headCard  ">{item.IdMedicamentos}. {item.NombreMedicamento} </div>
                    <div class="card-body text-success card-group">
                    </div>
                    <div class="card-footer bg-transparent border-success"> 
                      <button class="btn boton" onclick="Borrar(${item.IdMedicamentos})">Eliminar Pizzeta</button>
                    </div>
                  </div>
                  </div>

                  */
