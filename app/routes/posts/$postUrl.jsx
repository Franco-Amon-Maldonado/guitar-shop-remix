import { useLoaderData, useNavigate } from "react-router";
import { getPost } from "~/api/posts.server";
import { formatearFecha } from "~/utils/helpers";
import styles from "~/styles/blog.css"
import { Link } from "@remix-run/react";



export async function  loader({params}){
    const {postUrl} = params
    const post = await getPost(postUrl)

    
    if(post.data.length === 0){
        throw new Response ('',{
            status:404,
            statusText: 'Post no encontrado'
        })
    }


    return post

    
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
            title: 'Guitar Shop - Blog no encontrado',
            description: `Post, venta de guitarras, blog no encontrada` 
        }
    }

    return{
        title: `Guitar Shop - ${data.data[0].attributes.titulo}`,
        description: `Posts, venta de guitarras, guitarra ${data.data[0].attributes.titulo}` 
    }
}

function Pots() {

    const post = useLoaderData()
    const navegation = useNavigate()

    const {titulo, contenido, imagen, publishedAt} = post.data[0].attributes

    return ( 
    
        <article className="contenedor post">

        <img src={imagen.data.attributes.url} alt="Imagen del blog" />
            
            <div className="contenido">
                <h3 className="titulo-post">{titulo}</h3>
                <p className="fecha">{formatearFecha(publishedAt)}</p>
                <p className="texto">{contenido}</p>
                <Link className="boton-volver" onClick={()=>navegation(-1)}>Volver</Link>
            </div>

        </article>
    );
}

export default Pots;