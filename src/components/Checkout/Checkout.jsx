import { useContext, useState } from "react"
import Form from './Form'
import { CartContext } from '../../context/CartContext'
import { addDoc, collection } from 'firebase/firestore'
import db from '../../db/db'
import { Link } from 'react-router-dom'

const Checkout = () => {
  const [datosForm, setDatosForm] = useState({
    nombre: "",
    telefono: "",
    email: "",
    confirmarEmail: ""
  })
  const [idOrden, setIdOrden] = useState(null)
  const { carrito, totalPrecio, vaciarCarrito } = useContext(CartContext)
  
  const guardarDatosInput = (e) => {
    setDatosForm({ ...datosForm, [e.target.name]: e.target.value })
  }

  const enviarOrden = (e) => {
    e.preventDefault()

    if (datosForm.email === datosForm.confirmarEmail) {
      const orden = {
        comprador: { ...datosForm },
        productos: [...carrito],
        fecha: new Date(),
        total: totalPrecio()
      }

      subirOrden(orden)
    } else {
      alert("El E-mail no coincide")
    }
  }

  const subirOrden = (orden) => {
    const ordenesRef = collection(db, "ordenes")
    addDoc(ordenesRef, orden).then((respuesta) => {
      setIdOrden(respuesta.id)
      vaciarCarrito()
    })
  }

  return (
    <div className="checkout">
      {idOrden ? (
        <div className="orden">
          <p className="orden-generada">Orden generada correctamente.</p>
          <p>Número de orden: {idOrden}</p>
          <button className="btn-volver"><Link to="/">Ver más productos</Link></button>
        </div>
      ) : (
        <Form datosForm={datosForm} guardarDatosInput={guardarDatosInput} enviarOrden={enviarOrden} />
      )}
    </div>
  )
}
export default Checkout