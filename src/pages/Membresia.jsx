import { productos } from "../data/productos";
import ProductoCard from "../components/ProductoCard";
import Carrito from "../components/Carrito";

function Membresia() {
  return (
    <div>
  <h1>Membresia</h1>
    <div>
  {productos.map(producto => (
    <ProductoCard key={producto.id} producto={producto} />
  ))}
</div>
<Carrito/>
</div>
)
}

export default Membresia;