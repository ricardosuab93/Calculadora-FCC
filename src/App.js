import './App.css';

import React from 'react';

import Logo from './imagenes/freecodecamp-logo.png'
import Boton from './componentes/Boton'
import Pantalla from './componentes/Pantalla';
import BotonClear from './componentes/BotonClear';
import BotonBkspc from './componentes/BotonBkspc';

import { evaluate } from 'mathjs'

function App() {

  const [input, setInput] = React.useState('');

  const agregarInput = val => {
    setInput(input+val);
  };

  const calcularResultado = () => {
    if (input){
      setInput(evaluate(input));
    } else {
      setInput('NaN')
    }
  }

  const borrarUltimo = () => {
    setInput(input.slice(0, - 1));
  } 

  return (
    <div className="App">
      <div className='freecodecamp-logo-contenedor'>
        <img src={Logo} className='freecodecamp-logo' alt='le logue' />
      </div>
      <div  className='contenedor-calculadora'>
        <Pantalla input={input} />
        <div className='fila'>
          <Boton manejarClick={agregarInput}>1</Boton>
          <Boton manejarClick={agregarInput}>2</Boton>
          <Boton manejarClick={agregarInput}>3</Boton>
          <Boton manejarClick={agregarInput}>+</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={agregarInput}>4</Boton>
          <Boton manejarClick={agregarInput}>5</Boton>
          <Boton manejarClick={agregarInput}>6</Boton>
          <Boton manejarClick={agregarInput}>-</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={agregarInput}>7</Boton>
          <Boton manejarClick={agregarInput}>8</Boton>
          <Boton manejarClick={agregarInput}>9</Boton>
          <Boton manejarClick={agregarInput}>*</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={calcularResultado}> = </Boton>
          <Boton manejarClick={agregarInput}>0</Boton>
          <Boton manejarClick={agregarInput}>.</Boton>
          <Boton manejarClick={agregarInput}>/</Boton>
        </div>
        <div className='fila'>
          <BotonClear manejarClear={() => setInput('')} > Clear </BotonClear>
          <BotonBkspc manejarClick={borrarUltimo}> BKSPC </BotonBkspc>
        </div>
      </div>
    </div>
  );
}

export default App;
