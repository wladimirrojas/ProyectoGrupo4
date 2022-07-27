import axios from 'axios';

/* const baseUrl = 'http://localhost:8080/api' */
const baseUrl = 'http://3.143.243.216/api'

const getAll = async()=>{
    const res = await axios.get(baseUrl + "/obtener/productos")
    return res.data; 
};

export default getAll;