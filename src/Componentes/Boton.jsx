import React, { useState } from 'react';
import './Boton.css';

const Boton = () => {
  const [texto, setTexto] = useState('Hacer clic aquí');

  const manejarClick = () => {
    setTexto('¡Gracias por hacer clic!');
  };

  return (
    <button className="boton" onClick={manejarClick}>
      {texto}
    </button>
  );
};

export default Boton;
