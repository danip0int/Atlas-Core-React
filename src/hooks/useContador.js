import { useState, useEffect } from "react";

function useContador (final) {

    const [contador, setContador] = useState(0)

    useEffect(() => {
    let actual = 0
    let intervaloAnimado = setInterval(() => {
        actual = actual + 1
        setContador(actual)
        if (actual >= final) {
            clearInterval(intervaloAnimado)
        }
    }, 3000/final)
    
    return () => clearInterval(intervaloAnimado)
}, [])
return contador
}


export default useContador