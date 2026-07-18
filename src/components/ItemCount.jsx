import { useState } from "react";

function ItemCount({onAgregar}) {

    const[cantidad, setCantidad] = useState(1)
    const sumar = () => {
        setCantidad(cantidad + 1);
    };

    const restar = () => {
        if (cantidad > 1) {
            setCantidad(cantidad - 1);
        }
    };
    
    return(
        <div>
            <button onClick={restar} disabled={cantidad === 1}>-</button>
            <span>{cantidad}</span>
            <button onClick={sumar}>+</button>
            <button onClick={() => onAgregar(cantidad)}>Agregar</button>
        </div>
    )
}


export default ItemCount