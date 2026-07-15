
import { NavLink, Link } from "react-router-dom";
import logo from "../assets/atlas-logo.png"
import { BsInstagram, BsWhatsapp } from "react-icons/bs"
import { useState } from "react";

function Navbar(){
  const [menuAbierto, setMenuAbierto] = useState(false)

    return(
        <header className="header">
            <nav className="navbar navbar-expand-lg navbar-dark fixed-top" >
        <div className="container-fluid px-4">
        <Link className='navbar-brand d-flex aling-items-center' to='/'>
        <img src={logo} alt="Atlas Core logo"/>
        <span className="brand-text">ATLAS <span className="core">CORE</span></span>
        </Link>
        <button 
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setMenuAbierto(!menuAbierto)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav" className={menuAbierto ? "collapse navbar-collapse show" : "collapse navbar-collapse"}>
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">Inicio</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/entrenamiento">Entrenamiento</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/instalaciones">Instalaciones</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/membresia">Membresía y Productos</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contacto">Contacto</NavLink>
              </li>
            </ul>
            <div className="nav-social d-flex align-items-center gap-3">
              <a href="https://instagram.com" target="_blank" className="nav-icon"
                > <BsInstagram /></a>
              <a
                href="https://wa.me/541112345678"
                target="_blank"
                className="nav-icon"
                ><BsWhatsapp />
                </a>
            </div>
          </div>
        </div>
        </nav>
        </header>
    )
}

export default Navbar
