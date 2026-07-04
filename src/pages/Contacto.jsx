import imgContacto from '../assets/crossfit.webp'
import { BsWhatsapp, BsEnvelope, BsPeople, BsInstagram, BsFacebook } from 'react-icons/bs'

function Contacto() {
  return (
    <main>
      <section id="horarios">
  <h3>Nuestros días y horarios de atención:</h3>
  <div id="estado-gym"></div>
  <div id="tabla-horarios"></div>
</section>
<section className="contacto-hero">
        <div className="contacto">
          <div className="contacto-form">
            <h2>Contactános</h2>
            <p>Escribinos y te respondemos a la brevedad.</p>
            <form>
              <input type="text" placeholder="Nombre" id="input-nombre"/>
              <input type="email" placeholder="Email" id="input-email"/>
              <textarea placeholder="Mensaje" id="input-mensaje"></textarea>
              <button type="submit" class="btn-primary btn-form" id="btn-enviar">Enviar</button>
            </form>
          </div>
          <div className="contacto-img">
            <img
              src={imgContacto}
              alt="chico levantando barra olímpica"
            />
          </div>
        </div>
      </section>
      <section className="contacto-canales">
        <div className="canales-grid">
          <div className="canal-item">
            <BsWhatsapp/>
            <h4>WhatsApp</h4>
            <p>+54 11 1234 5678</p>
          </div>
          <div className="canal-item">
            <BsEnvelope/>
            <h4>Email</h4>
            <p>atlascoregym@gmail.com</p>
          </div>
          <div className="canal-item">
            <div className="canal-content">
              <BsPeople/>
              <h4>Redes</h4>
              <div className="redes-links">
                <a href="https://instagram.com" aria-label="Instagram">
                  <BsInstagram/>
                </a>
                <a href="https://facebook.com" aria-label="Facebook">
                  <BsFacebook/>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr className="contacto-separador" />
      <section className="contacto-mapa">
        <div className="mapacontainer">
          <div className="titulo-mapa">
            <h4>Dónde podés encontrarnos</h4>
            <p>Estamos en el corazón de la ciudad</p>
          </div>
          <iframe
            src="https://www.google.com/maps?q=Buenos+Aires&output=embed"
            width="100%"
            height="350"
            style={{ border: 0, borderRadius: '16px' }}
            loading="lazy"
            frameBorder="0"
          ></iframe>
        </div>
      </section>
      {/* <div id="modal-contacto" class="modal-rutinas">
  <div className="modal-contenido">
    <button id="modal-contacto-cerrar" class="modal-cerrar">&times;</button>
    <h3>¡Mensaje enviado! 💪</h3>
    <p>Gracias <span id="modal-contacto-nombre"></span>, te respondemos a la brevedad en <span id="modal-contacto-email"></span>.</p>
  </div>
</div> */}
    </main>
  )
}

export default Contacto