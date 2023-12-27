import { Link } from "react-router-dom"

const Item = ({producto}) => {
  return (
    <div className="item">
        <img src={producto.imagen} alt={producto.nombre} title={producto.nombre} />
        <h3>{producto.nombre}</h3>
        <p className="precio">AR${producto.precio}</p>
        <p className="stock">Stock: {producto.stock}</p>
        <Link to={`/detalle/${producto.id}`}><button className="btn-detalle">Ver detalle</button></Link>
    </div>
  )
}
export default Item