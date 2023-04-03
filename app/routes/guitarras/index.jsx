import { useLoaderData} from "@remix-run/react";
import { getGuitarras } from "~/api/guitarras.server";
import ListadoGuitarras from "~/components/listado-guitarras";


export function meta(){
    return (
        {
            title: 'Guitar Shop - Tienda',
            description: 'Nuestra tienda de guitarras'
        }
    )
}


export async function loader(){
    const guitarras = await getGuitarras()
    return guitarras.data
}

function Tienda() {
    const guitarras = useLoaderData();
    
    return ( 

            <ListadoGuitarras
                guitarras={guitarras}
            />
       
     );
}

export default Tienda;