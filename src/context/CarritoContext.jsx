
import { createContext, useReducer } from "react";

export const CarritoContext = createContext();

const carritoReducer = (state, action) => {
    switch (action.type) {
        case 'AGREGAR':
            
        return[...state, action.payload]
            
        case 'ELIMINAR':
            return state.filter(item=> item.id !== action.payload.id);

            case 'VACIAR':
                return[];

        default:
            return state;
    }
}

function CarritoProvider({children}) {

    const [carrito, dispatch] = useReducer(carritoReducer, []);

    const agregarProducto = (producto) => dispatch({ type: "AGREGAR", payload: producto });
    const eliminarProducto = (producto) => dispatch({type: 'ELIMINAR', payload: producto});
    const vaciarCarrito = () => dispatch({type: 'VACIAR'});
    return(
        <CarritoContext.Provider value={{agregarProducto, eliminarProducto, vaciarCarrito, carrito}}>
            {children}
        </CarritoContext.Provider>
    )
    
}

export default CarritoProvider;