import { Link } from "@remix-run/react";
import { formatearFecha } from "~/utils/helpers";


function Post({post}) {
    const {titulo, contenido, imagen, publishedAt, url} = post;
   
    return (
       <article className="post">
            <img src={imagen.data.attributes.formats.small.url} alt="Imagen del blog" />
            
            <div className="contenido">
                <h3 className="titulo-post">{titulo}</h3>
                <p className="fecha">{formatearFecha(publishedAt)}</p>
                <p className="resumen">{contenido}</p>
                <Link className="enlace" to={`/posts/${url}`}>Leer post</Link>
            </div>
       </article>
     );
}

export default Post;