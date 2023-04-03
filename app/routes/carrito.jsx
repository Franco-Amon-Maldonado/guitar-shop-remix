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
    return ( 
      <main className="contenedor">
        <h1 className="heading">
            Carrito de compras
        </h1>

        <div className="contenido">
            <div className="carrito">
                <h2>Articulos</h2>
            </div>

            <aside className="resumen">
                <h3>Resumen Pedido</h3>
                <p>Total a pagar</p>
            </aside>
        </div>

      
      </main>
     )
}

export default Carrito;