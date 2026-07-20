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

return(
    <div>
        {loading ? <p>Cargando detalles...</p> : 
         <div>
            <h2>{detalle.nombre}</h2>
         <p>${detalle.precio.toLocaleString("es-AR")}</p>
        <p>{detalle.descripcion}</p>
        <ItemCount onAgregar={(cantidad) => agregarProducto({...detalle, cantidad})} />
         </div>
         }
    </div>
)
}

export default ItemDetail 