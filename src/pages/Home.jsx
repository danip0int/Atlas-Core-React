import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import CardServicio from '../components/CardServicio'
import { servicios } from '../data/servicios'
import 'swiper/css'
import img1 from '../assets/pechopoleas.webp'
import img2 from '../assets/levantamientoconbarra.webp'
import img3 from '../assets/entrenamientogym.webp'
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
              className="swiper-caption d-flex flex-column justify-content-center"
            >
              <h2>Rompemos tus <span>límites</span></h2>
              <p>Entrenamiento de alto rendimiento</p>
              <span className="swiper-icon">ATLAS CORE</span>
            </div>
</SwiperSlide>
<SwiperSlide>
            <img
              src={img2}
              className="d-block w-100"
              alt="hombre sentado haciendo biceps con mancuerna"
            />
            <div
              className="swiper-caption d-flex flex-column justify-content-center"
            >
              <h2>ATLAS <span>CORE</span></h2>
              <p>High Performance for Athletes</p>
              <span className="swiper-icon">ATLAS CORE</span>
            </div>
</SwiperSlide>
<SwiperSlide>
            <img
              src={img3}
              className="d-block w-100"
              alt="Mujer haciendo poleas cruzadas"
            />
            <div
              className="swiper-caption d-flex flex-column justify-content-center"
            >
              <h2>Rompemos tus <span>límites</span></h2>
              <p>Entrenamiento de alto rendimiento</p>
              <span className="swiper-icon">ATLAS CORE</span>
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
     <div className='container'>
      <section className="servicios-grid">
  {servicios.map(servicio => (
    <div key={servicio.id}>
      <CardServicio servicio={servicio} />
    </div>
  ))}
</section>
     </div>
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