import { productos } from "../data/productos";
import ProductoCard from "../components/ProductoCard";

function Membresia() {
  return (
    <div>
  <h1>Membresia</h1>
    <div>
  {productos.map(producto => (
    <ProductoCard key={producto.id} producto={producto} />
  ))}
</div>
</div>
)
}

export default Membresia;