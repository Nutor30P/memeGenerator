import React from 'react'
import "../styles/imagen.css"

function Imagen({imagen}) {
  return (
    <>
      <img src={imagen} className="imagen" />
    </>
  )
}

export default Imagen
