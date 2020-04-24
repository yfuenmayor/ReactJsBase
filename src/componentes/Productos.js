import React from 'react';

const Productos = ({producto, carrito, setCarrito, productos}) => {

    //Extraemos los elementos del obj
    const {id, nombre , precio} = producto;

    //Agregamos el funcionamiento del listener del boton comprar
    const agregarCarrito = (id) => {

        // const producto = productos.filter( producto => producto.id === id)[0]; // ó
        const producto = productos.filter( producto => producto.id === id);

        setCarrito([
            //Hacemos una copia del carrito
            ...carrito,
            //agregamos el producto
            // producto 
            ...producto
        ]);
    }

    // Creamos la funcion para el listener de eliminar del carrito
    const eliminarProducto = (id) => {

        //Obtenemos todo los elementos menos el seleccionado del carrito
        const producto = carrito.filter( producto => producto.id != id)

        //pasamos los productos nuevos al STATE de carrito
        setCarrito(producto)
    }




    return ( 
        <div>
            <h3>{nombre} <small>${precio}</small></h3>

            {/* boton Comprar o Eliminar segun sea el caso*/}

            { //Generamos un condicional y validamos si estamos pasando el prop de poructos para la accion
                productos ?
                    (
                        <button
                            type="button"
                            onClick={ () => agregarCarrito(id)}
                        >Comprar</button>
                    )
                :
                    (
                        <button
                            type="button"
                            onClick = { () => eliminarProducto(id)}
                        >Eliminar</button>
                    )
            }
            
        </div>
     );
}
 
export default Productos;