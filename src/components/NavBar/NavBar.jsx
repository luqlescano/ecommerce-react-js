import dubieLogo from '../../assets/img/logo-imprenta-dubie-blanco-1877x597.png'
import CartWidget from './CartWidget'

const NavBar = () => {
  return (
    <div id="navbar">
        <div className="brand">
          <a href="#">
            <img src={dubieLogo} className="logo" alt="Logo Imprenta DUBIÉ" />
          </a>
          <h1 className="brandname">Imprenta DUBIÉ</h1>
        </div>
        <div className="menu">
          <ul>
            <li><a href="#">Impresión Laser Color</a></li>
            <li><a href="#">Impresión para Sublimar</a></li>
          </ul>
        </div>
        <div className="cart">
          <CartWidget/>
        </div>
    </div>
  )
}

export default NavBar