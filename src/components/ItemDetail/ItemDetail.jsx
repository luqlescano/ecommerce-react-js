import ItemCount from "../ItemCount/ItemCount"

const ItemDetail = ({producto}) => {
  if (!producto) {
    return <p>Producto no encontrado...</p>;
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
            <ItemCount stock={producto.stock} />
        </div>
    </div>
  )
}
export default ItemDetail