import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Pokedex from './pages/Pokedex'
import PokedexById from './pages/PokedexById'
import ProtectedRoutes from './pages/ProtectedRoutes'
import './App.css'
import Footer from './components/home/Footer'

function App() {

  return (

    <div className="App">
      <Routes>
        {/* Ruta no protegida */}
        <Route path="/" element={<Home />} />
        {/* Rutas protegidas */}
        <Route element={<ProtectedRoutes />}>
          <Route path="/pokedex" element={<Pokedex />} />
          <Route path="/pokedex/:id" element={<PokedexById />} />
        </Route>
      </Routes>
      <Footer />
    </div>

  )
}

export default App
