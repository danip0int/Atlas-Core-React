import CarritoProvider from './context/CarritoContext.jsx'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import './scss/main.scss'
import 'bootstrap/dist/css/bootstrap.min.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <CarritoProvider>
    <App />
    </CarritoProvider>
    </BrowserRouter>
  </StrictMode>,
)
