import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Error from './components/Error/Error'
import { CartProvider } from './context/CartContext'
import Carrito from './components/Carrito/Carrito'
import Checkout from './components/Checkout/Checkout'

import './App.css'

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <div id="app">
          <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer slogan={"Soluciones que se imprimen..."} />} />
            <Route path='/categoria/:categoria' element={<ItemListContainer slogan={"Soluciones que se imprimen..."} />} />
            <Route path='/detalle/:id' element={<ItemDetailContainer />} />
            <Route path='/carrito' element={<Carrito />} />
            <Route path='/checkout' element={<Checkout />} />
            <Route path='*' element={<Error />} />
          </Routes>
        </div>
      </CartProvider>
    </BrowserRouter>
  )
}

export default App
