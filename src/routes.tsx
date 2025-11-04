import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Loja from './pages/Loja'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/loja" element={<Loja />} />
  </Routes>
)

export default Rotas
