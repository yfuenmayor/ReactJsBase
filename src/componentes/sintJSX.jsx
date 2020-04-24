// Importamos react
import React from 'react';

function Sintaxis() {
    
    let mensaje;
    const edad = 18;

    if (edad >= 18) {
        mensaje = 'Eres mayor de edad';
    } else {
        mensaje = 'Eres menor de edad';
    }

    return(
        <h1>{mensaje}</h1>
    )
}

export default Sintaxis;