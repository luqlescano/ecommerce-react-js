import { useState } from "react"

const ItemCount = ({ stock, agregarAlCarrito }) => {
    const [contador, setContador] = useState(1)

    const sumar = () => {
        if(contador < stock) {
            setContador(contador + 1)
        }
    }

    const restar = () => {
        if(contador > 1) {
            setContador(contador - 1)
        }
    }

    return (
    <div id="itemcount">
        <button className={contador === 1 ? "btn-apagado" : "btn-restar"} onClick={restar}>-</button>
        <p>{contador}</p>
        <button className={contador === stock ? "btn-apagado" : "btn-sumar"} onClick={sumar}>+</button>
        <button className="btn-agregar-al-carrito" onClick={() => agregarAlCarrito(contador)}>Agregar al carrito</button>
    </div>
  )
}
export default ItemCount