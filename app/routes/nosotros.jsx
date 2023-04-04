
import Imagen from '../../public/img/nosotros.jpg';
import styles from '../styles/nosotros.css';


export function meta() {
    return (
        {
            title: 'Guitar Shop - Nosotros',
            description: 'Ventas de guitarras'
        }
    )
}

export function links(){
    return [
        {
            rel: 'stylesheet',
            href: styles
        },
        {   //Agrega una imagen, video o js y le informa al navegador que tan pronto cargue la informacion carga la imagen que puede ser muy pesada 
            rel:'preload',
            href: Imagen,
            as:'image'
        }
    ]
}

function Nosostros() {
    
    return (
        <main className="contenedor nosotros">
            <h2 className="heading">Nosotros</h2>

            <div className="contenido">
                <img src={Imagen} alt="imagenNosotros" />

                <div>
                    <p>Nam sem ex, mattis ac ligula quis, rhoncus fermentum ligula. Sed auctor magna volutpat, tincidunt    tellus vel, rhoncus ex. Morbi ac elit metus. Morbi vel tincidunt leo, quis lobortis ante. Maecenas pretium     velit odio, ac luctus mauris sollicitudin in. Sed posuere lectus a mauris finibus, id dignissim lectus  egestas. Morbi consectetur risus vel magna tempus rhoncus eget vitae ligula. Maecenas velit est, varius  eget euismod sit amet, finibus ac ipsum. Integer in turpis quis sem viverra gravida.
                    Fusce ac risus turpis. Curabitur lacinia feugiat mi vitae posuere. Nam ligula libero, fermentum iaccumsan   sed, elementum nec enim. Proin non libero vel purus dignissim pharetra vel vitae est.</p> 

                    <p>Sepharetra, massa   vitae ullamcorper euismod, velit dolor consectetur orci, vel mattis nisi augue vitanulla. Cras tellus     quam, pulvinar eu augue id, sollicitudin pretium eros. Donec ac est laoreet, mollilorem eu, rutrum lacus.   Vestibulum ut porta nisl, non mollis nisl. Aenean sed nisi iaculis, vehiculnulla non, bibendum orci.  Vivamus non gravida libero. Praesent gravida felis nibh, id efficitur nunfeugiat quis</p>
                </div>
            </div>
        </main>
    )
}

export default Nosostros;