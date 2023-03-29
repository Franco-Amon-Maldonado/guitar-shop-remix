import { useLoaderData } from "@remix-run/react";
import { getGuitarras } from "~/api/guitarras.server";
import { getPots } from "~/api/posts.server";
import ListadoGuitarras from "~/components/listado-guitarras";

export function meta(){

}

export function links(){
    
}

export async function loader(){

    const [guitarras, posts] = await Promise.all([
        getGuitarras(),
        getPots()
    ])

    //Esto de abajo se reemplazo por lo de Promise.all
    // const guitarras = await getGuitarras();
    // const posts = await getPots();

    return {guitarras: guitarras.data, posts: posts.data}
}




function Index() {
    const {guitarras, posts} = useLoaderData()
    console.log(guitarras)
    return ( 
        <>
        <main className="contenedor">
            <ListadoGuitarras
                guitarras={guitarras}
            />
        </main>
        
        </>
    );
}

export default Index;