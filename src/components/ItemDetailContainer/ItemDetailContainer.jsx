import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import obtenerProductos from "../utils/data"
import ItemDetail from "../ItemDetail/ItemDetail"

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState([])
    const {id} = useParams()

    useEffect(() => {
        obtenerProductos
            .then((respuesta) => {
                const productoEncontrado = respuesta.find((prod) => prod.id === id)
                setProducto(productoEncontrado)
            })
            .catch((error) => {
                console.error("Error al obtener productos:", error);
              });
    }, [id])
    return (
    <div className="itemdetailcontainer">
        <ItemDetail producto={producto} />
    </div>
  )
}
export default ItemDetailContainer