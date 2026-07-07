
import { useContext, useState } from "react";
import { BsTrash,BsXLg } from 'react-icons/bs'

import { CarritoContext } from "../context/CarritoContext";
import { BsCart3 } from 'react-icons/bs'
import FormularioCompra from './FormularioCompra'

function Carrito() {

    const {carrito, eliminarProducto, vaciarCarrito} = useContext(CarritoContext);
    const total = carrito.reduce((acumulador, item) => acumulador + item.precio * item.cantidad, 0);
    const [abierto, setAbierto] = useState(false)
    const totalItems = carrito.reduce((acc, item) => acc + item.cantidad, 0)
    const [compra, setCompra] = useState(1)

console.log(abierto)
    return(
    <>  
        <button className="btn-toggle-carrito" onClick={() => setAbierto(!abierto)}>
            <BsCart3 />
            <span className="carrito-badge">{totalItems}</span>
        </button>
        <div className={abierto ? "carrito visible" : "carrito"}>
            <button className="modal-cerrar" onClick={() => setAbierto(false)}><BsXLg/></button>
            {compra === 1 ? (
                <>
                    {carrito.map(vaciar => (
                        <div className="carrito-item" key={vaciar.id}>
                            <p>{vaciar.nombre} x{vaciar.cantidad} — ${vaciar.precio.toLocaleString("es-AR")}</p>
                            <button className="btn-eliminar" onClick={() => eliminarProducto(vaciar)}><BsTrash /></button>
                        </div>
                    ))}
                    <p className="carrito-total">Total: ${total.toLocaleString("es-AR")}</p>
                    <button className="btn-vaciar" onClick={() => vaciarCarrito()}>Vaciar carrito</button>
                    <button className="btn-primary" onClick={() => setCompra(2)}>Contratar</button>
                </>
            ) : (
                <FormularioCompra/>
            )}
        </div>
    </>
)
    
}

export default Carrito;