
import { useState } from "react";

function CardServicio({servicio}) {
    
    const [expandir, setExpandir] = useState(false)

    return(
        <div className="card card-servicio">
            <img className="card-servicio-img" src={servicio.imagen} alt={servicio.alt} />
            <div className="card-body">
                <h3 className="card-title">{servicio.titulo}</h3>
                <p className="card-text">{servicio.texto}</p>
                {expandir && <p className="card-extra">{servicio.textoExtra}</p>}
                <button className="btn-primary" onClick={() => setExpandir(!expandir)}>
                    { expandir ? (
                        'Ver menos'
                    )
                    : (
                        'Ver más'
                    )
                }
                </button>
            </div>
        </div>
    )
}

export default CardServicio