import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import obtenerProductos from "../utils/data"
import ItemList from "../ItemList/ItemList"
import useCargando from "../../hooks/useCargando"

const ItemListContainer = ({slogan}) => {
  const [productos, setProductos] = useState([])
  const {categoria} = useParams()
  const {cargando, mostrarCargando, ocultarCargando, pantallaDeCarga} = useCargando()

  useEffect(() => {
    mostrarCargando()
    
    obtenerProductos
      .then((respuesta) => {
        if(categoria) {
          const productosFiltrados = respuesta.filter((producto) => producto.categoria === categoria)
          setProductos(productosFiltrados)
        } else {
            setProductos(respuesta)
        }
      })
      .catch((error) => {
        console.error("Error al obtener productos:", error);
      })
      .finally(() => {
        ocultarCargando()
      })
  }, [categoria])

  return (
      <div id="itemlistcontainer">
          <p>{slogan}</p>
          {cargando ? (
            pantallaDeCarga
          ) : (
            <div className="itemlistcontainer">
              <ItemList productos={productos} />
            </div>
          )}
      </div>
  )
}
export default ItemListContainer