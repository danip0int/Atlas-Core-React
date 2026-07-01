
import { NavLink } from "react-router-dom";

function Navbar(){
    return(
        <nav>
            <NavLink to="/">Inicio</NavLink>
            <NavLink to="/entrenamiento">Entrenamiento</NavLink>
            <NavLink to="/instalaciones">Instalaciones</NavLink>
            <NavLink to="/membresia">Membresía y Productos</NavLink>
            <NavLink to="/contacto">Contacto</NavLink>
        </nav>
    )
}

export default Navbar