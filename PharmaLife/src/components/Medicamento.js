import React from 'react'

export const Medicamento = (props) => {
    console.log(props);
  return (
    <p>{props.medicamento.NombreMedicamento}</p>
  )
}
