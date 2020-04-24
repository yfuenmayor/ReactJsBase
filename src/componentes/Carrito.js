import React from 'react';
import './carrito.css'
import Productos from './Productos'

const Carrito = ({carrito, setCarrito}) => (
    <div className="carrito">
        <h3>Mi Carrito de compras</h3>

        {
            carrito.length === 0 ?
                <p>No hay elementos</p>
            :
                carrito.map( producto => (
                    //Reutilizamos el componente de productos
                    <Productos 
                        //En este caso no se pasa el prop de productos / otros ya que sera para el carrito
                        key={producto.id}
                        producto = {producto}
                        carrito = {carrito}
                        setCarrito = {setCarrito}
                    />
                ))
        }
    </div>
)

 
export default Carrito;