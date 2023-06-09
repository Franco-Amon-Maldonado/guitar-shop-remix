import { useLoaderData, useNavigate, useOutletContext } from "@remix-run/react";
import { useState } from "react";
import Swal from 'sweetalert2'

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
    const {agregarCarrito} = useOutletContext()
    const [cantidad, setCantidad] = useState(0)
    const navegation = useNavigate()
    const guitarra = useLoaderData()
    const {nombre, descripcion, imagen, precio} = guitarra.data[0].attributes;
    
    const handleSubmit = e =>{
        e.preventDefault()
        if(cantidad < 1){
            Swal.fire(
                'Error',
                'Debes seleccionar una cantidad primero',
                'error'
              )
            return
        }


        const guitarraSeleccionada = {
            id: guitarra.data[0].id,
            imagen:imagen.data.attributes.url,
            nombre,
            precio,
            cantidad 
        }

        agregarCarrito(guitarraSeleccionada)
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Agregado al carrito éxitosamente',
            showConfirmButton: false,
            timer: 1500
          })
        
    }

    return ( 
        <div className="guitarra">
            <img className="imagen" src={imagen.data.attributes.url} alt={`Imagen de la guitarra ${nombre}`} />

            <div className="contenido">
                <h3>{nombre}</h3>
                <p className="descripcion">{descripcion}</p>
                <p className="precio">${precio}</p>
               
            <form onSubmit={handleSubmit} className="formulario">
                <label htmlFor="cantidad">Cantidad</label>

                <select  id="cantidad" onChange={e => setCantidad(parseInt(e.target.value))}>
                    <option value="0">--Seleccione--</option>
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