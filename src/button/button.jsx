import React from "react";
import './button.css';

export function Boton(props){

    function Operador(valor){
        return isNaN(valor) && (valor !== '.') && (valor !== '=') && (valor !== ',');
        /*isNaN --> no numeros enteros(Z)*/ 
    }

    return(
        <div className={`buttoncont ${Operador(props.children) ? 'operador' : null}`}
        onClick= {() => props.actualizarValor(props.children)}>
            {props.children}
        </div>
    );
}