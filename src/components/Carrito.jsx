
import { useContext } from "react";

import { CarritoContext } from "../context/CarritoContext";

function Carrito() {

    const {carrito, eliminarProducto, vaciarCarrito} = useContext(CarritoContext);
    const total = carrito.reduce((acumulador, item) => acumulador + item.precio * item.cantidad, 0);
    return(
    <div>
        <h2>Carrito</h2>
        <>
            <button onClick={() => vaciarCarrito()}>Vaciar carrito</button>
            {carrito.map(vaciar => (
                <div key={vaciar.id}>
                    <p>{vaciar.nombre}</p>
                    <p>Cantidad: {vaciar.cantidad}</p>
                    <button onClick={() => eliminarProducto(vaciar)}>Eliminar</button>
                </div>
            ))}
        </>
        <p>Total: ${total}</p>
    </div>
)
    
}

export default Carrito;