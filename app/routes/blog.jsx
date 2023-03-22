import { useLoaderData } from "@remix-run/react";
import { getPots } from "~/api/posts.server";
import Post from "~/components/post";
import styles from '../styles/blog.css'


export async function loader(){
    const posts = await getPots()
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
            <h2 className="heading">Blog</h2>
            <div className="blog">
                {posts.map(post =>(
                    <Post
                        key={post.id}
                        post={post.attributes}
                    />
                ))}
                    
            </div>
        </main>
     );
}

export default Blog;