import { useLoaderData, useNavigate } from "react-router";
import { getGuitarra } from "~/api/guitarras.server";
import styles from '../../styles/guitarras.css';


export async function loader({params}){
    const {guitarraUrl} = params
    const guitarra = await getGuitarra(guitarraUrl)

    if(guitarra.data.length === 0){
        throw new Response ('',{
            status:404,
            statusText: 'Guitarra No encontrada'
        })
    }

    return guitarra
}


export function links(){
    return [
        {
            rel: 'stylesheet',
            href: styles
        }
    ]
}

export function meta({data}){

    if(!data){
        return{
            title: 'Guitar Shop - Guitarra No Encontrada',
            description: `Guitarras, venta de guitarras, guitarra no encontrada` 
        }
    }

    return{
        title: `Guitar Shop - ${data.data[0].attributes.nombre}`,
        description: `Guitarras, venta de guitarras, guitarra ${data.data[0].attributes.nombre}` 
    }
}



function Guitarra() {
    const navegation = useNavigate()
    const guitarra = useLoaderData()
    const {nombre, descripcion, imagen, precio} = guitarra.data[0].attributes;
    
    return ( 
        <main className="contenedor guitarra">
            <img className="imagen" src={imagen.data.attributes.url} alt={`Imagen de la guitarra ${nombre}`} />

            <div className="contenido">
                <h3>{nombre}</h3>
                <p className="descripcion">{descripcion}</p>
                <p className="precio">${precio}</p>
                <button className="boton-volver" onClick={()=>navegation(-1)}>Volver</button>
            </div>

            
        </main>
     )
}

export default Guitarra;