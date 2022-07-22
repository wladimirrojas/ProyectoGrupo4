import React, { useState} from "react";

const initialValues = [
    {
        key: "1",
        fecha_emision: "",
        fecha_entrega: "",
        subtotal: "",
        comentario: "",
        iva_subtotal: ""
    }
]

const CarritoFormComponent = ({ ventasAdd }) => {

    const [values, setValues] = useState(initialValues);
    const { key, fecha_emision, fecha_entrega, subtotal, comentario, iva_subtotal } = values;

    // useEffect(
    //     () => {
    //         if (ventaEditada !== null) {
    //             setValues(ventaEditada)
    //         } else {
    //             setValues({
    //                 id: '1',
    //                 comentario: ''
    //             })
    //         }
    //     }
    //     , [ventaEditada]);

    const handleInputChange = (e) => {
        const changeValue = {
            ...values,
            [e.target.name]: e.target.value
        }
        setValues(changeValue)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        ventasAdd(values);
    }

    return (
        <form onSubmit={handleSubmit} >
            <div className="form-group">
                <label>ID</label>
                <input
                    type="text"
                    className="form-control"
                    id="key"
                    placeholder="Key"
                    name="key"
                    value={key}
                    onChange={handleInputChange}
                />
                <br />
                <label>Comentario</label>
                <input
                    type="text"
                    className="form-control"
                    id="comentario"
                    placeholder="comentario"
                    name="comentario"
                    value={comentario}
                    onChange={handleInputChange}
                />
                <br />
                <label>fecha_emision</label>
                <input
                    type="text"
                    className="form-control"
                    id="fecha_emision"
                    placeholder="Password"
                    name="fecha_emision"
                    value={fecha_emision}
                    onChange={handleInputChange}
                />
                <br />

                <label>fecha_entrega</label>
                <input
                    type="text"
                    className="form-control"
                    id="fecha_entrega"
                    placeholder="Password"
                    name="fecha_entrega"
                    value={fecha_entrega}
                    onChange={handleInputChange}
                />
                <br />

                <label>subtotal</label>
                <input
                    type="text"
                    className="form-control"
                    id="subtotal"
                    placeholder="Password"
                    name="subtotal"
                    value={subtotal}
                    onChange={handleInputChange}
                />
                <br />

                <label>iva_subtotal</label>
                <input
                    type="text"
                    className="form-control"
                    id="iva_subtotal"
                    placeholder="Password"
                    name="iva_subtotal"
                    value={iva_subtotal}
                    onChange={handleInputChange}
                />
                <br />
            </div>
            <div>
                <button type="submit" className="btn btn-outline-primary" >Crear</button>
                {/* {ventaEditada ?

                    (<button className="btn btn-outline-warning"
                        onClick={() => setVentaEditada(null)}>
                        Cancelar
                    </button>
                    ) : ''
                } */}

            </div>
        </form>
    )
}

export default CarritoFormComponent;