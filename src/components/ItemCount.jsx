import { useState } from "react";

function ItemCount({onAgregar, stock}) {

    const[cantidad, setCantidad] = useState(1)
    const sumar = () => {
    if (cantidad < stock) {
        setCantidad(cantidad + 1);
    }
};
    const restar = () => {
        if (cantidad > 1) {
            setCantidad(cantidad - 1);
        }
    };

    if (stock === 0) {
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
                disabled={cantidad === stock}
            >
                +
            </button>
        </div>
        <button 
            className="contador-btn-agregar" 
            onClick={() => onAgregar(cantidad)}
        >
            Agregar
        </button>
    </div>
);

}


export default ItemCount