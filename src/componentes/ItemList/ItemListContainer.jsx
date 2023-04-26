
import { useEffect, useState } from "react";
import "./ItemList.css";
import ItemList from "./ItemList";
import axios from "axios";
import useCounter from "../../utils/hooks/useCounter";



const ItemListContainer = () => {

  const {counter, increment, decrement, reset} = useCounter()

    const [productos, setProductos] = useState([]);
    const [isDelete, setIsDelete] = useState(false)
    const [isModified,setIsModified] = useState(false)
    const [isCreate, setIsCreate] = useState(false)
    
    useEffect(() =>{
        setIsDelete(false)
        setIsModified(false)
        setIsCreate(false)
        let data = axios.get("http://localhost:5000/products")
        data.then(res => setProductos(res.data))
    }, [isDelete, isModified, isCreate])
    
    const deleteProduct = (id) =>{
       
      axios.delete(`http://localhost:5000/products/${id}`)
      setIsDelete(true)
    }

    const updateProduct = (id, data) =>{
      axios.patch(`http://localhost:5000/products/${id}`, data)
      setIsModified(true)
    }

    const createProduct = (data) =>{
      axios.post(`http://localhost:5000/products/`, data)
      setIsCreate(true)
    }

  return (
    <div>
        <ItemList 
         productos = {productos}
         deleteProduct={deleteProduct}
         updateProduct={updateProduct}
         />



        <div style={{display:"flex", justifyContent:"center", marginTop:"3rem", marginBottom:"5rem"}}>
           <button className='boton-tarjetita' style={{padding:"2rem", fontSize:"1rem"}} onClick={() => createProduct({
            "title": "Nuevo Producto",
            "imagen": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy9Teh7zwwg-MMhCdlGprZmcdx7pRH-uma9g&usqp=CAU",
            "precio": " 4.500",
            "descripcion": "Vaper descartable 5000 puffs"
           })}>Crear</button>
        </div>

        <div style={{display:"flex", justifyContent:"center"}}>
          <div style={{display:"block", textAlign:"center"}}>
            <button onClick={increment} style={{padding:".8rem",backgroundColor:"rgb(120, 7, 182)", color:"white", fontSize:"1.2rem", cursor:"pointer",width:"100%"}}>+</button>
            <h1>{counter}</h1>
            <button onClick={decrement} style={{padding:".8rem", backgroundColor:"rgb(120, 7, 182)", color:"white", fontSize:"1.2rem", cursor:"pointer", width:"100%"}}>-</button>
            <button onClick={reset} style={{padding:".8rem", backgroundColor:"rgb(120, 7, 182)", color:"white", fontSize:"1.6",  cursor:"pointer", width:"100%", }}>reset</button>
          </div>
        </div>
      
    </div>
  )
}

export default ItemListContainer