import { Outlet, useOutletContext } from "@remix-run/react";
import styles from '../styles/guitarras.css'


export function links(){
    return [
        {
            rel: 'stylesheet',
            href:styles
        },
        {
            rel: 'stylesheet',
            href:"sweetalert2.min.css"
        }
    ]
}

function Tienda() {

    return ( 
        <main className="contenedor">
            <Outlet context={useOutletContext()}/>
        </main>
     );
}

export default Tienda;