import "./App.css"
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Footer from './componentes/Footer/Footer'
import Inicio from './componentes/Inicio/Inicio'
import NavBar from './componentes/NavBar/NavBar'
import Informacion from './componentes/Informacion/Informacion'
import WspButton from './componentes/Wsp/WspButton'
import Institucional from './componentes/Institucional/Institucional'
import { CartProvider } from './Context/CartContext'
import Conciertos from './componentes/Conciertos/Conciertos'
import Repertorio from './componentes/Repertorio/Repertorio'
import CantoLirico from './componentes/CantoLirico/CantoLirico'


const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <CartProvider>
          <NavBar></NavBar>
          <Routes>
            <Route path='/' element={<Inicio />} />
            <Route path='/informacion' element={<Informacion />} />
            <Route path='/institucional' element={<Institucional />} />
            <Route path='/Conciertos' element={<Conciertos />} />
            <Route path='/Repertorio' element={<Repertorio />} />
            <Route path='/CantoLirico' element={<CantoLirico />} />
            <Route path='*' element={<Navigate to="/" />} />
          </Routes>
          <Footer></Footer>
          <WspButton></WspButton>
        </CartProvider>

      </BrowserRouter>
    </div>
  )
}

export default App
