
import { collection, addDoc } from "firebase/firestore"
import { db } from "../firebase/firebase"
import { productos } from "../data/productos"

const seedProductos = async () => {
    for (const producto of productos) {
        await addDoc(collection(db, "productos"), producto)
    }
    console.log("Productos cargados!")
}

seedProductos()