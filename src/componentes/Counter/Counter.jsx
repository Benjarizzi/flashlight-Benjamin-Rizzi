import { useState } from "react";

const Counter = () => {


    const [number, setNumber] = useState(0);

    const sumar = () => {
        setNumber(number+1);
    }
    const restar = () => {
        setNumber(number-1)
    }
 
  return (
    <div style = {{display:"flex", justifyContent:"center"} }>
        <div style ={{display:"block", textAlign:"center"}}>
        <button onClick={restar}>Restar</button>
        <h1>{number}</h1>
        <button onClick={sumar}>Sumar</button>
        </div>
    </div>
  )
}

export default Counter;