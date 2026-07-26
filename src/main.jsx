import CarritoProvider from './context/CarritoContext.jsx'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './scss/main.scss'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <CarritoProvider>
    <App />
    </CarritoProvider>
    </BrowserRouter>
  </StrictMode>,
)
