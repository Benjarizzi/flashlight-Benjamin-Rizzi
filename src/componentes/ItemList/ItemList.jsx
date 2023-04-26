import React from 'react'
import "./ItemList.css";
const ItemList = ({productos, deleteProduct, updateProduct}) => {
  return (
    <div>
            {
        productos.length > 0 &&

            productos.map((producto) => {
                return(
                  <div className='contenedor-tarjetita'>
                    <div key={producto.id} className="tarjetita" >
                    <img src={producto.imagen} alt= "" className='img-tarjetita'/>
                    <h2>{producto.title}</h2>
                    <p>{producto.descripcion}</p>
                    <p>${producto.precio}</p>
                    <button onClick={() => updateProduct(producto.id, {descripcion: "Me modifique"} ) } className='boton-tarjetita'>Editar</button>
                    <button onClick={ () => deleteProduct(producto.id) } className='boton-tarjetita'>Borrar</button>
                 </div>
                  </div>
                )
            })
        
        }
    </div>
  )
}

export default ItemList