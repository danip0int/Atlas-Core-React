
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Entrenamiento from "./pages/Entrenamiento";
import Instalaciones from "./pages/Instalaciones";
import Membresia from "./pages/Membresia";
import Contacto from "./pages/Contacto";


function App() {
  return (
    <div>
      <h1>Atlas Core</h1>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/entrenamiento" element={<Entrenamiento/>}/>
        <Route path="/instalaciones" element={<Instalaciones/>}/>
        <Route path="/membresia" element={<Membresia/>}/>
        <Route path="/contacto" element={<Contacto/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App