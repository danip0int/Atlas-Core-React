import videoInstalaciones from '../assets/videos/instalacionesgym.mp4'
import imgInstalaciones from '../assets/aquagymejercicio.webp'
import imgInstalaciones2 from '../assets/salademaquinas.webp'
import imgInstalaciones3 from '../assets/crossfit.webp'
import imgInstalaciones4 from '../assets/espacioboxeo.webp'
import imgInstalaciones5 from '../assets/saunahidromasaje.webp'
import imgAquagym1 from '../assets/galeria-img/piscinaAquagym.webp'
import imgAquagym2 from '../assets/galeria-img/espacio-aquagym.webp'
import imgAquagym3 from '../assets/galeria-img/aquagymrutina.webp'
import imgMaquinas1 from '../assets/salademaquinas.webp'
import imgMaquinas2 from '../assets/galeria-img/espacioMaquinasGym.webp'
import imgMaquinas3 from '../assets/galeria-img/maquinasGym.webp'
import imgMaquinas4 from '../assets/galeria-img/espacio-maquinas.webp'
import imgCrossfit1 from '../assets/crossfit.webp'
import imgCrossfit2 from '../assets/galeria-img/saltoSogaCrossfit.webp'
import imgCrossfit3 from '../assets/galeria-img/pesoMuertoCrossfit.webp'
import imgCrossfit4 from '../assets/galeria-img/barraOlimpica.webp'
import imgBoxeo1 from '../assets/espacioboxeo.webp'
import imgBoxeo2 from '../assets/galeria-img/sparringBoxeo.webp'
import imgBoxeo3 from '../assets/galeria-img/cuadrilateroBoxeo.webp'
import imgBoxeo4 from '../assets/galeria-img/guanteoBox.webp'
import imgVestuario1 from '../assets/galeria-img/vestuarioDuchas.webp'
import imgVestuario2 from '../assets/galeria-img/vestuarioAtlasCore.webp'
import imgVestuario3 from '../assets/galeria-img/lockersVestuario.webp'
import imgVestuario4 from '../assets/galeria-img/saunaAtlasCore.webp'

import ModalGaleria from '../components/ModalGaleria'
import { useState } from 'react'

function Instalaciones() {
  const [modalVisible, setModalVisible] = useState(false)
  const [imagenesActuales, setImagenesActuales] = useState([])
  const [tituloActual, setTituloActual] = useState('')

  return(
    <main>
      <section className="hero-video">
        <div className="hero-video-bg">
          <video autoPlay muted loop playsInline>
            <source
              src={videoInstalaciones}
              type="video/mp4"
            />
          </video>
        </div>
        <div className="hero-overlay">
          <div className="hero-copia">
            <h1 className="hero-text">
              {/* <span className="texto-rotativo"></span> */}
            </h1>
            <p className="marca-hero">
              Con ATLAS <span className="marca-destacada">Core</span>
            </p>
          </div>
        </div>
      </section>
      <section className="instalaciones-galeria">
        <div className="container">
          <div className="section-title">
            <h2>Nuestras instalaciones</h2>
          </div>
          <div className="galeria-grid">
            <div className="galeria-item alta">
              <div className="galeria-img" data-titulo="Aquagym" onClick={() => {
    setImagenesActuales([imgAquagym1, imgAquagym2, imgAquagym3])
    setTituloActual('Aquagym')
    setModalVisible(true)
}}>
                <img
                  src={imgInstalaciones}
                  alt="mujeres haciendo ejercico en piscina"
                />
                <div className="galeria-overlay">
                  <h3>Aquagym</h3>
                </div>
              </div>
              <p className="descripcion">
                Entrenamiento de bajo impacto en pileta para mejorar fuerza,
                resistencia y movilidad.
              </p>
            </div>
            <div className="galeria-item baja">
              <div className="galeria-img" data-titulo="Sala de máquinas" onClick={() => {
    setImagenesActuales([imgMaquinas1, imgMaquinas2, imgMaquinas3])
    setTituloActual('Sala de maquinas')
    setModalVisible(true)
}}>
                <img
                  src={imgInstalaciones2}
                  alt="área de máquinas gym"
                />Name
                <div className="galeria-overlay">
                  <h3>Sala de máquinas</h3>
                </div>
              </div>
              <p className="descripcion">
                Zona completa con equipamiento moderno para entrenamientos de
                fuerza y musculación guiados.
              </p>
            </div>
            <div className="galeria-item" data-titulo="Zona crossfit" onClick={() => {
    setImagenesActuales([imgCrossfit1, imgCrossfit2, imgCrossfit3, imgCrossfit4])
    setTituloActual('Zona crossfit')
    setModalVisible(true)
}}>
              <div className="galeria-img">
                <img
                  src={imgInstalaciones3}
                  alt="hombre haciendo levantamientos"
                />
                <div className="galeria-overlay">
                  <h3>Zona Crossfit</h3>
                </div>
              </div>
              <p className="descripcion">
                Espacio equipado para entrenamientos de alta intensidad,
                mejorando fuerza, resistencia y rendimiento general.
              </p>
            </div>
            <div className="galeria-item media">
              <div className="galeria-img" data-titulo="Zona boxeo" onClick={() => {
    setImagenesActuales([imgBoxeo1, imgBoxeo2, imgBoxeo3, imgBoxeo4])
    setTituloActual('Zona boxeo')
    setModalVisible(true)
}}>
                <img src={imgInstalaciones4} alt="bolsas de boxeo" />
                <div className="galeria-overlay">
                  <h3>Zona Boxeo</h3>
                </div>
              </div>
              <p className="descripcion">
                Área dedicada al entrenamiento técnico y físico, ideal para
                mejorar coordinación, potencia y resistencia.
              </p>
            </div>
            <div className="galeria-item galeria-item-wide" data-titulo="Sauna e hidromasajes" onClick={() => {
    setImagenesActuales([imgVestuario1, imgVestuario2, imgVestuario3, imgVestuario4])
    setTituloActual('Sauna e hidromasajes')
    setModalVisible(true)
}}>
              <div className="galeria-img">
                <img
                  src={imgInstalaciones5}
                  alt="collage sauna e hidromasaje"
                />
                <div className="galeria-overlay">
                  <h3>Vestuarios, sauna e hidromasajes</h3>
                </div>
              </div>
              <p className="descripcion">
                Espacios amplios y cómodos para recuperación, relajación y
                bienestar después de cada entrenamiento.
              </p>
            </div>
          </div>
        </div>
      </section>
      <ModalGaleria 
      visible={modalVisible}
      titulo={tituloActual}
      imagenes={imagenesActuales}
      onCerrar={() => setModalVisible(false)}/>
    </main>
  )
}

export default Instalaciones