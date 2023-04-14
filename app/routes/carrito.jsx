import { useOutletContext } from '@remix-run/react'
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
    const {carrito} = useOutletContext()

    return ( 
      <main className="contenedor">
        <h1 className="heading">
            Carrito de compras
        </h1>

        <div className="contenido">
            <div className="carrito">
                <h2>Articulos</h2>
                {carrito.length === 0 ? 'Carrito Vacio' : (
                    carrito.map( producto => (
                        <div key={producto.id} className="producto">
                            <div>
                                <img src={producto.imagen} alt="imagen de guitarra" />
                            </div>
                            <div className='informacion'>
                                <p className="nombre">{producto.nombre}</p>
                                <div className='precio-final'>
                                    <p className="precio">Precio c/u: $<span>{producto.precio}</span></p>
                                    <p className="subtotal">Subtotal: $<span>{producto.precio*producto.cantidad}</span></p>
                                </div>  
                            </div>
                            
                        </div>
                    ))
                )}
            </div>

            <aside className="resumen">
                <h3>Resumen Pedido</h3>
                <p>Total a pagar: $</p>
            </aside>
        </div>

      
      </main>
     )
}

export default Carrito;