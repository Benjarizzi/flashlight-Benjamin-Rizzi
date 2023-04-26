import axios from "axios"
import { useEffect, useState } from "react"

//Cuando quiera traer info de la api directamente lo llamo con esta funcion poniendole de parametro el endpoint y el valor inicial
const useFetch = (endpoint, initial) => {

    const [data, setData] = useState(initial)

    useEffect(() => {

        let getData = axios.get(endpoint)
        getData.then(res => setData(res.data)).catch((err) => console.log(err));

    },[endpoint])

    return{

        data

    }
};

export default useFetch