import { useState } from "react"

function ModalGaleria ({visible, imagenes, titulo, onCerrar}) {
    const [indice, setIndice] = useState(0)

    if (!visible) return null

    return(
        <div className="modal-rutinas">
            <div className="modal-contenido modal-img">
                <button className="modal-cerrar" onClick={onCerrar}>x</button>
                <h3>{titulo}</h3>
                <div className="modal-nav">
                    <button className="btn-nav btn-anterior" style={{display: indice === 0 ? 'none' : 'block'}} onClick={() => setIndice(indice - 1)}>←</button>
                    <img src={imagenes[indice]} alt={titulo}/>
                    <button className="btn-nav btn-siguiente" style={{display: indice === imagenes.length - 1 ? 'none' : 'block'}} onClick={() => setIndice(indice + 1)}>→</button>
                </div>
            </div>
        </div>
    )
}

export default ModalGaleria