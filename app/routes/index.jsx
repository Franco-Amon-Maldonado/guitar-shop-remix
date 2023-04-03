import { useLoaderData } from "@remix-run/react";
import { getGuitarras } from "~/api/guitarras.server";
import { getPosts } from "~/api/posts.server";
import { getCursos } from "~/api/cursos.server";
import ListadoGuitarras from "~/components/listado-guitarras";
import ListadoPosts from "~/components/listado-posts";
import stylesGuitarras from '../styles/guitarras.css'
import stylesPosts from '../styles/blog.css'
import stylesCurso from '../styles/curso.css'
import Curso from "~/components/curso";

export function meta(){

}

export function links(){
    return [
        {
            rel: 'stylesheet',
            href: stylesGuitarras
        },
        {
            rel: 'stylesheet',
            href: stylesPosts
        },
        {
            rel: 'stylesheet',
            href: stylesCurso
        }
    ]
}

export async function loader(){

    const [guitarras, posts, cursos] = await Promise.all([
        getGuitarras(),
        getPosts(),
        getCursos()
    ])


    //Esto de abajo se reemplazo por lo de Promise.all
    // const guitarras = await getGuitarras();
    // const posts = await getPots();

    return {guitarras: guitarras.data, 
            posts: posts.data,
            cursos: cursos.data
        }
}




function Index() {
    const {guitarras, posts, cursos} = useLoaderData()
    
    return ( 
        <>
        <main className="contenedor">
            <ListadoGuitarras
                guitarras={guitarras}
            />
        </main>

        <Curso
            cursos={cursos.attributes}
        />

        <section className="contenedor">
            <ListadoPosts
                 posts={posts}
            />
        </section>
        
        </>
    );
}

export default Index;