
import { createContext, useReducer } from "react";

export const CarritoContext = createContext();

const carritoReducer = (state, action) => {
    switch (action.type) {
        case 'AGREGAR':
            if (String(action.payload.id).startsWith("plan-")) {
    return [...state.filter(item => !item.id.startsWith("plan-")), {...action.payload, cantidad: 1}]
}
            const existe = state.find(producto => producto.id === action.payload.id);
            if (existe) {
                return state.map( agregar => {
                    if (agregar.id === existe.id ) {
                       return {...action.payload, cantidad: agregar.cantidad + 1};
                    }else{
                        return agregar;
                    }
                } )
            } else{
                return [...state, action.payload];
            }
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