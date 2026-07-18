import { useContext } from "react"
import { CarritoContext } from "../context/CarritoContext"
import ItemCount from "./ItemCount";


function ProductoCard({ producto }) {

  const {agregarProducto} = useContext(CarritoContext);

    return (
    <div className="card">
      <img src="https://placehold.co/400x320" alt={producto.nombre} />
      <div className="card-body">
        <h3 className="card-title">{producto.nombre}</h3>
      <p className="card-text">${producto.precio.toLocaleString("es-AR")}</p>
      <p className="card-text">{producto.descripcion}</p>
      <ItemCount onAgregar={(cantidad) => agregarProducto({...producto, cantidad})} />
      </div>
    </div>
  )
}

export default ProductoCard