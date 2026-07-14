import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import img1 from '../assets/pechopoleas.webp'
import img2 from '../assets/levantamientoconbarra.webp'
import imgFitness from '../assets/pesomuerto.webp'
import imgMasajes from '../assets/masajesprevencion.png'
import imgNutricion from '../assets/plannutricion.webp'
import videoHome from '../assets/videos/gymvideo.mp4'
import videoHome2 from '../assets/videos/entrenamiento.mp4'
import useContador from '../hooks/useContador'
import { BsPeopleFill, BsClock, BsStarFill, BsGeoAltFill } from 'react-icons/bs'

function Home() {

  const contador = useContador(350)
const contadorTiempo = useContador(8)
const contadorSedes = useContador(10)
const contadorSatisfaccion = useContador(87)
  
  return (
    <main className='principal'>
      <Swiper modules={[Autoplay]} autoplay={{delay: 4500}} loop={true}>
<SwiperSlide>
            <img
              src={img1}
              className="d-block w-100"
              alt="Mujer haciendo poleas cruzadas"
            />
            <div
              className="carousel-caption d-flex flex-column justify-content-center"
            >
              <h2>Rompemos tus <span>límites</span></h2>
              <p>Entrenamiento de alto rendimiento</p>
              <span className="carousel-icon">ATLAS CORE</span>
            </div>
</SwiperSlide>
<SwiperSlide>
            <img
              src={img2}
              className="d-block w-100"
              alt="hombre sentado haciendo biceps con mancuerna"
            />
            <div
              className="carousel-caption d-flex flex-column justify-content-center"
            >
              <h2>ATLAS <span>CORE</span></h2>
              <p>High Performance for Athletes</p>
              <span className="carousel-icon">ATLAS CORE</span>
            </div>
</SwiperSlide>
<SwiperSlide>
            <img
              src={img1}
              className="d-block w-100"
              alt="Mujer haciendo poleas cruzadas"
            />
            <div
              className="carousel-caption d-flex flex-column justify-content-center"
            >
              <h2>Rompemos tus <span>límites</span></h2>
              <p>Entrenamiento de alto rendimiento</p>
              <span className="carousel-icon">ATLAS CORE</span>
            </div>
</SwiperSlide>
    </Swiper>
    <section id="stats">
        <div>
          <BsPeopleFill/>
          <span id="stat-alumnos">+{contador}</span>
          <p>Alumnos activos</p>
        </div>
        <div>
          <BsClock/>
          <span id="stat-tiempo">{contadorTiempo}</span>
          <p>Años de experiencia</p>
        </div>
        <div>
          <BsGeoAltFill/>
          <span id="stat-sede">{contadorSedes}</span>
          <p>Sedes en la ciudad</p>
        </div>
        <div>
          <BsStarFill/>
          <span id="stat-satisfaccion">+{contadorSatisfaccion}%</span>
          <p>Clientes satisfechos</p>
        </div>
      </section>
      <section className="section-title title-center">
        <h2>Todo para potenciar tu rendimiento</h2>
      </section>
      <section className="cards-index py-5">
        <div className="container px-4">
          <div className="row align-items-stretch g-4">
            <div className="col-md-4">
              <div>
                <div className="card">
                  <img
                    src={imgFitness}
                    className="card-img-top"
                    alt="ejercicio peso muerto"
                  />
                  <div className="card-body text-center">
                    <h5 className="card-title">FITNESS</h5>
                    <p className="card-text">
                      Entrenamientos personalizados para mejorar tu rendimiento.
                    </p>
                    <p className="card-extra">
                      "Trabajamos con planes de entrenamiento periodizados,
                      adaptados a tu nivel y objetivos. Contás con seguimiento
                      de un entrenador certificado, acceso a equipamiento de
                      última generación y ajustes mensuales según tu progreso."
                    </p>
                    <a href="#" className="btn-primary">Ver más</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div>
                <div className="card">
                  <img
                    src={imgMasajes}
                    className="card-img-top"
                    alt="hombre recibiendo masaje"
                  />
                  <div className="card-body text-center">
                    <h5 className="card-title">MASAJES</h5>
                    <p className="card-text">
                      Recuperación muscular y bienestar físico.
                    </p>
                    <p className="card-extra">
                      "Ofrecemos masajes deportivos, de recuperación y
                      descontracturantes. Ideales para reducir el dolor muscular
                      post-entrenamiento, mejorar la circulación y acelerar tu
                      recuperación entre sesiones."
                    </p>
                    <a href="#" className="btn-primary">Ver más</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div>
                <div className="card">
                  <img
                    src={imgNutricion}
                    className="card-img-top"
                    alt="persona con suplemento en mano"
                  />
                  <div className="card-body text-center">
                    <h5 className="card-title">NUTRICIÓN</h5>
                    <p className="card-text">
                      Planes alimenticios adaptados a tus objetivos.
                    </p>
                    <p className="card-extra">
                      "Nuestros nutricionistas diseñan planes alimenticios
                      personalizados según tu composición corporal y metas.
                      Incluye seguimiento mensual, ajuste de macros y soporte
                      por WhatsApp ante cualquier consulta."
                    </p>
                    <a href="#" className="btn-primary">Ver más</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="videos-index py-5">
        <div className="container">
          <section className="section-title">
            <h2 className="mb-4">Así se vive Atlas Core</h2>
          </section>
          <div className="row g-4">
            <div className="col-md-6">
              <div className="ratio ratio-16x9">
                <div className="video-wrapper">
                  <video autoPlay muted loop playsInline>
                    <source
                      src={videoHome}
                      type="video/mp4"
                    />
                  </video>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="ratio ratio-16x9">
                <div className="video-wrapper">
                  <video autoPlay muted loop playsInline>
                    <source src={videoHome2}/>
                  </video>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>

  )
}

export default Home