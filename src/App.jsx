import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer'

import './App.css'

function App() {
  return (
    <>
      <div id="app">
        <NavBar/>
        <ItemListContainer slogan={"Soluciones que se imprimen..."} />
      </div>
    </>
  )
}

export default App
