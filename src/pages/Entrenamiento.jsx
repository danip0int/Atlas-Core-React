import imgEntrenamiento from '../assets/remomancuerna.webp'
import imgEntrenamiento2 from '../assets/hombromancuerna.webp'
import imgEntrenamiento3 from '../assets/entrenamientomovilidad.webp'
import imgDisciplina from '../assets/entrenamientogym.webp'
import imgDisciplina2 from '../assets/peraboxeo.webp'
import imgDisciplina3 from '../assets/levantamientobarra.webp'
import imgDisciplina4 from '../assets/levantamientopesarusa.webp'
// import rutinas from '../data/rutinas.json'

function Entrenamiento() {
  return (
    <main>
      <section className="entrenamientos py-5">
        <div className="entrenamiento-wrapper">
          <div className="container-fluid px-5">
            <div className="row align-items-center mb-5" data-categoria="Fuerza">
              <div className="col-md-7">
                <img
                  src={imgEntrenamiento}
                  className="img-entreno img-1"
                  alt="mujer haciendo remo con mancuerna"
                />
              </div>
              <div className="col-md-5">
                <span className="entreno-tag">Rendimiento</span>
                <h3>Entrenamiento Funcional</h3>
                <p>
                  Desarrollo de fuerza, resistencia y movilidad con rutinas
                  adaptadas a cada nivel.
                </p>
              </div>
            </div>
            <div className="row align-items-center mb-5 flex-md-row-reverse" data-categoria="Fuerza">
              <div className="col-md-7">
                <img
                  src={imgEntrenamiento2}
                  className="img-entreno img-2"
                  alt="masculino haciendo hombros con mancuernas"
                />
              </div>
              <div className="col-md-5">
                <span className="entreno-tag">Desarrollo</span>
                <h3>Fuerza y Potencia</h3>
                <p>
                  Planes de entrenamiento orientados al desarrollo de fuerza
                  máxima y potencia muscular.
                </p>
              </div>
            </div>
            <div className="row align-items-center mb-5" data-categoria="Movilidad">
              <div className="col-md-7">
                <img
                  src={imgEntrenamiento3}
                  className="img-entreno img-3"
                  alt="personas haciendo ejercicio dinámico"
                />
              </div>
              <div className="col-md-5">
                <span className="entreno-tag">Regeneración</span>
                <h3>Movilidad y Recuperación</h3>
                <p>
                  Trabajo enfocado en prevenir lesiones y mejorar la calidad del
                  movimiento.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <section id="calculadora">
        <h2>Entrenás fuerte, pero ¿Sabés cuánto necesitás comer? 🤔​</h2>
        <p>
          Calculá tus calorías diarias en segundos y ajustá tu alimentación a
          tus objetivos reales. 💪
        </p>
        <input type="number" id="peso" placeholder="Ingresá tu peso" />
        <input type="number" id="altura" placeholder="Ingresá tu altura (cm)" />
        <input type="number" id="edad" placeholder="Ingresá tu edad" />
        <select name="sexo" id="selectSexo">
          <option value="" disabled selected>Sexo</option>
          <option value="Masculino">Masculino</option>
          <option value="Femenino">Femenino</option>
        </select>
        <select name="actividad" id="selectActividad">
          <option value="" disabled selected>Nivel de actividad</option>
          <option value="1.2">Sedentario</option>
          <option value="1.375">Actividad <span>ligera</span></option>
          <option value="1.55">Actividad <span>moderada</span></option>
          <option value="1.725">Actividad <span>intensa</span></option>
        </select>
        <button id="btn-calcular" class="btn-primary">Calcular</button>
        <div id="resultado">
          <p>Tu requerimiento calórico diario es de:</p>
        </div>
      </section> */}
      <section className="disciplinas py-2">
        <div className="container">
          <div className="section-title title-center">
            <h2>Conocé más de nuestras disciplinas</h2>
          </div>
          <div className="row g-4">
            <div className="col-md-6">
              <div className="card disciplina-card text-white" data-categoria="Fuerza" >
                <img
                  src={imgDisciplina}
                  className="card-img"
                  alt="Crossfit"
                />
                <div
                  className="card-img-overlay d-flex align-items-center justify-content-center"
                >
                  <h4 className="card-title">Crossfit</h4>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card disciplina-card text-white" data-categoria="Boxeo">
                <img
                  src={imgDisciplina2}
                  className="card-img"
                  alt="pera de box"
                />
                <div
                  className="card-img-overlay d-flex align-items-center justify-content-center"
                >
                  <h4 className="card-title">Boxeo</h4>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card disciplina-card text-white" data-categoria="Fuerza">
                <img
                  src={imgDisciplina3}
                  className="card-img"
                  alt="chica haciendo levantamiento"
                />
                <div
                  className="card-img-overlay d-flex align-items-center justify-content-center"
                >
                  <h4 className="card-title">Entrenamiento Funcional</h4>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card disciplina-card text-white" data-categoria="Cardio">
                <img
                  src={imgDisciplina4}
                  className="card-img"
                  alt="chica levantando pesa rusa"
                />
                <div
                  className="card-img-overlay d-flex align-items-center justify-content-center"
                >
                  <h4 className="card-title">Preparación Física</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <div class="modal-contenido">
    <button id="modal-cerrar" class="modal-cerrar">&times;</button>
    <h3 id="modal-titulo">Rutinas disponibles</h3>
    <div id="modal-cards"></div>
  </div>
</div> */}
    </main>
  )
}

export default Entrenamiento