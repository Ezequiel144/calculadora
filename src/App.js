import React from 'react';
import logo from './img/Ezequiel.png';
import './App.css';
import {Boton} from './button/button.jsx'

function App() {
  return (
    <div className="App">
      <img className='logo' src={logo} alt='logo' />
      <div className='contcalculator'>
        <div className="fila">
            <Boton>1</Boton>
            <Boton>2</Boton>
            <Boton>3</Boton>
            <Boton>+</Boton>
        </div>
        <div className="fila">
            <Boton>4</Boton>
            <Boton>5</Boton>
            <Boton>6</Boton>
            <Boton>-</Boton>
        </div>
        <div className="fila">
            <Boton>7</Boton>
            <Boton>8</Boton>
            <Boton>9</Boton>
            <Boton>x</Boton>
        </div>
        <div className="fila">
            <Boton>.</Boton>
            <Boton>,</Boton>
            <Boton>0</Boton>
            <Boton>/</Boton>
        </div>
        <div className="fila">
            
        </div>
      </div>
    </div>
  );
}

export default App;
