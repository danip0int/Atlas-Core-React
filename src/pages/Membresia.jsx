import { productos } from "../data/productos";
import ProductoCard from "../components/ProductoCard";
import Carrito from "../components/Carrito";
import {useContext } from "react";
import  {CarritoContext } from "../context/CarritoContext";
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { BsApple, BsHeartPulse, BsPhone, BsGraphUp } from 'react-icons/bs'

function Membresia() {

const { agregarProducto } = useContext(CarritoContext)

  return (
    <main>
      <section className="membresias">
        <div className="container">
          <header className="membresias-header">
            <h1>Planes & Membresías</h1>
            <p>Elegí el plan que mejor se adapta a tu entrenamiento</p>
          </header>
          <div className="planes-grid">
            <article className="plan-card">
              <header className="plan-header">
                <h3>Plan PRO</h3>
              </header>
              <p className="plan-precio">$45.000 / mes</p>
              <ul className="plan-list">
                <li>Acceso sala de máquinas</li>
                <li>Clases grupales básicas</li>
                <li>Uso de vestuarios</li>
              </ul>
              <button className="btn-primary btn-plan" onClick={() => agregarProducto({ id: "plan-pro", nombre: "Plan PRO", precio: 52000 })}>Elegir plan</button>
            </article>
            <article className="plan-card plan-destacado">
              <header className="plan-header">
                <span className="elegido">Más elegido</span>
                <h3>Plan ATLAS</h3>
              </header>
              <div className="plan-precio">$75.000 <span>/ mes</span></div>
              <ul className="plan-list">
                <li>Acceso total al gimnasio</li>
                <li>Clases funcionales y cross</li>
                <li>Boxeo y entrenamiento guiado</li>
                <li>Acceso a spa y vestuarios</li>
              </ul>
              <button className="btn-primary btn-plan" onClick={() => agregarProducto({ id: "plan-atlas", nombre: "Plan ATLAS", precio: 70000 })}>Elegir plan</button>
            </article>
            <article className="plan-card">
              <header className="plan-header">
                <h3>Plan PREMIUM</h3>
              </header>
              <p className="plan-precio">$60.000 / mes</p>
              <ul className="plan-list">
                <li>Acceso ilimitado</li>
                <li>Entrenador personalizado</li>
                <li>Clases exclusivas</li>
                <li>Seguimiento mensual</li>
              </ul>
              <button className="btn-primary btn-plan" onClick={() => agregarProducto({ id: "plan-premium", nombre: "Plan PREMIUM", precio: 60000 })}>Elegir plan</button>
            </article>
          </div>
        </div>
        <section>
          <header>
<h2 className="membresias-header">Todo lo que necesitás para acompañar tu entrenamiento </h2>
          </header>
          <Swiper
  modules={[Pagination, Navigation]}
  slidesPerView={3}
  spaceBetween={20}
  pagination={{ clickable: true }}
  navigation={true}
  breakpoints={{
    320: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    1200: { slidesPerView: 3 }
  }}
>
  {productos.map(producto => (
    <SwiperSlide key={producto.id}>
      <ProductoCard producto={producto} />
    </SwiperSlide>
  ))}
</Swiper>
        </section>
        <section className="beneficios">
        <div className="container">
          <header className="beneficios-header">
            <h2>Servicios adicionales</h2>
            <p>Cada dellate mejora tu progreso.</p>
          </header>
          <div className="beneficios-grid">
            <div className="beneficio-item" data-servicio="Nutrición" data-precio="20000">
              <BsApple/>
              <h3>Nutrición</h3>
              <p>Asesoramiento nutricional para potenciar tu rendimiento.</p>
              <span className="servicio-precio">$20.000 / mes</span>
  <button className="btn-agregar" onClick={() => agregarProducto({ id: "servicio-nutricion", nombre: "Nutrición", precio: 20000 })}>Agregar</button>
            </div>
            <div className="beneficio-item" data-servicio="Masajes" data-precio="15000">
              <BsHeartPulse/>
              <h3>Masajes</h3>
              <p>Sesiones de recuperación muscular y relajación.</p>
              <span className="servicio-precio">$15.000 / mes</span>
  <button className="btn-agregar" onClick={() => agregarProducto({ id: "servicio-masajes", nombre: "Masajes", precio: 15000 })}>Agregar</button>
            </div>
            <div className="beneficio-item" data-servicio="App de Entrenamiento" data-precio="0">
              <BsPhone/>
              <h3>App de entrenamiento</h3>
              <p>Planes personalizados y seguimiento desde tu celular.</p>
              <span className="servicio-precio">Gratis!</span>
  <button className="btn-agregar" onClick={() => agregarProducto({ id: "servicio-app", nombre: "App de entrenamiento", precio: 0 })}>Agregar</button>
            </div>
            <div className="beneficio-item" data-servicio="Seguimiento" data-precio="8000">
              <BsGraphUp/>
              <h3>Seguimiento</h3>
              <p>Evaluaciones periódicas para medir tu progreso.</p>
              <span className="servicio-precio">$10.000 / mes</span>
<button className="btn-agregar" onClick={() => agregarProducto({ id: "servicio-seguimiento", nombre: "Seguimiento", precio: 8000 })}>Agregar</button>
            </div>
          </div>
        </div>
      </section>
      </section>
<Carrito/>
{/* 
<div id="modal-confirmacion" class="modal-rutinas">
  <div class="modal-contenido">
    <h3>¡Bienvenido a Atlas Core! 🎉</h3>
    <p id="modal-mensaje"></p>
    <button id="modal-conf-cerrar" class="modal-cerrar">&times;</button>
  </div>
</div> */}
    </main>
)
}

export default Membresia;