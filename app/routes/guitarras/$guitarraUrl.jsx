import { useLoaderData, useNavigate } from "@remix-run/react";
import { getGuitarra } from "~/api/guitarras.server";


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
        <div className="guitarra">
            <img className="imagen" src={imagen.data.attributes.url} alt={`Imagen de la guitarra ${nombre}`} />

            <div className="contenido">
                <h3>{nombre}</h3>
                <p className="descripcion">{descripcion}</p>
                <p className="precio">${precio}</p>
               
            <form className="formulario">
                <label htmlFor="cantidad">Cantidad</label>

                <select  id="cantidad">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>

                <input type="submit" className="boton-carrito" value='Añadir al carrito'/>
               
            </form>

            <button className="boton-volver" onClick={()=>navegation(-1)}>Volver</button>
               
            </div>

            
        </div>
     )
}

export default Guitarra;