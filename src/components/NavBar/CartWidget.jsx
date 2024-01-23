import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import { BsCart } from "react-icons/bs";

const CartWidget = () => {
  const { carrito, totalCantidad } = useContext(CartContext)
  
  return (
    <Link to="/carrito">
      <div id="cartwidget">
          <BsCart />
          {carrito.length !== 0 && <p>{totalCantidad()}</p>}
      </div>
    </Link>
  )
}
export default CartWidget