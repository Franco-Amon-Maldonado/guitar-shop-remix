import { useLoaderData } from "@remix-run/react";
import { getPosts } from "~/api/posts.server";
import ListadoPosts from "~/components/listado-posts";
import styles from '../styles/blog.css'


export async function loader(){
    const posts = await getPosts()
    return posts.data
}

export function meta() {
    return (
        {
            title: 'Guitar Shop - Blog',
            description: 'Blog de guitarras'
        }
    )
}

export function links(){
    return [
        {
            rel: 'stylesheet',
            href: styles
        }
    ]
}

function Blog() {
    const posts = useLoaderData()

    return ( 

        
        <main className="contenedor">
        
        <ListadoPosts
            posts={posts}
        />

        </main>
      
     );
}

export default Blog;