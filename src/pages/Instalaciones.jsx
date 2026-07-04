import videoInstalaciones from '../assets/videos/instalacionesgym.mp4'
import imgInstalaciones from '../assets/aquagymejercicio.webp'
import imgInstalaciones2 from '../assets/salademaquinas.webp'
import imgInstalaciones3 from '../assets/crossfit.webp'
import imgInstalaciones4 from '../assets/espacioboxeo.webp'
import imgInstalaciones5 from '../assets/saunahidromasaje.webp'

function Instalaciones() {
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
              <div className="galeria-img" data-titulo="Aquagym" data-imagenes='["../assets/galeria-img/piscinaAquagym.webp", "../assets/galeria-img/espacio-aquagym.webp", "../assets/galeria-img/aquagymrutina.webp"]'>
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
              <div className="galeria-img" data-imagenes='["../assets/salademaquinas.webp", "../assets/galeria-img/espacioMaquinasGym.webp", "../assets/galeria-img/maquinasGym.webp", "../assets/galeria-img/espacio-maquinas.webp"]' data-titulo="Sala de máquinas">
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
            <div className="galeria-item" data-imagenes='["../assets/crossfit.webp", "../assets/galeria-img/saltoSogaCrossfit.webp", "../assets/galeria-img/pesoMuertoCrossfit.webp", "../assets/galeria-img/barraOlimpica.webp"]' data-titulo="Zona crossfit">
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
              <div className="galeria-img" data-imagenes='["../assets/espacioboxeo.webp", "../assets/galeria-img/sparringBoxeo.webp", "../assets/galeria-img/cuadrilateroBoxeo.webp", "../assets/galeria-img/guanteoBox.webp"]' data-titulo="Zona boxeo">
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
            <div className="galeria-item galeria-item-wide" data-imagenes='[ "../assets/galeria-img/vestuarioDuchas.webp", "../assets/galeria-img/vestuarioAtlasCore.webp", "../assets/galeria-img/lockersVestuario.webp", "../assets/galeria-img/saunaAtlasCore.webp" ]' data-titulo="Sauna e hidromasajes">
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
      {/* <div class="modal-contenido modal-img">
    <button id="modal-galeria-cerrar" class="modal-cerrar">&times;</button>
    <h3 id="modal-galeria-titulo"></h3>
    <div class="modal-nav">
      <button id="btn-anterior" class="btn-nav">&#8592;</button>
      <img id="modal-galeria-img" src="" alt="" />
      <button id="btn-siguiente" class="btn-nav">&#8594;</button>
    </div>
  </div>
</div> */}
    </main>
  )
}

export default Instalaciones