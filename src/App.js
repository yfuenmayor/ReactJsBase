//importamos los modulos necesarios para que funcione REACT
import React, { Fragment, useState } from 'react';
//importamos los componentes
import Header from './componentes/Header'
import Footer from './componentes/Footer'
import Productos from './componentes/Productos';
import Carrito from './componentes/Carrito';
// import Sintaxis from './componentes/sintJSX'


function App() {

  // STATE de Productos
    const [ productos , setProductos ] = useState([
      {id: 1, nombre: 'Camisa', precio: 230},
      {id: 2, nombre: 'Pantalon', precio: 330},
      {id: 3, nombre: 'Medias', precio: 50},
      {id: 4, nombre: 'Zapatos', precio: 456},
      {id: 5, nombre: 'Bufanda', precio: 13}
    ]);

  //State de Carrito
    const [carrito, setCarrito] = useState([]);

  //Obtener año actual para el footer
  const anio = new Date().getFullYear();

  return (
    <Fragment>
      {/* componente para el header */}
      <Header
          titulo='Tienda Virtual'
          />

      {/* componente para los productos */}
      <h1>Listado de Productos</h1>

      {/* Recorremos el array con map: productos-StateInicial */}
      {productos.map( producto => (
          <Productos 
            //Asignamos un key como identificador unico de cada componente
            key={producto.id}
            productos = {productos}
            producto = {producto} 
            carrito = {carrito}
            setCarrito = {setCarrito}
            
          />
      ))}

      {/* componente para el Carrito */}
        <Carrito 
          //pasamos los datos del carrito de compra State carrito
          carrito = {carrito}
          setCarrito = {setCarrito}
        
        />
      {/* componente para el footer */}
      <Footer
        anio={anio}
      />
    </Fragment>
  );
}

export default App;
