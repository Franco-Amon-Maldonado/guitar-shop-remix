import { Meta, Links, Outlet, Scripts, LiveReload, useCatch, Link} from '@remix-run/react'
import Footer from './components/footer'
import Header from './components/header'
import styles from './styles/index.css'
import normalize from './styles/normalize.css'
import { useState } from 'react'


export function meta(){
    return (
        {
            charset: 'utf-8',
            title: 'Guitar Shop',
            viewport: 'width=device-width,initial-scale=1.0'
        }
    )
}

export function links(){
    return [
        {
            rel: 'stylesheet',
            href: normalize
        },
        {
            rel: 'preconnect',
            href: 'https://fonts.googleapis.com'
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossOrigin: 'true' 
        },
        {
            rel: 'preconnect',
            href: 'https://fonts.googleapis.com/css2?family=Golos+Text:wght@400;700;900&display=swap'
        },
        {
            rel: 'stylesheet',
            href: styles
        }
    ]
}

export default function App(){
    const [carrito, setCarrito] = useState([])

    const agregarCarrito = (guitarra) =>{
        //El metodo some, devuelve true si hay un objeto igual en el state
        if(carrito.some(guitarraState => guitarraState.id === guitarra.id)){
            //Iterar sobre el arreglo, e identificar el elemento duplicado
            const carritoActualizado = carrito.map(guitarraState=>{
                if(guitarraState.id === guitarra.id){
                    //Reescribir la cantidad
                    guitarraState.cantidad = guitarra.cantidad
                }
                return guitarraState
            })
            //Añade al carrito un nuevo objeto
            setCarrito(carritoActualizado)
        }else{
            //Registro uevo, agregar al carrito
            setCarrito([...carrito, guitarra])
        }
    }

    return (
        <Document>
            <Outlet
                context={{
                    agregarCarrito,
                    carrito
                }}
            />
        </Document>
    )
}



function Document({children}){
    return (
        <html lang="en">
        <head>
            <Meta/>
            <Links/>
        </head>
        <body>
            <Header/>
            {children}
            <Footer/>
            <Scripts/>
            <LiveReload/>
        </body>
        </html>
    )
}

/**Manejo de errores */
export function CatchBoundary() {
    const error = useCatch()
    return(
        <Document>
            <p className="error">{error.status} {error.statusText}</p>
            <Link className="enlace" to='/'>Volver</Link>
        </Document>
    )
}

export function ErrorBoundary({error}){
    return(
        <Document>
            <p className="error">{error.status} {error.statusText}</p>
            <Link className="enlace" to='/'>Volver</Link>
        </Document>
    )
}