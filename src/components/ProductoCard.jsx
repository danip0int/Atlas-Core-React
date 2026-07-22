import { useContext } from "react"
import { CarritoContext } from "../context/CarritoContext"
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";


function ProductoCard({ producto }) {

  const {agregarProducto} = useContext(CarritoContext);

    return (
    <div className="card">
      <img className="card-img-top" src={producto.imagen} alt={producto.nombre} />
      <div className="card-body">
        <h3 className="card-title">{producto.nombre}</h3>
      <p className="card-text">${producto.precio.toLocaleString("es-AR")}</p>
      <Link to={`/producto/${producto.id}`} className="producto-link-detalle">Ver detalle</Link>

      <ItemCount onAgregar={(cantidad) => agregarProducto({...producto, cantidad})} stock={producto.stock} />
      </div>
    </div>
  )
}

export default ProductoCard