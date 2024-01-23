import { useContext } from "react"
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'
import { FaTrashAlt } from 'react-icons/fa'

const Carrito = () => {
  const { carrito, vaciarCarrito, eliminarProducto, totalPrecio } = useContext(CartContext)

  if (carrito.length === 0) {
    return (
      <div className="carrito-vacio">
        <p>El carrito esta vacio...</p>
        <Link to="/"><button className="btn-volver">Volver al inicio</button></Link>
      </div>
    )
  }
  
  return (
    <div className="contenedor-carrito">
      <div className="carrito">
        <ul className="productodetail">
          {carrito.map((producto) => (
            <li key={producto.id}>
              <img src={producto.imagen} alt={producto.nombre} />
              <p><span className="productodetail-nombre">Producto:</span><br></br>{producto.nombre}</p>
              <p><span className="productodetail-nombre">Cantidad:</span><br></br>{producto.cantidad}</p>
              <p><span className="productodetail-nombre">Precio:</span><br></br>${producto.precio}</p>
              <div className="productodetail-icono">
                <FaTrashAlt className="eliminar-producto" onClick={() => eliminarProducto(producto.id)} />
              </div>
            </li>
          ))}
        </ul>
        <p className="carritodetail">Total a pagar: ${totalPrecio()}</p>
        <button className="btn-vaciar-carrito" onClick={vaciarCarrito}>
          <p>Vaciar carrito</p>
          <FaTrashAlt className="icono-vaciar-carrito" />
        </button>
        <button className="btn-finalizar-compra"><Link to="/checkout">Finalizar compra</Link></button>
      </div>
    </div>
  )
}
export default Carrito