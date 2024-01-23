import { useState, useContext } from "react"
import { Link } from "react-router-dom"
import ItemCount from "../ItemCount/ItemCount"
import { CartContext } from "../../context/CartContext"

const ItemDetail = ({producto}) => {
  if (!producto) {
    return <p>Cargando...</p>;
  }

  const [toggle,setToggle] = useState(false)
  const { agregarProducto } = useContext(CartContext)

  const agregarAlCarrito = (contador) => {
    const productoNuevo = {...producto, cantidad: contador}
    agregarProducto(productoNuevo)
    setToggle(true)
  }
  
  return (
    <div className="itemdetail">
        <div className="itemdetail-img">
            <img src={producto.imagen} alt={producto.nombre} title={producto.nombre} />
        </div>
        <div className="itemdetail-info">
            <h3>{producto.nombre}</h3>
            <p className="descripcion">{producto.descripcion.titulo}</p>
            <p className="descripcion">{producto.descripcion.medida}</p>
            <p className="descripcion">{producto.descripcion.ai}</p>
            <p className="descripcion">{producto.descripcion.cantidadImpresa}</p>
            <p className="precio">AR${producto.precio}</p>
            <p className="stock">Stock: {producto.stock}</p>
            {toggle ? (
              <div className="btn-toggle">
                <button className="btn-ir-al-carrito"><Link to="/carrito">Ir al carrito</Link></button>
                <button className="btn-volver"><Link to="/">Seguir comprando</Link></button>
              </div>
            ) : (
              <ItemCount stock={producto.stock} agregarAlCarrito={agregarAlCarrito} />
            )}
        </div>
    </div>
  )
}
export default ItemDetail