import React from 'react'

 export const ItemDetail = ({product}) => {
  return (

    <div style={{display:"flex", justifyContent:"center",padding:"3rem"}}>
      <div style={{width:"25rem"}}>
        <img src={product.imagen} alt="" style={{width:"20rem", height:"20rem"}} />
        <h2>{product.title}</h2>
        <h3>{product.descripcion}</h3>
        <h4>{product.precio}</h4>
      </div>
    </div>
  )
}

