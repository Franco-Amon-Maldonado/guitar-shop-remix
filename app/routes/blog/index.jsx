import { useLoaderData } from "@remix-run/react";
import { getPosts } from "~/api/posts.server";
import ListadoPosts from "~/components/listado-posts";


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


function Blog() {
    const posts = useLoaderData()

    return ( 

        
        <ListadoPosts
            posts={posts}
        />

      
     );
}

export default Blog;