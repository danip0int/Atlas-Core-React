


function ProductoCard({ producto }) {
  return (
    <div>
      <h3>{producto.nombre}</h3>
      <p>{producto.precio}</p>
      <p>{producto.categoria}</p>
      <p>{producto.descripcion}</p>
    </div>
  )
}

export default ProductoCard