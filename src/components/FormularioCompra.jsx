import { useState, useContext } from "react"
import { CarritoContext } from "../context/CarritoContext"
import { use } from "react"


function FormularioCompra({onConfirmar}) {
const [nombre, setNombre] = useState('')
const [apellido, setApellido] = useState('')
const [dni, setDni] = useState('')
const [email, setEmail] = useState('')
const [telefono, setTelefono] = useState('')
const [direccion, setDireccion] = useState('')
const [metodoPago, setMetodoPago] = useState('')
const [errores, setErrores] = useState({})
const {vaciarCarrito} = useContext(CarritoContext)

const validarMembresia = () => {
    const nuevosErrores = {}
    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    if (!nombre) nuevosErrores.nombre = 'El nombre es obligatorio'
    if (!apellido) nuevosErrores.apellido = 'El apellido es obligatorio'
    if (!dni) nuevosErrores.dni = 'El DNI es obligatorio'
    if (!email || !emailValido) nuevosErrores.email = 'El email es obligatorio'
    if (!telefono) nuevosErrores.telefono = 'El teléfono es obligatorio'
    if (!direccion) nuevosErrores.direccion = 'La dirección es obligatorio'
    if (!metodoPago) nuevosErrores.metodoPago = 'Seleccione un método de pago'
    return nuevosErrores
}

function handleSubmit (e){
    e.preventDefault()
    const erroresEncontrados = validarMembresia()

    if(Object.keys(erroresEncontrados).length > 0){
        setErrores(erroresEncontrados)
    } else {
        onConfirmar({nombre, email})
        vaciarCarrito()
    }
}

    return (
        <>
        <form onSubmit={handleSubmit}>
    <h2>Completá tus datos</h2>
    <label>Nombre</label>
    <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} placeholder="Nombre" />
    {errores.nombre && <p>{errores.nombre}</p>}
    <label>Apellido</label>
    <input type="text" value={apellido} onChange={(e) => setApellido(e.target.value)} placeholder="Apellido" />
    {errores.apellido && <p>{errores.apellido}</p>}
    <label>D.N.I</label>
    <input type="text" value={dni} onChange={(e) => setDni(e.target.value)} placeholder="DNI" maxLength={8}/>
    {errores.dni && <p>{errores.dni}</p>}
    <label>Email</label>
    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
    {errores.email && <p>{errores.email}</p>}
    <label>Dirección</label>
    <input type="text" value={direccion} onChange={(e) => setDireccion(e.target.value)} placeholder="Dirección" />
    {errores.direccion && <p>{errores.direccion}</p>}
    <label>Teléfono</label>
    <input type="tel" value={telefono} onChange={(e) => setTelefono(e.target.value)} placeholder="Teléfono" maxLength={12}/>
    {errores.telefono && <p>{errores.telefono}</p>}
    <label><strong>Método de pago</strong></label>
    <select defaultValue="" value={metodoPago} onChange={(e) => setMetodoPago(e.target.value)} >
        <option value="" disabled>Seleccioná un método</option>
        <option value="credito">Tarjeta de Crédito</option>
        <option value="debito">Tarjeta de Débito</option>
        <option value="transferencia">Transferencia bancaria</option>
    </select>
    {(metodoPago === "credito" || metodoPago === "debito") && (
            <div>
                <label>Número de tarjeta</label>
                <input type="text" placeholder="XXXX XXXX XXXX XXXX" maxLength={19} />
                <label>Titular de la tarjeta</label>
                <input type="text" placeholder="Nombre como figura en la tarjeta" />
                <label>Vencimiento</label>
                <input type="text" placeholder="MM/AA" />
                <label>Domicilio</label>
                <input type="text" placeholder="Calle y número" />
            </div>
    )}
    {metodoPago === "transferencia" && (
  <div>
  <p>CBU: 0000003100012345678901</p>
  <p>Alias: ATLAS.CORE.GYM</p>
</div>
)}
        {errores.metodoPago && <p>{errores.metodoPago}</p>}
        <button type="submit" className="btn-primary">Confirmar compra</button>
</form>
        </>
    )
    
}

export default FormularioCompra