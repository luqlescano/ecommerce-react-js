import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { collection, getDocs, query, where } from "firebase/firestore"
import db from "../../db/db"
import ItemList from "../ItemList/ItemList"
import useCargando from "../../hooks/useCargando"

const ItemListContainer = ({slogan}) => {
  const [productos, setProductos] = useState([])
  const {categoria} = useParams()
  const {cargando, mostrarCargando, ocultarCargando, pantallaDeCarga} = useCargando()

  useEffect(() => {
    mostrarCargando()
    
    let consulta
    const productosRef = collection(db, "productos")

    if (categoria) {
      consulta = query(productosRef, where("categoria", "==", categoria))
    } else {
      consulta = productosRef
    }

    getDocs(consulta)
      .then((respuesta) => {
        let productosDb = respuesta.docs.map((producto) => {
          return { id: producto.id, ...producto.data() }
        })
        productosDb.sort((a, b) => a.categoria.localeCompare(b.categoria))
        setProductos(productosDb)
      })
      .catch((error) => console.error(error))
      .finally(() => ocultarCargando())
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