import { useLoaderData } from "react-router";
import { getGuitarras } from "~/api/guitarras.server";
import Guitarra from "~/components/guitarra";


export function meta(){
    return (
        {
            title: 'Guitar Shop - Tienda',
        }
    )
}

export async function loader(){
    const guitarras = await getGuitarras()
    return guitarras.data
}

function Tienda() {
    const guitarras = useLoaderData();
    
    return ( 
        <main className="contenedor">
            <h2 className="heading">Nuestra coleccion</h2>
            {
                guitarras.length && (
                    <div className="guitarras-grid">
                        {guitarras.map(guitarra =>(
                            <Guitarra 
                                key={guitarra.id}
                                guitarra={guitarra}
                            />
                        ))}
                    </div>
                )
            }
        </main>
     );
}

export default Tienda;