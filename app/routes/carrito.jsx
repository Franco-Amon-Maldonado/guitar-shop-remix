import { useOutletContext } from '@remix-run/react'
import { useEffect, useState } from 'react'
import styles from '~/styles/carrito.css'



export function meta(){
    return {
        title: 'Guitar Shop - Carrito de compras',
        description: `Guitarras, venta de guitarras, carrito de compras guitarras` 
    }
}

export function links(){
    return [
        {
            rel: 'stylesheet',
            href:styles
        }
    ]
}

function Carrito() {
    const [total, setTotal] = useState(0)
    const {carrito, actualizarCantidad,eliminarGuitarra} = useOutletContext()

    useEffect(() => {
        const calcularTotal = carrito.reduce((total, producto) => total + (producto.cantidad*producto.precio),0)
        setTotal(calcularTotal)
    },[carrito])  

    return ( 
      <main className="contenedor">
        <h1 className="heading">
            Carrito de compras
        </h1>

        <div className="contenido">
            <div className="carrito">
                <h2>Articulos</h2>
                {carrito.length === 0 ? 'Carrito Vacio' : (
                    carrito?.map( producto => (
                        <div key={producto.id} className="producto">
                            <div>
                                <img src={producto.imagen} alt="imagen de guitarra" />
                                
                            </div>
                            <div className='informacion'>
                                <p className="nombre">{producto.nombre}</p>
                                <div className='precio-final'>
                                    <p>Cantidad:</p>
                                    <select value={producto.cantidad} className="cantidad" onChange={e => actualizarCantidad({
                                        cantidad: +e.target.value,
                                        id: producto.id
                                    })}>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                    </select>
                                    <p className="precio">Precio c/u: $<span>{producto.precio}</span></p>
                                    <p className="subtotal">Subtotal: $<span>{producto.precio*producto.cantidad}</span></p>
                                </div>  
                            </div>
                            <button type="button" className="btn_eliminar" onClick={() => eliminarGuitarra(producto.id)}>
                                    X
                            </button>
                        </div>
                    ))
                )}
            </div>

            <aside className="resumen">
                <h3>Resumen Pedido</h3>
                <p>Total a pagar: ${total}</p>
            </aside>
        </div>

      
      </main>
     )
}

export default Carrito;