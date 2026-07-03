import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import img1 from '../assets/pechopoleas.webp'
import img2 from '../assets/levantamientoconbarra.webp'
import { BsPeopleFill, BsClock, BsStarFill, BsGeoAltFill } from 'react-icons/bs'

function Home() {
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
          <span id="stat-alumnos">+350</span>
          <p>Alumnos activos</p>
        </div>
        <div>
          <BsClock/>
          <span id="stat-tiempo">8</span>
          <p>Años de experiencia</p>
        </div>
        <div>
          <BsGeoAltFill/>
          <span id="stat-sede">10</span>
          <p>Sedes en la ciudad</p>
        </div>
        <div>
          <BsStarFill/>
          <span id="stat-satisfaccion">+85%</span>
          <p>Clientes satisfechos</p>
        </div>
      </section>
    </main>

  )
}

export default Home