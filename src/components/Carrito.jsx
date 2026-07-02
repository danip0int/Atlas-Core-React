
import { useContext } from "react";

import { CarritoContext } from "../context/CarritoContext";

function Carrito() {

    const {carrito, eliminarProducto, vaciarCarrito} = useContext(CarritoContext);

    return(
        <div>
            <h2>Carrito</h2>
            <div>
                <button onClick={() => vaciarCarrito()}>Vaciar carrito</button>
                {carrito.map(vaciar => (
                    <div key={vaciar.id}>{vaciar.nombre} <button onClick={() => eliminarProducto(vaciar)}>Eliminar</button></div>
                ))}
            </div>
        </div>
    )
    
}

export default Carrito;