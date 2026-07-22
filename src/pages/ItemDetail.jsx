import { useEffect, useState,useContext } from "react"
import { CarritoContext } from "../context/CarritoContext";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";
import ItemCount from "../components/ItemCount";


function ItemDetail () {
    const [detalle, setDetalle] = useState(null)
  const [loading, setLoading] = useState(true)
  const { agregarProducto } = useContext(CarritoContext)

  const {id} = useParams()

  useEffect(() => {
    const fetchProducto = async () => {
      const docRef = doc(db, 'productos', id)
      const docSnap = await getDoc(docRef)

      if(docSnap.exists()){
        setDetalle({id:docSnap.id, ...docSnap.data()})
        setLoading(false)
      }else{
        console.log('Producto no encontrado') 
      }
    }
    fetchProducto()
}, [id])

return (
    <div className="detalle-container">
        {loading ? (
            <div className="detalle-loader">
                <p>Cargando detalles del producto...</p>
            </div>
        ) : (
            <div className="detalle-wrapper">
                <div className="detalle-imagen-box">
                    <img className="detalle-imagen" src={detalle.imagen} alt={detalle.nombre} />
                </div>
                <div className="detalle-info-box">
                    <span className="detalle-categoria">{detalle.categoria}</span>
                    <h2 className="detalle-titulo">{detalle.nombre}</h2>
                    <p className="detalle-precio">${detalle.precio?.toLocaleString("es-AR")}</p>
                    <div className="detalle-divisor"></div>
                    <p className="detalle-descripcion">{detalle.descripcion}</p>
                    <div>
                        {detalle.stock === 0 ? (
    <p className="stock-agotado">Producto agotado</p>
) : detalle.stock <= 3 ? (
    <p className="stock-bajo">¡Últimas unidades! Quedan: {detalle.stock}</p>
) : (
    <p className="stock-normal">Stock disponible: {detalle.stock} unidades</p>
)}
                    </div>
                    <div className="detalle-acciones">
                        <ItemCount onAgregar={(cantidad) => agregarProducto({...detalle, cantidad})} stock={detalle.stock} />
                    </div>
                </div>
            </div>
        )}
    </div>
)

}

export default ItemDetail 