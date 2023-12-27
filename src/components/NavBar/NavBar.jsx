import dubieLogo from '../../assets/img/logo-imprenta-dubie-blanco-1877x597.png'
import { Link } from 'react-router-dom'
import CartWidget from './CartWidget'

const NavBar = () => {
  return (
    <div id="navbar">
        <div className="brand">
          <Link to="/">
            <img src={dubieLogo} className="logo" alt="Logo Imprenta DUBIÉ" />
          </Link>
          <h1 className="brandname">Imprenta DUBIÉ</h1>
        </div>
        <div className="menu">
          <ul>
            <li>
              <Link to="/categoria/impresion-laser-color">Impresión Laser Color</Link>
            </li>
            <li>
              <Link to="/categoria/impresion-para-sublimar">Impresión para Sublimar</Link>
            </li>
          </ul>
        </div>
        <div className="cart">
          <CartWidget/>
        </div>
    </div>
  )
}

export default NavBar