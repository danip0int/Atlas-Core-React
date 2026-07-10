import imgContacto from '../assets/crossfit.webp'
import { BsWhatsapp, BsEnvelope, BsPeople, BsInstagram, BsFacebook } from 'react-icons/bs'
import { useState } from 'react'

function Contacto() {

  const [campoNombre, setCampoNombre] = useState("")
  const [campoEmail, setCampoEmail] = useState("")
  const [campoTexto, setCampoTexto] = useState("")
  const [errores, setErrores] = useState('')

  const validar = () => {
    const nuevosErrores = {}
    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(campoEmail)
    if (!campoNombre) nuevosErrores.nombre = 'El nombre es obligatorio'
    if (!campoEmail || !emailValido) nuevosErrores.email = 'El email es obligatorio'
    if (!campoTexto) nuevosErrores.mensaje = 'El mensaje es obligatorio'
    return nuevosErrores
  }

  function handleSubmit (e) {
    e.preventDefault()
    const erroresEncontrados = validar()

    if (Object.keys(erroresEncontrados).length > 0) {
    setErrores(erroresEncontrados)
} else {
    console.log('Formulario enviado')
}
    
  }
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
            <form onSubmit={handleSubmit}>
              <input value={campoNombre} onChange={(e) => setCampoNombre(e.target.value)} type="text" placeholder="Nombre" id="input-nombre"/>
               {errores.nombre && <p className='error'>{errores.nombre}</p>}
              <input value={campoEmail} onChange={(e) => setCampoEmail(e.target.value)} type="email" placeholder="Email" id="input-email"/>
               {errores.email && <p className='error'>{errores.email}</p>}
              <textarea value={campoTexto} onChange={(e) => setCampoTexto(e.target.value)} placeholder="Mensaje" id="input-mensaje"></textarea>
               {errores.mensaje&& <p className='error'>{errores.mensaje}</p>}
              <button type="submit" className="btn-primary btn-form" id="btn-enviar">Enviar</button>
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