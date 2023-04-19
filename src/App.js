import React from 'react';
import logo from './img/Ezequiel.png';
import './App.css';
import {Boton} from './button/button.jsx';
import {ShowPantalla} from './pantalla/pantalla.jsx';
import {BotonClear} from'./botonClear/botonClear.jsx'
import { useState } from 'react';

function App() {

  const [inputValor,setInputValor] = useState('');

  function agregarValor(val){
    return setInputValor(inputValor + val);
  }

  /* const agregarValor = val =>{
    setInputValor(inputValor + val);
  } */

  return (
    <div className="App">
      <img className='logo' src={logo} alt='logo' />
      <div className='contcalculator'>
        <ShowPantalla
          inputData={inputValor}
        />
        <div className="fila">
            <Boton actualizarValor={agregarValor}>1</Boton>
            <Boton actualizarValor={agregarValor}>2</Boton>
            <Boton actualizarValor={agregarValor}>3</Boton>
            <Boton actualizarValor={agregarValor}>+</Boton>
        </div>
        <div className="fila">
            <Boton actualizarValor={agregarValor}>4</Boton>
            <Boton actualizarValor={agregarValor}>5</Boton>
            <Boton actualizarValor={agregarValor}>6</Boton>
            <Boton actualizarValor={agregarValor}>-</Boton>
        </div>
        <div className="fila">
            <Boton actualizarValor={agregarValor}>7</Boton>
            <Boton actualizarValor={agregarValor}>8</Boton>
            <Boton actualizarValor={agregarValor}>9</Boton>
            <Boton actualizarValor={agregarValor}>x</Boton>
        </div>
        <div className="fila">
            <Boton actualizarValor={agregarValor}>=</Boton>
            <Boton actualizarValor={agregarValor}>.</Boton>
            <Boton actualizarValor={agregarValor}>0</Boton>
            <Boton actualizarValor={agregarValor}>/</Boton>
        </div>
        <div className="fila">
            <BotonClear/>
        </div>
      </div>
    </div>
  );
}

export default App;
