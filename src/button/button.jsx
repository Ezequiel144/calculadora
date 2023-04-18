import React from "react";
import './button.css';

export function Boton(props){
    return(
        <div className="buttoncont">
            {props.children}
        </div>
    );
}