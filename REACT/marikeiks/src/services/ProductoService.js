import axios from 'axios';

/* const baseUrl = 'http://localhost:8080/api' */
const baseUrl = 'http://18.117.217.30/api'

const getAll = async()=>{
    const res = await axios.get(baseUrl + "/obtener/productos")
    console.log(res.data)
    return res.data; 
};

export default getAll;