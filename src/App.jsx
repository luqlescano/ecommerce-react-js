import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Error from './components/Error/Error'

import './App.css'

function App() {
  return (
    <BrowserRouter>
      <div id="app">
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer slogan={"Soluciones que se imprimen..."} />} />
          <Route path='/categoria/:categoria' element={<ItemListContainer slogan={"Soluciones que se imprimen..."} />} />
          <Route path='/detalle/:id' element={<ItemDetailContainer />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
