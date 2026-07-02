import { useContext } from "react"
import { CarritoContext } from "../context/CarritoContext"


function ProductoCard({ producto }) {

  const {agregarProducto} = useContext(CarritoContext);

    return (
    <div>
      <h3>{producto.nombre}</h3>
      <p>{producto.precio}</p>
      <p>{producto.categoria}</p>
      <p>{producto.descripcion}</p>
      <button onClick={() => agregarProducto(producto)}>Agregar</button>
    </div>
  )
}

export default ProductoCard