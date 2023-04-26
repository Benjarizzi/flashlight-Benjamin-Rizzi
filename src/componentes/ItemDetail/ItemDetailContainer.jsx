import React, { useEffect, useState } from 'react'
import data from "../../data/productos.json";
import {ItemDetail} from "./ItemDetail.jsx";

 const ItemDetailContainer = () => {

    const [product, setProduct] = useState({})
 

    let id = 2

    useEffect(() => {
        let encontrado = data.find(prod => prod.id === id)
        setTimeout(() =>{
            setProduct(encontrado)
        }, 2000)
    },[id])



  return (
    <div style={{display:"block", textAlign:"center"}}>
       <ItemDetail product ={product} />
    </div>
  )
}

export default ItemDetailContainer