import axios from "axios";

const baseUrl = "localhost:8080/api/venta";

//obtener datos de Ventas
const getAllVentas=async()=>{
    const res = await axios.get(baseUrl + "/obtener");
    return res.data;
}

//guardar datos de ventas
const guardarVentas=async(ventas)=>{
    const res = await axios.post(baseUrl + "/guardar",ventas);
    return res.data;
}

export {getAllVentas, guardarVentas}; 
