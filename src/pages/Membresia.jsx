import { productos } from "../data/productos";
import ProductoCard from "../components/ProductoCard";
import Carrito from "../components/Carrito";
import {useContext } from "react";
import  {CarritoContext } from "../context/CarritoContext";
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
        <section className="beneficios">
        <div className="container">
          <header className="beneficios-header">
            <h2>Servicios adicionales</h2>
            <p>Todo para acompañar y mejorar al detalle tu entrenamiento.</p>
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
      <div className="productos-grid">
  {productos.map(producto => (
    <ProductoCard key={producto.id} producto={producto} />
  ))}
</div>
<Carrito/>
{/* <section id="carrito">
        <h2>Tu suscripción</h2>
        <div id="carrito-plan"></div>
        <div id="carrito-extras"></div>
        <p>Total: <span id="carrito-total">$0</span></p>
        <button id="btn-contratar" class="btn-primary">Contratar</button>
        <section id="formulario-contacto">
    <h2>Completá tus datos</h2>
    <label for="input-nombre">Nombre</label>
    <input type="text" id="input-nombre" placeholder="Nombre" />
    <label for="input-apellido">Apellido</label>
    <input type="text" id="input-apellido" placeholder="Apellido">
    <label for="input-dni">DNI</label>
    <input type="text" id="input-dni" maxlength="8" placeholder="DNI"/>
    <label for="input-mail">E-mail</label>
    <input type="email" id="input-mail" placeholder="Email" />
    <label for="input-tel">Teléfono</label>
    <input type="tel" id="input-tel" maxlength="12" placeholder="Teléfono" />
    <label>Método de pago</label>
<select id="select-pago">
  <option value="" disabled selected>Seleccioná un método</option>
  <option value="debito">Tarjeta de débito</option>
  <option value="credito">Tarjeta de crédito</option>
  <option value="transferencia">Transferencia bancaria</option>
</select>

<div id="campos-tarjeta">
  <label>Número de tarjeta</label>
  <input type="text" id="input-tarjeta" placeholder="XXXX XXXX XXXX XXXX" />
  <label>Titular de la tarjeta</label>
<input type="text" id="input-titular" placeholder="Nombre como figura en la tarjeta" />
<label>Vencimiento</label>
<input type="text" id="input-vencimiento" placeholder="MM/AA" />
<label>Domicilio</label>
<input type="text" id="input-domicilio" placeholder="Calle y número" />
</div>

<div id="campos-transferencia">
  <p>CBU: 0000003100012345678901</p>
  <p>Alias: ATLAS.CORE.GYM</p>
</div>
    <button id="btn-confirmar" class="btn-primary">Confirmar suscripción</button>
  </section>
      </section>
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