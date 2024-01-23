import { createContext, useState } from "react"

const CartContext = createContext()

const CartProvider = ({children}) => {
    const [carrito, setCarrito] = useState([])

    const agregarProducto = (producto) => {
        const condicion = estaEnElCarrito(producto.id)

        if (condicion) {
            const productosModificados = carrito.map((productoCarrito) => {
                if (productoCarrito.id === producto.id) {
                    return {
                        ...productoCarrito,
                        cantidad: productoCarrito.cantidad + producto.cantidad
                    }
                } else {
                    return productoCarrito
                }
            })

            setCarrito(productosModificados)
        } else {
            setCarrito([...carrito, producto])
        }
    }

    const estaEnElCarrito = (idProducto) => {
        return carrito.some((producto) => producto.id === idProducto)
    }

    const totalCantidad = () => {
        return carrito.reduce((total, producto) => total + producto.cantidad, 0)
    }

    const totalPrecio = () => {
        return carrito.reduce((total, producto) => total + producto.cantidad * producto.precio, 0)
    }

    const vaciarCarrito = () => {
        setCarrito([])
    }

    const eliminarProducto = (idProducto) => {
        const productosFiltrados = carrito.filter((producto) => producto.id !== idProducto)

        setCarrito(productosFiltrados)
    }

    return (
        <CartContext.Provider value = {{carrito, agregarProducto, totalCantidad, vaciarCarrito, eliminarProducto, totalPrecio}}>
            {children}
        </CartContext.Provider>
    )
}

export { CartProvider, CartContext }