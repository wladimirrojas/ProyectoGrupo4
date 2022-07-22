import axios from "axios";

const baseUrl = 'http://localhost:9080/api'

const getAll = async()=>{
    const res = await axios.get(baseUrl + "/carrito")
    return res.data; 
};

export default getAll;