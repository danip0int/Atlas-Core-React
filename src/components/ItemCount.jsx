import { useState } from "react";

function ItemCount({onAgregar, stock, cantidadEnCarrito = 0}) {

    const disponible = stock - cantidadEnCarrito;

    const[cantidad, setCantidad] = useState(1)

    const sumar = () => {
        if (cantidad < disponible) {
            setCantidad(cantidad + 1);
        }
    };

    const restar = () => {
        if (cantidad > 1) {
            setCantidad(cantidad - 1);
        }
    };

    if (disponible <= 0) {
        return <p className="sin-stock">Sin stock</p>;
    }

    return (
    <div className="contador-container">
        <div className="contador-controles">
            <button 
                className="contador-btn-flecha" 
                onClick={restar} 
                disabled={cantidad === 1}
            >
                -
            </button>
            <span className="contador-numero">{cantidad}</span>
            <button 
                className="contador-btn-flecha" 
                onClick={sumar}
                disabled={cantidad === disponible}
            >
                +
            </button>
        </div>
        <button 
            className="contador-btn-agregar" 
            onClick={() => onAgregar(cantidad)}
            disabled={cantidad > disponible}
        >
            Agregar
        </button>
    </div>
);

}


export default ItemCount