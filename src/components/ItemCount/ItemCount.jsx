import { useState } from "react"

const ItemCount = ({stock}) => {
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
        <button className="btn-restar" onClick={restar}>-</button>
        <p>{contador}</p>
        <button className="btn-sumar" onClick={sumar}>+</button>
        <button className="btn-agregar-al-carrito">Agregar al carrito</button>
    </div>
  )
}
export default ItemCount