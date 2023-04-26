import React, { useEffect, useState } from 'react'
import data from "../../data/productos.json";
import {ItemDetail} from "./ItemDetail.jsx";
import {useParams} from "react-router-dom";

 const ItemDetailContainer = () => {

    const [product, setProduct] = useState({})
 

   
    const {id} = useParams()

    useEffect(() => {
        let encontrado = data.find(prod => prod.id === Number(id));
            setProduct(encontrado)
    },[id])



  return (
    <div style={{display:"block", textAlign:"center"}}>
       <ItemDetail product ={product} />
    </div>
  )
}

export default ItemDetailContainer