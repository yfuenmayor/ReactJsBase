// Importamos react
import React from 'react';

//Creamos una funcion declaration

    function Header({titulo}) {
        // Ejecutamos la logica del componente
        

        // Todo lo que lleva el return es lo que se vera en pantalla 
        return(
        <h1>{titulo}</h1>
        )
    }

//Al final exportamos la funcion
export default Header;