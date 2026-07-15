import rutinas from '../data/rutinas.json'


function ModalRutinas ({visible, categoria, onCerrar}){

    const rutinasFiltradas = rutinas.filter(rutina => rutina.categoria === categoria)
    if (!visible) return null

    return(
    <div className='modal-rutinas'>
        <div className='modal-contenido'>
            <button className='modal-cerrar' onClick={onCerrar}>✕</button>
            <h3>Rutinas disponibles</h3>
            <div className='modal-cards'>
                {rutinasFiltradas.map(rutina => (
                    <div className='rutina-card' key={rutina.id}>
                        <h3>{rutina.nombre}</h3>
                        <span>{rutina.categoria}</span>
                        <p>{rutina.descripcion}</p>
                    </div>
                ))}
            </div>
        </div>
    </div>
)
}

export default ModalRutinas