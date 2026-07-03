import logo from "../assets/atlas-logo.png"
import { BsInstagram, BsWhatsapp, BsFacebook } from "react-icons/bs"

    function Footer() {
        return(
                <footer className="footer footer-minimal">
      <div className="footer-lineas">
        <span></span>
        <span></span>
      </div>
      <div className="footer-contenido">
        <div className="footer-lado footer-izq">
          <h4>Atlas Core</h4>
          <p>
            Centro de entrenamiento de fuerza en Mar del Plata. Construimos
            resultados a través de la disciplina y rendimiento.
          </p>
        </div>
        <div className="footer-centro">
          <img
            src={logo}
            alt="Atlas Core logo"
            className="footer-logo-img"
          />
          <h3 className="footer-logo">ATLAS <span>CORE</span></h3>
          <div className="footer-redes">
            <a
              href="https://instagram.com"
              className="footer-icon"
              aria-label="Instagram"
            >
              <BsInstagram/>
            </a>
            <a
              href="https://wa.me/541112345678"
              className="footer-icon"
              aria-label="WhatsApp"
            >
              <BsWhatsapp />
            </a>
            <a
              href="https://facebook.com"
              className="footer-icon"
              aria-label="Facebook"
            >
              <BsFacebook/>
            </a>
          </div>
          <div className="footer-divisor-vertical"></div>
          <p className="footer-texto">Disciplina. Fuerza. Evolución constante.</p>
        </div>
        <div className="footer-lado footer-der">
          <h4>Contacto</h4>
          <p>📍 Mar del Plata, Argentina</p>
          <p>📱 011 2345 6789</p>
          <p>✉️ atlascoregym@gmail.com</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2026 ATLAS Core</p>
      </div>
    </footer>
        )
    
}

export default Footer;