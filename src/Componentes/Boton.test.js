// Boton.test.js
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Boton from './Boton';

test('verifica el cambio de texto en el botón al hacer clic', () => {
    const { getByText } = render(<Boton />);

   const boton = getByText('Hacer clic aquí');
  expect(boton).toBeInTheDocument(); 

  fireEvent.click(boton);

   expect(getByText('¡Gracias por hacer clic!')).toBeInTheDocument(); 
});
